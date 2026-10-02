# Leaving for a Living

Project site for **It's More Fun Outside the Philippines**, CS132 (Introduction to Data Science), University of the Philippines Diliman.

Plain HTML, CSS, and JavaScript. No build step, no backend. Works on GitHub Pages as is.

## Editing content

Nearly all text lives in [`assets/js/content.js`](assets/js/content.js). Edit that file, commit, push, and the site updates.

Inline formatting works in any string:

| Write | Get |
| --- | --- |
| `` `RQ26_MODE` `` | monospace variable name |
| `**text**` | bold |
| `[label](https://...)` | link |

Things still marked as placeholders:

- `questions.items[].hypothesis`: empty strings show "To be added."
- `findings.items[]`: a finding with no charts shows a "Chart forthcoming" box.
- `sheets`: empty until you add your Google Sheets (see below).
- `team.members[].role`: optional; leave `""` to hide.
- `images.hero` / `images.questions`: empty until you add photos (see below).

## If changes don't show up

Browsers (Safari especially) cache the CSS and JS files. `index.html` loads them with a version tag, for example `assets/js/main.js?v=20261002b`. After editing any of those files, change the tag on all three lines in `index.html` (any new value works, such as today's date plus a letter) so every visitor gets the new version. For a quick check on your own machine, a hard refresh also works: Cmd+Option+R in Safari, Cmd+Shift+R in Chrome.

## Adding photos (deck style)

The deck's look uses cutout photos of workers beside the title. Export them as PNGs with transparent backgrounds, put them in `assets/img/`, and list them in `content.js`:

```js
images: {
  hero: [
    { src: "assets/img/nurse.png", alt: "", side: "left", blur: true },
    { src: "assets/img/engineer.png", alt: "", side: "right", blur: true },
  ],
  questions: { src: "assets/img/shoes.png", alt: "" },
},
```

`blur: true` gives the soft out-of-focus look from the title slide. Use `alt: ""` for purely decorative photos. Only use images you have the rights to publish.

## Adding findings

Each finding in `content.js` has an optional `summary`, an optional `sheet` link (shown as an "Open sheet" button), and a `charts` array. Three chart types are supported.

**Image** (recommended for plots exported from Python/R). Save the file into `assets/img/`:

```js
{
  type: "image",
  src: "assets/img/rq3-mode-by-region.png",
  alt: "Share of households using each remittance mode, by region",
  title: "Remittance mode by region",
  caption: "Weighted by `RSWGT`. Source: SOF 2024 PUF.",
}
```

**Bar** (simple horizontal bars drawn in the page, no library needed):

```js
{
  type: "bar",
  title: "Remittance mode, share of households",
  unit: "%",
  max: 100, // optional; defaults to the largest value
  data: [
    { label: "Bank", value: 0 },
    { label: "Door-to-door", value: 0 },
  ],
  caption: "Weighted by `RSWGT`.",
}
```

**Sheet** (live bar chart read straight from a Google Sheet, so the site updates when the sheet does):

```js
{
  type: "sheet",
  url: "https://docs.google.com/spreadsheets/d/<ID>/edit#gid=0",
  label: "Mode",   // column with the bar labels (default: first column)
  value: "Share",  // column with the numbers (default: second column)
  title: "Remittance mode, share of households",
  unit: "%",
  caption: "Weighted by `RSWGT`. Live from our sheet.",
}
```

The sheet must be shared as **Anyone with the link: Viewer** (or published via File > Share > Publish to web as CSV). Use the tab's own link so the `gid` points at the right tab. Numbers like `30.3%` or `1,200` are read fine. If the sheet can't be read, the chart shows an error instead of breaking the page.

Several charts in one finding are laid out side by side on wide screens.

## Linking Google Sheets

List your working sheets in `content.js` and they appear as cards at the end of the Findings section:

```js
sheets: [
  { label: "Cleaned SOF 2024 extract", note: "Weighted tables used for RQ2", url: "https://docs.google.com/spreadsheets/d/..." },
],
```

To put a button on a single finding, set its `sheet`:

```js
sheet: { label: "Open RQ3 sheet", url: "https://docs.google.com/spreadsheets/d/..." },
```

Anything you link this way is visible to everyone who opens the site, so only link sheets you are comfortable making public.

## Previewing locally

Open `index.html` directly in a browser, or run a local server from this folder:

```bash
python3 -m http.server 8000
```

then visit http://localhost:8000.

## Deploying to GitHub Pages

1. Create an empty repository on GitHub (for example `ofw-labor-mobility`).
2. Push this folder to it:

   ```bash
   git add -A && git commit -m "Initial site"
   git remote add origin https://github.com/<user>/ofw-labor-mobility.git
   git push -u origin main
   ```

3. On GitHub: **Settings > Pages > Build and deployment**, set Source to "Deploy from a branch", branch `main`, folder `/ (root)`.
4. The site will be at `https://<user>.github.io/ofw-labor-mobility/` within a minute or two.

The empty `.nojekyll` file tells GitHub Pages to serve the files as they are.

## Structure

```
index.html            page skeleton (sections and nav)
assets/js/content.js  all site text and data  <- edit this
assets/js/main.js     renders content.js into the page
assets/css/style.css  styles (light and dark mode)
assets/img/           exported chart images
```
