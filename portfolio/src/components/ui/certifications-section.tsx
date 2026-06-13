import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { ExternalLink } from "lucide-react";

type Certif = {
  title: string;
  issuer: string;
  imageSrc: string;
  verifyUrl: string;
};

const certifs: Certif[] = [
  {
    title: "Python Programming Fundamentals",
    issuer: "Microsoft",
    imageSrc: "/certifications/Microsoft Python Proggraming fundementals.png",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/MW513HX0BBAQ",
  },
  {
    title: "Python Project For Data Science",
    issuer: "IBM",
    imageSrc: "/certifications/IBM Python project for Data Science.png",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/9BEEHROW73SS",
  },
  {
    title: "Foundations Of Fullstack Coding",
    issuer: "Microsoft",
    imageSrc: "/certifications/Microsoft Foundations of coding full stack.png",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/OO9OYQLOTHQF",
  },
  {
    title: "Laravel Framework",
    issuer: "Boord Infinity",
    imageSrc: "/certifications/Boord infinity Laravel Framework.png",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/VVY0G5KNB95Z",
  },
  {
    title: "The Java Language",
    issuer: "Learn Quest",
    imageSrc: "/certifications/The Java Language.png",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/NZE5CK6CZ6NP",
  },
  {
    title: "Foundations Of Cybersecurity",
    issuer: "Google",
    imageSrc: "/certifications/Foundations Of Cybersecurity.png",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/W35Y38IQPM46",
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
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
              Parcours
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Certifications
            </h2>
            <p className="max-w-lg text-sm text-muted-foreground leading-relaxed">
              Certifications vérifiables — cliquez pour accéder à la page de
              vérification officielle.
            </p>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifs.map((c, idx) => (
            <Reveal key={c.title} delay={0.05 * idx}>
              <a
                href={c.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="group block h-full"
                aria-label={`Vérifier la certification : ${c.title} par ${c.issuer}`}
              >
                <article
                  className="card-hover h-full flex flex-col rounded-xl overflow-hidden"
                  style={{
                    background: "var(--card)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {/* Cert image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={c.imageSrc}
                      alt={`Certificat : ${c.title}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    {/* Subtle overlay */}
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "rgba(91,125,216,0.06)" }}
                    />
                  </div>

                  {/* Card footer */}
                  <div className="flex items-center justify-between gap-3 px-4 py-3">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">
                        {c.title}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: "var(--accent-color)" }}
                      >
                        {c.issuer}
                      </p>
                    </div>
                    <ExternalLink
                      className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
                      aria-hidden
                    />
                  </div>
                </article>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}