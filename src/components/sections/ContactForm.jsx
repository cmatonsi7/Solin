import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../ui/Button.jsx";
import { submitBrief } from "../../lib/submitBrief.js";

const EVENT_TYPES = ["Corporate event", "Conference", "Product launch", "Concert", "Church event", "Workshop / training", "Private celebration", "Community event"];
const SERVICES = [
  { id: "event-production", label: "Event management & production" },
  { id: "venue-solutions", label: "Venue & studio solutions", hint: "Venue design, transformation and studio builds" },
  { id: "av-technical", label: "Audio visual & technical", hint: "LED walls, lighting, sound, streaming" },
  { id: "creative", label: "Creative services", hint: "Branding, design, content, photography, film" },
  { id: "venue-rental", label: "Venue rental & hosting", hint: "Space, equipment and on-site hosting" },
];

function Field({ id, label, required, error, children }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}{required && <span className="req"> *</span>}</label>
      {children}
      {error && <span className="field-error" id={`${id}-err`}>{error}</span>}
    </div>
  );
}

/** Project-brief form. Submission goes through lib/submitBrief.js (the integration point). */
export default function ContactForm() {
  const { state } = useLocation();
  const preset = EVENT_TYPES.includes(state?.eventType) ? state.eventType : "";
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error
  const [errors, setErrors] = useState({});

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("website")) return; // honeypot: bots fill this, people never see it
    const next = {};
    const need = { name: "Please enter your name.", email: "Please enter a valid email address.", eventType: "Please choose an event type.", eventDate: "Please choose an event date.", details: "Please tell us about your event." };
    for (const [k, msg] of Object.entries(need)) if (!String(fd.get(k) || "").trim()) next[k] = msg;
    if (fd.get("email") && !/^\S+@\S+\.\S+$/.test(fd.get("email"))) next.email = need.email;
    setErrors(next);
    if (Object.keys(next).length) {
      // Wait for React to render aria-invalid, then move focus to the first problem.
      setTimeout(() => form.querySelector('[aria-invalid="true"]')?.focus(), 0);
      return;
    }

    const data = Object.fromEntries([...fd.entries()].filter(([k]) => k !== "services" && k !== "website"));
    data.services = fd.getAll("services");
    setStatus("sending");
    try { await submitBrief(data); setStatus("ok"); form.reset(); } catch { setStatus("error"); }
  }

  const inv = (k) => (errors[k] ? { "aria-invalid": true, "aria-describedby": `${k}-err` } : {});

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <Field id="name" label="Full name" required error={errors.name}><input className="input" id="name" name="name" type="text" autoComplete="name" placeholder="Enter your answer" {...inv("name")} /></Field>
      <Field id="company" label="Company / organization"><input className="input" id="company" name="company" type="text" autoComplete="organization" placeholder="Enter your answer" /></Field>
      <Field id="email" label="Email" required error={errors.email}><input className="input" id="email" name="email" type="email" autoComplete="email" placeholder="Enter your answer" {...inv("email")} /></Field>
      <Field id="phone" label="Phone"><input className="input" id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Enter your answer" /></Field>
      <Field id="eventType" label="Event type" required error={errors.eventType}>
        <select className="select" id="eventType" name="eventType" defaultValue={preset} key={preset} {...inv("eventType")}>
          <option value="">Select an event type</option>
          {EVENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </Field>
      <Field id="eventDate" label="Event date" required error={errors.eventDate}><input className="input" id="eventDate" name="eventDate" type="date" {...inv("eventDate")} /></Field>
      <Field id="venue" label="Venue / location"><input className="input" id="venue" name="venue" type="text" placeholder="Enter your answer" /></Field>
      <Field id="guests" label="Estimated number of guests"><input className="input" id="guests" name="guests" type="number" min="0" inputMode="numeric" placeholder="Enter your answer" /></Field>

      <fieldset className="field">
        <legend className="sr-only">Services you are interested in</legend>
        <div className="checks">
          <p className="text-small">Select all that apply</p>
          {SERVICES.map((s) => (
            <label className="check" key={s.id}>
              <input type="checkbox" name="services" value={s.label} />
              <span>{s.label}</span>
              {s.hint && <span className="check__hint">{s.hint}</span>}
            </label>
          ))}
        </div>
      </fieldset>

      <Field id="budget" label="Budget range"><input className="input" id="budget" name="budget" type="text" placeholder="Enter your answer" /></Field>
      <Field id="details" label="Tell us about your event" required error={errors.details}><textarea className="textarea" id="details" name="details" rows="4" placeholder="Enter your answer" {...inv("details")} /></Field>

      {/* Honeypot. Swap for Cloudflare Turnstile / reCAPTCHA if your endpoint needs it. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", opacity: 0 }} />

      <Button className="form-submit" onClick={undefined} type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Start my project"}
      </Button>
      <p className="form__note">Your details are only used to reply about your event.</p>
      <div aria-live="polite">
        {status === "ok" && <p className="form__status form__status--ok" role="status">Thank you — your brief has reached us. A member of the Solin team will be in touch.</p>}
        {status === "error" && <p className="form__status form__status--error" role="alert">We could not send your brief just now. Please try again in a moment.</p>}
      </div>
    </form>
  );
}
