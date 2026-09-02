'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

const galleryItems = [
  { id: 1, src: '/assets/img/gallery/PM15.jpg', label: 'Community Event Gathering', tall: true },
  { id: 2, src: '/assets/img/gallery/PM2.jpg', label: 'Hot Meals & Dining', tall: false },
  { id: 3, src: '/assets/img/gallery/PM3.jpg', label: 'Chair Yoga & Health Activity', tall: false },
  { id: 4, src: '/assets/img/gallery/PM5.jpg', label: 'Outdoor Gardening & Social', tall: true },
  { id: 5, src: '/assets/img/gallery/PM6.jpg', label: 'Luncheon Club Gathering', tall: false },
  { id: 6, src: '/assets/img/gallery/PM8.jpg', label: 'Elders Community Group', tall: false },
  { id: 7, src: '/assets/img/gallery/PM16.jpg', label: 'Vegetarian Cooking & Prep', tall: true },
  { id: 8, src: '/assets/img/gallery/PM9.jpg', label: 'Recreation & Indoor Games', tall: false },
  { id: 9, src: '/assets/img/IMG_0387.jpg', label: 'Annual Community Celebration', tall: false },
];

export default function GalleryPage() {
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      {/* ── PAGE HERO ──────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0E3D7D] to-slate-950 border-b border-slate-300 py-10 sm:py-14 text-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/15 border border-white/20 mb-3 backdrop-blur-xs">
            <span className="text-[0.78rem] font-sans font-extrabold text-white uppercase tracking-widest block">
              {t('gal_label')}
            </span>
          </div>
          <h1 className="font-heading font-extrabold mb-3 text-white tracking-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            {t('gal_hero_heading')}
          </h1>
          <p className="font-sans text-[1.05rem] text-slate-100 max-w-2xl leading-relaxed font-medium">{t('gal_intro')}</p>
        </div>
      </section>

      {/* ── GALLERY ────────────────────────────────────────── */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          {/* Masonry grid via CSS columns */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-0">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid mb-6 group cursor-pointer relative overflow-hidden rounded-2xl bg-white border-2 border-slate-300 shadow-2xs hover:border-pm-blue hover:shadow-lg transition-all duration-300"
                style={{ aspectRatio: item.tall ? '3/4' : '4/3' }}
                onClick={() => setLightbox(item)}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.label}`}
                onKeyDown={(e) => e.key === 'Enter' && setLightbox(item)}
              >
                {/* Real Image */}
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-all duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/0 group-hover:bg-white flex items-center justify-center transition-all duration-300 scale-75 group-hover:scale-100 shadow-md">
                    <ZoomIn size={20} className="text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 stroke-[2.2]" />
                  </div>
                </div>

                {/* Label bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-sans text-[0.92rem] font-bold text-white truncate drop-shadow-sm">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ───────────────────────────────────────── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing: ${lightbox.label}`}
        >
          <button
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={22} className="stroke-[2.5]" />
          </button>
          <div
            className="relative bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl flex flex-col border border-slate-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[62vh] min-h-[320px] bg-slate-100">
              <Image
                src={lightbox.src}
                alt={lightbox.label}
                fill
                sizes="(min-width: 1024px) 800px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 bg-white border-t border-slate-200 flex items-center justify-between">
              <span className="font-heading font-extrabold text-slate-900 text-xl">{lightbox.label}</span>
              <span className="font-sans text-[0.85rem] font-bold text-pm-blue bg-pm-blue-light px-3 py-1 rounded-md border border-pm-blue/20">Pravasi Mandal Gallery</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
