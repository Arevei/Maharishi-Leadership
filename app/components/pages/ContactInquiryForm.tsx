"use client";

import { useRef, useState } from "react";
import {
  contactEmail,
  contactInquiryTypes,
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
  inquiryType: ContactInquiryTypeKey;
  message: string;
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
    inquiryType: initialType,
    message: "",
  });

  const activeInquiry = getContactInquiryType(form.inquiryType);

  const handleFieldChange = (
    field: keyof ContactFormState,
    value: string,
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current?.reportValidity()) {
      return;
    }

    const subject = activeInquiry.subject;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Organization: ${form.organization || "Not provided"}`,
      `Role / Title: ${form.role || "Not provided"}`,
      `Inquiry Type: ${activeInquiry.label}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 md:p-8 backdrop-blur-xl shadow-[0_26px_90px_-44px_rgba(0,0,0,0.85)]">
      <div className="rounded-[1.5rem] border border-white/10 bg-black/15 px-5 py-4">
        <p className="text-[10px] uppercase tracking-[0.22em] text-[hsl(var(--peach))] font-medium">
          Selected inquiry
        </p>
        <h3 className="mt-2 font-serif text-2xl text-primary-foreground">
          {activeInquiry.label}
        </h3>
        <p className="mt-2 text-sm leading-[1.75] text-primary-foreground/70">
          {activeInquiry.description}
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="block text-[11px] uppercase tracking-[0.18em] text-primary-foreground/55 mb-2">
              Name
            </span>
            <input
              required
              type="text"
              value={form.name}
              onChange={(event) => handleFieldChange("name", event.target.value)}
              className="w-full rounded-[1rem] border border-white/12 bg-white/8 px-4 py-3.5 text-primary-foreground placeholder:text-primary-foreground/30"
              placeholder="Your full name"
            />
          </label>
          <label className="block">
            <span className="block text-[11px] uppercase tracking-[0.18em] text-primary-foreground/55 mb-2">
              Email
            </span>
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) => handleFieldChange("email", event.target.value)}
              className="w-full rounded-[1rem] border border-white/12 bg-white/8 px-4 py-3.5 text-primary-foreground placeholder:text-primary-foreground/30"
              placeholder="name@company.com"
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="block text-[11px] uppercase tracking-[0.18em] text-primary-foreground/55 mb-2">
              Organization
            </span>
            <input
              type="text"
              value={form.organization}
              onChange={(event) =>
                handleFieldChange("organization", event.target.value)
              }
              className="w-full rounded-[1rem] border border-white/12 bg-white/8 px-4 py-3.5 text-primary-foreground placeholder:text-primary-foreground/30"
              placeholder="Company or institution"
            />
          </label>
          <label className="block">
            <span className="block text-[11px] uppercase tracking-[0.18em] text-primary-foreground/55 mb-2">
              Role / Title
            </span>
            <input
              type="text"
              value={form.role}
              onChange={(event) => handleFieldChange("role", event.target.value)}
              className="w-full rounded-[1rem] border border-white/12 bg-white/8 px-4 py-3.5 text-primary-foreground placeholder:text-primary-foreground/30"
              placeholder="Founder, CHRO, VP, Manager..."
            />
          </label>
        </div>

        <label className="block">
          <span className="block text-[11px] uppercase tracking-[0.18em] text-primary-foreground/55 mb-2">
            Inquiry type
          </span>
          <select
            required
            value={form.inquiryType}
            onChange={(event) =>
              handleFieldChange(
                "inquiryType",
                event.target.value as ContactInquiryTypeKey,
              )
            }
            className="w-full rounded-[1rem] border border-white/12 bg-white/8 px-4 py-3.5 text-primary-foreground"
          >
            {contactInquiryTypes.map((item) => (
              <option key={item.key} value={item.key} className="text-primary">
                {item.label}
              </option>
            ))}
          </select>
          <p className="mt-2 text-sm text-primary-foreground/45">
            {activeInquiry.responseNote}
          </p>
        </label>

        <label className="block">
          <span className="block text-[11px] uppercase tracking-[0.18em] text-primary-foreground/55 mb-2">
            Message
          </span>
          <textarea
            required
            rows={6}
            value={form.message}
            onChange={(event) =>
              handleFieldChange("message", event.target.value)
            }
            className="w-full rounded-[1rem] border border-white/12 bg-white/8 px-4 py-3.5 text-primary-foreground placeholder:text-primary-foreground/30"
            placeholder={activeInquiry.prompt}
          />
        </label>

        <div className="rounded-[1.35rem] border border-white/10 bg-black/15 px-4 py-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--peach))]">
            Email-first flow
          </p>
          <p className="mt-2 text-sm leading-[1.75] text-primary-foreground/72">
            Submitting this form opens your email app with everything structured
            for you. If your email client does not open, write to{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="text-[hsl(var(--peach))] hover:text-primary-foreground"
            >
              {contactEmail}
            </a>
            .
          </p>
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-[hsl(var(--peach))] px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-primary hover:bg-[hsl(var(--peach-deep))] hover:text-primary-foreground"
        >
          Compose my inquiry email
        </button>
      </form>
    </div>
  );
}
