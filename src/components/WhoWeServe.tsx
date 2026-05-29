import { Building2, HeartPulse, Stethoscope, Users } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "District hospitals",
    body:
      "Cardiology grade triage in places where a dedicated cardiology suite would never be feasible.",
  },
  {
    icon: Stethoscope,
    title: "GPs and general clinics",
    body:
      "A second opinion that helps decide who needs urgent referral and who can be safely managed locally.",
  },
  {
    icon: Users,
    title: "Community health workers",
    body:
      "A guided workflow that turns a 60 second reading into a confident handoff to a clinician.",
  },
  {
    icon: HeartPulse,
    title: "Cardiologists",
    body:
      "An always on pre screen that brings the right patient in front of you at the right time.",
  },
];

const WhoWeServe = () => {
  return (
    <section id="who" className="bg-white text-near-black py-28">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-14 reveal">
          <p className="text-xs uppercase tracking-[0.25em] text-teal mb-4">Who We Serve</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            One tool. Every link in the cardiac chain of care.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="reveal rounded-2xl border border-navy/10 p-7 hover:shadow-elevated transition"
            >
              <div className="w-12 h-12 rounded-xl gradient-teal flex items-center justify-center text-white mb-5">
                <a.icon size={22} />
              </div>
              <h3 className="font-serif text-xl mb-2">{a.title}</h3>
              <p className="text-near-black/70 leading-relaxed text-sm">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
