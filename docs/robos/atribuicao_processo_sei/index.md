
<article class="solution-page" data-verified="false" data-contact-name="Automatiza-mg">
  <div class="solution-card">
    <a class="solution-back" href="../" aria-label="Voltar para a Biblioteca de soluções">← Voltar para a Biblioteca de soluções</a>
    <header class="solution-top"><div><h1>Busca números de documentos em processo SEI</h1><p class="solution-date">Atualizada em 10/11/2026</p></div></header>
    <div class="solution-layout"><main>
      <section class="solution-section" aria-labelledby="descricao"><h2 id="descricao">Descrição da solução</h2><p class="solution-use">Robô dedicado a facilitar a busca dos números de documentos em um processo SEI. Lista todos os documentos (e seus respectivos números) de um processo SEI. Aguarda o carregamento das páginas para garantir que tudo esteja certo.</p></section>
      <section class="solution-section" aria-labelledby="responsavel"><h2 id="responsavel">Responsável</h2><div class="solution-responsible"><p><span class="solution-contact-label">Nome:</span><span>Automatiza-mg</span></p><p><span class="solution-contact-label">E-mail:</span><a class="solution-contact" href="mailto:automatizamg@planejamento.mg.gov.br">automatizamg@planejamento.mg.gov.br</a></p><p><span class="solution-contact-label">Órgão:</span><span>Seplag</span></p></div></section>
      <section class="solution-section" aria-labelledby="requisitos-sistemas-ferramentas"><h2 id="requisitos-sistemas-ferramentas">Pré-requisitos, sistemas e ferramentas</h2><div class="solution-meta-grid"><div class="solution-tags"><span class="solution-tag solution-tag--prerequisite">Power Automate na versão correta</span><span class="solution-tag solution-tag--prerequisite">Chrome como navegador</span><span class="solution-tag solution-tag--prerequisite">Extensão Chrome para Power Automate ativada.</span><span class="solution-tag solution-tag--system">SEI</span><span class="solution-tag solution-tag--tool">Power Automate Desktop</span></div></div></section>
      <section class="solution-section" aria-labelledby="uso"><h2 id="uso">Como usar a solução</h2><p class="solution-use">1. Utilize o robô de login no SEI em um novo subfluxo chamado login_sei (<a href="https://automatiza-mg.github.io/automatizacoes/robos/login_sei/#montando-o-seu-robo" target="_blank" rel="noopener">link</a>).
2. Utilize o robô de troca de unidade no SEI caso precise (<a href="https://automatiza-mg.github.io/automatizacoes/robos/troca_unidade_sei/" target="_blank" rel="noopener">link</a>).
3. Copie o código do robô (código fonte) e cole em um novo fluxo Power Automate Desktop.
4. Crie a variável de entrada numero_processo.</p></section>
      <section class="solution-section" aria-labelledby="observacoes"><h2 id="observacoes">Observações</h2><p class="solution-use">1. As variáveis de entrada descritas na página do robo para login no sei também deverão ser criadas.
3. Na nova aba que será aberta, basta apertar Ctrl+A para selecionar todo código e Ctrl+C para copiar.
4. Necessário criar repetição (loop) caso seja necessário buscar números de documentos de mais de um processo.</p></section>
      <div class="solution-keywords" hidden aria-hidden="true">Palavras-chave: SEI</div>
    </main><aside class="solution-sidebar" aria-label="Informações da solução">
      <nav class="solution-index" aria-label="Índice da página"><p class="solution-label">Nesta página</p><ol><li><a href="#descricao">Descrição da solução</a></li><li><a href="#responsavel">Responsável</a></li><li><a href="#requisitos-sistemas-ferramentas">Pré-requisitos, sistemas e ferramentas</a></li><li><a href="#uso">Como usar a solução</a></li><li><a href="#observacoes">Observações</a></li></ol></nav>
      <section class="solution-info"><p class="solution-label">Repositório e anexos</p><div class="solution-actions"><a class="solution-action" href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/busca_numeros_documentos_processo_sei.txt" target="_blank" rel="noopener">link</a></div></section>
    </aside></div>
    <a class="solution-back solution-back--bottom" href="../" aria-label="Voltar para a Biblioteca de soluções">← Voltar para a Biblioteca de soluções</a>
  </div>
</article>\n
