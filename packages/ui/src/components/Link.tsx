import { forwardRef } from "react";
import type { AnchorHTMLAttributes } from "react";
import { cn } from "../cn";

export type LinkVariant = "on-light" | "on-dark";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant;
}

const VARIANTS: Record<LinkVariant, string> = {
  "on-light": "text-sky-on-light",
  "on-dark": "text-sky",
};

/** A token-styled anchor for links and secondary interactive elements. */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ variant = "on-light", className, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        {...props}
        className={cn(
          "rounded-s font-ui underline-offset-2 transition-colors duration-fast ease-standard",
          "hover:underline focus-visible:underline",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lumen",
          VARIANTS[variant],
          className,
        )}
      >
        {children}
      </a>
    );
  },
);

Link.displayName = "Link";
