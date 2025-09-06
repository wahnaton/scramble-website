# Agents.md

## Development Commands

### Building and Running

```
# Build project
npm run build

# Run local server
npm run dev
```

### Code Quality

```
# Linter
npm run lint

# Formatter
npm run format
npm run format check
```

### Testing

### Directory Layout

```
src/
├── app/
│   ├── (app-site)/                       # Static landing page for Scramble iOS App
│   │   ├── privacy/                      # Privacy Policy for iOS App
│   │   │   └── page.tsx
│   │   └── terms/                        # Terms and Conditions for iOS App
│   │       └── page.tsx
│   ├── store/                            # Store website for Scramble merch
│   │   ├── _components/                  # Reusable store components
│   │   │   └── StoreHeader.tsx
│   │   ├── components/
│   │   │   └── ui/
│   │   │       └── SlideOverPanel.tsx
│   │   ├── layout.tsx                    # Layout for store site
│   │   └── page.tsx                      # Main store page
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── lib/
    └── config.ts                         # Client config

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
- **Style**: Tailwind CSS
