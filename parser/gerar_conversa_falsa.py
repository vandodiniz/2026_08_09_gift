#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Gera um .txt de WhatsApp FALSO só para testar o parser e ver o site preenchido
antes de você exportar a conversa de verdade.

    python3 gerar_conversa_falsa.py            # formato Android
    python3 gerar_conversa_falsa.py --ios      # formato iOS
"""
import argparse
import random
from datetime import datetime, timedelta

FRASES = [
    "bom dia amor ❤️", "boa noite, te amo 😘", "saudade de você", "kkkkkk",
    "você viu isso?", "to indo aí", "chego em 10 min", "eu te amo demais",
    "que dia foi hoje 😭", "vamos jantar fora?", "linda demais essa foto",
    "obrigado por hoje", "que saudade", "amor, esqueci o carregador",
    "olha o que eu achei 😂", "bom dia meu bem", "já acordou?",
    "tô com fome", "hoje foi longo", "quero te ver", "❤️❤️❤️",
    "vamos casar um dia né kkkk", "amor", "boa noite linda ❤️",
    "chegou bem?", "que filme a gente vê?", "te amo",
    "<Mídia oculta>", "https://youtube.com/algo",
]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--ios", action="store_true")
    ap.add_argument("--saida", default="conversa_exemplo.txt")
    args = ap.parse_args()

    random.seed(8)
    inicio = datetime(2024, 9, 8, 9, 0)
    fim = datetime(2026, 8, 15, 23, 0)
    autores = ["Vando", "Amor ❤️"]

    linhas = ["08/09/2024 09:00 - As mensagens e as ligações são criptografadas de ponta a ponta."]
    atual = inicio
    while atual < fim:
        for _ in range(random.randint(4, 40)):
            hora = random.choices(range(24), weights=[1,1,1,1,1,2,4,7,8,8,8,9,9,8,8,9,10,12,14,16,15,12,7,3])[0]
            quando = atual.replace(hour=hora, minute=random.randint(0, 59), second=random.randint(0, 59))
            autor = random.choice(autores)
            texto = random.choice(FRASES)
            if args.ios:
                linhas.append(f"[{quando:%d/%m/%Y, %H:%M:%S}] {autor}: {texto}")
            else:
                linhas.append(f"{quando:%d/%m/%Y %H:%M} - {autor}: {texto}")
        atual += timedelta(days=random.choice([1, 1, 1, 1, 2, 3]))

    # ordena por data para ficar realista
    with open(args.saida, "w", encoding="utf-8") as f:
        f.write("\n".join(linhas))
    print(f"{len(linhas)} linhas gravadas em {args.saida}")


if __name__ == "__main__":
    main()
