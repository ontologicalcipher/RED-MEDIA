import { useEffect, useState } from 'react';
import type { Config, Product } from '../types';
import { useQuote } from '../state';
import { COMPLEX_NOTE, DISCLAIMER } from '../data/demo';
import { describe, estimate, inr } from '../lib/estimate';
import { TextField } from './TextField';

const check = (v: string, lo: number, hi: number, whole = false) => {
  const n = Number(v);
  if (v.trim() === '' || Number.isNaN(n)) return 'Enter a number.';
  if (whole && !Number.isInteger(n)) return 'Enter a whole number.';
  return n < lo || n > hi ? `Enter a value from ${lo} to ${hi}.` : '';
};

export function Configurator({ p }: { p: Product }) {
  const { add } = useQuote();
  const [w, setW] = useState(String(Math.max(p.limits.min, Math.min(4, p.limits.max))));
  const [h, setH] = useState(String(Math.max(p.limits.min, Math.min(3, p.limits.max))));
  const [q, setQ] = useState('1');
  const [ch, setCh] = useState<Record<string, string>>(() => Object.fromEntries(p.options.map((o) => [o.id, o.choices[0].id])));
  const [added, setAdded] = useState(false);
  useEffect(() => setAdded(false), [w, h, q, ch]);

  const { min, max } = p.limits;
  const ew = check(w, min, max), eh = check(h, min, max), eq = check(q, 1, 500, true);
  const ok = !ew && !eh && !eq;
  const cfg: Config = { width: Number(w), height: Number(h), qty: Number(q), choices: ch };
  const est = ok ? estimate(p, cfg) : null;

  const addItem = () => {
    if (!ok) return;
    add({ key: `${p.id}-${Date.now()}`, productId: p.id, name: p.name, description: describe(p, cfg) });
    setAdded(true);
  };

  return (
    <section aria-labelledby="cfg-h" className="panel">
      <h2 id="cfg-h">Set size and options</h2>
      <div className="row">
        <TextField id="w" label="Width (feet)" value={w} onChange={setW} error={ew} required inputMode="decimal" hint={`${min} to ${max} ft`} />
        <TextField id="h" label="Height (feet)" value={h} onChange={setH} error={eh} required inputMode="decimal" />
        <TextField id="q" label="Quantity" value={q} onChange={setQ} error={eq} required inputMode="numeric" />
      </div>
      {p.options.map((o) => (
        <fieldset key={o.id}>
          <legend>{o.label}</legend>
          <div className="chips">
            {o.choices.map((c) => (
              <label key={c.id} className="chip">
                <input type="radio" name={o.id} checked={ch[o.id] === c.id} onChange={() => setCh({ ...ch, [o.id]: c.id })} />
                <span>{c.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ))}

      <div className="estimate" aria-live="polite">
        <h3>Estimate preview (demo)</h3>
        {est ? (
          <>
            <p className="big">{inr(est.low)} to {inr(est.high)}</p>
            <p className="hint">Size: {est.area} sq ft. Demo formula using sample numbers.</p>
          </>
        ) : <p className="hint">Fix the highlighted fields to see the preview.</p>}
        <p className="notice">{DISCLAIMER}</p>
        {p.needsQuote && <p className="notice">{COMPLEX_NOTE}</p>}
      </div>

      <button className="btn" type="button" onClick={addItem} disabled={!ok}>Add to quote request</button>
      {added && <p role="status" className="success">Added. <a href="#/quote">Review your quote request</a> or keep browsing.</p>}
    </section>
  );
}
