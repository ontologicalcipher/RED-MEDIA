import { categories, getProduct } from '../data/products';
import { COMPLEX_NOTE } from '../data/demo';
import { ProductArt } from '../components/ProductArt';
import { Configurator } from '../components/Configurator';

export function ProductPage({ id }: { id: string }) {
  const p = getProduct(id);
  if (!p) {
    return (
      <div className="wrap panel">
        <h1>Product not found</h1>
        <p>This product link is not valid. <a href="#/products">Browse all products</a>.</p>
      </div>
    );
  }
  const cname = categories.find((c) => c.id === p.category)?.name;
  return (
    <div className="wrap">
      <p><a href="#/products">Back to products</a></p>
      <div className="detail">
        <div>
          <ProductArt category={p.category} label={p.name} src={p.image} />
          {!p.image && <p className="hint">Illustration only. Real photographs will be added.</p>}
        </div>
        <div>
          <h1>{p.name}</h1>
          <p className="hint">{cname}</p>
          <p className="lead">{p.summary}</p>
          {p.needsQuote && <p className="notice">{COMPLEX_NOTE}</p>}
        </div>
      </div>
      <Configurator key={p.id} p={p} />
    </div>
  );
}
