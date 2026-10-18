import { useState } from 'react';
import { useQuote } from '../state';
import { TextField } from '../components/TextField';

type Form = { name: string; phone: string; email: string; city: string; notes: string };
const empty: Form = { name: '', phone: '', email: '', city: '', notes: '' };

function validate(f: Form) {
  const e: Partial<Record<keyof Form, string>> = {};
  if (!f.name.trim()) e.name = 'Enter your name.';
  const digits = f.phone.replace(/[\s-]/g, '').replace(/^(\+91|0)/, '');
  if (!/^[6-9]\d{9}$/.test(digits)) e.phone = 'Enter a 10-digit Indian mobile number.';
  if (f.email.trim() && !/^\S+@\S+\.\S+$/.test(f.email.trim())) e.email = 'Enter a valid email, or leave it blank.';
  return e;
}

export function QuotePage() {
  const { items, remove, clear } = useQuote();
  const [f, setF] = useState<Form>(empty);
  const [errs, setErrs] = useState<Partial<Record<keyof Form, string>>>({});
  const [text, setText] = useState<string | null>(null);
  const [copied, setCopied] = useState('');
  const set = (k: keyof Form) => (v: string) => setF({ ...f, [k]: v });

  if (text === null && items.length === 0) {
    return (
      <div className="wrap panel">
        <h1>Quote request</h1>
        <p>Your request is empty. Choose a product and set its size to add it here.</p>
        <a className="btn" href="#/products">Browse products</a>
      </div>
    );
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate(f);
    setErrs(v);
    if (Object.keys(v).length) return;
    const lines: string[] = ['Quote request (prototype)', `Name: ${f.name}`, `Phone: ${f.phone}`];
    if (f.email.trim()) lines.push(`Email: ${f.email}`);
    if (f.city.trim()) lines.push(`City: ${f.city}`);
    if (f.notes.trim()) lines.push(`Notes: ${f.notes}`);
    lines.push('', 'Items:', ...items.map((i) => `- ${i.name}: ${i.description}`));
    setText(lines.join('\n'));
  };

  const copy = async () => {
    try { await navigator.clipboard.writeText(text ?? ''); setCopied('Copied.'); }
    catch { setCopied('Copy did not work. Select the text above and copy it.'); }
  };

  if (text !== null) {
    return (
      <div className="wrap panel">
        <h1>Request ready</h1>
        <p role="status" className="success">Prototype only: nothing was sent to Red Media and your details were not saved.</p>
        <pre className="summary">{text}</pre>
        <button className="btn" type="button" onClick={copy}>Copy request text</button>
        <p role="status" className="hint">{copied}</p>
        <button className="btn ghost" type="button" onClick={() => { clear(); setText(null); setF(empty); setCopied(''); }}>Start a new request</button>
      </div>
    );
  }

  return (
    <div className="wrap">
      <h1>Quote request</h1>
      <section aria-labelledby="sum" className="panel">
        <h2 id="sum">Your items</h2>
        <ul className="list">
          {items.map((i) => (
            <li key={i.key}>
              <div><strong>{i.name}</strong><br /><span className="hint">{i.description}</span></div>
              <button type="button" className="btn ghost" onClick={() => remove(i.key)} aria-label={`Remove ${i.name}`}>Remove</button>
            </li>
          ))}
        </ul>
        <p className="notice">Estimates shown earlier were demo figures. Complex products may need a final quotation.</p>
      </section>
      <form className="panel" onSubmit={submit} noValidate aria-labelledby="det">
        <h2 id="det">Your details</h2>
        <p className="notice">Prototype: this form does not send or store anything yet.</p>
        <TextField id="name" label="Name" value={f.name} onChange={set('name')} error={errs.name} required autoComplete="name" />
        <TextField id="phone" label="Mobile number" value={f.phone} onChange={set('phone')} error={errs.phone} required type="tel" inputMode="tel" autoComplete="tel" />
        <TextField id="email" label="Email" value={f.email} onChange={set('email')} error={errs.email} type="email" inputMode="email" autoComplete="email" />
        <TextField id="city" label="City or town" value={f.city} onChange={set('city')} autoComplete="address-level2" />
        <TextField id="notes" label="Anything else we should know" value={f.notes} onChange={set('notes')} multiline />
        <button className="btn" type="submit">Prepare quote request</button>
      </form>
    </div>
  );
}
