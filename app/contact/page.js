'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

const openingHours = [
  { day_key: 'day_mon', open: '09:00 am', close: '15:00 pm' },
  { day_key: 'day_tue', open: '09:00 am', close: '15:00 pm' },
  { day_key: 'day_wed', open: '09:00 am', close: '15:00 pm' },
  { day_key: 'day_thu', open: '09:00 am', close: '15:00 pm' },
  { day_key: 'day_fri', open: '09:00 am', close: '15:00 pm' },
];

const leadership = [
  { role: 'Chairman', name: 'MR. SURESHBHAI M. PATEL' },
  { role: 'Vice Chairman', name: 'MR. VINOD M PATEL' },
  { role: 'Secretary', name: 'MR. SUNILBHAI MAJITHIA' },
  { role: 'Treasurer', name: 'MR. DILESH VAGHELA' },
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

function MemberCard({ role, name }) {
  return (
    <div className="bg-white border-2 border-slate-300 rounded-2xl p-5 text-left hover:border-pm-blue hover:shadow-md transition-all duration-200 shadow-2xs">
      <p className="font-sans text-[0.72rem] font-bold text-pm-blue uppercase tracking-widest mb-1.5">{role}</p>
      <p className="font-heading font-extrabold text-slate-900 text-[0.98rem] leading-snug tracking-tight">{name}</p>
    </div>
  );
}

function GroupLabel({ label }) {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-0.5 bg-slate-300" />
      <span className="font-sans text-[0.82rem] font-extrabold text-slate-800 uppercase tracking-widest px-3 shrink-0">{label}</span>
      <div className="flex-1 h-0.5 bg-slate-300" />
    </div>
  );
}

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* ── 1. CONTACT HERO ────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0E3D7D] to-slate-950 border-b border-slate-300 py-10 sm:py-14 text-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/15 border border-white/20 mb-3 backdrop-blur-xs">
            <span className="text-[0.78rem] font-sans font-extrabold text-white uppercase tracking-widest block">
              {t('contact_label')}
            </span>
          </div>
          <h1 className="font-heading font-extrabold mb-3 text-white tracking-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            {t('con_hero_heading')}
          </h1>
          <p className="font-sans text-[1.05rem] text-slate-100 max-w-xl leading-relaxed font-medium">{t('contact_body')}</p>
        </div>
      </section>

      {/* ── 2. GET IN TOUCH (DETAILS + FORM) ─────────────────────── */}
      <section className="bg-white border-b border-slate-300 py-14 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* LEFT COLUMN: Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-pm-blue-light border border-pm-blue/20 mb-3">
                  <span className="text-[0.78rem] font-sans font-bold text-pm-blue uppercase tracking-widest block">
                    {t('contact_label')}
                  </span>
                </div>
                <h2 className="font-heading font-extrabold text-slate-900 text-2xl lg:text-3xl tracking-tight">
                  {t('con_info_heading')}
                </h2>
                <div className="w-14 h-1 bg-pm-blue rounded-full mt-4" />
              </div>

              <div className="space-y-6 pt-2">
                {/* Address Row */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-11 h-11 rounded-xl bg-pm-blue-light border border-pm-blue/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={20} className="text-pm-blue stroke-[2.2]" />
                  </div>
                  <div>
                    <p className="font-sans text-[0.75rem] font-bold text-slate-700 uppercase tracking-widest mb-1">
                      {t('contact_address')}
                    </p>
                    <p className="font-sans text-[0.98rem] font-bold text-slate-900 leading-relaxed whitespace-pre-line">
                      Pravasi Mandal{"\n"}65 Elsden Road{"\n"}Wellingborough — NN8 1QD{"\n"}Northamptonshire — UK
                    </p>
                  </div>
                </div>

                {/* Telephone Row */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-11 h-11 rounded-xl bg-pm-blue-light border border-pm-blue/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={20} className="text-pm-blue stroke-[2.2]" />
                  </div>
                  <div>
                    <p className="font-sans text-[0.75rem] font-bold text-slate-700 uppercase tracking-widest mb-1">
                      {t('contact_phone')}
                    </p>
                    <a href="tel:01933442955" className="font-sans text-[1rem] font-bold text-slate-900 hover:text-pm-blue transition-colors">
                      01933-442955
                    </a>
                  </div>
                </div>

                {/* Email Row */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-11 h-11 rounded-xl bg-pm-blue-light border border-pm-blue/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={20} className="text-pm-blue stroke-[2.2]" />
                  </div>
                  <div>
                    <p className="font-sans text-[0.75rem] font-bold text-slate-700 uppercase tracking-widest mb-1">
                      {t('contact_email')}
                    </p>
                    <a href="mailto:pravasimandal2@btconnect.com" className="font-sans text-[1rem] font-bold text-slate-900 hover:text-pm-blue transition-colors break-all">
                      pravasimandal2@btconnect.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border-2 border-slate-300 rounded-3xl p-8 lg:p-10 shadow-md">
                <h3 className="font-heading font-extrabold text-slate-900 text-2xl mb-6 tracking-tight">
                  {t('con_form_heading')}
                </h3>

                {submitted ? (
                  <div className="bg-blue-50 border-2 border-pm-blue/30 rounded-2xl p-8 text-center space-y-3">
                    <div className="w-14 h-14 rounded-full bg-pm-blue text-white flex items-center justify-center mx-auto text-2xl font-bold">
                      ✓
                    </div>
                    <h4 className="font-heading font-extrabold text-slate-900 text-xl">Thank You!</h4>
                    <p className="font-sans text-[1rem] text-slate-700 font-medium">
                      Your message has been sent successfully. We will get back to you soon.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                      className="mt-4 inline-flex px-6 py-3 bg-pm-blue text-white font-sans text-[0.9rem] font-bold rounded-xl hover:bg-pm-blue-dark transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="font-sans text-[0.82rem] font-bold text-slate-800 uppercase tracking-wider">
                        {t('con_name')} *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3.5 bg-white border-2 border-slate-300 rounded-xl font-sans text-[0.95rem] text-slate-900 placeholder:text-slate-400 outline-none focus:border-pm-blue shadow-2xs transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="font-sans text-[0.82rem] font-bold text-slate-800 uppercase tracking-wider">
                        {t('con_email_field')} *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3.5 bg-white border-2 border-slate-300 rounded-xl font-sans text-[0.95rem] text-slate-900 placeholder:text-slate-400 outline-none focus:border-pm-blue shadow-2xs transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-message" className="font-sans text-[0.82rem] font-bold text-slate-800 uppercase tracking-wider">
                        {t('con_message')} *
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        placeholder="Please write your message here..."
                        rows={5}
                        className="w-full px-4 py-3.5 bg-white border-2 border-slate-300 rounded-xl font-sans text-[0.95rem] text-slate-900 placeholder:text-slate-400 outline-none focus:border-pm-blue shadow-2xs transition-all resize-y"
                        value={formData.message}
                        onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                      />
                    </div>

                    <button
                      id="contact-submit"
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-pm-blue to-pm-blue-dark text-white font-sans font-bold text-[0.95rem] rounded-xl hover:shadow-lg transition-all hover:scale-[1.01] shadow-md"
                    >
                      <Send size={17} className="stroke-[2.2]" /> {t('con_send')}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. OPENING HOURS ───────────────────────────────────────── */}
      <section className="bg-slate-100/70 border-b border-slate-300 py-14">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-pm-blue mb-3 px-3 py-1 bg-pm-blue-light border border-pm-blue/20 rounded-md">
            <Clock size={16} className="stroke-[2.2]" />
            <span className="text-[0.78rem] font-sans font-bold uppercase tracking-widest">
              {t('con_visiting_us')}
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-slate-900 text-2xl lg:text-3xl mb-8 tracking-tight">
            {t('con_hours_heading')}
          </h2>

          <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 sm:p-8 shadow-xs text-left space-y-0">
            {openingHours.map(({ day_key, open, close }) => (
              <div key={day_key} className="flex items-center justify-between py-3.5 border-b border-slate-200 text-[0.95rem]">
                <span className="font-sans font-bold text-slate-900">{t(day_key)}</span>
                <span className="font-sans font-semibold text-slate-700">{open} – {close}</span>
              </div>
            ))}
            <div className="flex items-center justify-between py-3.5 text-[0.95rem]">
              <span className="font-sans font-bold text-slate-900">
                {t('day_sat')} &amp; {t('day_sun')}
              </span>
              <span className="font-sans font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-md border border-rose-200 text-[0.85rem]">{t('day_closed')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. COMMITTEE SECTION ───────────────────────────────────── */}
      <section className="bg-white border-b border-slate-300 py-14 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-pm-blue-light border border-pm-blue/20 mb-2">
              <span className="text-[0.78rem] font-sans font-bold text-pm-blue uppercase tracking-widest block">
                {t('con_our_org')}
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-slate-900 text-2xl lg:text-3xl tracking-tight">
              PRAVASI MANDAL — {t('con_committee_heading')}
            </h2>
          </div>

          {/* Leadership (4 columns) */}
          <GroupLabel label={t('con_leadership')} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {leadership.map((p) => (
              <MemberCard key={p.name} {...p} />
            ))}
          </div>

          {/* Holding Trustees (3 columns) */}
          <GroupLabel label={t('con_trustees')} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {trustees.map((p) => (
              <MemberCard key={p.name} {...p} />
            ))}
          </div>

          {/* Committee Members (4 columns) */}
          <GroupLabel label={t('con_members')} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {members.map((p) => (
              <MemberCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FIND US / MAP ───────────────────────────────────────── */}
      <section className="bg-slate-100 border-b border-slate-300">
        <div className="w-full h-[450px]">
          <iframe
            title="Pravasi Mandal Map Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d156137.2218878361!2d-0.679803!3d52.304314!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877a3cb02585f4f%3A0x2a827697018599a1!2sPravasi%20Mandal%20Centre!5e0!3m2!1sen!2sus!4v1788069019467!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* ── 7. LIFE AT PRAVASI MANDAL (COMMUNITY IMAGES) ───────────── */}
      <section className="bg-slate-50 py-14 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-pm-blue-light border border-pm-blue/20 mb-2">
              <span className="text-[0.78rem] font-sans font-bold text-pm-blue uppercase tracking-widest block">
                {t('gal_label')}
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-slate-900 text-2xl lg:text-3xl tracking-tight">
              {t('con_life_at_pm')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative w-full h-[280px] sm:h-[360px] rounded-2xl overflow-hidden border-2 border-slate-300 shadow-2xs group">
              <Image
                src="/assets/img/IMG_0387.jpg"
                alt="Community Gathering at Pravasi Mandal"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            <div className="relative w-full h-[280px] sm:h-[360px] rounded-2xl overflow-hidden border-2 border-slate-300 shadow-2xs group">
              <Image
                src="/assets/img/Pict157.jpg"
                alt="Pravasi Mandal Members Activity"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
