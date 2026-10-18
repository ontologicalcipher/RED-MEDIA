import type { Category, OptionGroup, Product } from '../types';

const g = (id: string, label: string, ...c: [string, string, number][]): OptionGroup => ({
  id, label, choices: c.map(([cid, clabel, mult]) => ({ id: cid, label: clabel, mult })),
});

export const categories: Category[] = [
  { id: 'flex', name: 'Flex banners and printing', blurb: 'Banners for offers, events and openings' },
  { id: 'glow', name: 'Illuminated glow signboards', blurb: 'Lit boards that stand out at night' },
  { id: 'acp', name: 'ACP signboards and shop facades', blurb: 'Durable boards and shopfront cladding' },
  { id: 'letters', name: 'LED and acrylic letters', blurb: 'Raised letters and logos' },
  { id: 'vinyl', name: 'Vinyl graphics and stickers', blurb: 'Stickers, glass and wall graphics' },
  { id: 'sunboard', name: 'Sunboard and display products', blurb: 'Light boards for shops and events' },
];

// Add real photos to public/products and set image: '/products/<file>.jpg' on a product.
export const products: Product[] = [
  { id: 'flex-banner', name: 'Flex banner', category: 'flex', needsQuote: false,
    summary: 'Printed banner for shop openings, offers and events.', limits: { min: 1, max: 40 },
    options: [g('material', 'Material', ['std', 'Standard flex', 1], ['prem', 'Premium flex', 1.3]),
      g('finish', 'Finishing', ['eye', 'Eyelets', 1], ['pocket', 'Pocket for pole', 1.1])] },
  { id: 'glow-sign', name: 'Glow sign board', category: 'glow', needsQuote: false,
    summary: 'Lit signboard that shows your shop name day and night.', limits: { min: 2, max: 20 },
    options: [g('light', 'Lighting', ['front', 'Front-lit', 1], ['back', 'Back-lit', 1.25]),
      g('frame', 'Frame', ['std', 'Standard frame', 1], ['heavy', 'Heavy frame', 1.2])] },
  { id: 'acp-board', name: 'ACP shop signboard', category: 'acp', needsQuote: false,
    summary: 'Strong, weather-resistant board with printed or cut graphics.', limits: { min: 2, max: 30 },
    options: [g('finish', 'Surface', ['matt', 'Matt', 1], ['gloss', 'Glossy', 1.1]),
      g('frame', 'Frame', ['std', 'Standard frame', 1], ['heavy', 'Heavy frame', 1.2])] },
  { id: 'shop-facade', name: 'Shop facade cladding', category: 'acp', needsQuote: true,
    summary: 'Full shopfront makeover. Needs a site visit and final quotation.', limits: { min: 5, max: 60 },
    options: [g('finish', 'Surface', ['matt', 'Matt', 1], ['gloss', 'Glossy', 1.1]),
      g('light', 'Lighting', ['none', 'No lighting', 1], ['led', 'LED strip lighting', 1.3])] },
  { id: 'led-letters', name: 'LED letters', category: 'letters', needsQuote: true,
    summary: 'Lit 3D letters and logos for your shop name.', limits: { min: 1, max: 10 },
    options: [g('style', 'Style', ['front', 'Front-lit', 1], ['halo', 'Halo glow', 1.2]),
      g('colour', 'Light colour', ['warm', 'Warm white', 1], ['cool', 'Cool white', 1], ['rgb', 'Colour changing', 1.4])] },
  { id: 'acrylic-letters', name: 'Acrylic letters', category: 'letters', needsQuote: false,
    summary: 'Raised acrylic letters in plain colours.', limits: { min: 1, max: 10 },
    options: [g('thick', 'Thickness', ['5', '5 mm', 1], ['10', '10 mm', 1.4]),
      g('finish', 'Finish', ['gloss', 'Glossy', 1], ['matt', 'Matt', 1])] },
  { id: 'vinyl-sticker', name: 'Vinyl stickers', category: 'vinyl', needsQuote: false,
    summary: 'Printed stickers and graphics for glass, walls and vehicles.', limits: { min: 0.5, max: 10 },
    options: [g('finish', 'Finish', ['gloss', 'Glossy', 1], ['matt', 'Matt', 1.05]),
      g('cut', 'Shape', ['rect', 'Rectangle', 1], ['die', 'Cut to shape', 1.25])] },
  { id: 'sunboard-display', name: 'Sunboard display', category: 'sunboard', needsQuote: false,
    summary: 'Light printed board for offers, menus and events.', limits: { min: 1, max: 8 },
    options: [g('thick', 'Thickness', ['3', '3 mm', 1], ['5', '5 mm', 1.2]),
      g('print', 'Printing', ['one', 'One side', 1], ['two', 'Both sides', 1.6])] },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
