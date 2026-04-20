"use client";

import { FormEvent, useState } from "react";

import {
  CONTACT_EMAIL,
  FORMSPREE_ENDPOINT,
  type ContactFormErrors,
  validateContactForm,
} from "../lib/contactFormSchema";
import { SectionHeading } from "./SectionHeading";

interface ContactFormProps {
  endpoint?: string;
  fetcher?: typeof fetch;
}

interface ContactFormFields {
  email: string;
  message: string;
  name: string;
}

type SubmissionState =
  | { status: "idle" }
  | { status: "loading" }
  | { message: string; status: "error" }
  | { message: string; status: "success" };

export function ContactForm({
  endpoint = FORMSPREE_ENDPOINT,
  fetcher = fetch,
}: ContactFormProps): JSX.Element {
  const [fieldErrors, setFieldErrors] = useState<ContactFormErrors>({});
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    status: "idle",
  });
  const [values, setValues] = useState<ContactFormFields>({
    email: "",
    message: "",
    name: "",
  });

  function handleChange(field: keyof ContactFormFields, value: string): void {
    setValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));

    setFieldErrors((currentErrors) => ({
      ...currentErrors,
      [field]: undefined,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const validationResult = validateContactForm(values);

    if (
      validationResult.errors.name ||
      validationResult.errors.email ||
      validationResult.errors.message
    ) {
      setFieldErrors(validationResult.errors);
      setSubmissionState({
        status: "error",
        message: "Please review the highlighted fields and try again.",
      });
      return;
    }

    if (!endpoint) {
      setSubmissionState({
        status: "error",
        message:
          "Contact form setup is incomplete. Add NEXT_PUBLIC_FORMSPREE_ENDPOINT to enable submissions.",
      });
      return;
    }

    setFieldErrors({});
    setSubmissionState({ status: "loading" });

    try {
      const response = await fetcher(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: validationResult.values?.email,
          message: validationResult.values?.message,
          name: validationResult.values?.name,
          to: CONTACT_EMAIL,
        }),
      });

      if (!response.ok) {
        setSubmissionState({
          status: "error",
          message:
            "Your message could not be sent right now. Please try again in a moment.",
        });
        return;
      }

      setValues({
        email: "",
        message: "",
        name: "",
      });
      setSubmissionState({
        status: "success",
        message: "Thanks for reaching out. Your message has been sent.",
      });
    } catch {
      setSubmissionState({
        status: "error",
        message:
          "A network issue prevented your message from sending. Please try again shortly.",
      });
    }
  }

  const isSubmitting = submissionState.status === "loading";

  return (
    <section className="content-section" id="contact">
      <div className="container section-grid">
        <SectionHeading
          description={`Send a note directly to ${CONTACT_EMAIL} using a clean, backend-free contact flow.`}
          eyebrow="Contact"
          title="Reach out through a minimal contact form."
        />
        <form
          aria-busy={isSubmitting}
          className="contact-card"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              aria-describedby={fieldErrors.name ? "name-error" : undefined}
              aria-invalid={fieldErrors.name ? "true" : "false"}
              id="name"
              name="name"
              onChange={(event) => handleChange("name", event.target.value)}
              placeholder="Your name"
              type="text"
              value={values.name}
            />
            <p className="field-error" id="name-error" role="alert">
              {fieldErrors.name}
            </p>
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              aria-describedby={fieldErrors.email ? "email-error" : undefined}
              aria-invalid={fieldErrors.email ? "true" : "false"}
              id="email"
              name="email"
              onChange={(event) => handleChange("email", event.target.value)}
              placeholder="you@example.com"
              type="email"
              value={values.email}
            />
            <p className="field-error" id="email-error" role="alert">
              {fieldErrors.email}
            </p>
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              aria-describedby={fieldErrors.message ? "message-error" : undefined}
              aria-invalid={fieldErrors.message ? "true" : "false"}
              id="message"
              name="message"
              onChange={(event) => handleChange("message", event.target.value)}
              placeholder="Tell me a bit about your project or idea."
              rows={6}
              value={values.message}
            />
            <p className="field-error" id="message-error" role="alert">
              {fieldErrors.message}
            </p>
          </div>
          <button className="button button-primary" disabled={isSubmitting} type="submit">
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          <div
            aria-atomic="true"
            aria-live="polite"
            className={`form-status form-status-${submissionState.status}`}
          >
            {submissionState.status === "idle" || submissionState.status === "loading"
              ? null
              : submissionState.message}
          </div>
        </form>
      </div>
    </section>
  );
}
