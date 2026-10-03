import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import type { ChangeEvent } from "react";
import { useCookies } from "react-cookie";
import type { Character, LightCone, Log } from "../types/hsr";
import type { AuthUser } from "../types/auth";
import { LegalLinks } from "../components/LegalLinks";
import { Modal } from "../components/Modal";
import { changes } from "../components/changelog";
import { pathIcon } from "../utils/assets";
import { buttonProps } from "../utils/a11y";
import { navigate } from "../utils/navigation";

// Traces y Eidolons solo se descargan cuando el usuario abre esa pestaña
// (menos JS inicial en móvil).
const TracesMenu = lazy(() =>
  import("../TracesMenu").then((m) => ({ default: m.TracesMenu }))
);
const EidolonsMenu = lazy(() =>
  import("../EidolonsMenu").then((m) => ({ default: m.EidolonsMenu }))
);

type Tab = "details" | "calculator" | "traces" | "eidolons";

const TABS: Tab[] = ["details", "calculator", "traces", "eidolons"];

function isTab(value: string | null): value is Tab {
  return value !== null && (TABS as string[]).includes(value);
}

interface AppCookies {
  selectedChar?: string | null;
  selectedCone?: string | null;
}

// ---------------------------------------------------------------------------
// URL <-> selección.
//   /                              nada seleccionado (o se restaura de la cookie)
//   /character/Cipher              personaje
//   /character/Cipher?lc=Name      personaje + cono de luz
//   /character/Cipher?tab=traces   pestaña
// Así se pueden compartir enlaces y el botón "atrás" cambia de personaje.
// ---------------------------------------------------------------------------

function isWikiPath(pathname: string): boolean {
  return pathname === "/" || pathname.startsWith("/character/");
}

function readLocation() {
  const { pathname, search } = window.location;
  const params = new URLSearchParams(search);

  let charName: string | null = null;
  const match = pathname.match(/^\/character\/([^/]+)\/?$/);

  if (match) {
    try {
      charName = decodeURIComponent(match[1]);
    } catch {
      charName = null; // URL mal formada
    }
  }

  return {
    charName,
    coneName: params.get("lc"),
    tab: params.get("tab"),
  };
}

function buildUrl(
  charName: string | null,
  coneName: string | null,
  tab: Tab
): string {
  if (!charName) return "/";

  const params = new URLSearchParams();
  if (coneName) params.set("lc", coneName);
  if (tab !== "details") params.set("tab", tab);

  const query = params.toString();

  return `/character/${encodeURIComponent(charName)}${query ? `?${query}` : ""}`;
}

// ---------------------------------------------------------------------------
// Carga diferida de los datos del juego (más de 1 MB de fuente): solo se
// descargan al entrar en la wiki, no en login / registro / perfil.
// ---------------------------------------------------------------------------

interface GameData {
  characters: Character[];
  lightCones: LightCone[];
  paths: string[];
}

type DataState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "ready"; data: GameData };

