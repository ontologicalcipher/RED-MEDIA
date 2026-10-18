import { categories, products } from '../data/products';
import { DISCLAIMER } from '../data/demo';
import { ProductArt } from '../components/ProductArt';

export function Home() {
  return (
    <>
      <section className="wrap hero">
        <h1>Find the sign or print you have in mind</h1>
        <p className="lead">Browse by picture, choose a size and options, then ask Red Media for a quotation. You do not need to know the technical name.</p>
        <form className="search" role="search" onSubmit={(e) => {
          e.preventDefault();
          const q = new FormData(e.currentTarget).get('q');
          location.hash = '/products?q=' + encodeURIComponent(String(q ?? ''));
        }}>
          <label htmlFor="hq" className="sr">Search products</label>
          <input id="hq" name="q" type="search" placeholder="Try shop board or sticker" />
          <button className="btn" type="submit">Search</button>
        </form>
      </section>

      <section className="wrap" aria-labelledby="cats">
        <h2 id="cats">Browse by category</h2>
        <div className="grid">
          {categories.map((c) => (
            <a key={c.id} className="card card-link" href={'#/products?cat=' + c.id}>
              <ProductArt category={c.id} label="" src={products.find((p) => p.category === c.id)?.image} />
              <div className="card-body"><h3>{c.name}</h3><p>{c.blurb}</p></div>
            </a>
          ))}
        </div>
      </section>

      <section className="wrap" aria-labelledby="how">
        <h2 id="how">How it works</h2>
        <ol className="steps">
          <li>Choose a product from the pictures.</li>
          <li>Enter the size and pick your options.</li>
          <li>Send a quotation request. Red Media confirms the final price.</li>
        </ol>
        <p className="notice">{DISCLAIMER}</p>
      </section>
    </>
  );
}
