import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { cn } from "../cn";

export type SpinnerSize = "sm" | "md" | "lg";

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  size?: SpinnerSize;
  /** Accessible name announced to screen readers. Defaults to "Loading". */
  label?: string;
}

const SIZES: Record<SpinnerSize, string> = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
};

/** An inline loading indicator with an accessible name. */
export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ size = "md", label = "Loading", className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        role="status"
        aria-label={label}
        {...props}
        className={cn(
          "inline-block animate-spin rounded-round border-2 border-r-transparent border-current motion-reduce:animate-none",
          SIZES[size],
          className,
        )}
      />
    );
  },
);

Spinner.displayName = "Spinner";
