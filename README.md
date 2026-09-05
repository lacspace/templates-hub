# Lacspace Templates — `templates.lacspace.com`

The live template gallery for [create-lacspace-app](https://www.npmjs.com/package/create-lacspace-app).
Eight finished Next.js apps, each deployed and clickable under one domain via
**Next.js Multi-Zones**.

- **Gallery** (`/`) — all 8 templates.
- **Terms of use** (`/terms`).
- Each template serves under `templates.lacspace.com/<key>` (personal, business,
  ecommerce, saas, blog, docs, dashboard, restaurant), routed to its own
  deployment through `rewrites()` in `next.config.mjs`.

## Stack

- Next.js 15 · React 19 · hand-written CSS design system (`app/globals.css`)
- **Dogfoods** `@lacspace/seo`, `@lacspace/og`, `@lacspace/sitemap`,
  `@lacspace/robots`, `@lacspace/llms-txt` for the full SEO layer
  (`defineSite`, dynamic OG images at `/og`, `sitemap.xml`, `robots.txt`,
  `llms.txt`, JSON-LD).
- Brand: Lacspace mark, Space Grotesk + Inter, signature cyan→blue→violet gradient.

## Develop

```bash
npm install
npm run dev
```

Part of the [Lacspace Developer Platform](https://developer.lacspace.com).
Free under the Lacspace Free Licence.
