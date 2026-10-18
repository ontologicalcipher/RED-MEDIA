import { useState } from 'react';
import { categories, products } from '../data/products';
import type { CategoryId } from '../types';
import { ProductCard } from '../components/ProductCard';

export function Catalog({ params }: { params: URLSearchParams }) {
  const initial = params.get('cat');
  const [q, setQ] = useState(params.get('q') ?? '');
  const [cat, setCat] = useState<CategoryId | ''>(categories.some((c) => c.id === initial) ? (initial as CategoryId) : '');
  const term = q.trim().toLowerCase();
  const shown = products.filter((p) => {
    const cname = categories.find((c) => c.id === p.category)?.name ?? '';
    return (!cat || p.category === cat) && (!term || `${p.name} ${p.summary} ${cname}`.toLowerCase().includes(term));
  });

  return (
    <div className="wrap">
      <h1>Products</h1>
      <div className="search">
        <label htmlFor="cq" className="sr">Search products</label>
        <input id="cq" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name or use" />
      </div>
      <div className="chips" role="group" aria-label="Filter by category">
        <button type="button" className="pill" aria-pressed={cat === ''} onClick={() => setCat('')}>All</button>
        {categories.map((c) => (
          <button key={c.id} type="button" className="pill" aria-pressed={cat === c.id} onClick={() => setCat(c.id)}>{c.name}</button>
        ))}
      </div>
      <p role="status" className="hint">{shown.length} {shown.length === 1 ? 'product' : 'products'} shown</p>
      {shown.length ? (
        <div className="grid">{shown.map((p) => <ProductCard key={p.id} p={p} />)}</div>
      ) : (
        <div className="panel">
          <h2>No products match</h2>
          <p>Try a shorter word, or clear the filters.</p>
          <button className="btn" type="button" onClick={() => { setQ(''); setCat(''); }}>Clear search and filters</button>
        </div>
      )}
    </div>
  );
}
