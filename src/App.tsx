import { useState, useEffect, useMemo } from "react";
import type { Character, LightCone, Log } from "./types/hsr";
import { Characters } from "./items/characters/CharacterList";
import { LightCones } from "./items/lightCones/LightConesList";
import "./App.css";
import { TracesMenu } from "./TracesMenu";
import { pathIcon } from "./utils/assets";
import { Paths } from "./items/item/ResourcesLists";
import { EidolonsMenu } from "./EidolonsMenu";
import { Modal } from "./components/Modal";
import { useCookies } from "react-cookie";
import { changes } from "./components/changelog";

const useTraceScale = () => {
  const [scale, setScale] = useState(1.0);

  useEffect(() => {
    const updateScale = () => {
        const width = window.innerWidth;

        if (width >= 2500) {
            setScale(1.35);
        } else {
            setScale(1.0);
        }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return scale;
};

interface AppCookies {
  selectedChar?: string | null;
  selectedCone?: string | null;
};

export default function App() {
  const [cookies, setCookie, removeCookie] = useCookies<string, AppCookies>(['selectedChar', 'selectedCone']);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(() => {
    if (cookies.selectedChar) {
      return Characters.find((c) => c.name === cookies.selectedChar) ?? null;
    };
    return null;
  });
  const [selectedLightCone, setSelectedLightCone] = useState<LightCone | null>(() => {
    if (cookies.selectedCone) {
      return LightCones.find((c) => c.name === cookies.selectedCone) ?? null;
    };
    return null;
  });

  const [activeTab, setActiveTab] = useState<"details" | "calculator" | "traces" | "eidolons">("details");

  // Estados para el Cono de Luz
  const [superimposition, setSuperimposition] = useState<number>(1);
  const [showPassivePopover, setShowPassivePopover] = useState<boolean>(false);

  // Estados para el Modal de Selección de Personajes
  const [isCharModalOpen, setIsCharModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedPathFilter, setSelectedPathFilter] = useState<string>("ALL");

  // Estados para el Modal de Selección de Conos de Luz
  const [isLcModalOpen, setIsLcModalOpen] = useState<boolean>(false);
  const [lcSearchQuery, setLcSearchQuery] = useState<string>("");
  const [selectedLcPathFilter, setSelectedLcPathFilter] = useState<string>("ALL");

  // Estados para el Modal de Changelogs
  const [isChLogsModalOpen, setIsChLogsModalOpen] = useState<boolean>(false);
  const [selectedLog, setSelectedLog] = useState<Log>(changes[0]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const versionSelected = event.target.value;
    const foundLog = changes.find((log) => log.version === versionSelected);
    if (foundLog) {
      setSelectedLog(foundLog);
    }
  };

  const availableLightCones = selectedCharacter
    ? LightCones.filter(lc => lc.path === selectedCharacter.path)
    : LightCones;

  const scale = useTraceScale();

  // Filtrado reactivo de personajes
  const filteredCharacters = useMemo(() => {
    return Characters.filter((char) => {
      const matchesSearch = char.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPath = selectedPathFilter === "ALL" || char.path === selectedPathFilter;
      return matchesSearch && matchesPath;
    });
  }, [searchQuery, selectedPathFilter]);

  // Filtrado reactivo de conos de luz
  const filteredLightCones = useMemo(() => {
    return availableLightCones.filter((lc) => {
      const matchesSearch = lc.name.toLowerCase().includes(lcSearchQuery.toLowerCase());
      const matchesPath = selectedLcPathFilter === "ALL" || lc.path === selectedLcPathFilter;
      return matchesSearch && matchesPath;
    });
  }, [availableLightCones, lcSearchQuery, selectedLcPathFilter]);

  const handleSelectCharacter = (char: Character) => {
    setSelectedCharacter(char);
    setSelectedLightCone(null);
    setIsCharModalOpen(false);

    setCookie("selectedChar", char.name, { path: "/", maxAge: 60 * 60 * 24 * 30 });
    removeCookie("selectedCone", { path: "/" });
  };

  const handleSelectLightCone = (lc: LightCone) => {
    setSelectedLightCone(lc);
    setIsLcModalOpen(false);
    setCookie("selectedCone", lc.name, { path: "/", maxAge: 60 * 60 * 24 * 30 });
  };

  const openLcModal = () => {
    if (!selectedCharacter) return;
    // Por defecto filtramos los conos según la vía del personaje seleccionado
    setSelectedLcPathFilter(selectedCharacter.path);
    setIsLcModalOpen(true);
  };

  return (
    <div className="hsr-container">
      {/* Columna Izquierda */}
      <aside className="hsr-left-panel" style={{ transform: `scale(${scale})` }}>
        <div className="hsr-header">
          <h1 className="hsr-title">
            {selectedCharacter?.name ?? "Select Character"}
          </h1>
          <div className="hsr-rarity">★★★★★</div>
        </div>

        <nav className="hsr-menu">
          <button 
            className={`hsr-menu-item ${activeTab === "details" ? "active" : ""}`}
            onClick={() => setActiveTab("details")}
          >
            Details
          </button>
          <button 
            className={`hsr-menu-item ${activeTab === "traces" ? "active" : ""}`}
            disabled={!selectedCharacter}
            onClick={() => setActiveTab("traces")}
          >
            Traces
          </button>
          <button 
            className={`hsr-menu-item ${activeTab === "eidolons" ? "active" : ""}`}
            disabled={!selectedCharacter}
            onClick={() => setActiveTab("eidolons")}
          >
            Eidolons
          </button>
        </nav>
        <div className="hsr-changelogs-button-container hsr-menu">
          <button 
            className="hsr-menu-item hsr-changelogs"
            onClick={() => setIsChLogsModalOpen(true)}
          >
            📋️ Changelogs
          </button>
        </div>
      </aside>
      {/* Columna Central */}
      <main className="hsr-center-art">
        {activeTab === "details" && (
          selectedCharacter?.image ? (
            <img src={selectedCharacter.image} alt={selectedCharacter.name} className="hsr-character-img" />
          ) : (
            <div className="hsr-art-placeholder">Character Art</div>
          )
        )}

        {activeTab === "traces" && selectedCharacter && (
          <TracesMenu
            path={selectedCharacter?.path!}
            nodes={selectedCharacter?.traces!}
            bgWatermark={pathIcon(selectedCharacter.path)}
          />
        )}

        {activeTab === "eidolons" && selectedCharacter && (
          <EidolonsMenu
            e1={selectedCharacter.eidolons.e1}
            e2={selectedCharacter.eidolons.e2}
            e3={selectedCharacter.eidolons.e3}
            e4={selectedCharacter.eidolons.e4}
            e5={selectedCharacter.eidolons.e5}
            e6={selectedCharacter.eidolons.e6}
          />
        )}
      </main>

      {/* Columna Derecha */}
      {activeTab === "details" && (
        <aside className="hsr-right-panel" style={{ transform: `scale(${scale})` }}>
          {/* Selectores */}
          <div className="hsr-card hsr-selectors">
            <label className="hsr-label">Character</label>
            
            {/* Selector de Personaje Personalizado */}
            <div 
              className="hsr-custom-select" 
              onClick={() => setIsCharModalOpen(true)}
            >
              {selectedCharacter ? (
                <div className="hsr-select-selected-item">
                  <img src={selectedCharacter.pfp} alt={selectedCharacter.name} className="hsr-select-pfp" />
                  <span>{selectedCharacter.name}</span>
                </div>
              ) : (
                <span className="hsr-select-placeholder">Choose Character</span>
              )}
              <span className="hsr-select-arrow">▼</span>
            </div>

            <label className="hsr-label">Light Cone</label>

            {/* Selector de Cono de Luz Personalizado */}
            <div 
              className={`hsr-custom-select ${!selectedCharacter ? "disabled" : ""}`}
              onClick={openLcModal}
            >
              {selectedLightCone ? (
                <div className="hsr-select-selected-item">
                  <img src={selectedLightCone.image} alt={selectedLightCone.name} className="hsr-select-pfp" />
                  <span>{selectedLightCone.name}</span>
                </div>
              ) : (
                <span className="hsr-select-placeholder">Choose Light Cone</span>
              )}
              <span className="hsr-select-arrow">▼</span>
            </div>
          </div>

          {/* Stats del Personaje */}
          <div className="hsr-card hsr-stats">
            <div className="hsr-stats-header">
              <span>Stats</span>
              <span className="hsr-level">Lv. 80</span>
            </div>
            
            <ul className="hsr-stats-list">
              <li><span>ATK</span><strong>{selectedCharacter?.baseATK ?? "--"}</strong></li>
              <li><span>DEF</span><strong>{selectedCharacter?.baseDEF ?? "--"}</strong></li>
              <li><span>HP</span><strong>{selectedCharacter?.baseHP ?? "--"}</strong></li>
              <li><span>SPD</span><strong>{selectedCharacter?.baseSPD ?? "--"}</strong></li>
              <li><span>Aggro</span><strong>{selectedCharacter?.aggro ?? "--"}</strong></li>
            </ul>

            <div className="hsr-details-grid">
              <div><span>Element</span><strong>{selectedCharacter?.element ?? "--"}</strong></div>
              <div><span>Path</span><strong>{selectedCharacter?.path ?? "--"}</strong></div>
            </div>
          </div>

          {/* Panel del Cono de Luz */}
          <div className="hsr-card hsr-lc-card">
            <div className="hsr-lc-header">
              <div className="hsr-lc-info">
                <span className="hsr-lc-title">Light Cone</span>
                <h3 className="hsr-lc-name">{selectedLightCone?.name ?? "No Light Cone"}</h3>
              </div>
              {selectedLightCone?.image ? (
                <img src={selectedLightCone.image} alt={selectedLightCone.name} className="hsr-lc-thumb" />
              ) : (
                <div className="hsr-lc-thumb-placeholder" />
              )}
            </div>

            <hr className="hsr-divider" />

            <div className="hsr-stats-header">
              <span>Cone Stats</span>
              <span className="hsr-level">Lv. 80</span>
            </div>

            <ul className="hsr-stats-list">
              <li><span>HP</span><strong>{selectedLightCone?.baseHP ?? "--"}</strong></li>
              <li><span>ATK</span><strong>{selectedLightCone?.baseATK ?? "--"}</strong></li>
              <li><span>DEF</span><strong>{selectedLightCone?.baseDEF ?? "--"}</strong></li>
            </ul>

            <div className="hsr-details-grid">
              <div><span>Path</span><strong>{selectedLightCone?.path ?? "--"}</strong></div>
            </div>

            <div className="hsr-passive-wrapper">
              <button
                className="hsr-btn-passive"
                disabled={!selectedLightCone}
                onClick={() => setShowPassivePopover(!showPassivePopover)}
              >
                Passive Ability {showPassivePopover ? "▲" : "▼"}
              </button>

              {showPassivePopover && selectedLightCone && (
                <div className="hsr-popover">
                  <div className="hsr-popover-header">
                    <span>Superimposition</span>
                    <select
                      className="hsr-select-super"
                      value={superimposition}
                      onChange={(e) => setSuperimposition(Number(e.target.value))}
                    >
                      {[1, 2, 3, 4, 5].map(rank => (
                        <option key={rank} value={rank}>S{rank}</option>
                      ))}
                    </select>
                  </div>
                  <p 
                    className="hsr-popover-desc"
                    dangerouslySetInnerHTML={{ __html: selectedLightCone.description(superimposition) ?? "No description available for this Light Cone." }}
                  />
                </div>
              )}
            </div>
          </div>
        </aside>
      )}

      {/* Modal / Menú Flotante de Selección de Personaje */}
      {isCharModalOpen && (
        <Modal title="Select Character" onClose={() => setIsCharModalOpen(false)}>
            {/* Buscador y Filtros */}
            <div className="hsr-modal-controls">
              <input
                type="text"
                className="hsr-search-input"
                placeholder="Search character..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              <div className="hsr-path-filters">
                <button
                  className={`hsr-filter-btn ${selectedPathFilter === "ALL" ? "active" : ""}`}
                  onClick={() => setSelectedPathFilter("ALL")}
                >
                  All
                </button>
                {Object.values(Paths).map((pathKey) => (
                  <button
                    key={pathKey}
                    className={`hsr-filter-btn ${selectedPathFilter === pathKey ? "active" : ""}`}
                    onClick={() => setSelectedPathFilter(pathKey)}
                  >
                    {pathKey}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid de Personajes */}
            <div className="hsr-character-grid">
              {filteredCharacters.length > 0 ? (
                filteredCharacters.map((char) => (
                  <div
                    key={char.name}
                    className={`hsr-char-card ${selectedCharacter?.name === char.name ? "selected" : ""}`}
                    onClick={() => handleSelectCharacter(char)}
                  >
                    <div className="hsr-char-pfp-wrapper">
                      <img src={char.pfp} alt={char.name} className="hsr-char-pfp" />
                    </div>
                    <div className="hsr-char-info-bar">
                      <div className="hsr-char-name">{char.name}</div>
                      <div className="hsr-char-stars">★★★★★</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="hsr-no-results">No characters found</div>
              )}
            </div>
        </Modal>
      )}

      {/* Modal / Menú Flotante de Selección de Conos de Luz */}
      {isLcModalOpen && (
        <Modal title="Select Light Cone" onClose={() => setIsLcModalOpen(false)}>
            {/* Buscador */}
            <div className="hsr-modal-controls">
              <input
                type="text"
                className="hsr-search-input"
                placeholder="Search Light Cone..."
                value={lcSearchQuery}
                onChange={(e) => setLcSearchQuery(e.target.value)}
              />
            </div>

            {/* Grid de Conos de Luz */}
            <div className="hsr-character-grid hsr-lc-grid">
              {filteredLightCones.length > 0 ? (
                filteredLightCones.map((lc) => (
                  <div
                    key={lc.name}
                    className={`hsr-char-card hsr-lc-card-item ${selectedLightCone?.name === lc.name ? "selected" : ""}`}
                    onClick={() => handleSelectLightCone(lc)}
                  >
                    {/* Imagen en la parte superior */}
                    <div className="hsr-char-pfp-wrapper">
                      <img src={lc.image} alt={lc.name} className="hsr-char-pfp hsr-lc-img" />
                    </div>

                    {/* Nombre y Estrellas en la parte inferior */}
                    <div className="hsr-char-info-bar">
                      <div className="hsr-char-name">{lc.name}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="hsr-no-results">No Light Cones found</div>
              )}
            </div>
        </Modal>
      )}

      // Chlogs modal
      {isChLogsModalOpen && (
        <Modal title="Changelogs" onClose={() => setIsChLogsModalOpen(false)}>
          <div className="hsr-changelog">
            <label htmlFor="changelog-select" className="hsr-changelog-select">
              Select version:
            </label>
            <br/>
            <select 
              id="changelog-select"
              value={selectedLog.version}
              onChange={handleChange}
              className="hsr-changelog-select"
            >
              {changes.map((log) => (
                <option key={log.version} value={log.version}>
                  v{log.version} - {log.title}
                </option>
              ))}
            </select>

            <div className="hsr-changelog-text">
              <h3> {selectedLog.title} </h3>
              <ul>
                {selectedLog.changes.map((change, index) => (
                  <li key={index}>{change}</li>
                ))}
              </ul>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}