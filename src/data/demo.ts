import type { CategoryId } from '../types';

// ILLUSTRATIVE DEMO NUMBERS ONLY. These are NOT Red Media prices or costs.
// The real costing engine will replace this file later.
export const DEMO_RATE: Record<CategoryId, number> = {
  flex: 12, glow: 95, acp: 70, letters: 180, vinyl: 35, sunboard: 25,
};

export const DISCLAIMER =
  'Demo figure for this prototype only. It is not a Red Media price. Final prices come from a written quotation.';
export const COMPLEX_NOTE =
  'This product is usually complex. Red Media will need to confirm details and give a final quotation.';
