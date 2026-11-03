(function () {
  var scriptUrl = document.currentScript && document.currentScript.src;

  function text(element) {
    return element ? element.textContent.replace(/\s+/g, ' ').trim() : '';
  }

  function searchable(value) {
    return value.toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function excerpt(value) {
    var limit = 180;
    if (value.length <= limit) return value;
    var end = value.lastIndexOf(' ', limit);
    return value.slice(0, end > 0 ? end : limit) + '\u2026';
  }

  function description(content, title) {
    var match = content.match(/descri\u00e7\u00e3o da solu\u00e7\u00e3o\s+(.+?)(?=\s+(?:respons\u00e1vel|pr\u00e9-requisitos|sistemas que interagem|ferramentas|como usar a solu\u00e7\u00e3o|observa\u00e7\u00f5es)\b|$)/i);
    if (match) return excerpt(match[1]);
    return excerpt(content.replace(title, '').trim());
  }

  function robot(item, root, html) {
    var url = new URL(item.location, root);
    var page = new DOMParser().parseFromString(html || item.text || '', 'text/html');
    var searchText = text(page.body);
    var title = text(page.querySelector('.solution-page h1, h1')) || item.title || '';
    var id = window.solutionIds ? window.solutionIds.get(url) : '';
    var summary = text(page.querySelector('.solution-page #descricao + p')) || description(searchText, title);
    return {
      title: title,
      description: summary,
      searchText: searchText,
      search: searchable(title + ' ' + summary + ' ' + searchText + ' ' + id),
      id: id,
      url: url
    };
  }

  function createCard(robot) {
    var card = document.createElement('article');
    card.className = 'robots-catalog__card';
    card.dataset.search = robot.search;
    var top = document.createElement('div');
    top.className = 'robots-catalog__card-top';
    var tag = document.createElement('span');
    tag.className = 'robots-catalog__tag';
    tag.textContent = robot.id ? 'ID: ' + robot.id : '';
    tag.hidden = !robot.id;
    var title = document.createElement('h2');
    title.textContent = robot.title;
    var description = document.createElement('p');
    description.textContent = robot.description || 'Conhe\u00e7a esta solu\u00e7\u00e3o de automa\u00e7\u00e3o.';
    var link = document.createElement('a');
    link.href = robot.url;
    link.textContent = 'Ver solu\u00e7\u00e3o \u203a';
    top.appendChild(tag);
    card.appendChild(top);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(link);
    return card;
  }

  function start() {
    var grid = document.getElementById('robots-catalog-grid');
    if (!grid) return;
    var input = document.getElementById('robots-catalog-search');
    var count = document.querySelector('.robots-catalog__count');
    var empty = document.getElementById('robots-catalog-empty');
    var pagination = document.getElementById('robots-catalog-pagination');
    var root = new URL('../', scriptUrl);
    fetch(new URL('search/search_index.json', root))
      .then(function (response) { return response.ok ? response.json() : Promise.reject(); })
      .then(function (index) {
        return index.docs.filter(function (item) {
          return /^robos\/[^/]+\/$/.test(item.location) && item.location !== 'robos/termos_uso/';
        }).map(function (item) {
          var url = new URL(item.location, root);
          return fetch(url)
            .then(function (response) { return response.ok ? response.text() : ''; })
            .then(function (html) { return robot(item, root, html); })
            .catch(function () { return robot(item, root); });
        });
      })
      .then(function (robots) {
        return Promise.all(robots);
      })
      .then(function (robots) {
        robots.sort(function (a, b) { return a.title.localeCompare(b.title, 'pt-BR', { sensitivity: 'base' }); });
        var pageSize = 50;
        var currentPage = 1;

        function renderCards() {
          var terms = searchable(input.value.trim()).split(/\s+/).filter(Boolean);
          var filtered = robots.filter(function (item) {
            return terms.every(function (term) { return item.search.indexOf(term) !== -1; });
          });
          var pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
          currentPage = Math.min(currentPage, pageCount);
          var start = (currentPage - 1) * pageSize;

          grid.textContent = '';
          filtered.slice(start, start + pageSize).forEach(function (item) {
            grid.appendChild(createCard(item));
          });
          count.textContent = filtered.length + (filtered.length === 1 ? ' solu\u00e7\u00e3o' : ' solu\u00e7\u00f5es');
          empty.hidden = filtered.length !== 0;

          pagination.textContent = '';
          pagination.hidden = filtered.length <= pageSize;
          if (!pagination.hidden) {
            var previous = document.createElement('button');
            previous.type = 'button';
            previous.textContent = '\u2039 Anterior';
            previous.disabled = currentPage === 1;
            previous.addEventListener('click', function () { currentPage -= 1; renderCards(); });
            var status = document.createElement('span');
            status.textContent = 'P\u00e1gina ' + currentPage + ' de ' + pageCount;
            var next = document.createElement('button');
            next.type = 'button';
            next.textContent = 'Pr\u00f3xima \u203a';
            next.disabled = currentPage === pageCount;
            next.addEventListener('click', function () { currentPage += 1; renderCards(); });
            pagination.appendChild(previous);
            pagination.appendChild(status);
            pagination.appendChild(next);
          }
        }

        input.addEventListener('input', function () { currentPage = 1; renderCards(); });
        renderCards();
      })
      .catch(function () { count.textContent = 'N\u00e3o foi poss\u00edvel carregar as solu\u00e7\u00f5es.'; });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
}());
