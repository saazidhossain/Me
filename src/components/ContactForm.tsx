import { useState, useCallback, useId } from 'react';

/* ─── Types ─────────────────────────────────────────────────────────────────── */
interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

/* ─── Validation helpers ────────────────────────────────────────────────────── */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MESSAGE_MAX = 1000;

function validateFields(fields: FormFields): FormErrors {
  const errors: FormErrors = {};

  if (!fields.name.trim()) {
    errors.name = 'Name is required.';
  } else if (fields.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  } else if (fields.name.trim().length > 80) {
    errors.name = 'Name must be 80 characters or fewer.';
  }

  if (!fields.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!EMAIL_RE.test(fields.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!fields.subject.trim()) {
    errors.subject = 'Subject is required.';
  } else if (fields.subject.trim().length < 4) {
    errors.subject = 'Subject must be at least 4 characters.';
  }

  if (!fields.message.trim()) {
    errors.message = 'Message is required.';
  } else if (fields.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters.';
  } else if (fields.message.trim().length > MESSAGE_MAX) {
    errors.message = `Message must be ${MESSAGE_MAX} characters or fewer.`;
  }

  return errors;
}

/* ─── Sub-components ────────────────────────────────────────────────────────── */
interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  touched?: boolean;
  hint?: string;
  children: React.ReactNode;
}

