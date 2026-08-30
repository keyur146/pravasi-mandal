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
    <div className="group overflow-hidden flex flex-col">
      <div className="relative w-full h-[180px] overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 rounded-md transition-transform duration-500 ease-out"
        />
        <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-pm-blue font-sans font-semibold text-[0.72rem] uppercase tracking-wider px-3 py-1.5 rounded-full shadow-xs">
          {date}
        </span>
      </div>
      <div className="px-1.2 py-5 flex flex-col gap-1.5">
        <h3 className="font-heading font-semibold text-charcoal text-[1.05rem]">{title}</h3>
        <p className="font-sans text-[0.875rem] text-warm-gray leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function ActivitiesPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* ── PAGE HERO ──────────────────────────────────────── */}
      <section className="bg-pm-blue/90 border-b border-border py-7">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <span className="text-[0.78rem] font-sans font-semibold text-white uppercase tracking-widest block mb-1">
            What We Offer
          </span>
          <h1 className="font-heading font-semibold mb-4 text-white!" style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}>
            {t('act_hero_heading')}
          </h1>
          <p className="font-sans text-[1rem] text-white max-w-lg leading-relaxed">{t('act_intro')}</p>
        </div>
      </section>

      {/* ── ACTIVITIES GRID ──────────────────────────────────── */}
      <section className="bg-ivory py-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activities.map((act) => (
              <ActivityCard key={act.title} {...act} />
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGE STRIP ──────────────────────────────────────── */}
      <section className="bg-white border-y border-border py-14">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { src: '/assets/img/Pict143.jpg', alt: 'Vegetarian Cookery Classes' },
              { src: '/assets/img/Pict102.jpg', alt: 'Chair Yoga & Mindfulness' },
              { src: '/assets/img/IMG_0431.jpg', alt: 'Pravasi Mandal Outing' },
            ].map((img, i) => (
              <div
                key={i}
                className="relative w-full h-[240px] rounded-2xl overflow-hidden border border-border shadow-xs"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT BANNER ───────────────────────────────────── */}
      <section className="bg-pm-blue-light border-b border-border py-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <span className="text-[0.78rem] font-sans font-semibold text-pm-blue uppercase tracking-widest block mb-3">
              {t('act_info_label')}
            </span>
            <h2 className="font-heading font-semibold text-charcoal mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
              {t('act_info_heading')}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {[
                { icon: Phone, label: t('contact_phone'),    value: '01933-442955', href: 'tel:01933442955' },
                { icon: Phone, label: t('act_mobile'),       value: '07471186658',  href: 'tel:07471186658' },
                { icon: Clock, label: t('act_hours'),        value: t('act_hours_val') },
                { icon: Clock, label: t('act_opening'),      value: t('act_opening_val') },
                { icon: Mail,  label: t('contact_email'),    value: 'pravasimandal2@btconnect.com', href: 'mailto:pravasimandal2@btconnect.com' },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="bg-white border border-border rounded-xl p-4 flex items-start gap-3">
                  <Icon size={16} className="text-pm-blue shrink-0 mt-0.5" />
                  <div>
                    <p className="font-sans text-[0.72rem] font-semibold text-warm-gray uppercase tracking-wider mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="font-sans text-[0.875rem] text-charcoal hover:text-pm-blue transition-colors">{value}</a>
                    ) : (
                      <p className="font-sans text-[0.875rem] text-charcoal">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="tel:01933442955" className="inline-flex items-center gap-2 px-6 py-3 bg-pm-blue text-white font-sans font-medium text-[0.875rem] rounded-xl hover:bg-pm-blue-dark transition-colors">
                <Phone size={15} /> Call Us
              </a>
              <a href="mailto:pravasimandal2@btconnect.com" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-charcoal border border-border font-sans font-medium text-[0.875rem] rounded-xl hover:border-pm-blue/40 hover:text-pm-blue transition-colors">
                <Mail size={15} /> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}