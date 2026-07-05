import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS_DATA: FAQItem[] = [
  {
    question: "Who is eligible to participate in Hackzz?",
    answer: "Anyone who is a student, developer, designer, builder, or technology enthusiast over 18 years old is welcome. We encourage hackers of all experience levels to join!"
  },
  {
    question: "What is the team size limit?",
    answer: "Teams can consist of 1 to 4 members. You can participate solo if you wish, but collaborating with others is highly recommended to build stronger prototypes."
  },
  {
    question: "Are there any registration fees?",
    answer: "No, Hackzz is 100% free. Food, coffee, goodies, APIs, server credits, and custom developer swags are entirely sponsored by our partners."
  },
  {
    question: "What if I don't have a team yet?",
    answer: "That is completely fine! We will host a dedicated Team Formation Mixer right after the opening ceremony on Day 1 where you can pitches your ideas or join existing teams."
  },
  {
    question: "Is this hackathon online or in-person?",
    answer: "Hackzz 2026 is a fully virtual online hackathon. You can participate from anywhere in the world! All workshops, mentor sessions, and judging will occur via Discord and our platform."
  },
  {
    question: "What is the judging criteria?",
    answer: "Submissions are evaluated on four key pillars: Technical Execution (feasibility & code quality), Innovation (originality of idea), Usefulness (impact & target market solve), and Design/UX (usability)."
  }
];

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative w-full py-28 px-4 bg-neutral-950 text-white overflow-hidden">
      {/* Background glow shadow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs text-neutral-400 mb-6 uppercase tracking-wider">
            Got Questions?
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300">
            Frequently Asked.
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed font-light">
            Here are the most common questions regarding registration, teams, rules, and event logistics.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-neutral-900 bg-neutral-900/20 hover:bg-neutral-900/40 hover:border-neutral-850 transition-colors duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                >
                  <span className="font-semibold text-white group-hover:text-blue-300 transition-colors pr-4">
                    {faq.question}
                  </span>
                  
                  <span className="text-neutral-500 group-hover:text-white shrink-0">
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-350 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-neutral-400 leading-relaxed font-light border-t border-neutral-900/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
