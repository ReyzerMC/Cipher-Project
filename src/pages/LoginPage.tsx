import { useState } from "react";
import type { FormEvent } from "react";
import type { AuthUser } from "../types/auth";
import { apiError, readJson } from "../utils/api";
import { LegalLinks } from "../components/LegalLinks";
import { navigate } from "../utils/navigation";

interface LoginResponse {
  error?: string;
  user?: AuthUser;
}

export function LoginPage({
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

  const submit = async (event: FormEvent) => {
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

      const data = await readJson<LoginResponse>(response);

      if (!response.ok || !data?.user) {
        setError(apiError(data, response.status, "Login failed"));
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

        <LegalLinks />
      </div>
    </div>
  );
}