function useGameData(): DataState {
  const [state, setState] = useState<DataState>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;

    Promise.all([
      import("../items/characters/CharacterList"),
      import("../items/lightCones/LightConesList"),
      import("../items/item/ResourcesLists"),
    ])
      .then(([characters, lightCones, resources]) => {
        if (cancelled) return;

        setState({
          status: "ready",
          data: {
            characters: characters.Characters,
            lightCones: lightCones.LightCones,
            paths: Object.values(resources.Paths),
          },
        });
      })
      .catch(() => {
        if (!cancelled) setState({ status: "error" });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}

interface HomePageProps {
  authUser: AuthUser | null;
  authLoading: boolean;
}

export function HomePage({ authUser, authLoading }: HomePageProps) {
  const dataState = useGameData();

  const [cookies, setCookie, removeCookie] = useCookies<string, AppCookies>([
    "selectedChar",
    "selectedCone",
  ]);

  // Se guardan los NOMBRES; los objetos se derivan cuando los datos ya están cargados.
  // Prioridad: URL > cookie.
  const [charName, setCharName] = useState<string | null>(
    () => readLocation().charName ?? cookies.selectedChar ?? null
  );
  const [coneName, setConeName] = useState<string | null>(() => {
    const location = readLocation();
    return location.charName ? location.coneName : (cookies.selectedCone ?? null);
  });
  const [rawTab, setActiveTab] = useState<Tab>(() => {
    const location = readLocation();
    return location.charName && isTab(location.tab) ? location.tab : "details";
  });

  const data = dataState.status === "ready" ? dataState.data : null;
  const characters = useMemo(() => data?.characters ?? [], [data]);
  const lightCones = useMemo(() => data?.lightCones ?? [], [data]);

  const selectedCharacter = useMemo(
    () => characters.find((c) => c.name === charName) ?? null,
    [characters, charName]
  );

  const selectedLightCone = useMemo(() => {
    const lc = lightCones.find((l) => l.name === coneName) ?? null;
    // Un cono solo es válido si es de la misma vía que el personaje
    return lc && selectedCharacter && lc.path === selectedCharacter.path ? lc : null;
  }, [lightCones, coneName, selectedCharacter]);

  // Traces / Eidolons necesitan personaje
  const activeTab: Tab = selectedCharacter || rawTab === "details" ? rawTab : "details";

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

  // Botones atrás/adelante del navegador: releer la selección desde la URL
  useEffect(() => {
    const onPopState = () => {
      if (!isWikiPath(window.location.pathname)) return;

      const location = readLocation();

      setCharName(location.charName);
      setConeName(location.coneName);
      setActiveTab(isTab(location.tab) ? location.tab : "details");
    };

    window.addEventListener("popstate", onPopState);

    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // Mantener la URL al día (sin añadir entradas al historial: eso solo lo hace elegir personaje)
  useEffect(() => {
    if (dataState.status !== "ready") return;

    const target = buildUrl(
      selectedCharacter?.name ?? null,
      selectedLightCone?.name ?? null,
      activeTab
    );
    const current = window.location.pathname + window.location.search;

    if (target !== current) {
      window.history.replaceState(window.history.state, "", target);
    }
  }, [dataState.status, selectedCharacter, selectedLightCone, activeTab]);

  useEffect(() => {
    document.title = selectedCharacter
      ? `${selectedCharacter.name} - Cipher Project`
      : "Cipher Project - HSR Wiki";
  }, [selectedCharacter]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const versionSelected = event.target.value;
    const foundLog = changes.find((log) => log.version === versionSelected);
    if (foundLog) {
      setSelectedLog(foundLog);
    }
  };

  const availableLightCones = useMemo(
    () =>
      selectedCharacter
        ? lightCones.filter((lc) => lc.path === selectedCharacter.path)
        : lightCones,
    [lightCones, selectedCharacter]
  );

  // Filtrado reactivo de personajes
  const filteredCharacters = useMemo(() => {
    return characters.filter((char) => {
      const matchesSearch = char.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPath = selectedPathFilter === "ALL" || char.path === selectedPathFilter;
      return matchesSearch && matchesPath;
    });
  }, [characters, searchQuery, selectedPathFilter]);

  // Filtrado reactivo de conos de luz
  const filteredLightCones = useMemo(() => {
    return availableLightCones.filter((lc) => {
      const matchesSearch = lc.name.toLowerCase().includes(lcSearchQuery.toLowerCase());
      const matchesPath = selectedLcPathFilter === "ALL" || lc.path === selectedLcPathFilter;
      return matchesSearch && matchesPath;
    });
  }, [availableLightCones, lcSearchQuery, selectedLcPathFilter]);

  const handleSelectCharacter = (char: Character) => {
    // Elegir otro personaje crea una entrada de historial (el botón atrás vuelve al anterior)
    if (char.name !== charName) {
      window.history.pushState({}, "", buildUrl(char.name, null, activeTab));
    }

    setCharName(char.name);
    setConeName(null);
    setIsCharModalOpen(false);

    setCookie("selectedChar", char.name, { path: "/", maxAge: 60 * 60 * 24 * 30 });
    removeCookie("selectedCone", { path: "/" });
  };

  const handleSelectLightCone = (lc: LightCone) => {
    setConeName(lc.name);
    setIsLcModalOpen(false);
    setCookie("selectedCone", lc.name, { path: "/", maxAge: 60 * 60 * 24 * 30 });
  };

  const openLcModal = () => {
    if (!selectedCharacter) return;
    // Por defecto filtramos los conos según la vía del personaje seleccionado
    setSelectedLcPathFilter(selectedCharacter.path);
    setIsLcModalOpen(true);
  };

  if (dataState.status !== "ready") {
    const failed = dataState.status === "error";

    return (
      <div className="hsr-container">
        <div className="hsr-loading" role={failed ? "alert" : "status"}>
          {failed ? (
            <>
              <p>Could not load the wiki data.</p>
              <button
                type="button"
                className="account-nav-button"
                onClick={() => window.location.reload()}
              >
                Retry
              </button>
            </>
          ) : (
            <p>Loading wiki data...</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="hsr-container">
      <header className="account-nav">
        {authLoading ? null : authUser ? (
          <button
            className="account-profile-button"
            onClick={() => navigate("/profile")}
            title="Profile"
            aria-label="Profile"
          >
            {authUser.avatar_url ? (
              <img
                className="account-avatar-image"
                src={authUser.avatar_url}
                alt=""
              />
            ) : (
              <span className="account-avatar">
                {authUser.username.charAt(0).toUpperCase()}
              </span>
            )}
          </button>
        ) : (
          <>
            <button
              className="account-nav-button"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <button
              className="account-nav-button"
              onClick={() => navigate("/register")}
            >
              Register
            </button>

            <button
              className="account-profile-button account-guest-avatar"
              onClick={() => navigate("/login")}
              title="Profile"
              aria-label="Profile"
            >
              <span className="account-avatar">?</span>
            </button>
          </>
        )}
      </header>
      {/* Columna Izquierda */}
      <aside className="hsr-left-panel">
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
        <LegalLinks className="legal-links--panel" />
      </aside>
      {/* Columna Central */}
      <main className="hsr-center-art">
        {activeTab === "details" && (
          selectedCharacter?.image ? (
            <img src={selectedCharacter.image} alt={selectedCharacter.name} className="hsr-character-img" decoding="async" />
          ) : (
            <div className="hsr-art-placeholder">Character Art</div>
          )
        )}

        {activeTab === "traces" && selectedCharacter && (
          <Suspense fallback={<div className="hsr-art-placeholder">Loading...</div>}>
            <TracesMenu
              path={selectedCharacter?.path!}
              nodes={selectedCharacter?.traces!}
              bgWatermark={pathIcon(selectedCharacter.path)}
            />
          </Suspense>
        )}

        {activeTab === "eidolons" && selectedCharacter && (
          <Suspense fallback={<div className="hsr-art-placeholder">Loading...</div>}>
            <EidolonsMenu
              e1={selectedCharacter.eidolons.e1}
              e2={selectedCharacter.eidolons.e2}
              e3={selectedCharacter.eidolons.e3}
              e4={selectedCharacter.eidolons.e4}
              e5={selectedCharacter.eidolons.e5}
              e6={selectedCharacter.eidolons.e6}
            />
          </Suspense>
        )}
      </main>

      {/* Columna Derecha */}
      {activeTab === "details" && (
        <aside className="hsr-right-panel">
          {/* Selectores */}
          <div className="hsr-card hsr-selectors">
            <label className="hsr-label" id="char-select-label">Character</label>
            
            {/* Selector de Personaje Personalizado */}
            <div 
              className="hsr-custom-select" 
              aria-labelledby="char-select-label"
              aria-haspopup="dialog"
              {...buttonProps(() => setIsCharModalOpen(true))}
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

            <label className="hsr-label" id="lc-select-label">Light Cone</label>

            {/* Selector de Cono de Luz Personalizado */}
            <div 
              className={`hsr-custom-select ${!selectedCharacter ? "disabled" : ""}`}
              aria-labelledby="lc-select-label"
              aria-haspopup="dialog"
              {...buttonProps(openLcModal, !selectedCharacter)}
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
                aria-expanded={showPassivePopover}
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
                type="search"
                className="hsr-search-input"
                aria-label="Search character"
                autoComplete="off"
                autoCapitalize="none"
                spellCheck={false}
                placeholder="Search character..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              <div className="hsr-path-filters">
                <button
                  className={`hsr-filter-btn ${selectedPathFilter === "ALL" ? "active" : ""}`}
                  onClick={() => setSelectedPathFilter("ALL")}
                  aria-pressed={selectedPathFilter === "ALL"}
                >
                  All
                </button>
                {dataState.data.paths.map((pathKey) => (
                  <button
                    key={pathKey}
                    className={`hsr-filter-btn ${selectedPathFilter === pathKey ? "active" : ""}`}
                    onClick={() => setSelectedPathFilter(pathKey)}
                    aria-pressed={selectedPathFilter === pathKey}
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
                    aria-label={char.name}
                    {...buttonProps(() => handleSelectCharacter(char))}
                  >
                    <div className="hsr-char-pfp-wrapper">
                      <img src={char.pfp} alt="" className="hsr-char-pfp" loading="lazy" decoding="async" />
                    </div>
                    <div className="hsr-char-info-bar">
                      <div className="hsr-char-name">{char.name}</div>
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
                type="search"
                className="hsr-search-input"
                aria-label="Search light cone"
                autoComplete="off"
                autoCapitalize="none"
                spellCheck={false}
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
                    aria-label={lc.name}
                    {...buttonProps(() => handleSelectLightCone(lc))}
                  >
                    {/* Imagen en la parte superior */}
                    <div className="hsr-char-pfp-wrapper">
                      <img src={lc.image} alt="" className="hsr-char-pfp hsr-lc-img" loading="lazy" decoding="async" />
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
