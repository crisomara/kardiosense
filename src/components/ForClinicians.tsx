import { Stethoscope, ClipboardCheck, Workflow, ShieldCheck } from "lucide-react";

const CLINICIAN_IMG =
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80";

const points = [
  {
    icon: Stethoscope,
    title: "Decision support, not replacement",
    body:
      "Every report is framed as a second pair of eyes. It flags risk and surfaces rhythm anomalies, and leaves the clinical judgment with you.",
  },
  {
    icon: ClipboardCheck,
    title: "Built around your workflow",
    body:
      "From chest strap on to clinician ready PDF in under a minute. No new login, no extra hardware in the consultation room.",
  },
  {
    icon: Workflow,
    title: "Triage at the front line",
    body:
      "Nurses, GPs, and community health workers gain a clearer sense of when to escalate and when to reassure.",
  },
  {
    icon: ShieldCheck,
    title: "Explainable and auditable",
    body:
      "Every prediction comes with the ECG segment and the clinical features that drove it, ready for review.",
  },
];

const ForClinicians = () => {
  return (
    <section id="clinicians" className="bg-white text-near-black py-28">
      <div className="container mx-auto grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1 reveal">
          <div className="relative rounded-3xl overflow-hidden shadow-elevated">
            <img
              src={CLINICIAN_IMG}
              alt="Clinician reviewing patient data on a tablet"
              loading="lazy"
              className="w-full h-auto block"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 50%, hsl(var(--navy) / 0.7) 100%)",
              }}
            />
          </div>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2 reveal">
          <p className="text-xs uppercase tracking-[0.25em] text-teal mb-4">For Clinicians</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            A second opinion that is always on shift.
          </h2>
          <p className="text-lg text-near-black/75 mb-10 leading-relaxed">
            Kardiosense is a clinical decision support tool. It works alongside cardiologists, GPs,
            and frontline health workers, never above them. The goal is to make sure no high risk
            patient leaves a clinic without being noticed, and to support clinical workflows, early
            recognition, and better continuity of care.
          </p>
          <ul className="space-y-6">
            {points.map((p) => (
              <li key={p.title} className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl gradient-teal flex items-center justify-center text-white">
                  <p.icon size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-1">{p.title}</h3>
                  <p className="text-near-black/70 leading-relaxed">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ForClinicians;
