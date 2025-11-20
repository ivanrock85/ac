import { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionProps = HTMLAttributes<HTMLElement> & {
  title?: string;
  description?: string;
  background?: "default" | "light";
};

export function Section({
  title,
  description,
  background = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "section-space",
        background === "light" && "bg-background-light",
        className
      )}
      {...props}
    >
      <Container className="flex flex-col gap-6">
        {title ? (
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold text-text-dark md:text-4xl">
              {title}
            </h2>
            {description ? (
              <p className="text-base leading-relaxed text-text-secondary md:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
