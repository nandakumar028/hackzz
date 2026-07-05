import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

interface Track {
  icon: string;
  title: string;
  prize: string;
  description: string;
  colorClass: string;
  borderColor: string;
  tags: string[];
}

const TRACKS: Track[] = [
  {
    icon: "🧠",
    title: "AI & Machine Learning",
    prize: "₹1,50,000",
    description: "Build deep learning networks, generative models, or automation engines that tackle core industry bottlenecks.",
    colorClass: "from-blue-600/20 to-cyan-500/10",
    borderColor: "hover:border-blue-500/40",
    tags: ["LLMs", "ONNX", "PyTorch", "NLP"]
  },
  {
    icon: "⛓️",
    title: "Web3 & Blockchain",
    prize: "₹1,20,000",
    description: "Design decentralized protocols, smart vaults, NFT utilities, or cross-chain scaling mechanisms for Web3 users.",
    colorClass: "from-violet-600/20 to-fuchsia-500/10",
    borderColor: "hover:border-violet-500/40",
    tags: ["Solidity", "ZK-Rollups", "Ethers", "Rust"]
  },
  {
    icon: "💳",
    title: "FinTech Innovation",
    prize: "₹1,20,000",
    description: "Pioneer automated accounting software, decentralized insurance pools, micropayment systems, or trading bots.",
    colorClass: "from-emerald-600/20 to-teal-500/10",
    borderColor: "hover:border-emerald-500/40",
    tags: ["Stripe APIs", "Next.js", "Plaid", "GraphQL"]
  },
  {
    icon: "🚀",
    title: "Open Innovation",
    prize: "₹1,10,000",
    description: "No boundaries, no constraints. Bring your wildest hardware hacks, developer tools, or SaaS ideas to life.",
    colorClass: "from-amber-600/20 to-red-500/10",
    borderColor: "hover:border-amber-500/40",
    tags: ["IoT", "WASM", "Mobile Apps", "Any Tech"]
  }
];

export function Tracks() {
  return (
    <section id="tracks" className="relative w-full py-28 px-4 bg-neutral-950 text-white overflow-hidden">
      {/* Subtle bottom gradient glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs text-neutral-400 mb-6 uppercase tracking-wider">
            Themes & Tracks
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300">
            Choose Your Challenge.
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed font-light">
            Focus your energy on one of our targeted tracks, form your squad, and build the ultimate prototype to win.
          </p>
        </div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
          {TRACKS.map((track) => (
            <CardContainer key={track.title} containerClassName="py-6">
              <CardBody className="bg-neutral-900/80 backdrop-blur border border-neutral-800 w-full min-h-[380px] rounded-2xl p-6 transition-colors duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-black/50 relative">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${track.colorClass} opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 -z-10`} />

                <div>
                  <CardItem translateZ={60} className="text-3xl mb-4">
                    {track.icon}
                  </CardItem>
                  
                  <CardItem translateZ={50} className="text-lg font-bold text-white mb-2 leading-tight">
                    {track.title}
                  </CardItem>
                  
                  <CardItem translateZ={40} className="text-neutral-400 text-xs leading-relaxed mb-6 font-light">
                    {track.description}
                  </CardItem>
                </div>

                <div>
                  {/* Tags */}
                  <CardItem translateZ={45} className="flex flex-wrap gap-1.5 mb-6">
                    {track.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-neutral-950 text-neutral-500 border border-neutral-900"
                      >
                        {tag}
                      </span>
                    ))}
                  </CardItem>

                  <div className="flex items-center justify-between border-t border-neutral-800/40 pt-4 mt-auto">
                    <CardItem translateZ={30} className="text-xs text-blue-400 font-semibold tracking-wider uppercase">
                      🏆 {track.prize} Prize
                    </CardItem>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

      </div>
    </section>
  );
}
