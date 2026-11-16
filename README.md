# gaetanolongo.github.io

Personal site: Astro + Markdown, bilingual (EN/IT), deployed to GitHub Pages.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Writing content

Everything lives in `src/content/<collection>/<en|it>/<slug>.md`. Use the same slug in both
languages and the language switch links the two; otherwise it falls back to the section index.

| Collection | Frontmatter | Notes |
|---|---|---|
| `notes` | title, description, date, maturity (`seedling`/`growing`/`evergreen`), tags | KaTeX maths with `$…$` and `$$…$$` |
| `projects` | title, description, kind, url (optional), order, tags | no `url` shows "Link coming soon" |
| `recipes` | title, description, date, servings, prep, cook, tags, ingredients (`{ q, i }` list) | body is the numbered method; print layout built in |
| `pages` | title, description | `cv`, `about`, `contact` |

**Sidenotes** (plain Markdown, no MDX needed): `<span class="sn"><small>The note.</small></span>`

**Accent colours**: edit the tokens at the top of `src/styles/global.css`.

## Deploying

Repo → Settings → Pages → Source: **GitHub Actions**. Pushing to `main` deploys.
For a custom domain, change `site` in `astro.config.mjs` and add `public/CNAME`.
