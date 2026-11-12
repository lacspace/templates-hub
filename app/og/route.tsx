import { ImageResponse } from "next/og";
import { ogCard } from "@lacspace/og";

// runtime: Node.js (Cloudflare Workers via OpenNext does not support the edge runtime split)

export function GET(req: Request) {
  const p = new URL(req.url).searchParams;
  const title = (p.get("title") ?? "Lacspace Templates").slice(0, 120);
  const eyebrow = (p.get("eyebrow") ?? "Live Templates").slice(0, 40);
  const subtitle = (p.get("sub") ?? "templates.lacspace.com").slice(0, 80);
  return new ImageResponse(
    ogCard({ title, eyebrow, subtitle, logo: "L", from: "#0BB9D9", to: "#7C3AED" }) as unknown as React.ReactElement,
    { width: 1200, height: 630 }
  );
}
