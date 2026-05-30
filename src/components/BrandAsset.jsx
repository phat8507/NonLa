import { useState } from 'react';

function resolveAssetPath(src) {
  if (!src) return '';
  if (src.startsWith('http') || src.startsWith('data:') || src.startsWith('/')) {
    return src;
  }

  const base = import.meta.env.BASE_URL || '/';
  return `${base}${base.endsWith('/') ? '' : '/'}assets/${src}`;
}

export default function BrandAsset({
  src,
  alt,
  className = '',
  fallback = null,
  decorative = false,
  ...props
}) {
  const [hasError, setHasError] = useState(false);
  const resolvedSrc = resolveAssetPath(src);

  if (!resolvedSrc || hasError) {
    return fallback;
  }

  return (
    <img
      src={resolvedSrc}
      alt={decorative ? '' : alt}
      aria-hidden={decorative ? 'true' : undefined}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
}
