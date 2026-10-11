'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { ArrowRight, Calendar, MessageCircle, Phone, X } from 'lucide-react';
import { getItems } from '../../lib/api';
import { formatDate } from '../../lib/dates';
import { useApi } from '../../lib/useApi';
import { useLanguage } from './LanguageContext';
import RemoteImage from './RemoteImage';
import { SkeletonGrid, EmptyState, ErrorState } from './DataStates';

// Full-detail modal: image, title, date and the complete description.
function ItemModal({ item, onClose }) {
  const { t, lang } = useLanguage();
  const closeRef = useRef(null);
  const date = formatDate(item.event_date, lang);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="item-modal-title"
    >
      <div className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-300" onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={t('gl_close')}
          className="absolute top-3 right-3 z-10 w-12 h-12 rounded-full bg-slate-900/70 hover:bg-slate-900 flex items-center justify-center text-white transition-colors"
        >
          <X size={24} className="stroke-[2.5]" />
        </button>

        {item.image_url && (
          <div className="relative w-full h-64 sm:h-80 bg-slate-100">
            <RemoteImage src={item.image_url} alt={item.name} sizes="(min-width: 672px) 672px, 100vw" priority />
          </div>
        )}

        <div className="p-6 sm:p-8">
          <h2 id="item-modal-title" className="font-heading font-extrabold text-slate-900 tracking-tight mb-3 pr-10" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)' }}>
            {item.name}
          </h2>
          {date && (
            <p className="flex items-center gap-2 font-sans text-[1.02rem] text-slate-800 font-bold mb-5">
              <Calendar size={18} className="text-pm-blue shrink-0" /> {date}
            </p>
          )}
          {item.description && (
            <p className="font-sans text-[1.05rem] text-slate-800 leading-relaxed whitespace-pre-line mb-7">{item.description}</p>
          )}
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pm-blue to-pm-blue-dark text-white font-sans font-bold rounded-xl hover:shadow-md transition-all">
              <MessageCircle size={18} className="stroke-[2.2]" /> {t('ev_enquire')}
            </Link>
            <a href="tel:01933442955" className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-300 text-slate-900 font-sans font-bold rounded-xl hover:border-pm-blue transition-colors">
              <Phone size={18} className="stroke-[2.2]" /> {t('ds_empty_call')}
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

// Generic card for any admin-managed content type (projects, partners, news, activities).
// Shows a short preview; clicking opens the full details in a modal.
export function ItemCard({ item }) {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const date = formatDate(item.event_date, lang);

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus(); // return focus to the card
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="group w-full h-full text-left bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-2xs flex flex-col hover:border-pm-blue hover:shadow-md transition-all duration-200"
      >
        {item.image_url && (
          <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
            <RemoteImage src={item.image_url} alt="" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="group-hover:scale-105 transition-transform duration-500" />
          </div>
        )}
        <div className="p-5 flex flex-col gap-2.5 flex-1 w-full">
          <h3 className="font-heading font-extrabold text-slate-900 text-[1.15rem] leading-snug">{item.name}</h3>
          {date && (
            <p className="flex items-center gap-1.5 font-sans text-[0.95rem] text-slate-700 font-semibold">
              <Calendar size={15} className="text-pm-blue shrink-0" /> {date}
            </p>
          )}
          {item.description && <p className="font-sans text-[0.98rem] text-slate-700 leading-relaxed line-clamp-3">{item.description}</p>}
          <span className="mt-auto pt-2 inline-flex items-center gap-2 font-sans font-bold text-pm-blue text-[0.95rem] group-hover:underline underline-offset-4">
            {t('ev_details')} <ArrowRight size={16} className="stroke-[2.5]" />
          </span>
        </div>
      </button>
      {open && <ItemModal item={item} onClose={close} />}
    </>
  );
}

export default function ContentList({ type, limit = 50, emptyTitle, emptyBody, cta }) {
  const { data, loading, error, retry } = useApi(() => getItems(type, { limit }));

  if (loading) return <SkeletonGrid count={3} />;
  if (error) return <ErrorState onRetry={retry} />;
  if (data.length === 0) return <EmptyState title={emptyTitle} body={emptyBody} />;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, i) => <ItemCard key={item.id || i} item={item} />)}
      </div>
      {cta && (
        <div className="mt-10 text-center">
          <Link href={cta.href} className="inline-flex items-center gap-2 px-7 py-3.5 bg-pm-blue text-white font-sans font-bold rounded-xl hover:bg-pm-blue-dark transition-colors">
            {cta.label}
          </Link>
        </div>
      )}
    </>
  );
}