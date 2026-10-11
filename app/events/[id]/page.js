import { notFound } from 'next/navigation';
import { getEventById } from '../../../lib/api';
import { formatDate } from '../../../lib/dates';
import EventDetail from './EventDetail';

// Server-rendered so WhatsApp/Facebook crawlers (which don't run JavaScript) see the
// event poster, title and date in the link preview.
export async function generateMetadata({ params }) {
  const { id } = await params;
  let event = null;
  try { event = await getEventById(id); } catch {}
  if (!event) return { title: 'Event — Pravasi Mandal' };

  const title = event.name;
  const when = formatDate(event.event_date, 'en');
  const blurb = (event.description || '').replace(/\s+/g, ' ').slice(0, 160);
  const description = [when, blurb].filter(Boolean).join(' — ');
  const heading = when ? `${title} — ${when}` : title;
  const images = event.image_url ? [{ url: event.image_url, alt: title }] : [{ url: '/assets/img/pravasi-mandal-logo.png' }];

  return {
    title: `${heading} | Pravasi Mandal`,
    description,
    openGraph: { title: heading, description, images, type: 'article', siteName: 'Pravasi Mandal', locale: 'en_GB' },
    twitter: { card: 'summary_large_image', title: heading, description, images: images.map((i) => i.url) },
  };
}

export default async function EventPage({ params }) {
  const { id } = await params;
  let event = null;
  let apiFailed = false;
  try { event = await getEventById(id); } catch { apiFailed = true; }
  // API reachable but no such event -> real 404. If the server couldn't reach the API at all,
  // the client component retries from the browser instead.
  if (!event && !apiFailed) notFound();
  return <EventDetail id={id} initialEvent={event} />;
}
