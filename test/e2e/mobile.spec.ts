import { expect, test } from "@playwright/test";

// iPhone-ish: 390x844 con táctil (en Chromium esto activa `pointer: coarse`)
test.use({
  viewport: { width: 390, height: 844 },
  hasTouch: true,
  isMobile: true,
});

const horizontalOverflow = (page: import("@playwright/test").Page) =>
  page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth
  );

test("la portada no tiene scroll horizontal", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".hsr-container")).toBeVisible();

  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});

test("el enlace a un personaje lo selecciona y pone su nombre en el título", async ({ page }) => {
  await page.goto("/character/Cipher");

  await expect(page.locator(".hsr-title")).toHaveText("Cipher");
  await expect(page).toHaveTitle(/Cipher/);
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});

test("el selector de personajes cabe en la pantalla", async ({ page }) => {
  await page.goto("/");

  await page.locator('[aria-labelledby="char-select-label"]').click();

  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();

  const box = await dialog.boundingBox();
  expect(box).not.toBeNull();
  expect(box!.x).toBeGreaterThanOrEqual(0);
  expect(box!.y).toBeGreaterThanOrEqual(0);
  expect(box!.x + box!.width).toBeLessThanOrEqual(390);
  expect(box!.y + box!.height).toBeLessThanOrEqual(844);

  // Escape cierra el modal
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
});

test("los inputs del login no provocan zoom en iOS (>= 16px)", async ({ page }) => {
  await page.goto("/login");

  for (const id of ["#login-identifier", "#login-password"]) {
    const fontSize = await page
      .locator(id)
      .evaluate((el) => parseFloat(getComputedStyle(el).fontSize));

    expect(fontSize).toBeGreaterThanOrEqual(16);
  }

  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});

test("la pantalla de verificación usa el teclado numérico y no provoca zoom", async ({ page }) => {
  await page.goto("/verify");

  const code = page.locator("#verify-code");

  await expect(code).toHaveAttribute("autocomplete", "one-time-code");
  await expect(code).toHaveAttribute("inputmode", "numeric");

  const fontSize = await code.evaluate((el) => parseFloat(getComputedStyle(el).fontSize));
  expect(fontSize).toBeGreaterThanOrEqual(16);

  // Con menos de 6 dígitos el botón sigue desactivado
  await code.fill("123");
  await expect(page.getByRole("button", { name: "Verify" })).toBeDisabled();

  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});
