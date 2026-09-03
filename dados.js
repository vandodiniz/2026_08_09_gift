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
    fotoCapa: "",  // "fotos/timeline/capa.jpg" || deixe "" se ainda não tiver a foto
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
      texto: "Por acaso do destino, nos encontramos em uma cópia fajuta do Tinder... " +
             "E quem diria que um deslize na tela mudaria tudo!",
      foto: "fotos/timeline/match.PNG",
      emoji: "🎯"
    },
    {
      data: "2024-06-13",
      titulo: "Finalmente Fomos para o ZapZap",
      texto: "Como não sou bobo nem nada, já lancei aquela cantada de cria. " +
             "Você, claro, já deixou bem claro o que me aguardava... e eu comprei o desafio na hora.",
      foto: "fotos/timeline/wpp.jpeg",
      emoji: "😈",
    },
    {
      data: "2024-06-14",
      titulo: "O (Tão Aguardado) Primeiro Encontro",
      texto: "Depois de me enrolar por um mês inteiro, você FINALMENTE cedeu. Eu não podia desperdiçar minha única chance, precisava acertar. E qual jeito melhor de impressionar do que te levando pra ver... Garfield?! (com direito a umas coisitas a mais, claro rs). O primeiro de muitos!",
      foto: "",
      emoji: "🍿",
      destaque: true,
    },
    {
      data: "2024-06-30",
      titulo: "Piquenique na Pampulha",
      texto: "O cenário perfeito no melhor lugar de BH. O único prejudicado foi o Moura, já que abandonei o aniversário dele mais cedo pra te encontrar. Ele ficou bolado na hora, mas confesso que faria tudo de novo. A troca foi mais do que justa!",
      foto: "fotos/timeline/primeiro_picnic.jpg",
      emoji: "🌳",
    },
    {
      data: "2024-07-13",
      titulo: "A Primeira Trilha",
      texto: "Mal tinha dado um mês e você já estava me arrastando pro mato. Eu não fazia a menor ideia de onde estava me metendo! O saldo do dia: pagamos pedágio de presunto pros cachorros de rua e, quando chegamos, simplesmente APAGAMOS na minha cama.",
      foto: "fotos/timeline/primeira_trilhaa.jpg",
      emoji: "🥾", 
      destaque: true,
    },
    {
      data: "2024-07-27",
      titulo: "Você começou a me apresentar BH... ",
      texto: "Quem diria que um caba de 22 anos mal conhecia a cidade que ele viveu a vida toda. Hoje já não sabemos mais aonde ir nessa cidade.",
      foto: "fotos/timeline/IMG-20240727-WA0061.jpg",
      emoji: "🏙️",

    },
    {
      data: "2024-08-02",
      titulo: "Primeiro Aniversário Juntos",
      texto: "Você não perdeu tempo e já me apresentou pros seus amigos como namorado, né? Foi nesse dia que percebi que você era completamente lelé da cuca igual a eles. E desde então, comecei a ver bolos malucos em eventos festivos.",
      foto: "fotos/timeline/aniversario_mariana_1.jpg",
      emoji: "🎂",
      destaque: true,
    },
    {
      data: "2024-08-31",
      titulo: "Campeonato de Massinha!",
      texto: "Claramente eu ganhei...",
      foto: "fotos/timeline/massinha.jpg",
      emoji: "🎨",
      destaque: false,
    },
    {
      data: "2024-09-01",
      titulo: "O Prêmio na Linha de Chegada",
      texto: "Precisa de muita coragem (e carinho) para acordar às 6 da manhã de um domingo pra acompanhar alguém. Mas confesso que cruzar a linha de chegada e ver você lá, torcendo por mim, foi melhor que a medalha e a banana da corrida.",
      foto: "fotos/timeline/corrida_1.jpg",
      emoji: "🏅",
      destaque: false,
    },
    {
      data: "2024-09-08",
      titulo: "O 'Sim' Mais Importante",
      texto: "O dia em que a nossa brincadeira ficou séria de vez. Você nem suspeitou! Lembro até hoje da sua carinha. Foi o começo oficial da nossa melhor fase.",
      foto: "fotos/timeline/20240908.jpg",
      emoji: "❤️",
      destaque: true,
    },
    {
      data: "2024-09-23",
      titulo: "Meu Primeiro Aniversário Com Você",
      texto: "Dessa vez era a minha vez de comemorar. Ter você do meu lado começando esse novo ciclo foi o melhor presente que eu poderia ganhar.",
      foto: "fotos/timeline/IMG-20240923-WA0060.jpg",
      emoji: "🎁",
      destaque: false,
    },
    {
      data: "2024-10-18",
      titulo: "A Primeira Viagem a Dois",
      texto: "Fugimos um pouco de BH e fomos para Ouro Preto. Foi maravilhoso conhecer cada cantinho de lá (Incluindo os 20km de trilha que nos destruiu kkkk)! A primeira de muitas aventuras da nossa lista.",
      foto: "fotos/timeline/IMG-20241022-WA0080.jpg",
      emoji: "🧳",
      destaque: true,
    },
    {
      data: "2024-10-29",
      titulo: "Nosso Primeiro Halloween",
      texto: "Estávamos fantasiados de açougueiro e vaca, com tudo feito à mão por nós mesmos! Uma dupla um pouco trágica, mas que não poderia ter combinado melhor com nosso jeito.",
      foto: "fotos/timeline/IMG-20241029-WA0023.jpg",
      emoji: "🎃",
      destaque: false,
    },
    {
      data: "2024-11-09",
      titulo: "Ratinhos do CCBB",
      texto: "Batendo ponto de novo no CCBB. Ele virou quase a nossa segunda casa, e nós, oficialmente, as figurinhas mais carimbadas das exposições de lá.",
      foto: "fotos/timeline/IMG_20241209_075637_011.jpg",
      emoji: "🐭", 
      destaque: false,
    },
    {
      data: "2024-12-27",
      titulo: "Noite de Jogos e Alianças",
      texto: "Eu amo essa fotinha! Foi a noite em que finalmente tomei vergonha na cara e te lacei com as alianças. O próximo par, quem sabe, eu deixo você escolher! kkk",
      foto: "fotos/timeline/IMG-20241227-WA0034.jpg",
      emoji: "💍",
      destaque: true,
    },
    {
      data: "2025-01-01",
      titulo: "Nosso Primeiro Réveillon",
      texto: "Passamos a virada na casa dos seus tios e foi ótimo! A gente pode até não ter ficado milionário com a Mega da Virada, mas começar o ano do seu lado já foi como ganhar na loteria.",
      foto: "fotos/timeline/IMG-20250101-WA0015.jpg",
      emoji: "🥂", 
      destaque: true,
    },
    {
      data: "2025-01-04",
      titulo: "Fiasco no Remo",
      texto: "Fui tentar ser romântico no Parque Municipal, mas minha coordenação falhou miseravelmente. Sobrou para você salvar o dia e assumir o posto de marinheira oficial do nosso barquinho. Me senti navagando com o Caronte!",
      foto: "fotos/timeline/20250104_160136.jpg",
      emoji: "🚣",
      destaque: false,
    },
    {
      data: "2025-02-17",
      titulo: "Ilhabela...",
      texto: "Trocamos as montanhas de Minas pelo mar de São Paulo! Dias incríveis de sol, praia, paisagens absurdas e nós dois gastando a nossa cota anual de citronela para sobreviver aos borrachudos. Dias de glória!",
      foto: "fotos/timeline/IMG-20250215-WA0096.jpg",
      emoji: "🏖️",
      destaque: true,
    },
    {
      data: "2025-02-19",
      titulo: "... e São Paulo!",
      texto: "E da calmaria da praia, fomos direto para o caos da selva de pedra! Batemos muita perna, comemos bem e provamos que pode sim existir amor em SP. (Mesmo você quase surtando de tanto eu cantar essa música)",
      foto: "fotos/timeline/IMG-20250219-WA0082.jpg",
      emoji: "🏙️",
      destaque: true,
    },
    {
      data: "2025-02-25",
      titulo: "ExpoJapão",
      texto: "Mal chegamos em BH e já estávamos explorando um pedacinho do Japão, devidamente vestidos a caráter. O troféu de casal mais nerdola de BH e região não poderia ser de mais ninguém!",
      foto: "fotos/timeline/IMG-20250225-WA0045.jpg",
      emoji: "⛩️",
      destaque: false,
    },
    {
      data: "2025-03-03",
      titulo: "Mariposa e o Abajur",
      texto: "Nosso primeiro Carnaval e lá veio você de novo com as fantasias malucas. A mariposa ficou muito boa, já o abajur não brilhou tanto... o que vale é a intenção, né?",
      foto: "fotos/timeline/IMG-20250303-WA0024.jpg",
      emoji: "🦋",
      destaque: false,
    },
    {
      data: "2025-03-10",
      titulo: "Zerando a Máquina de Bichinhos",
      texto: "Nesse dia o feitiço virou contra o feiticeiro. Nós simplesmente rapelamos a máquina e saímos de lá com 3 bichinhos de uma vez! Fiquei sem acreditar que a gente conseguiu vencer o sistema kkkk.",
      foto: "fotos/timeline/Screenshot_20250310_224330_WhatsApp.jpg",
      emoji: "🧸", 
      destaque: false,
    },
    {
      data: "2025-04-18",
      titulo: "Aventura e Mini Buquês",
      texto: "Voltamos para o mato! Dessa vez a trilha foi no Parque da Serra do Curral. E o trajeto teve direito até a montagem de mini buquês.",
      foto: "fotos/timeline/20250418_110549.jpg",
      emoji: "⛰️",
      destaque: false,
    },
    {
      data: "2025-05-04",
      titulo: "Salão de Beleza em Casa",
      texto: "Você fazendo macaquice cortando meu cabelo e já dando fortes indícios de que eu deveria largar meu cabeleireiro. Tive que criar coragem para deixar você segurar uma tesoura perto da minha cabeça.",
      foto: "fotos/timeline/20250504_080556.jpg",
      emoji: "✂️",
      destaque: false,
    },
    {
      data: "2025-05-18",
      titulo: "Família!",
      texto: "Retrato de uma família feliz: Eu e minhas cachorrinhas!",
      foto: "fotos/timeline/IMG-20250518-WA0032.jpg",
      emoji: "🐶",
      destaque: false,
    },
    {
      data: "2025-06-12",
      titulo: "Dia dos Namorados",
      texto: "Nosso primeiro Dia dos Namorados juntos! Estava um frio absurdo, mas sentar no restaurante do lado do aquecedor para ouvir um jazz ao vivo foi lindo e deixou a noite quentinha. Pena que perdemos as fotos :(",
      foto: "",
      emoji: "❄️",
      destaque: true,
    },
    {
      data: "2025-06-28",
      titulo: "Fixação Felina",
      texto: "Você e sua fixação inegável com gatinhos. Uma cena clássica do nosso dia a dia que precisava ficar registrada aqui.",
      foto: "fotos/timeline/20250628_161813.jpg",
      emoji: "🐾",
      destaque: false,
    },
    {
      data: "2025-07-10",
      titulo: "Show do JP",
      texto: "Fomos ver o show do seu cantor favorito e, de fato, você me convenceu a virar fã dele. Foi um absurdo! Mais absurdo ainda foi termos errado a data e batido ponto no lugar com um mês de antecedência kkkkkkk.",
      foto: "",
      emoji: "🎫",
      destaque: false,
    },
    {
      data: "2025-08-02",
      titulo: "Seu Segundo Aniversário ",
      texto: "Ter jogado drinking games com você e seus amigos foi muito divertido! Dessa vez o Mota não comeu o bolo inteiro.",
      foto: "",
      emoji: "🎉",
      destaque: false,
    },
    {
      data: "2025-08-16",
      titulo: "Nós na Pré-História",
      texto: "Encontrando nossos sósias no museu! A gente já se esbarrava desde os tempos pré-históricos.",
      foto: "fotos/timeline/20250816_162951.jpg",
      emoji: "🗿",
      destaque: false,
    },
    {
      data: "2025-09-13",
      titulo: "1 Ano de Namoro!",
      texto: "Nosso primeiro ano oficial merecia uma comemoração à altura. Nada mais justo do que te levar no Mina Jazz Club. O resumo da noite? Sem palavras, foi simplesmente inesquecível. Você estava lindíssima e o show foi incrível. Não sei o que me deixou mais incrédulo: o Gabriel politico cantando ou o pianista da banda kkkk ",
      foto: "fotos/timeline/20250913_204643.jpg",
      emoji: "🎷",
      destaque: true, 
    },
    {
      data: "2025-09-20",
      titulo: "Palhaçada",
      texto: "Ninguém sabe como tá a mente dos palhaços.",
      foto: "fotos/timeline/20250920_192231.jpg",
      emoji: "🤡",
      destaque: false,
    },
    {
      data: "2025-09-23",
      titulo: "Meu Segundo Aniversário",
      texto: "Você batendo o ponto mais uma vez aqui em casa para comemorar comigo!",
      foto: "fotos/timeline/20250923_202131.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2025-10-11",
      titulo: "Fim de Semana em Brumadinho",
      texto: "Mais uma trilha pra conta! Essa foto ficou foda pra caralho. O percurso foi de altas emoçoes. Quase nos perdemos, escalamos, não conseguimos chegar até o fim e uma aranha ainda te picou kkk. Pelo menos o fim de semana rendeu até vinho de graça (pena que era horrível!).",
      foto: "fotos/timeline/IMG-20251011-WA0087.jpg",
      emoji: "🕷️", 
      destaque: false,
    },
    {
      data: "2025-10-25",
      titulo: "Camarões",
      texto: "Não sei o que aconteceu nesse dia, mas eu fiquei muito vermelho kkkkkkkk",
      foto: "fotos/timeline/20251025_182621.jpg",
      emoji: "",
      destaque: false,
    },
    {
      data: "2025-11-14",
      titulo: "Treino em Sintonia",
      texto: "Foco no shape e no relacionamento! Sintonia foi tanta que até a roupa de treino foi igual.",
      foto: "fotos/timeline/20251114_174902.jpg",
      emoji: "💪",
      destaque: false,
    },
    {
      data: "2025-11-22",
      titulo: "Meu Diamante em Diamantina!",
      texto: "Ahhh, o que falar de Diamantina? Explorar cada ladeira e cantinho histórico dessa cidade ao seu lado foi incrível. Precisamos marcar a volta na época da Vesperata!",
      foto: "fotos/timeline/IMG-20251122-WA0124.jpg",
      emoji: "💎", 
      destaque: false,
    },
    {
      data: "2025-11-30",
      titulo: "Nossos Primeiros 5km Juntos",
      texto: "Você participou da sua primeira corrida de 5km comigo!! E nós mandamos muito bem: mantivemos o ritmo e ainda chegamos na frente de todos os nossos amigos que encontramos pelo caminho.",
      foto: "fotos/timeline/20251130_085247.jpg",
      emoji: "👟",
      destaque: false,
    },
    {
      data: "2025-12-21",
      titulo: "Sr. & Sra. Smith",
      texto: "Bonitos e elegantes, vestidos para matar. Você fica linda usando vermelho!",
      foto: "fotos/timeline/20251221_001350.jpg",
      emoji: "🍷",
      destaque: false,
    },
    {
      data: "2025-12-24",
      titulo: "Primeiro Natal Juntos!",
      texto: "Faltou a foto oficial, mas o que importa é que finalmente passamos nosso primeiro Natal juntos. Eu e a Analua ganhamos a gincana da sua vó. Eu ganhei uma garrafa e ela simplesmente começou a chorar porque ganhou sabonetes kkkk. Foi bom demais.",
      foto: "",
      emoji: "🎅",
      destaque: true,
    },
    {
      data: "2026-01-01",
      titulo: "Feliz Ano Novo!",
      texto: "Mais um Ano Novo do seu lado, começando o ano da melhor forma. Que venham mais dezenas!",
      foto: "fotos/timeline/20260101_005908.jpg",
      emoji: "🎆",
      destaque: true,
    },
    {
      data: "2026-01-23",
      titulo: "Aulas na Cozinha",
      texto: "Momento Ratatouille! Começando meu aprendizado culinário tendo a melhor professora possível. Só toma cuidado para não ensinar bem demais, porque em breve o aprendiz vai roubar o seu posto.",
      foto: "fotos/timeline/20260123_194637.jpg",
      emoji: "🍳",
      destaque: false,
    },
    {
      data: "2026-02-08",
      titulo: "Minha Player 2",
      texto: "Fevereiro foi um mês regado a jogatinas com você. Apesar de você se estressar jogando comigo, guardei a foto desse quadro que fizemos juntos só porque achei a coisa mais bonitinha do mundo.",
      foto: "fotos/timeline/20260208.jpg",
      emoji: "🖼️",
      destaque: false,
    },
    {
      data: "2026-02-14",
      titulo: "Pagando a Aposta",
      texto: "Promessa é dívida! Tive que te levar ao Topo do Mundo depois de perder aquela aposta sobre quem interpretava o personagem do filme. Mas convenhamos, nada melhor do que pagar essa dívida no Dia de São Valentim, né? Pelo menos ganhei alguns Vales em troca hehehe",
      foto: "fotos/timeline/20260214_142841.jpg",
      emoji: "🌇", 
      destaque: true,
    },
    {
      data: "2026-02-17",
      titulo: "MIB no Carnaval",
      texto: "Mais um Carnaval do seu lado e confesso que essa fantasia de Homens de Preto ficou sensacional! Só faltou a gente ter aquele apagador de memória pra você esquecer o trabalho que eu te dei nesse dia kkkk.",
      foto: "fotos/timeline/20260217_100403.jpg",
      emoji: "🕶️",
      destaque: true,
    },
    {
      data: "2026-03-14",
      titulo: "De Volta à ExpoJapão",
      texto: "Batendo o ponto mais uma vez na ExpoJapão para garantir a renovação anual do nosso cobiçado título de casal mais nerdola de BH! Já virou tradição nossa.",
      foto: "fotos/timeline/20260314_145431.jpg",
      emoji: "⛩️",
      destaque: false,
    },
    {
      data: "2026-04-10",
      titulo: "Encontro de Sogras",
      texto: "O dia em que finalmente as nossas mães se conheceram!",
      foto: "fotos/timeline/20260410_205558.jpg",
      emoji: "🥂",
      destaque: false,
    },
    {
      data: "2026-04-20",
      titulo: "A Melhor Pizza de BH",
      texto: "Noite de pizza feita em casa! A sua receita é simplesmente absurda de boa, já provou que a gente precisa fazer isso mais vezes. Com borda recheada, por favor!",
      foto: "fotos/timeline/20260420_190520.jpg",
      emoji: "🍕",
      destaque: false,
    },
    {
      data: "2026-06-12",
      titulo: "Nosso 2º Dia dos Namorados",
      texto: "Segundo Dia dos Namorados juntos! Nada mais romântico e com a nossa cara do que curtir um show à luz de velas e depois engatar direto em uma caça ao tesouro.",
      foto: "fotos/timeline/20260612_200123.jpg",
      emoji: "🕯️",
      destaque: true, // Recomendo deixar true por ser o Dia dos Namorados!
    },
    {
      data: "2026-06-26",
      titulo: "Festival das Luzes",
      texto: "Trocamos o show à luz de velas do Dia dos Namorados pelo Festival das Luzes em BH! A cidade ficou incrível, mas nenhuma vista ganha da sua companhia.",
      foto: "fotos/timeline/20260626_195934.jpg",
      emoji: "✨",
      destaque: false,
    },
    {
      data: "2026-08-02",
      titulo: "Aniversário no Aeroporto!",
      texto: "Mais um aniversário do seu lado! Passamos a virada no aeroporto, prestes a embarcar na nossa primeiríssima viagem internacional juntos!",
      foto: "fotos/timeline/20260802_004444.jpg",
      emoji: "✈️",
      destaque: false, // Super recomendo o true aqui pelo peso da primeira viagem internacional!
    },
    {
      data: "2026-08-03",
      titulo: "Desbravando Barilove",
      texto: "Conhecer cada cantinho, rua e paisagem dessa cidade aconchegante com você foi uma experiência que não tem preço. Foi muito foda ver neve pela primeira vez, ainda mais poder partilhar isso brincando com você!",
      foto: "fotos/timeline/20260803_105706.jpg",
      emoji: "❄️", 
      destaque: true,
    },
    {
      data: "2026-08-07",
      titulo: "Buenos Aires",
      texto: "A viagem continuou com muito estilo na capital portenha! Muita andança e tango. Fechamos o nosso tour pela Argentina com chave de ouro.",
      foto: "fotos/timeline/20260807_150941.jpg",
      emoji: "💃",
      destaque: true,
    },
    {
      data: "2026-08-15",
      titulo: "Aniversário 2.0",
      texto: "Comemorar no aeroporto foi só o aquecimento! Fizemos uma comemoração de verdade para o seu aniversário, já de volta em solo mineiro. E claro, garantimos mais um registro para a sua famosa coleção de bolos diferentões.",
      foto: "fotos/timeline/20260815_182916.jpg",
      emoji: "🎂",
      destaque: false,
    },
    {
      data: "2026-09-08",
      titulo: "Loading...",
      texto: "",
      foto: "",
      emoji: "",
      destaque: false,
    }
  ],

  // ---------------------------------------------------------------------------
  // GALERIA DE FOTOS
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // As fotos abaixo são EXEMPLOS coloridos, só para você ver o site cheio.
  // Troque os arquivos da pasta fotos/timeline/ pelos seus e ajuste as legendas.
  galeria: [
    { arquivo: "fotos/timeline/mural/20240921_081044.jpg",              legenda: "21 de setembro de 2024" },
    { arquivo: "fotos/timeline/mural/20241019_094334.jpg",              legenda: "19 de outubro de 2024" },
    { arquivo: "fotos/timeline/mural/IMG-20241024-WA0046.jpg",          legenda: "24 de outubro de 2024" },
    { arquivo: "fotos/timeline/mural/20250101_004203.jpg",              legenda: "1º de janeiro de 2025" },
    { arquivo: "fotos/timeline/mural/IMG-20250219-WA0153.jpg",          legenda: "19 de fevereiro de 2025" },
    { arquivo: "fotos/timeline/mural/20251019_155816.jpg",              legenda: "19 de outubro de 2025" },
    { arquivo: "fotos/timeline/mural/20251026_202705.jpg",              legenda: "26 de outubro de 2025" },
    { arquivo: "fotos/timeline/mural/Screenshot_20251106_221054_WhatsApp.jpg", legenda: "6 de novembro de 2025" },
    { arquivo: "fotos/timeline/mural/20251122_183914.jpg",              legenda: "22 de novembro de 2025" },
    { arquivo: "fotos/timeline/mural/20251129_171644.jpg",              legenda: "29 de novembro de 2025" },
    { arquivo: "fotos/timeline/mural/20251213_095246.jpg",              legenda: "13 de dezembro de 2025" },
    { arquivo: "fotos/timeline/mural/20251221_054051.jpg",              legenda: "21 de dezembro de 2025" },
    { arquivo: "fotos/timeline/mural/20260201_190205.jpg",              legenda: "1º de fevereiro de 2026" },
    { arquivo: "fotos/timeline/mural/20260314_145434.jpg",              legenda: "14 de março de 2026" },
    { arquivo: "fotos/timeline/mural/20260403_072531.jpg",              legenda: "3 de abril de 2026" },
    { arquivo: "fotos/timeline/mural/20260516_111550.jpg",              legenda: "16 de maio de 2026" },
    { arquivo: "fotos/timeline/mural/20260607_200709.jpg",              legenda: "7 de junho de 2026" },
    { arquivo: "fotos/timeline/mural/20260804_101224.jpg",              legenda: "4 de agosto de 2026" },
    { arquivo: "fotos/timeline/mural/20260804_103554.jpg",              legenda: "4 de agosto de 2026" },
    { arquivo: "fotos/timeline/mural/20260807_092801.jpg",              legenda: "7 de agosto de 2026" },
    { arquivo: "fotos/timeline/mural/20260807_201057.jpg",              legenda: "7 de agosto de 2026" },
    { arquivo: "fotos/timeline/mural/20260808_102658.jpg",              legenda: "8 de agosto de 2026" },
    { arquivo: "fotos/timeline/mural/20260814_205556.jpg",              legenda: "14 de agosto de 2026" },
    { arquivo: "fotos/timeline/mural/20260817_112430.jpg",              legenda: "17 de agosto de 2026" },
  ],

  // ---------------------------------------------------------------------------
  // CARTA FINAL
  // ---------------------------------------------------------------------------
  // Separe os parágrafos em itens da lista.
  // ---------------------------------------------------------------------------
  carta: {
    titulo: "O que eu queria te dizer",
    paragrafos: [
      "Meu bem,",

      "Hoje completamos dois anos juntos e olhando para trás só consigo pensar " +
      "no quanto esse tempo foi importante. Mesmo com as nossas eventuais brigas, " +
      "tudo o que vivemos e construímos foi muito bom, e a verdade é que eu " +
      "simplesmente não consigo mais me imaginar sem você na minha vida.",

      "Você é uma pessoa incrível. Eu sou completamente apaixonado por cada " +
      "detalhe seu. Seu sorriso, o seu cabelinho, a sua boca, a sua carinha de " +
      "brava e até esse seu jeito duvidoso que me ganha todos os dias. Amo " +
      "dividir o tempo com você, seja jogando, caçando Pokémon por aí, dançando, " +
      "jogando, conversando ou até mesmo quando a gente fica quietinho, um do " +
      "lado do outro, sem fazer absolutamente nada. Adoro o cuidado e o carinho " +
      "que você tem por mim, especialmente nos seus presentes artesanais que eu " +
      "guardo com tanto amor no meu altar, ou então quando você me apoia nos momentos " +
      "mais conturbados. Adoro sentar e ouvir você me contando cada detalhezinho " +
      "do seu dia. E não tem nada que me faça sorrir mais rápido do que ver uma " +
      "notificação de mensagem sua no meu celular, principalmente quando abro e " +
      "é uma foto sua.",

      "Eu quero que você saiba que te acho uma mulher muito foda e que tenho um " +
      "orgulho imenso de ser o seu namorado. Você me ensinou muito coisa nesses " +
      "dois anos e me ajudou a me formar como homem. Tudo fica melhor quando " +
      "estou com você. Enfim, obrigado por ser exatamente quem você é. Que esses " +
      "dois anos sejam apenas o começo de dezenas de anos juntos. Eu te amo!",
    ],
    assinatura: "Com amor, seu Macaquinho",
  },

  // ---------------------------------------------------------------------------
  // TRILHA SONORA (opcional)
  // ---------------------------------------------------------------------------
  // Cole o link de uma playlist ou música do Spotify. Deixe "" para não mostrar.
  // Como pegar: no Spotify → Compartilhar → Copiar link.
  // ---------------------------------------------------------------------------
  musica: {
    spotify: "https://open.spotify.com/intl-pt/album/6laUDBtyfu4ngRbOsblhfS",
    legenda: "A trilha sonora desses dois anos",
  },
};
