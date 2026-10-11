'use client';

import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { getEvents, splitEvents } from '../../lib/api';
import { useApi } from '../../lib/useApi';
import { useLanguage } from '../components/LanguageContext';
import PageHero from '../components/PageHero';
import EventCard from '../components/EventCard';
import { SkeletonGrid, EmptyState, ErrorState } from '../components/DataStates';

export default function EventsView() {
  const { t } = useLanguage();
  const { data, loading, error, retry } = useApi(() => getEvents({ limit: 100 }));
  const { upcoming, past } = data ? splitEvents(data) : { upcoming: [], past: [] };

  return (
    <>
      <PageHero icon={Calendar} label={t('events_label')} heading={t('ev_upcoming')} body={t('ev_page_intro')} />

      <section className="bg-slate-50 py-14" aria-labelledby="upcoming-heading">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h2 id="upcoming-heading" className="sr-only">{t('ev_upcoming')}</h2>
          {loading && <SkeletonGrid count={3} />}
          {error && <ErrorState onRetry={retry} />}
          {data && upcoming.length === 0 && <EmptyState title={t('ev_none_title')} body={t('ev_none_body')} />}
          {upcoming.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcoming.map((ev) => <EventCard key={ev.id} event={ev} />)}
            </div>
          )}
        </div>
      </section>

      {past.length > 0 && (
        <section className="bg-white border-t border-slate-300 py-14" aria-labelledby="past-heading">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <h2 id="past-heading" className="font-heading font-extrabold text-slate-900 tracking-tight" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.3rem)' }}>{t('ev_past')}</h2>
                <p className="font-sans text-[1rem] text-slate-700 mt-1">{t('ev_past_body')}</p>
              </div>
              <Link href="/gallery" className="inline-flex items-center gap-2 font-sans font-bold text-pm-blue hover:underline underline-offset-4 shrink-0">
                {t('ev_view_gallery')} <ArrowRight size={16} className="stroke-[2.5]" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {past.slice(0, 12).map((ev) => <EventCard key={ev.id} event={ev} past />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
