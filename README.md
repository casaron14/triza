# Triza Maleko — Digital Entrepreneur & Crypto Investor

A one-page portfolio site for **Triza Maleko**, a digital entrepreneur and crypto
investor. After retiring from teaching students in classrooms, Triza now helps
people understand and see the opportunities in the blockchain space — and earn
from them.

## Features

- One-page, responsive layout (mobile-first, desktop split-screen)
- Hero section with portrait, intro, and primary call-to-action
- Contacts panel with WhatsApp and Instagram links
- **vCard download** — generates and downloads a contact `.vcf` file on click
- Load animation, gated behind `prefers-reduced-motion`
- No build step — plain HTML, CSS, and vanilla JavaScript

## Project structure

```
├── index.html          # Single-page markup
├── css/
│   └── styles.css      # Design tokens + all styling
├── js/
│   ├── main.js         # Footer year + hero load animation
│   └── vcard.js        # vCard (.vcf) generator + download
└── assets/
    └── triza.jpg       # Hero portrait
```

## Getting started

This is a static site with no build step. Open it directly, or serve it locally:

```bash
# Option A: open in browser
open index.html

# Option B: local server
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Customization

- **Contact details** — update the `CONTACT` object at the top of
  `js/vcard.js` (name, phone, email, WhatsApp, etc.). These are written into
  the downloaded `.vcf` file.
- **Social links** — edit the `href` values in the contacts panel of
  `index.html` (WhatsApp `wa.me`, Instagram).
- **Inkryptus referral link** — edit the hero button `href` in `index.html`.
- **Portrait** — replace `assets/triza.jpg` (keep the same filename, or update
  the `src`).

## Deployment (GitHub Pages)

Your choice — the repo is structured for either option.

### Option A: Deploy from `/` (main branch root)

1. Push this repository to GitHub.
2. In the repo: **Settings → Pages → Source → "Deploy from a branch"**.
3. Set **Branch** to `main` and folder to `/ (root)`.
4. Save. The site publishes to `https://<username>.github.io/<repo>/`.

### Option B: Deploy via GitHub Actions workflow

Use this if you prefer a workflow file (e.g., to build or relocate output):

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: .
      - id: deployment
        uses: actions/deploy-pages@v4
```

Then in **Settings → Pages** set Source to **"GitHub Actions"**.

## License

All rights reserved.
