import type { Config, Product } from '../types';
import { DEMO_RATE } from '../data/demo';

// DEMO FORMULA: area x demo rate x option multipliers x quantity, shown as a range.
export function estimate(p: Product, c: Config) {
  const area = c.width * c.height;
  let m = 1;
  for (const grp of p.options) m *= grp.choices.find((x) => x.id === c.choices[grp.id])?.mult ?? 1;
  const mid = area * DEMO_RATE[p.category] * m * c.qty;
  return { area, low: Math.round(mid * 0.85), high: Math.round(mid * 1.2) };
}

export const inr = (n: number) => '\u20B9' + new Intl.NumberFormat('en-IN').format(n);

export function describe(p: Product, c: Config) {
  const opts = p.options
    .map((grp) => grp.choices.find((x) => x.id === c.choices[grp.id])?.label)
    .filter((x): x is string => Boolean(x));
  return [`${c.width} \u00D7 ${c.height} ft`, `Qty ${c.qty}`, ...opts].join(', ');
}
