"use client"
import { motion } from "framer-motion";

const sessions = [
  {
    n: 1,
    title: "Personal Instruction",
    desc: "One-to-one instruction in the TM technique by a certified teacher. You leave with the practice fully established.",
    theme: "The Foundation",
    tag: "Core Instruction",
  },
  {
    n: 2,
    title: "Verification & Validation",
    desc: "Group session 24 hours after instruction. Refine the technique, validate your experience, and set the optimal daily rhythm.",
    theme: "First Refinement",
    tag: "Core Instruction",
  },
  {
    n: 3,
    title: "Mechanics of TM",
    desc: "The neuroscience of restful alertness. Why the technique requires no effort. The deep-rest physiology of TM versus sleep and other practices.",
    theme: "How & Why It Works",
    tag: "Core Instruction",
  },
  {
    n: 4,
    title: "Vision of the Goal",
    desc: "TM's effect on brain function, health, psychological well-being, and the higher stages of human development that underpin great leadership.",
    theme: "Full Development of Life",
    tag: "Core Instruction",
  },
  {
    n: 5,
    title: "Resilience & Adaptability",
    desc: "How deep rest dissolves accumulated stress. The physiology of resilience. Building bandwidth for high-pressure decision-making.",
    theme: "Calm in Chaos",
    tag: "Weekly Integration",
  },
  {
    n: 6,
    title: "Cognitive Capacity",
    desc: "How TM increases focus, intelligence, creativity, and judgement — and why frontal coherence is the neural signature of effective leadership.",
    theme: "Foundation for Effectiveness",
    tag: "Weekly Integration",
  },
  {
    n: 7,
    title: "1-to-1 Check-In",
    desc: "A private session with your certified teacher to refine your practice and address any questions about technique, routine, or experience.",
    theme: "Personalised Support",
    tag: "Weekly Integration",
  },
  {
    n: 8,
    title: "Emotional Intelligence",
    desc: "TM's measurable impact on EQ, empathy, and the quality of interpersonal communication. The bedrock of high-performance team culture.",
    theme: "Inner Balance & Connection",
    tag: "Monthly Mastery",
  },
  {
    n: 9,
    title: "Centeredness & Self-Referral",
    desc: "The mechanics of higher states of consciousness. How realising the inner Self stabilises judgement, presence, and equanimity in the leader.",
    theme: "Foundation for Success",
    tag: "Monthly Mastery",
  },
  {
    n: 10,
    title: "Unfolding Full Potential",
    desc: "How higher stages of human development correlate with higher levels of leadership capacity, team effectiveness, and organisational impact.",
    theme: "The Leader as Leader",
    tag: "Monthly Mastery",
  },
];

export function Curriculum() {
  return (
    <section id="curriculum" className="bg-background py-24 md:py-36">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mb-16"
        >
          <p className="flex items-center gap-3 text-[hsl(var(--peach-deep))] uppercase text-[11px] tracking-[0.3em] font-medium mb-6">
            <span className="w-7 h-px bg-[hsl(var(--peach-deep))]" /> The Full Ten-Session Course
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-primary leading-[1.05] font-light mb-6">
            What you will learn,{" "}
            <em className="italic text-[hsl(var(--peach-deep))]">session by session.</em>
          </h2>
          <p className="text-base sm:text-lg text-primary/60 leading-[1.85] font-light max-w-2xl">
            Across four months, the curriculum moves from technique to
            physiology to leadership. Each session builds on the last; nothing
            is theoretical until it has been experienced first.
          </p>
        </motion.div>

        <div className="overflow-x-auto -mx-6 md:mx-0 px-6 md:px-0">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr>
                <th className="text-[11px] uppercase tracking-[0.2em] text-primary/55 font-medium pb-4 pr-5 text-left w-16">
                  #
                </th>
                <th className="text-[11px] uppercase tracking-[0.2em] text-primary/55 font-medium pb-4 px-5 text-left">
                  Session
                </th>
                <th className="text-[11px] uppercase tracking-[0.2em] text-primary/55 font-medium pb-4 px-5 text-left hidden md:table-cell">
                  Theme
                </th>
                <th className="text-[11px] uppercase tracking-[0.2em] text-primary/55 font-medium pb-4 pl-5 text-left hidden lg:table-cell">
                  Phase
                </th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((s, i) => (
                <motion.tr
                  key={s.n}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.03 }}
                  className="border-t border-border hover:bg-[hsl(var(--peach-deep)/0.04)] transition-colors"
                >
                  <td className="py-5 pr-5 align-top">
                    <span className="font-serif text-2xl text-[hsl(var(--peach-deep))] font-light">
                      {s.n}
                    </span>
                  </td>
                  <td className="py-5 px-5 align-top">
                    <p className="font-medium text-primary mb-1.5">
                      {s.title}
                    </p>
                    <p className="text-[13px] text-primary/60 leading-relaxed max-w-md">
                      {s.desc}
                    </p>
                  </td>
                  <td className="py-5 px-5 align-top hidden md:table-cell">
                    <p className="text-[13px] text-[hsl(var(--peach-deep))]">
                      {s.theme}
                    </p>
                  </td>
                  <td className="py-5 pl-5 align-top hidden lg:table-cell">
                    {s.tag ? (
                      <span className="text-[11px] bg-[hsl(var(--sky)/0.6)] text-primary px-3 py-1 rounded-full font-medium inline-block">
                        {s.tag}
                      </span>
                    ) : (
                      <span className="text-primary/30">—</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
