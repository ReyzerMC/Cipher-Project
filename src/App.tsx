import { useEffect, useState } from "react";
import "./App.css";
import type { AuthUser } from "./types/auth";
import { apiError, readJson } from "./utils/api";
import { navigate } from "./utils/navigation";
import { HomePage } from "./pages/HomePage";
import { LegalNoticePage, CookiesPage, PrivacyPage, TermsPage } from "./pages/LegalPages";
import { LoginPage } from "./pages/LoginPage";
import { ProfilePage } from "./pages/ProfilePage";
import { RegisterPage } from "./pages/RegisterPage";
import { VerifyEmailPage } from "./pages/VerifyEmailPage";

// El identificador que se está verificando sobrevive a un F5 (solo en esta pestaña)
const PENDING_KEY = "cipher.pendingVerification";

function readPendingIdentifier(): string {
  try {
    return sessionStorage.getItem(PENDING_KEY) ?? "";
  } catch {
    return ""; // almacenamiento no disponible (modo privado, etc.)
  }
}

function savePendingIdentifier(identifier: string) {
  try {
    if (identifier) {
      sessionStorage.setItem(PENDING_KEY, identifier);
    } else {
      sessionStorage.removeItem(PENDING_KEY);
    }
  } catch {
    // sin almacenamiento: no pasa nada, el usuario volverá a escribirlo
  }
}

interface MeResponse {
  error?: string;
  authenticated?: boolean;
  user?: AuthUser | null;
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [pendingIdentifier, setPendingIdentifier] = useState(readPendingIdentifier);
  const [verifyNotice, setVerifyNotice] = useState("");
  const [verifyCooldown, setVerifyCooldown] = useState(0);

  const startVerification = (identifier: string, notice: string, cooldown: number) => {
    setPendingIdentifier(identifier);
    savePendingIdentifier(identifier);
    setVerifyNotice(notice);
    setVerifyCooldown(cooldown);
    navigate("/verify");
  };

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
        const data = await readJson<MeResponse>(response);

        if (!response.ok) {
          console.warn(apiError(data, response.status, "Could not load session"));
          setAuthUser(null);
          return;
        }

        setAuthUser(data?.authenticated ? (data.user ?? null) : null);
      })
      .catch(() => {
        setAuthUser(null);
      })
      .finally(() => {
        setAuthLoading(false);
      });
  }, []);

  // /profile exige sesión: se redirige desde un efecto, nunca durante el render
  useEffect(() => {
    if (currentPath === "/profile" && !authLoading && !authUser) {
      navigate("/login");
    }
  }, [currentPath, authLoading, authUser]);

  if (currentPath === "/login") {
    return (
      <LoginPage
        onLogin={(user) => {
          setAuthUser(user);
          navigate("/");
        }}
        onRegister={() => navigate("/register")}
        onNeedsVerification={(identifier) =>
          startVerification(
            identifier,
            "Your email isn't verified yet. We sent you a code (if you didn't just get one, press Resend).",
            30
          )
        }
      />
    );
  }

  if (currentPath === "/register") {
    return (
      <RegisterPage
        onRegistered={(identifier, emailSent) =>
          startVerification(
            identifier,
            emailSent
              ? "We sent a 6-digit code to your email."
              : "Your account was created, but we couldn't send the email. Press Resend code.",
            emailSent ? 60 : 0
          )
        }
        onLogin={() => navigate("/login")}
      />
    );
  }

  if (currentPath === "/verify") {
    return (
      <VerifyEmailPage
        initialIdentifier={pendingIdentifier}
        initialNotice={verifyNotice}
        initialCooldown={verifyCooldown}
        onIdentifierChange={(identifier) => {
          setPendingIdentifier(identifier);
          savePendingIdentifier(identifier);
        }}
        onVerified={() => {
          setPendingIdentifier("");
          savePendingIdentifier("");
          navigate("/login");
        }}
        onBack={() => navigate("/login")}
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
        onDeleted={() => {
          setAuthUser(null);
          navigate("/");
        }}
      />
    );
  }

  if (currentPath === "/privacy") return <PrivacyPage />;
  if (currentPath === "/terms") return <TermsPage />;
  if (currentPath === "/cookies") return <CookiesPage />;
  if (currentPath === "/legal") return <LegalNoticePage />;

  // "/" y "/character/<nombre>"
  return <HomePage authUser={authUser} authLoading={authLoading} />;
}
