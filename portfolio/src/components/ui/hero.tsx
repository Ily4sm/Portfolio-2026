import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative px-4 pt-24 pb-20 overflow-hidden">
      {/* Subtle background gradient — not neon, just depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 60% 0%, rgba(91,125,216,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_auto]">
        {/* ── Text block ─────────────────────────────────────── */}
        <Reveal delay={0.05}>
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p
              className="mb-4 inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase"
              style={{ color: "var(--accent-color)" }}
            >
              <span
                aria-hidden
                className="inline-block h-px w-6"
                style={{ background: "var(--accent-color)" }}
              />
              Ingénieur Informatique
            </p>

            {/* Name — primary heading */}
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              Ilyas
              <br />
              <span style={{ color: "var(--accent-color)" }}>MARDHI</span>
            </h1>

            {/* Bio */}
            <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-md">
              Élève ingénieur passionné par le développement logiciel —
              conception d&apos;applications web modernes, robustes et bien
              architecturées. À la recherche de nouvelles opportunités.
            </p>

            {/* CTA buttons — primary is dominant, secondary is clear */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {/* Primary CTA */}
              <Button
                asChild
                size="lg"
                className="gap-2 font-semibold shadow-lg"
                style={{
                  background: "var(--accent-color)",
                  color: "#ffffff",
                  minWidth: "160px",
                }}
              >
                <a href="#projets">
                  Voir mes projets
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>

              {/* Secondary CTA */}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 font-semibold border-white/15 hover:border-white/30 hover:bg-white/5"
                style={{ minWidth: "160px" }}
              >
                <a href="/CV.pdf" target="_blank" rel="noreferrer">
                  <Download className="h-4 w-4" />
                  Voir / Télécharger CV
                </a>
              </Button>

              {/* Contact */}
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-muted-foreground hover:text-foreground"
              >
                <a href="#contact">Me contacter</a>
              </Button>
            </div>

            {/* Social proof / quick links */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://github.com/Ily4sm"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <span aria-hidden className="h-4 w-px bg-white/15" />
              <a
                href="https://www.linkedin.com/in/ilyas-mardhi/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>

        {/* ── Photo ──────────────────────────────────────────── */}
        <Reveal delay={0.18} className="flex justify-center md:justify-end order-first md:order-last">
          <div className="relative">
            {/* Glow ring — subtle, not neon */}
            <div
              aria-hidden
              className="absolute -inset-4 rounded-2xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(91,125,216,0.15) 0%, transparent 70%)",
                filter: "blur(16px)",
              }}
            />

            {/* Photo container */}
            <div
              className="relative h-44 w-44 md:h-80 md:w-80 rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
              }}
            >
              <Image
                src="/Profile.jpg"
                alt="Ilyas MARDHI"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle gradient overlay at bottom */}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-16"
                style={{
                  background:
                    "linear-gradient(to top, rgba(12,12,16,0.4), transparent)",
                }}
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator — optional subtle touch */}
      <div
        aria-hidden
        className="mt-16 flex justify-center"
      >
        <hr className="section-divider w-full max-w-5xl" />
      </div>
    </section>
  );
}