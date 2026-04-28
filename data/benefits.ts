import type { ContactInquiryTypeKey } from "@/data/contact";

export type BenefitTypeKey =
  | "stress-anxiety"
  | "clearer-mind"
  | "better-health"
  | "relationships"
  | "collective-impact";

export type BenefitCard = {
  title: string;
  body: string;
};

export type BenefitEvidence = {
  stat: string;
  title: string;
  body: string;
  source: string;
};

export type BenefitQuote = {
  text: string;
  name: string;
  role: string;
};

export type BenefitVisual = {
  primaryImage: string;
  primaryAlt: string;
  secondaryImage: string;
  secondaryAlt: string;
  accentImage: string;
  accentAlt: string;
  accentLabel: string;
};

export type BenefitType = {
  key: BenefitTypeKey;
  label: string;
  shortLabel: string;
  eyebrow: string;
  headline: string;
  intro: string;
  cards: BenefitCard[];
  evidence: BenefitEvidence;
  quote: BenefitQuote;
  visual: BenefitVisual;
  ctaLabel: string;
  ctaType: ContactInquiryTypeKey;
};

export const benefitsProofStats = [
  { value: "480+", label: "peer-reviewed studies" },
  { value: "50 years", label: "continuous research" },
  { value: "48%", label: "lower cardiac risk in long-term follow-up" },
  { value: "AHA", label: "recognition in cardiovascular guidance" },
];

