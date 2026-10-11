'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// ─── Translation tables ────────────────────────────────────────────────────────
const en = {
  // Nav – top-level
  nav_home: 'Home',
  nav_about: 'About',
  nav_community: 'Community',
  nav_activities: 'Activities',
  nav_services: 'Services',
  nav_events: 'Events',
  nav_gallery: 'Gallery',
  nav_contact: 'Contact',
  nav_support: 'Support Us',
  nav_volunteer: 'Volunteer',
  nav_team: 'Our Team',
  nav_news: 'News',
  nav_services_activities: 'Services & Activities',
  nav_what_we_do: 'What We Do',
  // Nav – About sub-menu
  nav_our_story: 'Our Story',
  nav_our_team: 'Our Team',
  // Nav – Community sub-menu
  nav_projects: 'Projects',
  nav_partners: 'Partners',

  // Hero
  hero_heading: 'Welcome to Pravasi Mandal',
  hero_subheading: 'Bringing People Together Since 1984',
  hero_four_words: 'Connecting People • Celebrating Culture • Supporting Wellbeing • Building Community',
  hero_tagline: 'Bringing People Together Since 1984',
  hero_cta1: 'View Upcoming Events',
  hero_cta2: 'Volunteer With Us',
  hero_cta3: 'Get in Touch',

  // Audience strip
  audience_label: 'Everyone is welcome',
  audience_elders: 'Elders',
  audience_families: 'Families',
  audience_youth: 'Younger Generations',
  audience_volunteers: 'Volunteers',
  audience_partners: 'Community Partners',

  // Our Story
  story_label: 'Who We Are',
  story_heading: 'Our Story',
  story_body: 'Founded in 1984 by a group of Asian elders in Wellingborough who were seeking companionship and cultural connection, Pravasi Mandal has grown into a thriving registered charity serving over 400 members. For four decades we have been Northamptonshire\'s trusted centre for cultural care — providing hot vegetarian meals, transport, health activities, festive celebrations and a warm community hub. Rooted in Asian heritage and open to everyone, we continue to connect generations and support wellbeing across our community.',
  story_cta1: 'Our Activities',
  story_cta2: 'Our Services',

  // Events teaser
  events_label: 'What\'s On',
  events_heading: 'Upcoming Events',
  events_cta: 'View All Events',
  events_none: 'Events coming soon — check back shortly.',

  // Volunteer / Partner teasers
  volunteer_label: 'Get Involved',
  volunteer_heading: 'Volunteer With Us',
  volunteer_body: 'Share your time, skills and energy. Whether you help in the kitchen, run an activity session, or support our admin team, every hour makes a difference.',
  volunteer_cta: 'Become a Volunteer',
  partner_label: 'Work With Us',
  partner_heading: 'Community Partners',
  partner_body: 'We collaborate with local businesses, NHS services and voluntary organisations to extend the support we can offer our community.',
  partner_cta: 'Get in Touch',

  // Donor (kept for Gujarati completeness but removed from homepage)
  donor_label: 'Community Recognition',
  donor_heading: 'Community Recognition',
  donor_body: 'We are grateful to everyone who has supported Pravasi Mandal over the years.',
  donor_cta: 'Support Us',

  // Contact section
  contact_label: 'Reach Out',
  contact_heading: 'Get In Touch',
  contact_body: 'For further information about our services or how to join, contact our friendly team.',
  contact_phone: 'Telephone',
  contact_email: 'Email',
  contact_address: 'Address',

  // Activities page
  act_hero_heading: 'Activities',
  act_what_we_offer: 'What We Offer',
  act_intro: 'We have a range of planned activities, focussing on health and social wellbeing, designed to meet the needs of our members:',
  act_info_label: 'Activity Enquiries',
  act_info_heading: 'Get More Information',
  act_office: 'Office Manager',
  act_mobile: 'Mobile',
  act_hours: 'Availability',
  act_hours_val: 'Between 09:00 – 15:00 hrs (Monday to Friday)',
  act_opening: 'Opening Hours',
  act_opening_val: '9:00 – 15:00 hrs, Monday to Friday',

  // Services page
  svc_hero_heading: 'Services',
  svc_what_we_provide: 'What We Provide',
  svc_our_offering: 'Our Offering',
  svc_subsidised_rates: 'Subsidised Rates',
  svc_intro_heading: 'Our Services',
  svc_intro: 'We offer a purely vegetarian meal that is cooked on the premises. Individual dietary needs are catered for, including diabetic, low fat, and soft diet. Transport is also available to people who cannot walk to the centre or have no other means of transport at subsidised rates. The delivery of meals to social services and to private customers are also made as and when required. All our services are provided at a subsidised rate.',
  svc_table_heading: 'Activities & Pricing',
  svc_col_day: 'Day / Period',
  svc_col_service: 'Activity / Service',
  svc_col_timings: 'Timings',
  svc_col_rate: 'Rate',
  svc_cta_heading: 'Need More Information?',
  svc_cta_body: 'Contact our Office Manager for details about any of our services.',
  svc_call: 'Call Us',
  svc_email_us: 'Email Us',

  // Support page
  support_hero_label: 'Support Our Work',
  support_hero_heading: 'Support Us',
  support_hero_intro: 'Your generosity helps Pravasi Mandal continue connecting and supporting our community.',
  support_why_label: 'Why Your Support Matters',
  support_why_heading: 'How you can support the work undertaken by Pravasi Mandal',
  support_why_body1: 'The success of Pravasi Mandal has been the coming together of the community and many well-wishers who have given their time and commitment over the years. Without your support we simply would not be able to carry on the great work and see the benefits to individuals in our community. Your donation can make a difference and we hope you will continue to support our work.',
  support_why_body2: 'On behalf of the committee members and those using the services, we thank you in advance for your generosity.',
  support_donate_label: 'Make a Donation',
  support_donate_heading: 'How to Donate',
  support_donate_body: 'There is a donations box at the Pravasi Mandal Centre — 65 Elsden Road, Wellingborough NN8 1QD — where you can leave your contribution. You can also contact us by email or telephone to arrange a donation.',
  support_volunteer_label: 'Give Your Time',
  support_volunteer_heading: 'Volunteer With Us',
  support_volunteer_body: 'Volunteering at Pravasi Mandal is one of the most rewarding ways to support the community. From helping with meals to running activity sessions, we welcome all skills.',
  support_business_label: 'Business Support',
  support_business_heading: 'Support as a Business',
  support_business_body: 'Local businesses can support Pravasi Mandal through sponsorship, in-kind donations or by encouraging employee volunteering. Contact us to find out more.',
  support_info_heading: 'Donation Information',
  support_apprec_heading: 'With Appreciation',
  support_form_label: 'Make a Difference',
  support_form_heading: 'You can donate by email consent:',
  support_email_label: 'Your Email Address',
  support_name_label: 'Your Name',
  support_city_label: 'City / Post Code',
  support_amount_label: 'I wish to donate:',
  support_btn_submit: 'Send Donation Request',
  support_thank_title: 'Thank you for your support',
  support_thank_desc: 'We will be in touch regarding your donation.',
  // kept for gu fallback
  support_ack_label: 'Community Recognition',
  support_ack_heading: 'Community Recognition',

  // Gallery page
  gal_hero_heading: 'Gallery',
  gal_label: 'Our Community',
  gal_intro: 'Moments from our community — celebrations, activities, and everyday life at Pravasi Mandal.',

  // Contact page
  con_hero_heading: 'Contact',
  con_hours_heading: 'Opening Times',
  con_visiting_us: 'Visiting Us',
  con_our_org: 'Our Organisation',
  con_life_at_pm: 'Life at Pravasi Mandal',
  con_committee_heading: 'Committee Members',
  con_leadership: 'Leadership',
  con_trustees: 'Holding Trustees',
  con_members: 'Committee Members',
  con_form_heading: 'Send Us a Message',
  con_name: 'Your Name',
  con_email_field: 'Your Email Address',
  con_message: 'Your Message',
  con_send: 'Send Message',
  con_info_heading: 'Contact Information',

  // ─── EnquiryForm — shared field labels & placeholders ───
  field_name: 'Full Name',
  field_email: 'Email Address',
  field_phone: 'Phone Number',
  field_contact_for: 'Contact For',
  field_volunteering_for: 'Volunteering For',
  field_message: 'Message',
  ph_name: 'Your full name',
  ph_email: 'your@email.com',
  ph_phone: 'e.g. 07471 186658 or 9876543210',
  ph_message: 'Please write your message here…',
  dropdown_select: '— Select —',

  // ─── EnquiryForm — Contact For dropdown labels ───
  cf_general:      'General Enquiry',
  cf_hall_hire:    'Hall Hire',
  cf_catering:     'Catering',
  cf_tiffin:       'Tiffin Service',
  cf_membership:   'Membership',
  cf_volunteering: 'Volunteering',

  // ─── EnquiryForm — Volunteering For dropdown labels ───
  vf_events:        'Events',
  vf_activities:    'Community Activities',
  vf_gardening:     'Gardening',
  vf_older_members: 'Supporting Older Members',
  vf_trips:         'Trips',
  vf_admin:         'Administration',
  vf_outreach:      'Community Outreach',

  // ─── EnquiryForm — validation errors ───
  err_name_short:       'Please enter your full name (at least 2 characters).',
  err_email_invalid:    'Please enter a valid email address.',
  err_phone_invalid:    'Please enter a valid phone number (10–15 digits; UK or Indian formats accepted).',
  err_dropdown_required:'Please select an option from the list.',
  err_message_short:    'Please write at least 10 characters.',
  err_message_long:     'Please keep your message under 1000 characters.',
  err_general:          'Something went wrong. Please try again or call our office.',
  err_network:          'We could not send your message — please check your connection and try again.',
  err_try_again:        'Try again',
  err_fallback_phone:   'Or call us on',

  // ─── EnquiryForm — submit / success states ───
  form_submit:       'Send Message',
  form_sending:      'Sending…',
  form_success_title:'Thank you — we\'ll be in touch soon!',
  form_success_body: 'Your message has been received. A member of our team will get back to you as soon as possible.',
  form_send_another: 'Send Another Message',

  // ─── Volunteer page ───
  vol_why_label:   'Why Volunteer?',
  vol_why_heading: 'Make a Real Difference',
  vol_why_body:    'Volunteering at Pravasi Mandal is a wonderful way to give back, meet new people and make a lasting impact in the community.',
  vol_form_heading:'Volunteer Sign-Up',
  vol_form_intro:  'Fill in the form below and we will be in touch to discuss how you can get involved.',

  // ─── Volunteering For — card descriptions ───
  vf_events_desc:       'Help organise and run our community events and celebrations.',
  vf_activities_desc:   'Support members during activity sessions and social gatherings.',
  vf_gardening_desc:    'Join our community gardening project — no experience needed.',
  vf_older_members_desc:'Provide companionship and practical support to our older members.',
  vf_trips_desc:        'Help plan and accompany members on trips and outings.',
  vf_admin_desc:        'Support our admin team with office tasks and communications.',
  vf_outreach_desc:     'Help us reach and connect with the wider community.',

  // Team page
  team_hero_label: 'Our People',
  team_hero_heading: 'Our Team',
  team_hero_intro: 'Meet the dedicated volunteers and committee members who make Pravasi Mandal possible.',
  team_leadership: 'Leadership',
  team_trustees: 'Holding Trustees',
  team_members: 'Committee Members',
  team_founding_label: 'Our Heritage',
  team_founding_heading: 'Founding Members',
  team_founding_body: 'Pravasi Mandal was founded in 1984 by a group of community elders whose vision and dedication created the organisation we are today. We are working with our founding members to document their stories — content coming soon.',
  team_core_label: 'How We Work',
  team_core_heading: 'Core Committee',
  team_core_body: 'Our volunteer committee guides the organisation, ensures good governance and represents the interests of all members. Committee write-up coming soon.',
  team_photo_pending: 'Photo coming soon',

  // Footer
  footer_copy: '© {year} Pravasi Mandal. All rights reserved.',
  footer_quick: 'Quick Links',
  footer_contact: 'Contact',
  footer_hours: 'Opening Hours',
  footer_support_btn: 'Support Us',
  footer_registered_charity: 'Registered Charity · Est. 1984',
  footer_tagline: 'Rooted in Asian Heritage · Open to Everyone',

  // Common
  day_mon: 'Monday',
  day_tue: 'Tuesday',
  day_wed: 'Wednesday',
  day_thu: 'Thursday',
  day_fri: 'Friday',
  day_sat: 'Saturday',
  day_sun: 'Sunday',
  day_closed: 'Closed',
  close_time: '15:00',
  open_time: '09:00',

  // ─── Task 2: data-driven pages (English) ───
  ds_loading: "Loading…",
  ds_empty_call: "Call the office",
  ds_error_title: "We couldn't load this right now",
  ds_error_body: "Please check your connection and try again, or call the office.",
  ds_retry: "Try again",
  ev_page_intro: "Celebrations, trips, gatherings and community events at Pravasi Mandal.",
  ev_upcoming: "Upcoming Events",
  ev_past: "Past Events",
  ev_past_body: "A look back at what we have enjoyed together.",
  ev_none_title: "No upcoming events right now",
  ev_none_body: "New events are added regularly. Please check back soon or call the office.",
  ev_details: "View details",
  ev_view_gallery: "View the gallery",
  ev_back: "Back to all events",
  ev_not_found: "Event not found",
  ev_not_found_body: "This event may have been removed or the link may be incorrect.",
  ev_when: "When",
  ev_time: "Time",
  ev_price: "Price",
  ev_about: "About this event",
  ev_contact: "Contact / Booking",
  ev_enquire: "Make an enquiry",
  ev_whatsapp: "Share on WhatsApp",
  ev_date_tbc: "Date to be confirmed",
  gl_filter: "Filter photos by category",
  gl_all: "All Photos",
  gl_cat_events: "Community Events",
  gl_cat_trips: "Trips & Outings",
  gl_cat_cultural: "Cultural Celebrations",
  gl_cat_health: "Health & Wellbeing",
  gl_cat_projects: "Community Projects",
  gl_cat_life: "Life at Pravasi Mandal",
  gl_empty: "There are no photos in this category yet.",
  gl_close: "Close",
  gl_prev: "Previous photo",
  gl_next: "Next photo",
  ac_areas_heading: "Our Activity Areas",
  ac_areas_note: "Activities change throughout the year. See what is coming up below, or call the office for the latest.",
  ac_health: "Health & Wellbeing",
  ac_health_desc: "Sessions that support physical and mental wellbeing.",
  ac_dance: "Dance & Movement",
  ac_dance_desc: "Dance and gentle movement to keep active and have fun.",
  ac_massage: "Massage & Wellbeing Sessions",
  ac_massage_desc: "Relaxing massage and wellbeing sessions.",
  ac_games: "Indoor Games & Social Activities",
  ac_games_desc: "Games, friendship and good conversation.",
  ac_garden: "Community Gardening",
  ac_garden_desc: "Our community gardening project: grow, learn and enjoy the outdoors together.",
  ac_trips: "Trips & Outings",
  ac_trips_desc: "Days out and visits for members, families and friends.",
  ac_cultural: "Cultural Activities",
  ac_cultural_desc: "Music, festivals and traditions that celebrate our heritage.",
  ac_events: "Community Events",
  ac_events_desc: "Gatherings and celebrations open to the whole community.",
  ac_awareness: "Health & Awareness Sessions",
  ac_awareness_desc: "Talks and information sessions on health and local services.",
  ac_upcoming_label: "What's Coming Up",
  ac_upcoming_heading: "Upcoming Activities",
  ac_view_events: "See all events",
  ac_upcoming_none_title: "Nothing listed right now",
  ac_upcoming_none: "Please call the office to find out what is on this week.",
  ac_timings_note: "Please call or message the office for current activity timings.",
  sv_intro: "Tiffin, catering and hall hire at Pravasi Mandal. Please contact the office to book or to confirm the latest details and prices.",
  sv_jump: "Jump to a service",
  sv_tiffin: "Tiffin Service",
  sv_tiffin_body: "Details of our tiffin service, including prices, are shown below.",
  sv_catering: "Catering",
  sv_catering_body: "Catering for your events and gatherings.",
  sv_hall: "Hall Hire",
  sv_hall_body: "Hire our hall for celebrations, meetings and community events.",
  sv_none_title: "Details are being updated",
  sv_none: "Please contact the office for the latest information and prices.",
  pj_label: "New Initiatives",
  pj_heading: "Community Projects",
  pj_intro: "New ideas and projects taking place at Pravasi Mandal.",
  pj_none_title: "Projects coming soon",
  pj_none: "Our community projects will be shown here soon.",
  pj_cta: "Want to get involved?",
  pt_label: "Working Together",
  pt_heading: "Community Partnerships",
  pt_intro: "We work with councils, organisations and community partners to do more for our community.",
  pt_none_title: "Partnerships coming soon",
  pt_none: "Our current partners will be shown here soon.",
  pt_cta_heading: "Work with us",
  pt_cta_body: "If your organisation would like to work with Pravasi Mandal, we would love to hear from you.",
  pt_cta: "Get in touch",
  nw_intro: "News, announcements and community recognition.",
  nw_recog_label: "Community Recognition",
  nw_recog_heading: "In Loving Memory",
  nw_latest: "Latest News",
  nw_none_title: "No news yet",
  nw_none: "News and announcements will appear here.",
};

