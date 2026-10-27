#!/usr/bin/env python3
"""Sestaví mockup: vloží ilustrace (assets.json, data URI) do src/template.html.
Výstupy: mockup/inkluem-mockup.html (samostatný soubor, písmo z Google Fonts)
a public/mockup/index.html (pro web: písmo hostované lokálně, noindex)."""
import json, pathlib
root = pathlib.Path(__file__).parent
assets = json.load(open(root / 'src/assets.json'))
tpl = (root / 'src/template.html').read_text()
html = tpl.replace('/*IMG*/', 'const IMG=' + json.dumps(assets) + ';')
import re
BACK = re.compile(r'<!--BACK-->.*?<!--/BACK-->', re.S)
# samostatný soubor: odkaz na web by na / nefungoval, vynechat
(root / 'inkluem-mockup.html').write_text(BACK.sub('', html))

gfonts = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&display=swap">'
assert gfonts in html, 'Google Fonts link nenalezen'
web = html.replace('<!--BACK-->', '').replace('<!--/BACK-->', '').replace(gfonts, '<link rel="stylesheet" href="/mockup/nunito.css">')
web = web.replace('<title>', '<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<meta name="robots" content="noindex">\n<title>', 1)
out = root.parent / 'public/mockup/index.html'
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(web)
