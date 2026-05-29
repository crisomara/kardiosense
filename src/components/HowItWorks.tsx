import { Activity, BrainCircuit, FileHeart } from "lucide-react";

const steps = [
  {
    icon: Activity,
    title: "Wear and capture",
    body:
      "Strap on the Kardiosense wearable ECG chest strap. Clinical grade dry electrodes position across the chest automatically. No gel, no technician, no clinic required.",
  },
  {
    icon: BrainCircuit,
    title: "Analyse",
    body:
      "Our AI fusion engine combines the ECG waveform with the patient's clinical risk profile such as age, blood pressure, history, and lifestyle. Everything runs on the device. No internet, no data leaving the phone.",
  },
  {
    icon: FileHeart,
    title: "Act",
    body:
      "Within a minute you receive a heart attack risk score, an arrhythmia classification, and a clinician ready PDF report. It can be shared over WhatsApp with a single tap, from anywhere.",
  },
];

function FlowIllustration() {
  return (
    <svg
      viewBox="0 0 900 280"
      className="w-full max-w-3xl h-auto"
      role="img"
      aria-label="Chest strap streaming via Bluetooth to a phone that produces a PDF report"
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="hsl(var(--teal))" />
          <stop offset="100%" stopColor="hsl(var(--cyan-accent))" />
        </linearGradient>
      </defs>
      <g transform="translate(40,90)">
        <rect width="200" height="100" rx="48" fill="url(#g1)" />
        <g fill="white" opacity="0.95">
          <circle cx="40" cy="50" r="10" />
          <circle cx="85" cy="50" r="10" />
          <circle cx="130" cy="50" r="10" />
          <circle cx="170" cy="50" r="10" />
        </g>
        <rect x="70" y="20" width="60" height="60" rx="14" fill="hsl(var(--navy))" />
        <path d="M82 50 H92 L97 38 L102 62 L107 44 L112 56 L118 50 H128" stroke="hsl(var(--cyan-accent))" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      </g>
      <g transform="translate(280,110)" stroke="hsl(var(--teal))" fill="none" strokeWidth="2.5" strokeLinecap="round" opacity="0.85">
        <path d="M0 30 Q30 0 60 30" />
        <path d="M0 50 Q40 10 80 50" opacity="0.7" />
        <path d="M0 70 Q50 20 100 70" opacity="0.5" />
      </g>
      <g transform="translate(440,40)">
        <rect width="140" height="220" rx="22" fill="hsl(var(--navy))" stroke="hsl(var(--teal))" strokeWidth="2" />
        <rect x="10" y="14" width="120" height="160" rx="6" fill="hsl(var(--near-black))" />
        <path d="M16 100 H40 L48 70 L56 130 L64 60 L72 140 L80 100 H124" stroke="hsl(var(--cyan-accent))" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <text x="70" y="200" textAnchor="middle" fontSize="10" fill="white" fontFamily="Inter, sans-serif" opacity="0.8">MI Risk: Low</text>
      </g>
      <g transform="translate(600,135)" stroke="hsl(var(--teal))" strokeWidth="2.5" fill="none">
        <line x1="0" y1="0" x2="60" y2="0" />
        <polyline points="50,-6 60,0 50,6" />
      </g>
      <g transform="translate(690,60)">
        <rect width="160" height="180" rx="10" fill="white" stroke="hsl(var(--teal))" strokeWidth="2" />
        <rect x="14" y="18" width="100" height="8" rx="3" fill="hsl(var(--navy))" />
        <rect x="14" y="36" width="130" height="6" rx="2" fill="hsl(var(--navy))" opacity="0.3" />
        <rect x="14" y="50" width="130" height="6" rx="2" fill="hsl(var(--navy))" opacity="0.3" />
        <rect x="14" y="64" width="90" height="6" rx="2" fill="hsl(var(--navy))" opacity="0.3" />
        <path d="M14 110 H40 L48 92 L56 130 L64 84 L72 138 L80 110 H146" stroke="hsl(var(--cyan-accent))" strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="14" y="150" width="60" height="18" rx="4" fill="hsl(var(--teal))" />
        <text x="44" y="163" textAnchor="middle" fontSize="9" fill="white" fontFamily="Inter, sans-serif" fontWeight="600">SHARE</text>
      </g>
    </svg>
  );
}

const HowItWorks = () => {
  return (
    <section id="how" className="bg-background py-28">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-xs uppercase tracking-[0.25em] text-teal mb-4">How It Works</p>
          <h2 className="font-serif text-4xl md:text-5xl text-near-black">
            Wear it. Read it. Act on it.
          </h2>
        </div>

        <div className="flex justify-center mb-16 reveal">
          <FlowIllustration />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="reveal p-8 rounded-2xl border border-border bg-card hover:border-teal hover:shadow-elevated transition group"
            >
              <div className="w-14 h-14 rounded-xl gradient-teal flex items-center justify-center mb-6">
                <s.icon className="text-white" size={26} />
              </div>
              <div className="text-xs text-muted-foreground mb-2">Step {i + 1}</div>
              <h3 className="font-serif text-2xl mb-3 text-near-black">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