function FormField({ id, label, required, error, touched, hint, children }: FieldProps) {
  const showError = touched && error;
  return (
    <div className="form-group" style={{ marginBottom: 0 }}>
      <label
        htmlFor={id}
        className="form-label"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        {label}
        {required && <span className="required" aria-hidden="true" style={{ color: 'var(--error)', marginLeft: 2 }}>*</span>}
      </label>
      {children}
      {showError && (
        <span className="form-error" role="alert" id={`${id}-error`}>
          {error}
        </span>
      )}
      {!showError && hint && (
        <span className="form-hint">{hint}</span>
      )}
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────────── */
export default function ContactForm() {
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;

  const [fields, setFields] = useState<FormFields>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');

  /* Derived */
  const msgLen = fields.message.length;
  const msgNearLimit = msgLen > MESSAGE_MAX * 0.85;
  const msgAtLimit = msgLen >= MESSAGE_MAX;

  /* Handlers */
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFields(prev => ({ ...prev, [name]: value }));

      // Live re-validate if field was already touched
      if (touched[name as keyof FormFields]) {
        setErrors(prev => {
          const next = { ...prev };
          const fieldErrors = validateFields({ ...fields, [name]: value });
          if (fieldErrors[name as keyof FormErrors]) {
            next[name as keyof FormErrors] = fieldErrors[name as keyof FormErrors];
          } else {
            delete next[name as keyof FormErrors];
          }
          return next;
        });
      }
    },
    [fields, touched]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name } = e.target;
      setTouched(prev => ({ ...prev, [name]: true }));
      const fieldErrors = validateFields(fields);
      setErrors(prev => ({
        ...prev,
        [name]: fieldErrors[name as keyof FormErrors],
      }));
    },
    [fields]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      // Touch all fields to reveal errors
      const allTouched: Partial<Record<keyof FormFields, boolean>> = {
        name: true,
        email: true,
        subject: true,
        message: true,
      };
      setTouched(allTouched);

      const fieldErrors = validateFields(fields);
      setErrors(fieldErrors);

      if (Object.keys(fieldErrors).length > 0) {
        // Focus first error field
        const firstErrKey = Object.keys(fieldErrors)[0] as keyof FormFields;
        const el = document.getElementById(id(firstErrKey));
        el?.focus();
        return;
      }

      setStatus('submitting');

      try {
        // Simulate API call — replace with real endpoint
        await new Promise<void>((resolve, reject) =>
          setTimeout(() => {
            // Simulate ~95% success rate in dev
            Math.random() > 0.05 ? resolve() : reject(new Error('Server error'));
          }, 1400)
        );

        setStatus('success');
        setFields({ name: '', email: '', subject: '', message: '' });
        setTouched({});
        setErrors({});
      } catch {
        setStatus('error');
      }
    },
    [fields, id]
  );

  const resetStatus = () => setStatus('idle');

  /* ─── Render ────────────────────────────────────────────────────────────── */
  if (status === 'success') {
    return (
      <div className="contact-form-wrapper">
        <div
          className="form-success-msg"
          role="alert"
          aria-live="polite"
          style={{ marginBottom: 'var(--space-6)' }}
        >
          <span style={{ fontSize: '1.5rem', lineHeight: 1 }} aria-hidden="true">✓</span>
          <div>
            <p style={{ fontWeight: 700, color: 'var(--success)', marginBottom: '4px' }}>
              Message sent!
            </p>
            <p style={{ color: 'var(--text2)', fontSize: 'var(--text-xs)', margin: 0 }}>
              Thank you — I&apos;ll respond within 24 hours.
            </p>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-outline"
          onClick={resetStatus}
          style={{ fontSize: 'var(--text-sm)' }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      className="contact-form-wrapper"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
    >
      {/* Global server error */}
      {status === 'error' && (
        <div
          className="form-error-msg"
          role="alert"
          aria-live="assertive"
          style={{ marginBottom: 'var(--space-5)' }}
        >
          <span style={{ fontSize: '1.25rem', lineHeight: 1 }} aria-hidden="true">⚠</span>
          <div>
            <p style={{ fontWeight: 700, marginBottom: '2px' }}>Failed to send.</p>
            <p style={{ margin: 0, fontSize: 'var(--text-xs)' }}>
              Please try again or email directly at{' '}
              <a
                href="mailto:saazidhossain@gmail.com"
                style={{ color: 'var(--error)', textDecoration: 'underline' }}
              >
                saazidhossain@gmail.com
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Name + Email row */}
      <div className="contact-form-row" style={{ marginBottom: 'var(--space-5)' }}>
        <FormField
          id={id('name')}
          label="Name"
          required
          error={errors.name}
          touched={touched.name}
        >
          <input
            id={id('name')}
            name="name"
            type="text"
            className={`form-control${touched.name && errors.name ? ' error' : touched.name && !errors.name ? ' success' : ''}`}
            value={fields.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your name"
            autoComplete="name"
            maxLength={80}
            aria-required="true"
            aria-invalid={touched.name && !!errors.name}
            aria-describedby={touched.name && errors.name ? `${id('name')}-error` : undefined}
            disabled={status === 'submitting'}
          />
        </FormField>

        <FormField
          id={id('email')}
          label="Email"
          required
          error={errors.email}
          touched={touched.email}
        >
          <input
            id={id('email')}
            name="email"
            type="email"
            className={`form-control${touched.email && errors.email ? ' error' : touched.email && !errors.email ? ' success' : ''}`}
            value={fields.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="you@example.com"
            autoComplete="email"
            aria-required="true"
            aria-invalid={touched.email && !!errors.email}
            aria-describedby={touched.email && errors.email ? `${id('email')}-error` : undefined}
            disabled={status === 'submitting'}
          />
        </FormField>
      </div>

      {/* Subject */}
      <div style={{ marginBottom: 'var(--space-5)' }}>
        <FormField
          id={id('subject')}
          label="Subject"
          required
          error={errors.subject}
          touched={touched.subject}
        >
          <input
            id={id('subject')}
            name="subject"
            type="text"
            className={`form-control${touched.subject && errors.subject ? ' error' : touched.subject && !errors.subject ? ' success' : ''}`}
            value={fields.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="What's this about?"
            maxLength={120}
            aria-required="true"
            aria-invalid={touched.subject && !!errors.subject}
            aria-describedby={touched.subject && errors.subject ? `${id('subject')}-error` : undefined}
            disabled={status === 'submitting'}
          />
        </FormField>
      </div>

      {/* Message */}
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <FormField
          id={id('message')}
          label="Message"
          required
          error={errors.message}
          touched={touched.message}
          hint="Briefly describe your project or question."
        >
          <textarea
            id={id('message')}
            name="message"
            className={`form-control${touched.message && errors.message ? ' error' : touched.message && !errors.message && fields.message.length >= 20 ? ' success' : ''}`}
            value={fields.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Tell me about your project, timeline, and budget..."
            maxLength={MESSAGE_MAX}
            rows={6}
            aria-required="true"
            aria-invalid={touched.message && !!errors.message}
            aria-describedby={
              [
                touched.message && errors.message ? `${id('message')}-error` : '',
                `${id('message')}-count`,
              ]
                .filter(Boolean)
                .join(' ') || undefined
            }
            disabled={status === 'submitting'}
            style={{ resize: 'vertical', minHeight: '140px' }}
          />
          <span
            id={`${id('message')}-count`}
            className={`char-count${msgAtLimit ? ' at-limit' : msgNearLimit ? ' near-limit' : ''}`}
            aria-live="polite"
            aria-atomic="true"
          >
            {msgLen}/{MESSAGE_MAX}
          </span>
        </FormField>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="btn btn-primary btn-submit"
        disabled={status === 'submitting'}
        aria-busy={status === 'submitting'}
        style={{ width: '100%' }}
      >
        {status === 'submitting' ? (
          <>
            <span className="btn-spinner" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>Send Message →</>
        )}
      </button>

      <p
        style={{
          fontSize: 'var(--text-xs)',
          color: 'var(--muted)',
          textAlign: 'center',
          marginTop: 'var(--space-3)',
        }}
      >
        I&apos;ll respond within 24 hours.{' '}
        <span aria-hidden="true">🔒</span> Your info stays private.
      </p>
    </form>
  );
}
