<article class="solution-page" data-verified="false" data-contact-name="Automatiza-mg">
  <div class="solution-card">
    <a class="solution-back" href="../" aria-label="Voltar para a Biblioteca de soluções">← Voltar para a Biblioteca de soluções</a>
    <header class="solution-top"><div><p class="solution-status">Solução com segurança verificada pelo Escritório Central de Inovação e Automatização</p><h1>Insere documento externo no SEI</h1><p class="solution-date">Publicada em 16/09/2024 · Atualizada em 09/11/2026</p></div></header>
    <div class="solution-layout"><main>
      <section class="solution-section" aria-labelledby="descricao"><h2 id="descricao">Descrição da solução</h2><p class="solution-use">Robô que insere documento externo em processo no SEI.</p></section>
      <!-- robot-flow -->
      <section class="solution-section" aria-labelledby="responsavel"><h2 id="responsavel">Responsável</h2><div class="solution-responsible"><p><span class="solution-contact-label">Nome:</span><span>Automatiza-mg</span></p><p><span class="solution-contact-label">E-mail:</span><a class="solution-contact" href="mailto:automatizamg@planejamento.mg.gov.br">automatizamg@planejamento.mg.gov.br</a></p><p><span class="solution-contact-label">Órgão:</span><span>Seplag</span></p></div></section>
      <section class="solution-section" aria-labelledby="requisitos-sistemas-ferramentas"><h2 id="requisitos-sistemas-ferramentas">Pré-requisitos, sistemas e ferramentas</h2><div class="solution-meta-grid"><div class="solution-tags"><span class="solution-tag solution-tag--prerequisite">Power Automate na versão correta</span><span class="solution-tag solution-tag--prerequisite">Chrome como navegador</span><span class="solution-tag solution-tag--prerequisite">Extensão Chrome para Power Automate ativada</span><span class="solution-tag solution-tag--system">SEI</span><span class="solution-tag solution-tag--tool">Power Automate Desktop</span></div></div></section>
      <section class="solution-section" aria-labelledby="uso"><h2 id="uso">Como usar a solução</h2><p class="solution-use">1. Siga todos os passos do robô de criação de processos no SEI (<a href="https://automatiza-mg.github.io/automatizacoes/robos/cria_processo_sei/" target="_blank" rel="noopener">link</a>).
2. Copie o código do robô - insere_documento_externo (código fonte) e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
3. Crie uma ação Executar subfluxo no subfluxo Main e selecione o subfluxo insere_documento_externo.
4. Clique em anexos para baixar a planilha modelo.
5. Complete as colunas da planilha modelo com as informações do documento a ser anexado: Tipo de Documento, data, número na árvore, nome na árvore, formato, tipo de conferência, nível de acesso, tipo de restrição, caminho do arquivo, nome do arquivo.
6. Crie a variável de entrada caminho_excel, com o caminho da pasta onde foi salvo.

Instruções de preenchimento da planilha.
&gt; Documento: Tipo do documento conforme nominado na lista predefinida do SEI para anexar arquivo externo.
&gt; data: Data sem barras. Exemplo: 19092024 (para 19/09/2024).
&gt; número na árvore: Número do documento, de livre atribuição.
&gt; nome na árvore: Nome do documento, de livre atribuição.
&gt; formato: Valores possíveis, conforme opções do SEI: Nato-digital ou Digitalizado nesta Unidade.
&gt; tipo de conferência: Preencher conforme lista predefinida de opções no SEI. Exemplo: Cópia Simples.
&gt; nível de acesso: Valores possíveis, conforme opções do SEI: Sigiloso, Restrito ou Público.
&gt; tipo de restrição: Apenas se o documento for passível de restrição (não for público), incluir a hipótese legal, de acordo com a lista de opções no SEI. Caso seja público, deixar a célula correspondente em branco.
&gt; caminho do arquivo: Copiar e colar o endereço da pasta onde se localiza o arquivo a ser anexado, sem o nome do próprio arquivo. Exemplo: C\Usuários\m123456\Documentos\
&gt; nome do arquivo: Copiar e colar o nome do arquivo a ser anexado, com a extensão. Exemplo: planilha.xlsx</p></section>
      <section class="solution-section" aria-labelledby="observacoes"><h2 id="observacoes">Observações</h2><p class="solution-use">2. Na nova aba que será aberta, basta apertar Ctrl+A para selecionar todo código e Ctrl+C para copiar.
4. Qualquer modificação além do preenchimento da planilha Excel nos moldes em que ela está (por exemplo, a inclusão de mais colunas ou o deslocamento das já existentes) pode exigir modificações no código original do robô. O download desta planilha não é suportado na versão mobile desta página.</p></section>
      <section class="solution-help" aria-labelledby="solution-help-title"><h2 id="solution-help-title"><span class="solution-help-icon" aria-hidden="true">?</span>Caso precise de ajuda</h2><div class="solution-help-content"><p>Algum erro está ocorrendo em uma das fases de criação de seu robô? Não tem problema. Acesse <a href="https://automatiza-mg.github.io/automatizacoes/blog/causas-comuns-de-erros-na-montagem-dos-fluxos-dos-rob%C3%B4s/">aqui</a> uma lista com causas de erros ou paradas do robô.</p><p>Para esclarecer dúvidas, recomendamos a participação em nosso Tira-Dúvidas, realizado todas as sextas-feiras, das 15h às 17h. Para participar, <a href="https://bit.ly/48A1Obu">acesse</a>.</p><p>Caso prefira, mande um e-mail para o endereço que está em <a href="#responsavel">“Responsável”</a>, mais acima nesta mesma página. Ele pertence ao criador / à criadora do robô, que poderá auxiliar com eventuais dúvidas.</p><p>Ótimo trabalho!</p></div></section>
      <div class="solution-keywords" hidden aria-hidden="true">Palavras-chave: SEI</div>
    </main><aside class="solution-sidebar" aria-label="Informações da solução">
      <nav class="solution-index" aria-label="Índice da página"><p class="solution-label">Nesta página</p><ol><li><a href="#descricao">Descrição da solução</a></li><li><a href="#responsavel">Responsável</a></li><li><a href="#requisitos-sistemas-ferramentas">Pré-requisitos, sistemas e ferramentas</a></li><li><a href="#uso">Como usar a solução</a></li><li><a href="#observacoes">Observações</a></li></ol></nav>
      <section class="solution-info"><p class="solution-label">Repositório e anexos</p><div class="solution-actions"><a class="solution-action" href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/main/robos/site/insere_documento_externo.txt" target="_blank" rel="noopener">Código-fonte</a><a class="solution-action" href="./assets/documento_sei.csv" download>Baixar Anexos</a></div></section>
    </aside></div>
    <a class="solution-back solution-back--bottom" href="../" aria-label="Voltar para a Biblioteca de soluções">← Voltar para a Biblioteca de soluções</a>
  </div>
</article>
