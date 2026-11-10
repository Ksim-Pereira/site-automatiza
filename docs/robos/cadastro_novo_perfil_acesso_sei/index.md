
<article class="solution-page" data-verified="false" data-contact-name="Automatiza-mg">
  <div class="solution-card">
    <a class="solution-back" href="../" aria-label="Voltar para a Biblioteca de soluções">← Voltar para a Biblioteca de soluções</a>
    <header class="solution-top"><div><h1>Cria memorando no SEI</h1><p class="solution-date">Atualizada em 10/11/2026</p></div></header>
    <div class="solution-layout"><main>
      <section class="solution-section" aria-labelledby="descricao"><h2 id="descricao">Descrição da solução</h2><p class="solution-use">obô que cria memorando em processo criado no SEI. Utiliza os subfluxos de login, troca de unidade, criação de processo no SEI e criação de texto de memorando com IA.</p></section>
      <section class="solution-section" aria-labelledby="responsavel"><h2 id="responsavel">Responsável</h2><div class="solution-responsible"><p><span class="solution-contact-label">Nome:</span><span>Automatiza-mg</span></p><p><span class="solution-contact-label">E-mail:</span><a class="solution-contact" href="mailto:automatizamg@planejamento.mg.gov.br">automatizamg@planejamento.mg.gov.br</a></p><p><span class="solution-contact-label">Órgão:</span><span>Seplag</span></p></div></section>
      <section class="solution-section" aria-labelledby="requisitos-sistemas-ferramentas"><h2 id="requisitos-sistemas-ferramentas">Pré-requisitos, sistemas e ferramentas</h2><div class="solution-meta-grid"><div class="solution-tags"><span class="solution-tag solution-tag--prerequisite">Power Automate na versão correta</span><span class="solution-tag solution-tag--prerequisite">Chrome como navegador</span><span class="solution-tag solution-tag--prerequisite">Extensão Chrome para Power Automate ativada.</span><span class="solution-tag solution-tag--system">SEI</span><span class="solution-tag solution-tag--tool">Power Automate Desktop</span></div></div></section>
      <section class="solution-section" aria-labelledby="uso"><h2 id="uso">Como usar a solução</h2><p class="solution-use">1. Siga todos os passos do robô de criação de processos no SEI (<a href="https://automatiza-mg.github.io/automatizacoes/robos/cria_processo_sei/" target="_blank" rel="noopener">link</a>) .
2. Siga todos os passos do robô de criação de texto de memorando com IA (<a href="https://automatiza-mg.github.io/automatizacoes/robos/prompt_memo/" target="_blank" rel="noopener">link</a>). ⚠
3. Copie o código do robô - cria_memorando (código fonte) e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
4. Crie uma ação Executar subfluxo no subfluxo Main e selecione o subfluxo cria_memorando.
5. Crie a variável de entrada hipotese_restricao_memo.
6. Crie a variável de entrada destinatario_memo.
7. Crie a variável de entrada assunto_memo.
8. Crie a variável de entrada nprocesso.
9. Crie a variável de entrada resposta_1 com o conteúdo do seu memorando.</p></section>
      <section class="solution-section" aria-labelledby="observacoes"><h2 id="observacoes">Observações</h2><p class="solution-use">3. Na nova aba que será aberta, basta apertar Ctrl+A para selecionar todo código e Ctrl+C para copiar.
5. Apenas se o documento for passível de restrição (não for público), incluir a hipótese legal, de acordo com a lista de opções no SEI. Caso seja público, deverá ser criada mesmo assim, e o seu Valor ficar em branco.
6. Nome da pessoa do setor destinatário do documento.
7. Campo aberto para inclusão do assunto do documento.
8. Campo aberto para inclusão do número do processo.
9. Resposta que compõe o corpo de texto do memorando. Essa variável pode tanto ser personalizada como advir do robô de 'Cria texto de memorando com IA'. </p></section>
      <div class="solution-keywords" hidden aria-hidden="true">Palavras-chave: SEI</div>
    </main><aside class="solution-sidebar" aria-label="Informações da solução">
      <nav class="solution-index" aria-label="Índice da página"><p class="solution-label">Nesta página</p><ol><li><a href="#descricao">Descrição da solução</a></li><li><a href="#responsavel">Responsável</a></li><li><a href="#requisitos-sistemas-ferramentas">Pré-requisitos, sistemas e ferramentas</a></li><li><a href="#uso">Como usar a solução</a></li><li><a href="#observacoes">Observações</a></li></ol></nav>
      <section class="solution-info"><p class="solution-label">Repositório e anexos</p><div class="solution-actions"><a class="solution-action" href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/cria_memorando.txt" target="_blank" rel="noopener">link</a></div></section>
    </aside></div>
    <a class="solution-back solution-back--bottom" href="../" aria-label="Voltar para a Biblioteca de soluções">← Voltar para a Biblioteca de soluções</a>
  </div>
</article>\n
