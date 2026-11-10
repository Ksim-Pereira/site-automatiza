<article class="solution-page" data-verified="false" data-contact-name="Erik Tadeu de Morais">
  <div class="solution-card">
    <a class="solution-back" href="../" aria-label="Voltar para a Biblioteca de soluções">← Voltar para a Biblioteca de soluções</a>
    <header class="solution-top"><div><p class="solution-status">Solução com segurança verificada pelo Escritório Central de Inovação e Automatização</p><h1>Inclui faltas – Rotina Histórico</h1><p class="solution-date">Publicada em 17/12/2024 · Atualizada em 09/11/2026</p></div></header>
    <div class="solution-layout"><main>
      <section class="solution-section" aria-labelledby="descricao"><h2 id="descricao">Descrição da solução</h2><p class="solution-use">Robô destinado a inclusão de Faltas relativas a meses anteriores através da utilização da rotina Histórico Servidor, opção 21 - Faltas, opção 01 - Incluir Histórico Faltas Consolidadas e lançamento da verba 7506 com o valor da falta a ser descontada, através da rotina Manutenção Dados Financeiros, opção 01 - Lançamento Cargo Código de Recebimento</p></section>
      <!-- robot-flow -->
      <section class="solution-section" aria-labelledby="responsavel"><h2 id="responsavel">Responsável</h2><div class="solution-responsible"><p><span class="solution-contact-label">Nome:</span><span>Erik Tadeu de Morais</span></p><p><span class="solution-contact-label">E-mail:</span><a class="solution-contact" href="mailto:erik.morais@planejamento.mg.gov.br">erik.morais@planejamento.mg.gov.br</a></p><p><span class="solution-contact-label">Órgão:</span><span>Seplag</span></p></div></section>
      <section class="solution-section" aria-labelledby="requisitos-sistemas-ferramentas"><h2 id="requisitos-sistemas-ferramentas">Pré-requisitos, sistemas e ferramentas</h2><div class="solution-meta-grid"><div class="solution-tags"><span class="solution-tag solution-tag--prerequisite">Power Automate na versão correta</span><span class="solution-tag solution-tag--prerequisite">Acesso ao SiSAP com perfil para taxação de faltas.</span><span class="solution-tag solution-tag--system">SISAP</span><span class="solution-tag solution-tag--tool">Power Automate Desktop</span></div></div></section>
      <section class="solution-section" aria-labelledby="uso"><h2 id="uso">Como usar a solução</h2><p class="solution-use">1. Copie o código do robô (código fonte) e cole em um novo fluxo do Power Automate.
2. Clique em anexos para baixar a planilha modelo.
3. Complete as colunas da planilha modelo com as informações de faltas a serem incluídas no Sisap: NOME,MASP,DV,ADMISSÃO,MÊS/ANO APURAÇÃO,TIPO DE FALTA,QUANTIDADE DE FALTAS, NATUREZA DA FALTA,HORAS A DESCONTAR,NATUREZA DA FALTA/HORAS.
4. Crie a variável de entrada usuario, com as informações do seu usuário de acesso ao SISAP..
5. Crie a variável de entrada senha, com as informações da sua senha de acesso ao SISAP.

