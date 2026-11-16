(function (window, document) {
  'use strict';

  /*
   * Identificadores permanentes de solucoes.
   * Padrao: sete algarismos sequenciais (1000000 a 9999999).
   * Ao cadastrar uma solucao, inclua o seu slug aqui e use o proximo numero
   * ainda nao utilizado. Nunca renumere uma solucao ja publicada.
   */
  var ids = Object.freeze({
    'assina_encaminha_sei': '1000001',
    'atribuicao_processo_sei': '1000002',
    'Biblioteca_fjp': '1000003',
    'busca_numeros_documentos_processo_sei': '1000004',
    'busca-processo-documento-existente': '1000005',
    'cadastro_novo_perfil_acesso_sei': '1000006',
    'cadastro_novo_usuario_sei': '1000007',
    'consulta_procedimento_sei': '1000008',
    'consulta_situacao_cadastral_cafimp': '1000009',
    'consulta_situacao_veiculos': '1000010',
    'cria_memorando': '1000011',
    'cria_processo_sei': '1000012',
    'criar_arquivo_saf': '1000013',
    'emissão_de_certidões_de_fornecedores': '1000014',
    'inclusao_ferias_premio': '1000015',
    'inclusao_ferias_regulamentares': '1000016',
    'insere_documento_externo': '1000017',
    'login_sei': '1000018',
    'login_terminal_prodemge': '1000019',
    'marcador_flag': '1000020',
    'prestacao_contas_viagem_SEI': '1000021',
    'prompt_memo': '1000022',
    'pythomate': '1000023',
    'rh_falta_rotina_historico': '1000024',
    'rh_falta_rotina_normal': '1000025',
    'scap_alterar_ferias_regulamentares': '1000026',
    'scap_anular_revogar_progressao': '1000027',
    'scap_anular_revogar_promocao': '1000028',
    'scap_excluir_ferias_regulamentares': '1000029',
    'scap_progressao': '1000030',
    'scap_promocao': '1000031',
    'scap_quinquenio': '1000032',
    'troca_unidade_sei': '1000033'
  });

  function solutionSlug(url) {
    var path = decodeURIComponent(new URL(url, window.location.href).pathname);
    var match = path.match(/\/robos\/([^/]+)\/?$/);
    return match ? match[1] : '';
  }

  function get(url) {
    return ids[solutionSlug(url)] || '';
  }

  window.solutionIds = { get: get };

  function showOnSolutionPage() {
    var id = get(window.location.href);
    var heading = document.querySelector('.solution-page h1, .md-content h1');
    if (!id || !heading || document.querySelector('.solution-identifier')) return;

    var date = document.querySelector('.solution-date');
    var identifier = document.createElement(date ? 'span' : 'p');
    identifier.className = date ? 'solution-identifier' : 'solution-date solution-identifier';
    identifier.textContent = (date ? ' \u00b7 ' : '') + 'ID: ' + id;
    if (date) date.appendChild(identifier);
    else heading.insertAdjacentElement('afterend', identifier);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', showOnSolutionPage);
  else showOnSolutionPage();
}(window, document));
