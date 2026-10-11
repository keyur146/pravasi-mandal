'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart, Music, Hand, Dices, Sprout, Bus, PartyPopper, Users, Stethoscope, Phone, Mail } from 'lucide-react';
import { getItems, TYPES } from '../../lib/api';
import { useApi } from '../../lib/useApi';
import { useLanguage } from '../components/LanguageContext';
import PageHero from '../components/PageHero';
import { ItemCard } from '../components/ContentList';
import { SkeletonGrid, EmptyState, ErrorState } from '../components/DataStates';

// Activity areas are static (they rarely change). Fixed timetables are deliberately NOT shown here –
// staff publish what is on via "Upcoming Activities & Events" below, managed from the admin.
const AREAS = [
  { key: 'health', icon: Heart },
  { key: 'dance', icon: Music },
  { key: 'massage', icon: Hand },
  { key: 'games', icon: Dices },
  { key: 'garden', icon: Sprout },
  { key: 'trips', icon: Bus },
  { key: 'cultural', icon: PartyPopper },
  { key: 'events', icon: Users },
  { key: 'awareness', icon: Stethoscope },
];

const PHOTOS = [
  { src: '/assets/img/Pict143.jpg', alt: 'Members together at Pravasi Mandal' },
  { src: '/assets/img/Pict102.jpg', alt: 'A wellbeing activity at Pravasi Mandal' },
  { src: '/assets/img/IMG_0431.jpg', alt: 'A community gathering at Pravasi Mandal' },
];

export default function ActivitiesView() {
  const { t } = useLanguage();
  const { data, loading, error, retry } = useApi(() => getItems(TYPES.activity, { limit: 24 }));

  return (
    <>
      <PageHero label={t('act_what_we_offer')} heading={t('act_hero_heading')} body={t('act_intro')} />

      {/* Activity areas */}
      <section className="bg-slate-50 py-14" aria-labelledby="areas-heading">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h2 id="areas-heading" className="font-heading font-extrabold text-slate-900 tracking-tight mb-2" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)' }}>{t('ac_areas_heading')}</h2>
          <p className="font-sans text-[1.02rem] text-slate-700 mb-8 max-w-2xl">{t('ac_areas_note')}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AREAS.map(({ key, icon: Icon }) => (
              <li key={key} className="bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-2xs hover:border-pm-blue hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-pm-blue-light border border-pm-blue/20 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-pm-blue stroke-[2.2]" />
                </div>
                <h3 className="font-heading font-extrabold text-slate-900 text-[1.15rem] mb-1.5">{t(`ac_${key}`)}</h3>
                <p className="font-sans text-[0.98rem] text-slate-700 leading-relaxed">{t(`ac_${key}_desc`)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Upcoming activities & events (from admin) */}
      <section className="bg-white border-y border-slate-300 py-14" aria-labelledby="upcoming-acts-heading">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="font-sans text-[0.8rem] font-bold text-pm-blue uppercase tracking-widest mb-1">{t('ac_upcoming_label')}</p>
              <h2 id="upcoming-acts-heading" className="font-heading font-extrabold text-slate-900 tracking-tight" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)' }}>{t('ac_upcoming_heading')}</h2>
            </div>
          </div>
          {loading && <SkeletonGrid count={3} />}
          {error && <ErrorState onRetry={retry} />}
          {data && data.length === 0 && <EmptyState title={t('ac_upcoming_none_title')} body={t('ac_upcoming_none')} />}
          {data && data.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.map((item, i) => <ItemCard key={item.id || i} item={item} />)}
            </div>
          )}
        </div>
      </section>

      {/* Real photos */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {PHOTOS.map((img) => (
            <div key={img.src} className="relative w-full h-[240px] rounded-2xl overflow-hidden border-2 border-slate-300 shadow-2xs">
              <Image src={img.src} alt={img.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-slate-100/70 border-t border-slate-300 py-14">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading font-extrabold text-slate-900 mb-3 tracking-tight" style={{ fontSize: 'clamp(1.65rem, 3.2vw, 2.4rem)' }}>{t('act_info_heading')}</h2>
          <p className="font-sans text-[1.05rem] text-slate-700 mb-7">{t('ac_timings_note')}</p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <a href="tel:01933442955" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-pm-blue to-pm-blue-dark text-white font-sans font-bold rounded-xl hover:shadow-md transition-all"><Phone size={18} className="stroke-[2.2]" /> 01933 442955</a>
            <a href="tel:07471186658" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white border-2 border-slate-300 text-slate-900 font-sans font-bold rounded-xl hover:border-pm-blue transition-colors"><Phone size={18} className="stroke-[2.2]" /> 07471 186658</a>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white border-2 border-slate-300 text-slate-900 font-sans font-bold rounded-xl hover:border-pm-blue transition-colors"><Mail size={18} className="stroke-[2.2]" /> {t('ev_enquire')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
