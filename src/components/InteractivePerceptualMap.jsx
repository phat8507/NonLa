import { useMemo, useState } from 'react';

const brandPoints = [
  {
    name: 'NONLA',
    x: 36,
    y: 30,
    r: 5.8,
    group: 'local',
    price: '200-500k',
    role: 'Premium Vietnamese coffee gift',
    meaning: 'Premium giftability + Vietnamese identity + accessible price',
    highlight: true,
  },
  {
    name: 'Trung Nguyên',
    x: 76,
    y: 29,
    r: 4.5,
    group: 'premium',
    price: '600k-1.2M',
    role: 'Established premium Vietnamese coffee',
    meaning: 'Strong trust and heritage, higher price territory',
  },
  {
    name: 'Lamant',
    x: 88,
    y: 36,
    r: 4,
    group: 'premium',
    price: '1M+',
    role: 'Premium formal gift box',
    meaning: 'Luxury-led gift cue with less accessible price',
  },
  {
    name: 'Miss Ede',
    x: 54,
    y: 24,
    r: 3.8,
    group: 'local',
    price: '250-450k',
    role: 'Local origin coffee',
    meaning: 'Cultural depth, less distinct gift ritual',
  },
  {
    name: 'Bana Cafe',
    x: 46,
    y: 40,
    r: 3.7,
    group: 'local',
    price: '250-400k',
    role: 'Local flavor/origin brand',
    meaning: 'Closer to origin story than premium gift world',
  },
  {
    name: 'Aeroco',
    x: 67,
    y: 65,
    r: 3.8,
    group: 'premium',
    price: '350-500k',
    role: 'Specialty/drip cue',
    meaning: 'Coffee quality signal, weaker cultural gift icon',
  },
  {
    name: 'Dat Phu Neon',
    x: 31,
    y: 61,
    r: 4.2,
    group: 'mass',
    price: '180-250k',
    role: 'Accessible mainstream flavor system',
    meaning: 'Value and variety, lower premium gift perception',
  },
  {
    name: 'Waca',
    x: 25,
    y: 75,
    r: 3.2,
    group: 'mass',
    price: '150-250k',
    role: 'Mass instant convenience',
    meaning: 'Practical but less giftable',
  },
  {
    name: 'Simea',
    x: 39,
    y: 78,
    r: 3.4,
    group: 'mass',
    price: '200-300k',
    role: 'Seasonal mainstream pack',
    meaning: 'Moderate gifting, less cultural ownership',
  },
  {
    name: 'Mirabi',
    x: 17,
    y: 82,
    r: 3.4,
    group: 'mass',
    price: '150-200k',
    role: 'Espresso/mainstream instant territory',
    meaning: 'Low price, low premium signal',
  },
];

const filters = [
  { id: 'all', label: 'All' },
  { id: 'premium', label: 'Premium gift brands' },
  { id: 'local', label: 'Local flavor brands' },
  { id: 'mass', label: 'Mass instant brands' },
];

function pointStyle(point) {
  if (point.highlight) return { fill: '#FFD84D', stroke: '#9A6500', text: '#0A1628' };
  if (point.group === 'premium') return { fill: '#DDEFCB', stroke: '#2F7A28', text: '#1E4A1C' };
  if (point.group === 'local') return { fill: '#DAE4FF', stroke: '#1238F5', text: '#0A2EA8' };
  return { fill: '#F8D8D2', stroke: '#C83A30', text: '#7A1E18' };
}

