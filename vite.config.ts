import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: { outputPath: "/index.html" },
    },
  },
  vite: {
    environments: {
      server: {
        build: {
          rollupOptions: {
            input: "server",
            output: {
              entryFileNames: "server.js",
            },
          },
        },
      },
    },
  },
});
