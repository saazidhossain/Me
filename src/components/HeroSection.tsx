import { useState, useEffect, useRef } from 'react';

const ROLES = [
  'Creative Technologist',
  'AI Automation Strategist',
  'Full-Stack Designer',
  'Brand Architect',
  'Philosophy-Driven Builder',
];

const ROLES_BN = [
  'ক্রিয়েটিভ টেকনোলজিস্ট',
  'এআই অটোমেশন স্ট্র্যাটেজিস্ট',
  'ব্র্যান্ড আর্কিটেক্ট',
  'ফিলোসফি-ড্রিভেন বিল্ডার',
];

const STATS = [
  { num: '6+', label: 'Projects Shipped' },
  { num: '2+', label: 'Years Experience' },
  { num: '100%', label: 'Client Satisfaction' },
];

export default function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [lang, setLang] = useState<'en' | 'bn'>('en');
  const [mounted, setMounted] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const roles = lang === 'en' ? ROLES : ROLES_BN;
  const currentRole = roles[roleIdx % roles.length];

  // Mount animation trigger
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayed === currentRole) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setRoleIdx(i => i + 1);
    } else {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(prev =>
          isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
        );
      }, speed);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, isDeleting, currentRole]);

  // Reset on lang change
  useEffect(() => {
    setDisplayed('');
    setIsDeleting(false);
    setRoleIdx(0);
  }, [lang]);

  return (
    <section
      className="hero-section"
      aria-label="Introduction"
      style={{
        opacity: mounted ? 1 : 0,
        transition: 'opacity 600ms ease',
      }}
    >
      {/* Background glows */}
      <div className="hero-glow hero-glow-1" aria-hidden="true" />
      <div className="hero-glow hero-glow-2" aria-hidden="true" />

      {/* Grid overlay for visual texture */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.3,
          pointerEvents: 'none',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      <div className="hero-content">
        {/* Status badge */}
        <div className="hero-badge" role="status" aria-label="Availability status">
          <span
            aria-hidden="true"
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#22c55e',
              animation: 'dotPulse 2s infinite',
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
          Available for collaboration · Dhaka, Bangladesh
        </div>

        {/* Main heading */}
        <h1 className="hero-title">
          {lang === 'en' ? (
            <>
              I Build<br />
              <span className="gradient-text">Digital</span>{' '}
              Systems<br />
              That Think.
            </>
          ) : (
            <>
              আমি তৈরি করি<br />
              <span
                className="gradient-text"
                style={{ fontFamily: 'var(--font-bn)' }}
              >
                ডিজিটাল
              </span>{' '}
              <span style={{ fontFamily: 'var(--font-bn)' }}>সিস্টেম।</span>
            </>
          )}
        </h1>

        {/* Typewriter role */}
        <div className="hero-typewriter" aria-live="polite" aria-atomic="true">
          <span
            style={{
              fontFamily: lang === 'bn' ? 'var(--font-bn)' : 'var(--font-serif)',
              fontStyle: lang === 'en' ? 'italic' : 'normal',
              fontSize: 'var(--text-2xl)',
              color: 'var(--accent)',
              fontWeight: lang === 'en' ? 400 : 600,
            }}
          >
            {displayed}
            <span
              className="typewriter-cursor"
              aria-hidden="true"
            />
          </span>
        </div>

        {/* Description */}
        <p className="hero-description">
          {lang === 'en' ? (
            'Philosophy-trained designer from Dhaka. I architect AI-native products, automated funnels, and bilingual digital experiences that scale.'
          ) : (
            <span style={{ fontFamily: 'var(--font-bn)' }}>
              ঢাকা থেকে ফিলোসফি-প্রশিক্ষিত ডিজাইনার। আমি AI-নেটিভ পণ্য, স্বয়ংক্রিয় ফানেল এবং দ্বিভাষিক ডিজিটাল অভিজ্ঞতা তৈরি করি।
            </span>
          )}
        </p>

        {/* CTA buttons */}
        <div className="hero-cta">
          <a href="/portfolio" className="btn btn-primary">
            View My Work
            <span aria-hidden="true">→</span>
          </a>
          <a href="/contact" className="btn btn-outline">
            Let&apos;s Talk
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats" aria-label="Key statistics">
          {STATS.map(({ num, label }) => (
            <div key={label}>
              <div className="hero-stat-num" aria-label={`${num} ${label}`}>
                {num}
              </div>
              <div className="hero-stat-label" aria-hidden="true">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Language toggle */}
      <button
        onClick={() => setLang(l => (l === 'en' ? 'bn' : 'en'))}
        aria-label={lang === 'en' ? 'Switch to Bengali' : 'Switch to English'}
        style={{
          position: 'absolute',
          bottom: '40px',
          right: 'clamp(20px, 5vw, 80px)',
          background: 'var(--surface)',
          border: '1px solid var(--border2)',
          borderRadius: '8px',
          padding: '8px 16px',
          cursor: 'pointer',
          color: 'var(--muted2)',
          fontSize: 'var(--text-xs)',
          fontFamily: 'var(--font-mono)',
          transition: 'all var(--transition-base)',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent)';
          (e.currentTarget as HTMLButtonElement).style.color = 'var(--accent)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border2)';
          (e.currentTarget as HTMLButtonElement).style.color = 'var(--muted2)';
        }}
      >
        {lang === 'en' ? '→ বাংলায় দেখুন' : '→ View in English'}
      </button>
    </section>
  );
}
