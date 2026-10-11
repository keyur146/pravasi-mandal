'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ImageOff } from 'lucide-react';

// Local images (/assets/...) go through next/image. Images uploaded via the admin are on another
// origin, so they use a plain <img> (no per-host config needed). Falls back to a placeholder.
export default function RemoteImage({ src, alt, className = '', sizes = '100vw', priority = false }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pm-blue-light to-slate-100 ${className}`} aria-hidden="true">
        <ImageOff size={30} className="text-pm-blue/40" />
      </div>
    );
  }
  if (src.startsWith('/')) {
    return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${className}`} />;
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} onError={() => setFailed(true)} className={`absolute inset-0 w-full h-full object-cover ${className}`} />;
}
