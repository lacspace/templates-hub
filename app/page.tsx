import { softwareApp, graph, breadcrumb } from "@lacspace/seo";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { Reveal } from "./components/reveal";
import { CodeBlock } from "./components/code-block";
import { TEMPLATES, STATS } from "./lib/data";

const HOME_LD = graph(
  softwareApp({
    name: "create-lacspace-app",
    description: "Scaffold a finished Next.js app from 8 templates in ~0.15s.",
    operatingSystem: "Web, Node.js",
    category: "DeveloperApplication",
    price: 0,
    currency: "USD",
  }),
  breadcrumb([{ name: "Home", url: "https://templates.lacspace.com" }])
);

const WHY = [
  {
    icon: "✅",
    title: "Finished, not blank",
    body: "Every page is filled — 5–6 real sections each, personalised with the project name. No “coming soon” stubs to delete.",
  },
  {
    icon: "🔎",
    title: "SEO wired end-to-end",
    body: "Metadata, JSON-LD, OG images, sitemap, robots and security headers — all prewired from one site config.",
  },
  {
    icon: "🌗",
    title: "Dark / light, responsive",
    body: "A no-flash theme, a ⌘K palette, a mobile menu and a 26-component UI kit — all in place from the first render.",
  },
  {
    icon: "⚡",
    title: "Scaffolded in ~0.15s",
    body: "One command writes 70+ files: a running Next.js 15 + React 19 + Tailwind v4 app you can deploy immediately.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_LD) }}
      />
      <div className="aurora" />
      <div className="grid-bg" />
      <SiteHeader />

      <main className="wrap">
        {/* Hero */}
        <section className="hero">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="hero-mark" src="/brand/mark.png" alt="Lacspace" width={96} height={96} />
          </Reveal>
          <Reveal delay={30}>
            <span className="pill">
              <span className="live" /> 8 templates · live &amp; clickable
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h1>
              Not a screenshot. <br />
              <span className="grad">A finished app you can open.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="sub">
              Eight production-ready Next.js apps — every page filled, SEO wired,
              security headers on. Each one is scaffolded in{" "}
              <strong style={{ color: "var(--fg)" }}>~0.15s</strong> by{" "}
              <span className="mono">create-lacspace-app</span>. Click any card
              and land inside a real, running app.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="cta">
              <a className="btn btn-primary" href="#templates">
                Browse the 8 →
              </a>
              <a
                className="btn btn-ghost"
                href="https://developer.lacspace.com"
                target="_blank"
                rel="noopener"
              >
                Docs &amp; handbook ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="stats">
              <div className="stat">
                <b className="grad">{STATS.templates}</b>
                <span>templates</span>
              </div>
              <div className="stat">
                <b className="grad">{STATS.scaffold}</b>
                <span>to scaffold</span>
              </div>
              <div className="stat">
                <b className="grad">{STATS.files}</b>
                <span>files each</span>
              </div>
              <div className="stat">
                <b className="grad">{STATS.pages}</b>
                <span>pages</span>
              </div>
              <div className="stat">
                <b className="grad">{STATS.components}</b>
                <span>UI parts</span>
              </div>
              <div className="stat">
                <b className="grad">{STATS.packages}</b>
                <span>packages</span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Templates */}
        <section id="templates" className="sec">
          <Reveal className="sec-head center">
            <div className="eyebrow">Live gallery</div>
            <h2>Open one live</h2>
            <p>
              Each template is its own deployment, served right here under this
              domain — no dead <span className="mono">*.vercel.app</span> demos.
              What you see is exactly what one command writes to disk.
            </p>
          </Reveal>

          <div className="grid">
            {TEMPLATES.map((t, i) => (
              <Reveal key={t.key} delay={(i % 3) * 60} className="card">
                <a
                  href={`/${t.key}`}
                  aria-label={`Open the ${t.name} template`}
                  style={{ position: "absolute", inset: 0, zIndex: 2 }}
                />
                <div className="swatch" style={{ background: t.grad }}>
                  <span className="browser">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span aria-hidden style={{ position: "relative", zIndex: 1 }}>
                    {t.emoji}
                  </span>
                </div>
                <h3>
                  {t.name}
                  <span className="key">/{t.key}</span>
                </h3>
                <div className="tagline">{t.tagline}</div>
                <p>{t.desc}</p>
                <div className="pagerow">
                  {t.pages.slice(0, 5).map((p) => (
                    <span key={p}>{p}</span>
                  ))}
                </div>
                <span className="open">
                  Open live <span className="arrow">↗</span>
                </span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Why */}
        <section id="why" className="sec">
          <Reveal className="sec-head center">
            <div className="eyebrow">Why they&apos;re different</div>
            <h2>
              A starter that starts you <span className="grad">finished</span>
            </h2>
            <p>
              create-next-app hands you a blank page. Every template here arrives
              done — and stays yours to edit.
            </p>
          </Reveal>
          <div className="grid">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={(i % 2) * 60} className="kit">
                <div className="kit-head">
                  <span className="ic" aria-hidden>
                    {w.icon}
                  </span>
                  <h3>{w.title}</h3>
                </div>
                <p style={{ marginBottom: 0 }}>{w.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Scaffold your own */}
        <section className="sec">
          <div className="split">
            <Reveal className="copy">
              <div className="eyebrow">Make it yours</div>
              <h3>Scaffold your own in one command</h3>
              <p>
                Like what you see? Every template on this page is one command
                away. Pick a kind of site, and{" "}
                <span className="mono">create-lacspace-app</span> writes the whole
                thing — then it&apos;s a normal Next.js app you own outright.
              </p>
              <div className="chips">
                <span>--template personal</span>
                <span>business</span>
                <span>ecommerce</span>
                <span>saas</span>
                <span>blog</span>
                <span>docs</span>
                <span>dashboard</span>
                <span>restaurant</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <CodeBlock
                label="terminal"
                code={`# scaffold any of the 8 templates
npm create lacspace-app@latest my-app -- --template saas

# add prebuilt sections anytime
npx create-lacspace-app add pricing faq testimonials

cd my-app && npm run dev`}
              />
            </Reveal>
          </div>
        </section>

        {/* Bridge to developer platform */}
        <Reveal className="cta-band">
          <div className="eyebrow">Part of the Lacspace Developer Platform</div>
          <h2>
            Docs, guides &amp; 63 packages live on{" "}
            <span className="grad">developer.lacspace.com</span>
          </h2>
          <p>
            This site is the live template gallery. For how-to guides, upgrade
            notes, the full package reference and the developer handbook, head to
            the developer platform.
          </p>
          <div className="cta" style={{ justifyContent: "center" }}>
            <a
              className="btn btn-primary"
              href="https://developer.lacspace.com"
              target="_blank"
              rel="noopener"
            >
              Open the Developer Platform →
            </a>
            <a className="btn btn-ghost" href="/terms">
              Terms of use
            </a>
          </div>
        </Reveal>
      </main>

      <SiteFooter />
    </>
  );
}
