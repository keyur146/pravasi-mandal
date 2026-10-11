'use client';

/**
 * EnquiryForm — shared form for Contact and Volunteer pages.
 *
 * Props
 *   variant        'contact' | 'volunteer'
 *   defaultFor     Optional pre-selected dropdown value (from URL deep-link)
 *
 * The `from` field is never rendered; it is injected into the payload by this component.
 * Contact sends `contact_for`, Volunteer sends `volunteering_for` — never both.
 */

import { useEffect, useId, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlertCircle, CheckCircle2, Loader2, RefreshCw, Send } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { postContact } from '../../lib/api';
import {
  CONTACT_FOR_OPTIONS,
  VOLUNTEERING_FOR_OPTIONS,
  FROM,
} from '../../lib/formOptions';

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Strip formatting chars, count only digits */
function countDigits(val) {
  return (val || '').replace(/[\s+\-().]/g, '').replace(/\D/g, '').length;
}

/** Build a Zod schema per variant */
function buildSchema(variant, t) {
  const dropdownKey = variant === 'contact' ? 'contact_for' : 'volunteering_for';
  return z.object({
    name: z
      .string()
      .trim()
      .min(2, t('err_name_short')),
    email: z
      .string()
      .trim()
      .email(t('err_email_invalid')),
    contact_no: z
      .string()
      .trim()
      .refine(
        (v) => {
          const digits = countDigits(v);
          return digits >= 10 && digits <= 15;
        },
        { message: t('err_phone_invalid') }
      ),
    [dropdownKey]: z
      .string()
      .min(1, t('err_dropdown_required'))
      .refine((v) => v !== '__select__', { message: t('err_dropdown_required') }),
    message: z
      .string()
      .trim()
      .min(10, t('err_message_short'))
      .max(1000, t('err_message_long')),
    // honeypot — always empty for real humans
    _hp: z.string().max(0),
  });
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function FieldError({ id, message }) {
  if (!message) return null;
  return (
    <p
      id={id}
      role="alert"
      className="flex items-center gap-1.5 mt-1.5 text-[0.82rem] font-semibold text-rose-600"
    >
      <AlertCircle size={14} className="shrink-0 stroke-[2.5]" />
      {message}
    </p>
  );
}

const inputBase =
  'w-full px-4 bg-white border-2 border-slate-300 rounded-xl font-sans text-[1rem] text-slate-900 ' +
  'placeholder:text-slate-400 outline-none transition-all focus:border-pm-blue focus:ring-2 ' +
  'focus:ring-pm-blue/20 shadow-xs';

const inputInvalid = 'border-rose-400 focus:border-rose-500 focus:ring-rose-200';
const inputValid = 'border-slate-300';

// ─── Main component ──────────────────────────────────────────────────────────

export default function EnquiryForm({ variant = 'contact', defaultFor = '' }) {
  const { t } = useLanguage();
  const uid = useId();
  const id = (name) => `${uid}-${name}`;
  const errId = (name) => `${uid}-${name}-err`;

  const dropdownKey = variant === 'contact' ? 'contact_for' : 'volunteering_for';
  const options = variant === 'contact' ? CONTACT_FOR_OPTIONS : VOLUNTEERING_FOR_OPTIONS;

  const schema = buildSchema(variant, t);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      contact_no: '',
      [dropdownKey]: defaultFor || '',
      message: '',
      _hp: '',
    },
  });

  // Keep defaultFor in sync (e.g. SSR hydration mismatch)
  useEffect(() => {
    // nothing needed — RHF defaultValues is set once; if parent wants to reset it must do so
  }, []);

  const [status, setStatus] = useState('idle'); // 'idle' | 'success' | 'error'
  const [generalError, setGeneralError] = useState('');
  const messageValue = watch('message', '');
  const firstErrorRef = useRef(null);

  // ── Submit ──────────────────────────────────────────────────────────────

  async function onValid(data) {
    setGeneralError('');

    // Honeypot check — pretend success silently
    if (data._hp) {
      setStatus('success');
      return;
    }

    const payload = {
      name: data.name.trim(),
      email: data.email.trim(),
      contact_no: data.contact_no.trim(),
      message: data.message.trim(),
      from: FROM[variant],
      [dropdownKey]: data[dropdownKey],
    };

    try {
      const res = await postContact(payload);

      if (res?.success === false) {
        // Field-level errors from PHP
        if (res.errors && typeof res.errors === 'object') {
          let first = null;
          Object.entries(res.errors).forEach(([field, msg]) => {
            if (schema.shape[field]) {
              setError(field, { message: msg });
              if (!first) first = field;
            }
          });
          if (first) setFocus(first);
          else {
            setGeneralError(res.message || t('err_general'));
          }
        } else {
          setGeneralError(res.message || t('err_general'));
        }
        return;
      }

      setStatus('success');
    } catch (err) {
      setGeneralError(t('err_network'));
    }
  }

  function onInvalid() {
    // Focus first invalid field — RHF does this automatically with setFocus,
    // but let's ensure via refs by reading the first error key
    const firstKey = Object.keys(errors)[0];
    if (firstKey) setFocus(firstKey);
  }

  function handleReset() {
    reset();
    setStatus('idle');
    setGeneralError('');
  }

  // ── Success state ────────────────────────────────────────────────────────

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-8 sm:p-10 text-center space-y-4">
        <div className="flex items-center justify-center">
          <CheckCircle2 size={56} className="text-emerald-500 stroke-[1.8]" />
        </div>
        <h3 className="font-heading font-extrabold text-slate-900 text-xl sm:text-2xl tracking-tight">
          {t('form_success_title')}
        </h3>
        <p className="font-sans text-[1rem] text-slate-700 font-medium leading-relaxed">
          {t('form_success_body')}
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="mt-2 inline-flex items-center gap-2 px-6 py-3.5 bg-pm-blue text-white font-sans
                     text-[0.95rem] font-bold rounded-xl hover:bg-pm-blue-dark transition-colors
                     focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-pm-blue/50"
        >
          <RefreshCw size={16} className="stroke-[2.2]" />
          {t('form_send_another')}
        </button>
      </div>
    );
  }

  // ── Form ─────────────────────────────────────────────────────────────────

  return (
    <form
      onSubmit={handleSubmit(onValid, onInvalid)}
      noValidate
      className="space-y-6"
      aria-label={variant === 'contact' ? t('con_form_heading') : t('vol_form_heading')}
    >
      {/* ── Honeypot (visually hidden) ── */}
      <div aria-hidden="true" className="absolute opacity-0 pointer-events-none h-0 overflow-hidden" tabIndex={-1}>
        <label htmlFor={id('_hp')}>Leave this blank</label>
        <input
          id={id('_hp')}
          type="text"
          autoComplete="off"
          tabIndex={-1}
          {...register('_hp')}
        />
      </div>

      {/* ── Full Name ── */}
      <div className="space-y-1.5">
        <label htmlFor={id('name')} className="block font-sans text-[0.85rem] font-bold text-slate-800 uppercase tracking-wider">
          {t('field_name')} <span className="text-rose-500">*</span>
        </label>
        <input
          id={id('name')}
          type="text"
          autoComplete="name"
          placeholder={t('ph_name')}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? errId('name') : undefined}
          className={`${inputBase} h-[54px] ${errors.name ? inputInvalid : inputValid}`}
          {...register('name')}
        />
        <FieldError id={errId('name')} message={errors.name?.message} />
      </div>

      {/* ── Email ── */}
      <div className="space-y-1.5">
        <label htmlFor={id('email')} className="block font-sans text-[0.85rem] font-bold text-slate-800 uppercase tracking-wider">
          {t('field_email')} <span className="text-rose-500">*</span>
        </label>
        <input
          id={id('email')}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder={t('ph_email')}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? errId('email') : undefined}
          className={`${inputBase} h-[54px] ${errors.email ? inputInvalid : inputValid}`}
          {...register('email')}
        />
        <FieldError id={errId('email')} message={errors.email?.message} />
      </div>

      {/* ── Phone Number ── */}
      <div className="space-y-1.5">
        <label htmlFor={id('contact_no')} className="block font-sans text-[0.85rem] font-bold text-slate-800 uppercase tracking-wider">
          {t('field_phone')} <span className="text-rose-500">*</span>
        </label>
        <input
          id={id('contact_no')}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder={t('ph_phone')}
          aria-invalid={!!errors.contact_no}
          aria-describedby={errors.contact_no ? errId('contact_no') : undefined}
          className={`${inputBase} h-[54px] ${errors.contact_no ? inputInvalid : inputValid}`}
          {...register('contact_no')}
        />
        <FieldError id={errId('contact_no')} message={errors.contact_no?.message} />
      </div>

      {/* ── Dropdown (variant-specific) ── */}
      <div className="space-y-1.5">
        <label htmlFor={id(dropdownKey)} className="block font-sans text-[0.85rem] font-bold text-slate-800 uppercase tracking-wider">
          {variant === 'contact' ? t('field_contact_for') : t('field_volunteering_for')} <span className="text-rose-500">*</span>
        </label>
        <div className="relative">
          <select
            id={id(dropdownKey)}
            aria-invalid={!!errors[dropdownKey]}
            aria-describedby={errors[dropdownKey] ? errId(dropdownKey) : undefined}
            className={`${inputBase} h-[54px] appearance-none pr-10 cursor-pointer ${errors[dropdownKey] ? inputInvalid : inputValid}`}
            {...register(dropdownKey)}
          >
            <option value="" disabled>
              {t('dropdown_select')}
            </option>
            {options.map(({ value, labelKey }) => (
              <option key={value} value={value}>
                {t(labelKey)}
              </option>
            ))}
          </select>
          {/* Custom chevron */}
          <span className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center">
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
        <FieldError id={errId(dropdownKey)} message={errors[dropdownKey]?.message} />
      </div>

      {/* ── Message ── */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor={id('message')} className="block font-sans text-[0.85rem] font-bold text-slate-800 uppercase tracking-wider">
            {t('field_message')} <span className="text-rose-500">*</span>
          </label>
          <span
            className={`font-sans text-[0.78rem] font-semibold tabular-nums ${messageValue.length > 1000 ? 'text-rose-600' : 'text-slate-500'}`}
            aria-live="polite"
          >
            {messageValue.length}/1000
          </span>
        </div>
        <textarea
          id={id('message')}
          rows={5}
          placeholder={t('ph_message')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? errId('message') : undefined}
          className={`${inputBase} py-3.5 resize-y min-h-[120px] ${errors.message ? inputInvalid : inputValid}`}
          {...register('message')}
        />
        <FieldError id={errId('message')} message={errors.message?.message} />
      </div>

      {/* ── General error banner ── */}
      {generalError && (
        <div
          role="alert"
          aria-live="assertive"
          className="flex flex-col gap-3 rounded-xl bg-rose-50 border-2 border-rose-300 p-4"
        >
          <div className="flex items-start gap-3">
            <AlertCircle size={20} className="text-rose-500 shrink-0 mt-0.5 stroke-[2.2]" />
            <p className="font-sans text-[0.9rem] font-semibold text-rose-700 leading-snug">
              {generalError}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 ml-8">
            <button
              type="button"
              onClick={() => setGeneralError('')}
              className="inline-flex items-center gap-1.5 text-[0.85rem] font-bold text-rose-700
                         underline underline-offset-2 hover:text-rose-900 transition-colors"
            >
              <RefreshCw size={13} className="stroke-[2.5]" />
              {t('err_try_again')}
            </button>
            <span className="font-sans text-[0.82rem] text-rose-600">
              {t('err_fallback_phone')}{' '}
              <a href="tel:01933442955" className="font-bold underline underline-offset-2 hover:text-rose-900 transition-colors">
                01933-442955
              </a>
            </span>
          </div>
        </div>
      )}

      {/* ── Submit button ── */}
      <button
        id={id('submit')}
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2.5 py-4 bg-gradient-to-r
                   from-pm-blue to-pm-blue-dark text-white font-sans font-bold text-[1rem] rounded-xl
                   hover:shadow-lg hover:scale-[1.01] transition-all shadow-md
                   disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100
                   focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-pm-blue/50 focus-visible:ring-offset-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin stroke-[2.2]" />
            {t('form_sending')}
          </>
        ) : (
          <>
            <Send size={17} className="stroke-[2.2]" />
            {t('form_submit')}
          </>
        )}
      </button>
    </form>
  );
}
