import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface RegData {
  fullName: string;
  email: string;
  experience: string;
  participation: "solo" | "create" | "join";
  teamName: string;
  track: string;
}

const INITIAL_REG_DATA: RegData = {
  fullName: "",
  email: "",
  experience: "Intermediate",
  participation: "solo",
  teamName: "",
  track: "AI & Machine Learning"
};

export function Registration() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<RegData>(INITIAL_REG_DATA);
  const [finished, setFinished] = useState(false);

  const nextStep = () => {
    if (step === 1 && (!formData.fullName || !formData.email)) return;
    if (step === 2 && formData.participation !== "solo" && !formData.teamName) return;
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFinished(true);
  };

  const resetForm = () => {
    setFormData(INITIAL_REG_DATA);
    setStep(1);
    setFinished(false);
  };

  return (
    <section id="registration" className="relative w-full py-28 px-4 bg-neutral-950 text-white overflow-hidden border-t border-neutral-900">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-700/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs text-neutral-400 mb-6 uppercase tracking-wider">
            Secure Your Slot
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300">
            Event Registration.
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed font-light">
            Fill out the form below. Team captains should register their names and create their teams first.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-xl mx-auto bg-neutral-900/40 border border-neutral-900 p-6 sm:p-8 rounded-3xl backdrop-blur-md relative overflow-hidden min-h-[380px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {!finished ? (
              <motion.form
                key="reg-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col justify-between flex-grow h-full space-y-8"
              >
                {/* Steps indicator */}
                <div className="flex items-center justify-between border-b border-neutral-850 pb-4 mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                    Step {step} of 4
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`w-5 h-1.5 rounded-full transition-all duration-300 ${
                          step >= i ? "bg-blue-500" : "bg-neutral-800"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Step 1: Personal Details */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-bold">Personal Details</h3>
                    
                    <div className="space-y-1.5">
                      <label htmlFor="reg-name" className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">Full Name</label>
                      <input
                        id="reg-name"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full h-11 px-4 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-blue-500 focus:outline-none text-sm transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label htmlFor="reg-email" className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">Email Address</label>
                      <input
                        id="reg-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-11 px-4 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-blue-500 focus:outline-none text-sm transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="reg-exp" className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">Coding Experience</label>
                      <select
                        id="reg-exp"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full h-11 px-4 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-blue-500 focus:outline-none text-sm transition-colors text-neutral-300"
                      >
                        <option value="Beginner">Beginner (&lt; 1 Year)</option>
                        <option value="Intermediate">Intermediate (1-3 Years)</option>
                        <option value="Expert">Expert (3+ Years)</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Participation & Team */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-bold">Participation Model</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { id: "solo", label: "Participate Solo" },
                        { id: "create", label: "Create Team" },
                        { id: "join", label: "Join Team" }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, participation: item.id as any })}
                          className={`p-3 rounded-xl border text-xs font-semibold text-center cursor-pointer transition-all ${
                            formData.participation === item.id
                              ? "bg-blue-600/10 border-blue-500 text-blue-400"
                              : "bg-neutral-950 border-neutral-850 text-neutral-450 hover:border-neutral-800"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                    {formData.participation !== "solo" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="space-y-1.5 pt-2"
                      >
                        <label htmlFor="reg-team" className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
                          {formData.participation === "create" ? "New Team Name" : "Team ID / Code"}
                        </label>
                        <input
                          id="reg-team"
                          type="text"
                          required
                          value={formData.teamName}
                          onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                          className="w-full h-11 px-4 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-blue-500 focus:outline-none text-sm transition-colors"
                          placeholder={formData.participation === "create" ? "Team Aether" : "e.g., T-1029"}
                        />
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* Step 3: Track Selection */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-bold">Select Theme Track</h3>

                    <div className="space-y-2">
                      {[
                        "AI & Machine Learning",
                        "Web3 & Blockchain",
                        "FinTech Innovation",
                        "Open Innovation"
                      ].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setFormData({ ...formData, track: item })}
                          className={`w-full p-4 rounded-xl border text-sm font-semibold text-left cursor-pointer transition-all flex items-center justify-between ${
                            formData.track === item
                              ? "bg-blue-600/10 border-blue-500 text-blue-400"
                              : "bg-neutral-950 border-neutral-855 text-neutral-450 hover:border-neutral-800"
                          }`}
                        >
                          <span>{item}</span>
                          {formData.track === item && (
                            <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Summary & Submit */}
                {step === 4 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-bold">Review Registration</h3>
                    
                    <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-850 space-y-3 text-xs sm:text-sm font-light">
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Name:</span>
                        <span className="text-white font-medium">{formData.fullName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Email:</span>
                        <span className="text-white font-medium">{formData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Experience:</span>
                        <span className="text-white font-medium">{formData.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Model:</span>
                        <span className="text-white font-medium uppercase">{formData.participation}</span>
                      </div>
                      {formData.participation !== "solo" && (
                        <div className="flex justify-between">
                          <span className="text-neutral-500">Team Name:</span>
                          <span className="text-white font-medium">{formData.teamName}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Track:</span>
                        <span className="text-white font-medium text-blue-400">{formData.track}</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center gap-4 pt-6 border-t border-neutral-850/60 mt-auto">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-5 py-2.5 border border-neutral-800 hover:border-neutral-750 text-neutral-400 hover:text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={
                        (step === 1 && (!formData.fullName || !formData.email)) ||
                        (step === 2 && formData.participation !== "solo" && !formData.teamName)
                      }
                      className="px-6 py-2.5 bg-white hover:bg-neutral-200 text-black rounded-xl text-xs sm:text-sm font-semibold transition-colors disabled:opacity-40 disabled:hover:bg-white cursor-pointer"
                    >
                      Next Step
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-lg shadow-blue-500/20"
                    >
                      Complete Registration
                    </button>
                  )}
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="reg-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-6"
              >
                {/* Checkmark icon */}
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-4xl text-emerald-400 mx-auto">
                  ✓
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Registration Complete!</h3>
                  <p className="text-sm text-neutral-400 font-light max-w-sm mx-auto leading-relaxed">
                    Welcome aboard, <span className="text-white font-medium">{formData.fullName}</span>! We sent confirmation details and a Discord invitation to your email.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-2.5 border border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Register Another Person
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
