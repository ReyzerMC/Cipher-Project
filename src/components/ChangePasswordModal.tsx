import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { apiError, readJson } from "../utils/api";

export function ChangePasswordModal({
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
  const closeTimer = useRef<number | undefined>(undefined);

  // Si se cierra el modal antes de los 800 ms, no dejamos el temporizador colgado
  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

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

  const submit = async (event: FormEvent) => {
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

      const data = await readJson<{ error?: string }>(response);

      if (!response.ok) {
        setError(apiError(data, response.status, "Failed to change password"));
        return;
      }

      setSuccess("Password changed successfully.");

      closeTimer.current = window.setTimeout(onChanged, 800);
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
            minLength={8}
            maxLength={128}
            autoComplete="new-password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
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
