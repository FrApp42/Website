"""Generates the API reference (api/<package>) of built assemblies from their XML documentation.

Usage: python scripts/generate-api.py <path to Axios.Net.dll> [<path to another .dll> ...]
Needs the DefaultDocumentation tool: dotnet tool install -g DefaultDocumentation.Console
"""
import json
import re
import shutil
import subprocess
import sys

from pathlib import Path
from urllib.parse import unquote

root = Path(__file__).resolve().parent.parent

ANCHOR = re.compile(r"<a name='([^']*)'></a>\n\n")
HEADING = re.compile(r"^#{1,6} (.+?)\s*$")
ANCHOR_LINE = re.compile(r"<a name='([^']*)'></a>")
LINK = re.compile(r"\]\(([^)#' ]+)\.md#([^ ']+)")  # the fragment may hold parentheses, it ends at the link title
BREADCRUMB = re.compile(r"#{3,4} (\[.+\]\(.+\))")
NAMESPACE_ROW = re.compile(r"^\| \[[^\]]+\]\(([^ )]+)\.md ", re.MULTILINE)

def slug(heading, seen):
    """What Docusaurus (github-slugger) makes of a heading, with -1, -2 for repeats."""
    plain = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", heading)
    plain = re.sub(r"\\(.)", r"\1", plain).replace("`", "")
    base = re.sub(r"[^\w\- ]", "", plain.lower()).replace(" ", "-")
    count = seen.get(base, 0)
    
    seen[base] = count + 1
    
    return base if count == 0 else f"{base}-{count}"

def anchors(text):
    """Maps each <a name> id to the slug of the heading that follows it."""
    found, seen, fenced = {}, {}, False
    lines = text.split("\n")
    
    for i, line in enumerate(lines):
        if line.startswith("```"):
            fenced = not fenced
    
        match = None if fenced else HEADING.match(line)
    
        if match:
            target = slug(match.group(1), seen)
    
            if i >= 2 and (m := ANCHOR_LINE.fullmatch(lines[i - 2])):
                found[m.group(1)] = target
    
    return found

def tidy(text, keep_breadcrumb):
    """Folds the breadcrumb headings into one line and shifts the others, so that members sit under their group."""
    lines = text.split("\n")
    crumbs = []
    
    while lines and (match := BREADCRUMB.fullmatch(lines[0])):
        crumbs.append(match.group(1))
        lines.pop(0)

    fenced = False
    
    for i, line in enumerate(lines):
        if line.startswith("```"):
            fenced = not fenced
        elif not fenced and line.startswith("### "):
            lines[i] = line[1:]
        elif not fenced and line.startswith("## "):
            lines[i] = "#" + line

    body = "\n".join(lines).lstrip("\n")
    
    return (" › ".join(crumbs) + "\n\n" if crumbs and keep_breadcrumb else "") + body


def escape(value):
    return value.replace("\\", "\\\\").replace('"', '\\"')

def generate(dll, known_links):
    package = Path(dll).stem
    folder = package.lower().replace(".", "-")
    out = root / "api" / folder
    links = root / "api" / f"{folder}.links.txt"

    shutil.rmtree(out, ignore_errors=True)

    subprocess.run(
        [
            "defaultdocumentation",
            "-a", dll,
            "-o", str(out),
            "-n", "index",
            "-g", "Namespaces,Types",
            "-s", "Public,Protected,ProtectedInternal",
            "--FileNameFactory", "FullName",
            # Lets the assemblies generated after this one link to its pages.
            "-l", str(links),
            "-b", f"/api/{folder}/",
            *[arg for known in known_links for arg in ("-e", str(known))],
        ],
        check=True,
    )

    pages = {}

    for page in out.glob("*.md"):
        text = page.read_text(encoding="utf-8")
        heading = re.search(r"^## (.+)$", text, re.MULTILINE)
        title = re.sub(r"\\(.)", r"\1", heading.group(1)) if heading else page.stem
        text = text.replace(heading.group(0) + "\n", "", 1) if heading else text
        pages[page] = (title, text)

    ids = {page.stem: anchors(text) for page, (_, text) in pages.items()}
    namespaces = NAMESPACE_ROW.findall(pages[out / "index.md"][1])

    # Links to the pages of an earlier assembly come out as absolute /api/<package>/<page>.md paths.
    cross = re.compile(r"\]\((/api/[^)#' ]+)\.md")

    def link(match):
        target, fragment = match.group(1), unquote(match.group(2))
        target_slug = ids.get(target, {}).get(fragment)

        return f"]({target}.md#{target_slug}" if target_slug else f"]({target}.md"

    for page, (title, text) in pages.items():
        # Docusaurus drops empty anchors and cannot use signatures as ids: link to the heading slugs instead.
        text = ANCHOR.sub("", text)
        text = LINK.sub(link, text)
        text = cross.sub(lambda m: f"]({m.group(1)}", text)
        text = tidy(text, page.stem != "index")

        if page.stem == "index":
            label = "Overview"
        elif page.stem in namespaces:
            label = page.stem
        else:
            namespace = next(ns for ns in sorted(namespaces, key=len, reverse=True) if page.stem.startswith(ns + "."))
            label = page.stem[len(namespace) + 1:].replace("_T_", "<T>")

        front = f'---\ntitle: "{escape(title)}"\nsidebar_label: "{escape(label)}"\n---\n\n'
        page.write_text(front + text, encoding="utf-8", newline="\n")

    # Read by sidebars-api.ts to group the pages by namespace.
    (out / "namespaces.json").write_text(
        json.dumps({"label": package, "namespaces": namespaces}, indent=2) + "\n", encoding="utf-8", newline="\n"
    )

    return links


known_links = []

for dll in sys.argv[1:]:
    known_links.append(generate(dll, known_links))

# The links files only serve to chain the assemblies.
for links in known_links:
    links.unlink(missing_ok=True)
