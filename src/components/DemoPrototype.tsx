import { Play } from "lucide-react";

const DemoPrototype = () => (
  <section id="demo" className="bg-navy py-28 text-white">
    <div className="container mx-auto">
      <div className="reveal mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-cyan-accent">
          Demo of the Prototype
        </p>
        <h2 className="font-serif text-4xl leading-tight md:text-5xl">
          From ECG capture to a clinician ready report.
        </h2>
      </div>

      <div className="reveal group relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-near-black shadow-xl">
        <img
          src="/images/clinician-listen.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-near-black via-navy/70 to-navy/30" />
        <svg className="absolute inset-x-0 top-1/2 h-40 w-full -translate-y-1/2 opacity-45" viewBox="0 0 1600 200" preserveAspectRatio="none" aria-hidden>
          <path
            className="animate-ecg"
            d="M0 100 L280 100 L310 100 L330 60 L350 140 L370 40 L390 160 L420 100 L780 100 L810 100 L830 60 L850 140 L870 40 L890 160 L920 100 L1280 100 L1310 100 L1330 60 L1350 140 L1370 40 L1390 160 L1420 100 L1600 100"
            stroke="hsl(var(--cyan-accent))"
            strokeWidth="3"
            fill="none"
          />
        </svg>

        <button
          type="button"
          aria-label="Play prototype demo"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="relative flex h-24 w-24 items-center justify-center rounded-full gradient-teal shadow-xl transition-transform group-hover:scale-105">
            <span className="absolute inset-0 rounded-full bg-cyan-accent/30 animate-pulse-soft" />
            <Play size={34} className="relative translate-x-0.5 text-white" />
          </span>
        </button>

        <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-serif text-2xl">KardioSense prototype walkthrough</p>
            <p className="text-sm text-white/70">Video placeholder for the first product demo</p>
          </div>
          <span className="text-xs uppercase tracking-widest text-white/60">00:00</span>
        </div>
      </div>
    </div>
  </section>
);

export default DemoPrototype;
