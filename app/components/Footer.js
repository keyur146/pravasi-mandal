'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  Clock,
  Heart,
  ShieldCheck,
  MapPin,
  ArrowUp,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '/', label: t('nav_home') },
    { href: '/#our-story', label: t('nav_our_story') },
    { href: '/team', label: t('nav_our_team') },
    { href: '/services', label: t('nav_services') },
    { href: '/activities', label: t('nav_activities') },
    { href: '/events', label: t('nav_events') },
    { href: '/volunteer', label: t('nav_volunteer') },
    { href: '/news', label: t('nav_news') },
    { href: '/gallery', label: t('nav_gallery') },
    { href: '/contact', label: t('nav_contact') },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-300 font-sans border-t-4 border-pm-blue overflow-hidden">
      {/* Subtle background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-radial from-pm-blue/15 via-transparent to-transparent pointer-events-none" />

      {/* Main Footer Container */}
      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* ── Column 1: Organization & Identity ── */}
          <div className="space-y-4">
            {/* Logo in high-contrast crisp white badge */}
            <div className="bg-white p-2.5 rounded-2xl shadow-sm inline-block">
              <div className="relative h-13 w-52 sm:w-56">
                <Image
                  src="/assets/img/pravasi-mandal-logo.png"
                  alt="Pravasi Mandal Wellingborough"
                  fill
                  sizes="224px"
                  className="object-contain object-left"
                />
              </div>
            </div>

            <p className="text-[0.92rem] text-slate-300 font-medium italic leading-relaxed">
              &ldquo;Rooted in Asian heritage. Open to everyone.&rdquo;
            </p>

            <p className="text-[0.85rem] text-slate-400 leading-relaxed">
              Serving elders, families, and the wider Northamptonshire community with cultural care, nutrition, and companionship since 1984.
            </p>

            {/* Address */}
            <div className="pt-2 flex items-start gap-2.5 text-[0.88rem] text-slate-300">
              <MapPin size={17} className="text-amber-400 shrink-0 mt-1 stroke-[2.2]" />
              <address className="not-italic leading-snug">
                65 Elsden Road<br />
                Wellingborough NN8 1QD<br />
                Northamptonshire, UK
              </address>
            </div>

            {/* Charity Status Badge */}
            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-950/70 border border-emerald-500/30 rounded-lg text-[0.8rem] font-bold text-emerald-300 shadow-2xs">
                <ShieldCheck size={16} className="text-emerald-400 stroke-[2.4]" />
                <span>{t('footer_registered_charity')}</span>
              </div>
            </div>
          </div>

          {/* ── Column 2: What We Do & Quick Links ── */}
          <div>
            <h4 className="font-heading font-bold text-white text-[1.05rem] tracking-tight mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
              <Sparkles size={16} className="text-amber-400" />
              <span>{t('footer_quick')}</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-[0.88rem] text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-150 py-0.5"
                  >
                    <ChevronRight size={13} className="text-slate-500 group-hover:text-amber-400 transition-colors" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Hours & Visiting ── */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-white text-[1.05rem] tracking-tight mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
              <Clock size={16} className="text-emerald-400 stroke-[2.2]" />
              <span>{t('footer_hours')}</span>
            </h4>

            {/* Hours card */}
            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl space-y-2 text-[0.88rem]">
              <div className="flex justify-between items-center pb-2 border-b border-slate-800/80">
                <span className="text-slate-400 font-medium">Monday – Friday:</span>
                <span className="text-white font-bold">9:00 – 15:00</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-slate-400 font-medium">Saturday – Sunday:</span>
                <span className="text-amber-400/90 font-semibold">Closed</span>
              </div>
              <p className="text-[0.76rem] text-slate-500 italic pt-1">
                Hours subject to confirmation
              </p>
            </div>

            {/* Meal & Transport Note */}
            <div className="p-3.5 bg-pm-blue/15 border border-pm-blue/30 rounded-xl text-[0.82rem] text-slate-300 leading-relaxed">
              <span className="font-bold text-white block mb-0.5">Vegetarian Day Care:</span>
              Freshly cooked Gujarati vegetarian lunches and subsidised community transport available on scheduled days.
            </div>
          </div>

          {/* ── Column 4: Contact & Support Us ── */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-white text-[1.05rem] tracking-tight mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
              <Phone size={16} className="text-emerald-400 stroke-[2.2]" />
              <span>{t('footer_contact')}</span>
            </h4>

            <div className="space-y-2.5">
              {/* Landline */}
              <a
                href="tel:01933442955"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 text-slate-200 hover:text-white transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                  <Phone size={15} className="stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-[0.75rem] text-slate-400 uppercase font-bold tracking-wider">Centre Telephone</div>
                  <div className="text-[0.92rem] font-bold">01933 442955</div>
                </div>
              </a>

              {/* Mobile */}
              <a
                href="tel:07471186658"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 text-slate-200 hover:text-white transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                  <Phone size={15} className="stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-[0.75rem] text-slate-400 uppercase font-bold tracking-wider">Mobile Contact</div>
                  <div className="text-[0.92rem] font-bold">07471 186658</div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:pravasimandal2@btconnect.com"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 text-slate-200 hover:text-white transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                  <Mail size={15} className="stroke-[2.2]" />
                </div>
                <div className="min-w-0">
                  <div className="text-[0.75rem] text-slate-400 uppercase font-bold tracking-wider">Email Us</div>
                  <div className="text-[0.84rem] font-bold truncate">pravasimandal2@btconnect.com</div>
                </div>
              </a>
            </div>

            {/* Support CTA */}
            <div className="pt-2">
              <Link
                href="/support"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-pm-blue to-pm-blue-dark hover:from-pm-blue-dark hover:to-[#092552] text-white text-[0.92rem] font-bold rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.01]"
              >
                <Heart size={16} className="fill-white/20 stroke-[2.4]" />
                <span>{t('footer_support_btn')}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Sub-Footer Bottom Bar ── */}
      <div className="border-t border-slate-800 bg-slate-950/90 py-5">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.84rem] text-slate-400">
          <div>
            <p>
              © {year} Pravasi Mandal. Registered Charity No. 1044439 · Est. 1984.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-semibold text-slate-300">
              {t('footer_tagline')}
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp size={14} className="stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
