'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart, Mail, Send, Sparkles, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

const supportingImages = [
	{ src: '/assets/img/pixabay-749985.jpg', alt: 'Community members together' },
	{ src: '/assets/img/pixabay-541849.jpg', alt: 'People sharing time together' },
	{ src: '/assets/img/pixabay-1434787.jpg', alt: 'Community support and connection' },
];

export default function SupportPage() {
	const { t } = useLanguage();
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
	};

	return (
		<div className="bg-slate-50 min-h-screen text-slate-800">
			{/* ── PAGE HERO ──────────────────────────────────────── */}
			<section className="bg-gradient-to-r from-slate-950 via-[#0E3D7D] to-slate-950 border-b border-slate-300 py-10 sm:py-14 text-white relative overflow-hidden">
				<div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/15 border border-white/20 mb-3 backdrop-blur-xs">
						<Heart size={14} className="text-rose-300 fill-rose-300/30" />
						<span className="text-[0.78rem] font-sans font-extrabold text-white uppercase tracking-widest block">
							{t('support_hero_label')}
						</span>
					</div>
					<h1 className="font-heading font-extrabold text-white mb-3 tracking-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
						{t('support_hero_heading')}
					</h1>
					<p className="font-sans text-[1.05rem] text-slate-100 max-w-xl leading-relaxed font-medium">
						{t('support_hero_intro')}
					</p>
				</div>
			</section>

			{/* ── DONATION ACKNOWLEDGEMENT ───────────────────────── */}
			<section className="bg-gradient-to-b from-amber-50/40 via-white to-white border-b border-slate-300 py-14 lg:py-20">
				<div className="max-w-[1050px] mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
						<div>
							<div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100/90 border border-amber-300 mb-3">
								<Heart size={15} className="text-amber-800 fill-amber-700/20 stroke-[2.5]" />
								<span className="text-[0.78rem] font-sans font-extrabold text-amber-900 uppercase tracking-widest">
									{t('support_ack_label')}
								</span>
							</div>
							<h2 className="font-heading font-extrabold text-slate-900 text-3xl lg:text-4xl mb-4 tracking-tight">
								{t('support_ack_heading')}
							</h2>
							<div className="w-14 h-1 bg-amber-500 rounded-full mb-5" />
							<p className="font-sans text-[1.05rem] text-slate-800 leading-relaxed font-normal">
								Donation received in loving memory of Late Mrs. Sumitraben Vinubhai Patel, Wellingborough, from Mr. Minal Vinubhai Patel and Family.
							</p>
						</div>
						<div className="relative w-full h-[300px] sm:h-[360px] rounded-2xl overflow-hidden border-2 border-slate-300 shadow-md bg-white">
							<Image
								src="/assets/img/Minal1--2-.png"
								alt="Minal Patel and family donation acknowledgement"
								fill
								sizes="(min-width: 768px) 50vw, 100vw"
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* ── HOW TO SUPPORT ─────────────────────────────────── */}
			<section className="bg-slate-100/60 border-b border-slate-300 py-14 lg:py-20">
				<div className="max-w-[1050px] mx-auto px-6 lg:px-8">
					<div className="max-w-3xl">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-pm-blue-light border border-pm-blue/20 mb-3">
							<span className="text-[0.78rem] font-sans font-bold text-pm-blue uppercase tracking-widest block">
								{t('support_why_label')}
							</span>
						</div>
						<h2 className="font-heading font-extrabold text-slate-900 text-2xl lg:text-3xl mb-6 tracking-tight">
							{t('support_why_heading')}
						</h2>
						<div className="space-y-4 font-sans text-[1.02rem] text-slate-700 leading-relaxed font-normal">
							<p>
								The success of Pravasi Mandal has been the coming together of the community and many well-wishers who have given their time and commitment over the years. Without your support we simply would not be able to carry on the great work and seeing the benefits to individuals in our community. Your donation can make a difference and we hope you will continue to support our work.
							</p>
							<p>
								On behalf of the committee members and those using the services, we thank you in advance for your generosity. For further information, please contact us on <strong className="font-extrabold text-slate-900">Tel: 01933 442955 or Mobile No. 07471186658</strong>. Email: <a href="mailto:pravasimandal2@btconnect.com" className="font-bold text-pm-blue hover:text-pm-blue-dark hover:underline">pravasimandal2@btconnect.com</a>
							</p>
							<p className="font-bold text-slate-900 pt-2 border-t border-slate-200">
								Thank you in advance for your generosity - on behalf of Committee members of Pravasi Mandal.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ── DONATION INFORMATION ───────────────────────────── */}
			<section className="bg-white border-b border-slate-300 py-14">
				<div className="max-w-[1050px] mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="bg-slate-50 border-2 border-slate-300 rounded-2xl p-7 shadow-2xs">
							<div className="flex items-center gap-2 mb-3">
								<ShieldCheck size={18} className="text-pm-blue stroke-[2.2]" />
								<h2 className="font-heading font-extrabold text-slate-900 text-xl">{t('support_info_heading')}</h2>
							</div>
							<p className="font-sans text-[0.98rem] text-slate-700 leading-relaxed font-normal">
								<strong className="font-extrabold text-slate-900">Note:</strong> There is a Blank Box available in Pravasi Mandal to put the amount you wish to donate.
							</p>
						</div>
						<div className="bg-blue-50/70 border-2 border-pm-blue/30 rounded-2xl p-7 shadow-2xs">
							<div className="flex items-center gap-2 mb-3">
								<Heart size={18} className="text-pm-blue fill-pm-blue/20 stroke-[2.2]" />
								<h2 className="font-heading font-extrabold text-slate-900 text-xl">{t('support_apprec_heading')}</h2>
							</div>
							<p className="font-sans text-[0.98rem] text-slate-800 leading-relaxed font-medium">
								<strong className="font-extrabold text-slate-900">Thanks to Mr. Minal Patel and Family for the support to Pravasi Mandal.</strong>
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ── DONATION FORM ──────────────────────────────────── */}
			<section className="bg-slate-50 border-b border-slate-300 py-14 lg:py-20">
				<div className="max-w-2xl mx-auto px-6 lg:px-8">
					<div className="text-center mb-8">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-pm-blue-light border border-pm-blue/20 mb-2">
							<span className="text-[0.78rem] font-sans font-bold text-pm-blue uppercase tracking-widest block">
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
								<h3 className="font-heading font-extrabold text-slate-900 text-2xl mb-2">{t('support_thank_title')}</h3>
								<p className="font-sans text-[1.02rem] text-slate-700 font-medium">{t('support_thank_desc')}</p>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-5">
								<div>
									<label htmlFor="support-email" className="block font-sans text-[0.82rem] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
										{t('support_email_label')} *
									</label>
									<input id="support-email" name="email" type="email" required className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-300 bg-white font-sans text-[0.95rem] text-slate-900 outline-none focus:border-pm-blue shadow-2xs transition-colors" />
								</div>
								<div>
									<label htmlFor="support-name" className="block font-sans text-[0.82rem] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
										{t('support_name_label')} *
									</label>
									<input id="support-name" name="name" type="text" required className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-300 bg-white font-sans text-[0.95rem] text-slate-900 outline-none focus:border-pm-blue shadow-2xs transition-colors" />
								</div>
								<div>
									<label htmlFor="support-city" className="block font-sans text-[0.82rem] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
										{t('support_city_label')} *
									</label>
									<input id="support-city" name="city" type="text" required className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-300 bg-white font-sans text-[0.95rem] text-slate-900 outline-none focus:border-pm-blue shadow-2xs transition-colors" />
								</div>
								<fieldset>
									<legend className="font-sans text-[0.82rem] font-bold text-slate-800 uppercase tracking-wider mb-3">
										{t('support_amount_label')}
									</legend>
									<div className="grid grid-cols-3 gap-3.5">
										{['£10', '£20', '£50'].map((amount) => (
											<label key={amount} className="cursor-pointer">
												<input type="radio" name="amount" value={amount} required className="peer sr-only" />
												<span className="flex items-center justify-center py-3.5 rounded-xl border-2 border-slate-300 font-sans font-extrabold text-[1.05rem] text-slate-900 peer-checked:border-pm-blue peer-checked:bg-pm-blue peer-checked:text-white transition-all shadow-2xs">{amount}</span>
											</label>
										))}
									</div>
								</fieldset>
								<button type="submit" className="w-full inline-flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-pm-blue to-pm-blue-dark text-white font-sans font-bold text-[0.95rem] rounded-xl hover:shadow-lg transition-all hover:scale-[1.01] shadow-md">
									<Mail size={17} className="stroke-[2.2]" /> {t('support_btn_submit')}
								</button>
							</form>
						)}
					</div>
				</div>
			</section>

			{/* ── SUPPORTING IMAGES ──────────────────────────────── */}
			<section className="bg-white py-14">
				<div className="max-w-[1200px] mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
						{supportingImages.map((image) => (
							<div key={image.src} className="relative w-full h-[220px] sm:h-[240px] rounded-2xl overflow-hidden border-2 border-slate-300 shadow-2xs group">
								<Image src={image.src} alt={image.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
