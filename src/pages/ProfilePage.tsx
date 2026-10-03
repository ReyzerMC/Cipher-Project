import { useState } from "react";
import type { AuthUser } from "../types/auth";
import { AvatarEditor } from "../components/AvatarEditor";
import { ChangePasswordModal } from "../components/ChangePasswordModal";
import { navigate } from "../utils/navigation";

export function ProfilePage({
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
  const [logoutError, setLogoutError] = useState("");

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
    setLogoutError("");

    const response = await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    }).catch(() => null);

    // Si no se pudo cerrar la sesión en el servidor, la cookie sigue siendo válida:
    // no fingimos que se cerró.
    if (!response || !response.ok) {
      setLogoutError("Could not log out. Check your connection and try again.");
      return;
    }

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

        {logoutError && (
          <div className="account-error" role="alert">
            {logoutError}
          </div>
        )}

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
          onSaved={(avatarUrl, avatarKey) => {
            onUserUpdated({
              ...user,
              avatar_url: avatarUrl,
              avatar_key: avatarKey,
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
