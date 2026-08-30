'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { href: '/',           label: 'Home' },
    { href: '/activities', label: 'Activities' },
    { href: '/services',   label: 'Services' },
    { href: '/gallery',    label: 'Gallery' },
    { href: '/contact',    label: 'Contact' },
    { href: '/support',    label: 'Support Us' },
  ];

  return (
    <footer className="bg-gray-100 border-t border-border font-sans">
      {/* Main */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="relative h-12 w-auto mb-4">
            <Image src="/assets/img/pravasi-mandal-logo.png" alt="Pravasi Mandal" fill sizes="(min-width: 1024px) 240px, 100vw" className="object-cover object-left" />
          </div>
          <address className="not-italic text-[0.875rem] text-warm-gray leading-relaxed">
            65 Elsden Road<br />
            Wellingborough NN8 1QD<br />
            Northamptonshire, UK
          </address>
          <p className="mt-3 text-[0.75rem] text-warm-gray/60">Registered Charity · Est. 1984</p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-charcoal text-[0.95rem] mb-4">Contact</h4>
          <ul className="space-y-3">
            <li>
              <a href="tel:01933442955" className="flex items-center gap-2.5 text-[0.875rem] text-warm-gray hover:text-pm-blue transition-colors">
                <Phone size={14} className="text-pm-blue shrink-0" />
                01933-442955
              </a>
            </li>
            <li>
              <a href="tel:07471186658" className="flex items-center gap-2.5 text-[0.875rem] text-warm-gray hover:text-pm-blue transition-colors">
                <Phone size={14} className="text-pm-blue shrink-0" />
                07471186658
              </a>
            </li>
            <li>
              <a href="mailto:pravasimandal2@btconnect.com" className="flex items-start gap-2.5 text-[0.875rem] text-warm-gray hover:text-pm-blue transition-colors break-all">
                <Mail size={14} className="text-pm-blue shrink-0 mt-[2px]" />
                pravasimandal2@btconnect.com
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-charcoal text-[0.95rem] mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-[0.875rem] text-warm-gray hover:text-pm-blue transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-heading font-semibold text-charcoal text-[0.95rem] mb-4">Opening Hours</h4>
          <div className="flex items-start gap-2.5 mb-3">
            <Clock size={14} className="text-pm-blue shrink-0 mt-[3px]" />
            <div className="text-[0.875rem] text-warm-gray space-y-1.5">
              <p><span className="font-medium text-charcoal">Mon – Fri</span> &nbsp;9:00 – 15:00</p>
              <p><span className="font-medium text-charcoal">Sat – Sun</span> &nbsp;Closed</p>
            </div>
          </div>
          <div className="mt-5">
            <Link
              href="/support"
              className="inline-flex px-5 py-2.5 bg-pm-blue text-white text-[0.875rem] font-medium rounded-lg hover:bg-pm-blue-dark transition-colors"
            >
              Support Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/60">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row gap-2 items-center justify-between">
          <p className="text-[0.8rem] text-warm-gray/60">© {year} Pravasi Mandal. All rights reserved.</p>
          <p className="text-[0.8rem] text-warm-gray/40">Registered Charity · Companionship &amp; Care Since 1984</p>
        </div>
      </div>
    </footer>
  );
}
