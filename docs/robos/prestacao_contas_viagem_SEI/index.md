<article class="solution-page" data-verified="false" data-contact-name="Leyverson Teodoro">
  <div class="solution-card">
    <a class="solution-back" href="../" aria-label="Voltar para a Biblioteca de soluções">← Voltar para a Biblioteca de soluções</a>
    <header class="solution-top"><div><p class="solution-status">Solução com segurança verificada pelo Escritório Central de Inovação e Automatização</p><h1>Estrutura prestação de contas de transporte por aplicativo - viagens a serviço</h1><p class="solution-date">Publicada em 29/11/2024 · Atualizada em 09/11/2026</p></div></header>
    <div class="solution-layout"><main>
      <section class="solution-section" aria-labelledby="descricao"><h2 id="descricao">Descrição da solução</h2><p class="solution-use">Este robô automatiza o registro e a prestação de contas de viagens no Sistema Eletrônico de Informações (SEI).

Ele é capaz de processar informações fornecidas pelo usuário necessárias para o preenchimento de formulário SEI, ler os comprovantes de transporte por aplicativo (que devem estar em PDFs de texto), calcular o valor total advindo do somatório das viagens e montar o processo SEI correspondente (com formulário de prestação de contas, PDFs dos comprovantes e documento de ateste).

Entrada de Informações:
Solicita dados essenciais ao usuário, como nome da pessoa para quem a prestação será feita, MASP, diretório (caminho da pasta) onde estão salvos os comprovantes de viagem, dentre outras informações necessárias para preenchimento dos documentos.

Processamento de PDFs:
Busca os arquivos PDF na pasta informada.
Extrai e processa textos dos comprovantes para identificar valores de transporte.
Utiliza IA para extrair o valor da viagem (utilização do Chat GPT neste caso).
Calcula o valor total das viagens realizadas.

