import React, { useState } from "react";
import type { TraceNodeData } from "./types/hsr";
import {
  AbundanceTreeLayout,
  DestructionTreeLayout,
  ElationTreeLayout,
  EruditionTreeLayout,
  HarmonyTreeLayout,
  HuntTreeLayout,
  NihilityTreeLayout,
  PreservationTreeLayout,
  RemembranceTreeLayout
} from "./types/hsr";
import "./TracesMenu.css";

interface TracesMenuProps {
  path: string;
  nodes: Record<string, TraceNodeData>;
  bgWatermark?: string;
  // Callback para exportar el nivel actual al exterior (e.g. index para arrays de daño)
  onLevelChange?: (nodeId: string, level: number, index: number) => void;
}

// El escalado para pantallas >= 2500px ahora lo hace TracesMenu.css (media query + zoom),
// ya no hace falta el hook useTraceScale duplicado en App.tsx y en este archivo.

// Función auxiliar para obtener el nivel máximo desde la cadena "x/max"
const getMaxLevel = (levelStr?: string): number => {
  if (!levelStr) return 1;
  const parts = levelStr.split("/");
  if (parts.length > 1) {
    const parsed = parseInt(parts[1], 10);
    return isNaN(parsed) ? 1 : parsed;
  }
  return 1;
};

export const TracesMenu: React.FC<TracesMenuProps> = ({
  path,
  nodes,
  bgWatermark,
  onLevelChange
}) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  // Diccionario para almacenar el nivel dinámico actual de cada nodo (id -> nivel)
  const [nodeLevels, setNodeLevels] = useState<Record<string, number>>({});

  const selectedNode = selectedNodeId ? nodes[selectedNodeId] : null;

  // Manejar cambio de nivel en el slider
  const handleSliderChange = (nodeId: string, newLevel: number) => {
    setNodeLevels((prev) => ({
      ...prev,
      [nodeId]: newLevel
    }));

    // Exportamos el nivel y el índice (0-based) para arrays de escalado
    if (onLevelChange) {
      onLevelChange(nodeId, newLevel, newLevel - 1);
    }
  };

  const getLayoutConnections = () => {
    if (path === "Nihility") return NihilityTreeLayout.connections;
    if (path === "Destruction") return DestructionTreeLayout.connections;
    if (path === "Elation") return ElationTreeLayout.connections;
    if (path === "Harmony") return HarmonyTreeLayout.connections;
    if (path === "Abundance") return AbundanceTreeLayout.connections;
    if (path === "Remembrance") return RemembranceTreeLayout.connections;
    if (path === "Hunt") return HuntTreeLayout.connections;
    if (path === "Preservation") return PreservationTreeLayout.connections;
    if (path === "Erudition") return EruditionTreeLayout.connections;
    return [];
  };

  const getLayoutPositions = () => {
    if (path === "Nihility") return NihilityTreeLayout.positions;
    if (path === "Destruction") return DestructionTreeLayout.positions;
    if (path === "Elation") return ElationTreeLayout.positions;
    if (path === "Harmony") return HarmonyTreeLayout.positions;
    if (path === "Abundance") return AbundanceTreeLayout.positions;
    if (path === "Remembrance") return RemembranceTreeLayout.positions;
    if (path === "Hunt") return HuntTreeLayout.positions;
    if (path === "Preservation") return PreservationTreeLayout.positions;
    if (path === "Erudition") return EruditionTreeLayout.positions;
    return {};
  };

  const positions = getLayoutPositions();
  const connections = getLayoutConnections();

  // Datos para el nodo seleccionado actualmente
  const currentMaxLevel = selectedNode
    ? getMaxLevel(selectedNode.level)
    : 1;

  const currentLevel = selectedNodeId
    ? (nodeLevels[selectedNodeId] ?? 1)
    : 1;

  const currentDescription = selectedNode
    ? typeof selectedNode.description === "function"
      ? selectedNode.description(currentLevel - 1)
      : selectedNode.description
    : "";

  return (
    <div className="hsr-traces-container">
      {/* Contenedor Canvas */}
      <div className="hsr-traces-canvas">
        {bgWatermark && (
          <img src={bgWatermark} alt={path} className="hsr-traces-watermark" />
        )}

        {/* Anillos SVG */}
        <svg className="hsr-traces-svg-layer" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="50" cy="50" r="42" className="hsr-svg-orbit" />
          <circle cx="50" cy="50" r="38" className="hsr-svg-orbit" />

          {connections.map((conn, idx) => {
            const start = positions[conn.from];
            const end = positions[conn.to];
            if (!start || !end) return null;

            if (conn.arc) {
              const d = `M ${start.x} ${start.y} A ${conn.arc.radius} ${conn.arc.radius} 0 0 ${conn.arc.sweep} ${end.x} ${end.y}`;
              return <path key={idx} d={d} className="hsr-svg-line" fill="none" />;
            }

            return (
              <line
                key={idx}
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                className="hsr-svg-line"
              />
            );
          })}
        </svg>

        {/* Layer de Nodos */}
        <div className="hsr-traces-nodes-layer">
          {Object.entries(positions).map(([id, pos]) => {
            const nodeData = nodes[id];
            if (!nodeData) return null;
            const isSelected = selectedNodeId === id;
            const maxLvl = getMaxLevel(nodeData.level);
            const activeLvl = nodeLevels[id] ?? 1;

            return (
              <div
                key={id}
                className={`hsr-trace-node-wrapper node-type-${nodeData.type} ${isSelected ? "selected" : ""}`}
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              >
                {isSelected && <div className="hsr-node-arrow" />}
                <button
                  type="button"
                  className="hsr-trace-node-btn"
                  onClick={() => setSelectedNodeId(id)}
                  aria-label={nodeData.name}
                  aria-pressed={isSelected}
                >
                  <img src={nodeData.icon} alt="" className="hsr-node-icon" draggable={false} />
                </button>
                {nodeData.level && (
                  <span className="hsr-node-level">
                    {activeLvl}/{maxLvl}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Info Flotante alineada a la derecha */}
      {selectedNode && (
        <aside className="hsr-trace-info-popover">
          <header className="hsr-info-header">
            <span className="hsr-info-badge">
              {selectedNode.type === "bonus"
                ? "Bonus Ability"
                : selectedNode.type === "stat"
                  ? "Stat Bonus"
                  : "Ability"}
            </span>
            <h3 className="hsr-info-title">{selectedNode.name}</h3>

            {/* ZONA INDICADA POR LA FLECHA: SLIDER DE NIVEL */}
            {selectedNode.level && currentMaxLevel > 1 ? (
              <div className="hsr-info-level-control">
                <div className="hsr-level-header">
                  <span className="hsr-info-level">Lv. {currentLevel}</span>
                  <span className="hsr-info-max-level">/ {currentMaxLevel}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={currentMaxLevel}
                  value={currentLevel}
                  onChange={(e) =>
                    handleSliderChange(selectedNode.id, parseInt(e.target.value, 10))
                  }
                  className="hsr-level-slider"
                />
              </div>
            ) : selectedNode.level ? (
              <span className="hsr-info-level">Lv. 1</span>
            ) : null}
          </header>

          <div className="hsr-info-divider" />
          <p
            className="hsr-info-desc"
            dangerouslySetInnerHTML={{ __html: currentDescription }}
          />
        </aside>
      )}
    </div>
  );
};
