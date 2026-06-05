import { Activity, Bluetooth, FileHeart, ShieldCheck, Smartphone } from "lucide-react";

const specs = [
  {
    icon: Activity,
    label: "MI focused insight",
    detail:
      "The first clinical focus is myocardial infarction, also called MI, with support for selected rhythm patterns that can shape referral decisions.",
  },
  {
    icon: Bluetooth,
    label: "Wearable ECG capture",
    detail:
      "A chest strap prototype streams ECG signals to the mobile app so frontline teams can collect a useful reading quickly.",
  },
  {
    icon: Smartphone,
    label: "On device analysis",
    detail:
      "The AI model is designed to combine ECG signals with clinical risk factors on the phone, even when internet access is unavailable.",
  },
  {
    icon: FileHeart,
    label: "Clinician ready reports",
    detail:
      "Each assessment can produce a clear summary that helps a clinician review risk, explain next steps, and decide when referral is needed.",
  },
];

function DeviceIllustration() {
  return (
    <svg
      viewBox="0 0 520 320"
      className="h-auto w-full"
      role="img"
      aria-label="KardioSense ECG chest strap and mobile analysis prototype"
    >
      <defs>
        <linearGradient id="strapGradient" x1="0" x2="1">
          <stop offset="0%" stopColor="hsl(var(--teal))" />
          <stop offset="100%" stopColor="hsl(var(--cyan-accent))" />
        </linearGradient>
        <radialGradient id="softGlow">
          <stop offset="0%" stopColor="hsl(var(--cyan-accent))" stopOpacity="0.35" />
          <stop offset="100%" stopColor="hsl(var(--cyan-accent))" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="260" cy="160" r="150" fill="url(#softGlow)" />
      <rect x="42" y="124" width="436" height="78" rx="39" fill="url(#strapGradient)" />

      {[98, 176, 344, 422].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="163" r="16" fill="white" opacity="0.95" />
          <circle cx={cx} cy="163" r="9" fill="hsl(var(--navy))" />
          <circle cx={cx} cy="163" r="3" fill="hsl(var(--cyan-accent))" />
        </g>
      ))}

      <g>
        <rect
          x="210"
          y="96"
          width="100"
          height="128"
          rx="18"
          fill="hsl(var(--navy))"
          stroke="white"
          strokeOpacity="0.24"
          strokeWidth="2"
        />
        <rect x="222" y="114" width="76" height="42" rx="6" fill="hsl(var(--near-black))" />
        <path
          d="M228 136 H242 L247 122 L252 152 L258 118 L264 154 L270 136 H294"
          stroke="hsl(var(--cyan-accent))"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M260 189 C248 178 232 184 232 199 C232 213 260 225 260 225 C260 225 288 213 288 199 C288 184 272 178 260 189 Z"
          fill="hsl(var(--cyan-accent))"
          opacity="0.9"
        />
      </g>

      <g fontFamily="Inter, sans-serif" fontSize="10" fill="white" opacity="0.75">
        <text x="260" y="78" textAnchor="middle" letterSpacing="3">
          KARDIOSENSE
        </text>
        <line x1="98" y1="163" x2="98" y2="262" stroke="white" strokeOpacity="0.38" />
        <text x="98" y="280" textAnchor="middle">
          Electrode
        </text>
        <line x1="260" y1="224" x2="260" y2="262" stroke="white" strokeOpacity="0.38" />
        <text x="260" y="280" textAnchor="middle">
          AI module
        </text>
        <line x1="422" y1="163" x2="422" y2="262" stroke="white" strokeOpacity="0.38" />
        <text x="422" y="280" textAnchor="middle">
          Chest strap
        </text>
      </g>
    </svg>
  );
}

const WhatIsKardiosense = () => (
  <section id="what-is" className="bg-navy py-28 text-white">
    <div className="container mx-auto">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="reveal lg:col-span-5">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-cyan-accent">
            What Is KardioSense
          </p>
          <h2 className="mb-6 font-serif text-4xl leading-tight md:text-5xl">
            A focused cardiac support tool for earlier MI recognition.
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-white/80">
            KardioSense is a cardiac decision support prototype that pairs ECG capture with AI
            analysis for selected high risk cardiac conditions. The first focus is myocardial
            infarction, commonly called MI, where faster recognition can change the path of care.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-white/80">
            The goal is simple: help care teams see risk sooner, explain what they are seeing more
            clearly, and make better referral decisions in clinics that may not have a cardiologist
            on site.
          </p>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-accent/40 bg-cyan-accent/10 px-4 py-2 text-xs uppercase tracking-widest text-cyan-accent">
            <ShieldCheck size={16} />
            Prototype in active development
          </span>
        </div>

        <div className="reveal rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl lg:col-span-7">
          <DeviceIllustration />
        </div>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {specs.map((s) => (
          <div
            key={s.label}
            className="reveal rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan-accent/50"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl gradient-teal">
              <s.icon className="text-white" size={22} />
            </div>
            <h3 className="mb-2 font-serif text-xl">{s.label}</h3>
            <p className="text-sm leading-relaxed text-white/70">{s.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatIsKardiosense;
