
<article class="solution-page" data-verified="false" data-contact-name="Automatiza-mg">
  <div class="solution-card">
    <a class="solution-back" href="../" aria-label="Voltar para a Biblioteca de soluções">← Voltar para a Biblioteca de soluções</a>
    <header class="solution-top"><div><h1>Atribui processos no SEI</h1><p class="solution-date">Atualizada em 10/11/2026</p></div></header>
    <div class="solution-layout"><main>
      <section class="solution-section" aria-labelledby="descricao"><h2 id="descricao">Descrição da solução</h2><p class="solution-use">Faz login no SEI, troca de unidade (se necessário) e percorre a fila. Atribui com base no Nome e CPF, percorrendo pela unidade e órgão; registra log de auditoria de atribuição. Pode ser executado em modo de teste (sem atribuir) e modo produção (atribui de fato). Aguarda o carregamento das páginas para garantir que tudo esteja certo.</p></section>
      <section class="solution-section" aria-labelledby="responsavel"><h2 id="responsavel">Responsável</h2><div class="solution-responsible"><p><span class="solution-contact-label">Nome:</span><span>Automatiza-mg</span></p><p><span class="solution-contact-label">E-mail:</span><a class="solution-contact" href="mailto:automatizamg@planejamento.mg.gov.br">automatizamg@planejamento.mg.gov.br</a></p><p><span class="solution-contact-label">Órgão:</span><span>Seplag</span></p></div></section>
      <section class="solution-section" aria-labelledby="requisitos-sistemas-ferramentas"><h2 id="requisitos-sistemas-ferramentas">Pré-requisitos, sistemas e ferramentas</h2><div class="solution-meta-grid"><div class="solution-tags"><span class="solution-tag solution-tag--prerequisite">Power Automate na versão correta</span><span class="solution-tag solution-tag--prerequisite">Chrome como navegador</span><span class="solution-tag solution-tag--prerequisite">Extensão Chrome para Power Automate ativada.</span><span class="solution-tag solution-tag--system">SEI</span><span class="solution-tag solution-tag--tool">Power Automate Desktop</span></div></div></section>
      <section class="solution-section" aria-labelledby="uso"><h2 id="uso">Como usar a solução</h2><p class="solution-use">1. Clique em anexos para baixar a planilha-modelo.
2. Copie o código do robô - Main (<a href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/atribuicao_processo_sei/main.txt" target="_blank" rel="noopener">link</a>) e cole em um novo fluxo Power Automate Desktop.
3. Copie o código do robô - configura_fluxo (<a href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/atribuicao_processo_sei/configura_fluxo.txt" target="_blank" rel="noopener">link</a>) e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
4. Copie o código do robô - carrega_fila_de_atribuicao (<a href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/atribuicao_processo_sei/carrega_fila_de_atribuicao.txt" target="_blank" rel="noopener">link</a>) e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
5. Copie o código do robô - login_sei (<a href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/login_sei.txt" target="_blank" rel="noopener">link</a>) e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
6. Copie o código do robô - troca_unidade (<a href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/troca_unidade_sei.txt" target="_blank" rel="noopener">link</a>) e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
7. Copie o código do robô - extrai_dados (<a href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/atribuicao_processo_sei/extrai_dados.txt" target="_blank" rel="noopener">link</a>) e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
8. Copie o código do robô - distribui_processos (<a href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/atribuicao_processo_sei/distribui_processos.txt" target="_blank" rel="noopener">link</a>) e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
9. Copie o código do robô - atribui_processos (<a href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/atribuicao_processo_sei/atribui_processos.txt" target="_blank" rel="noopener">link</a>) e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
10. Copie o código do robô - salva_dados (<a href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/atribuicao_processo_sei/salva_dados.txt" target="_blank" rel="noopener">link</a>) e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
11. Copie o código do robô - configura_marcadores (<a href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/atribuicao_processo_sei/configura_marcadores.txt" target="_blank" rel="noopener">link</a>) e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
12. Copie o código do robô - distribui_por_fila (<a href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/atribuicao_processo_sei/distribui_por_fila.txt" target="_blank" rel="noopener">link</a>) e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
13. Copie o código do robô - distribui_aleatoriamente (<a href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/atribuicao_processo_sei/distribui_aleatoriamente.txt" target="_blank" rel="noopener">link</a>) e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
14. Crie a variável de entrada login_sei.
15. Crie a variável de entrada senha_sei.
16. Crie a variável de entrada orgao_sei.
17. Crie a variável de entrada unidade_sei.
18. Crie a variável de entrada pastaDeTrabalho</p></section>
      <section class="solution-section" aria-labelledby="observacoes"><h2 id="observacoes">Observações</h2><p class="solution-use">1. Não mantenha linhas sem conteúdo na planilha. Preencha apenas as linhas necessárias. A inserção de linhas vazias acarretará erros no robô.
2-13. Na nova aba que será aberta, basta apertar Ctrl+A para selecionar todo código e Ctrl+C para copiar.
14. Login para entrar no SEI. Valor cadastrado para a variável deverá conter CPF com exatamente 11 caracteres numéricos. Favor não incluir pontos (.) ou hífen (-).
15. Senha para login no SEI. Recomendamos incluir esta variável como confidencial.
16-17. Órgão de login no SEI. Valor cadastrado para variável deverá ser exatamente igual à existente na lista de órgãos disponíveis na página inicial de login, inclusive com todas as letras maiúsculas.
18. Local e ou caminho da pasta onde se encontra o arquivo Excel com a fila de atribuição. Exemplo: 'C:\Users\xxxx\Downloads\Atribuição_automatica'</p></section>
      <div class="solution-keywords" hidden aria-hidden="true">Palavras-chave: SEI</div>
    </main><aside class="solution-sidebar" aria-label="Informações da solução">
      <nav class="solution-index" aria-label="Índice da página"><p class="solution-label">Nesta página</p><ol><li><a href="#descricao">Descrição da solução</a></li><li><a href="#responsavel">Responsável</a></li><li><a href="#requisitos-sistemas-ferramentas">Pré-requisitos, sistemas e ferramentas</a></li><li><a href="#uso">Como usar a solução</a></li><li><a href="#observacoes">Observações</a></li></ol></nav>
      <section class="solution-info"><p class="solution-label">Repositório e anexos</p><div class="solution-actions"></div></section>
    </aside></div>
    <a class="solution-back solution-back--bottom" href="../" aria-label="Voltar para a Biblioteca de soluções">← Voltar para a Biblioteca de soluções</a>
  </div>
</article>\n
