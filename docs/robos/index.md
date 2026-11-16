---
hide:
  - navigation
  - feedback
---

<section class="robots-catalog" aria-labelledby="robots-catalog-title">
  <header class="robots-catalog__hero">
    <h1 id="robots-catalog-title">Biblioteca de soluções</h1>
    <p>Explore soluções para melhorar processos de trabalho.</p>
    <p>Aqui estão catalogados robôs produzidos durante treinamentos e projetos desenvolvidos pelo Automatiza.MG ou enviados por outros servidores ao redor do Estado.</p>
    <p>Os robôs da Biblioteca são de livre utilização, devendo, no entanto, ser observados nossos <a href="termos_uso/">termos de uso</a>.</p>
    <label class="robots-catalog__search" for="robots-catalog-search">
      <span class="robots-catalog__search-icon" aria-hidden="true">⌕</span>
      <input id="robots-catalog-search" type="search" placeholder="Busque por título, descrição, sistema ou palavra-chave" autocomplete="off">
    </label>
  </header>

  <div class="robots-catalog__toolbar">
    <p><strong>Robôs disponíveis</strong><span class="robots-catalog__count" aria-live="polite">Carregando soluções…</span></p>
    <span class="robots-catalog__sort">A–Z</span>
  </div>

  <div class="robots-catalog__grid" id="robots-catalog-grid" aria-live="polite"></div>
  <p class="robots-catalog__empty" id="robots-catalog-empty" hidden>Nenhum robô encontrado para esta busca.</p>
  <nav class="robots-catalog__pagination" id="robots-catalog-pagination" aria-label="Paginação das soluções" hidden></nav>
</section>
