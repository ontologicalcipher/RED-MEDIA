interface Props {
  id: string; label: string; value: string; onChange: (v: string) => void;
  error?: string; hint?: string; type?: string; required?: boolean; multiline?: boolean;
  inputMode?: 'decimal' | 'numeric' | 'tel' | 'email' | 'text'; autoComplete?: string;
}

export function TextField(p: Props) {
  const d = [p.hint && `${p.id}-h`, p.error && `${p.id}-e`].filter(Boolean).join(' ') || undefined;
  const common = { id: p.id, 'aria-invalid': !!p.error, 'aria-describedby': d, autoComplete: p.autoComplete };
  return (
    <div className="field">
      <label htmlFor={p.id}>{p.label}{p.required ? '' : ' (optional)'}</label>
      {p.multiline
        ? <textarea {...common} rows={4} value={p.value} onChange={(e) => p.onChange(e.target.value)} />
        : <input {...common} type={p.type ?? 'text'} inputMode={p.inputMode} value={p.value} onChange={(e) => p.onChange(e.target.value)} />}
      {p.hint && <p id={`${p.id}-h`} className="hint">{p.hint}</p>}
      {p.error && <p id={`${p.id}-e`} className="error">{p.error}</p>}
    </div>
  );
}
