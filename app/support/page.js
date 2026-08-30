'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart, Mail, Send } from 'lucide-react';

const supportingImages = [
	{ src: '/assets/img/pixabay-749985.jpg', alt: 'Community members together' },
	{ src: '/assets/img/pixabay-541849.jpg', alt: 'People sharing time together' },
	{ src: '/assets/img/pixabay-1434787.jpg', alt: 'Community support and connection' },
];

export default function SupportPage() {
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
	};

	return (
		<div className="bg-ivory min-h-screen">
			{/* ── PAGE HERO ──────────────────────────────────────── */}
			<section className="bg-pm-blue/90 border-b border-border py-7">
				<div className="max-w-[1200px] mx-auto px-6 lg:px-8">
					<span className="text-[0.78rem] font-sans font-semibold text-white uppercase tracking-widest block mb-1">
						Support Our Work
					</span>
					<h1 className="font-heading font-semibold text-white! mb-4" style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}>
						Support
					</h1>
					<p className="font-sans text-[1rem] text-white max-w-lg leading-relaxed">
						Your generosity helps Pravasi Mandal continue supporting our community.
					</p>
				</div>
			</section>

			{/* ── DONATION ACKNOWLEDGEMENT ───────────────────────── */}
			<section className="bg-white border-b border-border py-12 lg:py-16">
				<div className="max-w-[1000px] mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
						<div>
							<div className="flex items-center gap-2 mb-3">
								<Heart size={16} className="text-pm-blue" />
								<span className="text-[0.75rem] font-sans font-semibold text-pm-blue uppercase tracking-widest">
									Donation Acknowledgement
								</span>
							</div>
							<h2 className="font-heading font-semibold text-charcoal text-2xl lg:text-3xl mb-4">
								In loving memory
							</h2>
							<p className="font-sans text-[1rem] text-warm-gray leading-relaxed">
								Donation received in loving memory of Late Mrs. Sumitraben Vinubhai Patel, Wellingborough, from Mr. Minal Vinubhai Patel and Family.
							</p>
						</div>
						<div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden border border-border shadow-xs">
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
			<section className="bg-sky-mist border-b border-border py-12 lg:py-16">
				<div className="max-w-[1000px] mx-auto px-6 lg:px-8">
					<div className="max-w-3xl">
						<span className="text-[0.75rem] font-sans font-semibold text-pm-blue uppercase tracking-widest block mb-2">
							Why Your Support Matters
						</span>
						<h2 className="font-heading font-semibold text-charcoal text-2xl lg:text-3xl mb-5">
							How you can support the work undertaken by Pravasi Mandal
						</h2>
						<div className="space-y-4 font-sans text-[0.975rem] text-warm-gray leading-relaxed">
							<p>
								The success of Pravasi Mandal has been the coming together of the community and many well-wishers who have given their time and commitment over the years. Without your support we simply would not be able to carry on the great work and seeing the benefits to individuals in our community. Your donation can make a difference and we hope you will continue to support our work.
							</p>
							<p>
								On behalf of the committee members and those using the services, we thank you in advance for your generosity. For further information, please contact us on <strong className="font-semibold text-charcoal">Tel: 01933 442955 or Mobile No. 07471186658</strong>. Email: <a href="mailto:pravasimandal2@btconnect.com" className="font-medium text-pm-blue hover:underline">pravasimandal2@btconnect.com</a>
							</p>
							<p className="font-medium text-charcoal pt-2">
								Thank you in advance for your generosity - on behalf of Committee members of Pravasi Mandal.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ── DONATION INFORMATION ───────────────────────────── */}
			<section className="bg-white border-b border-border py-12">
				<div className="max-w-[1000px] mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						<div className="bg-ivory border border-border rounded-2xl p-6">
							<h2 className="font-heading font-semibold text-charcoal text-xl mb-3">Donation information</h2>
							<p className="font-sans text-[0.95rem] text-warm-gray leading-relaxed">
								<strong className="font-semibold text-charcoal">Note:</strong> There is a Blank Box available in Pravasi Mandal to put the amount you wish to donate.
							</p>
						</div>
						<div className="bg-pm-blue-light border border-border rounded-2xl p-6">
							<h2 className="font-heading font-semibold text-charcoal text-xl mb-3">With appreciation</h2>
							<p className="font-sans text-[0.95rem] text-warm-gray leading-relaxed">
								<strong className="font-semibold text-charcoal">Thanks to Mr. Minal Patel and Family for the support to Pravasi Mandal.</strong>
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ── DONATION FORM ──────────────────────────────────── */}
			<section className="bg-ivory border-b border-border py-12 lg:py-16">
				<div className="max-w-2xl mx-auto px-6 lg:px-8">
					<div className="text-center mb-8">
						<span className="text-[0.75rem] font-sans font-semibold text-pm-blue uppercase tracking-widest block mb-2">Make a difference</span>
						<h2 className="font-heading font-semibold text-charcoal text-2xl lg:text-3xl">You can donate by email consent:</h2>
					</div>

					<div className="bg-white border border-border rounded-2xl p-6 sm:p-8 shadow-xs">
						{submitted ? (
							<div className="text-center py-8">
								<Send size={24} className="text-pm-blue mx-auto mb-3" />
								<h3 className="font-heading font-semibold text-charcoal text-xl mb-2">Thank you for your support</h3>
								<p className="font-sans text-[0.95rem] text-warm-gray">We will be in touch regarding your donation.</p>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-5">
								<div>
									<label htmlFor="support-email" className="block font-sans text-[0.8rem] font-semibold text-charcoal mb-1.5">Your email address</label>
									<input id="support-email" name="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-border bg-white font-sans text-[0.9rem] text-charcoal outline-none focus:border-pm-blue" />
								</div>
								<div>
									<label htmlFor="support-name" className="block font-sans text-[0.8rem] font-semibold text-charcoal mb-1.5">Your Name</label>
									<input id="support-name" name="name" type="text" required className="w-full px-4 py-3 rounded-xl border border-border bg-white font-sans text-[0.9rem] text-charcoal outline-none focus:border-pm-blue" />
								</div>
								<div>
									<label htmlFor="support-city" className="block font-sans text-[0.8rem] font-semibold text-charcoal mb-1.5">City/Post Code</label>
									<input id="support-city" name="city" type="text" required className="w-full px-4 py-3 rounded-xl border border-border bg-white font-sans text-[0.9rem] text-charcoal outline-none focus:border-pm-blue" />
								</div>
								<fieldset>
									<legend className="font-sans text-[0.8rem] font-semibold text-charcoal mb-3">I wish to donate:</legend>
									<div className="grid grid-cols-3 gap-3">
										{['£10', '£20', '£50'].map((amount) => (
											<label key={amount} className="cursor-pointer">
												<input type="radio" name="amount" value={amount} required className="peer sr-only" />
												<span className="flex items-center justify-center py-3 rounded-xl border border-border font-sans font-medium text-[0.9rem] text-charcoal peer-checked:border-pm-blue peer-checked:bg-pm-blue-light peer-checked:text-pm-blue transition-colors">{amount}</span>
											</label>
										))}
									</div>
								</fieldset>
								<button type="submit" className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-pm-blue text-white font-sans font-medium text-[0.9rem] rounded-xl hover:bg-pm-blue-dark transition-colors">
									<Mail size={16} /> Send donation consent
								</button>
							</form>
						)}
					</div>
				</div>
			</section>

			{/* ── SUPPORTING IMAGES ──────────────────────────────── */}
			<section className="bg-white py-12">
				<div className="max-w-[1200px] mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
						{supportingImages.map((image) => (
							<div key={image.src} className="relative w-full h-[220px] sm:h-[240px] rounded-2xl overflow-hidden border border-border">
								<Image src={image.src} alt={image.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover hover:scale-105 transition-transform duration-500 ease-out" />
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
