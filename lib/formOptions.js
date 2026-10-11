// lib/formOptions.js
// Values are sent to contact.php exactly as written. Only labels are translated.

export const CONTACT_FOR_OPTIONS = [
  { value: 'General Enquiry', labelKey: 'cf_general' },
  { value: 'Hall Hire',        labelKey: 'cf_hall_hire' },
  { value: 'Catering',         labelKey: 'cf_catering' },
  { value: 'Tiffin Service',   labelKey: 'cf_tiffin' },
  { value: 'Membership',       labelKey: 'cf_membership' },
  { value: 'Volunteering',     labelKey: 'cf_volunteering' },
];

export const VOLUNTEERING_FOR_OPTIONS = [
  { value: 'Events',                   labelKey: 'vf_events' },
  { value: 'Community Activities',     labelKey: 'vf_activities' },
  { value: 'Gardening',                labelKey: 'vf_gardening' },
  { value: 'Supporting Older Members', labelKey: 'vf_older_members' },
  { value: 'Trips',                    labelKey: 'vf_trips' },
  { value: 'Administration',           labelKey: 'vf_admin' },
  { value: 'Community Outreach',       labelKey: 'vf_outreach' },
];

// Hidden from the UI; added to the payload by each form.
export const FROM = { contact: 'Contact', volunteer: 'Volunteer' };

// Deep-link slug -> option value map for /contact?for=<slug>
export const CONTACT_FOR_SLUG_MAP = {
  'general-enquiry': 'General Enquiry',
  'hall-hire':        'Hall Hire',
  'catering':         'Catering',
  'tiffin-service':   'Tiffin Service',
  'tiffin':           'Tiffin Service',
  'membership':       'Membership',
  'volunteering':     'Volunteering',
};

// Deep-link slug -> option value map for /volunteer?for=<slug>
export const VOLUNTEERING_FOR_SLUG_MAP = {
  'events':                    'Events',
  'community-activities':      'Community Activities',
  'activities':                'Community Activities',
  'gardening':                 'Gardening',
  'supporting-older-members':  'Supporting Older Members',
  'older-members':             'Supporting Older Members',
  'trips':                     'Trips',
  'administration':            'Administration',
  'admin':                     'Administration',
  'community-outreach':        'Community Outreach',
  'outreach':                  'Community Outreach',
};
