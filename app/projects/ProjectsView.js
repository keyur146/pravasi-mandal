'use client';

import { Sprout } from 'lucide-react';
import { TYPES } from '../../lib/api';
import { useLanguage } from '../components/LanguageContext';
import PageHero from '../components/PageHero';
import ContentList from '../components/ContentList';

export default function ProjectsView() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero icon={Sprout} label={t('pj_label')} heading={t('pj_heading')} body={t('pj_intro')} />
      <section className="bg-slate-50 py-14">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <ContentList type={TYPES.project} emptyTitle={t('pj_none_title')} emptyBody={t('pj_none')} cta={{ href: '/volunteer', label: t('pj_cta') }} />
        </div>
      </section>
    </>
  );
}
