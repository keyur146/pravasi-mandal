'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowRight, Heart, Award, Users, Sparkles } from 'lucide-react';
import { useLanguage } from './components/LanguageContext';

function StatCard({ num, label }) {
  return (
    <div className="text-center sm:text-left bg-white border border-slate-300 rounded-xl p-4 shadow-2xs">
      <div className="font-heading text-3xl font-extrabold text-pm-blue">{num}</div>
      <div className="text-[0.78rem] font-sans font-bold text-slate-800 uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}

function ContactCard({ icon: Icon, label, value, href }) {
  return (
    <div className="bg-white border border-slate-300 rounded-2xl p-6 flex flex-col items-center text-center gap-3.5 hover:border-pm-blue hover:shadow-md transition-all duration-200 shadow-2xs">
      <div className="w-12 h-12 rounded-xl bg-pm-blue-light border border-pm-blue/20 flex items-center justify-center shrink-0">
        <Icon size={22} className="text-pm-blue stroke-[2.2]" />
      </div>
      <div>
        <p className="text-[0.75rem] font-sans font-bold text-slate-700 uppercase tracking-wider mb-1.5">{label}</p>
        {href ? (
          <a href={href} className="font-sans text-[1rem] font-bold text-slate-900 hover:text-pm-blue transition-colors">
            {value}
          </a>
        ) : (
          <p className="font-sans text-[0.98rem] font-bold text-slate-900 leading-snug whitespace-pre-line">{value}</p>
        )}
      </div>
    </div>
  );
}

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[64vh] lg:min-h-[74vh] overflow-hidden flex items-center">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/img/IMG_0391.jpg"
            alt="Pravasi Mandal community"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Deep Contrast Overlay for Maximum Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/75 to-slate-950/90" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
          <div className="flex flex-col items-center text-center">

            {/* Charity Trust Badge */}
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-md shadow-sm">
              <Sparkles size={14} className="text-amber-300" />
              <span className="font-sans text-[0.75rem] sm:text-[0.82rem] font-bold text-white uppercase tracking-[0.18em]">
                Est. 1984 · Wellingborough, Northamptonshire
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="font-heading font-extrabold text-white leading-tight mb-4 drop-shadow-md"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)' }}
            >
              {t('hero_heading')}
            </h1>

            {/* Tagline */}
            <p className="font-sans text-base sm:text-xl lg:text-2xl text-slate-100 font-medium leading-relaxed max-w-2xl mb-8 sm:mb-10 drop-shadow-xs">
              {t('hero_tagline')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap w-fit justify-center gap-3.5 mb-6 sm:mb-12">
              <Link
                href="/activities"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-white text-slate-900 font-sans font-extrabold text-sm sm:text-[0.95rem] rounded-xl hover:bg-slate-100 transition-all duration-200 hover:scale-[1.02] shadow-lg"
              >
                {t('hero_cta1')}
                <ArrowRight size={16} className="stroke-[2.5]" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-white/10 text-white font-sans font-bold text-sm sm:text-[0.95rem] rounded-xl border-2 border-white/70 hover:bg-white/20 transition-all duration-200 backdrop-blur-xs shadow-md"
              >
                {t('hero_cta2')}
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />

      </section>

      {/* ── OUR STORY ────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-300 py-14 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-pm-blue-light border border-pm-blue/20 mb-4">
                <Heart size={15} className="text-pm-blue fill-pm-blue/20 stroke-[2.5]" />
                <span className="text-[0.78rem] font-sans font-bold text-pm-blue uppercase tracking-widest">
                  {t('story_label')}
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-slate-900 mb-4 tracking-tight" style={{ fontSize: 'clamp(1.85rem, 3.8vw, 2.75rem)' }}>
                {t('story_heading')}
              </h2>
              <div className="w-14 h-1 bg-pm-blue mb-6 rounded-full" />
              <p className="font-sans text-[1.05rem] text-slate-700 leading-relaxed mb-8 font-normal">
                {t('story_body')}
              </p>
              <div className="flex flex-wrap gap-3.5">
                <Link href="/activities" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pm-blue to-pm-blue-dark text-white font-sans text-[0.92rem] font-bold rounded-xl hover:shadow-md transition-all">
                  Our Activities <ArrowRight size={16} className="stroke-[2.5]" />
                </Link>
                <Link href="/services" className="inline-flex items-center px-6 py-3 border-2 border-slate-300 text-slate-800 font-sans text-[0.92rem] font-bold rounded-xl hover:border-pm-blue hover:text-pm-blue hover:bg-slate-50 transition-all">
                  Our Services
                </Link>
              </div>
            </div>

            {/* Real Image */}
            <div className="relative">
              <div className="relative w-full h-[340px] sm:h-[400px] rounded-2xl overflow-hidden border-2 border-slate-300 shadow-md">
                <Image
                  src="/assets/img/IMG_0387.jpg"
                  alt="Pravasi Mandal Asian Elders Community"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              {/* Accent badge */}
              <div className="absolute -bottom-4 -right-3 bg-gradient-to-r from-pm-blue to-pm-blue-dark text-white rounded-2xl px-6 py-3.5 shadow-xl border-2 border-white flex items-center gap-3">
                <Users size={24} className="stroke-[2.5]" />
                <div>
                  <div className="font-heading font-extrabold text-2xl leading-none">400+</div>
                  <div className="font-sans text-[0.7rem] font-bold mt-1 uppercase tracking-wider text-white/90">Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DONOR / SUPPORT ──────────────────────────────────── */}
      <section className="bg-gradient-to-b from-amber-50/70 via-slate-50 to-white border-b border-slate-300 py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center bg-white border border-amber-200/90 rounded-3xl p-8 sm:p-12 shadow-md">
            <div className="relative w-20 h-20 rounded-2xl bg-amber-50 border-2 border-amber-200 flex items-center justify-center mx-auto mb-6 p-2 shadow-2xs">
              <Image
                src="/assets/img/Pict126.gif"
                alt="Donor Recognition Icon"
                fill
                sizes="80px"
                className="object-contain p-2"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-300 mb-3">
              <Award size={15} className="text-amber-800 stroke-[2.5]" />
              <span className="text-[0.78rem] font-sans font-extrabold text-amber-900 uppercase tracking-widest">
                {t('donor_label')}
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-slate-900 mb-4 tracking-tight" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
              {t('donor_heading')}
            </h2>
            <p className="font-sans text-[1.05rem] text-slate-700 leading-relaxed mb-8 max-w-xl mx-auto font-normal">
              {t('donor_body')}
            </p>
            <Link
              href="/support"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-pm-blue to-pm-blue-dark text-white font-sans font-bold text-[0.95rem] rounded-xl hover:shadow-lg transition-all hover:scale-[1.02] shadow-sm"
            >
              <Heart size={18} className="fill-white/20 stroke-[2.5]" />
              {t('donor_cta')} <ArrowRight size={17} className="stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── GET IN TOUCH ─────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-pm-blue-light border border-pm-blue/20 mb-3">
            <span className="text-[0.78rem] font-sans font-bold text-pm-blue uppercase tracking-widest">
              {t('contact_label')}
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-slate-900 mb-3 tracking-tight" style={{ fontSize: 'clamp(1.85rem, 3.8vw, 2.75rem)' }}>
            {t('contact_heading')}
          </h2>
          <p className="font-sans text-[1.05rem] text-slate-700 mb-12 max-w-xl mx-auto font-normal">
            {t('contact_body')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <ContactCard icon={Phone} label={t('contact_phone')} value="01933-442955" href="tel:01933442955" />
            <ContactCard icon={Mail} label={t('contact_email')} value="pravasimandal2@btconnect.com" href="mailto:pravasimandal2@btconnect.com" />
            <ContactCard icon={MapPin} label={t('contact_address')} value={`65 Elsden Road\nWellingborough NN8 1QD`} />
          </div>

          <div className="mt-12">
            <Link href="/contact" className="inline-flex items-center gap-2 text-[0.95rem] font-sans font-bold text-pm-blue hover:text-pm-blue-dark hover:underline underline-offset-4 transition-all">
              View full contact details <ArrowRight size={16} className="stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
