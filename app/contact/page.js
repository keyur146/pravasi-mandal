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
    <div className="bg-white border border-border rounded-xl p-5 text-left hover:border-pm-blue/30 transition-all duration-200">
      <p className="font-sans text-[0.68rem] font-semibold text-pm-blue uppercase tracking-widest mb-1">{role}</p>
      <p className="font-heading font-medium text-charcoal text-[0.92rem] leading-snug tracking-tight">{name}</p>
    </div>
  );
}

function GroupLabel({ label }) {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-px bg-border/60" />
      <span className="font-sans text-[0.75rem] font-semibold text-warm-gray uppercase tracking-widest px-3 shrink-0">{label}</span>
      <div className="flex-1 h-px bg-border/60" />
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
    <div className="bg-ivory min-h-screen">
      {/* ── 1. CONTACT HERO ────────────────────────────────────────── */}
      <section className="bg-pm-blue/90 border-b border-border py-7">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <span className="text-[0.78rem] font-sans font-semibold text-white uppercase tracking-widest block mb-1">
            Get In Touch
          </span>
          <h1 className="font-heading font-semibold mb-4 text-white!" style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}>
            {t('con_hero_heading')}
          </h1>
          <p className="font-sans text-[1rem] text-white max-w-lg leading-relaxed">{t('contact_body')}</p>
        </div>
      </section>

      {/* ── 2. GET IN TOUCH (DETAILS + FORM) ─────────────────────── */}
      <section className="bg-white border-b border-border py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* LEFT COLUMN: Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-[0.75rem] font-sans font-semibold text-pm-blue uppercase tracking-widest block mb-2">
                  Reach Out
                </span>
                <h2 className="font-heading font-semibold text-charcoal text-2xl lg:text-3xl">
                  {t('con_info_heading')}
                </h2>
                <div className="w-10 h-0.5 bg-pm-blue rounded-full mt-4" />
              </div>

              <div className="space-y-6 pt-2">
                {/* Address Row */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pm-blue-light flex items-center justify-center shrink-0 mt-1">
                    <MapPin size={18} className="text-pm-blue" />
                  </div>
                  <div>
                    <p className="font-sans text-[0.72rem] font-semibold text-warm-gray uppercase tracking-widest mb-1">
                      {t('contact_address')}
                    </p>
                    <p className="font-sans text-[0.95rem] text-charcoal leading-relaxed whitespace-pre-line">
                      Pravasi Mandal{"\n"}65 Elsden Road{"\n"}Wellingborough — NN8 1QD{"\n"}Northamptonshire — UK
                    </p>
                  </div>
                </div>

                {/* Telephone Row */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pm-blue-light flex items-center justify-center shrink-0 mt-1">
                    <Phone size={18} className="text-pm-blue" />
                  </div>
                  <div>
                    <p className="font-sans text-[0.72rem] font-semibold text-warm-gray uppercase tracking-widest mb-1">
                      {t('contact_phone')}
                    </p>
                    <a href="tel:01933442955" className="font-sans text-[0.95rem] font-medium text-charcoal hover:text-pm-blue transition-colors">
                      01933-442955
                    </a>
                  </div>
                </div>

                {/* Email Row */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pm-blue-light flex items-center justify-center shrink-0 mt-1">
                    <Mail size={18} className="text-pm-blue" />
                  </div>
                  <div>
                    <p className="font-sans text-[0.72rem] font-semibold text-warm-gray uppercase tracking-widest mb-1">
                      {t('contact_email')}
                    </p>
                    <a href="mailto:pravasimandal2@btconnect.com" className="font-sans text-[0.95rem] font-medium text-charcoal hover:text-pm-blue transition-colors break-all">
                      pravasimandal2@btconnect.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-border rounded-2xl p-8 lg:p-10 shadow-xs">
                <h3 className="font-heading font-semibold text-charcoal text-xl mb-6">
                  {t('con_form_heading')}
                </h3>

                {submitted ? (
                  <div className="bg-pm-blue-light/50 border border-pm-blue/20 rounded-xl p-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-pm-blue text-white flex items-center justify-center mx-auto text-xl font-bold">
                      ✓
                    </div>
                    <h4 className="font-heading font-semibold text-charcoal text-lg">Thank You!</h4>
                    <p className="font-sans text-[0.9rem] text-warm-gray">
                      Your message has been sent successfully. We will get back to you soon.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                      className="mt-4 inline-flex px-5 py-2.5 bg-pm-blue text-white font-sans text-[0.85rem] font-medium rounded-xl hover:bg-pm-blue-dark transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="font-sans text-[0.8rem] font-semibold text-charcoal uppercase tracking-wider">
                        {t('con_name')}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-ivory border border-border rounded-xl font-sans text-[0.9rem] text-charcoal placeholder:text-warm-gray/50 outline-none focus:border-pm-blue focus:bg-white transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="font-sans text-[0.8rem] font-semibold text-charcoal uppercase tracking-wider">
                        {t('con_email_field')} *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-ivory border border-border rounded-xl font-sans text-[0.9rem] text-charcoal placeholder:text-warm-gray/50 outline-none focus:border-pm-blue focus:bg-white transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-message" className="font-sans text-[0.8rem] font-semibold text-charcoal uppercase tracking-wider">
                        {t('con_message')}
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        placeholder="Please write your message here..."
                        rows={5}
                        className="w-full px-4 py-3 bg-ivory border border-border rounded-xl font-sans text-[0.9rem] text-charcoal placeholder:text-warm-gray/50 outline-none focus:border-pm-blue focus:bg-white transition-all resize-y"
                        value={formData.message}
                        onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                      />
                    </div>

                    <button
                      id="contact-submit"
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-pm-blue text-white font-sans font-medium text-[0.9rem] rounded-xl hover:bg-pm-blue-dark transition-colors duration-200"
                    >
                      <Send size={16} /> {t('con_send')}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. OPENING HOURS ───────────────────────────────────────── */}
      <section className="bg-gray-100 border-b border-border py-12">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-pm-blue mb-3">
            <Clock size={16} />
            <span className="text-[0.78rem] font-sans font-semibold uppercase tracking-widest">
              Visiting Us
            </span>
          </div>
          <h2 className="font-heading font-semibold text-charcoal text-2xl lg:text-3xl mb-10">
            {t('con_hours_heading')}
          </h2>

          <div className="space-y-0 text-left">
            {openingHours.map(({ day_key, open, close }) => (
              <div key={day_key} className="flex items-center justify-between py-4 border-b border-gray-300 text-[0.95rem]">
                <span className="font-sans font-medium text-charcoal">{t(day_key)}</span>
                <span className="font-sans text-warm-gray">{open} – {close}</span>
              </div>
            ))}
            <div className="flex items-center justify-between py-4 text-[0.95rem]">
              <span className="font-sans font-medium text-charcoal">
                {t('day_sat')} &amp; {t('day_sun')}
              </span>
              <span className="font-sans text-warm-gray/60 italic">Closed</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. COMMITTEE SECTION ───────────────────────────────────── */}
      <section className="bg-white border-b border-border py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[0.75rem] font-sans font-semibold text-pm-blue uppercase tracking-widest block mb-2">
              Our Organisation
            </span>
            <h2 className="font-heading font-semibold text-charcoal text-2xl lg:text-3xl">
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
      <section className="">
          <div className="w-full h-[450px] rounded-2xl overflow-hidden border border-border shadow-xs">
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
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[0.75rem] font-sans font-semibold text-pm-blue uppercase tracking-widest block mb-2">
              Our Community
            </span>
            <h2 className="font-heading font-semibold text-charcoal text-2xl lg:text-3xl">
              Life at Pravasi Mandal
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden border border-border">
              <Image
                src="/assets/img/IMG_0387.jpg"
                alt="Community Gathering at Pravasi Mandal"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden border border-border">
              <Image
                src="/assets/img/Pict157.jpg"
                alt="Pravasi Mandal Members Activity"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
