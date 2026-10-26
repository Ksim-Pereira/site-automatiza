<!-- Para exibir o aviso de segurança, altere data-verified="false" para data-verified="true" no elemento article abaixo. -->

<style>
  .solution-page {
    --solution-ink: #111111;
    --solution-muted: #5d5d5d;
    --solution-line: #d8d8d8;
    --solution-soft: #f3f3f3;
    color: var(--solution-ink);
    font-family: Arial, Helvetica, sans-serif;
    margin: 1.5rem auto;
    max-width: none;
  }

  .solution-page, .solution-page * { box-sizing: border-box; }
  .solution-page p { color: var(--solution-ink); line-height: 1.65; margin: 0; text-align: left; }
  .solution-page h1, .solution-page h2, .solution-page h3 { color: var(--solution-ink); font-family: inherit; }

  .solution-card {
    background: #ffffff;
    border: 0px solid var(--solution-line);
    border-top: 0px solid #111111;
    border-radius: 0px;
    padding: 2rem;
  }

  .solution-top { display: flex; gap: 1.5rem; justify-content: space-between; }
  .solution-status { color: #111111; display: none; font-size: .78rem; font-weight: 700; margin: 0 0 .9rem; }
  .solution-page[data-verified="true"] .solution-status { display: block; }
  .solution-status::before { content: "✓ "; }
  .solution-page h1 { font-size: clamp(1.75rem, 3vw, 2.45rem); line-height: 1.15; margin: 0 0 .55rem; }
  .solution-date { color: var(--solution-muted) !important; font-size: .84rem; }

  .solution-layout { display: grid; gap: 2rem; grid-template-columns: minmax(0, 1fr) 230px; margin-top: 2rem; }
  .solution-section { margin-bottom: 1.7rem; }
  .solution-section h2 { border-left: 4px solid #111111; font-size: 1rem; margin: 0 0 .7rem; padding-left: .55rem; }
  .solution-tags { display: flex; flex-wrap: wrap; gap: .45rem; }
  .solution-tag { background: var(--solution-soft); border: 1px solid #dedede; border-radius: 4px; color: #111111; font-size: .77rem; padding: .25rem .5rem; }
  .solution-use { white-space: pre-line; }

  .solution-sidebar {
    align-content: start;
    align-self: start;
    display: grid;
    gap: .7rem;
    position: sticky;
    top: 1rem;
  }
  .solution-author { background: var(--solution-soft); border-radius: 8px; padding: 1rem; }
  .solution-label { color: var(--solution-muted); font-size: .68rem; font-weight: 700; letter-spacing: .04em; margin: 0 0 .55rem !important; text-transform: uppercase; }
  .solution-author strong { display: block; font-size: .9rem; margin-bottom: .35rem; }
  .solution-author a { color: #111111; font-size: .84rem; overflow-wrap: anywhere; }
  .solution-info { border: 1px solid var(--solution-line); border-radius: 7px; padding: .9rem 1rem; }
  .solution-info p { font-size: .8rem; }
  .solution-info strong { display: block; font-size: .94rem; margin-top: .18rem; }
  .solution-actions { display: grid; gap: .55rem; }
  .solution-action { border: 1px solid currentColor; border-radius: 5px; display: block; font-size: .8rem; font-weight: 700; padding: .6rem .7rem; text-decoration: none; }
  .solution-page .solution-action--unavailable {
    background: #fff5f5;
    border-color: #b42318 !important;
    color: #b42318 !important;
    cursor: not-allowed;
    opacity: .9;
    pointer-events: none;
  }

  /* Layout amplo somente para esta solução, em telas de computador. */
  @media (min-width: 721px) {
    body:has(.solution-page) .md-grid {
      max-width: calc(100vw - 2rem) !important;
    }
    body:has(.solution-page) .md-sidebar--primary,
    body:has(.solution-page) .md-sidebar--secondary {
      display: none;
    }
    body:has(.solution-page) .md-content {
      flex: 1 1 100% !important;
      max-width: none !important;
      width: 100% !important;
    }
  }

  @media (max-width: 720px) {
    .solution-card { padding: 1.25rem; }
    .solution-top { align-items: flex-start; flex-direction: column; }
    .solution-layout { grid-template-columns: 1fr; }
    .solution-sidebar { position: static; }
  }
</style>

<article class="solution-page" data-verified="false">
  <div class="solution-card">
    <header class="solution-top">
      <div>
        <p class="solution-status">Solução com segurança verificada pelo Escritório Central de Inovação e Automatização</p>
        <h1>Criar arquivo SAF</h1>
        <p class="solution-date">Publicada em 26/10/2026 · Atualizada em 26/10/2026</p>
      </div>
    </header>

    <div class="solution-layout">
      <main>
        <section class="solution-section" aria-labelledby="descricao">
          <h2 id="descricao">Descrição da solução</h2>
          <p>Criar arquivo SAF a partir de documento em PDF e seus metadados em planilha Excel.</p>
        </section>

        <section class="solution-section" aria-labelledby="sistemas">
          <h2 id="sistemas">Sistemas que interagem</h2>
          <div class="solution-tags"><span class="solution-tag">Local</span></div>
        </section>

        <section class="solution-section" aria-labelledby="ferramentas">
          <h2 id="ferramentas">Ferramentas</h2>
          <div class="solution-tags"><span class="solution-tag">Python</span><span class="solution-tag">Excel</span></div>
        </section>

        <section class="solution-section" aria-labelledby="palavras-chave">
          <h2 id="palavras-chave">Palavras-chave</h2>
          <div class="solution-tags"><span class="solution-tag">Gestão da Informação</span><span class="solution-tag">Biblioteca</span></div>
        </section>

        <section class="solution-section" aria-labelledby="uso">
          <h2 id="uso">Como usar a solução</h2>
          <p class="solution-use">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum pretium nibh, ac cursus ex tristique a. Curabitur sed arcu lectus. Mauris non feugiat elit, ac egestas odio. Sed nec erat sodales, gravida sem sed, accumsan arcu.

Phasellus iaculis congue sem eu congue. In varius felis ut tristique convallis. Proin hendrerit, leo in dictum convallis, sapien lorem feugiat odio, finibus efficitur dolor metus ut elit. Duis et rhoncus lorem. Maecenas sed laoreet tortor, ac rutrum lorem.

Cras rhoncus tellus accumsan, elementum dolor sit amet, efficitur sapien. Vivamus accumsan non augue eget ultrices. Suspendisse eu euismod leo, ac luctus ex. Ut rhoncus magna sed volutpat interdum. Mauris quis tempus lorem.</p>
        </section>
      </main>

      <aside class="solution-sidebar" aria-label="Informações da solução">
        <section class="solution-author">
          <p class="solution-label">Responsável</p>
          <strong>Autor</strong>
          <a href="mailto:autor@email.com">autor@email.com</a>
        </section>
        <section class="solution-info">
          <p class="solution-label">Repositório e anexos</p>
          <div class="solution-actions">
            <a class="solution-action solution-action--unavailable" href="#" aria-disabled="true" tabindex="-1">Repositório GitHub ↗</a>
            <a class="solution-action solution-action--unavailable" href="#" aria-disabled="true" tabindex="-1">Baixar anexo ↓</a>
          </div>
        </section>
      </aside>
    </div>
  </div>
</article>
