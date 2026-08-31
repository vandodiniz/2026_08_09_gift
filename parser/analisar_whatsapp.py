#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
analisar_whatsapp.py
====================

Lê a conversa exportada do WhatsApp (.txt) e gera o arquivo `stats.js`,
que o site consome para montar a retrospectiva.

COMO USAR
---------
    python3 analisar_whatsapp.py conversa.txt

Opções úteis:
    --inicio 2024-09-08     ignora tudo antes dessa data (ex.: antes de vocês namorarem)
    --fim    2026-09-08     ignora tudo depois dessa data
    --saida  ../stats.js    onde gravar o resultado (padrão: ../stats.js)

Não precisa instalar nada — só a biblioteca padrão do Python 3.8+.
Nenhuma mensagem sai do seu computador: o script só lê o arquivo local.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import unicodedata
from collections import Counter, defaultdict
from datetime import date, datetime, timedelta
from pathlib import Path

# --------------------------------------------------------------------------
# 1. RECONHECIMENTO DAS LINHAS
# --------------------------------------------------------------------------
# O WhatsApp exporta em formatos diferentes dependendo do celular e do idioma.
# Estes são os quatro que cobrem praticamente todos os casos em pt-BR:
#
#   Android:  08/09/2024 21:34 - Vando: oi
#   Android:  08/09/2024, 21:34 - Vando: oi
#   iOS:      [08/09/2024 21:34:12] Vando: oi
#   iOS:      [08/09/24, 21:34:12] Vando: oi
#
# Alguns aparelhos ainda enfiam caracteres invisíveis (LTR mark, espaço fino).
# A função `limpar_invisiveis` remove esses caracteres antes de qualquer coisa.

INVISIVEIS = dict.fromkeys(map(ord, "‎‏‪‬⁦⁧⁨⁩﻿"), None)

PADRAO_IOS = re.compile(
    r"^\[(?P<data>\d{1,2}/\d{1,2}/\d{2,4})[,\s]+(?P<hora>\d{1,2}:\d{2}(?::\d{2})?)"
    r"(?:\s*(?P<ampm>[AaPp]\.?[Mm]\.?))?\]\s*(?P<autor>[^:]{1,60}?):\s(?P<texto>.*)$"
)

PADRAO_ANDROID = re.compile(
    r"^(?P<data>\d{1,2}/\d{1,2}/\d{2,4}),?\s+(?P<hora>\d{1,2}:\d{2}(?::\d{2})?)"
    r"(?:\s*(?P<ampm>[AaPp]\.?[Mm]\.?))?\s+-\s+(?P<autor>[^:]{1,60}?):\s(?P<texto>.*)$"
)

# Linhas de sistema (sem "Autor:") que devem ser ignoradas por completo.
PADRAO_SISTEMA = re.compile(
    r"^(?:\[?\d{1,2}/\d{1,2}/\d{2,4})[,\s].*?(?:\]|\s-\s)\s*(?![^:]{1,60}:)"
)

# Espaço fino que o iOS usa antes do AM/PM
NBSP = " "


def limpar_invisiveis(texto: str) -> str:
    return texto.translate(INVISIVEIS).replace(NBSP, " ")


def _parse_datahora(data_str: str, hora_str: str, ampm: str | None) -> datetime | None:
    """Converte '08/09/2024' + '21:34' em datetime. Assume dia/mês/ano (padrão BR)."""
    partes = data_str.split("/")
    if len(partes) != 3:
        return None
    try:
        dia, mes, ano = (int(p) for p in partes)
    except ValueError:
        return None
    if ano < 100:
        ano += 2000
    # Se o "dia" for > 12 o formato é claramente dia/mês. Se ambos forem <= 12
    # confiamos no padrão brasileiro (dia/mês) — que é o que o WhatsApp usa em pt-BR.
    if dia > 31 or mes > 12:
        dia, mes = mes, dia

    hp = hora_str.split(":")
    hora, minuto = int(hp[0]), int(hp[1])
    segundo = int(hp[2]) if len(hp) > 2 else 0
    if ampm:
        marcador = ampm.lower().replace(".", "")
        if marcador == "pm" and hora != 12:
            hora += 12
        elif marcador == "am" and hora == 12:
            hora = 0
    try:
        return datetime(ano, mes, dia, hora, minuto, segundo)
    except ValueError:
        return None


