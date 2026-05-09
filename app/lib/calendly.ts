"use client";

const CALENDLY_URL = "https://calendly.com/maharishileadership/30min";

type CalendlyWindow = Window & {
  Calendly?: {
    initPopupWidget: (options: { url: string }) => void;
  };
};

export function openCalendlyPopup() {
  const currentWindow = window as CalendlyWindow;
  if (currentWindow.Calendly?.initPopupWidget) {
    currentWindow.Calendly.initPopupWidget({ url: CALENDLY_URL });
    return;
  }

  window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
}

export function getCalendlyEmbedUrl() {
  return `${CALENDLY_URL}?hide_gdpr_banner=1`;
}
