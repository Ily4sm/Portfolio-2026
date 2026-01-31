"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/reveal";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqrvwdg";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (String(formData.get("website") ?? "").trim().length > 0) {
      setIsSubmitting(false);
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <Reveal>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-blue-500">Contact</h2>
              <p className="mt-2 text-muted-foreground">
                Une opportunité, une question, ou juste un message ? N’hésitez pas à me contacter a travers le formulaire ou un Email direct !
              </p>

              <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                <p>
                  Email direct :{" "}
                  <a
                    className="underline underline-offset-4"
                    href="mailto:ilyasmardhi1@gmail.com"
                  >
                    ilyasmardhi1@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <Card className="border-white/10 bg-background/60 transition-all duration-200 hover:border-white/20 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-500">Envoyer un message</CardTitle>
              </CardHeader>

              <CardContent>
                <form onSubmit={onSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                  />

                  <div className="space-y-2">
                    <Label htmlFor="name">Nom</Label>
                    <Input id="name" name="name" placeholder="Votre nom" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Votre Email"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Votre message..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                  </Button>

                  {status === "success" && (
                    <p className="text-sm text-muted-foreground">
                      Merci ! Votre message a bien été envoyé.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-sm text-destructive">
                      Une erreur est survenue. Réessayez ou contactez-moi par email.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}