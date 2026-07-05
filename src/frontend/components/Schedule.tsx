import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface EventItem {
  time: string;
  title: string;
  description: string;
  type: "general" | "hackathon" | "workshop" | "judging";
}

const SCHEDULE_DATA: Record<string, EventItem[]> = {
  "Day 1": [
    {
      time: "09:00 AM",
      title: "Check-in & Breakfast",
      description: "Arrive at the hackathon, collect your badge, grab fresh breakfast, and set up your workspace.",
      type: "general"
    },
    {
      time: "10:00 AM",
      title: "Opening Ceremony",
      description: "Introduction to Hackzz 2026, track details, partner APIs, and guidelines from the organizers.",
      type: "general"
    },
    {
      time: "11:00 AM",
      title: "Team Formation Mixer",
      description: "Pitch ideas, find teammates, and align on project goals before the hackathon starts.",
      type: "general"
    },
    {
      time: "12:00 PM",
      title: "Hackathon Begins!",
      description: "The timers start. Begin coding, designing, and formulating your solution architectures.",
      type: "hackathon"
    },
    {
      time: "08:00 PM",
      title: "Mentor Round 1",
      description: "One-on-one sessions with industry mentors to validate architectures, tech stack, and logic.",
      type: "workshop"
    }
  ],
  "Day 2": [
    {
      time: "08:00 AM",
      title: "Breakfast & Energizers",
      description: "Fuel up for the second day and participate in quick interactive games to refresh your mind.",
      type: "general"
    },
    {
      time: "12:00 PM",
      title: "Workshop: Scale on Cloud",
      description: "A developer session on optimizing WASM engines and hosting high-concurrency cloud nodes.",
      type: "workshop"
    },
    {
      time: "02:00 PM",
      title: "Mentor Round 2",
      description: "Halfway progress check. Fine-tune your prototype algorithms and user interfaces.",
      type: "workshop"
    },
    {
      time: "08:00 PM",
      title: "Pitch Deck Review",
      description: "Optional pitch polishing session to prepare your slides and demo pitches for the judges.",
      type: "workshop"
    }
  ],
  "Day 3": [
    {
      time: "09:00 AM",
      title: "Breakfast & Testing",
      description: "Final deployment test. Complete error checks and ensure deployment links are working.",
      type: "general"
    },
    {
      time: "11:59 AM",
      title: "Hackathon Ends (Deadline)",
      description: "Submission portal closes on Devpost. Commit your final code changes and record demo videos.",
      type: "hackathon"
    },
    {
      time: "02:00 PM",
      title: "Judging & Project Showcases",
      description: "Live demo booths. Present your prototype code and design directly to the evaluation jury.",
      type: "judging"
    },
    {
      time: "05:00 PM",
      title: "Closing & Awards Ceremony",
      description: "Announcing track winners, overall runner ups, distributing developer swag, and wrap-up.",
      type: "general"
    }
  ]
};

export function Schedule() {
  const [activeDay, setActiveDay] = useState<"Day 1" | "Day 2" | "Day 3">("Day 1");

  const getTypeStyles = (type: EventItem["type"]) => {
    switch (type) {
      case "hackathon":
        return "bg-red-50 text-red-650 border-red-150";
      case "workshop":
        return "bg-blue-50 text-blue-650 border-blue-150";
      case "judging":
        return "bg-purple-50 text-purple-650 border-purple-150";
      default:
        return "bg-neutral-100 text-neutral-600 border-neutral-200";
    }
  };

  return (
    <section id="schedule" className="relative w-full py-28 px-4 bg-white text-neutral-900 overflow-hidden border-b border-neutral-100">
      {/* Background light subtle glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 w-[500px] h-[300px] bg-blue-550/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-neutral-50 text-xs text-neutral-600 font-bold uppercase tracking-wider">
            Timeline Schedule
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-neutral-950">
            Event Roadmap.
          </h2>
          <p className="text-neutral-600 text-lg max-w-xl mx-auto leading-relaxed font-light">
            Plan your sprint. Keep track of workshop sessions, mentor check-ins, checkpoints, and deadlines.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {(["Day 1", "Day 2", "Day 3"] as const).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeDay === day ? "text-neutral-950" : "text-neutral-450 hover:text-neutral-750"
              }`}
            >
              {activeDay === day && (
                <motion.div
                  layoutId="scheduleActiveTab"
                  className="absolute inset-0 bg-neutral-100 border border-neutral-200 rounded-xl"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                {day === "Day 1" ? "Day 1 (July 24)" : day === "Day 2" ? "Day 2 (July 25)" : "Day 3 (July 26)"}
              </span>
            </button>
          ))}
        </div>

        {/* Timeline Events List */}
        <div className="relative border-l border-neutral-200 ml-4 md:ml-32 pl-8 space-y-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {SCHEDULE_DATA[activeDay].map((event, idx) => (
                <div key={idx} className="relative group">
                  
                  {/* Timeline node */}
                  <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-neutral-200 flex items-center justify-center transition-colors group-hover:border-blue-500">
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 group-hover:bg-blue-500 transition-colors" />
                  </div>

                  {/* Absolute time container for desktop */}
                  <div className="hidden md:block absolute -left-40 top-1.5 w-28 text-right text-sm font-semibold text-neutral-500 font-mono">
                    {event.time}
                  </div>

                  {/* Event details card */}
                  <div className="p-6 rounded-2xl bg-neutral-50/50 border border-neutral-150 hover:border-neutral-200 hover:bg-neutral-50 transition-all duration-350 flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        {/* Time for mobile */}
                        <span className="md:hidden text-xs font-semibold text-neutral-400 font-mono">
                          {event.time}
                        </span>
                        
                        <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border ${getTypeStyles(event.type)}`}>
                          {event.type}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-neutral-950 group-hover:text-blue-600 transition-colors">
                        {event.title}
                      </h3>
                      
                      <p className="text-sm text-neutral-600 font-light leading-relaxed max-w-2xl">
                        {event.description}
                      </p>
                    </div>
                  </div>

                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
