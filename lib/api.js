// Website → admin API client. Works on the server and in the browser.
//
// Real response shapes (from the admin project):
//   GET {API}/type.php?type=Event&limit=3
//     { success, count, type, limit, data: [{ id, type_id, name, description, type, image,
//                                             event_date, status, image_url }] }
//   GET {API}/gallery.php?limit=5
//     { success, limit, count, data: [{ id, gallery_name, image, image_url, created_at }] }
//   POST {API}/contact.php
//     { name, email, contact_no, message, from: 'Contact' | 'Volunteer', volunteering_for? }
//
// Items are used exactly as the API returns them – no field mapping.

import { mockRaw } from './mockData';
import { parseDate, isUpcoming } from './dates';

export const API_BASE = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost/PravasiMandalAdmin/api').replace(/\/+$/, '');
const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === 'true';

// `type=` values sent to type.php. "Event" and "Activity" are confirmed; the rest are assumed
// names – if the admin uses different ones, change them here only.
export const TYPES = {
  event: 'Event',
  activity: 'Activity',
};

async function request(path, { revalidate, method = 'GET', body } = {}) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 10000);
  try {
    const init = { method, headers: { Accept: 'application/json' }, signal: ctrl.signal };
    if (body) { init.body = JSON.stringify(body); init.headers['Content-Type'] = 'application/json'; }
    if (revalidate !== undefined) init.next = { revalidate }; else init.cache = 'no-store';
    const res = await fetch(`${API_BASE}/${path}`, init);
    if (!res.ok) throw new Error(`API ${res.status}`);
    const json = await res.json();
    if (json && json.success === false) throw new Error(json.message || 'API reported failure');
    return json;
  } finally {
    clearTimeout(timer);
  }
}

// Only show content staff have left switched on.
const active = (rows) => (rows || []).filter((r) => !r.status || r.status === 'active');

export async function getItems(type, { limit = 50, revalidate } = {}) {
  if (USE_MOCK) return active(mockRaw[type]);
  const json = await request(`type.php?type=${encodeURIComponent(type)}&limit=${limit}`, { revalidate });
  return active(json.data);
}

export const getEvents = (opts) => getItems(TYPES.event, opts);

export async function getGallery({ limit = 200, revalidate } = {}) {
  if (USE_MOCK) return mockRaw.Gallery || [];
  const json = await request(`gallery.php?limit=${limit}`, { revalidate });
  return (json.data || []).filter((g) => g.image_url);
}

// Used server-side for share previews.
export async function getEventById(id) {
  const events = await getEvents({ limit: 200, revalidate: 60 });
  return events.find((e) => String(e.id) === String(id)) || null;
}

export async function postContact(payload) {
  if (USE_MOCK) return { success: true };
  return request('contact.php', { method: 'POST', body: payload });
}

// Soonest first for upcoming, most recent first for past.
export function splitEvents(events) {
  const time = (e) => parseDate(e.event_date)?.getTime() || 0;
  const upcoming = events.filter((e) => isUpcoming(e.event_date)).sort((a, b) => time(a) - time(b));
  const past = events.filter((e) => !isUpcoming(e.event_date)).sort((a, b) => time(b) - time(a));
  return { upcoming, past };
}