// ─── Gujarati translations (human-proofread placeholder) ──────────────────────
// NOTE: All Gujarati text must be proofread by a fluent speaker before going live.
// Machine-translated strings are marked  [MT] in comments — do not ship those.
const gu = {
  // Nav
  nav_home: 'હોમ',
  nav_about: 'અમારા વિશે',
  nav_community: 'સમુદાય',
  nav_activities: 'પ્રવૃત્તિઓ',
  nav_services: 'સેવાઓ',
  nav_events: 'કાર્યક્રમો',
  nav_gallery: 'ગેલેરી',
  nav_contact: 'સંપર્ક',
  nav_support: 'અમને સહાય કરો',
  nav_volunteer: 'સ્વૈચ્છિક સેવા',
  nav_team: 'અમારી ટીમ',
  nav_news: 'સમાચાર',
  nav_services_activities: 'સેવાઓ અને પ્રવૃત્તિઓ',
  nav_what_we_do: 'અમારું કાર્ય',
  nav_our_story: 'અમારી વાર્તા',
  nav_our_team: 'અમારી ટીમ',
  nav_projects: 'પ્રોજેક્ટ્સ',
  nav_partners: 'ભાગીદારો',

  // Hero
  hero_heading: 'પ્રવાસી મંડળમાં આપનું સ્વાગત છે',
  hero_subheading: '૧૯૮૪ થી લોકોને જોડી રહ્યા છીએ',
  hero_four_words: 'લોકોને જોડવા • સંસ્કૃતિ ઉજવવી • સ્વાસ્થ્ય સહાય • સમુદાય નિર્માણ',
  hero_tagline: '૧૯૮૪ થી લોકોને જોડી રહ્યા છીએ',
  hero_cta1: 'આગામી કાર્યક્રમો',
  hero_cta2: 'સ્વૈચ્છિક સેવા',
  hero_cta3: 'સંપર્ક કરો',

  // Audience strip
  audience_label: 'સૌનું સ્વાગત છે',
  audience_elders: 'વડીલો',
  audience_families: 'પરિવારો',
  audience_youth: 'યુવા પેઢી',
  audience_volunteers: 'સ્વયંસેવકો',
  audience_partners: 'સામુદાયિક ભાગીદારો',

  // Our Story
  story_label: 'અમે કોણ છીએ',
  story_heading: 'અમારી વાર્તા',
  story_body: '૧૯૮૪ માં વેલિંગ્બરોના એશિયન વડીલોના એક જૂથ દ્વારા સ્થાપિત, જેઓ સાહચર્ય અને સાંસ્કૃતિક જોડાણ ઇચ્છતા હતા, પ્રવાસી મંડળ ૪૦૦ થી વધુ સભ્યોની સેવા કરતી નોંધાયેલ ચેરિટી બની ગઈ છે. ચાર દાયકાથી અમે નોર્થેમ્પ્ટનશાયરનું વિશ્વસ્ત સાંસ્કૃતિક સંભાળ કેન્દ્ર છીએ.',
  story_cta1: 'અમારી પ્રવૃત્તિઓ',
  story_cta2: 'અમારી સેવાઓ',

  // Events teaser
  events_label: 'શું ચાલે છે',
  events_heading: 'આગામી કાર્યક્રમો',
  events_cta: 'બધા કાર્યક્રમો',
  events_none: 'ટૂંક સમયમાં કાર્યક્રમો — ફરી જુઓ.',

  // Volunteer / Partner
  volunteer_label: 'જોડાઓ',
  volunteer_heading: 'સ્વૈચ્છિક સેવા',
  volunteer_body: 'તમારો સમય, કૌશલ્ય અને ઉત્સાહ શેર કરો. દરેક કલાક ફેર પાડે છે.',
  volunteer_cta: 'સ્વયંસેવક બનો',
  partner_label: 'અમારી સાથે કામ કરો',
  partner_heading: 'સામુદાયિક ભાગીદારો',
  partner_body: 'અમે સ્થાનિક વ્યવસાયો, NHS સેવાઓ અને સ્વૈચ્છિક સંસ્થાઓ સાથે કામ કરીએ છીએ.',
  partner_cta: 'સંપર્ક કરો',

  // Donor (legacy)
  donor_label: 'સામુદાયિક સ્વીકૃતિ',
  donor_heading: 'સામુદાયિક સ્વીકૃતિ',
  donor_body: 'વર્ષોથી અમને સહાય કરનાર દરેકના અમે આભારી છીએ.',
  donor_cta: 'અમને સહાય કરો',

  // Contact
  contact_label: 'સંપર્ક',
  contact_heading: 'સંપર્ક કરો',
  contact_body: 'અમારી સેવાઓ વિશે વધુ માહિતી માટે, અમારી ટીમનો સંપર્ક કરો.',
  contact_phone: 'ટેલિફોન',
  contact_email: 'ઇ-મેઇલ',
  contact_address: 'સરનામું',

  // Activities
  act_hero_heading: 'પ્રવૃત્તિઓ',
  act_what_we_offer: 'અમે શું ઓફર કરીએ છીએ',
  act_intro: 'અમારી પાસે સ્વાસ્થ્ય અને સામાજિક સ્વાસ્થ્ય પર ધ્યાન કેન્દ્રિત કરતી અનેક આયોજિત પ્રવૃત્તિઓ છે:',
  act_info_label: 'પ્રવૃત્તિ જાણકારી',
  act_info_heading: 'વધુ માહિતી મેળવો',
  act_office: 'ઓફિસ મેનેજર',
  act_mobile: 'મોબાઇલ',
  act_hours: 'ઉપલબ્ધતા',
  act_hours_val: 'સોમ–શુક્ર, ૦૯:૦૦ – ૧૫:૦૦',
  act_opening: 'ઓફિસ સમય',
  act_opening_val: 'સોમ–શુક્ર, ૯:૦૦ – ૧૫:૦૦',

  // Services
  svc_hero_heading: 'સેવાઓ',
  svc_what_we_provide: 'અમે શું સેવા આપીએ છીએ',
  svc_our_offering: 'અમારી સેવાઓ',
  svc_subsidised_rates: 'રાહત દરે સેવાઓ',
  svc_intro_heading: 'અમારી સેવાઓ',
  svc_intro: 'અમે સ્થળ પર રાંધવામાં આવેલ શુદ્ધ શાકાહારી ભોજન ઓફર કરીએ છીએ. વ્યક્તિગત આહારની જરૂરિયાતો પૂરી પાડવામાં આવે છે.',
  svc_table_heading: 'પ્રવૃત્તિઓ અને ભાવ',
  svc_col_day: 'દિવસ / સમયગાળો',
  svc_col_service: 'પ્રવૃત્તિ / સેવા',
  svc_col_timings: 'સમય',
  svc_col_rate: 'દર',
  svc_cta_heading: 'વધુ માહિતી જોઈએ છે?',
  svc_cta_body: 'કોઈ પણ સેવા વિશે વિગત માટે અમારા ઓફિસ મેનેજરને સંપર્ક કરો.',
  svc_call: 'ફોન કરો',
  svc_email_us: 'ઇ-મેઇલ',

  // Support
  support_hero_label: 'અમારા કાર્યને સહાય કરો',
  support_hero_heading: 'અમને સહાય કરો',
  support_hero_intro: 'આપની ઉદારતા પ્રવાસી મંડળને સમુદાયને સહાય કરવામાં મદદ કરે છે.',
  support_why_label: 'શા માટે આપનો સહયોગ મહત્વનો છે',
  support_why_heading: 'પ્રવાસી મંડળ દ્વારા કરવામાં આવતા કાર્યોમાં આપ કેવી રીતે સહાય કરી શકો છો',
  support_why_body1: 'સમુદાયના સાથ અને ઘણા શુભેચ્છકોની ભૂમિકા, જેઓ વર્ષો સુધી સમય અને પ્રતિબદ્ધતા આપ્યાં, તેનાથી જ પ્રવાસી મંડળ સફળ રહ્યું છે.',
  support_why_body2: 'સમિતિ સભ્યો અને સેવાઓ ઉપયોગ કરનારાઓ વતી, અમે આપની ઉદારતા માટે આગોતરો આભાર માનીએ છીએ.',
  support_donate_label: 'દાન આપો',
  support_donate_heading: 'કેવી રીતે દાન આપવું',
  support_donate_body: 'પ્રવાસી મંડળ કેન્દ્ર — ૬૫ Elsden Road, Wellingborough NN8 1QD — ખાતે ડોનેશન બોક્સ ઉપલબ્ધ છે.',
  support_volunteer_label: 'સમય આપો',
  support_volunteer_heading: 'સ્વૈચ્છિક સેવા',
  support_volunteer_body: 'ભોજન તૈયાર કરવામાં મદદ કરવી હોય કે પ્રવૃત્તિ સત્ર ચલાવવું — દરેક સ્વયંસેવકનો સ્વાગત છે.',
  support_business_label: 'વ્યાપારિક સહાય',
  support_business_heading: 'વ્યવસાય તરીકે સહાય',
  support_business_body: 'સ્થાનિક વ્યવસાયો પ્રાયોજન, ઇન-કાઇન્ડ દાન અથવા કર્મચારી સ્વૈચ્છિક સેવા દ્વારા સહાય કરી શકે છે.',
  support_info_heading: 'દાન અંગેની માહિતી',
  support_apprec_heading: 'આભાર સાથે',
  support_form_label: 'સહાયરૂપ બનો',
  support_form_heading: 'આપ ઇ-મેઇલ સંમતિ દ્વારા દાન આપી શકો છો:',
  support_email_label: 'ઇ-મેઇલ સરનામું',
  support_name_label: 'આપનું નામ',
  support_city_label: 'શહેર / પોસ્ટ કોડ',
  support_amount_label: 'હું દાન આપવા ઇચ્છું છું:',
  support_btn_submit: 'દાનની વિનંતી મોકલો',
  support_thank_title: 'આભાર',
  support_thank_desc: 'આપના દાન અંગે અમે ટૂંક સમયમાં સંપર્ક કરીશું.',
  support_ack_label: 'સામુદાયિક સ્વીકૃતિ',
  support_ack_heading: 'સામુદાયિક સ્વીકૃતિ',

  // Gallery
  gal_hero_heading: 'ગેલેરી',
  gal_label: 'અમારો સમુદાય',
  gal_intro: 'અમારા સમુદાયની ક્ષણો — ઉત્સવો, પ્રવૃત્તિઓ અને રોજિંદું જીવન.',

  // Contact page
  con_hero_heading: 'સંપર્ક',
  con_hours_heading: 'ઓફિસ સમય',
  con_visiting_us: 'અમારી મુલાકાત',
  con_our_org: 'અમારી સંસ્થા',
  con_life_at_pm: 'પ્રવાસી મંડળ ખાતે જીવન',
  con_committee_heading: 'સમિતિ સભ્યો',
  con_leadership: 'નેતૃત્વ',
  con_trustees: 'હોલ્ડિંગ ટ્રસ્ટીઓ',
  con_members: 'સમિતિ સભ્યો',
  con_form_heading: 'અમને સંદેશ મોકલો',
  con_name: 'આપનું નામ',
  con_email_field: 'ઇ-મેઇલ સરનામું',
  con_message: 'આપનો સંદેશ',
  con_send: 'સંદેશ મોકલો',
  con_info_heading: 'સંપર્ક માહિતી',

  // ─── EnquiryForm — shared field labels & placeholders (DRAFT – needs proofreading) ───
  field_name: 'પૂરું નામ',
  field_email: 'ઇ-મેઇલ સરનામું',
  field_phone: 'ફોન નંબર',
  field_contact_for: 'સંપર્ક માટે',
  field_volunteering_for: 'સ્વૈચ્છિક સેવા માટે',
  field_message: 'સંદેશ',
  ph_name: 'આપનું પૂરું નામ',
  ph_email: 'your@email.com',
  ph_phone: 'દા.ત. 07471 186658 અથવા 9876543210',
  ph_message: 'કૃપા કરીને અહીં આપનો સંદેશ લખો…',
  dropdown_select: '— પસંદ કરો —',

  // ─── EnquiryForm — Contact For dropdown labels (DRAFT) ───
  cf_general:      'સામાન્ય પૂછપરછ',
  cf_hall_hire:    'હોલ ભાડે',
  cf_catering:     'કેટરિંગ',
  cf_tiffin:       'ટિફિન સેવા',
  cf_membership:   'સભ્યપદ',
  cf_volunteering: 'સ્વૈચ્છિક સેવા',

  // ─── EnquiryForm — Volunteering For dropdown labels (DRAFT) ───
  vf_events:        'કાર્યક્રમો',
  vf_activities:    'સામુદાયિક પ્રવૃત્તિઓ',
  vf_gardening:     'બાગકામ',
  vf_older_members: 'વૃદ્ધ સભ્યોને સહાય',
  vf_trips:         'પ્રવાસ',
  vf_admin:         'વહીવટ',
  vf_outreach:      'સામુદાયિક પ્રસાર',

  // ─── EnquiryForm — validation errors (DRAFT) ───
  err_name_short:       'કૃપા કરીને આપનું પૂરું નામ લખો (ઓછામાં ઓછા ૨ અક્ષર).',
  err_email_invalid:    'કૃપા કરીને માન્ય ઇ-મેઇલ સરનામું લખો.',
  err_phone_invalid:    'કૃપા કરીને માન્ય ફોન નંબર લખો (૧૦–૧૫ અંક; UK અથવા ભારતીય ફોર્મેટ સ્વીકૃત).',
  err_dropdown_required:'કૃપા કરીને સૂચિમાંથી એક વિકલ્પ પસંદ કરો.',
  err_message_short:    'કૃપા કરીને ઓછામાં ઓછા ૧૦ અક્ષર લખો.',
  err_message_long:     'કૃપા કરીને આપનો સંદેશ ૧૦૦૦ અક્ષરથી ઓછો રાખો.',
  err_general:          'કંઈક ખોટું થઈ ગયું. કૃપા કરીને ફરી પ્રયાસ કરો અથવા ઓફિસને ફોન કરો.',
  err_network:          'આપનો સંદેશ મોકલી શકાયો નથી — કૃપા કરીને ઇન્ટરનેટ તપાસો અને ફરી પ્રયાસ કરો.',
  err_try_again:        'ફરી પ્રયાસ કરો',
  err_fallback_phone:   'અથવા અમને ફોન કરો',

  // ─── EnquiryForm — submit / success states (DRAFT) ───
  form_submit:       'સંદેશ મોકલો',
  form_sending:      'મોકલી રહ્યા છીએ…',
  form_success_title:'આભાર — અમે ટૂંક સમયમાં સંપર્ક કરીશું!',
  form_success_body: 'આપનો સંદેશ મળ્યો છે. અમારી ટીમ શક્ય તેટલી ઝડપથી આપની સાથે સંપર્ક કરશે.',
  form_send_another: 'બીજો સંદેશ મોકલો',

  // ─── Volunteer page (DRAFT) ───
  vol_why_label:   'શા માટે સ્વૈચ્છિક સેવા?',
  vol_why_heading: 'ખરો ફેર પાડો',
  vol_why_body:    'પ્રવાસી મંડળ ખાતે સ્વૈચ્છિક સેવા — નવા મિત્રો બનાવો અને સમુદાયમાં કાયમી પ્રભાવ છોડો.',
  vol_form_heading:'સ્વૈચ્છિક સેવા નોંધણી',
  vol_form_intro:  'નીચે ફોર્મ ભરો અને અમે આપ કઈ રીતે જોડાઈ શકો તે ચર્ચા કરવા સંપર્ક કરીશું.',

  // ─── Volunteering For — card descriptions (DRAFT) ───
  vf_events_desc:       'અમારા સામુદાયિક કાર્યક્રમો અને ઉત્સવો આયોજિત કરવામાં મદદ કરો.',
  vf_activities_desc:   'પ્રવૃત્તિ સત્રો અને સામાજિક મેળાવડા દરમ્યાન સભ્યોને સહાય કરો.',
  vf_gardening_desc:    'અમારા સામુદાયિક બાગ પ્રોજેક્ટમાં જોડાઓ — અનુભવ જરૂરી નથી.',
  vf_older_members_desc:'અમારા વૃદ્ધ સભ્યોને સાથ અને વ્યવહારુ સહાય આપો.',
  vf_trips_desc:        'સભ્યો સાથે પ્રવાસ અને સહેલગાહ આયોજિત કરવામાં મદદ કરો.',
  vf_admin_desc:        'ઓફિસ કાર્ય અને સંચારમાં અમારી ટીમને સહાય કરો.',
  vf_outreach_desc:     'વ્યાપક સમુદાય સુધી પહોંચવામાં અને જોડવામાં સહાય કરો.',

  // Team page
  team_hero_label: 'અમારા લોકો',
  team_hero_heading: 'અમારી ટીમ',
  team_hero_intro: 'સમર્પિત સ્વયંસેવકો અને સમિતિ સભ્યો જે પ્રવાસી મંડળ ચલાવે છે.',
  team_leadership: 'નેતૃત્વ',
  team_trustees: 'હોલ્ડિંગ ટ્રસ્ટીઓ',
  team_members: 'સમિતિ સભ્યો',
  team_founding_label: 'અમારો વારસો',
  team_founding_heading: 'સ્થાપક સભ્યો',
  team_founding_body: 'પ્રવાસી મંડળ ૧૯૮૪ માં સ્થાપક સભ્યોના સ્વપ્ન અને સમર્પણ દ્વારા આ સ્વરૂપ પ્રાપ્ત કર્યું. — સામગ્રી ટૂંક સમયમાં.',
  team_core_label: 'અમે કેવી રીતે કામ કરીએ',
  team_core_heading: 'મુખ્ય સમિતિ',
  team_core_body: 'અમારી સ્વૈચ્છિક સમિતિ — ટૂંક સમયમાં.',
  team_photo_pending: 'ફોટો ટૂંક સમયમાં',

  // Footer
  footer_copy: '© {year} પ્રવાસી મંડળ. સર્વ હકો સુરક્ષિત.',
  footer_quick: 'ઝડપી લિંક',
  footer_contact: 'સંપર્ક',
  footer_hours: 'ઓફિસ સમય',
  footer_support_btn: 'અમને સહાય કરો',
  footer_registered_charity: 'નોંધાયેલ ચેરિટી · સ્થાપના ૧૯૮૪',
  footer_tagline: 'એશિયન વારસામાં મૂળ · સૌ માટે ખુલ્લું',

  // Common
  day_mon: 'સોમવાર',
  day_tue: 'મંગળવાર',
  day_wed: 'બુધવાર',
  day_thu: 'ગુરુવાર',
  day_fri: 'શુક્રવાર',
  day_sat: 'શનિવાર',
  day_sun: 'રવિવાર',
  day_closed: 'બંધ',
  close_time: '15:00',
  open_time: '09:00',

  // ─── Task 2: data-driven pages (Gujarati – DRAFT, needs proofreading) ───
  ds_loading: "લોડ થઈ રહ્યું છે…",
  ds_empty_call: "ઓફિસને ફોન કરો",
  ds_error_title: "હાલમાં આ લોડ થઈ શક્યું નથી",
  ds_error_body: "કૃપા કરીને આપનું ઇન્ટરનેટ તપાસો અને ફરી પ્રયાસ કરો, અથવા ઓફિસને ફોન કરો.",
  ds_retry: "ફરી પ્રયાસ કરો",
  ev_page_intro: "પ્રવાસી મંડળ ખાતે ઉજવણીઓ, પ્રવાસો, મેળાવડા અને સામુદાયિક કાર્યક્રમો.",
  ev_upcoming: "આગામી કાર્યક્રમો",
  ev_past: "ભૂતકાળના કાર્યક્રમો",
  ev_past_body: "અમે સાથે માણેલી ક્ષણો પર એક નજર.",
  ev_none_title: "હાલમાં કોઈ આગામી કાર્યક્રમ નથી",
  ev_none_body: "નવા કાર્યક્રમો નિયમિત ઉમેરાય છે. કૃપા કરીને થોડા સમય પછી ફરી જુઓ અથવા ઓફિસને ફોન કરો.",
  ev_details: "વિગતો જુઓ",
  ev_view_gallery: "ગેલેરી જુઓ",
  ev_back: "બધા કાર્યક્રમો પર પાછા જાઓ",
  ev_not_found: "કાર્યક્રમ મળ્યો નથી",
  ev_not_found_body: "આ કાર્યક્રમ દૂર કરવામાં આવ્યો હોઈ શકે અથવા લિંક ખોટી હોઈ શકે.",
  ev_when: "ક્યારે",
  ev_time: "સમય",
  ev_price: "કિંમત",
  ev_about: "આ કાર્યક્રમ વિશે",
  ev_contact: "સંપર્ક / બુકિંગ",
  ev_enquire: "પૂછપરછ કરો",
  ev_whatsapp: "વોટ્સએપ પર શેર કરો",
  ev_date_tbc: "તારીખ નક્કી થવાની બાકી છે",
  gl_filter: "શ્રેણી પ્રમાણે ફોટા ગાળો",
  gl_all: "બધા ફોટા",
  gl_cat_events: "સામુદાયિક કાર્યક્રમો",
  gl_cat_trips: "પ્રવાસો અને સહેલગાહ",
  gl_cat_cultural: "સાંસ્કૃતિક ઉજવણીઓ",
  gl_cat_health: "આરોગ્ય અને સુખાકારી",
  gl_cat_projects: "સામુદાયિક પ્રોજેક્ટ્સ",
  gl_cat_life: "પ્રવાસી મંડળ ખાતે જીવન",
  gl_empty: "આ શ્રેણીમાં હજી કોઈ ફોટા નથી.",
  gl_close: "બંધ કરો",
  gl_prev: "પાછલો ફોટો",
  gl_next: "આગલો ફોટો",
  ac_areas_heading: "અમારા પ્રવૃત્તિ ક્ષેત્રો",
  ac_areas_note: "પ્રવૃત્તિઓ વર્ષ દરમ્યાન બદલાતી રહે છે. નીચે આગામી પ્રવૃત્તિઓ જુઓ, અથવા તાજી માહિતી માટે ઓફિસને ફોન કરો.",
  ac_health: "આરોગ્ય અને સુખાકારી",
  ac_health_desc: "શારીરિક અને માનસિક સુખાકારીને ટેકો આપતા સત્રો.",
  ac_dance: "નૃત્ય અને હલનચલન",
  ac_dance_desc: "સક્રિય રહેવા અને આનંદ માણવા માટે નૃત્ય અને હળવી કસરતો.",
  ac_massage: "મસાજ અને સુખાકારી સત્રો",
  ac_massage_desc: "આરામદાયક મસાજ અને સુખાકારી સત્રો.",
  ac_games: "ઇન્ડોર રમતો અને સામાજિક પ્રવૃત્તિઓ",
  ac_games_desc: "રમતો, મિત્રતા અને સારી વાતચીત.",
  ac_garden: "સામુદાયિક બાગકામ",
  ac_garden_desc: "અમારો સામુદાયિક બાગકામ પ્રોજેક્ટ: સાથે મળીને ઉગાડો, શીખો અને ખુલ્લી હવાનો આનંદ માણો.",
  ac_trips: "પ્રવાસો અને સહેલગાહ",
  ac_trips_desc: "સભ્યો, પરિવારો અને મિત્રો માટે પ્રવાસો અને મુલાકાતો.",
  ac_cultural: "સાંસ્કૃતિક પ્રવૃત્તિઓ",
  ac_cultural_desc: "સંગીત, તહેવારો અને પરંપરાઓ જે અમારા વારસાની ઉજવણી કરે છે.",
  ac_events: "સામુદાયિક કાર્યક્રમો",
  ac_events_desc: "સમગ્ર સમુદાય માટે ખુલ્લા મેળાવડા અને ઉજવણીઓ.",
  ac_awareness: "આરોગ્ય અને જાગૃતિ સત્રો",
  ac_awareness_desc: "આરોગ્ય અને સ્થાનિક સેવાઓ વિશે વાર્તાલાપ અને માહિતી સત્રો.",
  ac_upcoming_label: "આગળ શું છે",
  ac_upcoming_heading: "આગામી પ્રવૃત્તિઓ",
  ac_view_events: "બધા કાર્યક્રમો જુઓ",
  ac_upcoming_none_title: "હાલમાં કંઈ નોંધાયેલું નથી",
  ac_upcoming_none: "આ અઠવાડિયે શું છે તે જાણવા કૃપા કરીને ઓફિસને ફોન કરો.",
  ac_timings_note: "પ્રવૃત્તિઓના હાલના સમય માટે કૃપા કરીને ઓફિસને ફોન કરો અથવા સંદેશ મોકલો.",
  sv_intro: "પ્રવાસી મંડળ ખાતે ટિફિન, કેટરિંગ અને હોલ ભાડે. બુકિંગ માટે અથવા તાજી વિગતો અને કિંમતો જાણવા કૃપા કરીને ઓફિસનો સંપર્ક કરો.",
  sv_jump: "સેવા પર જાઓ",
  sv_tiffin: "ટિફિન સેવા",
  sv_tiffin_body: "અમારી ટિફિન સેવાની વિગતો, કિંમતો સહિત, નીચે દર્શાવેલ છે.",
  sv_catering: "કેટરિંગ",
  sv_catering_body: "આપના કાર્યક્રમો અને મેળાવડા માટે કેટરિંગ.",
  sv_hall: "હોલ ભાડે",
  sv_hall_body: "ઉજવણીઓ, બેઠકો અને સામુદાયિક કાર્યક્રમો માટે અમારો હોલ ભાડે મેળવો.",
  sv_none_title: "વિગતો અપડેટ થઈ રહી છે",
  sv_none: "તાજી માહિતી અને કિંમતો માટે કૃપા કરીને ઓફિસનો સંપર્ક કરો.",
  pj_label: "નવી પહેલ",
  pj_heading: "સામુદાયિક પ્રોજેક્ટ્સ",
  pj_intro: "પ્રવાસી મંડળ ખાતે ચાલી રહેલા નવા વિચારો અને પ્રોજેક્ટ્સ.",
  pj_none_title: "પ્રોજેક્ટ્સ ટૂંક સમયમાં",
  pj_none: "અમારા સામુદાયિક પ્રોજેક્ટ્સ ટૂંક સમયમાં અહીં દર્શાવાશે.",
  pj_cta: "જોડાવા માગો છો?",
  pt_label: "સાથે મળીને કામ",
  pt_heading: "સામુદાયિક ભાગીદારી",
  pt_intro: "અમારા સમુદાય માટે વધુ કરવા અમે કાઉન્સિલ, સંસ્થાઓ અને સામુદાયિક ભાગીદારો સાથે કામ કરીએ છીએ.",
  pt_none_title: "ભાગીદારી ટૂંક સમયમાં",
  pt_none: "અમારા હાલના ભાગીદારો ટૂંક સમયમાં અહીં દર્શાવાશે.",
  pt_cta_heading: "અમારી સાથે કામ કરો",
  pt_cta_body: "જો આપની સંસ્થા પ્રવાસી મંડળ સાથે કામ કરવા ઇચ્છતી હોય, તો અમને આપની પાસેથી સાંભળવું ગમશે.",
  pt_cta: "સંપર્ક કરો",
  nw_intro: "સમાચાર, જાહેરાતો અને સામુદાયિક સ્વીકૃતિ.",
  nw_recog_label: "સામુદાયિક સ્વીકૃતિ",
  nw_recog_heading: "પવિત્ર સ્મૃતિમાં",
  nw_latest: "તાજા સમાચાર",
  nw_none_title: "હજી કોઈ સમાચાર નથી",
  nw_none: "સમાચાર અને જાહેરાતો અહીં દેખાશે.",
};

// ─── Context ──────────────────────────────────────────────────────────────────
const translations = { en, gu };
const STORAGE_KEY = 'pm_lang';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('en');

  // Hydrate from localStorage on mount; set document lang attribute
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'gu') {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (newLang) => {
    setLangState(newLang);
    localStorage.setItem(STORAGE_KEY, newLang);
    document.documentElement.lang = newLang;
  };

  const t = (key) => {
    const val = translations[lang]?.[key] ?? translations.en?.[key];
    if (val === undefined) {
      // Missing-key warning — visible in the browser console
      if (typeof window !== 'undefined') {
        console.warn(`[i18n] Missing translation key: "${key}" (lang="${lang}")`);
      }
      return key;
    }
    return val;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
