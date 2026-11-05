import React, { useEffect, useId } from "react";

type ModalProps = {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  const titleId = useId();

  // Escape para cerrar + bloquear el scroll de la página mientras el modal está abierto
  // (en móvil, sin esto, el fondo se desplaza por debajo al arrastrar el dedo).
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="hsr-modal-backdrop"
      onClick={(e) => {
        // Solo cierra si el toque/clic es en el fondo, no al soltar un arrastre desde dentro
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="hsr-modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="hsr-modal-header">
          <h2 id={titleId}>{title}</h2>
          <button
            type="button"
            className="hsr-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
