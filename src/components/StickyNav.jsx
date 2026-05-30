import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SECTIONS = [
  { id: 'hero', label: 'Hero' },
  { id: 'overview', label: 'Overview' },
  { id: 'market', label: 'Market' },
  { id: 'brand', label: 'Brand' },
  { id: 'competitors', label: 'Competitors' },
  { id: 'target', label: 'Target' },
  { id: 'journey', label: 'Journey' },
  { id: 'insight', label: 'Insight' },
  { id: 'big-idea', label: 'Big Idea' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'imc', label: 'IMC Plan' },
  { id: 'revenue', label: 'Revenue' },
  { id: 'risk', label: 'Risk' },
  { id: 'closing', label: 'Closing' },
];

/** NONLA wordmark — the "ñ" gets a nón lá triangle instead of a tilde */
function NonlaWordmark() {
  return (
    <span className="font-black text-lg tracking-widest uppercase text-white select-none flex items-end leading-none">
      <span>NO</span>
      {/* ñ with triangle */}
      <span className="relative inline-flex flex-col items-center" style={{ marginBottom: 0 }}>
        {/* Nón lá triangle replacing tilde */}
        <span
          className="block"
          style={{
            width: 0,
            height: 0,
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderBottom: '6px solid #F4B400',
            marginBottom: '1px',
          }}
          aria-hidden="true"
        />
        <span>N</span>
      </span>
      <span>LA</span>
    </span>
  );
}

function NavDot({ section, isActive, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative flex shrink-0 items-center justify-center">
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 hidden whitespace-nowrap rounded-md px-2 py-1 text-[11px] font-semibold tracking-wide md:block"
            style={{
              background: 'rgba(10, 22, 40, 0.9)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: isActive ? '#F4B400' : '#ffffff',
              backdropFilter: 'blur(8px)',
              pointerEvents: 'none',
            }}
          >
            {section.label}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dot */}
      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={`Navigate to ${section.label}`}
        className={`nav-dot ${isActive ? 'active' : ''}`}
      />
    </div>
  );
}

export default function StickyNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for bg opacity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to detect visible section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-4 px-4 sm:px-5 md:px-8"
      style={{
        height: '56px',
        background: isScrolled
          ? 'rgba(10, 22, 40, 0.75)'
          : 'rgba(10, 22, 40, 0.3)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        transition: 'background 0.3s ease',
      }}
    >
      {/* Left: Wordmark */}
      <div className="flex-shrink-0">
        <NonlaWordmark />
      </div>

      {/* Center / Right: Dots */}
      <div className="hide-scrollbar flex max-w-[calc(100vw-104px)] flex-1 items-center justify-end gap-2 overflow-x-auto py-3 pl-3 pr-1 md:max-w-none md:flex-none md:gap-3 md:overflow-visible md:p-0">
        {SECTIONS.map((section) => (
          <NavDot
            key={section.id}
            section={section}
            isActive={activeSection === section.id}
            onClick={() => scrollTo(section.id)}
          />
        ))}
      </div>
    </motion.nav>
  );
}
