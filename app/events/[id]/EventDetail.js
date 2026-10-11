'use client';

import Link from 'next/link';
import { ArrowLeft, Calendar, Phone, MessageCircle, Share2 } from 'lucide-react';
import { getEvents } from '../../../lib/api';
import { useApi } from '../../../lib/useApi';
import { formatDate, isUpcoming } from '../../../lib/dates';
import { useLanguage } from '../../components/LanguageContext';
import RemoteImage from '../../components/RemoteImage';
import { SkeletonGrid, ErrorState } from '../../components/DataStates';

export default function EventDetail({ id, initialEvent }) {
  const { t, lang } = useLanguage();
  // Only hits the network when the server could not load the event.
  const { data, loading, error, retry } = useApi(() =>
    initialEvent ? Promise.resolve(initialEvent) : getEvents({ limit: 200 }).then((all) => all.find((e) => String(e.id) === String(id)) || null)
  );
  const event = data;

  const back = (
    <Link href="/events" className="inline-flex items-center gap-2 font-sans font-bold text-pm-blue hover:underline underline-offset-4">
      <ArrowLeft size={17} className="stroke-[2.5]" /> {t('ev_back')}
    </Link>
  );

  if (loading) return <div className="max-w-[1000px] mx-auto px-6 py-14"><SkeletonGrid count={1} /></div>;
  if (error) return <div className="max-w-[1000px] mx-auto px-6 py-14"><ErrorState onRetry={retry} /></div>;
  if (!event) {
    return (
      <div className="max-w-[700px] mx-auto px-6 py-20 text-center">
        <h1 className="font-heading font-extrabold text-slate-900 text-3xl mb-3">{t('ev_not_found')}</h1>
        <p className="font-sans text-[1.05rem] text-slate-700 mb-6">{t('ev_not_found_body')}</p>
        {back}
      </div>
    );
  }

  const title = event.name;
  const description = event.description;
  const dateText = formatDate(event.event_date, lang);
  const upcoming = isUpcoming(event.event_date);

  const shareEvent = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const text = [title, dateText, url].filter(Boolean).join('\n');
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  };

  const facts = [{ icon: Calendar, label: t('ev_when'), value: dateText || t('ev_date_tbc') }];

  return (
    <article className="bg-slate-50 pb-16">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-8 pt-8">{back}</div>

      <div className="max-w-[1000px] mx-auto px-6 lg:px-8 mt-6">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-3xl overflow-hidden border-2 border-slate-300 bg-slate-100 shadow-md">
          <RemoteImage src={event.image_url} alt={title} sizes="(min-width: 1000px) 1000px, 100vw" priority />
        </div>

        <div className="mt-8 bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-2xs">
          {!upcoming && <p className="inline-block mb-3 px-3 py-1 rounded-md bg-slate-200 text-slate-800 font-sans font-bold text-[0.85rem] uppercase tracking-wider">{t('ev_past')}</p>}
          <h1 className="font-heading font-extrabold text-slate-900 tracking-tight mb-6" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}>{title}</h1>

          <dl className="grid grid-cols-1 gap-4 mb-8">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-pm-blue-light flex items-center justify-center shrink-0"><Icon size={19} className="text-pm-blue stroke-[2.2]" /></div>
                <div>
                  <dt className="font-sans text-[0.8rem] font-bold text-slate-700 uppercase tracking-wider">{label}</dt>
                  <dd className="font-sans text-[1.05rem] font-bold text-slate-900">{value}</dd>
                </div>
              </div>
            ))}
          </dl>

          {description && (
            <section className="mb-8">
              <h2 className="font-heading font-extrabold text-slate-900 text-xl mb-2">{t('ev_about')}</h2>
              <p className="font-sans text-[1.08rem] text-slate-800 leading-relaxed whitespace-pre-line">{description}</p>
            </section>
          )}

          <div className="flex flex-wrap gap-3">
            {upcoming && (
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-pm-blue to-pm-blue-dark text-white font-sans font-bold rounded-xl hover:shadow-md transition-all">
                <MessageCircle size={18} className="stroke-[2.2]" /> {t('ev_enquire')}
              </Link>
            )}
            <a href="tel:01933442955" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white border-2 border-slate-300 text-slate-900 font-sans font-bold rounded-xl hover:border-pm-blue transition-colors">
              <Phone size={18} className="stroke-[2.2]" /> {t('ds_empty_call')}
            </a>
            <button type="button" onClick={shareEvent} className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1F8F4E] text-white font-sans font-bold rounded-xl hover:bg-[#177a40] transition-colors">
              <Share2 size={18} className="stroke-[2.2]" /> {t('ev_whatsapp')}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
