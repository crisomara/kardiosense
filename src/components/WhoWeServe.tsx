import { Building2, HeartPulse, Stethoscope, Users } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "District hospitals",
    body: "Cardiac triage support for facilities that need better risk recognition without a full cardiology suite.",
  },
  {
    icon: Stethoscope,
    title: "General clinics",
    body: "A practical second layer of review when clinicians need to decide who needs urgent referral.",
  },
  {
    icon: Users,
    title: "Community health workers",
    body: "A guided workflow that turns a short reading into a clearer handoff to a clinician.",
  },
  {
    icon: HeartPulse,
    title: "Cardiologists",
    body: "A focused prescreen that helps high risk patients reach specialist care sooner.",
  },
];

const WhoWeServe = () => (
  <section id="serve" className="bg-background py-28 text-near-black">
    <div className="container mx-auto">
      <div className="reveal mb-14 max-w-3xl">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-teal">Who We Serve</p>
        <h2 className="font-serif text-4xl leading-tight md:text-5xl">
          One tool for the people who keep cardiac care moving.
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((a) => (
          <div
            key={a.title}
            className="reveal rounded-2xl border border-navy/10 bg-white p-7 transition hover:shadow-xl"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl gradient-teal text-white">
              <a.icon size={22} />
            </div>
            <h3 className="mb-2 font-serif text-xl">{a.title}</h3>
            <p className="text-sm leading-relaxed text-near-black/70">{a.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeServe;
