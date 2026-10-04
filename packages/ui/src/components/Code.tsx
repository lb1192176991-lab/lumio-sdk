import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { cn } from "../cn";

export type CodeProps = HTMLAttributes<HTMLElement>;

/** Inline monospace text for addresses, contract IDs, hashes, and code. */
export const Code = forwardRef<HTMLElement, CodeProps>(
  ({ className, ...props }, ref) => {
    return (
      <code
        ref={ref}
        {...props}
        className={cn(
          "rounded-s bg-ink-800 px-1 font-mono text-data text-paper",
          className,
        )}
      />
    );
  },
);

Code.displayName = "Code";
