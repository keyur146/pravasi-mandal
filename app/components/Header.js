'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe, Heart } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { href: '/', label: t('nav_home') },
    { href: '/activities', label: t('nav_activities') },
    { href: '/services', label: t('nav_services') },
    { href: '/gallery', label: t('nav_gallery') },
    { href: '/contact', label: t('nav_contact') },
  ];

  const isActive = (href) => href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-md border-b border-border' : 'border-b border-border/60'
          }`}
      >
        {/* ── TOP BAR: Big Logo + Language Toggle + Support Us CTA ── */}
        <div className="bg-white py-1.5 border-b border-border/40">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10 flex items-center justify-between">

            {/* Prominent Large Logo (at least double size) */}
            <Link href="/" className="flex items-center shrink-0 group">
              <div className="relative h-16 sm:h-20 md:h-24 w-52 sm:w-64 md:w-100">
                <Image
                  src="/assets/img/pravasi-mandal-logo.png"
                  alt="Pravasi Mandal Logo"
                  fill
                  sizes="(min-width: 768px) 400px, 256px"
                  className="object-cover object-left"
                  priority
                />
              </div>
            </Link>

            {/* Top Right Actions */}
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <button
                onClick={() => setLang(lang === 'en' ? 'gu' : 'en')}
                id="lang-toggle"
                aria-label="Toggle language"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[0.85rem] font-sans font-medium text-warm-gray bg-gray-100 border border-border hover:border-pm-blue hover:text-pm-blue transition-colors duration-200"
              >
                <Globe size={15} className="text-pm-blue" />
                <span>{lang === 'en' ? 'ગુજરાતી' : 'English'}</span>
              </button>

              {/* Support Us CTA */}
              <Link
                href="/support"
                id="support-cta"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-pm-blue text-white text-[0.875rem] font-sans font-medium rounded-xl hover:bg-pm-blue-dark shadow-xs transition-colors duration-200"
              >
                <Heart size={15} />
                <span>{t('nav_support')}</span>
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                id="hamburger-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-border text-charcoal hover:bg-gray-100 transition-colors"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

          </div>
        </div>

        {/* ── BOTTOM BAR: Page Navigation Links ── */}
        <div className="hidden md:block bg-gray-100 border-t border-b border-gray-300/40">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
            <nav className="flex items-center gap-2 py-2" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-5 py-1.5 rounded-xl font-sans font-semibold transition-all duration-200 ${isActive(link.href)
                    ? 'text-pm-blue bg-white shadow-xs font-semibold border border-border'
                    : 'text-charcoal hover:text-pm-blue hover:bg-white/80'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* ── MOBILE SLIDE-OUT MENU ── */}
      <div
        className={`fixed inset-0 z-50 bg-white flex flex-col transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div className="relative h-14 w-52">
            <Image
              src="/assets/img/pravasi-mandal-logo.png"
              alt="Pravasi Mandal"
              fill
              sizes="208px"
              className="object-contain object-left"
            />
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-border text-charcoal hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col px-6 py-6 gap-2" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3.5 rounded-xl text-[1.05rem] font-sans font-medium transition-colors ${isActive(link.href)
                ? 'text-pm-blue bg-pm-blue-light font-semibold'
                : 'text-charcoal hover:bg-gray-100'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Actions */}
        <div className="px-6 mt-auto pb-10 flex flex-col gap-3">
          <Link
            href="/support"
            onClick={() => setMenuOpen(false)}
            className="w-full py-3.5 bg-pm-blue text-white text-center text-[0.95rem] font-sans font-medium rounded-xl hover:bg-pm-blue-dark transition-colors flex items-center justify-center gap-2"
          >
            <Heart size={16} />
            {t('nav_support')}
          </Link>
          <button
            onClick={() => { setLang(lang === 'en' ? 'gu' : 'en'); setMenuOpen(false); }}
            className="w-full py-3 border border-border text-warm-gray text-[0.875rem] font-sans rounded-xl hover:border-pm-blue hover:text-pm-blue transition-colors flex items-center justify-center gap-2"
          >
            <Globe size={16} className="text-pm-blue" />
            {lang === 'en' ? 'Switch to ગુજરાતી' : 'Switch to English'}
          </button>
        </div>
      </div>
    </>
  );
}
