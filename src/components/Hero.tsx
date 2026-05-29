import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion.current) return;

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

  const parallax = reducedMotion.current ? 0 : Math.min(scrollY * 0.08, 64);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-navy pt-28 pb-16 text-white md:pt-32 md:pb-20"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{ transform: `translateY(${parallax}px)` }}
        aria-hidden
      >
        <img src="/images/clinician-listen.jpg" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_24%_36%,hsla(180,100%,42%,0.24),transparent_58%)]" />
      </div>

      <svg
        className="absolute inset-x-0 top-1/2 h-64 w-full -translate-y-1/2 opacity-30"
        viewBox="0 0 1600 200"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          className="animate-ecg"
          d="M0 100 L200 100 L230 100 L250 60 L270 140 L290 40 L310 160 L340 100 L600 100 L630 100 L650 60 L670 140 L690 40 L710 160 L740 100 L1000 100 L1030 100 L1050 60 L1070 140 L1090 40 L1110 160 L1140 100 L1600 100"
          stroke="hsl(var(--cyan-accent))"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan-accent mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-cyan-accent animate-pulse-soft" />
            Born in Uganda, built for the world
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-[1.05] mb-6 animate-fade-in">
            Taking care of your heart,
            <br />
            <span className="text-gradient-teal">beat by beat.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 animate-fade-in">
            KardioSense pairs wearable ECG capture with on device AI to help clinicians recognize
            myocardial infarction risk and selected rhythm concerns sooner. It is built to support
            care teams, keep patients close to help, and work even when internet access is not
            available.
          </p>
          <div className="flex flex-col gap-4 animate-fade-in sm:flex-row sm:flex-wrap">
            <a
              href="#waitlist"
              className="rounded-full px-7 py-3.5 text-center font-medium gradient-teal text-white hover:opacity-90 transition"
            >
              Join the Waitlist
            </a>
            <a
              href="#what-is"
              className="rounded-full px-7 py-3.5 text-center font-medium border border-white/30 text-white hover:bg-white/10 transition"
            >
              What Is KardioSense
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-8">
          {[
            { n: "1.5M+", t: "CVD deaths per year in sub Saharan Africa" },
            { n: "60s", t: "to a focused cardiac risk review" },
            { n: "0", t: "internet required for the core assessment goal" },
          ].map((s) => (
            <div key={s.n} className="reveal">
              <div className="font-serif text-4xl md:text-5xl text-cyan-accent">{s.n}</div>
              <div className="text-white/70 mt-2 text-sm">{s.t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
