import { forwardRef } from "react";
import type { CSSProperties, HTMLAttributes } from "react";
import { cn } from "../cn";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  radius?: CSSProperties["borderRadius"];
}

/** A decorative loading placeholder that respects reduced-motion preferences. */
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ width, height, radius, className, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        aria-hidden="true"
        className={cn(
          "block animate-skeleton-pulse rounded-m bg-ink-700 motion-reduce:animate-none",
          className,
        )}
        style={{
          width,
          height,
          ...(radius === undefined ? {} : { borderRadius: radius }),
          ...style,
        }}
      />
    );
  },
);

Skeleton.displayName = "Skeleton";
