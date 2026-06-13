import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export function SiteNavbar() {
  return (
    <header
      className="sticky top-0 z-50"
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        background: "rgba(12,12,16,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        {/* Logo / Name */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Retour à l'accueil"
          style={{ minHeight: "44px" }}
        >
          <Image
            src="/logo.png"
            alt=""
            width={28}
            height={28}
            className="object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            priority
          />
          <span
            className="text-sm font-semibold tracking-tight text-foreground hidden sm:block"
          >
            Ilyas MARDHI
          </span>
        </Link>

        {/* Center nav links */}
        <nav
          aria-label="Navigation principale"
          className="hidden md:flex items-center gap-1"
        >
          {[
            { href: "#certifications", label: "Certifications" },
            { href: "#projets", label: "Projets" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground rounded-md"
              style={{ minHeight: "36px", minWidth: "unset" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <nav
          aria-label="Réseaux sociaux"
          className="flex items-center gap-1"
        >
          <a
            href="https://github.com/Ily4sm"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-white/5"
            style={{ minHeight: "44px", minWidth: "44px" }}
          >
            <Github className="h-4 w-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/ilyas-mardhi/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-white/5"
            style={{ minHeight: "44px", minWidth: "44px" }}
          >
            <Linkedin className="h-4 w-4" />
          </a>

          <a
            href="mailto:ilyasmardhi1@gmail.com"
            aria-label="Envoyer un email"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-white/5"
            style={{ minHeight: "44px", minWidth: "44px" }}
          >
            <Mail className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}