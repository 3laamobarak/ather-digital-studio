// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { loadEnv } from "vite";

// Load ALL keys from .env / .env.* (empty prefix) into process.env so server
// functions can read SMTP_* during `vite dev`. Vite normally only exposes
// VITE_*-prefixed vars via import.meta.env and leaves process.env untouched.
// Non-prefixed secrets stay server-side and are never inlined into the client
// bundle; in production the host (Cloudflare secrets, etc.) provides them.
Object.assign(process.env, loadEnv(process.env["NODE_ENV"] || "development", process.cwd(), ""));

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
