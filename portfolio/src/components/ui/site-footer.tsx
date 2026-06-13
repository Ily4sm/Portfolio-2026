import { Github, Linkedin, Mail, Phone } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/Ily4sm",
    label: "GitHub",
    icon: Github,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/ilyas-mardhi/",
    label: "LinkedIn",
    icon: Linkedin,
    external: true,
  },
  {
    href: "mailto:ilyasmardhi1@gmail.com",
    label: "Email",
    icon: Mail,
    external: false,
  },
  {
    href: "tel:+212688592518",
    label: "Téléphone",
    icon: Phone,
    external: false,
  },
];

export function SiteFooter() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        background: "var(--background)",
      }}
    >
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          {/* Brand */}
          <div>
            <p className="text-sm font-semibold text-foreground">Ilyas MARDHI</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              © {new Date().getFullYear()} — Tous droits réservés.
            </p>
          </div>

          {/* Nav links */}
          <nav
            aria-label="Liens rapides"
            className="hidden sm:flex items-center gap-5"
          >
            {[
              { href: "#certifications", label: "Certifications" },
              { href: "#projets", label: "Projets" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                style={{ minHeight: "unset", minWidth: "unset", display: "inline" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <nav aria-label="Réseaux sociaux" className="flex items-center gap-2">
            {socialLinks.map(({ href, label, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-white/5"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}