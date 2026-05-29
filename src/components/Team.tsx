import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Omara Christian Kenneth",
    role: "Founder & CEO",
    bio: "Background in Biomedical Engineering and Machine learning researcher specialising in multi-modal biomedical signal fusion and explainable cardiac AI.",
    photo: "/images/founders/omara-christian.png",
    linkedin: "https://www.linkedin.com/in/omara-christian-kenneth?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    twitter: "#",
  },
  {
    name: "Ogwal Emmanuel",
    role: "Co-Founder & CTO",
    bio: "Mobile and embedded systems engineer building Kardiosense's offline-first architecture for the world's most demanding clinical environments.",
    photo: "/images/founders/ogwal-emmanuel.jpg",
    linkedin: "https://www.linkedin.com/in/emmanuel-ogwal-49b8aa371?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    twitter: "#",
  },
  {
    name: "Dr. Patricia K Wanjiru",
    role: "Co-Founder & Clinical Affairs",
    bio: "Clinician-scientist leading IRB protocols, validation studies and partnerships with African health systems.",
    photo: "/images/founders/dr-patricia-wanjiru.jpg",
    linkedin: "https://www.linkedin.com/in/ciru-kamau?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    twitter: "#",
  },
];

const Team = () => (
  <section id="team" className="bg-teal text-white py-28">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 reveal">
        <p className="text-xs uppercase tracking-[0.25em] text-white/70 mb-4">Our Team</p>
        <h2 className="font-serif text-4xl md:text-6xl">The Team Behind the Heartbeat</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {team.map((p) => (
          <div key={p.role} className="reveal text-center">
           <div className="w-48 h-48 rounded-full mx-auto mb-5 bg-white/10 border-2 border-white/20 overflow-hidden">
  {p.photo ? (
    <img
      src={p.photo}
      alt={p.name}
      className="w-full h-full object-cover object-center"
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center">
      <span className="font-serif text-3xl text-white/60">KS</span>
    </div>
  )}
</div>
            <h3 className="font-serif text-2xl mb-1">{p.name}</h3>
            <p className="text-cyan-accent text-sm uppercase tracking-wider mb-3">{p.role}</p>
            <div className="flex justify-center gap-3 mb-4">
              <a href={p.linkedin} aria-label="LinkedIn" className="p-2 rounded-full bg-white/10 hover:bg-white/20">
                <Linkedin size={16} />
              </a>
              <a href={p.twitter} aria-label="Twitter" className="p-2 rounded-full bg-white/10 hover:bg-white/20">
                <Twitter size={16} />
              </a>
            </div>
            <p className="text-white/85 text-sm leading-relaxed">{p.bio}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 reveal">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-white/70 mb-8">Partners & Supporters</p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-80">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-10 w-32 rounded bg-white/10 border border-white/20 flex items-center justify-center text-xs text-white/60">
              Partner {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Team;
