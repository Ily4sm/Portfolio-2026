import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="font-semibold tracking-tight">
          <Image
            src="/Logo.png"
            alt="Ilyas MARDHI"
            width={32}
            height={32}
            className="object-contain"
            priority
          />
        </Link>

        <nav className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" aria-label="GitHub">
            <a href="https://github.com/Ily4sm" target="_blank" rel="noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>

          <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
            <a href="https://www.linkedin.com/in/ilyas-mardhi/" target="_blank" rel="noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>

          <Button asChild variant="ghost" size="icon" aria-label="Contact">
                <a href="mailto:ilyasmardhi1@gmail.com">
                    <Mail className="h-5 w-5" />
                </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}