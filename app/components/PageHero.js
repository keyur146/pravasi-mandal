'use client';

export default function PageHero({ icon: Icon, label, heading, body }) {
  return (
    <section className="bg-gradient-to-r from-slate-950 via-[#0E3D7D] to-slate-950 border-b border-slate-300 py-10 sm:py-14 text-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {label && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/15 border border-white/20 mb-3">
            {Icon && <Icon size={14} className="text-blue-300" />}
            <span className="text-[0.8rem] font-sans font-extrabold text-white uppercase tracking-widest">{label}</span>
          </div>
        )}
        <h1 className="font-heading font-extrabold text-white mb-3 tracking-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
          {heading}
        </h1>
        {body && <p className="font-sans text-[1.05rem] text-slate-100 max-w-2xl leading-relaxed font-medium">{body}</p>}
      </div>
    </section>
  );
}
