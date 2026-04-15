# Client Logo Replacements Needed

Šitas sąrašas skirtas greitam assetų pakeitimui, kai gauname geresnius failus.

## Replace first

### Artfiksa

- Current file: `src/assets/brands/artfiksa.png`
- Problem: labai blankus ir per smulkus, dabartinis variantas netinka pagrindinei logotipų juostai
- Best replacement: oficialus `svg`
- Good fallback: skaidrus `png`

### Auto Vela

- Current file: `src/assets/brands/auto-vela.png`
- Problem: dabartinis failas yra baltas ant balto fono ir beveik nematomas
- Best replacement: oficialus spalvotas `svg`
- Good fallback: skaidrus `png`

### Eco Resort

- Current file: `src/assets/brands/eco-resort.png`
- Problem: labai šviesus / baltas variantas, beveik dingsta
- Best replacement: oficialus spalvotas `svg`
- Good fallback: skaidrus `png`

## Replace later if we get a better source

### Autoglass Service

- Current file: `src/assets/brands/autoglass.jpg`
- Problem: vizualiai pakenčiamas, bet techniškai netinkamas logotipo formatas, nes `jpg` neturi skaidrumo
- Best replacement: oficialus `svg`
- Good fallback: skaidrus `png`

## Currently good enough

- `src/assets/brands/agrija-logotipas.svg`
- `src/assets/brands/alfadenta-logotipas.webp`
- `src/assets/brands/amadenta-horizontal-logo.svg`
- `src/assets/brands/clinic-dpc.png`
- `src/assets/brands/fast-car.png`

## When new files arrive

1. Pakeisti seną failą tuo pačiu pavadinimu, jei formatas tas pats.
2. Jei formatas keičiasi, atnaujinti importą `src/components/BrandsSection.tsx`.
3. Patikrinti vizualiai `Home` puslapyje.
4. Paleisti `npm run build`.
