import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    title: "Projet 1 — Nom du projet",
    description:
      "Une courte description orientée impact (problème → solution → résultat). Exemple : application web pour gérer X avec authentification et dashboard.",
    tech: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    repoUrl: "https://github.com/TON_USER/TON_REPO",
    liveUrl: "https://ton-projet.vercel.app",
    featured: true,
  },
  {
    title: "Projet 2 — Nom du projet",
    description:
      "Mets en avant une feature technique: API, base de données, optimisation, tests, CI/CD, etc.",
    tech: ["Node.js", "Express", "PostgreSQL"],
    repoUrl: "https://github.com/TON_USER/TON_REPO_2",
    featured: true,
  },
  {
    title: "Projet 3 — Nom du projet",
    description:
      "Un projet plus ‘algo’ ou ‘system’: compilation, IA, réseau, sécurité, etc. (selon ton profil).",
    tech: ["Python", "FastAPI", "Docker"],
    repoUrl: "https://github.com/TON_USER/TON_REPO_3",
  },
];

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projets" className="px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Projets</h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                Une sélection de projets qui montrent mon approche: conception,
                qualité du code, et mise en production.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Featured */}
        {featured.length > 0 && (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {featured.map((p, idx) => (
              <Reveal key={p.title} delay={0.06 * idx}>
                <Card className="border-white/10 bg-background/60 transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-xl">{p.title}</CardTitle>
                      <Badge variant="secondary" className="shrink-0">
                        À la une
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{p.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <Badge key={t} variant="outline" className="border-white/15">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-wrap gap-3">
                    {p.repoUrl && (
                      <Button asChild variant="secondary">
                        <a href={p.repoUrl} target="_blank" rel="noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {p.liveUrl && (
                      <Button asChild>
                        <a href={p.liveUrl} target="_blank" rel="noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Démo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </Reveal>
            ))}
          </div>
        )}

        {/* Others */}
        {others.length > 0 && (
          <>
            <Reveal delay={0.1}>
              <h3 className="mt-12 text-lg font-semibold tracking-tight">
                Autres projets
              </h3>
            </Reveal>

            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p, idx) => (
                <Reveal key={p.title} delay={0.05 * idx}>
                  <Card className="border-white/10 bg-background/40 transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-base">{p.title}</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{p.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <Badge key={t} variant="outline" className="border-white/15">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="flex gap-3">
                      {p.repoUrl && (
                        <Button asChild size="sm" variant="secondary">
                          <a href={p.repoUrl} target="_blank" rel="noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      )}
                      {p.liveUrl && (
                        <Button asChild size="sm">
                          <a href={p.liveUrl} target="_blank" rel="noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Démo
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}