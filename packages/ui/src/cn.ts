/** A class token: strings and numbers are kept; nullish, false, and empty strings are omitted. */
export type ClassValue = string | number | null | false | undefined;

/**
 * Join class names into a single string, preserving numeric tokens including `0`.
 *
 * A dependency-free stand-in for `clsx` — enough for conditional classes in the
 * scaffold's components without pulling in a runtime dependency.
 *
 * ```ts
 * cn("btn", isPrimary && "btn-primary", null) // "btn btn-primary"
 * ```
 */
export function cn(...values: ClassValue[]): string {
  return values
    .filter((value) => value !== false && value !== null && value !== undefined && value !== "")
    .join(" ");
}
