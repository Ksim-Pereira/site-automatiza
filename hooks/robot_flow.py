"""Renderiza, de forma condicional, o fluxo Mermaid de uma página de robô."""

from html import escape
from pathlib import Path


MARKER = "<!-- robot-flow -->"


def on_page_markdown(markdown, *, page, config, files):
    """Substitui o marcador pelo fluxo ou o remove quando não houver fluxo."""
    if MARKER not in markdown:
        return markdown

    flow_file = Path(page.file.abs_src_path).parent / "assets" / "fluxo.md"
    if not flow_file.is_file():
        return markdown.replace(MARKER, "")

    flow = flow_file.read_text(encoding="utf-8").strip()
    if not flow:
        return markdown.replace(MARKER, "")

    panel = f'''<details class="robot-flow">
<summary><span>Clique para ver o fluxo do robô</span><span class="robot-flow-toggle" aria-hidden="true">⌄</span></summary>
<div class="mermaid">
{escape(flow)}
</div>
</details>'''

    return markdown.replace(MARKER, panel)
