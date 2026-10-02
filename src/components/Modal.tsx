import React, { useEffect, useId } from "react";

// Al declarar el siguiente Prop, podria haber utilizado interface
// interface ModalProps {
//   ...
// }
// Tecnicamente es igual y te daria el mismo resultado, pero type es mejor en este caso:
// Type solo existe en typescript
//
// Cuando se hace el build (typescript -> javascript) los tipos desaparecen, es decir
// los tipos son para declarar algo debe seguir una cierta estructura cuando estas desarrollando.
//
// Interface es para cuando quieres que no solo tenga la estructura, sino una serie de funcionalidades (metodos se le llaman; son funciones que solo se pueden ejecutar para una clase en especifico)
// Son intercambiables y dan el mismo pego, typescript los trata igual, debe cumplirse la estructura.
// Favorece los tipos cuando no quieras que tengan funciones.
// Te recomendaria que miraras al respecto de interfaces y tipos por tu banda, hay mas cosas.
type ModalProps = {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

// Modal generico reutilizable: Lo he sacado de App.tsx ya que es muy posible que quireas
// que haya otro lugar de la app con modales, entonces ya no tienes que escribir todo de nuevo
// Solo tienes que importarlo y ya.
//
// El contenido concreto de cada modal (buscador, filtros, grid...) se pasa como children.
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
