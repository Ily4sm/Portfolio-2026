import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/reveal";

type Certif = {
  title: string;
  issuer: string;
  imageSrc: string;
  verifyUrl: string;
};

const certifs: Certif[] = [
  {
    title: "Python Proggramming Fundamentals",
    issuer: "Microsoft",
    imageSrc: "/certifications/Microsoft Python Proggraming fundementals.png",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/MW513HX0BBAQ",
  },
  {
    title: "Python Project For Data Science",
    issuer: "IBM",
    imageSrc: "/certifications/IBM Python Project For Data Science.png",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/9BEEHROW73SS",
  },
  {
    title: "Foundations Of Fullstack Coding",
    issuer: "Microsoft",
    imageSrc: "/certifications/Microsoft Foundations Of coding full stack.png",
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
    <section id="certifications" className="px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight">Certifications</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Certifications vérifiables. Cliquez pour ouvrir la page de vérification.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifs.map((c, idx) => (
            <Reveal key={c.title} delay={0.05 * idx}>
              <a href={c.verifyUrl} target="_blank" rel="noreferrer" className="block">
                <Card className="group border-white/10 bg-background/50 transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:shadow-lg">
                  <CardHeader className="space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <CardTitle className="text-base">{c.title}</CardTitle>
                      <ExternalLink className="h-4 w-4 text-muted-foreground transition group-hover:text-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">{c.issuer}</p>
                  </CardHeader>

                  <CardContent>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10">
                      <Image
                        src={c.imageSrc}
                        alt={`Certificat: ${c.title}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}