'use client';

import Image from 'next/image';
import { Newspaper, Heart } from 'lucide-react';
import { TYPES } from '../../lib/api';
import { useLanguage } from '../components/LanguageContext';
import PageHero from '../components/PageHero';
import ContentList from '../components/ContentList';

export default function NewsView() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero icon={Newspaper} label={t('nav_news')} heading={t('nav_news')} body={t('nw_intro')} />

      {/* Community Recognition – moved here from the Support Us page */}
      <section className="bg-gradient-to-b from-amber-50/50 to-white border-b border-slate-300 py-14" aria-labelledby="recognition-heading">
        <div className="max-w-[1050px] mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 border border-amber-300 mb-3">
              <Heart size={15} className="text-amber-800 fill-amber-700/20" />
              <span className="text-[0.8rem] font-sans font-extrabold text-amber-900 uppercase tracking-widest">{t('nw_recog_label')}</span>
            </div>
            <h2 id="recognition-heading" className="font-heading font-extrabold text-slate-900 text-3xl mb-4 tracking-tight">{t('nw_recog_heading')}</h2>
            <p className="font-sans text-[1.05rem] text-slate-800 leading-relaxed mb-3">
              Donation received in loving memory of Late Mrs. Sumitraben Vinubhai Patel, Wellingborough, from Mr. Minal Vinubhai Patel and Family.
            </p>
            <p className="font-sans text-[1.02rem] text-slate-700 font-semibold">Thanks to Mr. Minal Patel and Family for their support to Pravasi Mandal.</p>
          </div>
          <div className="relative w-full h-[300px] sm:h-[340px] rounded-2xl overflow-hidden border-2 border-slate-300 shadow-md bg-white">
            <Image src="/assets/img/Minal1--2-.png" alt="Donation acknowledgement from the Patel family" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* <section className="bg-slate-50 py-14" aria-labelledby="latest-heading">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h2 id="latest-heading" className="font-heading font-extrabold text-slate-900 tracking-tight mb-8" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)' }}>{t('nw_latest')}</h2>
          <ContentList type={TYPES.news} emptyTitle={t('nw_none_title')} emptyBody={t('nw_none')} />
        </div>
      </section> */}
    </>
  );
}
