import { useQuote } from '../state';

const links = [['/', 'Home'], ['/products', 'Products'], ['/quote', 'Quote request']] as const;

export function Header({ path }: { path: string }) {
  const { items } = useQuote();
  const current = (to: string) =>
    to === '/' ? path === '/' : to === '/products' ? path === '/products' || path.startsWith('/product/') : path === to;
  return (
    <header className="top">
      <div className="wrap bar">
        <a className="brand" href="#/">RED <span>MEDIA</span></a>
        <nav aria-label="Main">
          {links.map(([to, label]) => (
            <a key={to} href={'#' + to} aria-current={current(to) ? 'page' : undefined}>
              {label}{to === '/quote' && items.length > 0 ? ` (${items.length})` : ''}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
