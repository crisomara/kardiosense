import { Play } from "lucide-react";

const POSTER =
  "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1800&q=80";

const DemoVideo = () => {
  return (
    <section id="demo" className="bg-navy text-white py-28">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-12 text-center mx-auto reveal">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-accent mb-4">
            Demo of the Prototype
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            From chest strap to clinician report, in under a minute.
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            A short walk through of the current Kardiosense prototype. The video below is a
            placeholder while we record the field footage with our clinical partners.
          </p>
        </div>
        <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-elevated group reveal">
          <img
            src={POSTER}
            alt="Kardiosense demo preview"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-near-black via-navy/40 to-transparent" />
          <button
            type="button"
            aria-label="Play demo video"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="relative inline-flex items-center justify-center w-24 h-24 rounded-full gradient-teal shadow-elevated group-hover:scale-105 transition-transform">
              <span className="absolute inset-0 rounded-full bg-cyan-accent opacity-30 animate-pulse-soft" />
              <Play size={34} className="relative text-white translate-x-0.5" />
            </span>
          </button>
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <p className="font-serif text-2xl">Kardiosense prototype</p>
              <p className="text-sm text-white/70">Field walkthrough coming soon</p>
            </div>
            <span className="text-xs uppercase tracking-widest text-white/60">Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
