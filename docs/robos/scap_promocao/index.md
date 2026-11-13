<article class="solution-page" data-verified="false" data-contact-name="Erik Tadeu de Morais">
  <div class="solution-card">
    <a class="solution-back" href="../" aria-label="Voltar para a Biblioteca de soluções">← Voltar para a Biblioteca de soluções</a>
    <header class="solution-top"><div><p class="solution-status">Solução com segurança verificada pelo Escritório Central de Inovação e Automatização</p><h1>Inclui promoção</h1><p class="solution-date">Publicada em 17/12/2024 · Atualizada em 09/11/2026</p></div></header>
    <div class="solution-layout"><main>
      <section class="solution-section" aria-labelledby="descricao"><h2 id="descricao">Descrição da solução</h2><p class="solution-use">Robô destinado a inclusão de Promoção no SISAP para os servidores através da utilização da rotina Evolução na Carreira, opção 06 - Incluir Promoção.</p></section>
      <!-- robot-flow -->
      <section class="solution-section" aria-labelledby="responsavel"><h2 id="responsavel">Responsável</h2><div class="solution-responsible"><p><span class="solution-contact-label">Nome:</span><span>Erik Tadeu de Morais</span></p><p><span class="solution-contact-label">E-mail:</span><a class="solution-contact" href="mailto:erik.morais@planejamento.mg.gov.br">erik.morais@planejamento.mg.gov.br</a></p><p><span class="solution-contact-label">Órgão:</span><span>Seplag</span></p></div></section>
      <section class="solution-section" aria-labelledby="requisitos-sistemas-ferramentas"><h2 id="requisitos-sistemas-ferramentas">Pré-requisitos, sistemas e ferramentas</h2><div class="solution-meta-grid"><div class="solution-tags"><span class="solution-tag solution-tag--prerequisite">Power Automate na versão correta</span><span class="solution-tag solution-tag--prerequisite">Chrome como navegador</span><span class="solution-tag solution-tag--prerequisite">Extensão Chrome para Power Automate ativada.</span><span class="solution-tag solution-tag--system">SISAP</span><span class="solution-tag solution-tag--tool">Power Automate Desktop</span></div></div></section>
      <section class="solution-section" aria-labelledby="uso"><h2 id="uso">Como usar a solução</h2><p class="solution-use">1. Copie o código do robô (código-fonte) e cole em um novo fluxo Power Automate Desktop.
2. Clique em anexos para baixar a planilha-modelo.
3. Crie a variável de entrada usuario, com as informações do seu usuário de acesso ao SISAP.
4. Crie a variável de entrada senha, com as informações da sua senha de acesso ao SISAP.

Instruções de preenchimento da planilha.
&gt; Para servidores que possuem masp de 6 dígitos, sem contar o DV, deverá ser inserido o número "0" antes do masp. Exemplo: 0111222. Se for o caso, formatar os dados da coluna "B - MASP" da seguinte maneira: Formatar Células&gt;Número&gt;Personalizado&gt;Tipo&gt;0########
&gt; As colunas "DV" e "ADMISSÃO" deverão conter apenas o número, sem zero a esquerda.
&gt; As colunas "DT.INICIO" e "DATA PUBLICAÇÃO" devem ser preenchidas no seguinte formato: 00/00/0000.
&gt; Na coluna "NAT", deverá ser inserido o numero "0" somente para naturezas com menos de três digitos. Exemplo: 036. Se for o caso, formatar os dados da coluna NAT da seguinte maneira: Formatar Células&gt;Número&gt;Personalizado&gt;Tipo&gt;0##.
&gt; A coluna "STATUS" não deverá ser preenchida.
&gt; A planilha modelo contém um exemplo de preenchimento, que pode ser apagado para inclusão dos dados.</p></section>
      <section class="solution-section" aria-labelledby="observacoes"><h2 id="observacoes">Observações</h2><p class="solution-use">1. Na nova aba que será aberta, basta apertar Ctrl+A para selecionar todo código e Ctrl+C para copiar.
2. Qualquer modificação além do preenchimento da planilha Excel nos moldes em que ela está (por exemplo, a inclusão de mais colunas ou o deslocamento das já existentes) pode exigir modificações no código original do robô. O download desta planilha não é suportado na versão mobile desta página.
3-4. MASP e senha do SISAP.</p></section>
      <section class="solution-help" aria-labelledby="solution-help-title"><h2 id="solution-help-title"><span class="solution-help-icon" aria-hidden="true">?</span>Caso precise de ajuda</h2><div class="solution-help-content"><p>Algum erro está ocorrendo em uma das fases de criação de seu robô? Não tem problema. Acesse <a href="https://automatiza-mg.github.io/automatizacoes/blog/causas-comuns-de-erros-na-montagem-dos-fluxos-dos-rob%C3%B4s/">aqui</a> uma lista com causas de erros ou paradas do robô.</p><p>Para esclarecer dúvidas, recomendamos a participação em nosso Tira-Dúvidas, realizado todas as sextas-feiras, das 15h às 17h. Para participar, <a href="https://bit.ly/48A1Obu">acesse</a>.</p><p>Caso prefira, mande um e-mail para o endereço que está em <a href="#responsavel">“Responsável”</a>, mais acima nesta mesma página. Ele pertence ao criador / à criadora do robô, que poderá auxiliar com eventuais dúvidas.</p><p>Ótimo trabalho!</p></div></section>
      <div class="solution-keywords" hidden aria-hidden="true">Palavras-chave: RH - SISAP</div>
    </main><aside class="solution-sidebar" aria-label="Informações da solução">
      <nav class="solution-index" aria-label="Índice da página"><p class="solution-label">Nesta página</p><ol><li><a href="#descricao">Descrição da solução</a></li><li><a href="#responsavel">Responsável</a></li><li><a href="#requisitos-sistemas-ferramentas">Pré-requisitos, sistemas e ferramentas</a></li><li><a href="#uso">Como usar a solução</a></li><li><a href="#observacoes">Observações</a></li></ol></nav>
      <section class="solution-info"><p class="solution-label">Repositório e anexos</p><div class="solution-actions"><a class="solution-action" href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/scap/promocao/promocao_main.txt" target="_blank" rel="noopener">Código-fonte</a><a class="solution-action" href="./assets/inclusao_promocao.csv" download>Baixar Anexos</a></div></section>
    </aside></div>
    <a class="solution-back solution-back--bottom" href="../" aria-label="Voltar para a Biblioteca de soluções">← Voltar para a Biblioteca de soluções</a>
  </div>
</article>