Automatização no SEI:
Realiza login no SEI com as credenciais fornecidas.
Cria novos processos para "Viagem a Serviço".
Preenche automaticamente os campos necessários do formulário SEI, incluindo valores calculados.
Inclui documentos relacionados, como prestações de contas e comprovantes, no processo criado.</p></section>
      <!-- robot-flow -->
      <section class="solution-section" aria-labelledby="responsavel"><h2 id="responsavel">Responsável</h2><div class="solution-responsible"><p><span class="solution-contact-label">Nome:</span><span>Leyverson Teodoro</span></p><p><span class="solution-contact-label">E-mail:</span><a class="solution-contact" href="mailto:leyversontss@gmail.com">leyversontss@gmail.com</a></p><p><span class="solution-contact-label">Órgão:</span><span></span></p></div></section>
      <section class="solution-section" aria-labelledby="requisitos-sistemas-ferramentas"><h2 id="requisitos-sistemas-ferramentas">Pré-requisitos, sistemas e ferramentas</h2><div class="solution-meta-grid"><div class="solution-tags"><span class="solution-tag solution-tag--prerequisite">Power Automate na versão correta.</span><span class="solution-tag solution-tag--prerequisite">Diretório (caminho da pasta) onde estão os comprovantes em PDF da pessoa para quem a prestação de contas será feita.</span><span class="solution-tag solution-tag--prerequisite">Dados do usuário para acesso e preenchimento de formulário SEI.</span><span class="solution-tag solution-tag--prerequisite">Comprovantes de viagens em formato PDF nato digital (não podem ser PDFs digitalizados).</span><span class="solution-tag solution-tag--prerequisite">Usuário já logado no Chat GPT antes da rodagem do robô.</span><span class="solution-tag solution-tag--prerequisite">Subfluxos criados com os mesmos nomes indicados na seção Montando o seu robô.</span><span class="solution-tag solution-tag--system">SEI</span><span class="solution-tag solution-tag--tool">Power Automate Desktop</span></div></div></section>
      <section class="solution-section" aria-labelledby="uso"><h2 id="uso">Como usar a solução</h2><p class="solution-use">1. Copie o código do robô - Main (<a href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/prestacao_uber/prestacao_uber_main.txt" target="_blank" rel="noopener">link</a>) e cole em um novo fluxo Power Automate Desktop.
2. Copie o código do robô - entrada_variaveis (<a href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/prestacao_uber/prestacao_uber_entrada_variaveis.txt" target="_blank" rel="noopener">link</a>) e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
3. Copie o código do robô - chat_gpt (<a href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/prestacao_uber/prestacao_uber_chat_gpt.txt" target="_blank" rel="noopener">link</a>) e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
4. Copie o código do robô - login_sei (<a href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/login_sei.txt" target="_blank" rel="noopener">link</a>) e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
5. Copie o código do robô - cria_processo (<a href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/prestacao_uber/prestacao_uber_cria_processo.txt" target="_blank" rel="noopener">link</a>) e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
6. Copie o código do robô - insere_prestacao (<a href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/prestacao_uber/prestacao_uber_insere_prestacao.txt" target="_blank" rel="noopener">link</a>) e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
7. Copie o código do robô - insere_PDFs (<a href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/prestacao_uber/prestacao_uber_insere_PDFs.txt" target="_blank" rel="noopener">link</a>) e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
8. Copie o código do robô - insere_ateste (<a href="https://raw.githubusercontent.com/automatiza-mg/biblioteca-de-robos/refs/heads/main/robos/site/prestacao_uber/prestacao_uber_insere_ateste.txt" target="_blank" rel="noopener">link</a>) e cole em um novo subfluxo com esse mesmo nome no Power Automate Desktop.
9. Crie a variável de entrada acesso_processo.
10. Crie a variável de entrada especificacao.
11. Crie a variável de entrada hipotese_restricao_ateste.
12. Crie a variável de entrada hipotese_restricao_prestacao.
13. Crie a variável de entrada hipotese_restricao_processo.
14. Crie a variável de entrada login_sei.
15. Crie a variável de entrada orgao_sei.
16. Crie a variável de entrada senha_sei.
17. Crie a variável de entrada email_institucional.
18. Crie a variável de entrada tipo_do_processo_criar.
19. Crie a variável de entrada dado_agencia.
20. Crie a variável de entrada dado_banco.
21. Crie a variável de entrada dado_conta.</p></section>
      <section class="solution-section" aria-labelledby="observacoes"><h2 id="observacoes">Observações</h2><p class="solution-use">1-8. Na nova aba que será aberta, basta apertar Ctrl+A para selecionar todo código e Ctrl+C para copiar.
9. Nível do acesso ("Público" ou "Restrito"). Recomendamos a modalidade restrita.
10. Um texto a ser inserido no campo aberto do SEI que descreve sumariamente o processo a ser criado, como um título.
11-13. Apenas se o processo for passível de restrição (não for público), incluir a hipótese legal, de acordo com a lista de opções no SEI. Caso seja público, deverá ser criada mesmo assim, e o seu Valor ficar em branco.
14. Login para entrar no SEI. Valor cadastrado para a variável deverá conter CPF com exatamente 11 caracteres numéricos. Favor não incluir pontos (.) ou hífen (-).
15. Órgão de login no SEI. Valor cadastrado para variável deverá ser exatamente igual à existente na lista de órgãos disponíveis na página inicial de login, inclusive com todas as letras maiúsculas.
16. Senha para login no SEI. Recomendamos incluir esta variável como confidencial.
17. Email institucional utilizado pelo servidor.
18. É uma palavra-chave que localiza o tipo do processo na lista predefinida de criação de processos do SEI: Memorando ou Comunicação: Interna, por exemplo.
19-21. Dados bancários a serem informados na prestação de contas para recebimento da restituição. Recomendamos incluir estas variáveis como confidenciais.</p></section>
      <section class="solution-help" aria-labelledby="solution-help-title"><h2 id="solution-help-title"><span class="solution-help-icon" aria-hidden="true">?</span>Caso precise de ajuda</h2><div class="solution-help-content"><p>Algum erro está ocorrendo em uma das fases de criação de seu robô? Não tem problema. Acesse <a href="https://automatiza-mg.github.io/automatizacoes/blog/causas-comuns-de-erros-na-montagem-dos-fluxos-dos-rob%C3%B4s/">aqui</a> uma lista com causas de erros ou paradas do robô.</p><p>Para esclarecer dúvidas, recomendamos a participação em nosso Tira-Dúvidas, realizado todas as sextas-feiras, das 15h às 17h. Para participar, <a href="https://bit.ly/48A1Obu">acesse</a>.</p><p>Caso prefira, mande um e-mail para o endereço que está em <a href="#responsavel">“Responsável”</a>, mais acima nesta mesma página. Ele pertence ao criador / à criadora do robô, que poderá auxiliar com eventuais dúvidas.</p><p>Ótimo trabalho!</p></div></section>
      <div class="solution-keywords" hidden aria-hidden="true">Palavras-chave: SEI</div>
    </main><aside class="solution-sidebar" aria-label="Informações da solução">
      <nav class="solution-index" aria-label="Índice da página"><p class="solution-label">Nesta página</p><ol><li><a href="#descricao">Descrição da solução</a></li><li><a href="#responsavel">Responsável</a></li><li><a href="#requisitos-sistemas-ferramentas">Pré-requisitos, sistemas e ferramentas</a></li><li><a href="#uso">Como usar a solução</a></li><li><a href="#observacoes">Observações</a></li></ol></nav>
      <section class="solution-info"><p class="solution-label">Repositório e anexos</p><div class="solution-actions"></div></section>
    </aside></div>
    <a class="solution-back solution-back--bottom" href="../" aria-label="Voltar para a Biblioteca de soluções">← Voltar para a Biblioteca de soluções</a>
  </div>
</article>
