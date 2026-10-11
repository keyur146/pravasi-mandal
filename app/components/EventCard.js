'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import RemoteImage from './RemoteImage';
import { formatDateShort } from '../../lib/dates';

// `event` is a row from type.php?type=Event: { id, name, description, event_date, image_url, ... }
export default function EventCard({ event, past = false }) {
  const { t, lang } = useLanguage();
  const date = formatDateShort(event.event_date, lang);
  const href = event.id ? `/events/${event.id}` : null;

  const body = (
    <>
      <div className="relative h-48 bg-slate-100 overflow-hidden">
        <RemoteImage src={event.image_url} alt={event.name} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className={`group-hover:scale-105 transition-transform duration-500 ${past ? 'grayscale-[40%]' : ''}`} />
        {date && (
          <div className="absolute top-3 left-3 bg-white rounded-xl shadow-md px-3 py-2 text-center leading-none border border-slate-200">
            <span className="block font-heading font-extrabold text-pm-blue text-2xl">{date.day}</span>
            <span className="block mt-1 font-sans font-bold text-slate-700 text-[0.8rem] uppercase tracking-wider">{date.month}</span>
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col gap-2.5 flex-1">
        <h3 className="font-heading font-extrabold text-slate-900 text-[1.15rem] leading-snug">{event.name}</h3>
        {event.description && <p className="font-sans text-[0.98rem] text-slate-700 leading-relaxed line-clamp-3">{event.description}</p>}
        {href && (
          <span className="mt-auto pt-2 inline-flex items-center gap-2 font-sans font-bold text-pm-blue text-[0.95rem] group-hover:underline underline-offset-4">
            {t('ev_details')} <ArrowRight size={16} className="stroke-[2.5]" />
          </span>
        )}
      </div>
    </>
  );

  const cls = 'group bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-2xs flex flex-col hover:border-pm-blue hover:shadow-lg transition-all duration-200';
  return href ? <Link href={href} className={cls}>{body}</Link> : <article className={cls}>{body}</article>;
}
