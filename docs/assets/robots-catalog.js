(function () {
  var scriptUrl = document.currentScript && document.currentScript.src;

  function text(element) {
    return element ? element.textContent.replace(/\s+/g, ' ').trim() : '';
  }

  function excerpt(value) {
    var clean = value.replace(/\s+/g, ' ').trim();
    if (clean.length <= 180) return clean;
    return clean.slice(0, 177).replace(/\s+\S*$/, '') + '…';
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
            return text(heading).toLowerCase() === 'informações gerais';
          });
          description = general ? text(general.parentElement.querySelector('li')) : '';
        }
        return { title: title, description: excerpt(description), url: url };
      })
      .catch(function () { return { title: fallback.title, description: '', url: url }; });
  }

  function createCard(robot) {
    var card = document.createElement('article');
    card.className = 'robots-catalog__card';
    card.dataset.search = (robot.title + ' ' + robot.description).toLocaleLowerCase('pt-BR');
    var top = document.createElement('div');
    top.className = 'robots-catalog__card-top';
    var tag = document.createElement('span');
    tag.className = 'robots-catalog__tag';
    tag.textContent = 'ROBÔ';
    var title = document.createElement('h2');
    title.textContent = robot.title;
    var description = document.createElement('p');
    description.textContent = robot.description || 'Conheça esta solução de automação.';
    var link = document.createElement('a');
    link.href = robot.url;
    link.textContent = 'Ver solução ›';
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
        count.textContent = robots.length + (robots.length === 1 ? ' solução' : ' soluções');
        input.addEventListener('input', function () {
          var term = input.value.trim().toLocaleLowerCase('pt-BR');
          var visible = 0;
          Array.prototype.forEach.call(grid.children, function (card) {
            var matches = !term || card.dataset.search.indexOf(term) !== -1;
            card.hidden = !matches;
            if (matches) visible += 1;
          });
          count.textContent = visible + (visible === 1 ? ' solução' : ' soluções');
          empty.hidden = visible !== 0;
        });
      })
      .catch(function () { count.textContent = 'Não foi possível carregar as soluções.'; });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
}());
