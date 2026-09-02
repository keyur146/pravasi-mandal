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
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
      {/* ── TOP NON-STICKY HEADER: Trust Bar + Middle Logo Bar ── */}
      <div className="relative bg-white z-40">
        {/* 1. Charity Trust Micro-Bar */}
        <div className="bg-slate-900 text-white text-[0.72rem] sm:text-[0.78rem] py-1.5 px-4 sm:px-8">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between font-sans">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-slate-200">Registered Charity · Est. 1984</span>
              <span className="hidden md:inline text-slate-400">|</span>
              <span className="hidden md:inline text-slate-300 font-medium">Northamptonshire’s Dedicated Asian Elders Care Centre</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300 font-semibold">
              <a href="tel:01933442955" className="hover:text-white transition-colors flex items-center gap-1.5">
                <span>Tel: 01933 442955</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. Middle Logo Bar (NON-STICKY — scrolls away naturally) */}
        <div className="bg-white py-2 border-b border-slate-200">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10 flex items-center justify-between">

            {/* Prominent Large Logo */}
            <Link href="/" className="flex items-center shrink-0 group">
              <div className="relative h-16 sm:h-20 md:h-24 w-52 sm:w-64 md:w-100">
                <Image
                  src="/assets/img/pravasi-mandal-logo.png"
                  alt="Pravasi Mandal Logo"
                  fill
                  sizes="(min-width: 768px) 400px, 256px"
                  className="object-contain object-left"
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
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[0.85rem] font-sans font-bold text-slate-800 bg-slate-100 border border-slate-300 hover:border-pm-blue hover:text-pm-blue hover:bg-white transition-all duration-200 shadow-2xs"
              >
                <Globe size={16} className="text-pm-blue stroke-[2.2]" />
                <span>{lang === 'en' ? 'ગુજરાતી' : 'English'}</span>
              </button>

              {/* Support Us CTA */}
              <Link
                href="/support"
                id="support-cta"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pm-blue to-pm-blue-dark text-white text-[0.875rem] font-sans font-bold rounded-xl hover:shadow-md transition-all duration-200 hover:scale-[1.02] shadow-xs"
              >
                <Heart size={16} className="fill-white/20 stroke-[2.5]" />
                <span>{t('nav_support')}</span>
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                id="hamburger-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-slate-300 text-slate-900 hover:bg-slate-100 transition-colors"
              >
                {menuOpen ? <X size={22} className="stroke-[2.5]" /> : <Menu size={22} className="stroke-[2.5]" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ── STICKY NAVIGATION BAR (Only this bar sticks on scroll) ── */}
      <div
        className={`sticky top-0 z-50 transition-all duration-200 ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-300 py-1'
          : 'bg-slate-100/95 border-b border-slate-200 backdrop-blur-xs hidden md:block'
          }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between min-h-[58px]">

          {/* Scrolled Logo (Substantially Bigger: h-14 md:h-16 w-48 md:w-60) */}
          {scrolled && (
            <Link href="/" className="flex items-center shrink-0 mr-4 group py-1">
              <div className="relative h-12 sm:h-14 md:h-16 w-44 sm:w-52 md:w-60">
                <Image
                  src="/assets/img/pravasi-mandal-logo.png"
                  alt="Pravasi Mandal"
                  fill
                  sizes="(min-width: 768px) 240px, 180px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
          )}

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 py-1.5" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl font-sans font-bold text-[0.92rem] transition-all duration-150 ${isActive(link.href)
                  ? 'text-pm-blue bg-white shadow-xs border border-slate-300 font-extrabold'
                  : 'text-slate-800 hover:text-pm-blue hover:bg-white/80'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Actions in Sticky Bar */}
          <div className="hidden md:flex items-center gap-3">
            {scrolled && (
              <>
                <button
                  onClick={() => setLang(lang === 'en' ? 'gu' : 'en')}
                  aria-label="Toggle language"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-800 bg-slate-100 border border-slate-300 hover:border-pm-blue hover:text-pm-blue"
                >
                  <Globe size={14} className="text-pm-blue stroke-[2.2]" />
                  <span>{lang === 'en' ? 'ગુજરાતી' : 'English'}</span>
                </button>
                <Link
                  href="/support"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-pm-blue to-pm-blue-dark text-white text-[0.85rem] font-sans font-bold rounded-xl shadow-xs hover:shadow transition-all"
                >
                  <Heart size={15} className="fill-white/20" />
                  <span>{t('nav_support')}</span>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Bar shown ONLY when scrolled on mobile */}
          {scrolled && (
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setLang(lang === 'en' ? 'gu' : 'en')}
                aria-label="Toggle language"
                className="px-2.5 py-1.5 text-xs font-bold text-slate-800 bg-slate-100 border border-slate-300 rounded-lg shadow-2xs"
              >
                {lang === 'en' ? 'ગુજરાતી' : 'EN'}
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                className="flex items-center justify-center w-10 h-10 rounded-xl border border-slate-300 text-slate-900 bg-white shadow-2xs"
              >
                {menuOpen ? <X size={20} className="stroke-[2.5]" /> : <Menu size={20} className="stroke-[2.5]" />}
              </button>
            </div>
          )}

        </div>
      </div>

      {/* ── MOBILE SLIDE-OUT MENU ── */}
      <div
        className={`fixed inset-0 z-50 bg-white flex flex-col transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
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
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-slate-300 text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={20} className="stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col px-6 py-6 gap-2" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3.5 rounded-xl text-[1.05rem] font-sans font-bold transition-colors ${isActive(link.href)
                ? 'text-pm-blue bg-pm-blue-light font-extrabold'
                : 'text-slate-800 hover:bg-slate-100'
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
            className="w-full py-3.5 bg-gradient-to-r from-pm-blue to-pm-blue-dark text-white text-center text-[0.95rem] font-sans font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
          >
            <Heart size={18} className="fill-white/20 stroke-[2.5]" />
            {t('nav_support')}
          </Link>
          <button
            onClick={() => { setLang(lang === 'en' ? 'gu' : 'en'); setMenuOpen(false); }}
            className="w-full py-3 border border-slate-300 text-slate-800 font-bold text-[0.9rem] font-sans rounded-xl hover:border-pm-blue hover:text-pm-blue transition-colors flex items-center justify-center gap-2 bg-slate-50"
          >
            <Globe size={18} className="text-pm-blue stroke-[2.2]" />
            {lang === 'en' ? 'Switch to ગુજરાતી' : 'Switch to English'}
          </button>
        </div>
      </div>
    </>
  );
}
