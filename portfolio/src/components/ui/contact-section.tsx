"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/reveal";
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqrvwdg";

/* ── Contact info item ─────────────────────────────────────── */
function ContactInfo({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-white/5 group"
      style={{
        border: "1px solid rgba(255,255,255,0.07)",
        minHeight: "64px",
      }}
    >
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
        style={{
          background: "var(--accent-color-subtle, rgba(91,125,216,0.12))",
          color: "var(--accent-color)",
        }}
      >
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-foreground truncate">{value}</p>
      </div>
    </a>
  );
}

/* ── Main component ─────────────────────────────────────────── */
export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
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
    <section id="contact" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          {/* Left — info */}
          <Reveal>
            <div>
              <p
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "var(--accent-color)" }}
              >
                <span
                  aria-hidden
                  className="inline-block h-px w-5"
                  style={{ background: "var(--accent-color)" }}
                />
                Disponible
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                Travaillons ensemble
              </h2>

              <p className="text-sm leading-relaxed text-muted-foreground mb-8">
                Une opportunité, un projet, une question — n&apos;hésitez pas.
                Je réponds sous 24h.
              </p>

              <div className="flex flex-col gap-4">
                {/* Email — full card */}
                <ContactInfo
                  icon={Mail}
                  label="Email"
                  value="ilyasmardhi1@gmail.com"
                  href="mailto:ilyasmardhi1@gmail.com"
                />

                {/* GitHub + LinkedIn — icon buttons only */}
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/Ily4sm"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-white/5"
                    style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ilyas-mardhi/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-white/5"
                    style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={0.12}>
            <div
              className="rounded-xl p-6 md:p-8"
              style={{
                background: "var(--card)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Envoyer un message
              </h3>

              {/* Success state */}
              {status === "success" ? (
                <div
                  className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                  role="status"
                >
                  <CheckCircle
                    className="h-12 w-12"
                    style={{ color: "var(--accent-color)" }}
                  />
                  <p className="text-base font-semibold text-foreground">
                    Message envoyé !
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Merci — je vous réponds dans les 24h.
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2"
                    onClick={() => setStatus("idle")}
                  >
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5" noValidate>
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden
                  />

                  {/* Name + Email — side by side on wider screens */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name" className="text-sm font-medium">
                        Nom
                      </Label>
                      <Input
                        id="contact-name"
                        name="name"
                        placeholder="Votre nom"
                        required
                        autoComplete="name"
                        className="h-11"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-email" className="text-sm font-medium">
                        Email
                      </Label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="votre@email.com"
                        required
                        autoComplete="email"
                        className="h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message" className="text-sm font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      placeholder="Bonjour Ilyas, je vous contacte au sujet de..."
                      rows={5}
                      required
                      className="resize-none"
                    />
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <div
                      role="alert"
                      className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm"
                      style={{
                        background: "rgba(239,68,68,0.1)",
                        border: "1px solid rgba(239,68,68,0.2)",
                        color: "#ef4444",
                      }}
                    >
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      Erreur d&apos;envoi. Réessayez ou écrivez-moi directement.
                    </div>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full gap-2 font-semibold"
                    style={{
                      background: "var(--accent-color)",
                      color: "#ffffff",
                      minHeight: "48px",
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Envoi en cours…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}