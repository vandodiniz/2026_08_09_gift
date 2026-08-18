# Nossa história — guia de montagem

Site pronto para os 2 anos, **08/09/2026**. Ele já funciona: abra o `index.html`
com dois cliques e você vai ver o site completo com conteúdo de exemplo.

Seu trabalho é trocar o exemplo pelo que é de verdade.

---

## O que tem em cada arquivo

| Arquivo | Para que serve | Você mexe? |
|---|---|---|
| `index.html` | O site inteiro (visual + código) | não precisa |
| `dados.js` | Textos, datas, momentos, legendas | **sim, é aqui** |
| `stats.js` | Estatísticas do WhatsApp | gerado pelo Python |
| `fotos/` | As imagens | **sim, troque os arquivos** |
| `parser/analisar_whatsapp.py` | Lê a conversa e gera o `stats.js` | você roda |
| `parser/gerar_conversa_falsa.py` | Cria uma conversa fake pra testar | opcional |

---

## Cronograma sugerido (você tem ~3 semanas)

| Quando | O quê | Por quê agora |
|---|---|---|
| **Hoje** | Exportar a conversa do WhatsApp | é o único passo que depende do celular; faça e esqueça |
| **Hoje** | Rodar o parser e ver seus números reais | os números costumam sugerir momentos que você esqueceu |
| Semana 1 | Escolher e recortar as fotos | é o que mais demora |
| Semana 1–2 | Escrever a timeline e a carta | precisa de cabeça fresca, não de véspera |
| Semana 2 | Publicar no Netlify | pra testar o link com calma |
| **05/09** | Abrir no celular e conferir tudo | sobra tempo pra consertar |
| **08/09** | Mandar o link | 🎉 |

O prazo real não é 08/09 — é **05/09**. Trabalhe com essa data.

---

## Passo 1 — Exportar a conversa do WhatsApp

No celular, dentro da conversa com ela:

- **Android**: ⋮ (três pontos) → *Mais* → *Exportar conversa* → **Sem mídia**
- **iPhone**: toque no nome dela no topo → *Exportar conversa* → **Sem mídia**

Escolha **sem mídia** — com mídia gera centenas de MB e o script não precisa
das imagens, só do texto.

Mande o arquivo pra você mesmo (e-mail, Telegram, Drive) e salve na pasta
`parser/` com o nome `conversa.txt`.

> **Sobre privacidade:** o script roda inteiro no seu computador. Nenhuma
> mensagem sai da sua máquina. O `stats.js` que ele gera contém só contagens —
> nenhum texto de mensagem. Confira o arquivo se quiser: é JSON legível.
>
> Se o WhatsApp exportar em dois arquivos (conversas muito longas), junte
> antes com: `cat parte1.txt parte2.txt > conversa.txt`

## Passo 2 — Rodar o parser

Abra o terminal na pasta do projeto:

```bash
python3 parser/analisar_whatsapp.py parser/conversa.txt
```

Ele imprime um resumo e grava o `stats.js`. Não precisa instalar nada — só a
biblioteca padrão do Python 3.8+.

Se o export tiver mensagens de antes de vocês namorarem e você quiser cortar:

```bash
python3 parser/analisar_whatsapp.py parser/conversa.txt --inicio 2024-09-08
```

**Antes disso, se quiser ver o site funcionando sem esperar o export:**

```bash
python3 parser/gerar_conversa_falsa.py --saida parser/fake.txt
python3 parser/analisar_whatsapp.py parser/fake.txt
```

### Se der errado

| Problema | O que fazer |
|---|---|
| `Nenhuma mensagem reconhecida` | Abra o `.txt` e me mande as 3 primeiras linhas — é formato novo, ajusto o regex |
| Aparece o nome errado / um terceiro | O script pega só os 2 nomes mais frequentes; se estiver errado, me avise |
| Os nomes vieram feios ("Amor ❤️ 2") | Edite direto no `stats.js` depois de gerar, no campo `"nome"` |
| Contagem de emoji estranha | Normal em alguns aparelhos; me mande um exemplo |

## Passo 3 — As fotos

Coloque tudo dentro de `fotos/`. Dicas que fazem diferença:

