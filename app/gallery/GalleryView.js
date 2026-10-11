'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { getGallery } from '../../lib/api';
import { useApi } from '../../lib/useApi';
import { useLanguage } from '../components/LanguageContext';
import PageHero from '../components/PageHero';
import RemoteImage from '../components/RemoteImage';
import { SkeletonGrid } from '../components/DataStates';

// Shown only if the API is unreachable or empty, so the page is never blank.
const FALLBACK = [
  ['f1', '/assets/img/gallery/PM15.jpg', 'Community event gathering'],
  ['f2', '/assets/img/gallery/PM2.jpg', 'Mealtime together'],
  ['f3', '/assets/img/gallery/PM3.jpg', 'Health and wellbeing activity'],
  ['f4', '/assets/img/gallery/PM5.jpg', 'Outdoor gardening'],
  ['f5', '/assets/img/gallery/PM6.jpg', 'Members gathering'],
  ['f6', '/assets/img/gallery/PM8.jpg', 'Members together'],
  ['f7', '/assets/img/gallery/PM16.jpg', 'Cooking and preparation'],
  ['f8', '/assets/img/gallery/PM9.jpg', 'Indoor games and recreation'],
  ['f9', '/assets/img/IMG_0387.jpg', 'Community celebration'],
].map(([id, image_url, gallery_name]) => ({ id, image_url, gallery_name }));

export default function GalleryView() {
  const { t } = useLanguage();
  const { data, loading, error } = useApi(() => getGallery({ limit: 200 }));
  const [openIndex, setOpenIndex] = useState(null);
  const closeRef = useRef(null);
  const lastFocus = useRef(null);

  const photos = data && data.length ? data : FALLBACK;
  const usingFallback = !loading && (!data || data.length === 0);
  if (error && process.env.NODE_ENV !== 'production') console.warn('[gallery] showing local fallback photos');

  const visible = photos;
  const current = openIndex !== null ? visible[openIndex] : null;

  const close = useCallback(() => {
    setOpenIndex(null);
    lastFocus.current?.focus();
  }, []);
  const step = useCallback((dir) => setOpenIndex((i) => (i === null ? i : (i + dir + visible.length) % visible.length)), [visible.length]);

  useEffect(() => {
    if (openIndex === null) return;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'ArrowRight') step(1);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [openIndex, close, step]);

  const labelOf = (p) => p.gallery_name || 'Pravasi Mandal';

  return (
    <>
      <PageHero label={t('gal_label')} heading={t('gal_hero_heading')} body={t('gal_intro')} />

      <section className="bg-slate-50 py-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          {loading && <SkeletonGrid count={6} />}

          {!loading && (
            <>
              {usingFallback && <span className="sr-only">Showing sample photographs</span>}

              {visible.length === 0 ? (
                <p className="font-sans text-[1.05rem] text-slate-700 text-center py-12">{t('gl_empty')}</p>
              ) : (
                <ul className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                  {visible.map((p, i) => (
                    <li key={p.id} className="break-inside-avoid mb-6">
                      <button
                        type="button"
                        onClick={(e) => { lastFocus.current = e.currentTarget; setOpenIndex(i); }}
                        aria-label={labelOf(p)}
                        className="group relative block w-full overflow-hidden rounded-2xl bg-white border-2 border-slate-300 shadow-2xs hover:border-pm-blue hover:shadow-lg transition-all duration-300 text-left"
                        style={{ aspectRatio: i % 3 === 0 ? '3/4' : '4/3' }}
                      >
                        <RemoteImage src={p.image_url} alt={labelOf(p)} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="group-hover:scale-105 transition-transform duration-500 ease-out" />
                        <span className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 group-focus-visible:bg-slate-950/40 transition-colors flex items-center justify-center">
                          <ZoomIn size={26} className="text-white opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity" />
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </section>

      {current && (
        <div className="fixed inset-0 z-[9999] bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6" onClick={close} role="dialog" aria-modal="true" aria-label={labelOf(current)}>
          <button ref={closeRef} type="button" onClick={close} aria-label={t('gl_close')} className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center text-white transition-colors">
            <X size={24} className="stroke-[2.5]" />
          </button>
          {visible.length > 1 && (
            <>
              <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label={t('gl_prev')} className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center text-white"><ChevronLeft size={26} /></button>
              <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label={t('gl_next')} className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center text-white"><ChevronRight size={26} /></button>
            </>
          )}
          <figure className="relative bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl border border-slate-300" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-[62vh] min-h-[280px] bg-slate-100">
              <RemoteImage src={current.image_url} alt={labelOf(current)} sizes="(min-width: 1024px) 800px, 100vw" className="!object-contain" />
            </div>
            <figcaption className="p-5 bg-white border-t border-slate-200 font-heading font-extrabold text-slate-900 text-lg">{labelOf(current)}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
