
<article class="solution-page" data-verified="false" data-contact-name="Automatiza-mg">
  <div class="solution-card">
    <a class="solution-back" href="../" aria-label="Voltar para a Biblioteca de soluções">← Voltar para a Biblioteca de soluções</a>
    <header class="solution-top"><div><h1>Cria processo no SEI</h1><p class="solution-date">Atualizada em 10/11/2026</p></div></header>
    <div class="solution-layout"><main>
      <section class="solution-section" aria-labelledby="descricao"><h2 id="descricao">Descrição da solução</h2><p class="solution-use">Robô que cria novo processo no SEI. Utiliza os subfluxos de login e troca de unidade no SEI. Permite a escolha da criação de processo público ou restrito.</p></section>
      <section class="solution-section" aria-labelledby="responsavel"><h2 id="responsavel">Responsável</h2><div class="solution-responsible"><p><span class="solution-contact-label">Nome:</span><span>Automatiza-mg</span></p><p><span class="solution-contact-label">E-mail:</span><a class="solution-contact" href="mailto:automatizamg@planejamento.mg.gov.br">automatizamg@planejamento.mg.gov.br</a></p><p><span class="solution-contact-label">Órgão:</span><span>Seplag</span></p></div></section>
      <section class="solution-section" aria-labelledby="requisitos-sistemas-ferramentas"><h2 id="requisitos-sistemas-ferramentas">Pré-requisitos, sistemas e ferramentas</h2><div class="solution-meta-grid"><div class="solution-tags"><span class="solution-tag solution-tag--prerequisite">Power Automate na versão correta</span><span class="solution-tag solution-tag--prerequisite">Chrome como navegador</span><span class="solution-tag solution-tag--prerequisite">Extensão Chrome para Power Automate ativada.</span><span class="solution-tag solution-tag--system">SEI</span><span class="solution-tag solution-tag--tool">Power Automate Desktop</span></div></div></section>
      <section class="solution-section" aria-labelledby="uso"><h2 id="uso">Como usar a solução</h2><p class="solution-use">1. Siga todos os passos do robô de login no SEI (<a href="https://automatiza-mg.github.io/automatizacoes/robos/login_sei/" target="_blank" rel="noopener">link</a>).
2. Copie o código do robô - troca_unidade (<a href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/troca_unidade_sei.txt" target="_blank" rel="noopener">link</a>) e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop⚠.
3. Copie o código do robô - cria_processo_sei (Código fonte) e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
4. Crie uma ação Executar subfluxo no subfluxo Main, para cada um dos subfluxos 2 e 3, selecionando troca_unidade_sei⚠ e cria_processo_sei, respectivamente.
5. Crie a variável de entrada tipo_do_processo_criar.
6. Crie a variável de entrada especificacao.
7. Crie a variável de entrada hipotese_restricao.</p></section>
      <section class="solution-section" aria-labelledby="observacoes"><h2 id="observacoes">Observações</h2><p class="solution-use">1-3. Na nova aba que será aberta, basta apertar Ctrl+A para selecionar todo código e Ctrl+C para copiar.
Verifique se as variáveis de entrada descritas na página do robo para login no sei login_sei, senha_sei, orgao_sei ainda precisam ser criadas.
1. Verifique se a variável de entrada descrita na página do robo para troca de unidade no SEI unidade_sei ainda precisa ser criada.
2. É uma palavra-chave que localiza o tipo do processo na lista predefinida de criação de processos do SEI: Memorando ou Comunicação: Interna, por exemplo.
5. Um texto a ser inserido no campo aberto do SEI que descreve sumariamente o processo a ser criado, como um título.
6-7. Apenas se o processo for passível de restrição (não for público), incluir a hipótese legal, de acordo com a lista de opções no SEI. Caso seja público, deverá ser criada mesmo assim, e o seu Valor ficar em branco. </p></section>
      <div class="solution-keywords" hidden aria-hidden="true">Palavras-chave: SEI</div>
    </main><aside class="solution-sidebar" aria-label="Informações da solução">
      <nav class="solution-index" aria-label="Índice da página"><p class="solution-label">Nesta página</p><ol><li><a href="#descricao">Descrição da solução</a></li><li><a href="#responsavel">Responsável</a></li><li><a href="#requisitos-sistemas-ferramentas">Pré-requisitos, sistemas e ferramentas</a></li><li><a href="#uso">Como usar a solução</a></li><li><a href="#observacoes">Observações</a></li></ol></nav>
      <section class="solution-info"><p class="solution-label">Repositório e anexos</p><div class="solution-actions"><a class="solution-action" href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/cria_processo_sei.txt" target="_blank" rel="noopener">Código-fonte</a></div></section>
    </aside></div>
    <a class="solution-back solution-back--bottom" href="../" aria-label="Voltar para a Biblioteca de soluções">← Voltar para a Biblioteca de soluções</a>
  </div>
</article>\n
