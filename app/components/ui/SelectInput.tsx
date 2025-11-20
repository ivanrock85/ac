import { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SelectInputProps = SelectHTMLAttributes<HTMLSelectElement>;

export function SelectInput({ className, children, ...props }: SelectInputProps) {
  return (
    <select className={cn("input-base", className)} {...props}>
      {children}
    </select>
  );
}
