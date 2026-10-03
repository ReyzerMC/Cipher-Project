import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { apiError, readJson } from "../utils/api";

export function DeleteAccountModal({
  onClose,
  onDeleted,
}: {
  onClose: () => void;
  onDeleted: () => void;
}) {
  const [password, setPassword] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !loading) onClose();
    };

    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [loading, onClose]);

  const submit = async (event: FormEvent) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/account/delete", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await readJson<{ error?: string }>(response);

      if (!response.ok) {
        setError(apiError(data, response.status, "Could not delete the account"));
        return;
      }

      onDeleted();
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
        aria-labelledby="delete-account-title"
      >
        <button
          type="button"
          className="account-modal-close"
          onClick={onClose}
          disabled={loading}
          aria-label="Close"
        >
          ×
        </button>

        <h2 id="delete-account-title">Delete account</h2>

        <p className="account-subtitle">
          This permanently deletes your account, your profile picture and all
          your sessions. It cannot be undone.
        </p>

        <form onSubmit={submit}>
          <label htmlFor="delete-password">Confirm your password</label>

          <input
            id="delete-password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="account-checkbox">
            <input
              id="delete-confirm"
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
            />
            <label htmlFor="delete-confirm">
              I understand this is permanent.
            </label>
          </div>

          {error && (
            <div className="account-error" role="alert">
              {error}
            </div>
          )}

          <button
            className="account-danger-submit"
            type="submit"
            disabled={loading || !confirmed || !password}
          >
            {loading ? "Deleting..." : "Delete my account"}
          </button>
        </form>
      </div>
    </div>
  );
}
