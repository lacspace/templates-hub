// Shared content for the Lacspace Templates / Developer platform.

export type Template = {
  key: string;
  name: string;
  emoji: string;
  tagline: string;
  desc: string;
  /** Longer, detail-page intro (2–3 sentences). */
  intro: string;
  /** "What's inside" — template-specific highlights. */
  inside: { t: string; d: string }[];
  pages: string[];
};

export const TEMPLATES: Template[] = [
  {
    key: "personal",
    name: "Personal",
    emoji: "👤",
    tagline: "Portfolio & developer presence",
    desc: "Projects, uses, work history, about, and a real Markdown blog. Ship your presence in minutes.",
    intro:
      "A complete personal site for developers and makers — your work, your writing and your story, all filled in and ready to edit. Swap the copy for yours and you have a portfolio you'd actually be proud to link.",
    inside: [
      { t: "Project showcase", d: "A filterable grid of projects with tags, links and case-study detail pages." },
      { t: "A real Markdown blog", d: "Posts written as .md files with BlogPosting JSON-LD, topic pages and reading time." },
      { t: "Work & uses pages", d: "A timeline work history and a /uses page for your gear and software stack." },
      { t: "About & contact", d: "A personal about page and a typed, honeypot-protected contact form." },
    ],
    pages: ["Home", "Projects", "Work", "Uses", "Blog", "About", "Contact"],
  },
  {
    key: "business",
    name: "Business",
    emoji: "🏢",
    tagline: "Agency & company site",
    desc: "Services, case-study work, pricing, and a team grid. Corporate, without the corporate-boring.",
    intro:
      "A polished company site for an agency, studio or SMB — services, proof, pricing and team, structured the way buyers actually read. Corporate credibility without the corporate boredom.",
    inside: [
      { t: "Services & work", d: "A services grid plus case-study work pages that show outcomes, not just logos." },
      { t: "Pricing tiers", d: "A clear pricing table with feature rows, ready to wire to a checkout." },
      { t: "Team grid", d: "Head-shots, roles and bios in a responsive team section." },
      { t: "Lead capture", d: "A validated contact form with spam honeypot, ready for your inbox or CRM." },
    ],
    pages: ["Home", "Services", "Work", "Pricing", "Team", "About", "Contact"],
  },
  {
    key: "ecommerce",
    name: "Ecommerce",
    emoji: "🛍️",
    tagline: "Storefront with a working cart",
    desc: "Product grid, collections, and a persisted cart. From browse to checkout intent, prebuilt.",
    intro:
      "A storefront that already works — browse products, filter collections and add to a cart that survives a refresh. Everything from the shelf to checkout intent is built, so you only plug in your catalogue and payments.",
    inside: [
      { t: "Product & collections", d: "A responsive product grid, collection pages and rich product detail views." },
      { t: "A persisted cart", d: "Add / update / remove with quantities, saved to storage so it survives reloads." },
      { t: "Money done right", d: "Prices in integer minor units via @lacspace/money — no floating-point rounding bugs." },
      { t: "Checkout intent", d: "A cart summary and checkout hand-off, ready to connect to your payment provider." },
    ],
    pages: ["Home", "Shop", "Collections", "Product", "Cart", "About", "Contact"],
  },
  {
    key: "saas",
    name: "SaaS",
    emoji: "🚀",
    tagline: "Product landing page",
    desc: "Feature splits, a pricing table, integrations, and a changelog. The classic launch page, finished.",
    intro:
      "The classic product launch page, finished end to end — hero, feature splits, pricing, integrations and a changelog. The page you'd otherwise rebuild for every product, ready on the first render.",
    inside: [
      { t: "Feature storytelling", d: "Alternating feature splits with visuals that explain the product, not just list it." },
      { t: "Pricing table", d: "Monthly / annual tiers with a highlighted plan and feature comparison." },
      { t: "Integrations", d: "A logo wall and integrations grid to show what your product connects to." },
      { t: "Changelog", d: "A dated changelog page so you can ship-in-public from day one." },
    ],
    pages: ["Home", "Features", "Pricing", "Integrations", "Changelog", "About"],
  },
  {
    key: "blog",
    name: "Blog",
    emoji: "✍️",
    tagline: "A real Markdown blog",
    desc: "Posts from files, topic pages, a newsletter, and BlogPosting JSON-LD. Write and publish.",
    intro:
      "A genuine publishing setup, not a demo — write Markdown files and get formatted posts, topic pages, a newsletter and correct article schema for free. Everything a writer needs to hit publish.",
    inside: [
      { t: "Posts from Markdown", d: "Drop a .md file in and get a formatted post with front-matter, tags and reading time." },
      { t: "Topic pages", d: "Auto-generated topic / tag pages that group related posts." },
      { t: "Newsletter capture", d: "An email sign-up section wired to a typed, validated endpoint." },
      { t: "Article SEO", d: "BlogPosting JSON-LD, OG images and canonical URLs on every post." },
    ],
    pages: ["Home", "Posts", "Topics", "Post", "Newsletter", "About"],
  },
  {
    key: "docs",
    name: "Docs",
    emoji: "📚",
    tagline: "Documentation site",
    desc: "Sidebar nav, on-page TOC, prev/next, search, an API reference, and a changelog.",
    intro:
      "A documentation site with the ergonomics people expect — a sidebar, on-page table of contents, prev / next paging, client-side search and an API reference. Point it at your content and you have real docs.",
    inside: [
      { t: "Sidebar + TOC", d: "A collapsible sidebar and an on-page table of contents that tracks your scroll." },
      { t: "Client-side search", d: "Instant, keyboard-friendly search across every guide — no external service." },
      { t: "API reference", d: "A structured reference layout for endpoints, params and examples." },
      { t: "Prev / next & changelog", d: "Sequential paging between guides plus a dated changelog page." },
    ],
    pages: ["Home", "Guides", "API Reference", "Changelog", "Search"],
  },
  {
    key: "dashboard",
    name: "Dashboard",
    emoji: "📊",
    tagline: "App shell & admin",
    desc: "Sidebar, stat cards, charts, analytics, and settings. The inside of a product, prebuilt.",
    intro:
      "The inside of a product, prebuilt — a real app shell with a sidebar, stat cards, charts and settings. Skip the boilerplate of laying out an admin and start on your actual features.",
    inside: [
      { t: "App shell", d: "A persistent sidebar, top bar and responsive content area with a dark / light toggle." },
      { t: "Stat cards & charts", d: "KPI cards with trends and a dependency-free revenue chart." },
      { t: "Data tables", d: "Customers and billing views with sortable, responsive tables." },
      { t: "Settings", d: "A settings page with grouped, validated form sections." },
    ],
    pages: ["Overview", "Analytics", "Customers", "Billing", "Settings"],
  },
  {
    key: "restaurant",
    name: "Restaurant",
    emoji: "🍽️",
    tagline: "Menu, bookings & events",
    desc: "Menu, reservations, gallery, and private events. A warm, appetite-first site that's ready to book.",
    intro:
      "A warm, appetite-first site for a restaurant or café — a real menu, a reservation flow, a gallery and a private-events page. Everything a hospitality business needs to be found and booked.",
    inside: [
      { t: "The menu", d: "A structured, sectioned menu with dietary tags and prices that's easy to keep current." },
      { t: "Reservations", d: "A booking form with date, time, party size and validation, ready to wire up." },
      { t: "Gallery", d: "A responsive image gallery to show the room, the plates and the atmosphere." },
      { t: "Private events", d: "A dedicated page for functions and enquiries with its own lead form." },
    ],
    pages: ["Home", "Menu", "Reservations", "Gallery", "Events", "About"],
  },
  {
    key: "marketplace",
    name: "Marketplace",
    emoji: "🛒",
    tagline: "Cart, checkout & payments — wired",
    desc: "A real storefront wired to the Lacspace commerce packages: cart, tax, shipping, orders, invoices and Nepal payments. Not a mock — a working checkout.",
    intro:
      "The most complete template — a working storefront wired end to end to the Lacspace commerce packages: cart, tax, shipping, orders, invoices and Nepal payment gateways. Not a mock-up of checkout, an actual checkout.",
    inside: [
      { t: "A real checkout", d: "Cart → shipping → tax → order, computed in integer minor units the whole way through." },
      { t: "Commerce packages", d: "Wired to @lacspace/cart, shipping, tax, order and invoice — the real engine, not stubs." },
      { t: "Nepal payments", d: "eSewa, Khalti, ConnectIPS and Fonepay hand-offs prebuilt via the payment packages." },
      { t: "Order & invoice", d: "An order summary, a success page and a generated PDF invoice via @lacspace/pdf." },
    ],
    pages: ["Home", "Shop", "Product", "Cart", "Checkout", "Success"],
  },
];

