import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

interface TeamMember {
  name: string;
  role: string;
  avatarEmoji: string;
  github: string;
  linkedin: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Aarav Patel",
    role: "Lead Organizer",
    avatarEmoji: "👨‍💻",
    github: "#",
    linkedin: "#"
  },
  {
    name: "Priya Sharma",
    role: "Technical Director",
    avatarEmoji: "👩‍💻",
    github: "#",
    linkedin: "#"
  },
  {
    name: "Vikram Malhotra",
    role: "Sponsorship Lead",
    avatarEmoji: "👨‍💼",
    github: "#",
    linkedin: "#"
  },
  {
    name: "Rohan Deshmukh",
    role: "Developer Relations",
    avatarEmoji: "👨‍🎤",
    github: "#",
    linkedin: "#"
  },
  {
    name: "Neha Sen",
    role: "Lead UI/UX Designer",
    avatarEmoji: "👩‍🎨",
    github: "#",
    linkedin: "#"
  },
  {
    name: "Kabir Kapoor",
    role: "Operations Lead",
    avatarEmoji: "👨‍🚀",
    github: "#",
    linkedin: "#"
  }
];

export function Team() {
  return (
    <section id="team" className="relative w-full py-28 px-4 bg-neutral-950 text-white overflow-hidden border-t border-neutral-900">
      {/* ── GRID PATTERN BACKGROUND ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10 pointer-events-none" />

      {/* Background glow overlay */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[400px] h-[300px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs text-neutral-400 font-semibold uppercase tracking-widest backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Organizing Committee
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white mt-4">
            Meet the Team.
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed font-light">
            We are a group of developers, designers, and community builders dedicated to hosting India's best developer experiences.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <CardContainer key={member.name} containerClassName="!py-0 w-full">
              <CardBody className="h-auto w-full bg-neutral-900/40 border border-neutral-800/80 backdrop-blur-md hover:border-blue-500/30 hover:bg-neutral-900/60 rounded-2xl p-6 flex items-center gap-4 transition-all duration-300 group">
                {/* Member Emoji Icon */}
                <CardItem
                  translateZ={50}
                  className="w-14 h-14 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-3xl group-hover:scale-105 group-hover:border-blue-400/30 transition-all duration-300 shrink-0"
                >
                  {member.avatarEmoji}
                </CardItem>

                {/* Information */}
                <div className="flex-grow">
                  <CardItem
                    translateZ={40}
                    as="h3"
                    className="text-base font-bold text-white group-hover:text-blue-400 transition-colors"
                  >
                    {member.name}
                  </CardItem>
                  <CardItem
                    translateZ={30}
                    as="span"
                    className="text-xs text-neutral-400 font-light block mb-2"
                  >
                    {member.role}
                  </CardItem>

                  {/* Social Links */}
                  <CardItem translateZ={40} className="flex items-center gap-2.5">
                    <a
                      href={member.github}
                      className="text-neutral-500 hover:text-white transition-colors"
                      aria-label={`${member.name} Github`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                      </svg>
                    </a>
                    
                    <a
                      href={member.linkedin}
                      className="text-neutral-500 hover:text-white transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

      </div>
    </section>
  );
}
