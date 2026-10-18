import { useEffect, useState } from 'react';

const parse = () => {
  const h = location.hash.slice(1) || '/';
  const [path, qs = ''] = h.split('?');
  return { path, params: new URLSearchParams(qs) };
};

export function useRoute() {
  const [r, set] = useState(parse);
  useEffect(() => {
    const f = () => { set(parse()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', f);
    return () => window.removeEventListener('hashchange', f);
  }, []);
  return r;
}
