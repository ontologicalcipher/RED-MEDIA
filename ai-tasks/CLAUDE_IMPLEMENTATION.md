# RED MEDIA — IMPLEMENTATION TASK

You are the primary software engineer for the existing Red Media React +
TypeScript + Vite project.

PROJECT ROOT: ~/projects/red-media
SOURCE OF TRUTH:
- docs/UX_SPEC.md
- docs/UX_COMPLETE_PACK.md
- docs/DESIGN_AUDIT.md, if present

EXISTING FILES INCLUDE:
- src/App.tsx
- src/router.ts
- src/state.tsx
- src/types.ts
- src/styles.css
- src/components/Configurator.tsx
- src/components/Header.tsx
- src/components/ProductArt.tsx
- src/components/ProductCard.tsx
- src/components/TextField.tsx
- src/data/demo.ts
- src/data/products.ts
- src/lib/estimate.ts
- src/pages/Home.tsx
- src/pages/Catalog.tsx
- src/pages/ProductPage.tsx
- src/pages/QuotePage.tsx

YOUR JOB:
Implement the specifications in the existing application. Do not merely
write recommendations or another design document.

PHASE 1 — INSPECT
1. Read the existing source files and specification documents.
2. Identify the actual routing approach and current data structures.
3. Preserve existing functionality and avoid unrelated rewrites.
4. Never invent a file's contents or claim to have edited files you cannot access.

PHASE 2 — CRITICAL FIXES
1. Fix the skip-to-content link without breaking hash routing.
2. Fix 320px mobile reflow, form spacing, wrapping and horizontal overflow.
3. Improve screen-reader-only labels and keyboard focus visibility.
4. Distinguish selected controls, validation errors and informational notices.
5. Improve disabled-button contrast and numeric alignment.
6. Verify accessible names, labels, error messages and touch targets.

PHASE 3 — CUSTOMER EXPERIENCE
1. Improve the six categories: flex, glow, acp, letters, vinyl, sunboard.
2. Add everyday English and Hinglish search synonyms.
3. Add six quick-search options on the homepage.
4. Replace abstract product artwork with recognizable storefront-context
   illustrations or suitable local assets. Do not use broken image URLs.
5. Make category filters, product details and quote requests work with the
   existing router. Preserve the project's established route conventions.
6. Implement dimension units, area conversion and small-sign warnings only
   where the underlying logic can be made correct.
7. Make quote summaries wrap correctly on narrow screens.
8. Add WhatsApp quote continuation only if a valid business number is
   configured. Never invent Red Media's phone number.

PHASE 4 — COSTING SAFETY
1. Inspect src/lib/estimate.ts, src/data/demo.ts and src/types.ts.
2. Support distinct pricing methods where needed: square-foot pricing,
   running-inch pricing, minimum billable area and fixed-price products.
3. Normalize dimensions correctly before calculating area.
4. Keep material purchase costs separate from customer selling rates.
5. Do not expose internal purchase costs or minimum acceptable prices
   in the customer-facing UI.
6. Treat the supplied rates as UNVERIFIED CONFIGURATION until the business
   confirms them. Clearly label prototype/demo rates where appropriate.
7. Do not silently treat every listed rate as a verified real-world price.
8. Prevent invalid, zero, negative, NaN and infinite measurements.
9. Explain assumptions in code and add tests where practical.

PHASE 5 — VERIFY
Run the existing project commands:
- npm run typecheck
- npm run build

Fix errors caused by your changes. Do not claim a command passed unless
you actually ran it and observed the result.

RULES:
- Work in small, coherent changes.
- Do not delete the existing project or replace it with a starter template.
- Do not overwrite docs/UX_SPEC.md.
- Do not overwrite the backup archives.
- Do not add paid services or require an API key for the basic prototype.
- Do not claim backend persistence when none exists.
- Do not fabricate customer orders, verified prices or real business data.
- If you have repository filesystem access, edit the actual files.
- If you do not have filesystem access, output complete replacement files
  or unified diffs, with exact paths and application instructions.
- Finish with a list of changed files, implemented features, tests run,
  actual test results and remaining limitations.

Start by inspecting the repository, then implement the highest-priority
working changes. Do not stop after producing a plan.
