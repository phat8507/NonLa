import { useEffect, useMemo, useState } from 'react';

function resolveAssetPath(src) {
  if (!src) return '';
  if (src.startsWith('http') || src.startsWith('data:')) {
    return src;
  }

  const base = import.meta.env.BASE_URL || '/';
  const basePath = `${base}${base.endsWith('/') ? '' : '/'}`;
  const cleanSrc = src.replace(/^\/+/, '');

  if (cleanSrc.startsWith('assets/')) {
    return `${basePath}${cleanSrc}`;
  }

  if (cleanSrc.includes('/')) {
    return `${basePath}${cleanSrc}`;
  }

  return `${basePath}assets/nonla/${cleanSrc}`;
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
  const sourceKey = normalizeSources(src).join('|');
  const candidates = useMemo(() => normalizeSources(src).map(resolveAssetPath), [sourceKey]);
  const [candidateIndex, setCandidateIndex] = useState(0);
  const resolvedSrc = candidates[candidateIndex];

  useEffect(() => {
    setCandidateIndex(0);
  }, [sourceKey]);

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
