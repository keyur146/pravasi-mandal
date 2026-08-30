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
      <section className="bg-pm-blue/90 border-b border-border py-7">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <span className="text-[0.78rem] font-sans font-semibold text-white uppercase tracking-widest block mb-1">Our Community</span>
          <h1 className="font-heading font-semibold mb-4 text-white!" style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}>
            {t('gal_hero_heading')}
          </h1>
          <p className="font-sans text-[1rem] text-white max-w-lg leading-relaxed">{t('gal_intro')}</p>
        </div>
      </section>

      {/* ── GALLERY ────────────────────────────────────────── */}
      <section className="bg-ivory py-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          {/* Masonry grid via CSS columns */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-0">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid mb-5 group cursor-pointer relative overflow-hidden rounded-2xl bg-white border border-border shadow-xs hover:border-pm-blue/40 transition-all duration-300"
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
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-300 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-white/0 group-hover:bg-white flex items-center justify-center transition-all duration-300 scale-75 group-hover:scale-100 shadow-md">
                    <ZoomIn size={18} className="text-charcoal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Label bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-sans text-[0.8rem] font-medium text-white truncate">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ───────────────────────────────────────── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] bg-charcoal/85 backdrop-blur-xs flex items-center justify-center p-6 animate-in fade-in duration-200"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing: ${lightbox.label}`}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <div
            className="relative bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] min-h-[300px]">
              <Image
                src={lightbox.src}
                alt={lightbox.label}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 bg-white border-t border-border flex items-center justify-between">
              <span className="font-heading font-semibold text-charcoal text-lg">{lightbox.label}</span>
              <span className="font-sans text-[0.8rem] text-warm-gray">Pravasi Mandal Gallery</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
