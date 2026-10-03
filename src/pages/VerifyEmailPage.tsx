import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { LegalLinks } from "../components/LegalLinks";
import { apiError, readJson } from "../utils/api";

const RESEND_COOLDOWN = 60;

interface VerifyEmailPageProps {
  initialIdentifier: string;
  initialNotice: string;
  initialCooldown: number;
  onIdentifierChange: (identifier: string) => void;
  onVerified: () => void;
  onBack: () => void;
}

export function VerifyEmailPage({
  initialIdentifier,
  initialNotice,
  initialCooldown,
  onIdentifierChange,
  onVerified,
  onBack,
}: VerifyEmailPageProps) {
  const [identifier, setIdentifier] = useState(initialIdentifier);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState(initialNotice);
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [cooldown, setCooldown] = useState(initialCooldown);
  const redirectTimer = useRef<number | undefined>(undefined);

  // Si se sale de la página antes de la redirección, no dejamos el temporizador colgado
  useEffect(() => () => window.clearTimeout(redirectTimer.current), []);

  // Cuenta atrás del botón "Resend code"
  useEffect(() => {
    if (cooldown <= 0) return undefined;

    const timer = window.setTimeout(() => setCooldown((c) => c - 1), 1000);

    return () => window.clearTimeout(timer);
  }, [cooldown]);

  const submit = async (event: FormEvent) => {
    event.preventDefault();

    setError("");
    setNotice("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/verify-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier: identifier.trim(), code }),
      });

      const data = await readJson<{ error?: string }>(response);

      if (!response.ok) {
        setError(apiError(data, response.status, "Verification failed"));
        return;
      }

      setSuccess("Email verified! Redirecting to login...");
      redirectTimer.current = window.setTimeout(onVerified, 1200);
    } catch {
      setError("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  const resend = async () => {
    if (!identifier.trim()) {
      setError("Enter your username or email first.");
      return;
    }

    setError("");
    setNotice("");
    setResending(true);

    try {
      const response = await fetch("/api/auth/resend-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier: identifier.trim() }),
      });

      const data = await readJson<{ error?: string; message?: string }>(response);

      if (!response.ok) {
        setError(apiError(data, response.status, "Could not send the code"));
        return;
      }

      setNotice(data?.message ?? "A new code has been sent.");
      setCooldown(RESEND_COOLDOWN);
    } catch {
      setError("Unable to connect to the server.");
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="account-page">
      <div className="account-card">
        <h1>Verify your email</h1>

        <p className="account-subtitle">
          Enter the 6-digit code we sent to your email. It expires in 15
          minutes. Check your spam folder if you don&apos;t see it.
        </p>

        <form onSubmit={submit}>
          <label htmlFor="verify-identifier">Username or Email</label>

          <input
            id="verify-identifier"
            name="username"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            autoComplete="username"
            value={identifier}
            onChange={(e) => {
              setIdentifier(e.target.value);
              onIdentifierChange(e.target.value);
            }}
            required
          />

          <label htmlFor="verify-code">Verification code</label>

          <input
            id="verify-code"
            name="code"
            className="account-code-input"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={6}
            autoComplete="one-time-code"
            placeholder="000000"
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
            required
          />

          {notice && (
            <div className="account-notice" role="status">
              {notice}
            </div>
          )}

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
            disabled={loading || code.length !== 6 || !!success}
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
        </form>

        <button
          type="button"
          className="account-secondary-button"
          onClick={resend}
          disabled={resending || cooldown > 0 || !!success}
        >
          {resending
            ? "Sending..."
            : cooldown > 0
              ? `Resend code (${cooldown}s)`
              : "Resend code"}
        </button>

        <button type="button" className="account-back-button" onClick={onBack}>
          ← Back to login
        </button>

        <LegalLinks />
      </div>
    </div>
  );
}
