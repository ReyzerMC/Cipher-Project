import type { KeyboardEvent } from "react";

// Hace que un <div> clicable sea usable con teclado y lectores de pantalla.
export function buttonProps(handler: () => void, disabled = false) {
  return {
    role: "button" as const,
    tabIndex: disabled ? -1 : 0,
    "aria-disabled": disabled || undefined,
    onClick: disabled ? undefined : handler,
    onKeyDown: (e: KeyboardEvent) => {
      if (disabled) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handler();
      }
    },
  };
}
