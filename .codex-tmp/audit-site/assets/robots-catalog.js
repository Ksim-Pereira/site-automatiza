(function () {
  var scriptUrl = document.currentScript && document.currentScript.src;

  function text(element) {
    return element ? element.textContent.replace(/\s+/g, ' ').trim() : '';
  }

  function searchable(value) {
    return value.toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function details(url, fallback) {
    return fetch(url)
      .then(function (response) { return response.ok ? response.text() : ''; })
      .then(function (html) {
        var page = new DOMParser().parseFromString(html, 'text/html');
        var title = text(page.querySelector('.solution-page h1, .md-content h1')) || fallback.title;
        var description = text(page.querySelector('.solution-page #descricao + p'));
        if (!description) {
          var general = Array.prototype.find.call(page.querySelectorAll('.md-content h2'), function (heading) {
            return text(heading).toLowerCase() === 'informa\u00e7\u00f5es gerais';
          });
          description = general ? text(general.parentElement.querySelector('li')) : '';
        }
        return { title: title, description: description, url: url };
      })
      .catch(function () { return { title: fallback.title, description: '', url: url }; });
  }

  function createCard(robot) {
    var card = document.createElement('article');
    card.className = 'robots-catalog__card';
    card.dataset.search = searchable(robot.title + ' ' + robot.description);
    var top = document.createElement('div');
    top.className = 'robots-catalog__card-top';
    var tag = document.createElement('span');
    tag.className = 'robots-catalog__tag';
    tag.textContent = 'ROB\u00d4';
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
    var root = new URL('../', scriptUrl);
    fetch(new URL('search/search_index.json', root))
      .then(function (response) { return response.ok ? response.json() : Promise.reject(); })
      .then(function (index) {
        return Promise.all(index.docs.filter(function (item) {
          return /^robos\/[^/]+\/$/.test(item.location) && item.location !== 'robos/termos_uso/';
        }).map(function (item) { return details(new URL(item.location, root), item); }));
      })
      .then(function (robots) {
        robots.sort(function (a, b) { return a.title.localeCompare(b.title, 'pt-BR', { sensitivity: 'base' }); });
        robots.forEach(function (robot) { grid.appendChild(createCard(robot)); });

        function filterCards() {
          var terms = searchable(input.value.trim()).split(/\s+/).filter(Boolean);
          var visible = 0;
          Array.prototype.forEach.call(grid.children, function (card) {
            var matches = terms.every(function (term) { return card.dataset.search.indexOf(term) !== -1; });
            card.hidden = !matches;
            if (matches) visible += 1;
          });
          count.textContent = visible + (visible === 1 ? ' solu\u00e7\u00e3o' : ' solu\u00e7\u00f5es');
          empty.hidden = visible !== 0;
        }

        input.addEventListener('input', filterCards);
        filterCards();
      })
      .catch(function () { count.textContent = 'N\u00e3o foi poss\u00edvel carregar as solu\u00e7\u00f5es.'; });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
}());
