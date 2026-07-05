import React, { useState } from "react";
import { motion } from "motion/react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="relative w-full py-28 px-4 bg-neutral-950 text-white overflow-hidden">
      {/* Background glow shadow */}
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs text-neutral-400 mb-6 uppercase tracking-wider">
            Reach Out
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300">
            Get in Touch.
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed font-light">
            Need sponsorship details, have API questions, or need coordinate support? Write to us and we'll reply shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-4xl mx-auto">
          
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Contact Details</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                For questions regarding technical tracks, rules, API access, or mentor registrations.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email info */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-lg text-blue-400">
                  ✉
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 block">General Support</span>
                  <a href="mailto:support@hackzz.com" className="text-sm text-neutral-300 hover:text-white transition-colors">
                    support@hackzz.com
                  </a>
                </div>
              </div>

              {/* Discord info */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-lg text-indigo-400">
                  ⚡
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 block">Discord Community</span>
                  <a href="#" className="text-sm text-neutral-300 hover:text-white transition-colors">
                    discord.gg/hackzz
                  </a>
                </div>
              </div>

              {/* Location info */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-lg text-emerald-400">
                  ⚛
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 block">Venue & Location</span>
                  <span className="text-sm text-neutral-300">
                    Fully Virtual / Discord Rooms
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-neutral-900/30 border border-neutral-905 p-8 rounded-3xl backdrop-blur-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="form-name" className="text-xs font-mono uppercase tracking-wider text-neutral-450 block">Name</label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-11 px-4 rounded-xl bg-neutral-950 border border-neutral-900 focus:border-blue-500 focus:outline-none text-sm transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="form-email" className="text-xs font-mono uppercase tracking-wider text-neutral-455 block">Email Address</label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 px-4 rounded-xl bg-neutral-950 border border-neutral-900 focus:border-blue-500 focus:outline-none text-sm transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="form-message" className="text-xs font-mono uppercase tracking-wider text-neutral-460 block">Message</label>
                <textarea
                  id="form-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-4 rounded-xl bg-neutral-950 border border-neutral-900 focus:border-blue-500 focus:outline-none text-sm transition-colors resize-none"
                  placeholder="Your message details here..."
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-white hover:bg-neutral-200 text-black font-semibold rounded-xl text-sm transition-colors flex items-center justify-center cursor-pointer shadow-lg shadow-white/5"
              >
                Send Message
              </button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-xl text-center"
                >
                  ✓ Thanks! We received your message and will get back to you shortly.
                </motion.div>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
