'use client';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

export default function EventsPage() {
  const { t } = useLanguage();
  return (
    <main id="main-content" className="bg-slate-50 min-h-screen">
      <section className="bg-gradient-to-r from-slate-950 via-[#0E3D7D] to-slate-950 py-12 sm:py-16 text-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/15 border border-white/20 mb-3">
            <Calendar size={14} className="text-blue-300" />
            <span className="text-[0.8rem] font-sans font-extrabold text-white uppercase tracking-widest">
              {t('events_label')}
            </span>
          </div>
          <h1 className="font-heading font-extrabold text-white mb-3 tracking-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            {t('events_heading')}
          </h1>
          <p className="font-sans text-[1.05rem] text-slate-100 max-w-xl leading-relaxed font-medium">
            Full events calendar coming soon — check back shortly.
          </p>
        </div>
      </section>
      <section className="py-20 text-center">
        <p className="font-sans text-[1rem] text-slate-600 mb-6">Events content coming in Task 2.</p>
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-pm-blue text-white font-sans font-bold rounded-xl hover:bg-pm-blue-dark transition-all">
          Back to Home <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}
