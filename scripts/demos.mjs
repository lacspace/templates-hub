#!/usr/bin/env node
/**
 * Lacspace Templates Hub — demo deployment repair / redeploy.
 *
 * Every template demo is its own Vercel project (`lacspace-demo-<key>`) and MUST
 * be built with `NEXT_PUBLIC_BASE_PATH=/<key>` so the hub's Multi-Zones rewrite
 * (templates.lacspace.com/<key>/* → lacspace-demo-<key>.vercel.app/<key>/*) hits
 * a real route. The template code already reads that env in next.config.mjs;
 * six demos were deployed without it and 404 from the hub (audit 2026-09-24).
 *
 * The demo projects have no git link — they were deployed from a local folder
 * with the Vercel CLI — but Vercel keeps the uploaded source of every CLI
 * deployment, so this script can pull it back, set the env, and redeploy.
 *
 * Usage (from the templates-hub root):
 *   VERCEL_TOKEN=... node scripts/demos.mjs status              # which demos answer at /<key>
 *   VERCEL_TOKEN=... node scripts/demos.mjs pull   [key ...]    # source → ./demos/<key>/
 *   VERCEL_TOKEN=... node scripts/demos.mjs env    [key ...]    # upsert NEXT_PUBLIC_BASE_PATH
 *   VERCEL_TOKEN=... node scripts/demos.mjs deploy [key ...]    # vercel deploy --prod (remote build)
 *   VERCEL_TOKEN=... node scripts/demos.mjs fix    [key ...]    # pull + env + deploy + status
 *
 * With no keys it targets every demo that currently 404s at /<key>.
 * `demos/` is git-ignored; if you want the sources versioned, push each folder
 * to a repo and link the Vercel project to it (then this script is only needed
 * for `env` + `status`).
 */
import { mkdir, writeFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import path from "node:path";

const TEAM = "team_hpzvqhi4TZ9dmHn4FQlmEoyk";
const TOKEN = process.env.VERCEL_TOKEN;
const KEYS = ["personal", "business", "ecommerce", "saas", "blog", "docs", "dashboard", "restaurant", "marketplace"];
const ROOT = path.resolve(new URL(".", import.meta.url).pathname, "..");

const api = async (p, init = {}) => {
  const sep = p.includes("?") ? "&" : "?";
  const r = await fetch(`https://api.vercel.com${p}${sep}teamId=${TEAM}`, {
    ...init,
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json", ...(init.headers || {}) },
  });
  const text = await r.text();
  try { return JSON.parse(text); } catch { return text; }
};

const projectId = async (key) => (await api(`/v9/projects/lacspace-demo-${key}`)).id;
const latestDeployment = async (pid) =>
  (await api(`/v6/deployments?projectId=${pid}&limit=1&target=production`)).deployments[0]?.uid;

async function status(keys) {
  for (const k of keys) {
    const root = (await fetch(`https://lacspace-demo-${k}.vercel.app/`, { redirect: "manual" })).status;
    const sub = (await fetch(`https://lacspace-demo-${k}.vercel.app/${k}`, { redirect: "manual" })).status;
    const hub = (await fetch(`https://templates.lacspace.com/${k}`, { redirect: "manual" })).status;
    console.log(`${k.padEnd(12)} root=${root}  /${k}=${sub}  hub=${hub}  ${sub === 200 ? "OK" : "BROKEN (basePath missing)"}`);
  }
}

async function broken() {
  const out = [];
  for (const k of KEYS) {
    const sub = (await fetch(`https://lacspace-demo-${k}.vercel.app/${k}`, { redirect: "manual" })).status;
    if (sub !== 200) out.push(k);
  }
  return out;
}

async function pull(keys) {
  for (const k of keys) {
    const pid = await projectId(k);
    const dep = await latestDeployment(pid);
    if (!dep) { console.error(`${k}: no production deployment`); continue; }
    const tree = await api(`/v6/deployments/${dep}/files`);
    const files = [];
    const walk = (nodes, pre = "") => {
      for (const f of nodes) {
        const name = pre + f.name;
        if (f.type === "directory") {
          if ([".next", "node_modules", ".git", "out"].includes(f.name)) continue;
          walk(f.children || [], name + "/");
        } else files.push([name, f.uid]);
      }
    };
    walk(tree);
    // CLI uploads live under "src/" in the file tree; strip that prefix.
    const src = files.filter(([n]) => n.startsWith("src/"));
    const dir = path.join(ROOT, "demos", k);
    for (const [name, uid] of src) {
      const rel = name.slice(4);
      const res = await api(`/v7/deployments/${dep}/files/${uid}`);
      const buf = res && typeof res === "object" && res.data ? Buffer.from(res.data, "base64") : Buffer.from(String(res));
      const target = path.join(dir, rel);
      await mkdir(path.dirname(target), { recursive: true });
      await writeFile(target, buf);
    }
    await mkdir(path.join(dir, ".vercel"), { recursive: true });
    await writeFile(path.join(dir, ".vercel", "project.json"), JSON.stringify({ orgId: TEAM, projectId: pid }, null, 2));
    console.log(`${k}: pulled ${src.length} files from ${dep} → demos/${k}/`);
  }
}

async function env(keys) {
  for (const k of keys) {
    const pid = await projectId(k);
    const r = await api(`/v10/projects/${pid}/env?upsert=true`, {
      method: "POST",
      body: JSON.stringify({
        key: "NEXT_PUBLIC_BASE_PATH",
        value: `/${k}`,
        type: "plain",
        target: ["production", "preview", "development"],
        comment: "Multi-Zones: served under templates.lacspace.com/<key>",
      }),
    });
    console.log(`${k}: NEXT_PUBLIC_BASE_PATH=/${k} ${r.error ? "FAILED " + JSON.stringify(r.error) : "set"}`);
  }
}

function deploy(keys) {
  for (const k of keys) {
    const dir = path.join(ROOT, "demos", k);
    console.log(`${k}: vercel deploy --prod (remote build) …`);
    const r = spawnSync("vercel", ["deploy", "--prod", "--yes", "--token", TOKEN, "--scope", TEAM], {
      cwd: dir,
      stdio: "inherit",
    });
    if (r.status !== 0) console.error(`${k}: deploy exited ${r.status}`);
  }
}

const [cmd, ...rest] = process.argv.slice(2);
if (!cmd || !["status", "pull", "env", "deploy", "fix"].includes(cmd)) {
  console.error("usage: node scripts/demos.mjs <status|pull|env|deploy|fix> [key ...]");
  process.exit(1);
}
if (cmd !== "status" && !TOKEN) {
  console.error("VERCEL_TOKEN is required (LACSPACE_VERCEL_TOKEN in the workspace root .env.example)");
  process.exit(1);
}
const keys = rest.length ? rest : cmd === "status" ? KEYS : await broken();
if (cmd === "status") await status(keys);
if (cmd === "pull") await pull(keys);
if (cmd === "env") await env(keys);
if (cmd === "deploy") deploy(keys);
if (cmd === "fix") { await pull(keys); await env(keys); deploy(keys); await status(keys); }