Instruções de preenchimento da planilha.
&gt; Para servidores que possuem masp de 6 digitos, sem contar o DV, deverá ser inserido o número "0" antes do masp. Exemplo: 0111222. Se for o caso, formatar os dados da coluna "B - MASP" da seguinte maneira: Formatar Células&gt;Número&gt;Personalizado&gt;Tipo&gt;0########
&gt; As colunas "C - DV" e "D - ADMISSÃO" deverão conter apenas o número, sem zero a esquerda.
&gt; A coluna "E - MÊS/ANO APURAÇÃO" deverá ser preencida no formato 00/0000.
&gt; A coluna "F - TIPO DE FALTA" deverá ser preenchido no formato 00. Exemplo: inlcusão da falta tipo 1 - exercicio: inserir na respectiva coluna "01".
&gt; A coluna "G - QUANTIDADE DE FALTAS" deverá ser preenchida no formato "00". Observação: Se o lançamento for relativo apenas a quantidade de horas a descontar, sempre preencher a coluna "G" com a quantidade de faltas "00".
&gt; A coluna "H - NATUREZA DA FALTA" é relativa a natureza da falta. Deverá ser prenchida no formato "000". Exemplo: 501 para faltas/dias administrativo; 502 para faltas/aulas obrigatórias, etc. Observação: Se o lançamento for relativo apenas a quantidade de horas a descontar, sempre preencher a coluna "H" com o número "000" (três zeros).
&gt; A coluna "I - HORAS A DESCONTAR" deverá ser preenchida com a quantidade de horas a descontar. Caso não tenha a quantidade de horas a descontar, sempre preenchê-la com o número "0" (zero).
&gt; A coluna "J - NATUREZA DA FALTA/HORAS" é relativa a natureza das faltas/horas. Deverá ser preenchida no formato "000". Exemplo: 511 para horas descontadas/administrativo; 512 para horas/greve. Caso não exista falta em horas para descontar, prencher a coluna "J - NATUREZA DA FALTA/HORAS" sempre com o número "0" (zero).
&gt; A coluna "K" não deve ser preenchida.</p></section>
      <section class="solution-section" aria-labelledby="observacoes"><h2 id="observacoes">Observações</h2><p class="solution-use">1. Na nova aba que será aberta, basta apertar Ctrl+A para selecionar todo código e Ctrl+C para copiar.
2. Qualquer modificação além do preenchimento da planilha Excel nos moldes em que ela está (por exemplo, a inclusão de mais colunas ou o deslocamento das já existentes) pode exigir modificações no código original do robô. O download desta planilha não é suportado na versão mobile desta página.</p></section>
      <section class="solution-help" aria-labelledby="solution-help-title"><h2 id="solution-help-title"><span class="solution-help-icon" aria-hidden="true">?</span>Caso precise de ajuda</h2><div class="solution-help-content"><p>Algum erro está ocorrendo em uma das fases de criação de seu robô? Não tem problema. Acesse <a href="https://automatiza-mg.github.io/automatizacoes/blog/causas-comuns-de-erros-na-montagem-dos-fluxos-dos-rob%C3%B4s/">aqui</a> uma lista com causas de erros ou paradas do robô.</p><p>Para esclarecer dúvidas, recomendamos a participação em nosso Tira-Dúvidas, realizado todas as sextas-feiras, das 15h às 17h. Para participar, <a href="https://bit.ly/48A1Obu">acesse</a>.</p><p>Caso prefira, mande um e-mail para o endereço que está em <a href="#responsavel">“Responsável”</a>, mais acima nesta mesma página. Ele pertence ao criador / à criadora do robô, que poderá auxiliar com eventuais dúvidas.</p><p>Ótimo trabalho!</p></div></section>
      <div class="solution-keywords" hidden aria-hidden="true">Palavras-chave: RH - SISAP</div>
    </main><aside class="solution-sidebar" aria-label="Informações da solução">
      <nav class="solution-index" aria-label="Índice da página"><p class="solution-label">Nesta página</p><ol><li><a href="#descricao">Descrição da solução</a></li><li><a href="#responsavel">Responsável</a></li><li><a href="#requisitos-sistemas-ferramentas">Pré-requisitos, sistemas e ferramentas</a></li><li><a href="#uso">Como usar a solução</a></li><li><a href="#observacoes">Observações</a></li></ol></nav>
      <section class="solution-info"><p class="solution-label">Repositório e anexos</p><div class="solution-actions"><a class="solution-action" href="./assets/falta_rotina_historico.csv" download>Baixar Anexos</a></div></section>
    </aside></div>
    <a class="solution-back solution-back--bottom" href="../" aria-label="Voltar para a Biblioteca de soluções">← Voltar para a Biblioteca de soluções</a>
  </div>
</article>
