import { Cover } from "@/components/ui/cover";
import {
  CardContainer,
  CardBody,
  CardItem,
} from "@/components/ui/3d-card";

export default function App() {
  return (
    <div className="bg-neutral-950 text-white">

      {/* ── HERO SECTION (Cover Component) ── */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4">

        {/* Hero background image */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />

        {/* Dark overlay so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-neutral-950" />

        {/* Subtle blue glow matching crystal */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-700/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl w-full text-center flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-900/60 bg-black/40 backdrop-blur text-xs text-blue-300 mb-10 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
            <span>48-Hour Hackathon &nbsp;·&nbsp; July 2026</span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-4 drop-shadow-2xl">
            <Cover containerClassName="px-8 py-3 rounded-lg">Hackzz</Cover>
          </h1>

          <p className="text-xl md:text-2xl font-semibold text-blue-200/90 mb-8 drop-shadow tracking-wide">
            Where Thinking Turns into Solutions.
          </p>

          <p className="text-blue-100/70 text-lg md:text-xl max-w-2xl mb-6 leading-relaxed drop-shadow">
            Join the most electrifying hackathon of the year. 48 hours. Limitless ideas. One chance to make history — and take home incredible prizes.
          </p>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-8 mb-12">
            {[
              { value: "500+", label: "Participants" },
              { value: "₹5L", label: "Prize Pool" },
              { value: "48h", label: "Duration" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-bold text-white drop-shadow">{value}</span>
                <span className="text-xs text-blue-300/70 uppercase tracking-widest mt-1">{label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#info"
              className="h-12 px-8 rounded-xl bg-white text-black font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg shadow-blue-500/20 flex items-center gap-2"
            >
              Register Now
              <span className="text-lg">→</span>
            </a>
            <a
              href="#info"
              className="h-12 px-8 flex items-center justify-center rounded-xl border border-blue-800/60 bg-black/30 backdrop-blur hover:bg-blue-950/50 transition-all duration-200 text-blue-200 font-medium"
            >
              View Tracks
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-400/50 text-xs">
          <span className="tracking-widest uppercase text-[10px]">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-blue-400/50 to-transparent" />
        </div>
      </section>

      {/* ── INFORMATION SECTION (3D Card Component) ── */}
      <section id="info" className="relative w-full py-24 px-4 overflow-hidden">
        {/* Background glows matching crystal palette */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-700/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs text-neutral-400 mb-6 uppercase tracking-wide">
              Event Tracks
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              What will you build?
            </h2>
            <p className="text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed">
              Choose your track, form your team, and compete for glory. Hover the cards to explore each challenge domain.
            </p>
          </div>

          {/* 3D Cards Grid */}
          <div className="flex flex-wrap items-center justify-center gap-6">

            {/* Card 1 — AI & ML */}
            <CardContainer containerClassName="py-4">
              <CardBody className="bg-neutral-900/80 backdrop-blur relative group/card border border-neutral-800 hover:border-blue-500/40 w-72 h-auto rounded-2xl p-6 transition-colors duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                <CardItem translateZ={60} className="text-3xl mb-4">🤖</CardItem>
                <CardItem translateZ={50} className="text-lg font-bold text-white mb-2">
                  AI & Machine Learning
                </CardItem>
                <CardItem translateZ={40} className="text-neutral-400 text-sm leading-relaxed">
                  Build intelligent systems, train models, or create AI-powered applications that solve real-world problems.
                </CardItem>
                <CardItem translateZ={80} className="w-full mt-6">
                  <div className="w-full h-32 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/10 flex items-center justify-center gap-3">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 h-8 rounded-full bg-blue-400/30 border border-blue-400/50 flex items-center justify-center text-xs">🧠</div>
                      <div className="w-px h-4 bg-blue-400/30" />
                      <div className="flex gap-1">
                        <div className="w-5 h-5 rounded bg-cyan-400/30 border border-cyan-400/50" />
                        <div className="w-5 h-5 rounded bg-blue-400/30 border border-blue-400/50" />
                      </div>
                    </div>
                  </div>
                </CardItem>
                <div className="flex items-center justify-between mt-5">
                  <CardItem translateZ={30} className="text-xs text-blue-400 font-medium">
                    🏆 ₹2,00,000 Prize
                  </CardItem>
                  <CardItem translateZ={30} className="text-xs text-neutral-500">
                    200 spots
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>

            {/* Card 2 — Web3 */}
            <CardContainer containerClassName="py-4">
              <CardBody className="bg-neutral-900/80 backdrop-blur relative group/card border border-neutral-800 hover:border-violet-500/40 w-72 h-auto rounded-2xl p-6 transition-colors duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-pink-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                <CardItem translateZ={60} className="text-3xl mb-4">⛓️</CardItem>
                <CardItem translateZ={50} className="text-lg font-bold text-white mb-2">
                  Web3 & Blockchain
                </CardItem>
                <CardItem translateZ={40} className="text-neutral-400 text-sm leading-relaxed">
                  Decentralized apps, smart contracts, DeFi protocols, or NFT platforms — the future of the web is yours to build.
                </CardItem>
                <CardItem translateZ={100} className="w-full mt-6">
                  <div className="relative w-full h-32 rounded-xl bg-gradient-to-br from-violet-600/20 to-pink-600/20 border border-violet-500/10 flex items-center justify-center overflow-hidden">
                    <div className="absolute w-24 h-24 rounded-full bg-violet-500/10 blur-xl" />
                    <div className="relative flex gap-3">
                      {["⬡", "⬡", "⬡"].map((s, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-400 to-pink-500 flex items-center justify-center text-sm shadow-lg"
                          style={{ transform: `translateY(${i % 2 === 0 ? -6 : 6}px)` }}
                        >
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardItem>
                <div className="flex items-center justify-between mt-5">
                  <CardItem translateZ={30} className="text-xs text-violet-400 font-medium">
                    🏆 ₹1,50,000 Prize
                  </CardItem>
                  <CardItem translateZ={30} className="text-xs text-neutral-500">
                    150 spots
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>

            {/* Card 3 — Open Innovation */}
            <CardContainer containerClassName="py-4">
              <CardBody className="bg-neutral-900/80 backdrop-blur relative group/card border border-neutral-800 hover:border-emerald-500/40 w-72 h-auto rounded-2xl p-6 transition-colors duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                <CardItem translateZ={60} className="text-3xl mb-4">🚀</CardItem>
                <CardItem translateZ={50} className="text-lg font-bold text-white mb-2">
                  Open Innovation
                </CardItem>
                <CardItem translateZ={40} className="text-neutral-400 text-sm leading-relaxed">
                  No constraints, no boundaries. Build anything that creates impact — SaaS, mobile apps, developer tools, or hardware hacks.
                </CardItem>
                <CardItem translateZ={80} className="w-full mt-6">
                  <div className="w-full h-32 rounded-xl bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border border-emerald-500/10 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-2">
                      {["SaaS", "Mobile", "DevTools", "Hardware"].map((label) => (
                        <div key={label} className="px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono text-center">
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardItem>
                <div className="flex items-center justify-between mt-5">
                  <CardItem translateZ={30} className="text-xs text-emerald-400 font-medium">
                    🏆 ₹1,50,000 Prize
                  </CardItem>
                  <CardItem translateZ={30} className="text-xs text-neutral-500">
                    150 spots
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>

          </div>
        </div>
      </section>

    </div>
  );
}
