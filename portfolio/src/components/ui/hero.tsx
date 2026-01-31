import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
        {/* Texte */}
        <Reveal delay={0.05}>
          <div>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl text-blue-500">
              Ilyas MARDHI
            </h1>

            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Élève ingénieur en génie informatique. Passionné par le développement
              logiciel et la création d’applications web modernes, performantes et
              bien structurées.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#projets">Voir mes projets</a>
              </Button>

              <Button asChild variant="secondary">
                <a href="#contact">Me contacter</a>
              </Button>
              <Button asChild variant="outline">
                    <a href="/CV.pdf" download>
                    Télécharger Mon CV
                    </a>
                </Button>
            </div>
          </div>
        </Reveal>

        {/* Photo */}
        <Reveal delay={0.15} className="flex justify-center md:justify-end">
          <div className="relative h-56 w-56 md:h-72 md:w-72">
            {/* Halo doux (glow) */}
            <div className="absolute -inset-6 rounded-full bg-white/20 blur-3xl" />

            {/* Cercle fin (ring) */}
            <div className="absolute inset-0 rounded-full ring-1 ring-white/25" />

            <Image
              src="/profile.jpg"
              alt="Photo de profile"
              fill
              className="relative rounded-full object-cover border border-white/10"
              priority
            />
          </div>
          
        </Reveal>
      </div>
    </section>
  );
}