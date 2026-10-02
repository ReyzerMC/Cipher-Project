import { lazy, Suspense, useState, useEffect, useMemo } from "react";
import type { Character, LightCone, Log } from "./types/hsr";
import { Characters } from "./items/characters/CharacterList";
import { LightCones } from "./items/lightCones/LightConesList";
import "./App.css";
import { pathIcon } from "./utils/assets";
import { Paths } from "./items/item/ResourcesLists";
import { Modal } from "./components/Modal";
import { useCookies } from "react-cookie";
import { changes } from "./components/changelog";
import { AvatarEditor } from "./components/AvatarEditor";

// Traces y Eidolons solo se descargan cuando el usuario abre esa pestaña
// (menos JS inicial en móvil).
const TracesMenu = lazy(() =>
  import("./TracesMenu").then((m) => ({ default: m.TracesMenu }))
);
const EidolonsMenu = lazy(() =>
  import("./EidolonsMenu").then((m) => ({ default: m.EidolonsMenu }))
);

interface AuthUser {
  id: number;
  username: string;
  email: string;
  role: string;
  created_at: number;
  avatar_key: string | null;
  avatar_url: string | null;
}

// Hace que un <div> clicable sea usable con teclado y lectores de pantalla.
function buttonProps(handler: () => void, disabled = false) {
  return {
    role: "button" as const,
    tabIndex: disabled ? -1 : 0,
    "aria-disabled": disabled || undefined,
    onClick: disabled ? undefined : handler,
    onKeyDown: (e: React.KeyboardEvent) => {
      if (disabled) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handler();
      }
    },
  };
}

