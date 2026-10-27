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
SITE = 'https://inkluem.zephyron.tech'
DESC = 'Hi-fi mockup aplikace INKLUEM: trenažér krizových a každodenních situací pro učitele a asistenty pedagoga. Texty scénářů jsou zástupné.'
head = f'''<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>INKLUEM: hi-fi mockup aplikace</title>
<meta name="description" content="{DESC}">
<meta name="theme-color" content="#f7f4ef">
<link rel="canonical" href="{SITE}/mockup">
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-icon.png">
<meta property="og:type" content="website">
<meta property="og:locale" content="cs_CZ">
<meta property="og:site_name" content="INKLUEM">
<meta property="og:url" content="{SITE}/mockup">
<meta property="og:title" content="INKLUEM: mockup aplikace">
<meta property="og:description" content="{DESC}">
<meta property="og:image" content="{SITE}/opengraph-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="INKLUEM, trénink situací ve třídě. Logo se dvěma postavičkami a ilustrace dítěte ve třídě.">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="INKLUEM: mockup aplikace">
<meta name="twitter:description" content="{DESC}">
<meta name="twitter:image" content="{SITE}/twitter-image.png">
'''
assert '<title>INKLUEM mockup</title>' in web, 'title v šabloně nenalezen'
web = web.replace('<title>INKLUEM mockup</title>', head.rstrip('\n'), 1)
out = root.parent / 'public/mockup/index.html'
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(web)
