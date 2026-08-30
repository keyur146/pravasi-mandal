'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowRight, Heart, Calendar } from 'lucide-react';
import { useLanguage } from './components/LanguageContext';

function StatCard({ num, label }) {
  return (
    <div className="text-center sm:text-left">
      <div className="font-heading text-2xl font-semibold text-pm-blue">{num}</div>
      <div className="text-[0.78rem] font-sans text-warm-gray uppercase tracking-wider mt-0.5">{label}</div>
    </div>
  );
}

function ContactCard({ icon: Icon, label, value, href }) {
  return (
    <div className="bg-white border border-border rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:border-pm-blue/30 hover:shadow-sm transition-all duration-200">
      <div className="w-11 h-11 rounded-xl bg-pm-blue-light flex items-center justify-center">
        <Icon size={20} className="text-pm-blue" />
      </div>
      <div>
        <p className="text-[0.72rem] font-sans font-semibold text-warm-gray uppercase tracking-wider mb-1">{label}</p>
        {href ? (
          <a href={href} className="font-sans text-[0.95rem] font-medium text-charcoal hover:text-pm-blue transition-colors">
            {value}
          </a>
        ) : (
          <p className="font-sans text-[0.95rem] text-charcoal leading-snug">{value}</p>
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
      <section className="relative min-h-[60vh] lg:min-h-[70vh] overflow-hidden flex items-center">

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

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Subtle Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/65" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col items-center text-center">

            {/* Small Eyebrow */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-5 sm:w-8 h-px bg-white/60" />
              <span className="font-sans text-[0.68rem] sm:text-[0.8rem] font-medium text-white/50 uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                Est. 1984 · Wellingborough, Northamptonshire
              </span>
              <span className="w-5 sm:w-8 h-px bg-white/60" />
            </div>

            {/* Main Heading */}
            <h1
              className="font-heading font-semibold text-white! leading-tight mb-3 sm:mb-4 drop-shadow-lg"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 4.5rem)' }}
            >
              {t('hero_heading')}
            </h1>

            {/* Tagline */}
            <p className="font-sans text-sm sm:text-lg lg:text-xl text-white/85 leading-relaxed max-w-2xl mb-6 sm:mb-10">
              {t('hero_tagline')}
            </p>

            {/* CTA Buttons */}
            <div className="flex w-fit sm:w-fit justify-center gap-3 mb-6 sm:mb-14">
              <Link
                href="/activities"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 bg-white text-charcoal font-sans font-semibold text-xs sm:text-[0.9rem] rounded-lg hover:bg-ivory transition-all duration-300 hover:scale-[1.02]"
              >
                {t('hero_cta1')}
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 bg-transparent text-white font-sans font-medium text-xs sm:text-[0.9rem] rounded-lg border border-white/60 hover:bg-white/10 transition-all duration-300"
              >
                {t('hero_cta2')}
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

      </section>

      {/* ── OUR STORY ────────────────────────────────────────── */}
      <section className="bg-white border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart size={15} className="text-pm-blue" />
                <span className="text-[0.78rem] font-sans font-semibold text-pm-blue uppercase tracking-widest">
                  {t('story_label')}
                </span>
              </div>
              <h2 className="font-heading font-semibold text-charcoal mb-4" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)' }}>
                {t('story_heading')}
              </h2>
              <div className="w-10 h-0.5 bg-pm-blue mb-6 rounded-full" />
              <p className="font-sans text-[0.975rem] text-warm-gray leading-relaxed mb-8">
                {t('story_body')}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/activities" className="inline-flex items-center gap-2 px-5 py-2.5 bg-pm-blue text-white font-sans text-[0.875rem] font-medium rounded-xl hover:bg-pm-blue-dark transition-colors">
                  Our Activities <ArrowRight size={15} />
                </Link>
                <Link href="/services" className="inline-flex items-center px-5 py-2.5 border border-border text-charcoal font-sans text-[0.875rem] font-medium rounded-xl hover:border-pm-blue/40 hover:text-pm-blue transition-colors">
                  Our Services
                </Link>
              </div>
            </div>

            {/* Real Image */}
            <div className="relative">
              <div className="relative w-full h-[320px] sm:h-[380px] bg-cream rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/assets/img/IMG_0387.jpg"
                  alt="Pravasi Mandal Asian Elders Community"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              {/* Accent badge */}
              <div className="absolute -bottom-4 -right-4 bg-pm-blue text-white rounded-2xl px-5 py-3 shadow-lg">
                <div className="font-heading font-semibold text-xl leading-none">400+</div>
                <div className="font-sans text-[0.65rem] mt-1 opacity-90 uppercase tracking-wider">Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DONOR / SUPPORT ──────────────────────────────────── */}
      <section className="bg-gray-100 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="relative w-16 h-16 rounded-2xl bg-white border border-border flex items-center justify-center mx-auto mb-6 p-2 overflow-hidden shadow-xs">
              <Image
                src="/assets/img/Pict126.gif"
                alt="Donor Recognition Icon"
                fill
                sizes="64px"
                className="object-contain p-2"
              />
            </div>
            <span className="text-[0.78rem] font-sans font-semibold text-pm-blue uppercase tracking-widest block mb-3">
              {t('donor_label')}
            </span>
            <h2 className="font-heading font-semibold text-charcoal mb-4" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)' }}>
              {t('donor_heading')}
            </h2>
            <p className="font-sans text-[0.975rem] text-warm-gray leading-relaxed mb-8 max-w-lg mx-auto">
              {t('donor_body')}
            </p>
            <Link
              href="/support"
              className="inline-flex items-center gap-2 px-6 py-3 bg-pm-blue text-white font-sans font-medium text-[0.9rem] rounded-xl hover:bg-pm-blue-dark transition-colors"
            >
              {t('donor_cta')} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── GET IN TOUCH ─────────────────────────────────────── */}
      <section className="bg-ivory">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-12 lg:py-16 text-center">
          <span className="text-[0.78rem] font-sans font-semibold text-pm-blue uppercase tracking-widest block mb-3">
            {t('contact_label')}
          </span>
          <h2 className="font-heading font-semibold text-charcoal mb-3" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)' }}>
            {t('contact_heading')}
          </h2>
          <p className="font-sans text-[0.975rem] text-warm-gray mb-12 max-w-lg mx-auto">
            {t('contact_body')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <ContactCard icon={Phone} label={t('contact_phone')} value="01933-442955" href="tel:01933442955" />
            <ContactCard icon={Mail} label={t('contact_email')} value="pravasimandal2@btconnect.com" href="mailto:pravasimandal2@btconnect.com" />
            <ContactCard icon={MapPin} label={t('contact_address')} value={`65 Elsden Road\nWellingborough NN8 1QD`} />
          </div>

          <div className="mt-10">
            <Link href="/contact" className="inline-flex items-center gap-2 text-[0.875rem] font-sans font-medium text-pm-blue hover:underline underline-offset-4 transition-all">
              View full contact details <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
