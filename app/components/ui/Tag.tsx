import { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type TagVariant = "default" | "primary";

type TagProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: TagVariant;
};

export function Tag({ className, variant = "default", ...props }: TagProps) {
  const variantClass =
    variant === "primary"
      ? "border-transparent bg-primary/10 text-primary"
      : "border-border-gray bg-white text-text-secondary";

  return (
    <span
      className={cn("tag", variantClass, className)}
      {...props}
    />
  );
}
