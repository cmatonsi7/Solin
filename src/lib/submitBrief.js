/**
 * INTEGRATION POINT — project brief submission.
 *
 * Set VITE_FORM_ENDPOINT to a URL that accepts a JSON POST (Formspree, Netlify
 * function, your own API…). Payload = the form fields (see ContactForm).
 *
 * With no endpoint configured the brief is NOT delivered anywhere: the function
 * resolves so the UI can be reviewed, and logs a console warning.
 */
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

export async function submitBrief(data) {
  if (!ENDPOINT) {
    console.warn("[Solin] VITE_FORM_ENDPOINT is not set — brief was not sent.", data);
    await new Promise((r) => setTimeout(r, 600));
    return { ok: true, delivered: false };
  }
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`Submission failed (${res.status})`);
  return { ok: true, delivered: true };
}
