'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, Mail, MapPin, ArrowRight, Heart,
  Users, Sparkles, Calendar, HandHeart, Handshake,
} from 'lucide-react';
import { useLanguage } from './components/LanguageContext';

// ─── Placeholder upcoming events (replace with real data from Task 2) ─────────
const UPCOMING_EVENTS = [
  {
    id: 'diwali-2026',
    title: 'Diwali Celebration',
    date: 'November 2026',
    location: 'Pravasi Mandal Centre',
    tag: 'Festival',
  },
  {
    id: 'health-check',
    title: 'Community Health & Wellbeing Day',
    date: 'October 2026',
    location: 'Pravasi Mandal Centre',
    tag: 'Health',
  },
  {
    id: 'new-year-2027',
    title: 'New Year Social Gathering',
    date: 'January 2027',
    location: 'Pravasi Mandal Centre',
    tag: 'Social',
  },
];

function EventCard({ event }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs hover:border-pm-blue hover:shadow-md transition-all duration-200 flex flex-col gap-3">
      <span className="inline-flex self-start px-2.5 py-1 rounded-full bg-pm-blue-light text-pm-blue text-[0.75rem] font-extrabold uppercase tracking-wider">
        {event.tag}
      </span>
      <h3 className="font-heading font-extrabold text-slate-900 text-[1.05rem] leading-snug">
        {event.title}
      </h3>
      <div className="flex items-center gap-1.5 text-[0.85rem] text-slate-500 font-medium">
        <Calendar size={14} className="text-pm-blue shrink-0" />
        {event.date}
      </div>
      <div className="flex items-center gap-1.5 text-[0.85rem] text-slate-500 font-medium">
        <MapPin size={14} className="text-pm-blue shrink-0" />
        {event.location}
      </div>
    </div>
  );
}

function AudienceChip({ label }) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-pm-blue/25 text-pm-blue font-sans font-bold text-[0.88rem] shadow-2xs">
      {label}
    </span>
  );
}

