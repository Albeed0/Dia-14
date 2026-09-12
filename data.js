/* ============================================================================
   DADOS COMPARTILHADOS DO WEBCOMIC
   ============================================================================
   Este arquivo é carregado tanto por index.html (leitor da HQ) quanto
   por archive.html (lista de todas as páginas). Ele contém:

     1) O array PAGINAS com o conteúdo de cada página.
     2) Funções para ler/salvar as edições de texto no localStorage,
        usadas pelos dois lugares (script.js e archive.js).

   COMO ADICIONAR UMA PÁGINA NOVA:
   Copie um dos objetos dentro do array PAGINAS abaixo e cole no fim
   da lista, mudando os valores. A página de arquivo (archive.html)
   é atualizada automaticamente, sem precisar editar mais nada.
   ========================================================================== */

/* ----------------------------------------------------------------------
   1) DADOS DAS PÁGINAS
   Campos de cada página:
     titulo       -> título curto (aparece acima do painel e na lista
                     do arquivo). Pode deixar "" se não quiser título.
     larguraImg   -> largura sugerida do placeholder de imagem (só uma
                     referência de tamanho para a imagem final)
     alturaImg    -> altura sugerida do placeholder de imagem
     texto        -> texto de narração/legenda abaixo do painel
   ---------------------------------------------------------------------- */
