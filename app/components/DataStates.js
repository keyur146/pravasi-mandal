'use client';

import Link from 'next/link';
import { AlertCircle, Phone, RefreshCw } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export function SkeletonGrid({ count = 3 }) {
  const { t } = useLanguage();
  return (
    <div role="status" aria-live="polite" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <span className="sr-only">{t('ds_loading')}</span>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden animate-pulse">
          <div className="h-44 bg-slate-200" />
          <div className="p-5 space-y-3">
            <div className="h-5 w-3/4 bg-slate-200 rounded" />
            <div className="h-4 w-1/2 bg-slate-200 rounded" />
            <div className="h-4 w-full bg-slate-100 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function EmptyState({ title, body, showCall = true, action }) {
  const { t } = useLanguage();
  return (
    <div className="bg-white border-2 border-dashed border-slate-300 rounded-2xl px-6 py-12 text-center max-w-2xl mx-auto">
      {title && <h3 className="font-heading font-extrabold text-slate-900 text-xl mb-2">{title}</h3>}
      {body && <p className="font-sans text-[1rem] text-slate-700 leading-relaxed mb-5">{body}</p>}
      <div className="flex flex-wrap justify-center gap-3">
        {showCall && (
          <a href="tel:01933442955" className="inline-flex items-center gap-2 px-6 py-3 bg-pm-blue text-white font-sans font-bold rounded-xl hover:bg-pm-blue-dark transition-colors">
            <Phone size={17} className="stroke-[2.2]" /> {t('ds_empty_call')}
          </a>
        )}
        {action && (
          <Link href={action.href} className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-300 text-slate-900 font-sans font-bold rounded-xl hover:border-pm-blue transition-colors">
            {action.label}
          </Link>
        )}
      </div>
    </div>
  );
}

export function ErrorState({ onRetry }) {
  const { t } = useLanguage();
  return (
    <div role="alert" className="bg-white border-2 border-rose-200 rounded-2xl px-6 py-12 text-center max-w-2xl mx-auto">
      <AlertCircle size={34} className="mx-auto mb-3 text-rose-600" />
      <h3 className="font-heading font-extrabold text-slate-900 text-xl mb-2">{t('ds_error_title')}</h3>
      <p className="font-sans text-[1rem] text-slate-700 mb-5">{t('ds_error_body')}</p>
      <div className="flex flex-wrap justify-center gap-3">
        {onRetry && (
          <button type="button" onClick={onRetry} className="inline-flex items-center gap-2 px-6 py-3 bg-pm-blue text-white font-sans font-bold rounded-xl hover:bg-pm-blue-dark transition-colors">
            <RefreshCw size={17} className="stroke-[2.2]" /> {t('ds_retry')}
          </button>
        )}
        <a href="tel:01933442955" className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-300 text-slate-900 font-sans font-bold rounded-xl hover:border-pm-blue transition-colors">
          <Phone size={17} className="stroke-[2.2]" /> {t('ds_empty_call')}
        </a>
      </div>
    </div>
  );
}