function navigate(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

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

  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const handleNavigation = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleNavigation);

    return () => {
      window.removeEventListener("popstate", handleNavigation);
    };
  }, []);

  useEffect(() => {
    fetch("/api/auth/me", {
      credentials: "include",
    })
      .then(async (response) => {
        if (!response.ok) {
          setAuthUser(null);
          return;
        }

        const data = await response.json();

        setAuthUser(data.authenticated ? data.user : null);
      })
      .catch(() => {
        setAuthUser(null);
      })
      .finally(() => {
        setAuthLoading(false);
      });
  }, []);

  useEffect(() => {
    if (currentPath === "/profile" && !authLoading && !authUser) {
      navigate("/login");
    }
  }, [currentPath, authLoading, authUser]);

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

  if (currentPath === "/login") {
    return (
      <LoginPage
        onLogin={(user) => {
          setAuthUser(user);
          navigate("/");
        }}
        onRegister={() => navigate("/register")}
      />
    );
  }

  if (currentPath === "/register") {
    return (
      <RegisterPage
        onRegistered={() => navigate("/login")}
        onLogin={() => navigate("/login")}
      />
    );
  }

  if (currentPath === "/profile") {
    if (authLoading) {
      return <div className="account-page">Loading...</div>;
    }

    if (!authUser) {
      return null;
    }

    return (
      <ProfilePage
        user={authUser}
        onLogout={() => {
          setAuthUser(null);
          navigate("/");
        }}
        onUserUpdated={(user) => setAuthUser(user)}
      />
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
                {Object.values(Paths).map((pathKey) => (
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

function LoginPage({
  onLogin,
  onRegister,
}: {
  onLogin: (user: AuthUser) => void;
  onRegister: () => void;
}) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Login failed.");
        return;
      }

      onLogin(data.user);
    } catch {
      setError("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="account-page">
      <div className="account-card">
        <h1>Login</h1>
        <p className="account-subtitle">
          Sign in to your Cipher account.
        </p>

        <form onSubmit={submit}>
          <label htmlFor="login-identifier">Username or Email</label>
          <input
            id="login-identifier"
            name="username"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            autoComplete="username"
            required
          />

          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />

          {error && (
            <div className="account-error" role="alert">
              {error}
            </div>
          )}

          <button
            className="account-submit"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <button
          className="account-secondary-button"
          onClick={onRegister}
        >
          Don't have an account? Register
        </button>

        <button
          className="account-back-button"
          onClick={() => navigate("/")}
        >
          ← Back
        </button>
      </div>
    </div>
  );
}

function RegisterPage({
  onRegistered,
  onLogin,
}: {
  onRegistered: () => void;
  onLogin: () => void;
}) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Registration failed.");
        return;
      }

      onRegistered();
    } catch {
      setError("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="account-page">
      <div className="account-card">
        <h1>Create Account</h1>

        <p className="account-subtitle">
          Create your Cipher account.
        </p>

        <form onSubmit={submit}>
          <label htmlFor="register-username">Username</label>

          <input
            id="register-username"
            name="username"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />

          <span className="account-hint">
            Letters and numbers only.
          </span>

          <label htmlFor="register-email">Email</label>

          <input
            id="register-email"
            name="email"
            type="email"
            inputMode="email"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />

          <label htmlFor="register-password">Password</label>

          <input
            id="register-password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />

          <span className="account-hint">
            Letters and numbers only. No length restriction.
          </span>

          {error && (
            <div className="account-error" role="alert">
              {error}
            </div>
          )}

          <button
            className="account-submit"
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        <button
          className="account-secondary-button"
          onClick={onLogin}
        >
          Already have an account? Login
        </button>

        <button
          className="account-back-button"
          onClick={() => navigate("/")}
        >
          ← Back
        </button>
      </div>
    </div>
  );
}

function ProfilePage({
  user,
  onLogout,
  onUserUpdated,
}: {
  user: AuthUser;
  onLogout: () => void;
  onUserUpdated: (user: AuthUser) => void;
}) {
  const [passwordModal, setPasswordModal] = useState(false);
  const [avatarEditorOpen, setAvatarEditorOpen] = useState(false);

  const roleClass = user.role.toLowerCase().replace("_", "-");

  const maskedEmail = (() => {
    const [name, domain] = user.email.split("@");

    if (!name || !domain) {
      return user.email;
    }

    const visible = Math.min(2, name.length);

    return `${name.slice(0, visible)}${"*".repeat(
      Math.max(2, name.length - visible)
    )}@${domain}`;
  })();

  const logout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    onLogout();
  };

  return (
    <div className="account-page">
      <div className="profile-card">
        <div className="profile-header">
          <button
            className="profile-back"
            onClick={() => navigate("/")}
          >
            ←
          </button>

          <h1>Profile</h1>
        </div>

        <div className="profile-avatar-wrapper">
          {user.avatar_url ? (
            <img
              src={user.avatar_url}
              alt={`${user.username}'s profile`}
              className="profile-avatar-image"
            />
          ) : (
            <div className="profile-avatar">
              {user.username.charAt(0).toUpperCase()}
            </div>
          )}

          <button
            className="profile-avatar-upload"
            onClick={() => setAvatarEditorOpen(true)}
          >
            Change avatar
          </button>
        </div>

        <h2>{user.username}</h2>

        <div className={`profile-role role-${roleClass}`}>
          {formatRole(user.role)}
        </div>

        <div className="profile-info">
          <div>
            <span>Email</span>
            <strong>{maskedEmail}</strong>
          </div>

          <div>
            <span>Username</span>
            <strong>{user.username}</strong>
          </div>

          <div>
            <span>Role</span>
            <strong>{formatRole(user.role)}</strong>
          </div>
        </div>

        <div className="profile-actions">
          <button
            className="account-submit"
            onClick={() => setPasswordModal(true)}
          >
            Change Password
          </button>

          <button
            className="account-logout"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>

      {passwordModal && (
        <ChangePasswordModal
          onClose={() => setPasswordModal(false)}
          onChanged={() => setPasswordModal(false)}
        />
      )}
      {avatarEditorOpen && (
        <AvatarEditor
          onClose={() => setAvatarEditorOpen(false)}
          onSaved={(avatarUrl) => {
            onUserUpdated({
              ...user,
              avatar_url: avatarUrl,
              avatar_key: avatarUrl
                .split("/")
                .slice(3)
                .join("/"),
            });

            setAvatarEditorOpen(false);
          }}
        />
      )}
    </div>
  );
}

function formatRole(role: string): string {
  switch (role) {
    case "HEAD_DEVELOPER":
      return "Head Developer";

    case "DEVELOPER":
      return "Developer";

    case "ADMINISTRATOR":
      return "Administrator";

    default:
      return "User";
  }
}

function ChangePasswordModal({
  onClose,
  onChanged,
}: {
  onClose: () => void;
  onChanged: () => void;
}) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

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

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/change-password", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Failed to change password.");
        return;
      }

      setSuccess("Password changed successfully.");

      setTimeout(() => {
        onChanged();
      }, 800);
    } catch {
      setError("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="account-modal-overlay">
      <div
        className="account-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="change-password-title"
      >
        <button
          type="button"
          className="account-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <h2 id="change-password-title">Change Password</h2>

        <form onSubmit={submit}>
          <label htmlFor="current-password">Current Password</label>

          <input
            id="current-password"
            name="current-password"
            autoComplete="current-password"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />

          <label htmlFor="new-password">New Password</label>

          <input
            id="new-password"
            name="new-password"
            autoComplete="new-password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          {error && (
            <div className="account-error" role="alert">
              {error}
            </div>
          )}

          {success && (
            <div className="account-success" role="status">
              {success}
            </div>
          )}

          <button
            className="account-submit"
            type="submit"
            disabled={loading}
          >
            {loading ? "Changing..." : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
