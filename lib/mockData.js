// Sample data (same shape as the real API) for local development when the admin is not running.
// Enable with NEXT_PUBLIC_USE_MOCK=true in .env.local. Never used otherwise.
const d = (offset) => {
  const x = new Date(); x.setDate(x.getDate() + offset);
  return x.toISOString().slice(0, 10);
};
const row = (id, type, name, description, event_date) => ({ id, type_id: String(id), name, description, type, image: '', event_date, status: 'active', image_url: '' });

export const mockRaw = {
  Event: [
    row(1, 'Event', 'Diwali Celebration', 'Join us for an evening of music, food and celebration.', d(21)),
    row(2, 'Event', 'Community Health & Wellbeing Day', 'Health checks, gentle exercise and advice from local services.', d(7)),
    row(3, 'Event', 'Day Trip to the Coast', 'A relaxed day out for members and families.', d(45)),
    row(4, 'Event', 'Summer Social Afternoon', 'A lovely afternoon together in the hall.', d(-40)),
    row(5, 'Event', 'Garden Planting Morning', 'Planting the first beds of our community garden.', d(-90)),
  ],
  Activity: [
    row(11, 'Activity', 'Group Trip (sample)', 'Sample activity text for local testing only.', d(30)),
    row(12, 'Activity', 'Indoor Games Afternoon', 'Cards, carrom and conversation.', d(3)),
  ],
  Tiffin: [row(21, 'Tiffin', 'Tiffin Service (sample)', 'Sample text for local testing only.', null)],
  Catering: [],
  HallHire: [row(31, 'HallHire', 'Main Hall (sample)', 'Sample text for local testing only.', null)],
  Project: [row(41, 'Project', 'Community Gardening', 'Growing vegetables and friendships together.', d(-30))],
  Partner: [row(51, 'Partner', 'North Northamptonshire Council', 'Working together on community engagement initiatives.', null)],
  News: [row(61, 'News', 'Welcome to our new website', 'We have a new look. Take a look around.', d(-2))],
  Gallery: [],
};
