import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

interface PrizeCard {
  place: string;
  amount: string;
  label: string;
  accentColor: string;
  accentBorder: string;
}

const PRIZES: PrizeCard[] = [
  {
    place: "2nd",
    amount: "₹2,000",
    label: "Runner Up",
    accentColor: "from-slate-400 to-slate-600",
    accentBorder: "border-slate-200 hover:border-slate-300"
  },
  {
    place: "1st",
    amount: "₹3,000",
    label: "Grand Champions",
    accentColor: "from-amber-400 to-yellow-600",
    accentBorder: "border-amber-200 hover:border-amber-300"
  },
  {
    place: "3rd",
    amount: "₹1,000",
    label: "Second Runner Up",
    accentColor: "from-amber-600 to-orange-700",
    accentBorder: "border-orange-200 hover:border-orange-300"
  }
];

export function Prizes() {
  return (
    <section id="prizes" className="relative w-full py-28 px-4 bg-white text-neutral-900 overflow-hidden border-b border-neutral-100">
      {/* Background light glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-yellow-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-neutral-50 text-xs text-neutral-600 font-bold uppercase tracking-wider">
            Rewards & Recognition
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-neutral-950">
            Prize Pool
          </h2>
          <p className="text-neutral-600 text-lg max-w-xl mx-auto leading-relaxed font-light">
            We celebrate innovation and hard work. Top teams walk away with cash prizes and recognition.
          </p>
        </div>

        {/* 3D Prize Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 items-center justify-center">
          {PRIZES.map((prize) => (
            <CardContainer
              key={prize.place}
              containerClassName="py-8 lg:py-12"
              className="w-full"
            >
              <CardBody
                className={`relative w-full h-auto rounded-3xl p-10 bg-neutral-50/60 border ${prize.accentBorder} transition-all duration-300 group flex flex-col items-center text-center ${
                  prize.place === "1st" ? "lg:scale-105 lg:-translate-y-2 shadow-lg shadow-amber-100/40" : ""
                }`}
              >
                {/* Place Badge */}
                <CardItem translateZ={40} className="mb-4">
                  <span
                    className={`text-xs font-mono font-bold px-4 py-1.5 rounded-full bg-gradient-to-r ${prize.accentColor} text-white uppercase tracking-wider`}
                  >
                    {prize.place} Place
                  </span>
                </CardItem>

                {/* Prize Label */}
                <CardItem translateZ={30} className="mb-3">
                  <span className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                    {prize.label}
                  </span>
                </CardItem>

                {/* Amount */}
                <CardItem translateZ={60}>
                  <span className="text-5xl sm:text-6xl font-extrabold tracking-tight text-neutral-950">
                    {prize.amount}
                  </span>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>

      </div>
    </section>
  );
}
