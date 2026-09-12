/* ============================================================================
   SCRIPT DA PÁGINA DE ARQUIVO (usado em archive.html)
   ============================================================================
   Monta a lista de todas as páginas cadastradas em PAGINAS (array
   definido em data.js), com link direto para cada uma delas.

   Como o link usa "index.html?p=NUMERO", o index.html também precisa
   ler esse "?p=" da URL ao carregar — isso é feito logo abaixo, na
   seção "Abrir direto numa página específica" deste mesmo arquivo,
   e também é conferido no início de script.js.
   ========================================================================== */

if (document.getElementById("archiveList")) {

  const lista = document.getElementById("archiveList");

  // Monta um <li> para cada página do array PAGINAS (vindo de data.js)
  PAGINAS.forEach((dados, indice) => {
    const numeroPagina = indice + 1;

    // Usa o título editado pelo usuário, se existir, senão o original
    const chaveTitulo = `pagina_${indice}_titulo`;
    const titulo = obterTextoSalvo(chaveTitulo, dados.titulo) || `Página ${numeroPagina}`;

    const item = document.createElement("li");
    item.innerHTML = `
      <a href="index.html?p=${numeroPagina}">
        <span class="archive-num">${numeroPagina}.</span>
        <span class="archive-thumb">img</span>
        <span class="archive-title">${escaparHtml(titulo)}</span>
      </a>
    `;
    lista.appendChild(item);
  });
}

// Escapa caracteres especiais de HTML para evitar que um título editado
// pelo usuário (ex: contendo "<" ou "&") quebre a estrutura da página.
function escaparHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}
