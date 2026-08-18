// =============================================================================
//  dados.js  —  ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR
// =============================================================================
//  Regras rápidas:
//   • Textos ficam entre aspas: "assim".
//   • Sempre vírgula no fim de cada linha (menos na última de cada bloco).
//   • Datas no formato "AAAA-MM-DD".
//   • Para apagar um item, apague o bloco inteiro { ... }, incluindo a vírgula.
//   • Emojis podem ser colados direto: "🎂".
// =============================================================================

window.DADOS = {
  // ---------------------------------------------------------------------------
  // CAPA
  // ---------------------------------------------------------------------------
  capa: {
    nomeEle: "Vando",
    nomeEla: "___",              // <-- coloque o nome dela
    dataInicio: "2024-09-08",    // o dia em que vocês começaram a namorar
    titulo: "Dois anos",
    subtitulo: "de nós",
    fraseAbertura: "Uma linha do tempo da nossa história — com tudo o que ela guarda.",
    fotoCapa: "fotos/capa.jpg",  // deixe "" se ainda não tiver a foto
  },

  // ---------------------------------------------------------------------------
  // TIMELINE — os momentos marcantes
  // ---------------------------------------------------------------------------
  // Dica: entre 8 e 15 momentos é o número que funciona melhor. Menos que isso
  // fica vazio, mais que isso cansa antes do fim.
  // "foto" é opcional — se você não tiver, deixe "" e o item fica só com texto.
  // ---------------------------------------------------------------------------
  timeline: [
    {
      data: "2024-08-20",
      titulo: "A primeira conversa",
      texto: "Escreva aqui como vocês se falaram pela primeira vez. Vale contar o " +
             "detalhe bobo que você lembra até hoje — é isso que faz a pessoa sorrir.",
      foto: "",
      emoji: "💬",
    },
    {
      data: "2024-09-08",
      titulo: "O pedido",
      texto: "O dia em que virou oficial. Onde vocês estavam, o que você sentiu, " +
             "o que ela respondeu.",
      foto: "fotos/pedido.jpg",
      emoji: "❤️",
      destaque: true,          // marca o momento com um selo especial
    },
    {
      data: "2024-12-24",
      titulo: "Primeiro Natal juntos",
      texto: "Substitua por um momento de verdade.",
      foto: "",
      emoji: "🎄",
    },
    {
      data: "2025-03-15",
      titulo: "A primeira viagem",
      texto: "Substitua por um momento de verdade.",
      foto: "",
      emoji: "✈️",
    },
    {
      data: "2025-09-08",
      titulo: "Um ano",
      texto: "Substitua por um momento de verdade.",
      foto: "",
      emoji: "🥂",
      destaque: true,
    },
    {
      data: "2026-09-08",
      titulo: "Dois anos",
      texto: "E aqui estamos.",
      foto: "",
      emoji: "🎉",
      destaque: true,
    },
  ],

  // ---------------------------------------------------------------------------
  // GALERIA DE FOTOS
  // ---------------------------------------------------------------------------
  // Coloque os arquivos dentro da pasta "fotos/" e liste aqui.
  // A legenda aparece quando a foto é aberta.
  // ---------------------------------------------------------------------------
  // As fotos abaixo são EXEMPLOS coloridos, só para você ver o site cheio.
  // Troque os arquivos da pasta fotos/ pelos seus e ajuste as legendas.
  galeria: [
    { arquivo: "fotos/praia.jpg",       legenda: "Aquele fim de tarde na praia" },
    { arquivo: "fotos/aniversario.jpg", legenda: "Seu aniversário de 2025" },
    { arquivo: "fotos/viagem.jpg",      legenda: "A estrada até lá" },
    { arquivo: "fotos/natal.jpg",       legenda: "Natal em casa" },
    { arquivo: "fotos/cotidiano.jpg",   legenda: "Um domingo qualquer — os melhores" },
    { arquivo: "fotos/pedido.jpg",      legenda: "8 de setembro de 2024" },
  ],

  // ---------------------------------------------------------------------------
  // MENSAGENS QUE VALEM SER LIDAS DE NOVO
  // ---------------------------------------------------------------------------
  // As estatísticas o script gera sozinho. Aqui vão as mensagens que você
  // escolheu a dedo — é a parte que emociona de verdade.
  // "de" pode ser "ele" ou "ela".
  // ---------------------------------------------------------------------------
  mensagensMarcantes: [
    // Estes são EXEMPLOS. Apague e cole as mensagens de verdade.
    {
      data: "2024-08-20",
      de: "ele",
      texto: "oi, tudo bem? desculpa a cara de pau, mas eu precisava te falar uma coisa",
      contexto: "a primeira mensagem",
    },
    {
      data: "2024-09-08",
      de: "ela",
      texto: "eu tô sorrindo sozinha aqui, você não faz ideia",
      contexto: "logo depois do pedido",
    },
    {
      data: "2025-09-08",
      de: "ele",
      texto: "um ano. e eu escolheria tudo de novo, na mesma ordem",
      contexto: "no nosso primeiro aniversário",
    },
  ],

  // ---------------------------------------------------------------------------
  // CARTA FINAL
  // ---------------------------------------------------------------------------
  // Separe os parágrafos em itens da lista.
  // ---------------------------------------------------------------------------
  carta: {
    titulo: "O que eu queria te dizer",
    paragrafos: [
      "Escreva aqui. Sem pressa, sem tentar ficar bonito — só verdadeiro.",
      "Dois anos cabem em números, em fotos e em mensagens. Mas o que eles " +
      "significam não cabe em nenhum dos três.",
    ],
    assinatura: "Com amor, Vando",
  },

  // ---------------------------------------------------------------------------
  // TRILHA SONORA (opcional)
  // ---------------------------------------------------------------------------
  // Cole o link de uma playlist ou música do Spotify. Deixe "" para não mostrar.
  // Como pegar: no Spotify → Compartilhar → Copiar link.
  // ---------------------------------------------------------------------------
  musica: {
    spotify: "",
    legenda: "A trilha sonora desses dois anos",
  },
};
