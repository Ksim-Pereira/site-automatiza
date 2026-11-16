<article class="solution-page" data-verified="false" data-contact-name="Erik Tadeu de Morais">
  <div class="solution-card">
    <a class="solution-back" href="../" aria-label="Voltar para a Biblioteca de soluções">← Voltar para a Biblioteca de soluções</a>
    <header class="solution-top"><div><p class="solution-status">Solução com segurança verificada pelo Escritório Central de Inovação e Automatização</p><h1>Inclui concessão de Férias Regulamentares</h1><p class="solution-date">Publicada em 17/12/2024 · Atualizada em 09/11/2026</p></div></header>
    <div class="solution-layout"><main>
      <section class="solution-section" aria-labelledby="descricao"><h2 id="descricao">Descrição da solução</h2><p class="solution-use">Robô destinado a inclusão de Férias Regulamentares no SISAP para os servidores através da utilização da rotina Férias Regulamentares, opção 01 - Incluir Férias Regulamentares.</p></section>
      <!-- robot-flow -->
      <section class="solution-section" aria-labelledby="responsavel"><h2 id="responsavel">Responsável</h2><div class="solution-responsible"><p><span class="solution-contact-label">Nome:</span><span>Erik Tadeu de Morais</span></p><p><span class="solution-contact-label">E-mail:</span><a class="solution-contact" href="mailto:erik.morais@planejamento.mg.gov.br">erik.morais@planejamento.mg.gov.br</a></p><p><span class="solution-contact-label">Órgão:</span><span>Seplag</span></p></div></section>
      <section class="solution-section" aria-labelledby="requisitos-sistemas-ferramentas"><h2 id="requisitos-sistemas-ferramentas">Pré-requisitos, sistemas e ferramentas</h2><div class="solution-meta-grid"><div class="solution-tags"><span class="solution-tag solution-tag--prerequisite">Power Automate na versão correta</span><span class="solution-tag solution-tag--prerequisite">Acesso ao SISAP com perfil necessário</span><span class="solution-tag solution-tag--system">SISAP</span><span class="solution-tag solution-tag--tool">Power Automate Desktop</span></div></div></section>
      <section class="solution-section" aria-labelledby="uso"><h2 id="uso">Como usar a solução</h2><p class="solution-use">1. Copie o código do robô e cole em um novo fluxo Power Automate Desktop.
2. Crie a variável de entrada usuario.
3. Crie a variável de entrada Senha.
4. Copie o código do robô - Ferias_Periodo_Integrale (<a href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/scap/ferias_regulamentares/subfluxo_ferias_per%C3%ADodo_integral.txt" target="_blank" rel="noopener">link</a>) cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
5. Copie o código do robô - Ferias_Parceladas (<a href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/scap/ferias_regulamentares/subfluxo_ferias_parceladas.txt" target="_blank" rel="noopener">link</a>) e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
6. Clique aqui para baixar a planilha modelo.
7. Edite a planilha-modelo ⚠ e informe o caminho do arquivo salvo nas ações 20 e 100.

Informações para a planilha-modelo︎
&gt; A planilha modelo contém exemplos de preenchimentos nas primeiras linhas, que deverão ser apagados para inclusão dos dados
&gt; Para servidores que possuem masp de 6 digitos, sem contar o DV, deverá ser inserido o número "0" antes do masp. Exemplo: 0111222. Se for o caso, formatar os dados da coluna "B - MASP" da seguinte maneira: Formatar Células&gt;Número&gt;Personalizado&gt;Tipo&gt;0########
&gt; As colunas "C - DV" e "D - ADMISSÃO" deverão conter apenas o número, sem zero à esquerda.
&gt; As colunas "G - NUMERO DE DIAS" e "K - DATA INICIO 2° PERIODO DE FÉRIAS" não deverão ser prenchidas nos casos de férias integrais.
&gt; A coluna "H - MÊS DE FÉRIAS" deverá ser preencida no formato de dois dígitos para os meses com um dígito. Por exemplo, mês 02, 03, 07.
&gt; A coluna "K - DATA INICIO 2° PERIODO DE FÉRIAS" deverá ser preenchida no formato 00/00/0000.
&gt; Para servidores que marcaram as férias em dois períodos, existindo a exclusão de um dos periodos de férias para remarcação, preencher até a coluna "J - DIA INICIO FÉRIAS".
&gt; A coluna "L" não deve ser preenchida, pois ela conterá o status após operação pelo robô.</p></section>
      <section class="solution-section" aria-labelledby="observacoes"><h2 id="observacoes">Observações</h2><p class="solution-use">2. MASP para acesso ao SISAP.
3. Senha de acesso ao SISAP.
6. Qualquer modificação além do preenchimento da planilha Excel nos moldes em que ela está (por exemplo, a inclusão de mais colunas ou o deslocamento das já existentes) pode exigir modificações no código original do robô. O download desta planilha não é suportado na versão mobile desta página.</p></section>
      <section class="solution-help" aria-labelledby="solution-help-title"><h2 id="solution-help-title"><span class="solution-help-icon" aria-hidden="true">?</span>Caso precise de ajuda</h2><div class="solution-help-content"><p>Algum erro está ocorrendo em uma das fases de criação de seu robô? Não tem problema. Acesse <a href="https://automatiza-mg.github.io/automatizacoes/blog/causas-comuns-de-erros-na-montagem-dos-fluxos-dos-rob%C3%B4s/">aqui</a> uma lista com causas de erros ou paradas do robô.</p><p>Para esclarecer dúvidas, recomendamos a participação em nosso Tira-Dúvidas, realizado todas as sextas-feiras, das 15h às 17h. Para participar, <a href="https://bit.ly/48A1Obu">acesse</a>.</p><p>Caso prefira, mande um e-mail para o endereço que está em <a href="#responsavel">“Responsável”</a>, mais acima nesta mesma página. Ele pertence ao criador / à criadora do robô, que poderá auxiliar com eventuais dúvidas.</p><p>Ótimo trabalho!</p></div></section>
      <div class="solution-keywords" hidden aria-hidden="true">Palavras-chave: RH - SISAP</div>
    </main><aside class="solution-sidebar" aria-label="Informações da solução">
      <nav class="solution-index" aria-label="Índice da página"><p class="solution-label">Nesta página</p><ol><li><a href="#descricao">Descrição da solução</a></li><li><a href="#responsavel">Responsável</a></li><li><a href="#requisitos-sistemas-ferramentas">Pré-requisitos, sistemas e ferramentas</a></li><li><a href="#uso">Como usar a solução</a></li><li><a href="#observacoes">Observações</a></li></ol></nav>
      <section class="solution-info"><p class="solution-label">Repositório e anexos</p><div class="solution-actions"><a class="solution-action" href="./assets/inclusao-ferias-regulamentares.csv" download>Baixar Anexos</a></div></section>
    </aside></div>
    <a class="solution-back solution-back--bottom" href="../" aria-label="Voltar para a Biblioteca de soluções">← Voltar para a Biblioteca de soluções</a>
  </div>
</article>
