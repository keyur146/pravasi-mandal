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
      <section className="bg-pm-blue/90 border-b border-border py-7">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <span className="text-[0.78rem] font-sans font-semibold text-white uppercase tracking-widest block mb-1">What We Provide</span>
          <h1 className="font-heading font-semibold mb-4 text-white!" style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}>
            {t('svc_hero_heading')}
          </h1>
        </div>
      </section>

      {/* ── INTRO ──────────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-[0.78rem] font-sans font-semibold text-pm-blue uppercase tracking-widest block mb-3">Our Offering</span>
              <h2 className="font-heading font-semibold text-charcoal mb-4" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)' }}>
                {t('svc_intro_heading')}
              </h2>
              <div className="w-10 h-0.5 bg-pm-blue rounded-full mb-6" />
              <p className="font-sans text-[0.975rem] text-warm-gray leading-relaxed">{t('svc_intro')}</p>
            </div>

            <div className="relative w-full h-[320px] rounded-2xl border border-border overflow-hidden shadow-xs">
              <Image
                src="/assets/img/Pict143.jpg"
                alt="Vegetarian Meals Cooked Fresh"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING TABLE ──────────────────────────────────── */}
      <section className="bg-ivory py-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-[0.78rem] font-sans font-semibold text-pm-blue uppercase tracking-widest block mb-3">Subsidised Rates</span>
            <h2 className="font-heading font-semibold text-charcoal" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)' }}>
              {t('svc_table_heading')}
            </h2>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block bg-white border border-border rounded-2xl overflow-hidden shadow-xs">
            <table className="w-full text-[0.875rem] font-sans">
              <thead>
                <tr className="bg-gray-100 border-b border-border">
                  <th className="text-left px-6 py-4 font-semibold text-charcoal text-[0.78rem] uppercase tracking-wider">Day / Period</th>
                  <th className="text-left px-6 py-4 font-semibold text-charcoal text-[0.78rem] uppercase tracking-wider">Activity / Service</th>
                  <th className="text-left px-6 py-4 font-semibold text-charcoal text-[0.78rem] uppercase tracking-wider">Timings</th>
                  <th className="text-right px-6 py-4 font-semibold text-charcoal text-[0.78rem] uppercase tracking-wider">Rate</th>
                </tr>
              </thead>
              <tbody>
                {services.map((row, i) => (
                  <tr key={i} className={`border-b border-border/60 last:border-0 hover:bg-gray-100/60 transition-colors ${i % 2 === 0 ? '' : 'bg-ivory/50'}`}>
                    <td className="px-6 py-4 font-medium text-charcoal whitespace-nowrap">{row.day}</td>
                    <td className="px-6 py-4 text-warm-gray">{row.activity}</td>
                    <td className="px-6 py-4 text-warm-gray whitespace-nowrap">{row.timings}</td>
                    <td className="px-6 py-4 text-right font-semibold text-pm-blue whitespace-nowrap">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden flex flex-col gap-3">
            {services.map((row, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-4 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <span className="text-[0.72rem] font-sans font-semibold text-pm-blue uppercase tracking-wider block mb-0.5">{row.day}</span>
                  <p className="font-sans font-medium text-charcoal text-[0.9rem]">{row.activity}</p>
                  <p className="font-sans text-[0.8rem] text-warm-gray mt-0.5">{row.timings}</p>
                </div>
                <span className="font-sans font-semibold text-pm-blue text-[0.9rem] shrink-0">{row.rate}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="bg-pm-blue-light border-t border-border py-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading font-semibold text-charcoal mb-3" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            {t('svc_cta_heading')}
          </h2>
          <p className="font-sans text-[0.975rem] text-warm-gray mb-8 max-w-md mx-auto">{t('svc_cta_body')}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:01933442955" className="inline-flex items-center gap-2 px-6 py-3 bg-pm-blue text-white font-sans font-medium text-[0.875rem] rounded-xl hover:bg-pm-blue-dark transition-colors">
              <Phone size={15} /> {t('svc_call')}: 01933 442955
            </a>
            <a href="tel:07471186658" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-border text-charcoal font-sans font-medium text-[0.875rem] rounded-xl hover:border-pm-blue/40 hover:text-pm-blue transition-colors">
              <Phone size={15} /> Mobile: 07471 186658
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
