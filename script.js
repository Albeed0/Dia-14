/* ============================================================================
   SCRIPT DO LEITOR DA HQ (usado em index.html)
   ============================================================================
   Este arquivo cuida de:
     1) Desenhar (renderizar) a página atual na tela.
     2) Os botões de "página anterior / próxima / primeira / última /
        ir para a página X".
     3) O "modo de edição": quando ativado, os textos com
        contenteditable="true" podem ser editados na hora, e o que
        for digitado é salvo no localStorage (via funções de data.js),
        então fica salvo mesmo se você fechar e abrir o site de novo
        (nesse mesmo navegador/computador).

   Os dados das páginas (array PAGINAS) e as funções de leitura/escrita
   no localStorage ficam em data.js, que precisa ser carregado ANTES
   deste arquivo no HTML (veja a ordem das tags <script> em index.html).
   ========================================================================== */

/* ----------------------------------------------------------------------
   Só roda a lógica do leitor se estivermos em index.html (ou seja, se
   o elemento #pageTitle existir na página). Isso evita erros quando
   este mesmo arquivo é carregado sem querer em outra página.
   ---------------------------------------------------------------------- */
if (document.getElementById("pageTitle")) {

  // Em qual página o leitor está agora (0 = primeira página do array).
  // Prioridade: 1) número na URL (?p=3, usado pelos links do arquivo),
  // 2) última página salva no localStorage, 3) primeira página.
  const parametroPagina = new URLSearchParams(window.location.search).get("p");
  let paginaAtual;
  if (parametroPagina && !Number.isNaN(parseInt(parametroPagina, 10))) {
    paginaAtual = parseInt(parametroPagina, 10) - 1;
  } else {
    paginaAtual = Number(localStorage.getItem(CHAVE_PAGINA_ATUAL)) || 0;
  }
  if (paginaAtual < 0 || paginaAtual >= PAGINAS.length) {
    paginaAtual = 0;
  }

  /* ------------------------------------------------------------------
     Referências aos elementos da página (HTML)
     ------------------------------------------------------------------ */
  const el = {
    pageTitle: document.getElementById("pageTitle"),
    panelPlaceholder: document.getElementById("panelPlaceholder"),
    placeholderDims: document.getElementById("placeholderDims"),
    pageText: document.getElementById("pageText"),

    totalTop: document.getElementById("totalPagesTop"),
    totalBottom: document.getElementById("totalPagesBottom"),
    jumpTop: document.getElementById("pageJumpInputTop"),
    jumpBottom: document.getElementById("pageJumpInputBottom"),

    firstTop: document.getElementById("firstBtnTop"),
    prevTop: document.getElementById("prevBtnTop"),
    nextTop: document.getElementById("nextBtnTop"),
    lastTop: document.getElementById("lastBtnTop"),

    firstBottom: document.getElementById("firstBtnBottom"),
    prevBottom: document.getElementById("prevBtnBottom"),
    nextBottom: document.getElementById("nextBtnBottom"),
    lastBottom: document.getElementById("lastBtnBottom"),

    toggleEditBtn: document.getElementById("toggleEditBtn"),
    resetBtn: document.getElementById("resetBtn")
  };

  /* ------------------------------------------------------------------
     Renderização da página atual
     ------------------------------------------------------------------ */
  function renderizarPagina() {
    const dados = PAGINAS[paginaAtual];
    const chaveTexto = `pagina_${paginaAtual}_texto`;
    const chaveTitulo = `pagina_${paginaAtual}_titulo`;

    // Título da página (usa o texto editado, se existir; senão o original)
    el.pageTitle.textContent = obterTextoSalvo(chaveTitulo, dados.titulo);
    el.pageTitle.dataset.editKey = chaveTitulo;
    el.pageTitle.setAttribute("contenteditable", "true");

    // ------------------------------------------------------------------
    // ONDE COLOCAR A IMAGEM DE VERDADE:
    // Quando você tiver a arte final desta página, é só substituir as
    // linhas abaixo por algo como:
    //
    //   el.panelPlaceholder.outerHTML =
    //     `<img class="panel-img" src="paginas/pagina-${paginaAtual + 1}.png"
    //          alt="Descrição da cena da página ${paginaAtual + 1}">`;
    //
    // Por enquanto, deixamos só o placeholder com as dimensões sugeridas.
    // ------------------------------------------------------------------
    if (paginaAtual === 0) {
      el.panelPlaceholder.outerHTML =
        `<img class="panel-img" id="panelPlaceholder"
              src="Imagens/Pagina1.jpeg"
              alt="Página 1">`;
    } 
    else if(paginaAtual === 1){
      `<img class="panel-img" id="panelPlaceholder"
              src="Imagens/Pagina2.jpeg"
              alt="Página 1">`;
    }
       else if(paginaAtual === 2){
      `<img class="panel-img" id="panelPlaceholder"
              src="Imagens/Pagina3.jpeg"
              alt="Página 1">`;
    }
       else if(paginaAtual === 3){
      `<img class="panel-img" id="panelPlaceholder"
              src="Imagens/Pagina4.jpeg"
              alt="Página 1">`;
    }
       else if(paginaAtual === 4){
      `<img class="panel-img" id="panelPlaceholder"
              src="Imagens/Pagina5.jpeg"
              alt="Página 1">`;
    }
       else if(paginaAtual === 5){
      `<img class="panel-img" id="panelPlaceholder"
              src="Imagens/Pagina6.jpeg"
              alt="Página 1">`;
    }
       else if(paginaAtual === 6){
      `<img class="panel-img" id="panelPlaceholder"
              src="Imagens/Pagina7.jpeg"
              alt="Página 1">`;
    }
       else if(paginaAtual === 7){
      `<img class="panel-img" id="panelPlaceholder"
              src="Imagens/Pagina8.jpeg"
              alt="Página 1">`;
    }
       else if(paginaAtual === 8){
      `<img class="panel-img" id="panelPlaceholder"
              src="Imagens/Pagina9.jpeg"
              alt="Página 1">`;
    }
       else if(paginaAtual === 9){
      `<img class="panel-img" id="panelPlaceholder"
              src="Imagens/Pagina10.jpeg"
              alt="Página 1">`;
    }
       else if(paginaAtual === 10){
      `<img class="panel-img" id="panelPlaceholder"
              src="Imagens/Pagina11.jpeg"
              alt="Página 1">`;
    }
       else if(paginaAtual === 11){
      `<img class="panel-img" id="panelPlaceholder"
              src="Imagens/Pagina12.jpeg"
              alt="Página 1">`;
    }
       else if(paginaAtual === 12){
      `<img class="panel-img" id="panelPlaceholder"
              src="Imagens/Pagina13.jpeg"
              alt="Página 1">`;
    }
       else if(paginaAtual === 13){
      `<img class="panel-img" id="panelPlaceholder"
              src="Imagens/Pagina14.jpeg"
              alt="Página 1">`;
    }
       else if(paginaAtual === 14){
      `<img class="panel-img" id="panelPlaceholder"
              src="Imagens/Pagina15.jpeg"
              alt="Página 1">`;
    }
       else if(paginaAtual === 15){
      `<img class="panel-img" id="panelPlaceholder"
              src="Imagens/Pagina16.jpeg"
              alt="Página 1">`;
    }
       else if(paginaAtual === 16){
      `<img class="panel-img" id="panelPlaceholder"
              src="Imagens/Pagina17.jpeg"
              alt="Página 1">`;
    }
       else if(paginaAtual === 17){
      `<img class="panel-img" id="panelPlaceholder"
              src="Imagens/Pagina18.jpeg"
              alt="Página 1">`;
    }
       else if(paginaAtual === 18){
      `<img class="panel-img" id="panelPlaceholder"
              src="Imagens/Pagina19.jpeg"
              alt="Página 1">`;
    }
       else if(paginaAtual === 19){
      `<img class="panel-img" id="panelPlaceholder"
              src="Imagens/Pagina20.jpeg"
              alt="Página 1">`;
    }
       else if(paginaAtual === 20){
      `<img class="panel-img" id="panelPlaceholder"
              src="Imagens/Pagina21.jpeg"
              alt="Página 1">`;
    }
       else if(paginaAtual === 21){
      `<img class="panel-img" id="panelPlaceholder"
              src="Imagens/Pagina22.jpeg"
              alt="Página 1">`;
    }
       else if(paginaAtual === 22){
      `<img class="panel-img" id="panelPlaceholder"
              src="Imagens/Pagina23.jpeg"
              alt="Página 1">`;
    }
       else if(paginaAtual === 23){
      `<img class="panel-img" id="panelPlaceholder"
              src="Imagens/Tributo.jpeg"
              alt="Página 1">`;
    }
    else{
      el.panelPlaceholder.style.width = dados.larguraImg + "px";
      el.panelPlaceholder.style.height = dados.alturaImg + "px";
      el.placeholderDims.textContent =
        `(${dados.larguraImg} × ${dados.alturaImg} — coloque sua imagem aqui)`;
    }
      

    // Texto de narração da página
    el.pageText.textContent = obterTextoSalvo(chaveTexto, dados.texto);
    el.pageText.dataset.editKey = chaveTexto;

    // Atualiza os contadores "Página X de Y" e os campos de "ir para"
    el.totalTop.textContent = PAGINAS.length;
    el.totalBottom.textContent = PAGINAS.length;
    el.jumpTop.value = paginaAtual + 1;
    el.jumpBottom.value = paginaAtual + 1;

    atualizarEstadoDosBotoes();

    // Lembra em qual página o leitor está, para quando ele voltar ao site
    localStorage.setItem(CHAVE_PAGINA_ATUAL, String(paginaAtual));

    // Sobe a página para o topo ao trocar de painel
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  // Desativa botões de "primeira/anterior" na página 1, e
  // "próxima/última" na última página.
  function atualizarEstadoDosBotoes() {
    const naPrimeira = paginaAtual === 0;
    const naUltima = paginaAtual === PAGINAS.length - 1;

    [el.firstTop, el.firstBottom, el.prevTop, el.prevBottom].forEach(botao => {
      botao.disabled = naPrimeira;
    });
    [el.lastTop, el.lastBottom, el.nextTop, el.nextBottom].forEach(botao => {
      botao.disabled = naUltima;
    });
  }

  /* ------------------------------------------------------------------
     Navegação entre páginas
     ------------------------------------------------------------------ */
  function irParaPagina(indice) {
    if (indice < 0 || indice >= PAGINAS.length) return;
    paginaAtual = indice;
    renderizarPagina();
  }

  function irParaPrimeira() { irParaPagina(0); }
  function irParaUltima()   { irParaPagina(PAGINAS.length - 1); }
  function irParaAnterior() { irParaPagina(paginaAtual - 1); }
  function irParaProxima()  { irParaPagina(paginaAtual + 1); }

  // Liga os botões de cima e de baixo às mesmas funções
  [el.firstTop, el.firstBottom].forEach(b => b.addEventListener("click", irParaPrimeira));
  [el.prevTop, el.prevBottom].forEach(b => b.addEventListener("click", irParaAnterior));
  [el.nextTop, el.nextBottom].forEach(b => b.addEventListener("click", irParaProxima));
  [el.lastTop, el.lastBottom].forEach(b => b.addEventListener("click", irParaUltima));

  // Campo "ir para a página número X": aceita Enter para confirmar
  function ligarCampoDeSalto(campo) {
    campo.addEventListener("keydown", (evento) => {
      if (evento.key === "Enter") {
        const numero = parseInt(campo.value, 10);
        if (!Number.isNaN(numero)) {
          irParaPagina(numero - 1); // -1 porque o array começa em 0
        }
      }
    });
    // Ao perder o foco, corrige o campo para o valor da página atual
    campo.addEventListener("blur", () => {
      campo.value = paginaAtual + 1;
    });
  }
  ligarCampoDeSalto(el.jumpTop);
  ligarCampoDeSalto(el.jumpBottom);

  // Setas do teclado (esquerda/direita) também navegam — mas só quando
  // o usuário não está digitando dentro de um texto editável.
  document.addEventListener("keydown", (evento) => {
    const estaEditando = document.activeElement &&
      document.activeElement.isContentEditable;
    if (estaEditando) return;

    if (evento.key === "ArrowLeft") irParaAnterior();
    if (evento.key === "ArrowRight") irParaProxima();
  });

  /* ------------------------------------------------------------------
     Modo de edição de texto
     ------------------------------------------------------------------ */
  let modoEdicaoAtivo = localStorage.getItem(CHAVE_MODO_EDICAO) === "true";

  function aplicarEstadoModoEdicao() {
    document.body.classList.toggle("modo-edicao", modoEdicaoAtivo);
    el.toggleEditBtn.classList.toggle("active", modoEdicaoAtivo);
    el.toggleEditBtn.textContent = modoEdicaoAtivo
      ? "✓ modo de edição ativado (clique para sair)"
      : "✎ ativar modo de edição";
  }

  el.toggleEditBtn.addEventListener("click", () => {
    modoEdicaoAtivo = !modoEdicaoAtivo;
    localStorage.setItem(CHAVE_MODO_EDICAO, String(modoEdicaoAtivo));
    aplicarEstadoModoEdicao();
  });

  // Salva a edição de QUALQUER elemento editável do site (delegação de
  // evento: escuta o "blur" em toda a página, na fase de captura,
  // porque "blur" não se propaga (não faz bubbling) como outros eventos).
  document.addEventListener(
    "blur",
    (evento) => {
      const elemento = evento.target;
      if (
        elemento &&
        elemento.isContentEditable &&
        elemento.dataset &&
        elemento.dataset.editKey
      ) {
        salvarEdicao(elemento.dataset.editKey, elemento.textContent);
      }
    },
    true
  );

  // Botão de restaurar textos originais (apaga tudo que foi editado)
  el.resetBtn.addEventListener("click", () => {
    const confirmou = confirm(
      "Isso vai apagar todos os textos editados e voltar ao conteúdo " +
      "original definido em data.js. Deseja continuar?"
    );
    if (confirmou) {
      localStorage.removeItem(CHAVE_EDICOES);
      location.reload();
    }
  });

  /* ------------------------------------------------------------------
     Textos fixos do cabeçalho/rodapé (fora do array de páginas)
     Estes elementos já têm contenteditable no HTML e um data-edit-key
     fixo (siteTitle, siteSubtitle, footerText). Aqui carregamos o
     valor salvo, se existir.
     ------------------------------------------------------------------ */
  function carregarTextosFixos() {
    document.querySelectorAll("[data-edit-key]").forEach((elemento) => {
      // Pula os elementos de página, que já são tratados em renderizarPagina()
      if (elemento === el.pageTitle || elemento === el.pageText) return;

      const chave = elemento.dataset.editKey;
      const original = elemento.textContent.trim();
      elemento.textContent = obterTextoSalvo(chave, original);
    });
  }

  /* ------------------------------------------------------------------
     Inicialização
     ------------------------------------------------------------------ */
  carregarTextosFixos();
  aplicarEstadoModoEdicao();
  renderizarPagina();
}
