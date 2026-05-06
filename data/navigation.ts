export type SiteLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const primaryNavLinks: SiteLink[] = [
  { label: "The Premise", href: "/#about" },
  { label: "Science", href: "/#science" },
  { label: "Benefits", href: "/#benefits" },
  { label: "Programme", href: "/#programme" },
  { label: "Curriculum", href: "/#curriculum" },
  { label: "Voices", href: "/#testimonials" },
];

export const footerColumns = [
  {
    heading: "Explore",
    links: [
      { label: "The Premise", href: "/#about" },
      { label: "The Science", href: "/#science" },
      { label: "The Benefits", href: "/#benefits" },
      { label: "Voices", href: "/#testimonials" },
    ],
  },
  {
    heading: "The Programme",
    links: [
      { label: "Course Structure", href: "/#programme" },
      { label: "Curriculum Overview", href: "/#curriculum" },
      // { label: "Corporate / Team", href: getContactHref("corporate-team") },
      // {
      //   label: "Individual Instruction",
      //   href: getContactHref("individual-instruction"),
      // },
    ],
  },
  // {
  //   heading: "Contact",
  //   links: [
  //     { label: "Free Intro Talk", href: getContactHref("intro-talk") },
  //     { label: "Press & Research", href: getContactHref("press-research") },
  //     { label: "Contact Page", href: "/contact" },
  //     { label: "tm.org", href: "https://www.tm.org", external: true },
  //   ],
  // },
] as const;
