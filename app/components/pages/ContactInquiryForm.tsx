"use client";

import { useRef, useState } from "react";
import {
  getContactInquiryType,
  type ContactInquiryTypeKey,
} from "@/data/contact";

type ContactInquiryFormProps = {
  initialType: ContactInquiryTypeKey;
};

type ContactFormState = {
  name: string;
  email: string;
  organization: string;
  role: string;
  message: string;
  website: string;
};

export function ContactInquiryForm({
  initialType,
}: ContactInquiryFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    organization: "",
    role: "",
    message: "",
    website: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const activeInquiry = getContactInquiryType(initialType);

  const handleFieldChange = (
    field: keyof ContactFormState,
    value: string,
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current?.reportValidity()) {
      return;
    }

    setSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          inquiryType: initialType,
        }),
      });

      const result = (await response.json()) as { ok: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Unable to submit right now.");
      }

      setStatus({
        type: "success",
        message: "Your enquiry has been submitted successfully.",
      });
      setForm({
        name: "",
        email: "",
        organization: "",
        role: "",
        message: "",
        website: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to submit right now. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="rounded-[2rem] bg-card p-6 shadow-[0_22px_60px_-40px_rgba(7,29,64,0.3)] md:p-8">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => handleFieldChange("website", event.target.value)}
          className="hidden"
          aria-hidden="true"
        />

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-primary/55">
              Name
            </span>
            <input
              required
              type="text"
              value={form.name}
              onChange={(event) => handleFieldChange("name", event.target.value)}
              className="w-full rounded-[1rem] bg-white px-4 py-3.5 text-primary shadow-[inset_0_0_0_1px_hsl(var(--border))] placeholder:text-primary/35"
              placeholder="Your full name"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-primary/55">
              Email
            </span>
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) => handleFieldChange("email", event.target.value)}
              className="w-full rounded-[1rem] bg-white px-4 py-3.5 text-primary shadow-[inset_0_0_0_1px_hsl(var(--border))] placeholder:text-primary/35"
              placeholder="name@company.com"
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-primary/55">
              Organization
            </span>
            <input
              type="text"
              value={form.organization}
              onChange={(event) =>
                handleFieldChange("organization", event.target.value)
              }
              className="w-full rounded-[1rem] bg-white px-4 py-3.5 text-primary shadow-[inset_0_0_0_1px_hsl(var(--border))] placeholder:text-primary/35"
              placeholder="Company or institution"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-primary/55">
              Role / Title
            </span>
            <input
              type="text"
              value={form.role}
              onChange={(event) => handleFieldChange("role", event.target.value)}
              className="w-full rounded-[1rem] bg-white px-4 py-3.5 text-primary shadow-[inset_0_0_0_1px_hsl(var(--border))] placeholder:text-primary/35"
              placeholder="Founder, CHRO, VP, Manager..."
            />
          </label>
        </div>

        <label className="block">
          <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-primary/55">
            Message
          </span>
          <textarea
            required
            rows={6}
            value={form.message}
            onChange={(event) =>
              handleFieldChange("message", event.target.value)
            }
            className="w-full rounded-[1rem] bg-white px-4 py-3.5 text-primary shadow-[inset_0_0_0_1px_hsl(var(--border))] placeholder:text-primary/35"
            placeholder={activeInquiry.prompt}
          />
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-full bg-[hsl(var(--peach))] px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-primary hover:bg-[hsl(var(--peach-deep))] hover:text-primary-foreground"
        >
          {submitting ? "Submitting..." : "Submit enquiry"}
        </button>
        {status.type !== "idle" && (
          <p
            className={`text-sm ${
              status.type === "success" ? "text-green-700" : "text-red-700"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
