import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  href?: string;
};

export function Button({
  variant = "primary",
  fullWidth,
  href,
  className,
  ...props
}: ButtonProps) {
  const variantClass = variant === "primary" ? "btn-primary" : "btn-secondary";

  if (href) {
    return (
      <Link
        className={cn("btn", variantClass, fullWidth && "w-full", className)}
        href={href}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      className={cn("btn", variantClass, fullWidth && "w-full", className)}
      {...props}
    />
  );
}
