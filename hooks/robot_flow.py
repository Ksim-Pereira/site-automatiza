"""Renderiza, de forma condicional, o fluxo Mermaid de uma página de robô."""

from html import escape
from pathlib import Path


MARKER = "<!-- robot-flow -->"

HELP_PANEL = '''<section class="solution-help" aria-labelledby="solution-help-title">
<h2 id="solution-help-title"><span class="solution-help-icon" aria-hidden="true">?</span>Caso precise de ajuda</h2>
<div class="solution-help-content">
<p>Algum erro está ocorrendo em uma das fases de criação de seu robô? Não tem problema. Acesse <a href="https://automatiza-mg.github.io/automatizacoes/blog/causas-comuns-de-erros-na-montagem-dos-fluxos-dos-rob%C3%B4s/">aqui</a> uma lista com causas de erros ou paradas do robô.</p>
<p>Para esclarecer dúvidas, recomendamos a participação em nosso Tira-Dúvidas, realizado todas as sextas-feiras, das 15h às 17h. Para participar, <a href="https://bit.ly/48A1Obu">acesse</a>.</p>
<p>Caso prefira, mande um e-mail para o endereço que está em <a href="#responsavel">“Responsável”</a>, mais acima nesta mesma página. Ele pertence ao criador / à criadora do robô, que poderá auxiliar com eventuais dúvidas.</p>
<p>Ótimo trabalho!</p>
</div>
</section>'''


def on_page_markdown(markdown, *, page, config, files):
    """Inclui os componentes compartilhados das páginas no novo layout."""
    if '<article class="solution-page"' in markdown and "solution-help-title" not in markdown:
        markdown = markdown.replace("</main>", f"{HELP_PANEL}\n    </main>", 1)

    if MARKER not in markdown:
        return markdown

    flow_file = Path(page.file.abs_src_path).parent / "assets" / "fluxo.md"
    if not flow_file.is_file():
        return markdown.replace(MARKER, "")

    flow = flow_file.read_text(encoding="utf-8").strip()
    if not flow:
        return markdown.replace(MARKER, "")

    panel = f'''<details class="robot-flow">
<summary><span>Clique para ver o fluxo da solução</span><span class="robot-flow-toggle" aria-hidden="true">⌄</span></summary>
<div class="mermaid">
%%{{init: {{'themeVariables': {{'fontSize': '15px'}}}}}}%%
{escape(flow)}
</div>
</details>'''

    return markdown.replace(MARKER, panel)
