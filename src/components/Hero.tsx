import { useEffect, useRef, useState } from "react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=2000&q=80";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const parallax = reduced.current ? 0 : Math.min(scrollY * 0.25, 120);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-navy text-white pt-36 pb-24 min-h-[92vh] flex flex-col justify-center"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{ transform: `translateY(${parallax * 0.3}px)` }}
        aria-hidden
      >
        <img src={HERO_IMG} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy/80" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 25% 35%, hsl(var(--cyan-accent) / 0.22) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="container mx-auto relative">
        <div className="max-w-4xl animate-fade-in">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-cyan-accent mb-6">
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-accent animate-pulse-soft" />
            Born in Uganda. Built for the world.
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-8">
            Taking care of your heart,
            <br />
            <span className="text-gradient-teal">beat by beat.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-3xl mb-10 leading-relaxed">
            Kardiosense is a clinical decision support tool that pairs a wearable ECG chest strap
            with an on device AI engine. It surfaces heart attack risk and arrhythmia patterns from
            ECG signals and clinical biomarkers. It does not replace cardiologists. It extends their
            reach to every clinic, every shift, every patient, even when the internet is down.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#waitlist"
              className="rounded-full px-7 py-3.5 font-medium gradient-teal text-white hover:opacity-90 transition shadow-elevated"
            >
              Join the Waitlist
            </a>
            <a
              href="#how"
              className="rounded-full px-7 py-3.5 font-medium border border-white/30 text-white hover:bg-white/10 transition"
            >
              See How It Works
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-10">
          {[
            { n: "1.5M+", t: "cardiovascular deaths each year in sub-Saharan Africa" },
            { n: "90%", t: "of cardiovascular events occur in low and middle income countries" },
            { n: "60s", t: "to a full cardiac risk assessment, fully offline" },
          ].map((s) => (
            <div key={s.n} className="reveal">
              <div className="font-serif text-4xl md:text-5xl text-cyan-accent">{s.n}</div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed max-w-xs">{s.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
