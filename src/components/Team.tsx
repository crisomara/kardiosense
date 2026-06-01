import { ExternalLink, Linkedin } from "lucide-react";

const team = [
  {
    name: "Omara Christian Kenneth",
    role: "Founder & CEO",
    bio: "Background in Biomedical Engineering and Machine learning researcher specialising in multi-modal biomedical signal fusion and explainable cardiac AI.",
    photo: "/images/founders/omara-christian.png",
    linkedin:
      "https://www.linkedin.com/in/omara-christian-kenneth?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Ogwal Emmanuel",
    role: "Co-Founder & CTO",
    bio: "Mobile and embedded systems engineer building Kardiosense's offline-first architecture for the world's most demanding clinical environments.",
    photo: "/images/founders/ogwal-emmanuel.jpg",
    linkedin:
      "https://www.linkedin.com/in/emmanuel-ogwal-49b8aa371?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Dr. Patricia K Wanjiru",
    role: "Co-Founder & Clinical Affairs",
    bio: "Clinician-scientist leading IRB protocols, validation studies and partnerships with African health systems.",
    photo: "/images/founders/dr-patricia-wanjiru.jpg",
    linkedin:
      "https://www.linkedin.com/in/ciru-kamau?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
];

const advisors = [
  {
    name: "Dr. Bamba Gaye",
    role: "Executive Director, AMedRA",
    affiliation:
      "MD, MSc, MPH, PhD. Executive Director, Alliance for Medical Research in Africa, and Adjunct Professor, Department of Biomedical Informatics, Emory University School of Medicine.",
    href: "https://www.amedra.org/",
  },
  {
    name: "Gurbinder Singh",
    role: "Chief Operating Officer, AMedRA",
    affiliation: "Operations leader supporting AMedRA's research, partnerships, and execution across African health innovation programs.",
    href: "https://www.amedra.org/",
  },
  {
    name: "Ezinne Eke Aso",
    role: "Healthcare Strategy & Partnerships",
    affiliation:
      "Healthcare consultant and strategist associated with Global Bridge Pharmaceuticals, with experience across business consulting, healthcare consulting, and market strategy.",
    href: "https://www.linkedin.com/in/ezinne-eke/",
  },
  {
    name: "Gari Clifford",
    role: "Biomedical Informatics & AI Health",
    affiliation:
      "Professor and Chair of Biomedical Informatics at Emory University, and Professor of Biomedical Engineering at Georgia Institute of Technology.",
    href: "https://en.wikipedia.org/wiki/Gari_Clifford",
  },
];

const partners = [
  {
    name: "Alliance for Medical Research in Africa",
    logo: "/images/partners/amedra.webp",
  },
  {
    name: "HSB ITI Health Innovation Consultancy",
    logo: "/images/partners/hsb-iti.png",
  },
];

const Team = () => (
  <section id="team" className="bg-teal text-white py-28">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 reveal">
        <p className="text-xs uppercase tracking-[0.25em] text-white/70 mb-4">Our Team</p>
        <h2 className="font-serif text-4xl md:text-6xl">The Team Behind the Heartbeat</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {team.map((p) => (
          <div key={p.role} className="reveal text-center">
            <div className="w-60 h-60 md:w-64 md:h-64 rounded-full mx-auto mb-6 bg-white/10 border-2 border-white/20 overflow-hidden shadow-elevated">
              <img
                src={p.photo}
                alt={p.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h3 className="font-serif text-2xl mb-1">{p.name}</h3>
            <p className="text-cyan-accent text-sm uppercase tracking-wider mb-3">{p.role}</p>
            <div className="flex justify-center gap-3 mb-4">
              <a
                href={p.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={`${p.name} on LinkedIn`}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                <Linkedin size={16} />
              </a>
            </div>
            <p className="text-white/85 text-sm leading-relaxed">{p.bio}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 reveal">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-white/70 mb-4">Mentors & Advisors</p>
          <h2 className="font-serif text-4xl md:text-5xl">Guiding the Work Forward</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {advisors.map((advisor) => (
            <a
              key={advisor.name}
              href={advisor.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/15 bg-white/10 p-6 text-center min-h-64 flex flex-col items-center justify-center"
            >
              <div className="h-24 w-24 rounded-full bg-white/15 border border-white/20 grid place-items-center mb-5">
                <span className="font-serif text-3xl text-white/80">
                  {advisor.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                  .slice(0, 2)}
                </span>
              </div>
              <h3 className="font-serif text-2xl mb-2">{advisor.name}</h3>
              <p className="text-cyan-accent text-xs uppercase tracking-wider mb-3">{advisor.role}</p>
              <p className="text-sm text-white/70 leading-relaxed">{advisor.affiliation}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-white/70">
                View profile <ExternalLink size={13} />
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-24 reveal">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-white/70 mb-8">Partners & Supporters</p>
        <div className="flex flex-wrap justify-center items-stretch gap-6 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="w-full sm:w-72 min-h-28 rounded-2xl bg-white border border-white/20 px-8 py-5 flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 max-w-52 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Team;