const PAGINAS = [
  {
    titulo: "PÁGINA 1",
    larguraImg: 650,
    alturaImg: 450,
    texto: "Acho que eu já falei várias vezes isso, mas quando eu vi o Olive te colocando no grupo\n" +
           "Eu te achei um baita de um introsa ali, pq pra mim, aquele grupo era só de nós três\n" +
           "Até que teve o dia que você me mandou a fatidica foto do Son e do Henchman(que eu achei esses tempos)" 
  },
  {
    titulo: "PÁGINA 2",
    larguraImg: 650,
    alturaImg: 450,
    texto: "Eu lembro até hoje, pq eu tava na aula e eu vi o seu número e não reconheci\n" +
           "Pensei assim \"quem é esse cara me mandando mensagem?\" \n" +
           "Aí eu vi que era você, o amigo novo do Olive no grupo e pensei em responder só por educação " +
           "pra mim ia ficar por isso mesmo"
  },
  {
    titulo: "PÁGINA 3",
    larguraImg: 650,
    alturaImg: 450,
    texto: "Mas aí, você continuou me mandando mais meme de Hotline Miami, e eu comecei a te achar engraçadinho na época, mas não era lá grandes coisas\n" +
          "Até você achar o meu tiktok, que eu acho que você já até sabia, e começar a me mandar vídeos por lá"
  },
  {
    titulo: "PÁGINA 4",
    larguraImg: 650,
    alturaImg: 450,
    texto: "Até lá eu ainda te achava meio introsa, mas eu comecei a gostar dos vídeos que você mandava pq eu tenho um humor fudido\n" +
           "Sem perceber, você tinha virado um conhecido meu, não alguém que eu chamaria de amigo naquela época, principalmente pq a gente se falava mais no tiktok do que no zapzap"
  },
  {
    titulo: "PÁGINA 5",
    larguraImg: 650,
    alturaImg: 450,
    texto: "A gente conversava muito por pelo tiktok, lembro como se fosse ontem que grande parte das nossas conversas eram por lá\n" +
           "Lembro quando você me falou que o Olive goonou na igreja(que eu achei engraçado pra um caralho isso, pqp)"
  },
  {
    titulo: "PÁGINA 6",
    larguraImg: 650,
    alturaImg: 450,
    texto: "Eu achei estranho também, pq esse cara, que me conhece há menos de um mês, tá contando isso pra mim? Ele não acha que eu posso falar isso pro olive não?\n" +
           "Até lembro que eu te perguntei uma vez, e você falou que confiava em mim\n" +
           "Um cara, que você conhecia tinha pouquíssimo tempo."
  },
  {
    titulo: "PÁGINA 7",
    larguraImg: 650,
    alturaImg: 450,
    texto: "Então, o tempo foi passando e você foi me contando cada vez mais coisas pessoais suas, e eu acho que eu fui ficando mais próximo de você sem eu perceber\n" +
           "Mas eu demorei um tempo até conseguir te chamar de amigo mesmo"
  },
  {
    titulo: "PÁGINA 8",
    larguraImg: 650,
    alturaImg: 450,
    texto: "Você foi me contando mais e mais coisas e eu fui ficando mais confuso. Pq você confiava tanto assim em mim?\n" +
           "Aí, eu lembro quando eu tinha falado pra você de persona e você ficou interessado nisso. Genuinamente interessado e eu achei aquilo estranho.\n" +
           "Nenhum amigo meu tinha se interessado naquilo direito, um ou outro talvez, mas não daquele jeito seu."
  } ,
  {
    titulo: "PÁGINA 9",
    larguraImg: 650,
    alturaImg: 450,
    texto: "Aí, eu lembro até hoje. Foi um vídeo que você me mandou no tiktok, aem inglês mesmo, era tipo \"what if we stayed naked together in the bed withou any malice\" \n" +
           "Quando eu vi eu ainda pensei \"será que ele tá gostando de mim assim? nah\" Pq mesmo que a gente já tivesse tido conversas por bastanate tempo já nessa época, já de madrugada também, não passava esse tipo de coisa na minha cabeça\n" +
           "Principalmente por causa da sua idade também. "
  }, 
  {
    titulo: "PÁGINA 10",
    larguraImg: 650,
    alturaImg: 450,
    texto: "Você me contou muita coisa neneco, pra alguém que você nem conhecia direito ainda\n" +
           "E eu passei a gostar mais de te ouvir também"
  }, 
  {
    titulo: "PÁGINA 11",
    larguraImg: 650,
    alturaImg: 450,
    texto: "Gostava de ouvir você falar sobre seus hobbies, sobre os seus gostos bem esquisitos e únicos\n" +
           "Com o tempo, eu fui passando a te considerar muito um amigo mesmo, aí eu comecei a falar de você pros meus amigos daqui"
  },
  {
    titulo: "PÁGINA 12",
    larguraImg: 650,
    alturaImg: 450,
    texto: "Aí, eu lembro quando você se confessou pra mim. Eu não ia poder aceitar, é uma diferença grande de idade sabe.\n" +
           "Mas, eu nunca fui contra. Acho que foi mais ou menos nessa época que a gente começou a se chamar de partner. Oq eu não recusei também, foi a primeira vez\n" +
           "que alguém me chamou de algo assim sabe? Um apelido de fandom."
  },
  {
    titulo: "PÁGINA 13",
    larguraImg: 650,
    alturaImg: 450,
    texto: "E o tempo foi passando, e a gente foi ficando cada vez mais próximo, eu fui ficando cada vez mais feliz de conversar com você\n" +
           "Eu acordava ansioso pra conversar com você, e ás vezes eu tinha vontade de conversar com você assim do nada, mas eu tinha (ainda tenho) uma certa vergonha de mandar mensagem assim\n" +
           "Mas com o tempo, isso foi desaparecendo com você, era mais fácil mandar mensagem assim pra você depois de um tempo."
  },
  {
    titulo: "PÁGINA 14",
    larguraImg: 650,
    alturaImg: 450,
    texto: "Aí quase na mesmo época que eu comecei a faculdade, a gente começou a usar o widgettable junto\n" +
           "Que inclusive, a gente que voltar a usar."
  },
  {
    titulo: "PÁGINA 15",
    larguraImg: 650,
    alturaImg: 450,
    texto: "Aí a gente teve nossos 5 filhos(6 mas esse foi morto) e a gente ficava alternando por lá os status, era ainda mais divertido de conversar por lá\n" +
           "Que saudades de quando eu não tinha que trabalhar assim nossa, eu sinto falta de ficar a madrugada toda conversando com você assim"
  },
  {
    titulo: "PÁGINA 16",
    larguraImg: 650,
    alturaImg: 450,
    texto: "Acho que foi nessa época também que você foi me contando mais e mais da sua vida pessoal e das coisas que aconteram com você\n" +
           "E eu fui ficando cada vez mais empático e simpatizante com você"
  },{
    titulo: "PÁGINA 17",
    larguraImg: 650,
    alturaImg: 450,
    texto: "Eu passei a te amar mesmo. A gente começou a usar metadinha nessa época também se eu não me engano\n" +
           "Um pouco depois, a gente começou o nosso mundo das resenhaxxx, uma das minhas memórias favoritas também"
  },
  {
    titulo: "PÁGINA 18",
    larguraImg: 650,
    alturaImg: 450,
    texto: "Eu lembro que eu fiquei nessa época genuinamente preocupado também de eu estar fazendo grooming com você, e isso me perturbava, na minha cabeça eu tava te roubando os romances que você poderia ter\n" +
           "Mas eu lembro que a gente conversou sobre isso também, e você me assegurou sobre isso."
  },
  {
    titulo: "PÁGINA 19",
    larguraImg: 650,
    alturaImg: 450,
    texto: "Eu gosto disso na nossa relação também, a gente sempre deixa as coisas claras um pro outro, mesmo que nós sejamos amigo há só um ano agora.\n" +
           "Até nas \"discussões\" que a gente teve, não passou disso e a gente sempre se resolveu."
  },
  {
    titulo: "PÁGINA 20",
    larguraImg: 650,
    alturaImg: 450,
    texto: "Claro que eu não posso deixar de falar o quanto você melhorou nesse meio tempo neneco, pelo que você ia me contando é claro\n" +
           "Eu percebia que você estava evoluindo de muitos jeitos, e que você evoluiu muito de antes de você me conhecer até hoje, e eu acompanhei uma parte" +
           "E eu sinto muito orgulho de você por isso Theo, eu tô muito orgulhoso de você mesmo."
  },
{
    titulo: "PÁGINA 21",
    larguraImg: 650,
    alturaImg: 450,
    texto: "Acho que já tá chegando no final né. No fim das contas neneco, eu te amo muito, você é uma das pessoas que eu mais considero importante\n" +
           "E eu sei que a gente vai se encontrar em um futuro não muito distante"
  },
{
    titulo: "PÁGINA 22",
    larguraImg: 650,
    alturaImg: 450,
    texto: "Acho que é só isso tudo mesmo. Não dá pra por em palavras direito e eu não sou muito bom com elas.\n" +
           "Ah é, eu amo seus desenhos também viu. Seus desenhos, eu gosto quando você desabafa comigo\n" +
           "Eu gosto quando você fala dos seus interesses estranhos comigo, eu gosto de ouvir sobre oq você faz no seu dia" +
           "Eu gosto de saber sobre você em um geral. Tudo que você me fala eu levo em consideraçãoe e eu quero sempre melhorar" +
           "Tanto por mim, tanto por você também"
  },
{
    titulo: "PÁGINA 23",
    larguraImg: 650,
    alturaImg: 450,
    texto: "Acho que agora sim acabou. A próxima página é um dedicatório a você. Sem palavras nem nada" +
           "Feliz 1 ano de amizade Theo, ano que vem tem mais"
  },
  {
    titulo: "Dedicatório para o meu parceiro",
    larguraImg: 650,
    alturaImg: 450,
  },



];


