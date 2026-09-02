'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

const activities = [
  {
    title: 'Hot Meals',
    desc: 'Hot meals prepared in our premises with standard quality of foods.',
    date: 'Daily',
    img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Meal Delivery',
    desc: 'Delivery of meals to Members & non-Members.',
    date: 'Daily',
    img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Personal Care',
    desc: 'Personal care by our staff.',
    date: 'By arrangement',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Chair Yoga',
    desc: 'Gentle seated yoga suitable for all abilities.',
    date: 'Every Wednesday · 2:00–3:00pm',
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Mindfulness',
    desc: 'A quiet, guided session to unwind and reset.',
    date: 'Every Monday · 2:00–3:00pm',
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Recreation',
    desc: 'Swimming, indoor games.',
    date: 'Weekly',
    img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Gardening',
    desc: 'Gardening activities.',
    date: 'Weekly',
    img: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Trips & Outings',
    desc: 'Trips and outings.',
    date: 'Monthly',
    img: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Luncheon Club',
    desc: 'Luncheon Club / Monthly Club.',
    date: 'Monthly',
    img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Vegetarian Cookery Classes',
    desc: 'Hands-on vegetarian cookery classes for all levels.',
    date: 'Monthly',
    img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
  },
];

function ActivityCard({ title, desc, date, img }) {
  return (
    <div className="group overflow-hidden flex flex-col bg-white border border-slate-300 rounded-2xl shadow-2xs hover:border-pm-blue hover:shadow-md transition-all duration-300">
      <div className="relative w-full h-[200px] overflow-hidden bg-slate-100">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <span className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md text-white font-sans font-bold text-[0.72rem] uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md border border-white/20">
          {date}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1 gap-2">
        <h3 className="font-heading font-bold text-slate-900 text-[1.12rem] leading-snug">{title}</h3>
        <p className="font-sans text-[0.92rem] text-slate-700 leading-relaxed font-normal">{desc}</p>
      </div>
    </div>
  );
}

export default function ActivitiesPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* ── PAGE HERO ──────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0E3D7D] to-slate-950 border-b border-slate-300 py-10 sm:py-14 text-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/15 border border-white/20 mb-3 backdrop-blur-xs">
            <span className="text-[0.78rem] font-sans font-extrabold text-white uppercase tracking-widest block">
              {t('act_what_we_offer')}
            </span>
          </div>
          <h1 className="font-heading font-extrabold mb-3 text-white tracking-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            {t('act_hero_heading')}
          </h1>
          <p className="font-sans text-[1.05rem] text-slate-100 max-w-2xl leading-relaxed font-medium">{t('act_intro')}</p>
        </div>
      </section>

      {/* ── ACTIVITIES GRID ──────────────────────────────────── */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((act) => (
              <ActivityCard key={act.title} {...act} />
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGE STRIP ──────────────────────────────────────── */}
      <section className="bg-white border-y border-slate-300 py-14">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { src: '/assets/img/Pict143.jpg', alt: 'Vegetarian Cookery Classes' },
              { src: '/assets/img/Pict102.jpg', alt: 'Chair Yoga & Mindfulness' },
              { src: '/assets/img/IMG_0431.jpg', alt: 'Pravasi Mandal Outing' },
            ].map((img, i) => (
              <div
                key={i}
                className="relative w-full h-[240px] rounded-2xl overflow-hidden border-2 border-slate-300 shadow-2xs group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT BANNER ───────────────────────────────────── */}
      <section className="bg-slate-100/70 border-b border-slate-300 py-14">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-pm-blue-light border border-pm-blue/20 mb-3">
              <span className="text-[0.78rem] font-sans font-bold text-pm-blue uppercase tracking-widest block">
                {t('act_info_label')}
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-slate-900 mb-8 tracking-tight" style={{ fontSize: 'clamp(1.65rem, 3.2vw, 2.5rem)' }}>
              {t('act_info_heading')}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Phone, label: t('contact_phone'),    value: '01933-442955', href: 'tel:01933442955' },
                { icon: Phone, label: t('act_mobile'),       value: '07471186658',  href: 'tel:07471186658' },
                { icon: Clock, label: t('act_hours'),        value: t('act_hours_val') },
                { icon: Clock, label: t('act_opening'),      value: t('act_opening_val') },
                { icon: Mail,  label: t('contact_email'),    value: 'pravasimandal2@btconnect.com', href: 'mailto:pravasimandal2@btconnect.com' },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="bg-white border border-slate-300 rounded-xl p-4.5 flex items-start gap-3.5 shadow-2xs hover:border-pm-blue transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-pm-blue-light flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={16} className="text-pm-blue stroke-[2.2]" />
                  </div>
                  <div>
                    <p className="font-sans text-[0.72rem] font-bold text-slate-700 uppercase tracking-wider mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="font-sans text-[0.92rem] font-bold text-slate-900 hover:text-pm-blue transition-colors">{value}</a>
                    ) : (
                      <p className="font-sans text-[0.92rem] font-bold text-slate-900 leading-snug">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3.5">
              <a href="tel:01933442955" className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-pm-blue to-pm-blue-dark text-white font-sans font-bold text-[0.9rem] rounded-xl hover:shadow-md transition-all">
                <Phone size={16} className="stroke-[2.2]" /> Call Us
              </a>
              <a href="mailto:pravasimandal2@btconnect.com" className="inline-flex items-center gap-2 px-7 py-3 bg-white text-slate-900 border-2 border-slate-300 font-sans font-bold text-[0.9rem] rounded-xl hover:border-pm-blue hover:text-pm-blue transition-colors shadow-2xs">
                <Mail size={16} className="stroke-[2.2]" /> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}