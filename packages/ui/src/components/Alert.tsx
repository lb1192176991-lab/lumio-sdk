import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { cn } from "../cn";

export type AlertVariant = "info" | "success" | "warning" | "danger";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
}

const VARIANTS: Record<AlertVariant, string> = {
  info: "border-sky-on-light text-sky-on-light",
  success: "border-teal-on-light text-teal-on-light",
  warning: "border-lumen-dim text-lumen-dim",
  danger: "border-coral-on-light text-coral-on-light",
};

const ROLES: Record<AlertVariant, "status" | "alert"> = {
  info: "status",
  success: "status",
  warning: "status",
  danger: "alert",
};

/** An inline message using accessible semantic colors from the design tokens. */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = "info", className, role, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role={role ?? ROLES[variant]}
        className={cn(
          "rounded-m border border-l-4 bg-paper-50 px-4 py-3 font-ui text-body-s",
          VARIANTS[variant],
          className,
        )}
        {...props}
      />
    );
  },
);

Alert.displayName = "Alert";