- **Redimensione antes.** Foto de celular tem 4–8 MB; no site, 1600px de largura
  basta. Site pesado demora a abrir no 4G dela.
  Se tiver o ImageMagick: `mogrify -resize 1600x -quality 82 fotos/*.jpg`
- Nomes sem acento e sem espaço: `viagem-natal.jpg`, não `Viagem Natal.jpg`.
- **Uma foto de capa horizontal e bonita** faz metade do trabalho visual.
- 12 a 20 fotos na galeria é o ponto certo. Mais que isso vira álbum, e álbum
  a gente rola rápido.

As fotos coloridas que vieram na pasta são só marcadores — pode apagar todas.

## Passo 4 — Preencher o `dados.js`

Abra no bloco de notas, VS Code, qualquer editor. Está todo comentado em
português. As regras são só três:

1. Texto entre `"aspas"`
2. Vírgula no fim de cada linha
3. Datas no formato `"AAAA-MM-DD"`

Se o site abrir em branco depois de editar, você quebrou a sintaxe. Aperte
**F12** no navegador, aba *Console* — a mensagem vermelha diz a linha.
Quase sempre é uma aspa ou vírgula faltando.

### O que escrever na timeline

O erro comum é escrever bonito e genérico ("foi um dia inesquecível"). O que
emociona é o detalhe específico que só vocês dois sabem: o que ela falou, o
que deu errado, a comida que vocês pediram, a música que estava tocando.

Se travar: abra a galeria de fotos do celular e passe mês a mês. As datas
puxam as memórias sozinhas.

## Passo 5 — Publicar

**Netlify Drop** é o caminho mais rápido — sem conta, sem terminal, sem Git:

1. Entre em <https://app.netlify.com/drop>
2. Arraste a pasta `nossa-historia` inteira pra janela
3. Pronto, o link aparece em segundos

Crie uma conta grátis logo depois pra **poder mudar o endereço** para algo como
`vando-e-ela.netlify.app` (em *Site configuration → Change site name*) e pra o
site não sumir.

Alternativa com Git, se você preferir: GitHub Pages. Crie um repositório
público, suba os arquivos, e ative em *Settings → Pages → Branch: main*.
O endereço fica `seu-usuario.github.io/nome-do-repo`.

> **Vale saber:** um site publicado assim é público — quem tiver o link acessa.
> Se isso te incomodar, três opções: (1) publicar só perto do dia; (2) não usar
> sobrenomes; (3) me pedir uma tela de senha simples na entrada.

## Passo 6 — Conferir antes (dia 05/09)

- [ ] Abrir **no celular**, não só no computador
- [ ] Todas as fotos carregam? Nenhum espaço vazio?
- [ ] O contador de dias mostra o número certo?
- [ ] Os nomes na retrospectiva estão certos?
- [ ] Ler a carta em voz alta — é o teste que pega texto empolado
- [ ] Mandar o link pra um amigo de confiança abrir e dizer se travou algo

---

## Ideias, se sobrar tempo

- **Música**: cole o link de uma playlist do Spotify em `dados.js → musica`.
- **QR code**: gere um QR do link e imprima num cartão. Entregar um papel que
  vira um site é um efeito melhor do que mandar mensagem.
- **Domínio próprio**: `nossa-historia.com.br` custa ~R$40/ano no Registro.br
  e aponta pro Netlify em 10 minutos.
- Uma seção "o que vem por aí" no fim, com planos de vocês.

---

## Como isso foi feito (já que você programa em Python)

O site é **estático**: só HTML, CSS e JavaScript num arquivo, sem servidor e
sem banco. É por isso que ele é grátis pra hospedar, abre instantâneo, e
continua funcionando daqui a dez anos sem manutenção.

O Python não roda no site — ele roda **uma vez, na sua máquina**, faz o
trabalho pesado de ler 10 mil linhas de conversa, e cospe um `stats.js` com o
resultado já mastigado. Essa separação (processamento offline → dado pronto →
site burro que só desenha) é o padrão certo pra esse tipo de projeto, e é o
mesmo raciocínio de um pipeline de dados.

Os gráficos são SVG desenhado à mão em JavaScript, sem biblioteca. Se quiser
mexer, a função `barras()` no `index.html` tem uns 40 linhas e é comentada.
