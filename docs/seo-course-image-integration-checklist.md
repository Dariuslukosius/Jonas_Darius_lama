## SEO Course Image Integration Checklist

After generation:

1. Save files into `public/seo-lessons/`
2. Use exact filenames from `docs/seo-course-image-prompts.md`
3. Start with batch 01 from `docs/seo-course-image-batch-01.md`
4. Verify these pages:
   - `/seo-patarimai`
   - `/seo-patarimai/meta-pavadinimai`
   - `/seo-patarimai/meta-aprasymai`
   - homepage SEO preview section
5. If any generated image looks weak, replace only that single file

Current behavior:

- If a file exists in `public/seo-lessons/`, the site shows the generated image.
- If a file is missing, the site falls back to the built-in SVG artwork automatically.
