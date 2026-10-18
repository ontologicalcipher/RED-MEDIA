export type CategoryId = 'flex' | 'glow' | 'acp' | 'letters' | 'vinyl' | 'sunboard';
export interface Category { id: CategoryId; name: string; blurb: string }
export interface Choice { id: string; label: string; mult: number }
export interface OptionGroup { id: string; label: string; choices: Choice[] }
export interface Product {
  id: string; name: string; category: CategoryId; summary: string;
  needsQuote: boolean;                   // true = complex, final quotation required
  limits: { min: number; max: number };  // allowed width/height in feet
  options: OptionGroup[];
  image?: string;                        // e.g. '/products/flex-banner.jpg' (file in public/products)
}
export interface Config { width: number; height: number; qty: number; choices: Record<string, string> }
export interface QuoteItem { key: string; productId: string; name: string; description: string }
