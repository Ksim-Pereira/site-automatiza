"""Inclui as tags do front matter no índice usado pelo catálogo de robôs."""

import json
from pathlib import Path
from urllib.parse import unquote

import yaml


def _location(path, docs_dir):
    """Converte um arquivo Markdown no endereço produzido pelo MkDocs."""
    relative = path.relative_to(docs_dir).with_suffix("")
    parts = relative.parts
    if parts[-1] == "index":
        parts = parts[:-1]
    return "/".join(parts) + "/"


def _tags_by_location(docs_dir):
    tags = {}
    for path in (docs_dir / "robos").rglob("*.md"):
        with path.open(encoding="utf-8") as source:
            content = source.read()
        if not content.startswith("---"):
            continue
        _, metadata, _ = content.split("---", 2)
        page_tags = yaml.safe_load(metadata).get("tags", [])
        if page_tags:
            tags[_location(path, docs_dir)] = page_tags
    return tags


def on_post_build(config, **kwargs):
    """Acrescenta tags ao JSON do plugin de busca após ele ser criado."""
    index_path = Path(config.site_dir) / "search" / "search_index.json"
    if not index_path.exists():
        return

    with index_path.open(encoding="utf-8") as index_file:
        index = json.load(index_file)

    tags = _tags_by_location(Path(config.docs_dir))
    for document in index.get("docs", []):
        page_tags = tags.get(unquote(document.get("location", "")))
        if page_tags:
            document["tags"] = page_tags

    with index_path.open("w", encoding="utf-8") as index_file:
        json.dump(index, index_file, ensure_ascii=False, separators=(",", ":"))
