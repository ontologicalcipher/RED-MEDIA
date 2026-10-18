import { createContext, useContext, useState, type ReactNode } from 'react';
import type { QuoteItem } from './types';

interface Ctx { items: QuoteItem[]; add: (i: QuoteItem) => void; remove: (k: string) => void; clear: () => void }
const Q = createContext<Ctx>(null!);
export const useQuote = () => useContext(Q);

// In-memory only: nothing is saved to disk or sent anywhere.
export function QuoteProvider({ children }: { children: ReactNode }) {
  const [items, set] = useState<QuoteItem[]>([]);
  const value: Ctx = {
    items,
    add: (i) => set((s) => [...s, i]),
    remove: (k) => set((s) => s.filter((x) => x.key !== k)),
    clear: () => set([]),
  };
  return <Q.Provider value={value}>{children}</Q.Provider>;
}
