import { ClipboardCheck, ShieldCheck, Stethoscope, Workflow } from "lucide-react";

const points = [
  {
    icon: Stethoscope,
    title: "Decision support, not replacement",
    body:
      "KardioSense is designed to sit beside clinical judgment. It flags risk, surfaces the signal, and keeps the final decision with the clinician.",
  },
  {
    icon: ClipboardCheck,
    title: "Built around the consultation",
    body:
      "The flow moves from ECG capture to a clinician ready report quickly, so it can support real work instead of slowing it down.",
  },
  {
    icon: Workflow,
    title: "Triage at the front line",
    body:
      "Nurses, general clinicians, and community health workers can use a guided process to know when a patient needs urgent escalation.",
  },
  {
    icon: ShieldCheck,
    title: "Reviewable outputs",
    body:
      "Each result is meant to include the ECG segment and clinical factors behind the assessment, so the reasoning can be reviewed.",
  },
];

const ForClinicians = () => (
  <section id="clinicians" className="bg-white py-28 text-near-black">
    <div className="container mx-auto grid items-center gap-14 lg:grid-cols-12">
      <div className="reveal order-2 lg:order-1 lg:col-span-6">
        <div className="relative overflow-hidden rounded-3xl shadow-xl">
          <img
            src="/images/clinician-listen.jpg"
            alt="Clinician listening to a patient during a cardiac exam"
            loading="lazy"
            className="h-auto w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
        </div>
      </div>

      <div className="reveal order-1 lg:order-2 lg:col-span-6">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-teal">For Clinicians</p>
        <h2 className="mb-6 font-serif text-4xl leading-tight md:text-5xl">
          A second layer of review for the moments that matter.
        </h2>
        <p className="mb-10 text-lg leading-relaxed text-near-black/75">
          KardioSense is being built for clinicians who need earlier signals, clearer reports, and
          better continuity of care. It supports early recognition, referral decisions, and follow
          up without pretending to replace the people who know the patient best.
        </p>

        <ul className="space-y-6">
          {points.map((p) => (
            <li key={p.title} className="flex gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl gradient-teal text-white">
                <p.icon size={20} />
              </div>
              <div>
                <h3 className="mb-1 font-serif text-xl">{p.title}</h3>
                <p className="leading-relaxed text-near-black/70">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <a
          href="#waitlist"
          className="mt-10 inline-flex rounded-full px-7 py-3.5 font-medium gradient-teal text-white transition hover:opacity-90"
        >
          Request a Clinical Demo
        </a>
      </div>
    </div>
  </section>
);

export default ForClinicians;
