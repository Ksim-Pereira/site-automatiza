---
hide:
  - navigation
  - feedback
---

<section class="robots-catalog" aria-labelledby="robots-catalog-title">
  <header class="robots-catalog__hero">
    <h1 id="robots-catalog-title">Biblioteca de robôs</h1>
    <p>Explore soluções para automatizar tarefas e processos de trabalho.</p>
    <label class="robots-catalog__search" for="robots-catalog-search">
      <span class="robots-catalog__search-icon" aria-hidden="true">⌕</span>
      <input id="robots-catalog-search" type="search" placeholder="Busque por problema, ferramenta, sistema ou palavra-chave" autocomplete="off">
    </label>
  </header>

  <div class="robots-catalog__toolbar">
    <p><strong>Robôs disponíveis</strong><span class="robots-catalog__count" aria-live="polite">Carregando soluções…</span></p>
    <span class="robots-catalog__sort">A–Z</span>
  </div>

  <div class="robots-catalog__grid" id="robots-catalog-grid" aria-live="polite"></div>
  <p class="robots-catalog__empty" id="robots-catalog-empty" hidden>Nenhum robô encontrado para esta busca.</p>
</section>
