import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  async function sendEmail(event) {
    event.preventDefault();
    if (loading) return;
    const values = new FormData(form.current);
    const nextErrors = {};
    if (!values.get("user_name").trim())
      nextErrors.user_name = "Skriv dit navn.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.get("user_email").trim()))
      nextErrors.user_email = "Skriv en gyldig e-mailadresse.";
    if (!values.get("message").trim()) nextErrors.message = "Skriv en besked.";
    setErrors(nextErrors);
    setStatus("");
    if (Object.keys(nextErrors).length) {
      form.current.elements.namedItem(Object.keys(nextErrors)[0]).focus();
      return;
    }
    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_0pbqzef",
        "template_5hd1kuk",
        form.current,
        "l2XP3PJbhxSCuC8YK",
      );
      setStatus("success");
      form.current.reset();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }
  return (
    <section
      className="contact-section section-space"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">03 / Lad os tale</span>
          <h2 id="contact-title">
            En god idé starter
            <br />
            med et <em>hej.</em>
            <span className="accent-dot" aria-hidden="true">↗</span>
          </h2>
          <p>
            Har du et projekt i tankerne, en mulighed eller bare et spørgsmål?
            Jeg vil gerne høre fra dig.
          </p>
          <a className="contact-email" href="mailto:schmidtii2000@gmail.com">
            schmidtii2000@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/emil-schmidt-7656a9215/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/Schmidtii123"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a href="/Mit_CV.pdf" download>
              Mit CV ↓
            </a>
          </div>
        </div>
        <form
          className="contact-form"
          ref={form}
          onSubmit={sendEmail}
          noValidate
          aria-busy={loading}
        >
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="user-name">Dit navn</label>
              <input
                id="user-name"
                name="user_name"
                autoComplete="name"
                placeholder="Hvad hedder du?"
                required
                aria-invalid={Boolean(errors.user_name)}
                aria-describedby={errors.user_name ? "name-error" : undefined}
                disabled={loading}
                onChange={() =>
                  setErrors((previous) => ({ ...previous, user_name: "" }))
                }
              />
              {errors.user_name && (
                <span className="field-error" id="name-error">
                  {errors.user_name}
                </span>
              )}
            </div>
            <div className="form-field">
              <label htmlFor="user-email">Din e-mail</label>
              <input
                id="user-email"
                type="email"
                name="user_email"
                autoComplete="email"
                placeholder="dig@eksempel.dk"
                required
                aria-invalid={Boolean(errors.user_email)}
                aria-describedby={errors.user_email ? "email-error" : undefined}
                disabled={loading}
                onChange={() =>
                  setErrors((previous) => ({ ...previous, user_email: "" }))
                }
              />
              {errors.user_email && (
                <span className="field-error" id="email-error">
                  {errors.user_email}
                </span>
              )}
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="message">Hvad har du på hjerte?</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Fortæl lidt om din idé …"
              required
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              disabled={loading}
              onChange={() =>
                setErrors((previous) => ({ ...previous, message: "" }))
              }
            />
            {errors.message && (
              <span className="field-error" id="message-error">
                {errors.message}
              </span>
            )}
          </div>
          <div className="form-submit">
            <span>Jeg glæder mig til at høre fra dig.</span>
            <button
              className="button button-accent"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sender …" : "Send besked"}
              <span aria-hidden="true">↗</span>
            </button>
          </div>
          <div className={`form-status ${status}`} role="status">
            {status === "success" &&
              "Tak for din besked! Jeg vender tilbage hurtigst muligt."}
            {status === "error" && (
              <>
                Beskeden kunne ikke sendes. Prøv igen, eller{" "}
                <a href="mailto:schmidtii2000@gmail.com">
                  skriv direkte på e-mail
                </a>
                .
              </>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
