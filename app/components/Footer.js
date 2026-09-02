'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Clock, Heart, ShieldCheck } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  const quickLinks = [
    { href: '/',           label: t('nav_home') },
    { href: '/activities', label: t('nav_activities') },
    { href: '/services',   label: t('nav_services') },
    { href: '/gallery',    label: t('nav_gallery') },
    { href: '/contact',    label: t('nav_contact') },
    { href: '/support',    label: t('nav_support') },
  ];

  return (
    <footer className="bg-slate-100 border-t border-slate-300 font-sans text-slate-800">
      {/* Main */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand & Charity Trust */}
        <div>
          <div className="relative h-14 w-auto mb-4">
            <Image src="/assets/img/pravasi-mandal-logo.png" alt="Pravasi Mandal" fill sizes="(min-width: 1024px) 240px, 100vw" className="object-contain object-left" />
          </div>
          <address className="not-italic text-[0.9rem] text-slate-700 font-medium leading-relaxed">
            65 Elsden Road<br />
            Wellingborough NN8 1QD<br />
            Northamptonshire, UK
          </address>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-[0.78rem] font-bold text-slate-800 shadow-2xs">
            <ShieldCheck size={16} className="text-pm-blue stroke-[2.2]" />
            <span>{t('footer_registered_charity')}</span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold text-slate-900 text-[1rem] tracking-tight mb-4 border-b border-slate-200 pb-2">
            {t('footer_contact')}
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="tel:01933442955" className="flex items-center gap-2.5 text-[0.9rem] text-slate-700 font-medium hover:text-pm-blue transition-colors">
                <div className="w-7 h-7 rounded-lg bg-white border border-slate-300 flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-pm-blue stroke-[2.2]" />
                </div>
                01933-442955
              </a>
            </li>
            <li>
              <a href="tel:07471186658" className="flex items-center gap-2.5 text-[0.9rem] text-slate-700 font-medium hover:text-pm-blue transition-colors">
                <div className="w-7 h-7 rounded-lg bg-white border border-slate-300 flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-pm-blue stroke-[2.2]" />
                </div>
                07471186658
              </a>
            </li>
            <li>
              <a href="mailto:pravasimandal2@btconnect.com" className="flex items-start gap-2.5 text-[0.9rem] text-slate-700 font-medium hover:text-pm-blue transition-colors break-all">
                <div className="w-7 h-7 rounded-lg bg-white border border-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={14} className="text-pm-blue stroke-[2.2]" />
                </div>
                pravasimandal2@btconnect.com
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-slate-900 text-[1rem] tracking-tight mb-4 border-b border-slate-200 pb-2">
            {t('footer_quick')}
          </h4>
          <ul className="space-y-2.5">
            {quickLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-[0.9rem] text-slate-700 font-medium hover:text-pm-blue hover:font-semibold transition-all">
                  → {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours & Support */}
        <div>
          <h4 className="font-heading font-bold text-slate-900 text-[1rem] tracking-tight mb-4 border-b border-slate-200 pb-2">
            {t('footer_hours')}
          </h4>
          <div className="flex items-start gap-2.5 mb-4">
            <div className="w-7 h-7 rounded-lg bg-white border border-slate-300 flex items-center justify-center shrink-0 mt-0.5">
              <Clock size={14} className="text-pm-blue stroke-[2.2]" />
            </div>
            <div className="text-[0.875rem] text-slate-700 space-y-1 font-medium">
              <p><span className="font-bold text-slate-900">Mon – Fri:</span> 9:00 – 15:00</p>
              <p><span className="font-bold text-slate-900">Sat – Sun:</span> Closed</p>
            </div>
          </div>
          <div className="mt-5">
            <Link
              href="/support"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pm-blue to-pm-blue-dark text-white text-[0.875rem] font-bold rounded-xl hover:shadow-md transition-all shadow-2xs hover:scale-[1.02]"
            >
              <Heart size={15} className="fill-white/20" />
              <span>{t('footer_support_btn')}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200 bg-slate-200/60">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row gap-2 items-center justify-between">
          <p className="text-[0.82rem] font-medium text-slate-700">© {year} Pravasi Mandal. All rights reserved.</p>
          <p className="text-[0.82rem] font-bold text-slate-700">{t('footer_tagline')}</p>
        </div>
      </div>
    </footer>
  );
}
