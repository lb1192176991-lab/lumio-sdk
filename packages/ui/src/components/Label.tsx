import { forwardRef } from "react";
import type { LabelHTMLAttributes } from "react";
import { cn } from "../cn";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

/** A form label with the shared token classes. */
export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, htmlFor, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        htmlFor={htmlFor}
        {...props}
        className={cn("mb-1 block font-ui text-body-s text-paper", className)}
      >
        {children}
      </label>
    );
  },
);

Label.displayName = "Label";
