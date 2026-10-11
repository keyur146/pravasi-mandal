'use client';

import { getEvents, splitEvents } from '../../lib/api';
import { useApi } from '../../lib/useApi';
import { useLanguage } from './LanguageContext';
import EventCard from './EventCard';
import { SkeletonGrid, EmptyState, ErrorState } from './DataStates';

// Homepage strip: the next 3 upcoming events. Fetches extra rows so past events don't crowd it out.
export default function UpcomingEventsStrip({ count = 3 }) {
  const { t } = useLanguage();
  const { data, loading, error, retry } = useApi(() => getEvents({ limit: 20 }));

  if (loading) return <SkeletonGrid count={count} />;
  if (error) return <ErrorState onRetry={retry} />;

  const { upcoming } = splitEvents(data);
  if (upcoming.length === 0) {
    return <EmptyState title={t('ev_none_title')} body={t('ev_none_body')} action={{ href: '/events', label: t('events_cta') }} />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {upcoming.slice(0, count).map((ev) => <EventCard key={ev.id} event={ev} />)}
    </div>
  );
}
