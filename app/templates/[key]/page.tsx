import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../components/site-header";
import { SiteFooter } from "../../components/site-footer";
import { Reveal } from "../../components/reveal";
import { CodeBlock } from "../../components/code-block";
import { site } from "../../lib/seo";
import { TEMPLATES, TEMPLATE_BASELINE, type Template } from "../../lib/data";

export function generateStaticParams() {
  return TEMPLATES.map((t) => ({ key: t.key }));
}

function find(key: string): Template | undefined {
  return TEMPLATES.find((t) => t.key === key);
}

function seoFor(t: Template) {
  return site.softwareApp({
    title: `${t.name} template — ${t.tagline}`,
    path: `/templates/${t.key}`,
    description: t.intro,
    image: `/shots/${t.key}.png`,
    keywords: [
      `${t.name.toLowerCase()} template`,
      "nextjs template",
      "create-lacspace-app",
      "react template",
      "free nextjs starter",
      "tailwind template",
    ],
    operatingSystem: "Web, Node.js",
    category: "DeveloperApplication",
    price: 0,
    currency: "USD",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ key: string }>;
}): Promise<Metadata> {
  const { key } = await params;
  const t = find(key);
  if (!t) return {};
  return seoFor(t).metadata;
}

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const t = find(key);
  if (!t) notFound();

  const idx = TEMPLATES.findIndex((x) => x.key === t.key);
  const prev = TEMPLATES[(idx - 1 + TEMPLATES.length) % TEMPLATES.length];
  const next = TEMPLATES[(idx + 1) % TEMPLATES.length];
  const seo = seoFor(t);
  const scaffold = `npm create lacspace-app@latest my-app -- --template ${t.key}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.jsonLd) }}
      />
      <div className="grid-bg" />
      <SiteHeader />

      <main className="wrap">
        {/* Breadcrumb */}
        <nav className="crumb" aria-label="Breadcrumb">
          <a href="/">Templates</a>
          <span aria-hidden>/</span>
          <span>{t.name}</span>
        </nav>

        {/* Hero */}
        <section className="tpl-hero">
          <div className="tpl-hero-copy">
            <Reveal>
              <div className="tpl-eyebrow">
                <span className="tpl-emoji" aria-hidden>{t.emoji}</span>
                <span className="mono">--template {t.key}</span>
              </div>
            </Reveal>
            <Reveal delay={40}>
              <h1>{t.name}</h1>
            </Reveal>
            <Reveal delay={90}>
              <p className="tpl-tagline">{t.tagline}</p>
            </Reveal>
            <Reveal delay={130}>
              <p className="sub" style={{ margin: "16px 0 0" }}>{t.intro}</p>
            </Reveal>
            <Reveal delay={180}>
              <div className="cta" style={{ justifyContent: "flex-start", marginTop: 26 }}>
                <a className="btn btn-primary" href={`/${t.key}`}>
                  Open the live demo ↗
                </a>
                <a className="btn btn-ghost" href="#scaffold">Scaffold it</a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="tpl-preview">
            <a href={`/${t.key}`} aria-label={`Open the live ${t.name} demo`}>
              <span className="tpl-frame-bar">
                <i /><i /><i />
                <span className="tpl-frame-url mono">templates.lacspace.com/{t.key}</span>
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/shots/${t.key}.png`}
                alt={`Live preview of the ${t.name} template`}
                width={1280}
                height={800}
                loading="eager"
              />
              <span className="tpl-preview-open">Open live ↗</span>
            </a>
          </Reveal>
        </section>

        {/* What's inside */}
        <section className="sec">
          <Reveal className="sec-head">
            <div className="eyebrow">What&apos;s inside</div>
            <h2>Built for a {t.name.toLowerCase()} site</h2>
            <p>Everything below is already written and wired — real sections, not stubs to delete.</p>
          </Reveal>
          <div className="grid">
            {t.inside.map((f, i) => (
              <Reveal key={f.t} delay={(i % 2) * 60} className="kit">
                <div className="kit-head">
                  <span className="ic" aria-hidden>✦</span>
                  <h3>{f.t}</h3>
                </div>
                <p style={{ marginBottom: 0 }}>{f.d}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Pages included */}
        <section className="sec">
          <Reveal className="sec-head">
            <div className="eyebrow">{t.pages.length} pages</div>
            <h2>Pages you get, filled in</h2>
            <p>Each one arrives complete and personalised with your project name.</p>
          </Reveal>
          <Reveal className="chips tpl-pages">
            {t.pages.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </Reveal>
        </section>

        {/* Scaffold */}
        <section id="scaffold" className="sec">
          <div className="split">
            <Reveal className="copy">
              <div className="eyebrow">One command</div>
              <h3>Scaffold the {t.name} template</h3>
              <p>
                This writes a complete, running Next.js 15 + React 19 + Tailwind
                app to disk — then it&apos;s a normal project you own outright and
                edit however you like.
              </p>
              <p className="tpl-note">
                Prefer to look first? <a className="link" href={`/${t.key}`}>Open the live demo ↗</a>
              </p>
            </Reveal>
            <Reveal delay={80}>
              <CodeBlock
                label="terminal"
                code={`# scaffold the ${t.key} template
${scaffold}

cd my-app && npm run dev`}
              />
            </Reveal>
          </div>
        </section>

        {/* Baseline every template ships with */}
        <section className="sec">
          <Reveal className="sec-head center">
            <div className="eyebrow">In every template</div>
            <h2>The boring parts, already done</h2>
            <p>
              Whichever template you pick, it ships with the production plumbing
              every real site needs — wired from one site config.
            </p>
          </Reveal>
          <div className="grid">
            {TEMPLATE_BASELINE.map((f, i) => (
              <Reveal key={f.t} delay={(i % 3) * 50} className="kit">
                <div className="kit-head">
                  <span className="ic" aria-hidden>✓</span>
                  <h3>{f.t}</h3>
                </div>
                <p style={{ marginBottom: 0 }}>{f.d}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Prev / next */}
        <section className="sec">
          <div className="tpl-nav">
            <a className="tpl-nav-card" href={`/templates/${prev.key}`}>
              <span className="tpl-nav-dir">← Previous</span>
              <span className="tpl-nav-name">
                <span aria-hidden>{prev.emoji}</span> {prev.name}
              </span>
            </a>
            <a className="tpl-nav-card right" href={`/templates/${next.key}`}>
              <span className="tpl-nav-dir">Next →</span>
              <span className="tpl-nav-name">
                <span aria-hidden>{next.emoji}</span> {next.name}
              </span>
            </a>
          </div>
        </section>

        {/* CTA */}
        <Reveal className="cta-band">
          <div className="eyebrow">See them all</div>
          <h2>{TEMPLATES.length} finished templates, one command each</h2>
          <p>Browse the full gallery, or jump straight into the developer platform for docs and the package reference.</p>
          <div className="cta" style={{ justifyContent: "center" }}>
            <a className="btn btn-primary" href="/#templates">Browse all templates →</a>
            <a className="btn btn-ghost" href="https://developer.lacspace.com" target="_blank" rel="noopener">Developer platform ↗</a>
          </div>
        </Reveal>
      </main>

      <SiteFooter />
    </>
  );
}