def ler_conversa(caminho: Path) -> list[dict]:
    """Lê o .txt e devolve uma lista de mensagens: {quando, autor, texto}."""
    bruto = caminho.read_text(encoding="utf-8", errors="replace")
    mensagens: list[dict] = []

    for linha_bruta in bruto.splitlines():
        linha = limpar_invisiveis(linha_bruta).rstrip()
        if not linha:
            continue

        m = PADRAO_IOS.match(linha) or PADRAO_ANDROID.match(linha)
        if m:
            quando = _parse_datahora(m.group("data"), m.group("hora"), m.group("ampm"))
            if quando is None:
                continue
            mensagens.append(
                {
                    "quando": quando,
                    "autor": m.group("autor").strip(),
                    "texto": m.group("texto").strip(),
                }
            )
        elif mensagens and not PADRAO_SISTEMA.match(linha):
            # Continuação de uma mensagem de várias linhas.
            mensagens[-1]["texto"] += "\n" + linha

    return mensagens


# --------------------------------------------------------------------------
# 2. FILTROS
# --------------------------------------------------------------------------

MIDIA_PADROES = re.compile(
    r"(mídia oculta|midia oculta|arquivo de mídia oculto|imagem ocultada|"
    r"图片|áudio ocultado|audio ocultado|vídeo omitido|video omitido|"
    r"figurinha omitida|gif omitido|documento omitido|sticker omitted|"
    r"image omitted|video omitted|audio omitted|this message was deleted|"
    r"mensagem apagada|você apagou esta mensagem|essa mensagem foi apagada)",
    re.IGNORECASE,
)

SISTEMA_TEXTOS = re.compile(
    r"(as mensagens e as ligações são criptografadas|"
    r"mensagens e ligações são criptografadas|"
    r"messages and calls are end-to-end encrypted|"
    r"você criou o grupo|criou este grupo|"
    r"chamada de voz|chamada de vídeo perdida|ligação perdida)",
    re.IGNORECASE,
)

URL = re.compile(r"https?://\S+|www\.\S+")


def eh_midia(texto: str) -> bool:
    return bool(MIDIA_PADROES.search(texto))


def eh_sistema(texto: str) -> bool:
    return bool(SISTEMA_TEXTOS.search(texto))


# --------------------------------------------------------------------------
# 3. PALAVRAS E EMOJIS
# --------------------------------------------------------------------------

STOPWORDS = set(
    """
a as o os um uma uns umas de do da dos das em no na nos nas por para pra pro
com sem sob sobre entre até após ante e ou mas porém contudo todavia que se
como quando onde quem qual quais porque pois já ainda também só apenas mais
menos muito muita muitos muitas pouco pouca todo toda todos todas outro outra
outros outras mesmo mesma este esta isto esse essa isso aquele aquela aquilo
eu tu ele ela nós vós eles elas me te lhe nos vos lhes meu minha meus minhas
teu tua seus suas seu sua nosso nossa dele dela deles delas
ser estar ter haver ir vir fazer poder querer dever saber dizer ver dar
é são foi era eram está estão estava estou sou tá ta to tô tava tô né
tem têm tinha temos tenho vai vou vamos foi fui será seria
não sim nao ah oh eita né ne pq q vc vcs tb tbm tbem aí ai pra pro
aqui ali lá la agora hoje ontem amanhã depois antes sempre nunca
bem bom boa então entao assim isso essa esse isto tudo nada
""".split()
)

