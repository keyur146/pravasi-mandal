'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Globe,
  Heart,
  ChevronDown,
  Phone,
  Calendar,
  HandHeart,
  Newspaper,
  Handshake,
  Sprout,
  Utensils,
  Activity,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from './LanguageContext';

// ─── Desktop Dropdown Item ────────────────────────────────────────────────────
function DesktopDropdown({ label, items, pathname, isActive }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  const hasActiveChild = items.some((item) => isActive(item.href));

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 180);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl font-sans font-bold text-[0.88rem] xl:text-[0.92rem] whitespace-nowrap transition-all duration-150 cursor-pointer ${hasActiveChild || open
          ? 'text-pm-blue bg-pm-blue-light/80 shadow-2xs font-extrabold'
          : 'text-slate-700 hover:text-pm-blue hover:bg-slate-100/80'
          }`}
      >
        <span>{label}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 stroke-[2.5] text-slate-500 ${open ? 'rotate-180 text-pm-blue' : ''
            }`}
        />
      </button>

      {/* Floating Card */}
      {open && (
        <div className="absolute top-full left-0 pt-2 w-72 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
          <div className="bg-white/98 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-xl shadow-slate-900/8 py-2 px-1.5 overflow-hidden">
            {items.map((item) => {
              const Icon = item.icon;
              const itemActive = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-start gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 group ${itemActive
                    ? 'bg-pm-blue-light text-pm-blue font-bold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-pm-blue'
                    }`}
                >
                  {Icon && (
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${itemActive
                        ? 'bg-pm-blue text-white'
                        : 'bg-slate-100 text-slate-600 group-hover:bg-pm-blue-light group-hover:text-pm-blue'
                        }`}
                    >
                      <Icon size={16} className="stroke-[2.2]" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-[0.88rem] font-bold leading-snug group-hover:text-pm-blue">
                      {item.label}
                    </p>
                    {item.desc && (
                      <p className="text-[0.76rem] text-slate-500 font-normal leading-tight mt-0.5 line-clamp-1">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Mobile Accordion Section ────────────────────────────────────────────────
function MobileSection({ label, items, isActive, onClose }) {
  const hasActiveChild = items.some((item) => isActive(item.href));
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="border-b border-slate-100 py-1">
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="w-full flex items-center justify-between px-4 py-2.5 text-left font-bold text-[0.95rem] text-slate-800"
      >
        <span className={hasActiveChild ? 'text-pm-blue' : ''}>{label}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 text-slate-400 ${expanded ? 'rotate-180 text-pm-blue' : ''
            }`}
        />
      </button>

      {expanded && (
        <div className="pl-4 pr-2 pb-2 space-y-1">
          {items.map((item) => {
            const Icon = item.icon;
            const itemActive = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[0.92rem] font-medium transition-colors ${itemActive
                  ? 'text-pm-blue bg-pm-blue-light font-bold'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
              >
                {Icon && (
                  <Icon
                    size={16}
                    className={`shrink-0 ${itemActive ? 'text-pm-blue stroke-[2.4]' : 'text-slate-400 stroke-[2]'
                      }`}
                  />
                )}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Main Header Component ────────────────────────────────────────────────────
export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let rafId = null;
    const handleScroll = () => {
      if (rafId) return; // throttle: at most one update per animation frame
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 10);
        rafId = null;
      });
    };
    // Set initial value synchronously so SSR and client match
    setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isActive = (href) => {
    if (!href) return false;
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href.split('#')[0]);
  };

  // Structured menu items with descriptions and icons
  const servicesActivitiesItems = [
    {
      href: '/services',
      label: t('nav_services'),
      desc: lang === 'gu' ? 'ગરમ ભોજન અને પરિવહન' : 'Hot vegetarian meals & transport',
      icon: Utensils,
    },
    {
      href: '/activities',
      label: t('nav_activities'),
      desc: lang === 'gu' ? 'યોગ, સંગીત અને મેળાવડા' : 'Yoga, health & social clubs',
      icon: Activity,
    },
    {
      href: '/events',
      label: t('nav_events'),
      desc: lang === 'gu' ? 'તહેવારો અને ઉજવણીઓ' : 'Festivals, gatherings & outings',
      icon: Calendar,
    },
  ];

  const communityItems = [
    {
      href: '/volunteer',
      label: t('nav_volunteer'),
      desc: lang === 'gu' ? 'સ્વયંસેવક તરીકે જોડાઓ' : 'Share your time & make an impact',
      icon: HandHeart,
    },
    {
      href: '/news',
      label: t('nav_news'),
      desc: lang === 'gu' ? 'સમાચાર અને અપડેટ્સ' : 'Updates & community recognition',
      icon: Newspaper,
    },
    // {
    //   href: '/projects',
    //   label: t('nav_projects'),
    //   desc: lang === 'gu' ? 'અમારી નવી પહેલ' : 'New community initiatives',
    //   icon: Sprout,
    // },
    // {
    //   href: '/partners',
    //   label: t('nav_partners'),
    //   desc: lang === 'gu' ? 'કાઉન્સિલ અને સામુદાયિક સંસ્થાઓ' : 'Councils & community organisations',
    //   icon: Handshake,
    // },
  ];

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* ── 1. Top Trust Micro-Bar ──
           grid-rows 1fr→0fr collapse is GPU-composited: no layout reflow,
           no flicker. The inner div has overflow:hidden so content clips
           cleanly as the row shrinks. ── */}
      <div
        className="bg-slate-950"
        style={{
          display: 'grid',
          gridTemplateRows: scrolled ? '0fr' : '1fr',
          transition: 'grid-template-rows 0.22s ease',
        }}
      >
        <div className="overflow-hidden">
          <div
            className="text-slate-200 text-[0.8rem] sm:text-[0.84rem] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800"
            style={{
              opacity: scrolled ? 0 : 1,
              transition: 'opacity 0.15s ease',
            }}
          >
            <div className="max-w-[1280px] mx-auto flex items-center justify-between font-sans">
              {/* Left credentials */}
              <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="font-semibold text-slate-100">
                  Registered Charity · Est. 1984
                </span>
                <span className="hidden sm:inline text-slate-500">|</span>
                <span className="hidden sm:inline text-slate-300 font-medium">
                  Asian Day Care &amp; Community Centre
                </span>
                <span className="hidden xl:inline text-slate-500">·</span>
                <span className="hidden xl:inline text-slate-400 italic">
                  Rooted in Asian heritage. Open to everyone.
                </span>
              </div>

              {/* Right quick contact */}
              <div className="flex items-center gap-4 text-slate-300 font-semibold shrink-0 pl-2">
                <a
                  href="tel:01933442955"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Phone size={13} className="text-emerald-400 stroke-[2.4]" />
                  <span>01933 442955</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. Main Navigation Bar (Sticky with Glassmorphism) ── */}
      <div
        className={`w-full transition-all duration-200 ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-2'
          : 'bg-white border-b border-slate-200/80 py-3'
          }`}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-1 sm:gap-2 px-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group">
            <div className="relative h-12 sm:h-14 md:h-15 w-36 sm:w-56 transition-transform group-hover:scale-[1.01]">
              <Image
                src="/assets/img/pravasi-mandal-logo.png"
                alt="Pravasi Mandal Wellingborough"
                fill
                sizes="(min-width: 768px) 256px, 180px"
                className="object-cover object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links (Visible ONLY on lg: 1024px+) */}
          <nav
            className="hidden xl:flex items-center gap-0.5 xl:gap-1.5"
            aria-label="Main navigation"
          >
            {/* Home */}
            <Link
              href="/"
              className={`px-3 py-2 rounded-xl font-sans font-bold text-[0.88rem] xl:text-[0.92rem] whitespace-nowrap transition-all duration-150 ${isActive('/')
                ? 'text-pm-blue bg-pm-blue-light/80 shadow-2xs font-extrabold'
                : 'text-slate-700 hover:text-pm-blue hover:bg-slate-100/80'
                }`}
            >
              {t('nav_home')}
            </Link>

            {/* Team */}
            <Link
              href="/team"
              className={`px-3 py-2 rounded-xl font-sans font-bold text-[0.88rem] xl:text-[0.92rem] whitespace-nowrap transition-all duration-150 ${isActive('/team')
                ? 'text-pm-blue bg-pm-blue-light/80 shadow-2xs font-extrabold'
                : 'text-slate-700 hover:text-pm-blue hover:bg-slate-100/80'
                }`}
            >
              {t('nav_our_team')}
            </Link>

            {/* Services & Activities (Dropdown) */}
            <DesktopDropdown
              label={t('nav_services_activities')}
              items={servicesActivitiesItems}
              pathname={pathname}
              isActive={isActive}
            />

            {/* Community (Dropdown) */}
            <DesktopDropdown
              label={t('nav_community')}
              items={communityItems}
              pathname={pathname}
              isActive={isActive}
            />

            {/* Gallery */}
            <Link
              href="/gallery"
              className={`px-3 py-2 rounded-xl font-sans font-bold text-[0.88rem] xl:text-[0.92rem] whitespace-nowrap transition-all duration-150 ${isActive('/gallery')
                ? 'text-pm-blue bg-pm-blue-light/80 shadow-2xs font-extrabold'
                : 'text-slate-700 hover:text-pm-blue hover:bg-slate-100/80'
                }`}
            >
              {t('nav_gallery')}
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-xl font-sans font-bold text-[0.88rem] xl:text-[0.92rem] whitespace-nowrap transition-all duration-150 ${isActive('/contact')
                ? 'text-pm-blue bg-pm-blue-light/80 shadow-2xs font-extrabold'
                : 'text-slate-700 hover:text-pm-blue hover:bg-slate-100/80'
                }`}
            >
              {t('nav_contact')}
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1 sm:gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'gu' : 'en')}
              id="lang-toggle"
              aria-label={lang === 'en' ? 'Switch to Gujarati' : 'Switch to English'}
              className="flex items-center gap-1 sm:gap-1.5 px-2 py-2 sm:px-3.5 rounded-xl text-[0.84rem] sm:text-[0.88rem] font-sans font-bold text-slate-800 bg-slate-100/90 border border-slate-300 hover:border-pm-blue hover:text-pm-blue hover:bg-white transition-all shadow-2xs cursor-pointer"
            >
              <Globe size={16} className="text-pm-blue stroke-[2.3] shrink-0" />
              <span>{lang === 'en' ? 'ગુજરાતી' : 'English'}</span>
            </button>

            {/* Support Us CTA (Desktop) */}
            <Link
              href="/support"
              id="support-cta"
              className="hidden xl:inline-flex items-center gap-1.5 px-4 xl:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-pm-blue to-pm-blue-dark hover:from-pm-blue-dark hover:to-[#0B254E] text-white text-[0.88rem] xl:text-[0.92rem] font-sans font-bold rounded-xl shadow-xs hover:shadow-md transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <Heart size={15} className="fill-white/20 stroke-[2.4]" />
              <span>{t('nav_support')}</span>
            </Link>

            {/* Hamburger Menu Toggle (Mobile + Tablet < 1280px) */}
            <button
              id="hamburger-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="xl:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-slate-300 bg-white text-slate-800 hover:bg-slate-100 hover:text-pm-blue transition-colors cursor-pointer"
            >
              <Menu size={22} className="stroke-[2.4]" />
            </button>
          </div>
        </div>
      </div>

      {/* ── 3. Mobile / Tablet Drawer Menu (< 1024px) ── */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex justify-end transition-opacity duration-200"
          onClick={() => setMobileMenuOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div
            className="w-full max-w-[360px] bg-white h-full shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-right duration-250"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 bg-slate-50/80">
              <div className="relative h-11 w-44">
                <Image
                  src="/assets/img/pravasi-mandal-logo.png"
                  alt="Pravasi Mandal"
                  fill
                  sizes="176px"
                  className="object-contain object-left"
                />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-xl border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X size={20} className="stroke-[2.5]" />
              </button>
            </div>

            {/* Drawer Links */}
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
              {/* Home */}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl font-bold text-[0.98rem] transition-colors ${isActive('/')
                  ? 'text-pm-blue bg-pm-blue-light'
                  : 'text-slate-800 hover:bg-slate-100'
                  }`}
              >
                {t('nav_home')}
              </Link>

              {/* Team */}
              <Link
                href="/team"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl font-bold text-[0.98rem] transition-colors ${isActive('/team')
                  ? 'text-pm-blue bg-pm-blue-light'
                  : 'text-slate-800 hover:bg-slate-100'
                  }`}
              >
                {t('nav_our_team')}
              </Link>

              {/* Services & Activities Section */}
              <MobileSection
                label={t('nav_services_activities')}
                items={servicesActivitiesItems}
                isActive={isActive}
                onClose={() => setMobileMenuOpen(false)}
              />

              {/* Community Section */}
              <MobileSection
                label={t('nav_community')}
                items={communityItems}
                isActive={isActive}
                onClose={() => setMobileMenuOpen(false)}
              />

              {/* Gallery */}
              <Link
                href="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl font-bold text-[0.98rem] transition-colors ${isActive('/gallery')
                  ? 'text-pm-blue bg-pm-blue-light'
                  : 'text-slate-800 hover:bg-slate-100'
                  }`}
              >
                {t('nav_gallery')}
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl font-bold text-[0.98rem] transition-colors ${isActive('/contact')
                  ? 'text-pm-blue bg-pm-blue-light'
                  : 'text-slate-800 hover:bg-slate-100'
                  }`}
              >
                {t('nav_contact')}
              </Link>
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-2.5">
              <Link
                href="/support"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 bg-gradient-to-r from-pm-blue to-pm-blue-dark text-white rounded-xl font-bold text-[0.95rem] shadow-sm flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
              >
                <Heart size={17} className="fill-white/20 stroke-[2.4]" />
                <span>{t('nav_support')}</span>
              </Link>

              <button
                onClick={() => {
                  setLang(lang === 'en' ? 'gu' : 'en');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 border border-slate-300 rounded-xl text-slate-800 font-bold text-[0.88rem] bg-white hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
              >
                <Globe size={16} className="text-pm-blue stroke-[2.2]" />
                <span>
                  {lang === 'en' ? 'Switch to ગુજરાતી' : 'Switch to English'}
                </span>
              </button>

              <div className="pt-2 flex items-center justify-center gap-2 text-[0.78rem] text-slate-500 font-medium">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>Registered Charity · Est. 1984</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
