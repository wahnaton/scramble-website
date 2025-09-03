# Commands

```
# Build project
npm run build

# Run local server
npm run dev
```

### Key Implementation Details

**Type Safety:**

- Strict TypeScript configuration
- No implicit any

**Error Handling:**

- Graceful handling of network timeouts

## Testing Strategy

- Tests mirror source structure.
- Unit & component tests live adjacent to code (e.g. `Button.tsx` ↔ `Button.test.tsx`).
- Integration and end-to-end tests reside at root-level `tests/`
- `.test.tsx` files under `pages/` are avoided unless `pageExtensions` is configured, because Next.js treats files in `pages/` as routes.

## Code Style

- **Formatter**: Prettier with 100-char line width
- **Linter**: ESLint
- **Semicolons**: "as needed" (omitted where safe)
- **Quotes**: Single quotes for strings
- **Trailing commas**: Always in multiline structures
- **Principles**: YAGNI, SOLID, Idiomatic Next.js
