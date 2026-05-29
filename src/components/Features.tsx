import { Sparkles, Cpu, Timer, FileSearch } from "lucide-react";

const tiles = [
  {
    icon: Sparkles,
    label: "Multi-modal",
    detail: "ECG waveform fused with clinical biomarkers for a richer signal.",
  },
  {
    icon: Cpu,
    label: "On device",
    detail: "Inference runs locally on the phone. Zero internet required.",
  },
  {
    icon: Timer,
    label: "Under 60 seconds",
    detail: "From chest strap on to a clinician ready report.",
  },
  {
    icon: FileSearch,
    label: "Explainable",
    detail: "Every prediction comes with the rhythm and risk factors that drove it.",
  },
];

const Features = () => {
  return (
    <section id="what" className="bg-navy-deep text-white py-28">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 reveal">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-accent mb-4">
            What is Kardiosense
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Medical grade intelligence,
            <br />
            <span className="text-gradient-teal">made accessible to everyone.</span>
          </h2>
          <p className="mt-6 text-white/75 leading-relaxed">
            Kardiosense is an AI cardiac platform that currently focuses on a small set of cardiac
            conditions, with our deepest work centred on myocardial infarction, often called a heart
            attack or MI. The aim is simple: catch the danger early enough for clinicians to act.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy to-near-black p-10 md:p-14 shadow-elevated reveal">
          <div className="relative max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-accent mb-4">
              Hero capability
            </p>
            <h3 className="font-serif text-3xl md:text-5xl mb-4 leading-tight">
              AI powered MI prediction
            </h3>
            <p className="text-white/80 text-lg leading-relaxed">
              A fusion model trained to flag myocardial infarction risk from ECG morphology and
              clinical context. It is built for the realities of frontline care, not just controlled
              hospital settings, so it remains useful when the network is down and the next
              cardiologist is hours away.
            </p>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiles.map((t) => (
            <div
              key={t.label}
              className="reveal rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.07] transition"
            >
              <div className="w-12 h-12 rounded-xl gradient-teal flex items-center justify-center mb-4">
                <t.icon className="text-white" size={22} />
              </div>
              <h4 className="font-serif text-xl mb-2">{t.label}</h4>
              <p className="text-sm text-white/70 leading-relaxed">{t.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
