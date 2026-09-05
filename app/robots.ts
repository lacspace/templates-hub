import type { MetadataRoute } from "next";
import { toNextRobots } from "@lacspace/robots";

export default function robots(): MetadataRoute.Robots {
  return toNextRobots({
    groups: [{ userAgent: "*", allow: ["/"] }],
    sitemap: "https://templates.lacspace.com/sitemap.xml",
    host: "templates.lacspace.com",
  }) as MetadataRoute.Robots;
}
