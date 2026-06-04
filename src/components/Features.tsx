import { Cpu, FileSearch, ShieldCheck, Timer } from "lucide-react";

const specs = [
  {
    icon: ShieldCheck,
    label: "Reusable clinical strap",
    detail: "A rugged Y shaped chest strap designed for repeated use in low resource clinics.",
  },
  {
    icon: Cpu,
    label: "On device AI",
    detail: "ECG signals and clinical context are processed on the phone when connectivity is limited.",
  },
  {
    icon: Timer,
    label: "Under 60 seconds",
    detail: "The workflow is designed to move from capture to a clinician ready report quickly.",
  },
  {
    icon: FileSearch,
    label: "Explainable review",
    detail: "Outputs are built to show the rhythm features and risk factors behind each result.",
  },
];

const deviceDetails = [
  "Dry electrode contact points for fast ECG capture",
  "Adjustable strap geometry for different body sizes",
  "Clip in module designed for quick cleaning and reuse",
];

const Features = () => {
  return (
    <section id="what" className="bg-navy-deep text-white py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-14 max-w-3xl text-center reveal">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-cyan-accent">
            What is Kardiosense
          </p>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            A concept device for faster cardiac insight.
          </h2>
          <p className="mt-6 leading-relaxed text-white/75">
            Kardiosense pairs a wearable ECG chest strap with an on device AI engine focused on a
            small set of high risk cardiac conditions. Our deepest work is centred on myocardial
            infarction, often called a heart attack or MI, where earlier recognition can change the
            path of care.
          </p>
        </div>

        <div className="reveal overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy via-navy to-near-black shadow-elevated">
          <div className="grid gap-0 lg:grid-cols-12">
            <div className="flex flex-col justify-center p-8 md:p-12 lg:col-span-4 lg:p-14">
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-cyan-accent">
                Concept device
              </p>
              <h3 className="mb-5 font-serif text-3xl leading-tight md:text-5xl">
                Kardiosense cardiac strap
              </h3>
              <p className="text-lg leading-relaxed text-white/80">
                A reusable chest worn ECG strap designed to make cardiac assessment practical in
                busy clinics, outreach settings, and places where a full diagnostic room is not
                available.
              </p>

              <ul className="mt-8 space-y-4">
                {deviceDetails.map((detail) => (
                  <li key={detail} className="flex gap-3 text-sm leading-relaxed text-white/78">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-accent" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#f5f2ea] p-3 lg:col-span-8 lg:p-5">
              <img
                src="/images/product/cardiac-strap.png"
                alt="Kardiosense cardiac strap concept device"
                className="aspect-video h-full min-h-[280px] w-full rounded-2xl object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((item) => (
            <div
              key={item.label}
              className="reveal rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.07]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl gradient-teal">
                <item.icon className="text-white" size={22} />
              </div>
              <h4 className="mb-2 font-serif text-xl">{item.label}</h4>
              <p className="text-sm leading-relaxed text-white/70">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
