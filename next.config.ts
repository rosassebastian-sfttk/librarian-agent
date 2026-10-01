// --- frida:instrumentation:begin ------------------------------------------------
// Registers the Frida source-location loader for DEV ONLY, so the preview pane's
// DOM carries data-frida-loc / data-frida-key and can be matched to
// .frida/edit-manifest.json. Guarded on NODE_ENV *and* on the loader file still
// existing: .frida/ is excluded from the delivered app, but this config is not,
// so a shipped copy with no .frida/ must still build.
import __fridaFs from "node:fs";
import __fridaPath from "node:path";

const __fridaLoader = __fridaPath.join(process.cwd(), ".frida/instrumentation/frida-source-loc-loader.cjs");
const __fridaOn = process.env.NODE_ENV === "development" && __fridaFs.existsSync(__fridaLoader);

function __fridaInstrument(config: any): any {
  if (!__fridaOn) return config;
  const rule = { loader: __fridaLoader, options: { projectRoot: process.cwd() } };
  const next = { ...config };
  // Turbopack: the default for `next dev` in Next 15+. Its rules are dev-only.
  next.turbopack = {
    ...(next.turbopack || {}),
    // No `as`: that declares the loader's OUTPUT type, and setting it to *.tsx
    // for a loader that returns TSX makes Turbopack re-apply the extension and
    // look for page.tsx.tsx. Same language in, same language out — omit it.
    rules: { ...((next.turbopack || {}).rules || {}), "*.tsx": { loaders: [rule] } },
  };
  // Webpack: `next dev` without turbo. Compose with any existing webpack hook
  // rather than replacing it.
  const prev = next.webpack;
  next.webpack = (cfg: any, ctx: any): any => {
    const c = prev ? prev(cfg, ctx) : cfg;
    if (ctx.dev) c.module.rules.push({ test: /\.(t|j)sx$/, exclude: /node_modules/, use: [rule] });
    return c;
  };
  return next;
}
// --- frida:instrumentation:end --------------------------------------------

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default __fridaInstrument(nextConfig);