/* ----------------------------------------------------------------------
   2) CHAVES USADAS NO localStorage
   ---------------------------------------------------------------------- */
const CHAVE_PAGINA_ATUAL = "webcomic_pagina_atual";
const CHAVE_EDICOES = "webcomic_edicoes";       // textos editados pelo usuário
const CHAVE_MODO_EDICAO = "webcomic_modo_edicao";


/* ----------------------------------------------------------------------
   3) FUNÇÕES DE ARMAZENAMENTO DE EDIÇÕES
   Cada texto editável tem uma "chave" única, guardada no atributo
   data-edit-key do elemento no HTML (ex: "pagina_0_texto",
   "siteTitle", "footerText"...).
   ---------------------------------------------------------------------- */
function carregarEdicoes() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE_EDICOES)) || {};
  } catch (erro) {
    // Se o JSON salvo estiver corrompido por algum motivo, começa vazio
    // em vez de quebrar o site.
    return {};
  }
}

function salvarEdicao(chave, valor) {
  const edicoes = carregarEdicoes();
  edicoes[chave] = valor;
  localStorage.setItem(CHAVE_EDICOES, JSON.stringify(edicoes));
}

function obterTextoSalvo(chave, textoOriginal) {
  const edicoes = carregarEdicoes();
  return Object.prototype.hasOwnProperty.call(edicoes, chave)
    ? edicoes[chave]
    : textoOriginal;
}
