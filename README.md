# 徐韫琳 · Personal Portfolio

A dark, editorial portfolio for a visual / AI / brand designer. Built with React + Vite, no UI framework.

## Run

```bash
pnpm install
pnpm dev
```

Local preview: `http://127.0.0.1:5173`

If this workspace's bundled Node is not on `PATH`, the supplied local launcher can be used:

```bash
node scripts/dev.mjs
```

## Build

```bash
pnpm build
```

Output goes to `dist/`. The design is desktop-first, with a 1700px max content width. Tablet and mobile breakpoints are included.

`pnpm snapshot` creates `snapshot/index.html`, a single-file build used only for visual QA (it inlines fonts and images and stubs the video). Do not deploy it.

`pnpm standalone` creates `preview/portfolio-preview.html`, a fully self-contained production preview (fonts, images and the WebM hero are inlined). It can be opened directly without a local server.

To serve the production build without Vite/HMR:

```bash
pnpm serve
```

It is available at `http://127.0.0.1:4173`.

## Structure

```text
src/
  App.jsx
  styles.css              — full visual system, responsive rules, motion
  data/content.js         — all profile, project and capability copy
  components/
    Header.jsx            — all-visible nav + frosted floating bar after the first screen
    Hero.jsx              — fullscreen video hero
    Ticker.jsx
    About.jsx             — portrait, bio, contact, stats, capabilities, timeline
    Projects.jsx          — category-led project grids and placeholder state
    ProjectModal.jsx      — case-study dialog
    Contact.jsx           — fullscreen closing page
    Cursor.jsx            — desktop custom cursor
  assets/                 — project visuals, portrait, video, display font
  hooks/
```

## Projects data model

Projects are grouped in `projectCategories` inside `src/data/content.js`:

```js
{
  id: 'operations',
  index: 'A',
  title: '运营类项目',
  english: 'OPERATIONS / COMMUNITY',
  description: '…',
  theme: 'operations',
  projects: [meowProject],
}
```

- Add a **category**: append a new object with a unique `id`, display labels and a `projects` array. No component or CSS changes are needed.
- Add a **project**: append it to the relevant `projects` array.
- The grid switches automatically between a single featured card, a two-column grid, and a full-width final card for odd counts.
- Add an optional **screens** array to a project for mini-program / app captures:
  ```js
  screens: [
    { src: screenImport, label: '首页 / 社区入口', alt: '小程序首页' },
  ]
  ```
  The card carousel previews the first six captures; the detail modal renders all captures in a horizontal gallery. Each capture opens its full image in a new tab.
- Add an optional **posters** array for campaign / booth material:
  ```js
  posters: [
    { src: posterImport, label: '猫咪冷知识 / 科普海报', alt: '…' },
  ]
  ```
  Up to two posters join the card's media carousel; the detail modal renders all posters in a two-column gallery with full-image links.
- Add an optional **handbook** array for editorial / illustrated pages:
  ```js
  handbook: [
    { src: pageImport, label: '封面 / 目录', alt: '…' },
  ]
  ```
  The card previews page 01; the detail modal renders all pages in array order as a horizontal reading strip. Keep the array in reading order.
- Add an optional **merch** array for physical products:
  ```js
  merch: [
    { src: merchImport, label: '文创周边 / 帆布袋 · 挂件 · 徽章', alt: '…' },
  ]
  ```
  One merch image joins the card's media carousel; the detail modal renders every item full-width with a link to the original image.
- Add an optional **boards** array for landscape / architecture drawing sets:
  ```js
  boards: [
    { src: boardImport, label: '总平面', alt: '…' },
  ]
  ```
  The detail modal renders every board in array order in a two-column gallery; the project cover remains separate.
- For NDA / confidential projects, set `confidential: true` with a `confidentialNote`, put cleared page previews in `pages`, and put cleared imagery in a `gallery` array. The card gets an `NDA / 部分公开` badge; the modal shows a public-scope notice plus horizontally scrollable page and image galleries. Do not add the source PDF, full guide pages or unapproved material to the site.
- The project card media carousel is capped at **10 equal-height thumbnails**; all images keep their original aspect ratio. It combines screens 01–06, both posters, handbook page 01 and merch 01, with horizontal drag/swipe scrolling and previous/next controls.
- Mark unfinished content with `placeholder: true`, omit `image`, and keep the copy explicitly marked as TBD.
- The ProjectModal's next-project sequence uses `allProjects`, which excludes placeholder entries.

## Editing content

All text lives in `src/data/content.js`. Contact details, project descriptions, metrics and timeline entries can be changed there without touching components.

Project images are imported at the top of `content.js`. Replace a `.webp` with the same filename to swap the visual, or update the import path.

Key design tokens live at the top of `src/styles.css`:

- `--container: 1700px` — desktop content width
- `--bg / --ink / --accent` — light paper palette with ink text and cobalt accent
- `--serif` — display type; the bundled Source Han Serif display cut is used for Chinese headlines
- `--display` — Bahnschrift with a safe condensed fallback

## Asset note

The seven **华农喵星人** mini-program screens, two campaign posters (猫咪冷知识 / 领养与救助), eight handbook pages and the merchandise board in `src/assets/` are supplied project assets; higher-resolution originals are kept in `design-source/screens/`, `design-source/art/` and `design-source/handbook/`. Its cover is the supplied “猫猫咪呀” poster in `design-source/art/meow-poster-cover-upload.png`. The four landscape projects (butterfly habitat, Shiweitang railway station, West Juye River and landfill ecological park) are supplied in `design-source/udt-final/xuyunlin UDT final.pdf`; their supplied cover images and complete board sets are processed into `src/assets/udt-final/`, with the page mapping documented in `design-source/udt-final/README.md`. The 8 pet-friendly guide images in `src/assets/paws/gallery/` and the approved page previews 2–16 in `src/assets/paws/pages/` are authorized for portfolio use; the source PDF and the rest of the guide text are deliberately not part of the site or repository. The other project visuals (the site plan and map come from the applicant's own thesis) are concept presentation boards, not original client mockups. Replace them with real project screenshots before publishing the site as an official portfolio. The portrait was extracted from the resume and toned into an editorial monochrome image.

The homepage is a 3D project shelf on warm paper; the former hero video assets remain in `src/assets/` as unused source material.
