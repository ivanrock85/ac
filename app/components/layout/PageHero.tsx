import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { Button } from "../ui/Button";

type HeroAction = {
  label: string;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

type PageHeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
  tags?: string[];
  bgImage?: string;
  actions?: HeroAction[];
  rightContent?: ReactNode;
};

export function PageHero({
  title,
  description,
  eyebrow,
  tags = [],
  bgImage = "/images/hero/background.png",
  actions = [],
  rightContent
}: PageHeroProps) {
  const secondaryTone =
    "border-white/60 bg-white/20 text-white hover:bg-white/30 hover:text-white shadow-inner";

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/90 to-blue-900/70" />
        <Image
          src={bgImage}
          alt="页面背景"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      <Container className="relative grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr,0.95fr]">
        <div className="flex flex-col gap-6">
          {eyebrow ? (
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              {eyebrow}
            </span>
          ) : null}

          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              {title}
            </h1>
            <p className="max-w-2xl text-lg text-white/80 md:text-xl">
              {description}
            </p>
          </div>

          {tags.length ? (
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          {actions.length ? (
            <div className="flex flex-wrap gap-3">
              {actions.map((action) => {
                const button = (
                  <Button
                    key={action.label}
                    variant={action.variant}
                    className={cn(
                      action.variant === "secondary"
                        ? secondaryTone
                        : "!bg-white !text-primary hover:!bg-white/90",
                      "shadow-lg shadow-blue-950/20",
                      action.className
                    )}
                  >
                    {action.label}
                  </Button>
                );

                if (action.href) {
                  return (
                    <Link key={action.label} href={action.href}>
                      {button}
                    </Link>
                  );
                }

                return button;
              })}
            </div>
          ) : null}
        </div>

        <div className="relative">
          <div className="absolute inset-0 -left-10 rounded-3xl bg-blue-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            {rightContent ?? (
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-white/10" />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
