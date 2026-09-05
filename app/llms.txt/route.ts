import { llmsTxtResponse } from "@lacspace/llms-txt";
import { TEMPLATES } from "../lib/data";

export const dynamic = "force-static";

export function GET() {
  return llmsTxtResponse(
    {
      title: "Lacspace Templates",
      summary: "Eight finished, live Next.js apps scaffolded by create-lacspace-app.",
      details: "Each template is a real, deployed app you can open. Scaffold your own with `npm create lacspace-app@latest`. Docs live at https://developer.lacspace.com.",
      sections: [
        {
          title: "Live templates",
          links: TEMPLATES.map((t) => ({
            title: t.name,
            url: `https://templates.lacspace.com/${t.key}`,
            notes: t.tagline,
          })),
        },
        {
          title: "Build & docs",
          links: [
            { title: "Developer platform", url: "https://developer.lacspace.com" },
            { title: "create-lacspace-app", url: "https://www.npmjs.com/package/create-lacspace-app" },
            { title: "Terms of use", url: "https://templates.lacspace.com/terms" },
          ],
        },
      ],
    },
    { headers: { "cache-control": "public, max-age=3600, s-maxage=86400" } }
  );
}
