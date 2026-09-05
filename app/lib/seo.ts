import { defineSite } from "@lacspace/seo";

/** Dogfoods @lacspace/seo, @lacspace/og, @lacspace/sitemap, @lacspace/robots, @lacspace/llms-txt. */
export const site = defineSite({
  name: "Lacspace Templates",
  url: "https://templates.lacspace.com",
  description:
    "Eight production-ready Next.js apps you can open right now — scaffolded in ~0.12s by create-lacspace-app, every page filled, SEO wired.",
  logo: "https://templates.lacspace.com/icon-512.png",
  twitter: "lacspace",
  ogImage: "/og",
  defaultImage: "/brand/og-default.png",
});
