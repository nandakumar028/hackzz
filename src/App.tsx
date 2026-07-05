import React, { useState } from "react";
import { Navbar } from "@/frontend/components/Navbar";
import { Hero } from "@/frontend/components/Hero";
import { About } from "@/frontend/components/About";
import { Tracks } from "@/frontend/components/Tracks";
import { Schedule } from "@/frontend/components/Schedule";
import { Prizes } from "@/frontend/components/Prizes";
import { Team } from "@/frontend/components/Team";
import { FAQs } from "@/frontend/components/FAQs";
import { Contact } from "@/frontend/components/Contact";
import { Registration } from "@/frontend/components/Registration";

export default function App() {
  const [view, setView] = useState<"home" | "about" | "contact" | "register">("home");

  const navigateTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    if (target === "about") {
      setView("about");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (target === "contact") {
      setView("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (target === "register") {
      setView("register");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (target === "home") {
      setView("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setView("home");
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 80);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-blue-500/30 font-sans scroll-smooth flex flex-col justify-between">
      <div>
        {/* Navigation Header */}
        <Navbar currentView={view} onViewChange={setView} />

        {/* State-based Page Rendering */}
        {view === "home" && (
          <>
            {/* Hero Section */}
            <Hero />

            {/* Schedule Section */}
            <Schedule />

            {/* Tracks Section */}
            <Tracks />

            {/* Prizes Section */}
            <Prizes />

            {/* FAQs Section */}
            <FAQs />
          </>
        )}

        {view === "about" && (
          <div className="pt-20 min-h-[80vh]">
            <About />
            <Team />
          </div>
        )}

        {view === "contact" && (
          <div className="pt-20 min-h-[80vh]">
            <Contact />
          </div>
        )}

        {view === "register" && (
          <div className="pt-20 min-h-[80vh]">
            <Registration />
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-900 bg-neutral-950 py-12 px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-500">
          <div className="flex flex-col items-center md:items-start gap-2">
            <a 
              href="#home" 
              onClick={(e) => navigateTo(e, "home")}
              className="text-white font-bold tracking-wider text-base hover:opacity-80 transition-opacity"
            >
              HACKZZ.
            </a>
            <p className="text-xs font-light">Where Thinking Turns Into Solutions.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-6">
            <a 
              href="#about" 
              onClick={(e) => navigateTo(e, "about")}
              className="hover:text-neutral-300 transition-colors"
            >
              About
            </a>
            <a 
              href="#schedule" 
              onClick={(e) => navigateTo(e, "schedule")}
              className="hover:text-neutral-300 transition-colors"
            >
              Timeline
            </a>
            <a 
              href="#tracks" 
              onClick={(e) => navigateTo(e, "tracks")}
              className="hover:text-neutral-300 transition-colors"
            >
              Tracks
            </a>
            <a 
              href="#register" 
              onClick={(e) => navigateTo(e, "register")}
              className="hover:text-neutral-300 transition-colors"
            >
              Register
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs font-light">© 2026 Hackzz Organizers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