export const benefitTypes: BenefitType[] = [
  {
    key: "stress-anxiety",
    label: "Stress & Anxiety",
    shortLabel: "Stress relief",
    eyebrow: "Stress & Anxiety",
    headline: "A quieter baseline for demanding roles.",
    intro:
      "TM is not about escaping pressure. It helps leaders reduce the physiological overload underneath pressure, so complexity feels more workable and reactivity stops driving the room.",
    cards: [
      {
        title: "Interrupt the stress loop",
        body: "Create a reliable recovery ritual that lowers accumulated strain instead of carrying it from meeting to meeting.",
      },
      {
        title: "Recover faster after conflict",
        body: "Return to steadiness more quickly after difficult conversations, setbacks, or decision fatigue.",
      },
      {
        title: "Protect high-stakes judgement",
        body: "Reduce the kind of nervous-system drag that narrows thinking and leads to rushed, defensive choices.",
      },
      {
        title: "Lead with more composure",
        body: "Bring a calmer, more grounded presence into tense environments without performing calm on the surface.",
      },
    ],
    evidence: {
      stat: "0.62",
      title: "Trait-anxiety effect size",
      body: "Meta-analysis data suggests TM produces stronger trait-anxiety reduction than many ordinary relaxation or comparison practices.",
      source: "Orme-Johnson & Barnes, 2013 meta-analysis of randomized controlled trials.",
    },
    quote: {
      text: "My creativity improved. I can solve problems faster and more easily. I can focus for longer periods of time - and I am happier.",
      name: "Rahul Vohra",
      role: "Founder & CEO, Superhuman",
    },
    visual: {
      primaryImage: "/images/tm-1.jpg",
      primaryAlt: "A meditator seated in stillness at sunrise",
      secondaryImage: "/images/brain.png",
      secondaryAlt: "Neural activity illustration",
      accentImage: "/images/tm-2.png",
      accentAlt: "Meditation silhouette at sunset",
      accentLabel: "Rest that sharpens leadership",
    },
    ctaLabel: "Discuss resilience for my team",
    ctaType: "corporate-team",
  },
  {
    key: "clearer-mind",
    label: "Clearer Mind",
    shortLabel: "Mental clarity",
    eyebrow: "Clearer Mind",
    headline: "Clarity that stays available when the stakes rise.",
    intro:
      "When the brain is less burdened by stress, leaders can think with more range. TM supports the kind of clear attention, pattern recognition, and strategic depth that pressure often shuts down.",
    cards: [
      {
        title: "See the whole situation faster",
        body: "Make sense of competing signals without immediately collapsing into binary thinking.",
      },
      {
        title: "Hold focus for longer",
        body: "Sustain attention through complex decisions, long-form strategy work, and demanding conversations.",
      },
      {
        title: "Unlock cleaner creativity",
        body: "Access more original solutions when the mind is not spending its energy on hidden friction.",
      },
      {
        title: "Make better decisions with less noise",
        body: "Improve the quality of judgment by reducing mental clutter rather than simply working harder.",
      },
    ],
    evidence: {
      stat: "+0.42",
      title: "Manager brain integration gain",
      body: "Randomized research in managers linked TM practice with improved whole-brain integration associated with cognitive performance.",
      source: "Travis et al., Brain and Cognition, 2018.",
    },
    quote: {
      text: "TM has given me greater creativity, centredness, and the ability to put things in perspective. It has been the single biggest influence on my life.",
      name: "Ray Dalio",
      role: "Founder & Co-CIO, Bridgewater Associates",
    },
    visual: {
      primaryImage: "/images/executive.png",
      primaryAlt: "Executive working in a calm, focused office environment",
      secondaryImage: "/images/brain.png",
      secondaryAlt: "Network and coherence graphic",
      accentImage: "/images/TM-science.png",
      accentAlt: "TM science visual",
      accentLabel: "Whole-brain coherence",
    },
    ctaLabel: "Explore mental performance gains",
    ctaType: "intro-talk",
  },
  {
    key: "better-health",
    label: "Better Health",
    shortLabel: "Health",
    eyebrow: "Better Health",
    headline: "Better health is not a side benefit. It is a leadership asset.",
    intro:
      "The programme speaks to performance, but performance becomes fragile when energy, sleep, blood pressure, and recovery are deteriorating underneath it. TM strengthens the physiology that leadership depends on.",
    cards: [
      {
        title: "Improve sleep quality",
        body: "Rest more deeply and wake with more usable energy rather than carrying exhaustion into the next day.",
      },
      {
        title: "Support cardiovascular health",
        body: "Bring down one of the major hidden costs of leadership pressure: chronic physiological strain.",
      },
      {
        title: "Create more stable energy",
        body: "Replace adrenaline-driven output with a steadier, more sustainable source of endurance.",
      },
      {
        title: "Reduce burnout risk",
        body: "Address overload at the level where burnout begins - in the nervous system, not just the calendar.",
      },
    ],
    evidence: {
      stat: "48%",
      title: "Lower combined cardiac risk",
      body: "Long-term follow-up research found materially lower combined risk of heart attack, stroke, and death among TM practitioners.",
      source: "Schneider et al., 2012 randomized controlled trial follow-up.",
    },
    quote: {
      text: "Health, well-being, clarity of mind, happiness, and calm have all improved. Significant benefits to myself and our team.",
      name: "Rajan Navani",
      role: "Chairman & MD, JetSynthesys Pvt. Ltd.",
    },
    visual: {
      primaryImage: "/images/unnamed.jpg",
      primaryAlt: "A practitioner seated in calm meditation indoors",
      secondaryImage: "/images/tm-2.png",
      secondaryAlt: "Meditation silhouette against a sunset",
      accentImage: "/images/brain.png",
      accentAlt: "Neural coherence illustration",
      accentLabel: "Recovery that compounds",
    },
    ctaLabel: "Ask about health and recovery outcomes",
    ctaType: "individual-instruction",
  },
  {
    key: "relationships",
    label: "Relationships",
    shortLabel: "Relationships",
    eyebrow: "Relationships",
    headline: "Less reactivity. Better conversations. Stronger trust.",
    intro:
      "A steadier nervous system changes the quality of interaction. Leaders often notice more patience, better listening, and a higher capacity to stay present without becoming guarded or forceful.",
    cards: [
      {
        title: "Listen without bracing",
        body: "Stay open to nuance instead of reacting instantly to disagreement, ambiguity, or challenge.",
      },
      {
        title: "Defuse tension earlier",
        body: "Catch emotional escalation sooner and bring conversations back to substance more quickly.",
      },
      {
        title: "Increase interpersonal trust",
        body: "Show up more consistently, which makes your communication feel steadier and safer to teams.",
      },
      {
        title: "Lead with more emotional range",
        body: "Strengthen empathy and EQ without losing standards, clarity, or decision speed.",
      },
    ],
    evidence: {
      stat: "12 weeks",
      title: "Leadership change window",
      body: "Controlled leadership studies reported measurable gains across multiple leadership dimensions after a relatively short TM period.",
      source: "Valosek et al., 2018 leadership outcomes study.",
    },
    quote: {
      text: "It has given a boost to our overall creativity and performance. Significant benefits to myself and our team.",
      name: "Rajan Navani",
      role: "Chairman & MD, JetSynthesys Pvt. Ltd.",
    },
    visual: {
      primaryImage: "/images/executive.png",
      primaryAlt: "Executive in a composed workspace",
      secondaryImage: "/images/tm-1.jpg",
      secondaryAlt: "Meditation silhouette with light behind",
      accentImage: "/images/tm-2.png",
      accentAlt: "Practitioner seated against an orange sky",
      accentLabel: "Presence changes the room",
    },
    ctaLabel: "Talk about leadership communication",
    ctaType: "corporate-team",
  },
  {
    key: "collective-impact",
    label: "Collective Impact",
    shortLabel: "Organisational impact",
    eyebrow: "Collective Impact",
    headline: "What changes in one nervous system can scale across a culture.",
    intro:
      "The strongest organisations do not only optimize process. They improve the quality of attention, recovery, and decision-making inside the people leading the system. TM can become part of that operating advantage.",
    cards: [
      {
        title: "Reduce hidden organisational drag",
        body: "Lower the accumulated cost of stress, burnout, emotional friction, and avoidable health strain across teams.",
      },
      {
        title: "Lift decision quality across levels",
        body: "Create better conditions for clarity and steadiness not only at the top, but throughout the leadership layer.",
      },
      {
        title: "Strengthen retention and culture",
        body: "Healthier, less reactive teams tend to collaborate better and remain more stable under pressure.",
      },
      {
        title: "Build durable performance",
        body: "Move from intensity-based output to a culture with deeper reserves, better recovery, and more coherence.",
      },
    ],
    evidence: {
      stat: "-50%",
      title: "Healthcare utilization",
      body: "Long-horizon claims research associated TM practice with substantially lower healthcare utilization, hinting at downstream organisational savings.",
      source: "Orme-Johnson & Herron, 1997 insurance claims study.",
    },
    quote: {
      text: "It has given a boost to our overall creativity and performance. Health, well-being, clarity of mind, happiness, and calm have all improved.",
      name: "Rajan Navani",
      role: "Chairman & MD, JetSynthesys Pvt. Ltd.",
    },
    visual: {
      primaryImage: "/images/brain.png",
      primaryAlt: "Neural activity and coherence graphic",
      secondaryImage: "/images/executive.png",
      secondaryAlt: "Leader working in a calm office setting",
      accentImage: "/images/TM-science.png",
      accentAlt: "TM science graphic",
      accentLabel: "From personal shift to team effect",
    },
    ctaLabel: "Design a leadership cohort conversation",
    ctaType: "corporate-team",
  },
];
