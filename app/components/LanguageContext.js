'use client';

import { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    // Nav
    nav_home: 'Home',
    nav_activities: 'Activities',
    nav_services: 'Services',
    nav_gallery: 'Gallery',
    nav_contact: 'Contact',
    nav_support: 'Support Us',

    // Home
    hero_heading: 'Welcome to Pravasi Mandal',
    hero_tagline: 'Companionship and care for our elders since 1984',
    hero_cta1: 'Our Activities',
    hero_cta2: 'Get In Touch',

    story_label: 'Who We Are',
    story_heading: 'Our Story',
    story_body: 'Established in 1984 by Asian elders seeking companionship, we have grown into a professional registered charity catering for over 400 members. We are proud to be a sole provider in Northamptonshire specializing in cultural care services. Our staff and volunteers are committed to addressing specific cultural needs and providing a high-quality supportive environment.',

    donor_label: 'Community Recognition',
    donor_heading: 'Best Donor of the Year',
    donor_body: 'We need your support at all times. Thank you very much on behalf of the Pravasi Mandal Committee members.',
    donor_cta: 'Support Us',

    contact_label: 'Reach Out',
    contact_heading: 'Get In Touch',
    contact_body: 'For further information about our services or how to join, contact our friendly team.',
    contact_phone: 'Telephone',
    contact_email: 'Email',
    contact_address: 'Address',

    // Activities
    act_hero_heading: 'Activities',
    act_intro: 'We have a range of planned activities, focussing on health and social wellbeing, designed to meet the needs of our members:',
    act_info_label: 'Activity Enquiries',
    act_info_heading: 'Get More Information',
    act_office: 'Office Manager',
    act_mobile: 'Mobile',
    act_hours: 'Availability',
    act_hours_val: 'Between 16:30 – 15:00 hrs (Monday to Friday)',
    act_opening: 'Opening Hours',
    act_opening_val: '9:00 – 15:00 hrs, Monday to Friday',

    // Services
    svc_hero_heading: 'Services',
    svc_intro_heading: 'Our Services',
    svc_intro: 'We offer a purely vegetarian meal that is cooked on the premises. Individual dietary needs are catered for, including diabetic, low fat, and soft diet. Transport is also available to people who cannot walk to the centre or have no other means of transport at subsidised rates. The delivery of meals to social services and to private customers are also made as and when required. All our services are provided at a subsidised rate.',
    svc_table_heading: 'Activities & Pricing',
    svc_cta_heading: 'Need More Information?',
    svc_cta_body: 'Contact our Office Manager for details about any of our services.',
    svc_call: 'Call Us',
    svc_email_us: 'Email Us',

    // Gallery
    gal_hero_heading: 'Gallery',
    gal_intro: 'Moments from our community — celebrations, activities, and everyday life at Pravasi Mandal.',

    // Contact
    con_hero_heading: 'Contact',
    con_hours_heading: 'Opening Times',
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

    // Footer
    footer_copy: '© 2026 Pravasi Mandal. All rights reserved.',
    footer_quick: 'Quick Links',
    footer_contact: 'Contact',
    footer_covid: 'COVID-19 Updates',

    // Common
    day_mon: 'Monday',
    day_tue: 'Tuesday',
    day_wed: 'Wednesday',
    day_thu: 'Thursday',
    day_fri: 'Friday',
    day_sat: 'Saturday',
    day_sun: 'Sunday',
    close_time: '15:00 pm',
    open_time: '09:00 am',
  },

  gu: {
    // Nav
    nav_home: 'હોમ',
    nav_activities: 'પ્રવૃત્તિઓ',
    nav_services: 'સેવાઓ',
    nav_gallery: 'ગેલેરી',
    nav_contact: 'સંપર્ક',
    nav_support: 'અમને સહાય કરો',

    // Home
    hero_heading: 'પ્રવાસી મંડળમાં આપનું સ્વાગત છે',
    hero_tagline: '૧૯૮૪ થી આપણા વડીલો માટે સાહચર્ય અને સંભાળ',
    hero_cta1: 'અમારી પ્રવૃત્તિઓ',
    hero_cta2: 'સંપર્ક કરો',

    story_label: 'અમે કોણ છીએ',
    story_heading: 'અમારી વાર્તા',
    story_body: '૧૯૮૪ માં સાહચર્ય ઇચ્છતા એશિયન વડીલો દ્વારા સ્થાપિત, અમે ૪૦૦ થી વધુ સભ્યો માટે સેવા આપતી નોંધાયેલ ચેરિટી બની ગઈ છીએ. અમે નોર્થેમ્પ્ટનશાયરમાં સાંસ્કૃતિક સંભાળ સેવાઓ પ્રદાન કરનારા એકમાત્ર સેવા-પ્રદાતા હોવા પર ગૌરવ અનુભવીએ છીએ.',

    donor_label: 'સામુદાયિક સ્વીકૃતિ',
    donor_heading: 'વર્ષના શ્રેષ્ઠ દાતા',
    donor_body: 'અમને હંમેશા આપના સહયોગની જરૂર છે. પ્રવાસી મંડળ સમિતિ વતી આપનો ખૂબ ખૂબ આભાર.',
    donor_cta: 'અમને સહાય કરો',

    contact_label: 'સંપર્ક',
    contact_heading: 'સંપર્ક કરો',
    contact_body: 'અમારી સેવાઓ અથવા જોડાવા વિશે વધુ માહિતી માટે, અમારી ટીમનો સંપર્ક કરો.',
    contact_phone: 'ટેલિફોન',
    contact_email: 'ઇ-મેઇલ',
    contact_address: 'સરનામું',

    // Activities
    act_hero_heading: 'પ્રવૃત્તિઓ',
    act_intro: 'અમારી પાસે સ્વાસ્થ્ય અને સામાજિક સ્વાસ્થ્ય પર ધ્યાન કેન્દ્રિત કરતી અનેક આયોજિત પ્રવૃત્તિઓ છે:',
    act_info_label: 'પ્રવૃત્તિ જાણકારી',
    act_info_heading: 'વધુ માહિતી મેળવો',
    act_office: 'ઓફિસ મેનેજર',
    act_mobile: 'મોબાઇલ',
    act_hours: 'ઉપલબ્ધતા',
    act_hours_val: 'સોમ–શુક્ર, ૧૬:૩૦ – ૧૫:૦૦ hrs',
    act_opening: 'ઓફિસ સમય',
    act_opening_val: 'સોમ–શુક્ર, ૯:૦૦ – ૧૫:૦૦ hrs',

    // Services
    svc_hero_heading: 'સેવાઓ',
    svc_intro_heading: 'અમારી સેવાઓ',
    svc_intro: 'અમે સ્થળ પર રાંધવામાં આવેલ શુદ્ધ શાકાહારી ભોજન ઓફર કરીએ છીએ. ડાયાબિટીક, ઓછી ચરબી અને મૃદુ આહાર સહિત વ્યક્તિગત આહારની જરૂরિયાતો પૂરી પાડવામાં આવે છે.',
    svc_table_heading: 'પ્રવૃત્તિઓ અને ભાવ',
    svc_cta_heading: 'વધુ માહિતી જોઈએ છે?',
    svc_cta_body: 'કોઈ પણ સેવા વિશે વિગત માટે અમારા ઓફિસ મેનેજરને સંપર્ક કરો.',
    svc_call: 'ફોન કરો',
    svc_email_us: 'ઇ-મેઇલ',

    // Gallery
    gal_hero_heading: 'ગેલેરી',
    gal_intro: 'અમારા સમુદાયની ક્ષણો — ઉત્સવો, પ્રવૃત્તિઓ અને પ્રવાસી મંડળ ખાતે રોજિંદું જીવન.',

    // Contact
    con_hero_heading: 'સંપર્ક',
    con_hours_heading: 'ઓફિસ સમય',
    con_committee_heading: 'સમિતિ સભ્યો',
    con_leadership: 'નેતૃત્વ',
    con_trustees: 'ટ્રસ્ટીઓ',
    con_members: 'સમિતિ સભ્યો',
    con_form_heading: 'અમને સંદેશ મોકલો',
    con_name: 'આપનું નામ',
    con_email_field: 'ઇ-મેઇલ સરનામું',
    con_message: 'આપનો સંદેશ',
    con_send: 'સંદેશ મોકલો',
    con_info_heading: 'સંપર્ક માહિતી',

    // Footer
    footer_copy: '© ૨૦૨૬ પ્રવાસી મંડળ. સર્વ હકો સુરક્ષિત.',
    footer_quick: 'ઝડપી લિંક',
    footer_contact: 'સંપર્ક',
    footer_covid: 'COVID-19 અપડેટ',

    // Common
    day_mon: 'સોમવાર',
    day_tue: 'મંગળવાર',
    day_wed: 'બુધવાર',
    day_thu: 'ગુરુવાર',
    day_fri: 'શુક્રવાર',
    day_sat: 'શનિવાર',
    day_sun: 'રવિવાર',
    close_time: '15:00 pm',
    open_time: '09:00 am',
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const t = (key) => translations[lang]?.[key] ?? translations.en[key] ?? key;
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
