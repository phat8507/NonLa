import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BrandAsset from './BrandAsset';

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

function NonlaWordmark() {
  return (
    <span className="flex select-none items-end text-lg font-black uppercase leading-none tracking-widest text-white sm:text-xl">
      <span>NO</span>
      <span className="relative inline-flex flex-col items-center" style={{ marginBottom: 0 }}>
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

function NavDot({ section, isActive, onClick, dotRef }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative flex shrink-0 items-center justify-center">
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

      <button
        ref={dotRef}
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
  const dotRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    dotRefs.current[activeSection]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }, [activeSection]);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between gap-3 px-4 sm:px-5 md:px-8"
      style={{
        height: '60px',
        background: isScrolled
          ? 'rgba(10, 22, 40, 0.82)'
          : 'rgba(10, 22, 40, 0.38)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        transition: 'background 0.3s ease',
      }}
    >
      <button
        onClick={() => scrollTo('hero')}
        className="flex min-w-[96px] shrink-0 items-center justify-start rounded-full outline-none ring-yellow/40 transition focus-visible:ring-2 sm:min-w-[132px]"
        aria-label="Go to NONLA hero section"
      >
        <BrandAsset
          src={['nonla-logo.svg', 'nonla-logo.png', 'nonla-logo.webp']}
          alt="NONLA logo"
          className="h-7 max-w-[132px] object-contain sm:h-8 sm:max-w-[180px]"
          fallback={<NonlaWordmark />}
        />
      </button>

      <div className="hide-scrollbar flex max-w-[calc(100vw-128px)] flex-1 items-center justify-end gap-2 overflow-x-auto py-3 pl-2 pr-1 md:max-w-none md:flex-none md:gap-3 md:overflow-visible md:p-0">
        {SECTIONS.map((section) => (
          <NavDot
            key={section.id}
            section={section}
            isActive={activeSection === section.id}
            onClick={() => scrollTo(section.id)}
            dotRef={(node) => {
              dotRefs.current[section.id] = node;
            }}
          />
        ))}
      </div>
    </motion.nav>
  );
}