# Um emoji pode ser uma sequência: base + tom de pele + seletor de variação (FE0F)
# + ZWJ + outro emoji (ex.: 👨‍👩‍👧). O regex abaixo captura a sequência inteira como
# UMA unidade — senão o "❤️" viraria dois "emojis" na contagem.
_EMOJI_BASE = (
    "[\U0001f300-\U0001faff\U00002600-\U000027bf\U0001f000-\U0001f0ff"
    "\U0001f1e6-\U0001f1ff\U00002190-\U000021ff\U00002b00-\U00002bff"
    "\U0000231a-\U0000231b\U000023e9-\U000023fa\U000025aa-\U000025fe]"
)
EMOJI = re.compile(
    _EMOJI_BASE + "[\U0001f3fb-\U0001f3ff]?️?"
    "(?:‍" + _EMOJI_BASE + "[\U0001f3fb-\U0001f3ff]?️?)*",
    flags=re.UNICODE,
)


def normalizar(palavra: str) -> str:
    """Tira acentos para agrupar 'amor'/'amôr' e afins na contagem."""
    return "".join(
        c for c in unicodedata.normalize("NFD", palavra.lower()) if unicodedata.category(c) != "Mn"
    )


def extrair_palavras(texto: str) -> list[str]:
    texto = URL.sub(" ", texto.lower())
    return re.findall(r"[a-zà-öø-ÿ]{2,}", texto)


# Expressões que valem a pena contar de propósito. Edite à vontade!
EXPRESSOES = {
    "te amo": r"\bte\s+amo\b",
    "eu te amo": r"\beu\s+te\s+amo\b",
    "saudade": r"\bsaudades?\b",
    "bom dia": r"\bbom\s+dia\b",
    "boa noite": r"\bboa\s+noite\b",
    "risada (kkk)": r"\bk{3,}\b|\bhaha\w*\b|\brs{2,}\b",
    "amor": r"\bamor\b",
    "linda / lindo": r"\blind[oa]\b",
    "casar": r"\bcasar\b|\bcasamento\b",
    "obrigado / obrigada": r"\bobrigad[oa]\b",
}


# --------------------------------------------------------------------------
# 4. ANÁLISE
# --------------------------------------------------------------------------

DIAS_SEMANA = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]
MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"]


