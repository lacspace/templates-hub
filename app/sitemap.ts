import type { MetadataRoute } from "next";
import { toNextSitemap } from "@lacspace/sitemap";
import { TEMPLATES } from "./lib/data";

const BASE = "https://templates.lacspace.com";
const LASTMOD = new Date("2026-09-07");

export default function sitemap(): MetadataRoute.Sitemap {
  return toNextSitemap([
    { loc: `${BASE}/`, changefreq: "weekly", priority: 1.0, lastmod: LASTMOD },
    { loc: `${BASE}/templates`, changefreq: "weekly", priority: 0.9, lastmod: LASTMOD },
    { loc: `${BASE}/terms`, changefreq: "yearly", priority: 0.4, lastmod: LASTMOD },
    // Template detail pages (canonical content) + their live demos.
    ...TEMPLATES.flatMap((t) => [
      {
        loc: `${BASE}/templates/${t.key}`,
        changefreq: "weekly" as const,
        priority: 0.9,
        lastmod: LASTMOD,
      },
      {
        loc: `${BASE}/${t.key}`,
        changefreq: "weekly" as const,
        priority: 0.7,
        lastmod: LASTMOD,
      },
    ]),
  ]) as MetadataRoute.Sitemap;
}
