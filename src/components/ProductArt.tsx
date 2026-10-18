import type { ReactElement } from 'react';
import type { CategoryId } from '../types';

const R = '#C62828', D = '#242424', W = '#FFFFFF', G = '#625F59';

// Simple illustrations used until real photographs are added (see Product.image).
export function ProductArt({ category, label, src }: { category: CategoryId; label: string; src?: string }) {
  if (src) return <img className="art" src={src} alt={label} loading="lazy" />;
  const shapes: Record<CategoryId, ReactElement> = {
    flex: (<><rect x="40" y="50" width="240" height="100" fill={W} stroke={D} /><rect x="40" y="50" width="240" height="30" fill={R} />
      {[[48, 58], [272, 58], [48, 142], [272, 142]].map(([x, y]) => <circle key={x + '-' + y} cx={x} cy={y} r="4" fill={D} />)}</>),
    glow: (<><rect x="40" y="55" width="240" height="90" rx="6" fill={D} /><rect x="52" y="67" width="216" height="66" rx="3" fill="#FFF1C9" />
      <text x="160" y="116" textAnchor="middle" fontSize="40" fontWeight="800" fill={R}>OPEN</text></>),
    acp: (<><rect x="30" y="40" width="260" height="120" fill={G} /><rect x="30" y="40" width="260" height="34" fill={R} />
      <text x="160" y="65" textAnchor="middle" fontSize="22" fontWeight="800" fill={W}>SHOP</text>
      <rect x="50" y="90" width="70" height="60" fill="#EFEBE2" /><rect x="200" y="90" width="70" height="60" fill="#EFEBE2" /><rect x="140" y="90" width="40" height="70" fill={D} /></>),
    letters: <text x="160" y="125" textAnchor="middle" fontSize="84" fontWeight="800" fill={W} stroke={R} strokeWidth="4">ABC</text>,
    vinyl: (<><rect x="60" y="60" width="80" height="80" rx="14" fill={R} /><circle cx="215" cy="100" r="45" fill={D} /><circle cx="215" cy="100" r="22" fill={W} /></>),
    sunboard: (<><rect x="80" y="25" width="160" height="115" fill={W} stroke={D} strokeWidth="2" /><rect x="92" y="37" width="136" height="40" fill={R} />
      <line x1="120" y1="140" x2="100" y2="185" stroke={D} strokeWidth="4" /><line x1="200" y1="140" x2="220" y2="185" stroke={D} strokeWidth="4" /></>),
  };
  return (
    <svg className="art" viewBox="0 0 320 200" role={label ? 'img' : undefined} aria-label={label || undefined} aria-hidden={label ? undefined : true}>
      <rect width="320" height="200" fill="#EFEBE2" />
      {shapes[category]}
    </svg>
  );
}
