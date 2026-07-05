import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface NavLink {
  label: string;
  href: string;
}

const LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

interface NavbarProps {
  currentView: "home" | "about" | "contact" | "register";
  onViewChange: (view: "home" | "about" | "contact" | "register") => void;
}

export function Navbar({ currentView, onViewChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (currentView !== "home") {
        setActiveSection(currentView);
        return;
      }

      // Detect active section based on scroll position on the home page
      const sections = LINKS.map((link) => link.href.substring(1));
      let currentSection = "home";

      for (const section of sections) {
        if (section === "about" || section === "contact") continue;
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentView]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = href.substring(1);

    if (target === "about") {
      onViewChange("about");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (target === "contact") {
      onViewChange("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (target === "register") {
      onViewChange("register");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (target === "home") {
      onViewChange("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      onViewChange("home");
      // Wait for DOM to render the home view elements
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 80);
    }
  };

  // Detect if current page has a light (white) background
  const isLightPage = currentView === "about";

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isLightPage
            ? scrolled
              ? "border-b border-neutral-200 bg-white/90 backdrop-blur-md py-4 shadow-sm"
              : "bg-white/90 backdrop-blur-md py-6 border-b border-neutral-100"
            : scrolled
              ? "border-b border-neutral-900 bg-neutral-950/85 backdrop-blur-md py-4"
              : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className={`text-xl font-bold tracking-tight hover:opacity-90 transition-opacity cursor-pointer ${
              isLightPage ? "text-neutral-950" : "text-white"
            }`}
          >
            HACKZZ<span className="text-blue-500">.</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm">
            {LINKS.map((link) => {
              const sectionName = link.href.substring(1);
              const isActive =
                (sectionName === "about" && currentView === "about") ||
                (sectionName === "contact" && currentView === "contact") ||
                (currentView === "home" && activeSection === sectionName);

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-2 py-1 font-medium transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? isLightPage ? "text-neutral-950" : "text-white"
                      : isLightPage ? "text-neutral-500 hover:text-neutral-900" : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Register CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#register"
              onClick={(e) => handleNavClick(e, "#register")}
              className={`text-xs px-5 py-2.5 font-semibold rounded-xl transition-colors shadow-lg cursor-pointer ${
                isLightPage
                  ? "bg-neutral-950 text-white hover:bg-neutral-800 hover:shadow-neutral-200/20"
                  : "bg-white text-black hover:bg-neutral-200 hover:shadow-white/5"
              }`}
            >
              Register Now
            </a>
          </div>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className={`block lg:hidden transition-colors focus:outline-none z-50 cursor-pointer ${
              isLightPage ? "text-neutral-800 hover:text-neutral-650" : "text-neutral-400 hover:text-white"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col justify-center items-center lg:hidden"
          >
            <nav className="flex flex-col gap-6 text-center text-lg mb-8">
              {LINKS.map((link, index) => {
                const sectionName = link.href.substring(1);
                const isActive =
                  (sectionName === "about" && currentView === "about") ||
                  (sectionName === "contact" && currentView === "contact") ||
                  (currentView === "home" && activeSection === sectionName);

                return (
                  <motion.a
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`font-semibold tracking-wide cursor-pointer ${
                      isActive ? "text-blue-400" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: LINKS.length * 0.05 }}
            >
              <a
                href="#register"
                onClick={(e) => handleNavClick(e, "#register")}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/20 cursor-pointer"
              >
                Register Now
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
