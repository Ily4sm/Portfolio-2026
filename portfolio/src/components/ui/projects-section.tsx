import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Reveal } from "@/components/reveal";

type Project = {
  title: string;
  description: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "User Management API — ASP.NET Core",
    description:
      "API RESTful pour la gestion complète des utilisateurs (CRUD), l'authentification et la gestion des rôles. Architecture MVC avec séparation des responsabilités, validation des données, gestion centralisée des erreurs et sécurité des endpoints.",
    tech: ["C#", "ASP.NET Core", "Entity Framework Core", "REST API", "MVC", "Git"],
    repoUrl: "https://github.com/Ily4sm/User-Management-API.git",
    featured: true,
  },
  {
    title: "Restaurant Management System",
    description:
      "Application console en C++ pour la gestion d'un restaurant, implémentée selon les principes POO. Gestion des commandes, plats et clients avec une conception modulaire, claire et maintenable.",
    tech: ["C++", "POO", "STL"],
    repoUrl: "https://github.com/Ily4sm/Console_Restaurant.git",
    featured: true,
  },
  {
    title: "Système de Gestion Hôtelière",
    description:
      "Système hôtelier multi-technologie avec séparation des responsabilités : gestion des chambres et gestion des événements. Applique les principes POO avec une conception modulaire et évolutive.",
    tech: ["Java", "PHP", "MySQL", "HTML", "CSS", "JavaScript", "Git"],
    repoUrl: "https://github.com/Ily4sm/Riad.git",
  },
];

/* ── Section header ─────────────────────────────────────────── */
function SectionHeader() {
  return (
    <Reveal>
      <div className="flex flex-col gap-3">
        <p
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase"
          style={{ color: "var(--accent-color)" }}
        >
          <span
            aria-hidden
            className="inline-block h-px w-5"
            style={{ background: "var(--accent-color)" }}
          />
          Portfolio
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Projets
        </h2>
        <p className="max-w-lg text-muted-foreground text-sm leading-relaxed">
          Conception, qualité du code, et mise en production. Retrouvez
          l&apos;ensemble de mes réalisations sur{" "}
          <a
            href="https://github.com/Ily4sm"
            target="_blank"
            rel="noreferrer"
            className="text-foreground underline underline-offset-4 decoration-white/30 hover:decoration-white/70 transition-all"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </Reveal>
  );
}

/* ── Project card ───────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={0.07 * index}>
      <article
        className="card-hover flex h-full flex-col rounded-xl p-6"
        style={{
          background: "var(--card)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="text-base font-semibold leading-snug text-foreground">
            {project.title}
          </h3>
          {project.featured && (
            <span className="badge-featured shrink-0">À la une</span>
          )}
        </div>

        {/* Description */}
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground mb-5">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="inline-block rounded-md px-2.5 py-1 text-xs font-medium"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "var(--muted-foreground)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.repoUrl && (
            <Button
              asChild
              size="sm"
              variant="secondary"
              className="gap-2 text-xs font-medium"
              style={{ minHeight: "36px" }}
            >
              <a href={project.repoUrl} target="_blank" rel="noreferrer">
                <Github className="h-3.5 w-3.5" />
                Code source
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button
              asChild
              size="sm"
              className="gap-2 text-xs font-medium"
              style={{
                background: "var(--accent-color)",
                color: "#fff",
                minHeight: "36px",
              }}
            >
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <ExternalLink className="h-3.5 w-3.5" />
                Démo live
              </a>
            </Button>
          )}
        </div>
      </article>
    </Reveal>
  );
}

/* ── Main component ─────────────────────────────────────────── */
export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projets" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeader />

        {/* Featured projects — 2 col on md+ */}
        {featured.length > 0 && (
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {featured.map((p, idx) => (
              <ProjectCard key={p.title} project={p} index={idx} />
            ))}
          </div>
        )}

        {/* Other projects */}
        {others.length > 0 && (
          <>
            <Reveal delay={0.1}>
              <h3
                className="mt-14 mb-5 text-sm font-semibold uppercase tracking-widest"
                style={{ color: "var(--muted-foreground)" }}
              >
                Autres projets
              </h3>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p, idx) => (
                <ProjectCard key={p.title} project={p} index={idx} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}