'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { HandHeart, Users, Sprout, Calendar, Globe, Settings, Star } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';
import EnquiryForm from '../components/EnquiryForm';
import { VOLUNTEERING_FOR_SLUG_MAP } from '../../lib/formOptions';

// ── Volunteer opportunity cards ───────────────────────────────────────────────
const opportunities = [
  { icon: Calendar, titleKey: 'vf_events', descKey: 'vf_events_desc' },
  { icon: Users, titleKey: 'vf_activities', descKey: 'vf_activities_desc' },
  { icon: Sprout, titleKey: 'vf_gardening', descKey: 'vf_gardening_desc' },
  { icon: Star, titleKey: 'vf_older_members', descKey: 'vf_older_members_desc' },
  { icon: Globe, titleKey: 'vf_trips', descKey: 'vf_trips_desc' },
  { icon: Settings, titleKey: 'vf_admin', descKey: 'vf_admin_desc' },
  { icon: HandHeart, titleKey: 'vf_outreach', descKey: 'vf_outreach_desc' },
];

// ── Inner component that reads search params ──────────────────────────────────
function VolunteerFormSection() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const forSlug = (searchParams.get('for') || '').toLowerCase();
  const defaultFor = VOLUNTEERING_FOR_SLUG_MAP[forSlug] || '';

  return (
    <div className="bg-white border-2 border-slate-300 rounded-3xl p-5 md:p-8 lg:p-10 shadow-md">
      <h2 className="font-heading font-extrabold text-slate-900 text-2xl mb-2 tracking-tight">
        {t('vol_form_heading')}
      </h2>
      <p className="font-sans text-[0.95rem] text-slate-600 mb-6 font-medium leading-relaxed">
        {t('vol_form_intro')}
      </p>
      <EnquiryForm variant="volunteer" defaultFor={defaultFor} />
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function VolunteerPage() {
  const { t } = useLanguage();

  return (
    <main id="main-content" className="bg-slate-50 min-h-screen text-slate-800">

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0E3D7D] to-slate-950 py-12 sm:py-16 text-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/15 border border-white/20 mb-3">
            <HandHeart size={14} className="text-blue-300" />
            <span className="text-[0.8rem] font-sans font-extrabold text-white uppercase tracking-widest">
              {t('volunteer_label')}
            </span>
          </div>
          <h1 className="font-heading font-extrabold text-white mb-3 tracking-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            {t('volunteer_heading')}
          </h1>
          <p className="font-sans text-[1.05rem] text-slate-100 max-w-xl leading-relaxed font-medium">
            {t('volunteer_body')}
          </p>
        </div>
      </section>

      {/* ── 2. WHY VOLUNTEER ────────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-300 py-14 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-pm-blue-light border border-pm-blue/20 mb-3">
              <span className="text-[0.78rem] font-sans font-bold text-pm-blue uppercase tracking-widest block">
                {t('vol_why_label')}
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-slate-900 text-2xl lg:text-3xl tracking-tight mb-4">
              {t('vol_why_heading')}
            </h2>
            <p className="font-sans text-[1rem] text-slate-600 leading-relaxed">
              {t('vol_why_body')}
            </p>
          </div>

          {/* Opportunity cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {opportunities.map(({ icon: Icon, titleKey, descKey }) => (
              <div
                key={titleKey}
                className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 hover:border-pm-blue hover:shadow-md transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-pm-blue-light border border-pm-blue/20 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-pm-blue stroke-[2]" />
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-[1rem] mb-1.5 tracking-tight">
                  {t(titleKey)}
                </h3>
                <p className="font-sans text-[0.88rem] text-slate-600 leading-relaxed">
                  {t(descKey)}
                </p>
              </div>
            ))}
          </div>

          {/* ── Form ── */}
          <div className="max-w-2xl mx-auto">
            <Suspense fallback={
              <div className="bg-white border-2 border-slate-300 rounded-3xl p-5 md:p-8 lg:p-10 shadow-md animate-pulse h-[500px]" />
            }>
              <VolunteerFormSection />
            </Suspense>
          </div>
        </div>
      </section>

    </main>
  );
}
