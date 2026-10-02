import React, { useState } from "react";
import type { Eidolon } from "./types/hsr";
import "./EidolonsMenu.css";

type EidolonKey = "e1" | "e2" | "e3" | "e4" | "e5" | "e6";

export const EidolonsMenu: React.FC<Eidolon> = (props) => {
  // Guardamos las claves de los eidolones desplegados
  const [openKeys, setOpenKeys] = useState<Record<EidolonKey, boolean>>({
    e1: false,
    e2: false,
    e3: false,
    e4: false,
    e5: false,
    e6: false,
  });

  const eidolonsList: { key: EidolonKey; num: number; data: Eidolon["e1"] }[] = [
    { key: "e1", num: 1, data: props.e1 },
    { key: "e2", num: 2, data: props.e2 },
    { key: "e3", num: 3, data: props.e3 },
    { key: "e4", num: 4, data: props.e4 },
    { key: "e5", num: 5, data: props.e5 },
    { key: "e6", num: 6, data: props.e6 },
  ];

  const toggleEidolon = (key: EidolonKey) => {
    setOpenKeys((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="hsr-eidolons-list">
      {eidolonsList.map(({ key, num, data }) => {
        const isOpen = openKeys[key];

        return (
          <div
            key={key}
            className={`hsr-eidolon-box ${isOpen ? "open" : ""}`}
          >
            {/* Cabecera Clicable */}
            <div
              className="hsr-eidolon-header"
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              onClick={() => toggleEidolon(key)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleEidolon(key);
                }
              }}
            >
              <div className="hsr-eidolon-info">
                <span className="hsr-eidolon-num">{num}</span>
                <div className="hsr-eidolon-thumb-frame">
                  <img
                    src={data.image}
                    alt=""
                    className="hsr-eidolon-thumb"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span className="hsr-eidolon-title">{data.title}</span>
              </div>

              {/* Flecha desplegable */}
              <span className="hsr-eidolon-arrow" aria-hidden="true">
                ▼
              </span>
            </div>

            {/* Contenido Desplegable */}
            {isOpen && (
              <div className="hsr-eidolon-content">
                <p className="hsr-eidolon-desc">{data.desc}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};