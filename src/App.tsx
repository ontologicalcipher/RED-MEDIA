import { useEffect, useRef } from 'react';
import { useRoute } from './router';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { ProductPage } from './pages/ProductPage';
import { QuotePage } from './pages/QuotePage';

export default function App() {
  const { path, params } = useRoute();
  const main = useRef<HTMLElement>(null);
  const first = useRef(true);
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    main.current?.focus(); // move focus to content after navigation
  }, [path]);

  let page;
  if (path === '/') page = <Home />;
  else if (path === '/products') page = <Catalog key={params.toString()} params={params} />;
  else if (path.startsWith('/product/')) page = <ProductPage id={decodeURIComponent(path.slice(9))} />;
  else if (path === '/quote') page = <QuotePage />;
  else page = <div className="wrap panel"><h1>Page not found</h1><a href="#/">Go to the homepage</a></div>;

  return (
    <>
      <a className="skip" href="#main" onClick={(e) => { e.preventDefault(); main.current?.focus(); }}>Skip to content</a>
      <Header path={path} />
      <main id="main" ref={main} tabIndex={-1}>{page}</main>
      <footer className="wrap foot">
        <p>Red Media customer prototype. Figures are demo data, not real prices.</p>
      </footer>
    </>
  );
}
