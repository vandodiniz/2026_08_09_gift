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
    nomeEla: "Mari",              // <-- coloque o nome dela
    dataInicio: "2024-09-08",    // o dia em que vocês começaram a namorar
    titulo: "Dois anos",
    subtitulo: "de nós",
    fraseAbertura: "Uma linha do tempo da nossa história",
    fotoCapa: "",  // "fotos/capa.jpg" || deixe "" se ainda não tiver a foto
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
      data: "2024-06-13",
      titulo: "Nosso Primeiro Contato",
      texto: "Por acaso do destino, nos encontramos em uma cópia fajuta do tinder... " +
             "E quem diria que isso mudaria nossas vidas!",
      foto: "",
      emoji: "💬",
    },
     {
      data: "2024-06-13",
      titulo: "Finalmente Fomos para o ZapZap",
      texto: "Como não sou bobo nem nada já fui mandando aquela cantada de cria " +
             "e você já me preparou para o que eu teria que lidar",
      foto: "",
      emoji: "😈",
    },
    
    {
      data: "2024-06-14",
      titulo: "O Primeiro Encontro",
      texto: "Depois de UM MÊS me enrolando, você FINALMENTE aceitou sair comigo. Eu tinha que fazer minha chance virar " +
             "e para te impressionar te levei pra ver Garfield! (e umas coisitas a mais rsrs). O primeiro de muitos!",
      foto: "",
      emoji: "🎥",
      destaque: true,          // marca o momento com um selo especial
    },
    {
      data: "2024-06-30",
      titulo: "O Primeiro Picnic",
      texto: "Claramente, foi no melhor parque de BH, o parque ecólogico da Pampulha. Mais um motivo para pampulha ser o cartão postal de BH! Tive que sair mais cedo do " +
             "aniversário do Moura e ele ficou muito puto com isso... Mas valeu a pena",
      foto: "fotos/primeiro_picnic.jpg",
      emoji: "🎄",
    },
    {
      data: "2024-07-13",
      titulo: "A Primeira Trilha",
      texto: "Não passou um mês direito e você já tava me arrastando pro meio do mato. Eu não sabia onde estava me metendo. Lembro que perdemos um pouco de presunto para os cachorros" +
             " de rua e APAGAMOS quando deitamos na minha cama.",
      foto: "fotos/primeira_trilha.jpg",
      emoji: "✈️",
      destaque: true,
    },
    {
      data: "2024-07-27",
      titulo: "Você começou a me apresentar BH... ",
      texto: "Quem diria que um caba de 22 anos mal conhecia a cidade que ele viveu a vida toda. Hoje já não sabemos mais aonde ir nessa cidade.",
      foto: "",
      emoji: "🏙️",
     
    },
    {
      data: "2024-08-02",
      titulo: "Seu Primeiro Aniversário Juntos!",
      texto: "Você me apresentou para os seus amigos como seu namorado praticamente kkkkk Ali percebi que você era doidinha que nem seus amigos. E desde então comecei a ver bolos malucos",
      foto: "fotos/aniversario_mariana_1.jpg",
      emoji: "🎂",
      destaque: true,
    },
    {
      data: "2024-08-31",
      titulo: "Campeonato de Massinha!",
      texto: "Claramente eu ganhei...",
      foto: "fotos/massinha.jpg",
      emoji: "🎨",
      destaque: false,
    },
    {
      data: "2024-09-01",
      titulo: "Você me Acompanhando em uma Corrida!",
      texto: "Aqui você foi corajosa. Acordou 6 da manhã para me esperar na linha de chegada kkkk Fiquei muito feliz de você ter torcido por mim.",
      foto: "fotos/corrida_1.jpg",
      emoji: "🤻",
      destaque: false,
    },
    {
      data: "2024-09-08",
      titulo: "Pedido de Namoro",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: true,
    },
    {
      data: "2024-09-23",
      titulo: "Meu Primeiro Aniversário Juntos",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2024-10-18",
      titulo: "Nossa Primeira Viagem Juntos",
      texto: "",
      foto: "fotos/IMG-20241022-WA0080.jpg",
      emoji: "",
      destaque: true,
    },
    {
      data: "2024-10-29",
      titulo: "Halloween!",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2024-09-12",
      titulo: "Ratinhos do CCBB",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2024-12-27",
      titulo: "Noite de Jogos! E de Alianças!",
      texto: "Eu amo essa fotinha",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2024-01-31",
      titulo: "Primeiro Ano Novo Juntos!!",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2025-01-04",
      titulo: "Remo",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2025-02-17",
      titulo: "Ilhabela...",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2025-02-19",
      titulo: "... e São Paulo!",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2025-02-25",
      titulo: "ExpoJapão",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2025-03-03",
      titulo: "Carnaval",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2025-03-10",
      titulo: "Bichinhos",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2025-04-18",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2025-05-04",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2025-05-18",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2025-06-12",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2025-06-28",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2025-08-16",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2025-09-13",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2025-09-20",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2025-09-23",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2025-10-11",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2025-10-25",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2025-11-14",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2025-11-22",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2025-11-30",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2025-12-21",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2025-12-24",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2026-01-01",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
     {
      data: "2026-01-23",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
     {
      data: "2026-02-14",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
     {
      data: "2026-02-17",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2026-03-14",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },{
      data: "2026-04-10",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },{
      data: "2026-04-20",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },{
      data: "2026-06-12",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },{
      data: "2026-06-26",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },{
      data: "2026-08-02",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2026-08-03",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
     {
      data: "2026-08-07",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2026-08-15",
      titulo: "",
      texto: "",
      foto: "fotos/.jpg",
      emoji: "",
      destaque: false,
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
