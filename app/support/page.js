'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Heart, Mail, Send, ShieldCheck, HandHeart,
  Handshake, ArrowRight, Building2,
} from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

const supportingImages = [
  { src: '/assets/img/pixabay-749985.jpg', alt: 'Community members together' },
  { src: '/assets/img/pixabay-541849.jpg', alt: 'People sharing time together' },
  { src: '/assets/img/pixabay-1434787.jpg', alt: 'Community support and connection' },
];

export default function SupportPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main id="main-content" className="bg-slate-50 min-h-screen text-slate-800">

      {/* ── PAGE HERO ─────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0E3D7D] to-slate-950 border-b border-slate-300 py-12 sm:py-16 text-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/15 border border-white/20 mb-3 backdrop-blur-xs">
            <Heart size={14} className="text-rose-300 fill-rose-300/30" />
            <span className="text-[0.8rem] font-sans font-extrabold text-white uppercase tracking-widest">
              {t('support_hero_label')}
            </span>
          </div>
          <h1
            className="font-heading font-extrabold text-white mb-3 tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
          >
            {t('support_hero_heading')}
          </h1>
          <p className="font-sans text-[1.05rem] text-slate-100 max-w-xl leading-relaxed font-medium">
            {t('support_hero_intro')}
          </p>
        </div>
      </section>

      {/* ── WHY DONATIONS MATTER ──────────────────────────────────── */}
      <section className="bg-white border-b border-slate-300 py-14 lg:py-20">
        <div className="max-w-[1050px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-pm-blue-light border border-pm-blue/20 mb-3">
              <span className="text-[0.8rem] font-sans font-bold text-pm-blue uppercase tracking-widest">
                {t('support_why_label')}
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-slate-900 text-2xl lg:text-3xl mb-6 tracking-tight">
              {t('support_why_heading')}
            </h2>
            <div className="space-y-4 font-sans text-[1.02rem] text-slate-700 leading-relaxed">
              <p>{t('support_why_body1')}</p>
              <p>
                {t('support_why_body2')} For further information, please contact us on{' '}
                <strong className="font-extrabold text-slate-900">01933 442955 or 07471 186658</strong>. Email:{' '}
                <a
                  href="mailto:pravasimandal2@btconnect.com"
                  className="font-bold text-pm-blue hover:underline"
                >
                  pravasimandal2@btconnect.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW TO DONATE ─────────────────────────────────────────── */}
      <section className="bg-slate-50 border-b border-slate-300 py-14 lg:py-20">
        <div className="max-w-[1050px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* In-person donation */}
            <div className="bg-white border-2 border-slate-300 rounded-2xl p-7 shadow-2xs flex flex-col gap-4">
              <div className="w-11 h-11 rounded-xl bg-pm-blue-light border border-pm-blue/20 flex items-center justify-center">
                <ShieldCheck size={20} className="text-pm-blue stroke-[2.2]" />
              </div>
              <div className="inline-flex self-start px-3 py-1 rounded-md bg-pm-blue-light border border-pm-blue/20">
                <span className="text-[0.75rem] font-sans font-bold text-pm-blue uppercase tracking-widest">
                  {t('support_donate_label')}
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-slate-900 text-xl leading-snug">
                {t('support_donate_heading')}
              </h2>
              <p className="font-sans text-[0.97rem] text-slate-700 leading-relaxed font-normal flex-1">
                {t('support_donate_body')}
              </p>
            </div>

            {/* Volunteer */}
            <div className="bg-pm-blue-light border-2 border-pm-blue/20 rounded-2xl p-7 shadow-2xs flex flex-col gap-4">
              <div className="w-11 h-11 rounded-xl bg-pm-blue flex items-center justify-center">
                <HandHeart size={20} className="text-white stroke-[2]" />
              </div>
              <div className="inline-flex self-start px-3 py-1 rounded-md bg-white/70 border border-pm-blue/20">
                <span className="text-[0.75rem] font-sans font-bold text-pm-blue uppercase tracking-widest">
                  {t('support_volunteer_label')}
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-slate-900 text-xl leading-snug">
                {t('support_volunteer_heading')}
              </h2>
              <p className="font-sans text-[0.97rem] text-slate-700 leading-relaxed font-normal flex-1">
                {t('support_volunteer_body')}
              </p>
              <Link
                href="/volunteer"
                className="inline-flex items-center gap-2 self-start px-5 py-2.5 bg-pm-blue text-white font-sans font-bold text-[0.88rem] rounded-xl hover:bg-pm-blue-dark transition-all"
              >
                {t('volunteer_cta')} <ArrowRight size={15} className="stroke-[2.5]" />
              </Link>
            </div>

            {/* Business support */}
            <div className="bg-slate-900 rounded-2xl p-7 flex flex-col gap-4">
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                <Building2 size={20} className="text-amber-300 stroke-[2]" />
              </div>
              <div className="inline-flex self-start px-3 py-1 rounded-md bg-white/10 border border-white/20">
                <span className="text-[0.75rem] font-sans font-bold text-slate-300 uppercase tracking-widest">
                  {t('support_business_label')}
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-white text-xl leading-snug">
                {t('support_business_heading')}
              </h2>
              <p className="font-sans text-[0.97rem] text-slate-300 leading-relaxed font-normal flex-1">
                {t('support_business_body')}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 self-start px-5 py-2.5 bg-white text-slate-900 font-sans font-bold text-[0.88rem] rounded-xl hover:bg-slate-100 transition-all"
              >
                {t('partner_cta')} <ArrowRight size={15} className="stroke-[2.5]" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── DONATION FORM ─────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-300 py-14 lg:py-20">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-pm-blue-light border border-pm-blue/20 mb-2">
              <span className="text-[0.8rem] font-sans font-bold text-pm-blue uppercase tracking-widest">
                {t('support_form_label')}
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-slate-900 text-2xl lg:text-3xl tracking-tight">
              {t('support_form_heading')}
            </h2>
          </div>

          <div className="bg-white border-2 border-slate-300 rounded-3xl p-8 sm:p-10 shadow-md">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-pm-blue-light border-2 border-pm-blue flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-pm-blue stroke-[2.5]" />
                </div>
                <h3 className="font-heading font-extrabold text-slate-900 text-2xl mb-2">
                  {t('support_thank_title')}
                </h3>
                <p className="font-sans text-[1.02rem] text-slate-700 font-medium">
                  {t('support_thank_desc')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="support-email" className="block font-sans text-[0.88rem] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    {t('support_email_label')} *
                  </label>
                  <input
                    id="support-email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-300 bg-white font-sans text-[0.97rem] text-slate-900 outline-none focus:border-pm-blue shadow-2xs transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="support-name" className="block font-sans text-[0.88rem] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    {t('support_name_label')} *
                  </label>
                  <input
                    id="support-name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-300 bg-white font-sans text-[0.97rem] text-slate-900 outline-none focus:border-pm-blue shadow-2xs transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="support-city" className="block font-sans text-[0.88rem] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    {t('support_city_label')} *
                  </label>
                  <input
                    id="support-city"
                    name="city"
                    type="text"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-300 bg-white font-sans text-[0.97rem] text-slate-900 outline-none focus:border-pm-blue shadow-2xs transition-colors"
                  />
                </div>
                <fieldset>
                  <legend className="font-sans text-[0.88rem] font-bold text-slate-800 uppercase tracking-wider mb-3">
                    {t('support_amount_label')}
                  </legend>
                  <div className="grid grid-cols-3 gap-3.5">
                    {['£10', '£20', '£50'].map((amount) => (
                      <label key={amount} className="cursor-pointer">
                        <input type="radio" name="amount" value={amount} required className="peer sr-only" />
                        <span className="flex items-center justify-center py-4 rounded-xl border-2 border-slate-300 font-sans font-extrabold text-[1.05rem] text-slate-900 peer-checked:border-pm-blue peer-checked:bg-pm-blue peer-checked:text-white transition-all shadow-2xs">
                          {amount}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-pm-blue to-pm-blue-dark text-white font-sans font-bold text-[0.97rem] rounded-xl hover:shadow-lg transition-all hover:scale-[1.01] shadow-md"
                >
                  <Mail size={17} className="stroke-[2.2]" />
                  {t('support_btn_submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── SUPPORTING IMAGES ─────────────────────────────────────── */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {supportingImages.map((img) => (
              <div
                key={img.src}
                className="relative w-full h-[220px] sm:h-[240px] rounded-2xl overflow-hidden border-2 border-slate-300 shadow-2xs group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
