import { navigate } from "../utils/navigation";

const LINKS = [
  { path: "/privacy", label: "Privacy Policy" },
  { path: "/terms", label: "Terms of Use" },
  { path: "/cookies", label: "Cookies" },
  { path: "/legal", label: "Legal Notice" },
];

export function LegalLinks({ className = "" }: { className?: string }) {
  return (
    <nav className={`legal-links ${className}`.trim()} aria-label="Legal">
      {LINKS.map((link) => (
        <a
          key={link.path}
          href={link.path}
          onClick={(e) => {
            // Ctrl/Cmd+clic, clic central, etc.: que el navegador haga lo suyo
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
            e.preventDefault();
            navigate(link.path);
          }}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
