import { motion } from "motion/react";
import BlurText from "@/components/ui/BlurText";

export function About() {
  const points = [
    {
      title: "The Spark",
      description: "Where bold ideas ignite. We unite over 500 developers, UI/UX designers, and industry experts to address critical real-world challenges.",
    },
    {
      title: "The Hustle",
      description: "A high-octane 48-hour sprint of raw engineering, rapid prototyping, and intense collaboration fueled by passion and caffeine.",
    },
  ];

  return (
    <section id="about" className="relative w-full py-28 px-4 bg-white text-neutral-800 overflow-hidden border-b border-neutral-100">
      {/* ── GRID PATTERN BACKGROUND (LIGHT MODE) ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* ── GRADIENT GLOWS ── */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Information Description */}
          <div className="flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-200 bg-neutral-50 text-xs text-neutral-600 font-semibold uppercase tracking-widest backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              About the Arena
            </div>
            
            <BlurText
              text="Where Bold Ideas Meet Fast Execution."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl sm:text-5xl font-extrabold leading-tight text-neutral-950 tracking-tight"
            />
            
            <p className="text-neutral-600 leading-relaxed font-light text-base">
              Hackzz is more than just a coding competition; it's a launchpad for future founders, innovators, and creators. For 48 hours, developers, designers, and domain experts gather to build solutions for real-world issues.
            </p>
            
            <p className="text-neutral-600 leading-relaxed font-light text-base">
              Whether you are an experienced developer looking to push your boundaries or a beginner eager to experience your first rapid sprint, Hackzz provides the ecosystem, tooling, and mentorship to scale your ideas.
            </p>
          </div>

          {/* Right Column: Balanced Typographic Points */}
          <div className="flex flex-col gap-12 lg:pl-6">
            {points.map((point, idx) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="flex gap-4 items-start"
              >
                {/* Minimalist dot indicator */}
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2.5 shrink-0 animate-pulse" />

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-neutral-950 tracking-tight">
                    {point.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
