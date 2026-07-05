import { motion } from "motion/react";
import { Cover } from "@/components/ui/cover";
import { Countdown } from "./Countdown";
import BlurText from "@/components/ui/BlurText";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-neutral-950 text-white pt-24 pb-16 px-4">
      {/* Hero background image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />

      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-neutral-950" />


      {/* ── GRADIENT GLOWS ── */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* ── CONTENT CONTAINER ── */}
      <div className="relative z-10 max-w-5xl w-full text-center flex flex-col items-center">
        

        {/* Hero Title */}
        <div className="flex flex-col items-center mb-6">
          <BlurText
            text="Where Thinking Turns Into"
            delay={100}
            animateBy="words"
            direction="top"
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none text-white justify-center text-center"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-4 inline-block"
          >
            <Cover containerClassName="px-8 py-3 rounded-2xl">Solutions.</Cover>
          </motion.div>
        </div>

        {/* Subtitle */}
        <BlurText
          text="Unleash your creativity, collaborate with top developers, and build projects that redefine technology. 48 hours of pure innovation."
          delay={150}
          animateBy="words"
          direction="top"
          className="text-lg sm:text-xl text-neutral-300 max-w-2xl mb-8 leading-relaxed font-light justify-center text-center"
        />

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-10 w-full"
        >
          <Countdown />
        </motion.div>

        {/* Hero Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
        >
          <motion.a
            whileHover={{ scale: 1.03, boxShadow: "0px 0px 20px rgba(59,130,246,0.4)" }}
            whileTap={{ scale: 0.98 }}
            href="#registration"
            className="w-full sm:w-auto h-13 px-8 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 hover:from-blue-500 hover:to-indigo-500 transition-all duration-200"
          >
            Register Now
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.05)" }}
            whileTap={{ scale: 0.98 }}
            href="#tracks"
            className="w-full sm:w-auto h-13 px-8 rounded-xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-md text-neutral-200 font-medium flex items-center justify-center hover:border-neutral-700 transition-all duration-200"
          >
            View Tracks
          </motion.a>
        </motion.div>

        {/* Small highlights row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full max-w-3xl border-t border-neutral-900 pt-8 grid grid-cols-3 gap-4"
        >
          {[
            { value: "₹5,00,000", label: "Prize Pool" },
            { value: "500+", label: "Hackers" },
            { value: "48 Hours", label: "of Hackathon" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
                {item.value}
              </span>
              <span className="text-[10px] sm:text-xs text-neutral-500 uppercase tracking-widest mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-8 bottom-1/4 hidden xl:flex flex-col gap-4 text-xs font-mono text-neutral-700">
        <span>[01] // INNOVATE</span>
        <span>[02] // ASSEMBLE</span>
        <span>[03] // DEPLOY</span>
      </div>
      
      <div className="absolute right-8 bottom-1/4 hidden xl:block text-xs font-mono text-neutral-700 writing-mode-vertical">
        <span>JULY 24-26, 2026 // ONLINE</span>
      </div>
    </section>
  );
}
