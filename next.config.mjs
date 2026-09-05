/**
 * Lacspace Templates Hub — Multi-Zones router.
 *
 * The hub owns templates.lacspace.com (the gallery at "/").
 * Each template is its own Vercel deployment, built with basePath "/<key>",
 * and is served under templates.lacspace.com/<key>/* via the rewrites below.
 * Editing/redeploying any template is fully independent of the hub.
 */
const TEMPLATES = [
  "personal",
  "business",
  "ecommerce",
  "saas",
  "blog",
  "docs",
  "dashboard",
  "restaurant",
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return TEMPLATES.flatMap((key) => [
      {
        source: `/${key}`,
        destination: `https://lacspace-demo-${key}.vercel.app/${key}`,
      },
      {
        source: `/${key}/:path*`,
        destination: `https://lacspace-demo-${key}.vercel.app/${key}/:path*`,
      },
    ]);
  },
};

export default nextConfig;
