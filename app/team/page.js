'use client';

import Link from 'next/link';
import { Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

// ─── Committee data (same source as contact/page.js — single source of truth) ─
// Move to a shared data file (e.g. lib/committee.js) in a future refactor.
const leadership = [
  { role: 'Chairman',      name: 'MR. SURESHBHAI M. PATEL' },
  { role: 'Vice Chairman', name: 'MR. VINOD M PATEL' },
  { role: 'Secretary',     name: 'MR. SUNILBHAI MAJITHIA' },
  { role: 'Treasurer',     name: 'MR. DILESH VAGHELA' },
];

const trustees = [
  { role: 'Holding Trustee', name: 'MR. TEJAS PATEL' },
  { role: 'Holding Trustee', name: 'MR. NAINESH MISTRY' },
  { role: 'Holding Trustee', name: 'MR. SUNILBHAI SHAH' },
];

const members = [
  { role: 'Committee Member', name: 'MR. GIRISH PATEL' },
  { role: 'Committee Member', name: 'MR. GULABBHAI KOTECHA' },
  { role: 'Committee Member', name: 'MR. RAJENDRA PATEL' },
  { role: 'Committee Member', name: 'MR. ROHIT PATEL' },
  { role: 'Committee Member', name: 'MRS. RAKSHABEN PATEL' },
  { role: 'Committee Member', name: 'MRS. SUDHABEN PATEL' },
  { role: 'Committee Member', name: 'MRS. SHAKUBEN PATEL' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
/** Derive initials from a full name like "MR. SURESHBHAI M. PATEL" */
function initials(name) {
  const words = name.replace(/^(MR|MRS|MS|DR)\.?\s*/i, '').split(/\s+/);
  return words
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
}

/** Colour palette cycling for avatar backgrounds */
const AVATAR_COLOURS = [
  'bg-pm-blue text-white',
  'bg-slate-700 text-white',
  'bg-pm-blue-dark text-white',
  'bg-charity-gold text-white',
  'bg-slate-900 text-white',
];

function TeamCard({ role, name, photo, index }) {
  const colourClass = AVATAR_COLOURS[index % AVATAR_COLOURS.length];
  const { t } = useLanguage();

  return (
    <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:border-pm-blue hover:shadow-md transition-all duration-200 shadow-2xs">
      {/* Photo or avatar */}
      {photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo}
          alt={name}
          className="w-20 h-20 rounded-full object-cover border-2 border-slate-200"
        />
      ) : (
        <div
          className={`w-20 h-20 rounded-full flex items-center justify-center font-heading font-extrabold text-2xl ${colourClass} border-2 border-white shadow`}
          aria-label={t('team_photo_pending')}
          title={t('team_photo_pending')}
        >
          {initials(name)}
        </div>
      )}

      <div>
        <p className="text-[0.75rem] font-sans font-extrabold text-pm-blue uppercase tracking-widest mb-1">
          {role}
        </p>
        <p className="font-heading font-extrabold text-slate-900 text-[0.98rem] leading-snug tracking-tight">
          {name}
        </p>
      </div>
    </div>
  );
}

function SectionLabel({ label }) {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-0.5 bg-slate-200" />
      <span className="font-sans text-[0.85rem] font-extrabold text-slate-700 uppercase tracking-widest px-3 shrink-0">
        {label}
      </span>
      <div className="flex-1 h-0.5 bg-slate-200" />
    </div>
  );
}

export default function TeamPage() {
  const { t } = useLanguage();

  return (
    <main id="main-content" className="bg-slate-50 min-h-screen text-slate-800">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0E3D7D] to-slate-950 border-b border-slate-300 py-12 sm:py-16 text-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/15 border border-white/20 mb-3 backdrop-blur-xs">
            <Users size={14} className="text-blue-300" />
            <span className="text-[0.8rem] font-sans font-extrabold text-white uppercase tracking-widest">
              {t('team_hero_label')}
            </span>
          </div>
          <h1
            className="font-heading font-extrabold text-white mb-3 tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
          >
            {t('team_hero_heading')}
          </h1>
          <p className="font-sans text-[1.05rem] text-slate-100 max-w-xl leading-relaxed font-medium">
            {t('team_hero_intro')}
          </p>
        </div>
      </section>

      {/* ── COMMITTEE GRID ────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-300 py-14 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-pm-blue-light border border-pm-blue/20 mb-2">
              <span className="text-[0.8rem] font-sans font-bold text-pm-blue uppercase tracking-widest">
                Pravasi Mandal
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-slate-900 text-2xl lg:text-3xl tracking-tight">
              {t('con_committee_heading')}
            </h2>
          </div>

          {/* Leadership */}
          <SectionLabel label={t('team_leadership')} />
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {leadership.map((p, i) => (
              <TeamCard key={p.name} {...p} index={i} />
            ))}
          </div>

          {/* Trustees */}
          <SectionLabel label={t('team_trustees')} />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {trustees.map((p, i) => (
              <TeamCard key={p.name} {...p} index={i + leadership.length} />
            ))}
          </div>

          {/* Members */}
          <SectionLabel label={t('team_members')} />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {members.map((p, i) => (
              <TeamCard key={p.name} {...p} index={i + leadership.length + trustees.length} />
            ))}
          </div>

        </div>
      </section>

      {/* ── FOUNDING MEMBERS (placeholder — awaiting client content) ── */}
      <section className="bg-slate-50 border-b border-slate-300 py-14 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-charity-gold/10 border border-charity-gold/30 mb-3">
                <span className="text-[0.8rem] font-sans font-bold text-charity-gold uppercase tracking-widest">
                  {t('team_founding_label')}
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-slate-900 text-2xl lg:text-3xl mb-4 tracking-tight">
                {t('team_founding_heading')}
              </h2>
              <div className="w-14 h-1 bg-charity-gold mb-5 rounded-full" />
              <p className="font-sans text-[1.02rem] text-slate-700 leading-relaxed">
                {t('team_founding_body')}
              </p>
            </div>
            {/* Old-photos placeholder */}
            <div className="bg-slate-100 border-2 border-dashed border-slate-300 rounded-2xl h-60 flex flex-col items-center justify-center gap-3 text-center p-8">
              <Users size={40} className="text-slate-400" />
              <p className="font-sans text-[0.92rem] font-medium text-slate-500">
                Historic photographs coming soon.<br />
                <span className="text-[0.82rem]">Awaiting client content.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE COMMITTEE WRITE-UP (placeholder) ─────────────────── */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl p-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-pm-blue-light border border-pm-blue/20 mb-3">
              <span className="text-[0.8rem] font-sans font-bold text-pm-blue uppercase tracking-widest">
                {t('team_core_label')}
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-slate-900 text-2xl mb-4 tracking-tight">
              {t('team_core_heading')}
            </h2>
            <p className="font-sans text-[1rem] text-slate-600 leading-relaxed mb-6">
              {t('team_core_body')}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-pm-blue text-white font-sans font-bold text-[0.92rem] rounded-xl hover:bg-pm-blue-dark transition-all"
            >
              Contact Us <ArrowRight size={16} className="stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
