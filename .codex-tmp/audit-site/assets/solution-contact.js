/* Preenche os contatos das soluções a partir de docs/robos/contatos.csv. */
(function () {
  var scriptUrl = document.currentScript && document.currentScript.src;

  function normalize(value) {
    return (value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim()
      .replace(/\s+/g, ' ')
      .toLowerCase();
  }

  function parseCsv(text) {
    var rows = [];
    var row = [];
    var cell = '';
    var quoted = false;
    var firstLine = text.split(/\r?\n/, 1)[0] || '';
    var delimiter = firstLine.split(';').length > firstLine.split(',').length ? ';' : ',';
    var i;

    for (i = 0; i < text.length; i += 1) {
      var character = text[i];
      if (character === '"') {
        if (quoted && text[i + 1] === '"') {
          cell += '"';
          i += 1;
        } else {
          quoted = !quoted;
        }
      } else if (character === delimiter && !quoted) {
        row.push(cell);
        cell = '';
      } else if ((character === '\n' || character === '\r') && !quoted) {
        if (character === '\r' && text[i + 1] === '\n') i += 1;
        row.push(cell);
        if (row.some(function (value) { return value !== ''; })) rows.push(row);
        row = [];
        cell = '';
      } else {
        cell += character;
      }
    }
    row.push(cell);
    if (row.some(function (value) { return value !== ''; })) rows.push(row);
    return rows;
  }

  function setText(element, value, fallback) {
    if (element) element.textContent = value || fallback;
  }

  function start() {
    var solutions = document.querySelectorAll('.solution-page[data-contact-name]');
    if (!solutions.length) return;

    var csvUrl = new URL('../robos/contatos.csv', scriptUrl);

    fetch(csvUrl)
      .then(function (response) {
        if (!response.ok) throw new Error('Arquivo de contatos não encontrado.');
        return response.text();
      })
      .then(function (text) {
        var rows = parseCsv(text);
        var headers = rows.shift().map(normalize);
        var nameIndex = headers.indexOf('nome_completo');
        var emailIndex = headers.indexOf('email');
        var organizationIndex = headers.indexOf('orgao_atual');

        solutions.forEach(function (solution) {
          var personName = normalize(solution.dataset.contactName);
          var contact = rows.find(function (row) {
            return normalize(row[nameIndex]) === personName;
          });
          var emailElement = solution.querySelector('[data-contact-email]');
          var organizationElement = solution.querySelector('[data-contact-organization]');

          if (!contact) {
            setText(emailElement, '', 'E-mail não cadastrado');
            if (emailElement) emailElement.removeAttribute('href');
            if (organizationElement) organizationElement.hidden = true;
            return;
          }

          var email = contact[emailIndex] || '';
          var organization = contact[organizationIndex] || '';
          setText(emailElement, email, 'E-mail não cadastrado');
          if (emailElement) {
            if (email) emailElement.href = 'mailto:' + email;
            else emailElement.removeAttribute('href');
          }
          setText(organizationElement, organization, '');
          if (organizationElement) organizationElement.hidden = !organization;
        });
      })
      .catch(function (error) {
        console.warn('Não foi possível carregar os contatos das soluções.', error);
      });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
}());
