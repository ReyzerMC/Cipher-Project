import { defineConfig } from "@playwright/test";

// Pruebas de humo de la web en un viewport de móvil.
//   npm i -D @playwright/test && npx playwright install chromium
//   npx playwright test
export default defineConfig({
  testDir: "./tests/e2e",
  use: {
    baseURL: "http://127.0.0.1:5173",
  },
  // Arranca Vite solo si no hay ya un servidor corriendo.
  // Nota: sin `wrangler pages dev` las llamadas a /api fallan; los tests lo toleran.
  webServer: {
    command: "npm run dev -- --host 127.0.0.1 --port 5173",
    url: "http://127.0.0.1:5173",
    reuseExistingServer: true,
    timeout: 60_000,
  },
});
