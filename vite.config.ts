import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  // process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    base: "/",
    plugins: [react(), tsconfigPaths()],
  });
};
