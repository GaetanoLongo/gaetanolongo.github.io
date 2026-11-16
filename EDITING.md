# How to edit this website yourself

You don't need to install anything. Every page is a text file in this repository, and you can
edit them in the browser on github.com.

## The workflow (same for everything)

1. Open the file on GitHub (paths are below) and click the **pencil icon** (✏️ "Edit this file").
2. Change the text. For a new file: open the folder, then **Add file → Create new file**.
3. Click **Commit changes…** and commit **directly to `main`**.
4. Wait about a minute. The site rebuilds by itself. Check the **Actions** tab:
   a green tick means it is live, a red cross means something is wrong (click it to read why).

**Undo a mistake:** open the file, click **History**, open the bad commit and use **Revert**
(or just edit the file back). The site rebuilds again.

## Two rules that avoid most problems

- **Always change both languages.** When you add, edit, rename or delete a note, recipe or project,
  do it in `en/` **and** `it/` (same file name), or the two versions drift apart.

- Every page starts with a block between two `---` lines (called *front matter*). Keep the
  quotes `"like this"` around titles and descriptions, and write dates as `2026-11-30`.
- English and Italian are separate files with **the same file name** in `en/` and `it/`.
  Same name = the EN/IT switch jumps between the two versions. If one is missing, the switch
  goes to that section's list instead.

## Where everything lives

| What | File(s) | Notes |
|---|---|---|
| Technical notes | `src/content/notes/en/…md` and `…/it/…md` | template below |
| Projects (cards) | `src/content/projects/en/…md` and `it/` | `url:` is the link of the card |
| Recipes | `src/content/recipes/en/…md` and `it/` | template below |
| CV, About, Contact | `src/content/pages/en/cv.md`, `about.md`, `contact.md` (and `it/`) | plain Markdown |
| Home texts, menu names, small labels | `src/i18n/index.ts` | EN and IT blocks |
| Sidebar links (GitHub, LinkedIn) | `src/layouts/Base.astro` | search for `Elsewhere` |
| Colours, accent colours, fonts | `src/styles/global.css` | tokens at the very top |
| Images | upload into `public/` | then use `/filename.jpg` in a page |
| Power-electronics resource | other repo `PowerElectronics`, file `README.md` | the page is that file |

## Technical note template

Create `src/content/notes/it/my-note.md` (and the same name in `en/`):

```markdown
---
title: "Title of the note"
description: "One sentence shown in lists."
date: 2026-11-30
maturity: seedling        # seedling, growing or evergreen
tags: ["power electronics", "DAB"]
---

Normal Markdown text. Maths: $P = V I$ inline, or on its own line:

$$
P = \frac{V^2}{R}
$$

A side note in the margin:<span class="sn"><small>Text of the note.</small></span>
```

### Adding a PDF from Google Drive to a note

1. In Drive, share the file: **Anyone with the link → Viewer**.
2. Copy the link: `https://drive.google.com/file/d/`**`1AbC…xyz`**`/view`. The bold part is the ID.
3. Add to the top of the note (inside the `---` block):

```yaml
documents:
  - title: "Notes, part one"
    id: "1AbC…xyz"
  - title: "Exercises"
    id: "1DeF…uvw"
```

The page then shows **Download**, **Open in Drive** and a **Show preview** button (the preview
only loads from Google when the visitor clicks it). For a whole Drive folder add `type: "folder"`
(no download button for folders).

**Careful:** old Drive files (IDs starting with `0B_`) stopped working for the public after
Google's 2021 security change. If a file doesn't open in a private browser window, open it in
Drive, **Make a copy**, share the copy, and use the new ID.

Use `filesSoon: true` in the front matter to show "files not online yet" when there is none.

## Recipe template

```markdown
---
title: "Name"
description: "One sentence."
date: 2026-11-30
servings: "4 people"    # servings, prep and cook are all optional
prep: "30 min"
cook: "45 min"
oven: "180 °C"          # optional (English: "180 °C (355 °F)")
source: "Name of the author or site"   # optional, leave out if none
sourceUrl: "https://…"      # optional: makes the source line a link
calculator: "liqueur"   # optional: shows the liqueur calculator under the recipe
tags: ["bread"]
ingredients:
  - { q: "500 g", i: "Flour" }
  - { q: "10 g", i: "Salt" }
---

1. First step.
2. Second step.
```

The numbered list becomes the big-numbered method. The **Print recipe** button prints a clean page.

## Projects and the email address

- A project card needs `title`, `description`, `kind` (e.g. "Web app"), optional `url`, `order`
  (1 = first), `tags`. No `url` → the card says "Link coming soon".
- **Email** (Contact page) is stored encoded so bots can't read it. To change it, ask me, or:
  encode the new address with any "Base64 encode" website and paste it in `data-e="…"`, and
  write the address **reversed** between the `<bdo>` tags with `<i>@</i>` in place of the `@`.

## Running it on your computer (optional)

Install Node.js 22, then in the repo folder: `npm install` and `npm run dev`, and open
http://localhost:4321. Useful to preview, not required.

## If something breaks

1. **Actions** tab → click the red run → open the failed step → read the last lines. Most
   errors are a missing quote or a wrongly written date in front matter, and the message
   names the file.
2. Revert the last commit (see above) and the site is back to the previous version.
3. The old version of the site is never lost: every commit stays in **History**.