/** Baseline every generated app ships with, regardless of template. */
export const TEMPLATE_BASELINE: { t: string; d: string }[] = [
  { t: "SEO wired end-to-end", d: "Metadata, JSON-LD, dynamic OG images, sitemap and robots — all from one site config." },
  { t: "Security headers", d: "A strict Content-Security-Policy and hardened HTTP headers via @lacspace/headers." },
  { t: "Dark / light theme", d: "A no-flash theme with system, light and dark modes and a toggle." },
  { t: "⌘K command palette", d: "A keyboard command palette for fast navigation, built in." },
  { t: "Typed contact form", d: "FormData → validated, typed data with a spam honeypot." },
  { t: "CI that gates on SEO", d: "A GitHub Actions workflow that fails the build on a poor SEO crawl grade." },
];

export type Kit = {
  name: string;
  icon: string;
  blurb: string;
  packages: { name: string; desc: string }[];
};

// Curated ecosystem — the full catalog is 87 packages on npm.
export const KITS: Kit[] = [
  {
    name: "Security Kit",
    icon: "🛡️",
    blurb: "Auth, crypto, and hardening — all over Web Crypto, never hand-rolled.",
    packages: [
      { name: "crypto", desc: "AES-256-GCM, PBKDF2, HMAC over Web Crypto" },
      { name: "password", desc: "PBKDF2 hashing with a portable PHC string" },
      { name: "jwt", desc: "HS256/384/512 with strict expiry/issuer checks" },
      { name: "webauthn", desc: "Passkeys / FaceID / fingerprint ceremonies" },
      { name: "otp", desc: "TOTP & HOTP, Google Authenticator compatible" },
      { name: "apikey", desc: "Prefixed high-entropy keys, store only the hash" },
      { name: "headers", desc: "Secure HTTP headers + a typed CSP builder" },
      { name: "rate-limit", desc: "Fixed / sliding window & token bucket" },
    ],
  },
  {
    name: "SEO Kit",
    icon: "🔎",
    blurb: "Configure once with defineSite() → metadata, JSON-LD, sitemap, robots, feeds.",
    packages: [
      { name: "seo", desc: "Typed metadata + schema.org JSON-LD builders" },
      { name: "sitemap", desc: "sitemap.xml, indexes, Next.js sitemaps" },
      { name: "robots", desc: "robots.txt with AI-crawler block presets" },
      { name: "og", desc: "Dynamic Open Graph share-card images" },
      { name: "rss", desc: "RSS 2.0, Atom & JSON Feed from one source" },
      { name: "llms-txt", desc: "Generate llms.txt (the llmstxt.org standard)" },
      { name: "slugify", desc: "Clean, transliterated SEO URL slugs" },
      { name: "site-verify", desc: "Search-engine verification tokens" },
    ],
  },
  {
    name: "React Kit",
    icon: "⚛️",
    blurb: "SSR-safe hooks, state, data fetching and theming — zero-dependency, tiny.",
    packages: [
      { name: "hooks", desc: "28 essential SSR-safe hooks" },
      { name: "store", desc: "Global state in ~1KB, no provider" },
      { name: "query", desc: "Data fetching with a shared cache (SWR-lite)" },
      { name: "theme", desc: "SSR-safe dark / light / system theme" },
      { name: "hotkeys", desc: "Combos, sequences and scopes" },
      { name: "virtual", desc: "Headless list virtualization" },
      { name: "ui", desc: "Scroll reveals, counters, ⌘K palette" },
    ],
  },
  {
    name: "App Kit",
    icon: "🧱",
    blurb: "The pieces every app repeats — validation, forms, money, IDs, dates.",
    packages: [
      { name: "validate", desc: "Typed schema validator with zod ergonomics" },
      { name: "form", desc: "FormData → typed, validated data + honeypot" },
      { name: "money", desc: "Integer minor units — no floating-point bugs" },
      { name: "id", desc: "UUID v4 / v7, Nano-ID-style, short codes" },
      { name: "markdown", desc: "Safe Markdown → HTML with GFM" },
      { name: "cache", desc: "In-memory LRU + TTL + stale-while-revalidate" },
      { name: "retry", desc: "Backoff + jitter, timeouts, circuit breaker" },
      { name: "humanize", desc: "Bytes, durations, relative time, ordinals" },
    ],
  },
  {
    name: "Backend Kit",
    icon: "⚙️",
    blurb: "Server plumbing without the servers — signed URLs, PDFs, webhooks.",
    packages: [
      { name: "signed-url", desc: "HMAC-signed, expiring URLs & magic links" },
      { name: "pdf", desc: "Real PDFs — invoices, receipts — zero deps" },
      { name: "webhooks", desc: "Sign, deliver & verify webhooks both ways" },
      { name: "idempotency", desc: "Exactly-once with an idempotency key" },
      { name: "env", desc: "Typed, validated environment variables" },
      { name: "redact", desc: "Mask secrets & PII before logging" },
      { name: "flags", desc: "Feature flags & A/B with no SaaS" },
      { name: "lock", desc: "Account lockout & brute-force protection" },
    ],
  },
  {
    name: "Mail Kit",
    icon: "✉️",
    blurb: "Send and validate email from a Node backend — no third-party SDK.",
    packages: [
      { name: "mailer", desc: "Zero-dependency SMTP client over net/tls" },
      { name: "email-templates", desc: "Responsive, dark-mode-aware HTML emails" },
      { name: "email-validate", desc: "Syntax + disposable / role detection" },
      { name: "email-verify", desc: "MX lookup + best-effort deliverability" },
    ],
  },
  {
    name: "StockKit",
    icon: "📈",
    blurb: "Everything a trading app needs — indicators, market math, a paper engine.",
    packages: [
      { name: "indicators", desc: "Streaming RSI, MACD, EMA, Bollinger, ATR…" },
      { name: "market", desc: "P&L, returns, CAGR, XIRR, tick rounding" },
      { name: "market-clock", desc: "Holiday-aware NSE/BSE trading clock" },
      { name: "paper-trade", desc: "Headless paper-trading engine" },
    ],
  },
  {
    name: "Core & Data",
    icon: "🧩",
    blurb: "The SDK, the HTTP client, analytics, and spreadsheet I/O.",
    packages: [
      { name: "sdk", desc: "High-level TypeScript SDK for Lacspace" },
      { name: "api", desc: "Isomorphic, zero-dependency HTTP client" },
      { name: "auth", desc: "Login, register, token, refresh flows" },
      { name: "analytics-lite", desc: "Cookieless, privacy-first web analytics" },
      { name: "xlsx", desc: "Write real .xlsx with zero dependencies" },
      { name: "csv", desc: "Correct RFC 4180 CSV parse & stringify" },
      { name: "color", desc: "Parse, convert & manipulate colours" },
      { name: "case", desc: "camelCase ↔ snake_case ↔ kebab-case" },
    ],
  },
];

export const STATS = {
  scaffold: "~0.12s",
  files: "70+",
  pages: "11",
  components: "26",
  templates: String(TEMPLATES.length),
  packages: "87",
};
