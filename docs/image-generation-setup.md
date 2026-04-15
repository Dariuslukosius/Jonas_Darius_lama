## Image Generation Setup

Projektas jau paruoštas fallback CLI generavimui per vietinę `.venv`.

### Kas jau padaryta

- sukurta vietinė Python aplinka: `.venv`
- įdiegta: `openai`, `Pillow`
- patikrinta, kad veikia CLI `dry-run`

### Vienintelis likęs blokatorius

Reikia nustatyti `OPENAI_API_KEY`.

### Kaip paleisti

```bash
source .venv/bin/activate
export OPENAI_API_KEY="YOUR_KEY_HERE"

python /Users/jonas/.codex/skills/.system/imagegen/scripts/image_gen.py generate \
  --prompt "Professional SEO lesson cover image" \
  --size 1536x1024 \
  --out output/imagegen/test-cover.png
```

### Sausas testas be API rakto

```bash
source .venv/bin/activate

python /Users/jonas/.codex/skills/.system/imagegen/scripts/image_gen.py generate \
  --prompt "Test image" \
  --out output/imagegen/test.png \
  --dry-run
```
