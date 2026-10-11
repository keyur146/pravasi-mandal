'use client';

/**
 * FloatingContact — sticky bottom-right contact shortcuts.
 * Appears on every page via PublicShell. Collapses to icons only on small
 * screens and expands with labels on md+.
 * 
 * Hides itself for a moment after the page first loads so it doesn't
 * cover page content on mobile.
 */

import { useEffect, useState } from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const PHONE = '01933442955';
const PHONE_DISPLAY = '01933-442955';
const EMAIL = 'pravasimandal2@btconnect.com';
const WHATSAPP_NUMBER = '441933442955'; // E.164 without +
const WHATSAPP_MSG = encodeURIComponent('Hello, I would like to get in touch with Pravasi Mandal.');

const buttons = [
  {
    id: 'float-whatsapp',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`,
    label: 'WhatsApp',
    icon: MessageCircle,
    bg: 'bg-[#25D366] hover:bg-[#1ebe5d]',
    ring: 'focus-visible:ring-[#25D366]/50',
    external: true,
  },
  {
    id: 'float-email',
    href: `mailto:${EMAIL}`,
    label: 'Email Us',
    icon: Mail,
    bg: 'bg-pm-blue hover:bg-pm-blue-dark',
    ring: 'focus-visible:ring-pm-blue/50',
    external: false,
  },
  {
    id: 'float-call',
    href: `tel:${PHONE}`,
    label: PHONE_DISPLAY,
    icon: Phone,
    bg: 'bg-slate-800 hover:bg-slate-700',
    ring: 'focus-visible:ring-slate-500/50',
    external: false,
  },
];

export default function FloatingContact() {
  const [visible, setVisible] = useState(false);

  // Delay appearance slightly so it doesn't flash in during SSR hydration
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      aria-label="Quick contact shortcuts"
      className={`fixed bottom-5 right-4 z-50 flex flex-col items-end gap-2.5
                  transition-all duration-500 ease-out
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`}
    >
      {buttons.map(({ id, href, label, icon: Icon, bg, ring, external }) => (
        <a
          key={id}
          id={id}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          aria-label={label}
          className={`group flex items-center gap-2.5 pl-3 pr-4 py-2.5 rounded-full shadow-lg
                      text-white font-sans font-bold text-[0.82rem] sm:text-[0.85rem]
                      transition-all duration-200 hover:shadow-xl hover:scale-[1.04]
                      focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-offset-2 ${bg} ${ring}
                      max-w-[44px] sm:max-w-none overflow-hidden`}
        >
          <Icon
            size={18}
            className="shrink-0 stroke-[2.2] transition-transform duration-200 group-hover:scale-110"
          />
          {/* Label hidden on very small screens to keep it icon-only */}
          <span className="hidden sm:inline whitespace-nowrap leading-none">{label}</span>
        </a>
      ))}
    </div>
  );
}
