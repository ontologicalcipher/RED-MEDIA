# Red Media — Prioritized UI/UX Design Audit (docs/DESIGN_AUDIT.md)

## Status Legend
- [VERIFIED IN SNAPSHOT]: Verified directly in http://127.0.0.1:5174/#/ MHTML & compiled CSS.
- [ROUTE CHECKLIST]: Verify in interactive React components (#/products, #/quote).

## 1. Critical Issues (Fix Before Release)
1. [CRIT-01] [VERIFIED] Skip link (`href="#main"`) overwrites hash router URL (`#/products` -> `#main`).
   - Fix: Add `onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus(); }}` to `.skip`.
2. [CRIT-02] [VERIFIED] `.row` forces 2 columns (`1fr 1fr`) at 320px width, squeezing inputs Inside `.wrap > .panel` to 116px.
   - Fix: Set `.row { grid-template-columns: 1fr; }` by default and switch to `1fr 1fr` at `@media (min-width: 420px)`.
3. [CRIT-03] [VERIFIED] `.sr` screen-reader class is missing `white-space: nowrap`, breaking multi-word labels on Android TalkBack.
   - Fix: Add `white-space: nowrap; clip-path: inset(50%); border: 0; padding: 0; margin: -1px;` to `.sr`.
4. [CRIT-04] [VERIFIED] `.error`, `input[aria-invalid="true"]`, `.notice`, and selected `.chip` all reuse `#C62828`.
   - Fix: Use `#B71C1C` on `#FFEBEE` for errors (with `⚠` icon) and `#7A4F01` on `#FFF8E1` for estimate notices.
5. [CRIT-05] [ROUTE CHECKLIST] Verify unit switching (`ft`, `in`, `cm`, `mm`) displays total `sq. ft.` and warns when outdoor signs are under `2 sq. ft.`.

## 2. High-Impact Visual Improvements
1. [HIGH-01] [VERIFIED] Upgrade abstract geometric SVGs in `#cats` to depict real storefront context (mounting, lighting halo, standee frame).
2. [HIGH-02] [VERIFIED] Replace "Demo figure... not a Red Media price" with transparent "Included in Instant Estimate vs. Confirmed in Written Quotation" copy.
3. [HIGH-03] [VERIFIED] Add `#FDF6F6` background tint and checkmark prefix to `.chip input:checked + span, .pill[aria-pressed="true"]`.
4. [HIGH-04] [VERIFIED] Make `<label for="hq">` visible and add quick-tap everyday search chips (`Shop Light Board`, `Flex Banner`, `Glass Sticker`, `Standee`).

## 3. Medium-Priority Refinements
1. [MED-01] [VERIFIED] Replace `.btn:disabled { opacity: 0.5 }` with `#EAE6DF` background and `#625F59` text (`4.8:1` contrast).
2. [MED-02] [VERIFIED] Add `font-variant-numeric: tabular-nums` to `input`, `.big`, `.estimate`, `.list`, and `.summary`.
3. [MED-03] [VERIFIED] Add `flex-wrap: wrap` to `.list li` and `overflow-wrap: break-word` to `.summary` for 320px screens.
4. [MED-04] [VERIFIED] Cap `h1` at `2.25rem` (`clamp(1.5rem, 4.5vw, 2.25rem)`) and add inner white focus ring halo.
