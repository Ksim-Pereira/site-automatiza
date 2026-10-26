<!-- Para exibir o aviso de segurança, altere data-verified="false" para data-verified="true" no elemento article abaixo. -->

<style>
  .solution-page {
    --solution-ink: #111111;
    --solution-muted: #5d5d5d;
    --solution-line: #d8d8d8;
    --solution-soft: #f3f3f3;
    color: var(--solution-ink);
    font-family: Arial, Helvetica, sans-serif;
    margin: .5rem auto 1.5rem;
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
    padding: 1rem 2rem 2rem;
  }

  .solution-top { display: flex; gap: 1.5rem; justify-content: space-between; }
  .solution-status { color: #111111; display: none; font-size: .78rem; font-weight: 700; margin: 0 0 .9rem; }
  .solution-page[data-verified="true"] .solution-status { display: block; }
  .solution-status::before { content: "✓ "; }
  .solution-page h1 { font-size: clamp(1.75rem, 3vw, 2.45rem); line-height: 1.15; margin: 0 0 .55rem; }
  .solution-date { color: var(--solution-muted) !important; font-size: .84rem; }

  .solution-layout {
    display: grid;
    gap: 2rem;
    grid-template-columns: minmax(0, 1fr) clamp(280px, 22vw, 340px);
    margin-top: 2rem;
  }
  .solution-section { margin-bottom: 1.7rem; }
  .solution-section h2 { border-left: 4px solid #111111; font-size: 1rem; margin: 0 0 .7rem; padding-left: .55rem; }
  .solution-meta-grid { display: grid; gap: 1rem; grid-template-columns: repeat(3, minmax(0, 1fr)); margin-bottom: 1.7rem; }
  .solution-meta-grid .solution-section { margin-bottom: 0; }
  .solution-tags { display: flex; flex-wrap: wrap; gap: .45rem; }
  .solution-tag { background: var(--solution-soft); border: 1px solid #dedede; border-radius: 4px; color: #111111; font-size: .77rem; padding: .25rem .5rem; }
  .solution-use { white-space: pre-line; }

  .solution-sidebar {
    align-content: start;
    align-self: start;
    display: grid;
    gap: .7rem;
    position: sticky;
    /* Mantém o índice abaixo do cabeçalho fixo durante a rolagem. */
    top: calc(var(--md-header-height, 2.4rem) + 1rem);
  }
  .solution-label { color: var(--solution-muted); font-size: .68rem; font-weight: 700; letter-spacing: .04em; margin: 0 0 .55rem !important; text-transform: uppercase; }
  .solution-contact { color: var(--solution-ink); overflow-wrap: anywhere; }
  .solution-info { border: 1px solid var(--solution-line); border-radius: 7px; padding: .9rem 1rem; }
  .solution-info p { font-size: .8rem; }
  .solution-info strong { display: block; font-size: .94rem; margin-top: .18rem; }
  .solution-actions { display: grid; gap: .55rem; }
  .solution-action { border: 1px solid currentColor; border-radius: 5px; display: block; font-size: .8rem; font-weight: 700; padding: .6rem .7rem; text-decoration: none; }
  .solution-index { border: 1px solid var(--solution-line); border-radius: 7px; padding: .9rem 1rem; }
  .solution-index ol { margin: 0; padding-left: 1.2rem; }
  .solution-index li + li { margin-top: .4rem; }
  .solution-index a { color: var(--solution-ink); font-size: .84rem; text-decoration-thickness: 1px; text-underline-offset: .15em; }
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
    .solution-meta-grid { grid-template-columns: 1fr; }
    .solution-sidebar { position: static; }
  }

  @media (min-width: 721px) and (max-width: 1000px) {
    .solution-meta-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
</style>

<!-- Para trocar a pessoa responsável, altere somente data-contact-name. -->
<article class="solution-page" data-verified="false" data-contact-name="Autor Sobrenome e UltimoNome">
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

        <section class="solution-section" aria-labelledby="responsavel">
          <h2 id="responsavel">Responsável</h2>
          <p>Autor Sobrenome e UltimoNome</p>
          <p><a class="solution-contact" data-contact-email>Carregando e-mail...</a></p>
          <p data-contact-organization hidden></p>
        </section>

        <div class="solution-meta-grid">
          <section class="solution-section" aria-labelledby="pre-requisitos">
            <h2 id="pre-requisitos">Pré-requisitos</h2>
            <div class="solution-tags"><span class="solution-tag">Biblioteca Pandas</span><span class="solution-tag">Biblioteca OpenPyXL</span></div>
          </section>

          <section class="solution-section" aria-labelledby="sistemas">
            <h2 id="sistemas">Sistemas que interagem</h2>
            <div class="solution-tags"><span class="solution-tag">Local</span></div>
          </section>

          <section class="solution-section" aria-labelledby="ferramentas">
            <h2 id="ferramentas">Ferramentas</h2>
            <div class="solution-tags"><span class="solution-tag">Python</span><span class="solution-tag">Excel</span></div>
          </section>
        </div>

        <section class="solution-section" aria-labelledby="uso">
          <h2 id="uso">Como usar a solução</h2>
          <p class="solution-use">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum pretium nibh, ac cursus ex tristique a. Curabitur sed arcu lectus. Mauris non feugiat elit, ac egestas odio. Sed nec erat sodales, gravida sem sed, accumsan arcu.

Phasellus iaculis congue sem eu congue. In varius felis ut tristique convallis. Proin hendrerit, leo in dictum convallis, sapien lorem feugiat odio, finibus efficitur dolor metus ut elit. Duis et rhoncus lorem. Maecenas sed laoreet tortor, ac rutrum lorem.

Cras rhoncus tellus accumsan, elementum dolor sit amet, efficitur sapien. Vivamus accumsan non augue eget ultrices. Suspendisse eu euismod leo, ac luctus ex. Ut rhoncus magna sed volutpat interdum. Mauris quis tempus lorem.</p>
        </section>

        <!-- Termos ocultos para indexação pela busca do site. -->
        <div class="solution-keywords" hidden aria-hidden="true">Palavras-chave: Gestão da Informação, Biblioteca</div>
      </main>

      <aside class="solution-sidebar" aria-label="Informações da solução">
        <nav class="solution-index" aria-label="Índice da página">
          <p class="solution-label">Nesta página</p>
          <ol>
            <li><a href="#descricao">Descrição da solução</a></li>
            <li><a href="#responsavel">Responsável</a></li>
            <li><a href="#pre-requisitos">Pré-requisitos</a></li>
            <li><a href="#sistemas">Sistemas que interagem</a></li>
            <li><a href="#ferramentas">Ferramentas</a></li>
            <li><a href="#uso">Como usar a solução</a></li>
          </ol>
        </nav>
        <section class="solution-info">
          <p class="solution-label">Repositório e anexos</p>
          <div class="solution-actions">
            <a class="solution-action solution-action--unavailable" href="#" aria-disabled="true" tabindex="-1">Repositório GitHub ↗</a>
            <a class="solution-action solution-action--unavailable" href="#" aria-disabled="true" tabindex="-1">Outros links ↗</a>
            <a class="solution-action solution-action--unavailable" href="#" aria-disabled="true" tabindex="-1">Baixar anexo ↓</a>
          </div>
        </section>
      </aside>
    </div>
  </div>
</article>
