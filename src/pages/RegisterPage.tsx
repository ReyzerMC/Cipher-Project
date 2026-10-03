import { useState } from "react";
import type { FormEvent } from "react";
import { apiError, readJson } from "../utils/api";
import { navigate } from "../utils/navigation";

export function RegisterPage({
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

  const submit = async (event: FormEvent) => {
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

      const data = await readJson<{ error?: string }>(response);

      if (!response.ok) {
        setError(apiError(data, response.status, "Registration failed"));
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
            minLength={3}
            maxLength={20}
            pattern="[A-Za-z0-9]+"
            title="3-20 characters: letters and numbers only"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />

          <span className="account-hint">
            3-20 characters. Letters and numbers only.
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
            minLength={8}
            maxLength={128}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />

          <span className="account-hint">
            At least 8 characters.
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
