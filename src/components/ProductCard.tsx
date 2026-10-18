import type { Product } from '../types';
import { ProductArt } from './ProductArt';

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="card">
      <a className="card-link" href={'#/product/' + p.id}>
        <ProductArt category={p.category} label="" src={p.image} />
        <div className="card-body">
          <h3>{p.name}</h3>
          <p>{p.summary}</p>
          <span className="more">View and set size</span>
        </div>
      </a>
    </article>
  );
}
