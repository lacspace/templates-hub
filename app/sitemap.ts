import type { MetadataRoute } from "next";
import { toNextSitemap } from "@lacspace/sitemap";
import { TEMPLATES } from "./lib/data";

const BASE = "https://templates.lacspace.com";
const LASTMOD = new Date("2026-09-05");

export default function sitemap(): MetadataRoute.Sitemap {
  return toNextSitemap([
    { loc: `${BASE}/`, changefreq: "weekly", priority: 1.0, lastmod: LASTMOD },
    { loc: `${BASE}/terms`, changefreq: "yearly", priority: 0.4, lastmod: LASTMOD },
    ...TEMPLATES.map((t) => ({
      loc: `${BASE}/${t.key}`,
      changefreq: "weekly" as const,
      priority: 0.8,
      lastmod: LASTMOD,
    })),
  ]) as MetadataRoute.Sitemap;
}