function ContactCard({ icon: Icon, label, value, href }) {
  return (
    <div className="bg-white border border-slate-300 rounded-2xl p-6 flex flex-col items-center text-center gap-3.5 hover:border-pm-blue hover:shadow-md transition-all duration-200 shadow-2xs">
      <div className="w-12 h-12 rounded-xl bg-pm-blue-light border border-pm-blue/20 flex items-center justify-center shrink-0">
        <Icon size={22} className="text-pm-blue stroke-[2.2]" />
      </div>
      <div>
        <p className="text-[0.78rem] font-sans font-bold text-slate-700 uppercase tracking-wider mb-1.5">{label}</p>
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
    <main id="main-content">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[68vh] lg:min-h-[78vh] overflow-hidden flex items-center">

        <div className="absolute inset-0">
          <Image
            src="/assets/img/IMG_0391.jpg"
            alt="Pravasi Mandal community gathering"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/82 via-slate-900/78 to-slate-950/92" />

        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="flex flex-col items-center text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-white/15 border border-white/25 backdrop-blur-md shadow-sm">
              <Sparkles size={14} className="text-amber-300" />
              <span className="font-sans text-[0.78rem] sm:text-[0.85rem] font-bold text-white uppercase tracking-[0.18em]">
                Est. 1984 · Wellingborough, Northamptonshire
              </span>
            </div>

            {/* Main heading */}
            <h1
              className="font-heading font-extrabold text-white leading-tight mb-3 drop-shadow-md"
              style={{ fontSize: 'clamp(2.1rem, 5.5vw, 4.5rem)' }}
            >
              {t('hero_heading')}
            </h1>

            {/* Sub-heading */}
            <p className="font-sans text-xl sm:text-2xl lg:text-3xl text-amber-200 font-semibold mb-5 drop-shadow-xs">
              {t('hero_subheading')}
            </p>

            {/* Four-word strip */}
            <p className="font-sans text-[0.88rem] sm:text-base text-slate-300 font-medium tracking-wide mb-8 sm:mb-10 max-w-2xl leading-relaxed">
              {t('hero_four_words')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-white text-slate-900 font-sans font-extrabold text-sm sm:text-[0.97rem] rounded-xl hover:bg-slate-100 transition-all duration-200 hover:scale-[1.02] shadow-lg"
              >
                <Calendar size={16} className="stroke-[2.5]" />
                {t('hero_cta1')}
              </Link>
              <Link
                href="/volunteer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-pm-blue text-white font-sans font-bold text-sm sm:text-[0.97rem] rounded-xl border-2 border-pm-blue hover:bg-pm-blue-dark transition-all duration-200 shadow-md"
              >
                <HandHeart size={16} className="stroke-[2.5]" />
                {t('hero_cta2')}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-white/10 text-white font-sans font-bold text-sm sm:text-[0.97rem] rounded-xl border-2 border-white/70 hover:bg-white/20 transition-all duration-200 backdrop-blur-xs shadow-md"
              >
                {t('hero_cta3')}
              </Link>
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
      </section>

      {/* ── AUDIENCE STRIP ────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-pm-blue-dark via-pm-blue to-pm-blue-dark py-6 border-b border-pm-blue/30">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <span className="font-sans text-[0.78rem] font-extrabold text-white/60 uppercase tracking-widest shrink-0">
            {t('audience_label')}:
          </span>
          {[
            t('audience_elders'),
            t('audience_families'),
            t('audience_youth'),
            t('audience_volunteers'),
            t('audience_partners'),
          ].map((label) => (
            <AudienceChip key={label} label={label} />
          ))}
        </div>
      </section>

      {/* ── OUR STORY ─────────────────────────────────────────────────── */}
      <section id="our-story" className="bg-white border-b border-slate-300 py-16 lg:py-22">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-pm-blue-light border border-pm-blue/20 mb-4">
                <Heart size={15} className="text-pm-blue fill-pm-blue/20 stroke-[2.5]" />
                <span className="text-[0.8rem] font-sans font-bold text-pm-blue uppercase tracking-widest">
                  {t('story_label')}
                </span>
              </div>
              <h2
                className="font-heading font-extrabold text-slate-900 mb-4 tracking-tight"
                style={{ fontSize: 'clamp(1.85rem, 3.8vw, 2.75rem)' }}
              >
                {t('story_heading')}
              </h2>
              <div className="w-14 h-1 bg-pm-blue mb-6 rounded-full" />
              <p className="font-sans text-[1.05rem] text-slate-700 leading-relaxed mb-8 font-normal">
                {t('story_body')}
              </p>
              <div className="flex flex-wrap gap-3.5">
                <Link
                  href="/activities"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pm-blue to-pm-blue-dark text-white font-sans text-[0.93rem] font-bold rounded-xl hover:shadow-md transition-all"
                >
                  {t('story_cta1')} <ArrowRight size={16} className="stroke-[2.5]" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-3 border-2 border-slate-300 text-slate-800 font-sans text-[0.93rem] font-bold rounded-xl hover:border-pm-blue hover:text-pm-blue hover:bg-slate-50 transition-all"
                >
                  {t('story_cta2')}
                </Link>
              </div>
            </div>

            {/* Image + badge */}
            <div className="relative">
              <div className="relative w-full h-[340px] sm:h-[400px] rounded-2xl overflow-hidden border-2 border-slate-300 shadow-md">
                <Image
                  src="/assets/img/IMG_0387.jpg"
                  alt="Pravasi Mandal community members"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              {/* 400+ badge */}
              <div className="absolute -bottom-4 -right-3 bg-gradient-to-r from-pm-blue to-pm-blue-dark text-white rounded-2xl px-6 py-3.5 shadow-xl border-2 border-white flex items-center gap-3">
                <Users size={24} className="stroke-[2.5]" />
                <div>
                  <div className="font-heading font-extrabold text-2xl leading-none">400+</div>
                  <div className="font-sans text-[0.72rem] font-bold mt-1 uppercase tracking-wider text-white/90">Members</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS STRIP ─────────────────────────────────────── */}
      <section className="bg-slate-50 border-b border-slate-300 py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-pm-blue-light border border-pm-blue/20 mb-3">
                <Calendar size={15} className="text-pm-blue stroke-[2.5]" />
                <span className="text-[0.8rem] font-sans font-bold text-pm-blue uppercase tracking-widest">
                  {t('events_label')}
                </span>
              </div>
              <h2
                className="font-heading font-extrabold text-slate-900 tracking-tight"
                style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)' }}
              >
                {t('events_heading')}
              </h2>
            </div>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-[0.93rem] font-sans font-bold text-pm-blue hover:underline underline-offset-4 shrink-0"
            >
              {t('events_cta')} <ArrowRight size={16} className="stroke-[2.5]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {UPCOMING_EVENTS.map((ev) => (
              <EventCard key={ev.id} event={ev} />
            ))}
          </div>

        </div>
      </section>

      {/* ── VOLUNTEER + PARTNER TEASERS ───────────────────────────────── */}
      <section className="bg-white border-b border-slate-300 py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Volunteer card */}
          <div className="bg-pm-blue-light border border-pm-blue/20 rounded-2xl p-8 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-pm-blue flex items-center justify-center">
              <HandHeart size={24} className="text-white stroke-[2]" />
            </div>
            <div className="inline-flex self-start px-3 py-1 rounded-md bg-white/70 border border-pm-blue/20">
              <span className="text-[0.78rem] font-sans font-bold text-pm-blue uppercase tracking-widest">
                {t('volunteer_label')}
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-slate-900 text-[1.5rem] leading-snug tracking-tight">
              {t('volunteer_heading')}
            </h2>
            <p className="font-sans text-[0.98rem] text-slate-700 leading-relaxed font-normal flex-1">
              {t('volunteer_body')}
            </p>
            <Link
              href="/volunteer"
              className="inline-flex items-center gap-2 self-start px-6 py-3 bg-pm-blue text-white font-sans font-bold text-[0.92rem] rounded-xl hover:bg-pm-blue-dark hover:shadow-md transition-all"
            >
              {t('volunteer_cta')} <ArrowRight size={16} className="stroke-[2.5]" />
            </Link>
          </div>

          {/* Partner card */}
          <div className="bg-slate-900 rounded-2xl p-8 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <Handshake size={24} className="text-amber-300 stroke-[2]" />
            </div>
            <div className="inline-flex self-start px-3 py-1 rounded-md bg-white/10 border border-white/20">
              <span className="text-[0.78rem] font-sans font-bold text-slate-300 uppercase tracking-widest">
                {t('partner_label')}
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-white text-[1.5rem] leading-snug tracking-tight">
              {t('partner_heading')}
            </h2>
            <p className="font-sans text-[0.98rem] text-slate-300 leading-relaxed font-normal flex-1">
              {t('partner_body')}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 self-start px-6 py-3 bg-white text-slate-900 font-sans font-bold text-[0.92rem] rounded-xl hover:bg-slate-100 hover:shadow-md transition-all"
            >
              {t('partner_cta')} <ArrowRight size={16} className="stroke-[2.5]" />
            </Link>
          </div>

        </div>
      </section>

      {/* ── GET IN TOUCH ──────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 lg:py-22">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-pm-blue-light border border-pm-blue/20 mb-3">
            <span className="text-[0.8rem] font-sans font-bold text-pm-blue uppercase tracking-widest">
              {t('contact_label')}
            </span>
          </div>
          <h2
            className="font-heading font-extrabold text-slate-900 mb-3 tracking-tight"
            style={{ fontSize: 'clamp(1.85rem, 3.8vw, 2.75rem)' }}
          >
            {t('contact_heading')}
          </h2>
          <p className="font-sans text-[1.05rem] text-slate-700 mb-12 max-w-xl mx-auto font-normal">
            {t('contact_body')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <ContactCard icon={Phone} label={t('contact_phone')} value="01933-442955" href="tel:01933442955" />
            <ContactCard icon={Mail}  label={t('contact_email')} value="pravasimandal2@btconnect.com" href="mailto:pravasimandal2@btconnect.com" />
            <ContactCard icon={MapPin} label={t('contact_address')} value={`65 Elsden Road\nWellingborough NN8 1QD`} />
          </div>

          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[0.95rem] font-sans font-bold text-pm-blue hover:text-pm-blue-dark hover:underline underline-offset-4 transition-all"
            >
              View full contact details <ArrowRight size={16} className="stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
