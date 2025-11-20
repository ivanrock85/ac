import { ReactNode } from "react";

type FormFieldProps = {
  label: string;
  required?: boolean;
  description?: string;
  children: ReactNode;
};

export function FormField({
  label,
  required,
  description,
  children
}: FormFieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-sm font-semibold text-text-dark">
        <span>{label}</span>
        {required ? <span className="text-primary">*</span> : null}
      </div>
      {description ? (
        <span className="text-sm text-text-secondary">{description}</span>
      ) : null}
      {children}
    </label>
  );
}
