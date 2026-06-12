# Marble

`Marble` is the WAVE glossy blue card treatment used for premium feature and category blocks.

## Source

- Component: `src/components/marble.tsx`
- CSS: `src/app/globals.css` under `.marble`, `.marble-content`, and `.marble-icon`
- Current example: the four WAVE communication-area cards on `/about`

## Usage

```tsx
import { Marble, MarbleIcon } from "@/components/marble";

<Marble contentClassName="flex min-h-48 flex-col justify-between">
  <MarbleIcon>{icon}</MarbleIcon>
  <h3>Feature title</h3>
</Marble>
```

Use `className` to control the outer dimensions and responsive offset. Use `contentClassName` for the inner layout. The component includes the blue marble gradient, glossy diagonal texture, white trim, rounded WAVE corners, shadow, reveal motion, and hover feedback.
