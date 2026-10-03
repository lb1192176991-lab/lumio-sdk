# @lumio/ui

The [Lumio](https://github.com/lumio-network) design system — React components and a Tailwind
preset built on the "Ledger of Light" brand foundation.

## Install

```bash
pnpm add @lumio/ui
```

`react` and `react-dom` (≥ 18) are peer dependencies.

## Usage

Import the design tokens once at your app root, extend the Tailwind preset, then use the components:

```ts
// app root (e.g. layout.tsx / globals.css)
import "@lumio/ui/tokens/design-tokens.css";
```

```ts
// tailwind.config.ts
import { lumioPreset } from "@lumio/ui/tailwind-preset";

export default {
  presets: [lumioPreset],
  content: ["./app/**/*.{ts,tsx}"],
};
```

```tsx
import { Button, Card, Badge, Input } from "@lumio/ui";

<Button variant="primary">Deposit</Button>;
```

**Accessibility rule:** on a Paper (light) background use only the `*-on-light` / `*-dim` accent
variants for text. Bright accents are for dark backgrounds or large graphics (≥ 24px / 3:1) —
never use raw `--lumio-lumen` as text on Paper.

## Tailwind utility reference

With `lumioPreset` enabled, the following utilities resolve to the listed design tokens. For color
utilities, use the value with Tailwind's color prefixes, such as `bg-ink`, `text-ink`, or
`border-ink`.

| Utilities | Design token |
| --- | --- |
| `ink`, `ink-950`, `ink-900`, `ink-800`, `ink-700`, `ink-600`, `ink-400` | `--lumio-ink`, `--lumio-ink-950`, `--lumio-ink-900`, `--lumio-ink-800`, `--lumio-ink-700`, `--lumio-ink-600`, `--lumio-ink-400` |
| `paper`, `paper-50`, `paper-100`, `paper-200`, `paper-400`, `paper-600` | `--lumio-paper`, `--lumio-paper-50`, `--lumio-paper-100`, `--lumio-paper-200`, `--lumio-paper-400`, `--lumio-paper-600` |
| `lumen`, `lumen-dim` | `--lumio-lumen`, `--lumio-lumen-dim` |
| `teal`, `teal-on-light`; `coral`, `coral-on-light`; `sky`, `sky-on-light` | `--lumio-teal`, `--lumio-teal-on-light`; `--lumio-coral`, `--lumio-coral-on-light`; `--lumio-sky`, `--lumio-sky-on-light` |
| `font-display`, `font-ui`, `font-mono` | `--lumio-font-display`, `--lumio-font-ui`, `--lumio-font-mono` |
| `rounded-s`, `rounded-m`, `rounded-l`, `rounded-round` | `--lumio-radius-s`, `--lumio-radius-m`, `--lumio-radius-l`, `--lumio-radius-round` |
| `shadow-s`, `shadow-m`, `shadow-l` | `--lumio-shadow-s`, `--lumio-shadow-m`, `--lumio-shadow-l` |
| `duration-fast`, `duration-base`, `duration-slow` | `--lumio-duration-fast`, `--lumio-duration-base`, `--lumio-duration-slow` |
| `ease-standard` | `--lumio-ease-standard` |
| `animate-skeleton-pulse` | `--lumio-duration-slow`, `--lumio-ease-standard` |
| `text-display-xl`, `text-display-l`, `text-heading-l`, `text-heading-m`, `text-heading-s`, `text-body`, `text-body-s`, `text-caption`, `text-data` | Corresponding `--lumio-text-*` sizes and line-heights below; values are currently defined directly in the preset |

### Composite font tokens

Each `--lumio-text-*` variable is a complete CSS `font` shorthand: weight, size, line-height, and
font family. Use one when you want the exact type scale from the design tokens:

```css
.page-title {
  font: var(--lumio-text-heading-l);
}
```

| Token | Value |
| --- | --- |
| `--lumio-text-display-xl` | `500 64px/1.05 var(--lumio-font-display)` |
| `--lumio-text-display-l` | `500 44px/1.1 var(--lumio-font-display)` |
| `--lumio-text-heading-l` | `600 28px/1.25 var(--lumio-font-ui)` |
| `--lumio-text-heading-m` | `600 22px/1.3 var(--lumio-font-ui)` |
| `--lumio-text-heading-s` | `600 18px/1.35 var(--lumio-font-ui)` |
| `--lumio-text-body` | `400 16px/1.55 var(--lumio-font-ui)` |
| `--lumio-text-body-s` | `400 14px/1.5 var(--lumio-font-ui)` |
| `--lumio-text-caption` | `500 12px/1.4 var(--lumio-font-ui)` |
| `--lumio-text-data` | `500 15px/1.4 var(--lumio-font-mono)` |

The preset's `text-*` utilities set font size and line-height, while `font-*` utilities set the
family. Their values mirror the composite tokens but do not reference them directly. Use those
classes for Tailwind composition; use `font: var(--lumio-text-...)` when a single CSS declaration
should apply the full shorthand.

On a Paper background, use the on-light color for small text. For example, `text-coral-on-light`
is correct for an error message; `text-coral` is not. Use bright `teal`, `coral`, and `sky` on dark
surfaces or for large graphics, and reserve `lumen-dim` on Paper for large text/icons. Do not use
`text-lumen` on Paper.

## License

[Apache-2.0](./LICENSE). Part of the [lumio-sdk](https://github.com/lumio-network/lumio-sdk) monorepo.