export default function InteractivePerceptualMap() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activePoint, setActivePoint] = useState(brandPoints[0]);

  const visiblePoints = useMemo(
    () => brandPoints.filter((point) => activeFilter === 'all' || point.group === activeFilter || point.highlight),
    [activeFilter],
  );

  return (
    <div className="nonla-card-strong p-4 md:p-6 overflow-hidden">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between mb-6">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-black mb-3">
            NONLA White Space
          </p>
          <p className="text-white/84 text-base md:text-lg leading-relaxed">
            NONLA’s opportunity is not to be the most expensive coffee gift, but
            to own the mid-premium space where Vietnamese identity, flavor
            diversity, and giftability meet.
          </p>
          <p className="mt-2 text-xs text-white/62">
            Positioning approximation based on competitive role and observed price ranges.
          </p>
        </div>
        <div className="flex flex-wrap gap-2" aria-label="Perceptual map filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`nonla-chip ${activeFilter === filter.id ? 'border-[#FFD84D] bg-[#FFD84D]/18 text-white' : ''}`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="nonla-chart-surface min-w-[760px] p-3 md:p-5">
          <svg
            viewBox="0 0 100 100"
            role="img"
            aria-label="Perceptual map showing coffee gift brands by price and Vietnamese flavor identity"
            className="h-auto w-full"
          >
            <defs>
              <marker id="mapArrow" markerWidth="4" markerHeight="4" refX="3.4" refY="2" orient="auto">
                <path d="M0,0 L4,2 L0,4 Z" fill="rgba(10,22,40,0.48)" />
              </marker>
            </defs>

            <rect x="9" y="9" width="82" height="76" rx="4" fill="#fff9e9" stroke="rgba(10,22,40,0.12)" />
            {Array.from({ length: 7 }, (_, index) => {
              const x = 18 + index * 11;
              const y = 18 + index * 9;
              return (
                <g key={index} stroke="rgba(10,22,40,0.08)" strokeWidth="0.25">
                  <line x1={x} y1="13" x2={x} y2="82" />
                  <line x1="13" y1={y} x2="88" y2={y} />
                </g>
              );
            })}

            <line x1="13" y1="82" x2="91" y2="82" stroke="rgba(10,22,40,0.58)" strokeWidth="0.7" markerEnd="url(#mapArrow)" />
            <line x1="13" y1="82" x2="13" y2="11" stroke="rgba(10,22,40,0.58)" strokeWidth="0.7" markerEnd="url(#mapArrow)" />
            <text x="12" y="90" fontSize="2.4" fontWeight="800" fill="#0A1628">Low Price</text>
            <text x="78" y="90" fontSize="2.4" fontWeight="800" fill="#0A1628">High Price</text>
            <text x="15" y="8" fontSize="2.4" fontWeight="800" fill="#0A1628">Distinctive Vietnamese Flavor</text>
            <text x="38" y="88.5" fontSize="2.4" fontWeight="800" fill="#0A1628">Mainstream Flavor</text>

            <path
              d="M28 54 C34 40 43 30 56 22"
              fill="none"
              stroke="rgba(10,22,40,0.32)"
              strokeWidth="0.8"
              strokeDasharray="1.4 1.6"
            />
            <text x="23" y="18" fontSize="2.35" fontWeight="900" fill="#7A4E00">
              NONLA White Space
            </text>
            <text x="23" y="21.5" fontSize="1.85" fontWeight="700" fill="#7A4E00">
              Premium giftability + Vietnamese identity + accessible price
            </text>

            {visiblePoints.map((point) => {
              const style = pointStyle(point);
              return (
                <g
                  key={point.name}
                  tabIndex={0}
                  role="button"
                  aria-label={`${point.name}: ${point.price}. ${point.role}. ${point.meaning}`}
                  onMouseEnter={() => setActivePoint(point)}
                  onFocus={() => setActivePoint(point)}
                  className="cursor-pointer outline-none"
                >
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r={point.r}
                    fill={style.fill}
                    stroke={style.stroke}
                    strokeWidth={point.highlight ? 0.9 : 0.55}
                    opacity={activePoint.name === point.name ? 1 : 0.92}
                  />
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r={point.r + 1.2}
                    fill="none"
                    stroke={activePoint.name === point.name ? '#1238F5' : 'transparent'}
                    strokeWidth="0.45"
                  />
                  <text
                    x={point.x}
                    y={point.y + 0.35}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={point.highlight ? 2.35 : 1.9}
                    fontWeight="900"
                    fill={style.text}
                  >
                    {point.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-2xl border border-[#FFD84D]/28 bg-[#FFD84D]/12 p-4">
          <p className="text-xs uppercase tracking-widest text-[#FFD84D] font-black">
            Active point
          </p>
          <h3 className="mt-2 text-xl font-black text-white">{activePoint.name}</h3>
          <p className="mt-2 text-sm font-bold text-white/78">Price range: {activePoint.price}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
          <p className="text-sm leading-relaxed text-white/78">
            <span className="font-black text-[#FFD84D]">{activePoint.role}.</span>{' '}
            {activePoint.meaning}
          </p>
        </div>
      </div>
    </div>
  );
}
