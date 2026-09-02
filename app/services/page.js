'use client';

import Image from 'next/image';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

const services = [
  { day: 'Membership',      activity: 'Annually — April to March — Per Member',                      timings: '—',              rate: '£15.00' },
  { day: 'Monday',          activity: 'Zumba Classes',                                                timings: '10:00–12:00 hrs', rate: '£3.00/hr' },
  { day: 'Wednesday',       activity: 'Yoga Classes',                                                 timings: '08:30–09:30 hrs', rate: '£3.00/hr' },
  { day: 'Saturday',        activity: 'Yoga Classes',                                                 timings: '08:30–09:30 hrs', rate: '£3.00/hr' },
  { day: 'Mon–Fri',         activity: 'Meal — Members (Pure Vegetarian, Pick-up or Delivery)',        timings: 'Mon–Fri',         rate: '£7.50 / £8.50' },
  { day: 'Mon–Fri',         activity: 'Meal — Non-Members (Pure Vegetarian, Pick-up or Delivery)',   timings: 'Mon–Fri',         rate: '£8.50 / £9.50' },
  { day: 'TBC',             activity: 'Trips / Outings (Internal & International)',                   timings: 'TBC',             rate: 'TBC' },
  { day: 'Mon–Sun',         activity: 'Main Hall Hire — Up to 120 people (Min. 4 hours)',             timings: 'Mon–Sun',         rate: '£45.00/hr' },
  { day: 'Mon–Sun',         activity: 'Back Kitchen — For cooking food etc.',                         timings: 'Mon–Sun',         rate: '£15.00/hr or £80.00/day' },
  { day: 'Mon–Sun',         activity: 'Catering Orders — For functions / programmes',                 timings: 'Mon–Sun',         rate: 'Contact Us' },
];

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* ── PAGE HERO ──────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0E3D7D] to-slate-950 border-b border-slate-300 py-10 sm:py-14 text-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/15 border border-white/20 mb-3 backdrop-blur-xs">
            <span className="text-[0.78rem] font-sans font-extrabold text-white uppercase tracking-widest block">
              {t('svc_what_we_provide')}
            </span>
          </div>
          <h1 className="font-heading font-extrabold mb-3 text-white tracking-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            {t('svc_hero_heading')}
          </h1>
        </div>
      </section>

      {/* ── INTRO ──────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-300 py-14">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-pm-blue-light border border-pm-blue/20 mb-3">
                <span className="text-[0.78rem] font-sans font-bold text-pm-blue uppercase tracking-widest block">
                  {t('svc_our_offering')}
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-slate-900 mb-4 tracking-tight" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
                {t('svc_intro_heading')}
              </h2>
              <div className="w-14 h-1 bg-pm-blue rounded-full mb-6" />
              <p className="font-sans text-[1.02rem] text-slate-700 leading-relaxed font-normal">{t('svc_intro')}</p>
            </div>

            <div className="relative w-full h-[340px] rounded-2xl border-2 border-slate-300 overflow-hidden shadow-md">
              <Image
                src="/assets/img/Pict143.jpg"
                alt="Vegetarian Meals Cooked Fresh"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING TABLE ──────────────────────────────────── */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-pm-blue-light border border-pm-blue/20 mb-2">
              <span className="text-[0.78rem] font-sans font-bold text-pm-blue uppercase tracking-widest block">
                {t('svc_subsidised_rates')}
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-slate-900 tracking-tight" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
              {t('svc_table_heading')}
            </h2>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-[0.92rem] font-sans">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800">
                  <th className="text-left px-6 py-4 font-bold text-slate-100 text-[0.8rem] uppercase tracking-wider">{t('svc_col_day')}</th>
                  <th className="text-left px-6 py-4 font-bold text-slate-100 text-[0.8rem] uppercase tracking-wider">{t('svc_col_service')}</th>
                  <th className="text-left px-6 py-4 font-bold text-slate-100 text-[0.8rem] uppercase tracking-wider">{t('svc_col_timings')}</th>
                  <th className="text-right px-6 py-4 font-bold text-slate-100 text-[0.8rem] uppercase tracking-wider">{t('svc_col_rate')}</th>
                </tr>
              </thead>
              <tbody>
                {services.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-200 last:border-0 hover:bg-blue-50/50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}`}>
                    <td className="px-6 py-4 font-bold text-slate-900 whitespace-nowrap">{row.day}</td>
                    <td className="px-6 py-4 font-medium text-slate-800">{row.activity}</td>
                    <td className="px-6 py-4 font-medium text-slate-700 whitespace-nowrap">{row.timings}</td>
                    <td className="px-6 py-4 text-right font-extrabold text-pm-blue whitespace-nowrap text-[0.98rem]">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden flex flex-col gap-3.5">
            {services.map((row, i) => (
              <div key={i} className="bg-white border border-slate-300 rounded-xl p-4.5 flex items-start justify-between gap-4 shadow-2xs">
                <div className="flex-1">
                  <span className="text-[0.72rem] font-sans font-bold text-pm-blue uppercase tracking-wider block mb-1">{row.day}</span>
                  <p className="font-sans font-bold text-slate-900 text-[0.95rem]">{row.activity}</p>
                  <p className="font-sans text-[0.85rem] text-slate-700 font-medium mt-1">{row.timings}</p>
                </div>
                <span className="font-sans font-extrabold text-pm-blue text-[0.98rem] shrink-0 bg-pm-blue-light px-3 py-1 rounded-lg border border-pm-blue/20">{row.rate}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="bg-white border-t border-slate-300 py-14">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading font-extrabold text-slate-900 mb-3 tracking-tight" style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.25rem)' }}>
            {t('svc_cta_heading')}
          </h2>
          <p className="font-sans text-[1.02rem] text-slate-700 mb-8 max-w-md mx-auto font-normal">{t('svc_cta_body')}</p>
          <div className="flex flex-wrap gap-3.5 justify-center">
            <a href="tel:01933442955" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-pm-blue to-pm-blue-dark text-white font-sans font-bold text-[0.9rem] rounded-xl hover:shadow-md transition-all">
              <Phone size={16} className="stroke-[2.2]" /> {t('svc_call')}: 01933 442955
            </a>
            <a href="tel:07471186658" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white border-2 border-slate-300 text-slate-900 font-sans font-bold text-[0.9rem] rounded-xl hover:border-pm-blue hover:text-pm-blue transition-colors shadow-2xs">
              <Phone size={16} className="stroke-[2.2]" /> Mobile: 07471 186658
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
