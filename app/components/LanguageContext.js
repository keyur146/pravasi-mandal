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
