import BrandAsset from './BrandAsset';

export function CoffeeBean({ className = '', style }) {
  return <span className={`coffee-bean-rich ${className}`} style={style} aria-hidden="true" />;
}

export function CoffeeLeaf({ className = '', style }) {
  return <span className={`brand-leaf ${className}`} style={style} aria-hidden="true" />;
}

export function CoffeeBeanField({ count = 6, className = '' }) {
  return (
    <div className={`coffee-bean-field ${className}`} aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <CoffeeBean key={index} className={`coffee-bean-field__bean coffee-bean-field__bean--${index + 1}`} />
      ))}
    </div>
  );
}

function packCandidatesForLabel(label) {
  const key = label.toLowerCase();
  if (key.includes('americano')) return ['pack-americano.png', 'pack-giftbox.png'];
  if (key.includes('da lat') || key.includes('da-lat')) return ['pack-da-lat.png', 'pack-giftbox.png'];
  if (key.includes('durian')) return ['pack-durian.png', 'pack-giftbox.png'];
  if (key.includes('egg')) return ['pack-egg-cream.png', 'pack-giftbox.png'];
  if (key.includes('salt')) return ['pack-salt.png', 'pack-giftbox.png'];
  return ['pack-giftbox.png', 'pack-durian.png'];
}

export function MiniNonlaPack({ label = 'NONLA', src, className = '' }) {
  const fallback = (
    <div className="product-pack-fallback mini-nonla-pack-fallback" role="img" aria-label={`NONLA ${label} coffee pack`}>
      <div className="product-pack-fallback__bow" aria-hidden="true" />
      <div className="product-pack-fallback__brand">nonla</div>
      <div className="product-pack-fallback__line" />
      <div className="product-pack-fallback__flavor">{label}</div>
      <div className="product-pack-fallback__window" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  );

  return (
    <BrandAsset
      src={src || packCandidatesForLabel(label)}
      alt={`NONLA ${label} coffee pack`}
      className={`brand-asset mini-nonla-pack ${className}`}
      fallback={fallback}
    />
  );
}

export const MiniPackFallback = MiniNonlaPack;

export function NonlaMascotFallback({ className = '' }) {
  return (
    <div className={`mascot-fallback mascot-fallback--mini ${className}`} role="img" aria-label="NONLA campaign mascot">
      <div className="mascot-fallback__hat" aria-hidden="true" />
      <div className="mascot-fallback__face">
        <span className="mascot-fallback__eye" />
        <span className="mascot-fallback__eye" />
        <span className="mascot-fallback__smile" />
      </div>
      <div className="mascot-fallback__body" aria-hidden="true" />
    </div>
  );
}

export function NonLaDivider({ className = '' }) {
  return (
    <div className={`nonla-divider ${className}`} aria-hidden="true">
      <CoffeeBean />
      <span className="nonla-divider__hat" />
      <CoffeeBean />
    </div>
  );
}

export function BrandGradientBackground() {
  return <div className="brand-gradient-background" aria-hidden="true" />;
}

export function SectionDecor({ density = 'standard' }) {
  const beans = density === 'low' ? 2 : 4;

  return (
    <div className={`section-decor section-decor--${density === 'low' ? 'light' : 'medium'}`} aria-hidden="true">
      <CoffeeLeaf className="section-decor__leaf section-decor__leaf--one" />
      <CoffeeLeaf className="section-decor__leaf section-decor__leaf--two" />
      {Array.from({ length: beans }, (_, index) => (
        <CoffeeBean
          key={index}
          className={`section-decor__bean section-decor__bean--${index + 1}`}
        />
      ))}
      <span className="section-decor__hat section-decor__hat--one" />
      <span className="section-decor__hat section-decor__hat--two" />
    </div>
  );
}
