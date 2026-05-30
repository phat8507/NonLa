import { useEffect, useMemo, useState } from 'react';

function resolveAssetPath(src) {
  if (!src) return '';
  if (src.startsWith('http') || src.startsWith('data:') || src.startsWith('/')) {
    return src;
  }

  const base = import.meta.env.BASE_URL || '/';
  return `${base}${base.endsWith('/') ? '' : '/'}assets/${src}`;
}

function normalizeSources(src) {
  return (Array.isArray(src) ? src : [src]).filter(Boolean);
}

export default function BrandAsset({
  src,
  alt,
  className = '',
  fallback = null,
  decorative = false,
  ...props
}) {
  const candidates = useMemo(() => normalizeSources(src).map(resolveAssetPath), [src]);
  const [candidateIndex, setCandidateIndex] = useState(0);
  const resolvedSrc = candidates[candidateIndex];

  useEffect(() => {
    setCandidateIndex(0);
  }, [candidates]);

  if (!resolvedSrc) {
    return fallback;
  }

  return (
    <img
      src={resolvedSrc}
      alt={decorative ? '' : alt}
      aria-hidden={decorative ? 'true' : undefined}
      className={className}
      onError={() => setCandidateIndex((index) => index + 1)}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
}
