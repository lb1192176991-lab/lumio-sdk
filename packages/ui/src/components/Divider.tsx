import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { cn } from "../cn";

export type DividerOrientation = "horizontal" | "vertical";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: DividerOrientation;
}

/** A token-based separator between sections. */
export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ orientation = "horizontal", className, ...props }, ref) => {
    const horizontal = orientation === "horizontal";
    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        {...props}
        className={cn(
          horizontal ? "w-full border-t border-ink-700" : "h-full border-l border-ink-700",
          className,
        )}
      />
    );
  },
);

Divider.displayName = "Divider";
