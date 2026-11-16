(function (document) {
  'use strict';

  function groupGeneralInformation(page) {
    var fields = ['descricao', 'responsavel', 'pre-requisitos', 'sistemas', 'ferramentas'];
    var sections = fields.map(function (id) {
      var heading = page.querySelector('#' + id);
      return heading && heading.closest('.solution-section');
    });

    if (sections.some(function (section) { return !section; })) return;

    var description = sections[0];
    var panel = document.createElement('section');
    var title = document.createElement('h2');
    var grid = document.createElement('div');
    var primary = document.createElement('div');
    var metadata = document.createElement('div');

    panel.className = 'solution-general';
    panel.setAttribute('aria-labelledby', 'informacoes-gerais');
    title.id = 'informacoes-gerais';
    title.textContent = 'Informações gerais';
    grid.className = 'solution-general-grid';
    primary.className = 'solution-general-primary';
    metadata.className = 'solution-general-metadata';

    description.parentNode.insertBefore(panel, description);
    panel.appendChild(title);
    panel.appendChild(grid);
    grid.appendChild(primary);
    grid.appendChild(metadata);

    sections.forEach(function (section, index) {
      var heading = section.querySelector('h2');
      if (heading) {
        var subheading = document.createElement('h3');
        subheading.id = heading.id;
        subheading.innerHTML = heading.innerHTML;
        heading.replaceWith(subheading);
      }
      (index < 2 ? primary : metadata).appendChild(section);
    });

    var formerGrid = page.querySelector('.solution-meta-grid');
    if (formerGrid && !formerGrid.children.length) formerGrid.remove();

    var flow = panel.nextElementSibling;
    if (flow && flow.matches('details.robot-flow')) description.appendChild(flow);
  }

  function start() {
    document.querySelectorAll('.solution-page').forEach(function (page) {
      if (!page.querySelector('.solution-general')) groupGeneralInformation(page);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
}(document));
