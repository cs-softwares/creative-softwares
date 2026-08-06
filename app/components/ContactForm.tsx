"use client";

import { type FormEvent, useState } from "react";

import { siteConfig } from "../site-content";

type FormState = {
  fullName: string;
  email: string;
  company: string;
  budget: string;
  projectType: string;
  details: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  company: "",
  budget: "",
  projectType: "",
  details: "",
};

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState("");
  const [reference, setReference] = useState("");
  const isSubmitting = submitState === "submitting";

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    if (submitState !== "idle") {
      setSubmitState("idle");
      setFeedback("");
      setReference("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json().catch(() => null)) as
        | { message?: string; reference?: string }
        | null;

      if (!response.ok) {
        throw new Error(result?.message || "Unable to submit your inquiry right now.");
      }

      setForm(initialState);
      setSubmitState("success");
      setReference(result?.reference || "");
      setFeedback(
        result?.message || "Your inquiry has been submitted successfully."
      );
    } catch (error) {
      setSubmitState("error");
      setReference("");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong while submitting your inquiry."
      );
    }
  }

  return (
    <form className="glass-panel-strong space-y-5 rounded-[2.1rem] p-8 sm:p-9" onSubmit={handleSubmit}>
      <p className="contact-form-note max-w-xl">
        A short brief is enough to get started.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-[#6e5543]">Full Name *</span>
          <input
            required
            value={form.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            className="form-input"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            maxLength={80}
            disabled={isSubmitting}
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-[#6e5543]">Email Address *</span>
          <input
            required
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="form-input"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            maxLength={160}
            disabled={isSubmitting}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-[#6e5543]">Company</span>
          <input
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            className="form-input"
            type="text"
            placeholder="Company or brand"
            autoComplete="organization"
            maxLength={120}
            disabled={isSubmitting}
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-[#6e5543]">Project Budget</span>
          <select
            value={form.budget}
            onChange={(event) => updateField("budget", event.target.value)}
            className="form-input"
            disabled={isSubmitting}
          >
            <option value="">Select range</option>
            <option value="Under Rs 25k">Under Rs 25k</option>
            <option value="Rs 25k - Rs 50k">Rs 25k - Rs 50k</option>
            <option value="Rs 50k - Rs 1 lakh">Rs 50k - Rs 1 lakh</option>
            <option value="Rs 1 lakh - Rs 2 lakh">Rs 1 lakh - Rs 2 lakh</option>
            <option value="Above Rs 2 lakh">Above Rs 2 lakh</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-sm font-medium text-[#6e5543]">Project Type</span>
        <select
          value={form.projectType}
          onChange={(event) => updateField("projectType", event.target.value)}
          className="form-input"
          disabled={isSubmitting}
        >
          <option value="">Select type</option>
          <option value="Website">Website</option>
          <option value="Mobile App">Mobile App</option>
          <option value="Web Application">Web Application</option>
          <option value="Custom Software">Custom Software</option>
          <option value="Consulting">Consulting</option>
        </select>
      </label>

      <label className="space-y-2">
        <span className="text-sm font-medium text-[#6e5543]">Project Details *</span>
        <textarea
          required
          value={form.details}
          onChange={(event) => updateField("details", event.target.value)}
          className="form-input min-h-36 resize-none"
          placeholder="Goals, features, timelines, or anything else that helps us understand the project."
          maxLength={3000}
          disabled={isSubmitting}
        />
      </label>

      <button
        type="submit"
        className="button-copper w-full justify-center"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending Inquiry..." : "Send Inquiry"}
      </button>

      <p className="text-sm leading-6 text-[#6e5543]">
        We usually reply within {siteConfig.responseTime}. You can also email us directly at{" "}
        <a href={`mailto:${siteConfig.email}`} className="font-semibold text-[#2d1810]">
          {siteConfig.email}
        </a>
        .
      </p>

      {submitState === "success" ? (
        <div
          role="status"
          aria-live="polite"
          className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-900"
        >
          <p>{feedback}</p>
          {reference ? (
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Reference: {reference}
            </p>
          ) : null}
        </div>
      ) : null}

      {submitState === "error" ? (
        <div
          role="alert"
          aria-live="polite"
          className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-900"
        >
          {feedback}
        </div>
      ) : null}
    </form>
  );
}
