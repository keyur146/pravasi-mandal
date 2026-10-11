'use client';

import Link from 'next/link';
import { Handshake } from 'lucide-react';
import { TYPES } from '../../lib/api';
import { useLanguage } from '../components/LanguageContext';
import PageHero from '../components/PageHero';
import ContentList from '../components/ContentList';

export default function PartnersView() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero icon={Handshake} label={t('pt_label')} heading={t('pt_heading')} body={t('pt_intro')} />
      <section className="bg-slate-50 py-14">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <ContentList type={TYPES.partner} emptyTitle={t('pt_none_title')} emptyBody={t('pt_none')} />
        </div>
      </section>
      <section className="bg-white border-t border-slate-300 py-14">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading font-extrabold text-slate-900 mb-3 tracking-tight" style={{ fontSize: 'clamp(1.65rem, 3.2vw, 2.4rem)' }}>{t('pt_cta_heading')}</h2>
          <p className="font-sans text-[1.05rem] text-slate-700 mb-7">{t('pt_cta_body')}</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-pm-blue to-pm-blue-dark text-white font-sans font-bold rounded-xl hover:shadow-md transition-all">{t('pt_cta')}</Link>
        </div>
      </section>
    </>
  );
}