def analisar(mensagens: list[dict]) -> dict:
    if not mensagens:
        raise SystemExit("Nenhuma mensagem reconhecida. Confira o arquivo e o formato do export.")

    autores = [a for a, _ in Counter(m["autor"] for m in mensagens).most_common(2)]

    por_autor = {
        a: {
            "mensagens": 0,
            "palavras": 0,
            "caracteres": 0,
            "midias": 0,
            "emojis": Counter(),
            "palavras_top": Counter(),
        }
        for a in autores
    }

    por_mes: Counter[str] = Counter()
    por_hora = [0] * 24
    por_dia_semana = [0] * 7
    por_dia: Counter[str] = Counter()
    emojis_geral: Counter[str] = Counter()
    palavras_geral: Counter[str] = Counter()
    expressoes = {nome: {a: 0 for a in autores} for nome in EXPRESSOES}
    expressoes_re = {nome: re.compile(p, re.IGNORECASE) for nome, p in EXPRESSOES.items()}

    total_midias = 0
    mensagens_validas = []

    for m in mensagens:
        if eh_sistema(m["texto"]):
            continue
        autor = m["autor"]
        if autor not in por_autor:
            continue  # ignora eventuais terceiros no export

        mensagens_validas.append(m)
        quando: datetime = m["quando"]
        texto = m["texto"]

        por_mes[f"{quando.year}-{quando.month:02d}"] += 1
        por_hora[quando.hour] += 1
        por_dia_semana[quando.weekday()] += 1
        por_dia[quando.date().isoformat()] += 1

        d = por_autor[autor]
        d["mensagens"] += 1

        if eh_midia(texto):
            d["midias"] += 1
            total_midias += 1
            continue

        d["caracteres"] += len(texto)
        palavras = extrair_palavras(texto)
        d["palavras"] += len(palavras)

        for p in palavras:
            pn = normalizar(p)
            if pn not in STOPWORDS and len(pn) > 2:
                d["palavras_top"][p] += 1
                palavras_geral[p] += 1

        for e in EMOJI.findall(texto):
            d["emojis"][e] += 1
            emojis_geral[e] += 1

        for nome, rx in expressoes_re.items():
            n = len(rx.findall(texto))
            if n:
                expressoes[nome][autor] += n

    # ---- métricas derivadas -------------------------------------------------
    primeira = mensagens_validas[0]["quando"]
    ultima = mensagens_validas[-1]["quando"]
    dias_totais = (ultima.date() - primeira.date()).days + 1
    dias_com_conversa = len(por_dia)

    # maior sequência de dias seguidos conversando
    datas = sorted(date.fromisoformat(d) for d in por_dia)
    maior_seq, seq_atual = 1, 1
    seq_fim = datas[0]
    for anterior, atual in zip(datas, datas[1:]):
        if (atual - anterior).days == 1:
            seq_atual += 1
            if seq_atual > maior_seq:
                maior_seq, seq_fim = seq_atual, atual
        else:
            seq_atual = 1
    seq_inicio = seq_fim - timedelta(days=maior_seq - 1)

    dia_recorde, msgs_recorde = por_dia.most_common(1)[0]

    # tempo médio de resposta (só conta trocas com menos de 6 horas de intervalo)
    respostas: dict[str, list[float]] = defaultdict(list)
    for ant, at in zip(mensagens_validas, mensagens_validas[1:]):
        if ant["autor"] != at["autor"]:
            delta = (at["quando"] - ant["quando"]).total_seconds() / 60
            if 0 <= delta <= 360:
                respostas[at["autor"]].append(delta)

    # quem manda a primeira mensagem do dia com mais frequência
    primeiro_do_dia: Counter[str] = Counter()
    visto = set()
    for m in mensagens_validas:
        d = m["quando"].date()
        if d not in visto:
            visto.add(d)
            primeiro_do_dia[m["autor"]] += 1

    # série mensal contínua (meses sem mensagem viram zero, o gráfico fica honesto)
    serie_mensal = []
    cursor = date(primeira.year, primeira.month, 1)
    limite = date(ultima.year, ultima.month, 1)
    while cursor <= limite:
        chave = f"{cursor.year}-{cursor.month:02d}"
        serie_mensal.append(
            {
                "chave": chave,
                "rotulo": f"{MESES[cursor.month - 1]}/{str(cursor.year)[2:]}",
                "total": por_mes.get(chave, 0),
            }
        )
        cursor = date(cursor.year + (cursor.month == 12), (cursor.month % 12) + 1, 1)

    def resumo_autor(a: str) -> dict:
        d = por_autor[a]
        tempos = respostas.get(a, [])
        return {
            "nome": a,
            "mensagens": d["mensagens"],
            "palavras": d["palavras"],
            "caracteres": d["caracteres"],
            "midias": d["midias"],
            "mediaPalavrasPorMensagem": round(d["palavras"] / d["mensagens"], 1) if d["mensagens"] else 0,
            "emojisTop": [{"emoji": e, "n": n} for e, n in d["emojis"].most_common(8)],
            "palavrasTop": [{"palavra": p, "n": n} for p, n in d["palavras_top"].most_common(15)],
            "tempoRespostaMedianaMin": round(sorted(tempos)[len(tempos) // 2], 1) if tempos else None,
            "primeiroDoDia": primeiro_do_dia.get(a, 0),
        }

    total_msgs = sum(por_autor[a]["mensagens"] for a in autores)
    total_palavras = sum(por_autor[a]["palavras"] for a in autores)

    return {
        "gerado": datetime.now().isoformat(timespec="seconds"),
        "periodo": {
            "inicio": primeira.date().isoformat(),
            "fim": ultima.date().isoformat(),
            "diasTotais": dias_totais,
            "diasComConversa": dias_com_conversa,
            "percentualDiasFalando": round(100 * dias_com_conversa / dias_totais),
        },
        "totais": {
            "mensagens": total_msgs,
            "palavras": total_palavras,
            "midias": total_midias,
            "mediaPorDia": round(total_msgs / dias_totais, 1),
            "emojis": sum(emojis_geral.values()),
        },
        "pessoas": [resumo_autor(a) for a in autores],
        "serieMensal": serie_mensal,
        "porHora": [{"hora": h, "total": n} for h, n in enumerate(por_hora)],
        "porDiaSemana": [{"dia": DIAS_SEMANA[i], "total": n} for i, n in enumerate(por_dia_semana)],
        "recordes": {
            "diaRecorde": dia_recorde,
            "mensagensNoDiaRecorde": msgs_recorde,
            "maiorSequenciaDias": maior_seq,
            "sequenciaInicio": seq_inicio.isoformat(),
            "sequenciaFim": seq_fim.isoformat(),
        },
        "emojisTop": [{"emoji": e, "n": n} for e, n in emojis_geral.most_common(10)],
        "palavrasTop": [{"palavra": p, "n": n} for p, n in palavras_geral.most_common(30)],
        "expressoes": [
            {"expressao": nome, "porPessoa": contagem, "total": sum(contagem.values())}
            for nome, contagem in sorted(expressoes.items(), key=lambda kv: -sum(kv[1].values()))
            if sum(contagem.values()) > 0
        ],
    }


# --------------------------------------------------------------------------
# 5. LINHA DE COMANDO
# --------------------------------------------------------------------------


def main() -> None:
    _dir = Path(__file__).resolve().parent
    ap = argparse.ArgumentParser(description="Gera as estatísticas da conversa para o site.")
    ap.add_argument(
        "arquivo", nargs="?",
        type=Path, default=_dir / "conversa.txt",
        help="conversa exportada do WhatsApp (.txt) — padrão: parser/conversa.txt",
    )
    ap.add_argument("--inicio", default="2024-09-08", help="considerar só a partir desta data (AAAA-MM-DD)")
    ap.add_argument("--fim", help="considerar só até esta data (AAAA-MM-DD)")
    ap.add_argument("--saida", type=Path, default=_dir.parent / "stats.js")
    args = ap.parse_args()

    if not args.arquivo.exists():
        sys.exit(f"Arquivo não encontrado: {args.arquivo}")

    mensagens = ler_conversa(args.arquivo)
    print(f"Linhas de mensagem reconhecidas: {len(mensagens)}")

    if args.inicio:
        limite = datetime.fromisoformat(args.inicio)
        mensagens = [m for m in mensagens if m["quando"] >= limite]
    if args.fim:
        limite = datetime.fromisoformat(args.fim) + timedelta(days=1)
        mensagens = [m for m in mensagens if m["quando"] < limite]

    dados = analisar(mensagens)

    args.saida.parent.mkdir(parents=True, exist_ok=True)
    args.saida.write_text(
        "// Gerado automaticamente por parser/analisar_whatsapp.py — não edite à mão.\n"
        "window.STATS = " + json.dumps(dados, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )

    p, t = dados["periodo"], dados["totais"]
    print(f"\n  Período .............. {p['inicio']} → {p['fim']}  ({p['diasTotais']} dias)")
    print(f"  Mensagens ............ {t['mensagens']:,}".replace(",", "."))
    print(f"  Palavras ............. {t['palavras']:,}".replace(",", "."))
    print(f"  Média por dia ........ {t['mediaPorDia']}")
    print(f"  Dias conversando ..... {p['diasComConversa']} ({p['percentualDiasFalando']}%)")
    for pessoa in dados["pessoas"]:
        print(f"  {pessoa['nome']:.<20} {pessoa['mensagens']} mensagens")
    print(f"\nArquivo gravado em: {args.saida}")


if __name__ == "__main__":
    main()
