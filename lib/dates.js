// Date helpers. Admin dates may arrive as 2026-11-14, 14/11/2026 (UK) or a full ISO timestamp.

export function parseDate(value) {
  if (!value) return null;
  if (value instanceof Date) return isNaN(value) ? null : value;
  const s = String(value).trim();
  let m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (m) return new Date(+m[1], +m[2] - 1, +m[3]);
  m = s.match(/^(\d{1,2})[/.-](\d{1,2})[/.-](\d{4})/);
  if (m) return new Date(+m[3], +m[2] - 1, +m[1]); // UK day-first
  const d = new Date(s);
  return isNaN(d) ? null : new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

export function startOfToday() {
  const n = new Date();
  return new Date(n.getFullYear(), n.getMonth(), n.getDate());
}

// An event with no usable date stays in "upcoming" so staff notice it and fix it.
export function isUpcoming(dateISO) {
  const d = parseDate(dateISO);
  return !d || d >= startOfToday();
}

const localeFor = (lang) => (lang === 'gu' ? 'gu-IN' : 'en-GB');

export function formatDate(dateISO, lang = 'en') {
  const d = parseDate(dateISO);
  if (!d) return '';
  return new Intl.DateTimeFormat(localeFor(lang), { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(d);
}

export function formatDateShort(dateISO, lang = 'en') {
  const d = parseDate(dateISO);
  if (!d) return null;
  const l = localeFor(lang);
  return {
    day: new Intl.DateTimeFormat(l, { day: 'numeric' }).format(d),
    month: new Intl.DateTimeFormat(l, { month: 'short' }).format(d),
    year: new Intl.DateTimeFormat(l, { year: 'numeric' }).format(d),
  };
}
