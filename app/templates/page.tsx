import { graph, breadcrumb } from "@lacspace/seo";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { Reveal } from "../components/reveal";
import { CodeBlock } from "../components/code-block";
import { site } from "../lib/seo";
import { TEMPLATES, STATS } from "../lib/data";

const seo = site.page({
  title: "Templates",
  path: "/templates",
  description:
    "Browse all nine free, production-ready Next.js templates from create-lacspace-app — personal, business, ecommerce, SaaS, blog, docs, dashboard, restaurant and a fully-wired marketplace. Open a live demo or scaffold one in one command.",
  keywords: [
    "nextjs templates",
    "free nextjs templates",
    "react templates",
    "tailwind templates",
    "create-lacspace-app templates",
    "nextjs starter",
    "saas template",
    "dashboard template",
  ],
});
export const metadata = seo.metadata;

const LIST_LD = graph(
  {
    "@type": "ItemList",
    name: "Lacspace Next.js templates",
    numberOfItems: TEMPLATES.length,
    itemListElement: TEMPLATES.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${t.name} template`,
      description: t.tagline,
      url: `https://templates.lacspace.com/templates/${t.key}`,
    })),
  },
  breadcrumb([
    { name: "Home", url: "https://templates.lacspace.com" },
    { name: "Templates", url: "https://templates.lacspace.com/templates" },
  ])
);

export default function TemplatesIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LIST_LD) }} />
      <div className="grid-bg" />
      <SiteHeader />

      <main className="wrap">
        <section className="hero" style={{ padding: "88px 0 24px" }}>
          <Reveal>
            <span className="pill">
              <span className="live" /> {TEMPLATES.length} templates · live &amp; clickable
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h1>
              Every template, <span className="grad">in one place</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="sub">
              {TEMPLATES.length} production-ready Next.js apps from{" "}
              <span className="mono">create-lacspace-app</span> — every page
              filled, SEO wired, security headers on. Open any one for the full
              breakdown, a live preview and the command to scaffold it.
            </p>
          </Reveal>
          <Reveal delay={170}>
            <div className="cta">
              <a className="btn btn-primary" href="#gallery">Browse the gallery ↓</a>
              <a className="btn btn-ghost" href="https://developer.lacspace.com" target="_blank" rel="noopener">
                Docs &amp; handbook ↗
              </a>
            </div>
          </Reveal>
        </section>

        <section id="gallery" className="sec" style={{ paddingTop: 40 }}>
          <div className="tgrid">
            {TEMPLATES.map((t, i) => (
              <Reveal key={t.key} delay={(i % 3) * 50} className="tcard">
                <a href={`/templates/${t.key}`} aria-label={`View the ${t.name} template`}>
                  <span className="tcard-shot">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/shots/${t.key}.png`}
                      alt={`Preview of the ${t.name} template`}
                      width={1280}
                      height={800}
                      loading={i < 3 ? "eager" : "lazy"}
                    />
                    <span className="tcard-emoji" aria-hidden>{t.emoji}</span>
                  </span>
                  <span className="tcard-body">
                    <span className="tcard-title">
                      {t.name}
                      <span className="key">/{t.key}</span>
                    </span>
                    <span className="tcard-tag">{t.tagline}</span>
                    <span className="tcard-desc">{t.desc}</span>
                    <span className="tcard-foot">
                      <span className="tcard-pages">{t.pages.length} pages</span>
                      <span className="open">View template <span className="arrow">→</span></span>
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="sec">
          <div className="split">
            <Reveal className="copy">
              <div className="eyebrow">One command</div>
              <h3>Pick a template and go</h3>
              <p>
                Every template on this page is one command away. Choose a kind of
                site and <span className="mono">create-lacspace-app</span> writes
                the whole thing — then it&apos;s a normal Next.js app you own
                outright.
              </p>
              <div className="chips">
                {TEMPLATES.map((t, i) => (
                  <span key={t.key}>{i === 0 ? `--template ${t.key}` : t.key}</span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <CodeBlock
                label="terminal"
                code={`# scaffold any of the ${TEMPLATES.length} templates
npm create lacspace-app@latest my-app -- --template saas

cd my-app && npm run dev`}
              />
            </Reveal>
          </div>
        </section>

        <Reveal className="cta-band">
          <div className="eyebrow">Part of the Lacspace Developer Platform</div>
          <h2>
            Docs, guides &amp; {STATS.packages} packages live on{" "}
            <span className="grad">developer.lacspace.com</span>
          </h2>
          <p>
            This gallery shows what the templates produce. For how-to guides, the
            full package reference and the developer handbook, head to the
            developer platform.
          </p>
          <div className="cta" style={{ justifyContent: "center" }}>
            <a className="btn btn-primary" href="https://developer.lacspace.com" target="_blank" rel="noopener">
              Open the Developer Platform →
            </a>
            <a className="btn btn-ghost" href="/terms">Terms of use</a>
          </div>
        </Reveal>
      </main>

      <SiteFooter />
    </>
  );
}
