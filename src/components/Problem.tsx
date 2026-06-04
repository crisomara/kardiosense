import { Activity, Globe2, HeartPulse, MapPin } from "lucide-react";
import listenImg from "@/assets/clinician-listen.jpg";

const stats = [
  {
    icon: Globe2,
    value: "17.9M",
    label: "global CVD deaths each year",
    detail: "Cardiovascular disease remains the world's leading cause of death.",
  },
  {
    icon: MapPin,
    value: "1.5M+",
    label: "deaths in sub Saharan Africa",
    detail: "Many happen in places where timely cardiac assessment is difficult to access.",
  },
  {
    icon: HeartPulse,
    value: "75%+",
    label: "occur in low and middle income countries",
    detail: "The burden is greatest where specialist diagnostics are least available.",
  },
  {
    icon: Activity,
    value: "4 in 5",
    label: "are heart attacks and strokes",
    detail: "Earlier recognition can help clinicians act before the window closes.",
  },
];

const Problem = () => {
  return (
    <section className="relative overflow-hidden bg-near-black py-28 text-white">
      <div className="container mx-auto relative">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="reveal md:col-span-5">
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-teal">The Problem</p>
            <h2 className="mb-8 font-serif text-4xl leading-tight md:text-6xl">
              A continent of hearts,
              <br />
              and not enough listeners.
            </h2>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={listenImg}
                alt="Clinician listening to a patient's heart with a stethoscope"
                loading="lazy"
                className="block h-auto w-full object-cover opacity-75 mix-blend-luminosity"
                style={{ filter: "contrast(1.05) brightness(0.9)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-navy/55 to-teal/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-near-black via-transparent to-transparent" />
            </div>
          </div>

          <div className="reveal space-y-6 text-lg leading-relaxed text-white/80 md:col-span-7 md:col-start-6">
            <p>
              Cardiovascular disease is the leading cause of death in the world, and Africa carries a
              disproportionate share of that weight. Each year, more than{" "}
              <span className="font-medium text-cyan-accent">1.5 million people</span> die in sub
              Saharan Africa from conditions that are routinely caught early in better resourced
              parts of the world. The treatments exist. What is missing are the tools that help
              clinicians notice risk in time.
            </p>
            <p>
              More than{" "}
              <span className="font-medium text-cyan-accent">three quarters of CVD deaths</span>{" "}
              happen in low and middle income countries. Yet most diagnostic platforms assume
              reliable electricity, stable internet, expensive cardiology suites, and specialists in
              walking distance. The rural clinic in Mbale and the community health worker in Kisumu
              rarely have any of those.
            </p>
            <p className="font-serif text-2xl text-white">
              Kardiosense was born inside that gap. Not as a replacement for cardiologists, but as
              infrastructure that quietly extends their reach.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.value}
              className="reveal rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-elevated"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan-accent/25 bg-cyan-accent/10 text-cyan-accent">
                  <stat.icon size={24} />
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-cyan-accent/60 to-transparent" />
              </div>
              <div className="font-serif text-5xl text-cyan-accent">{stat.value}</div>
              <h3 className="mt-3 font-semibold text-white">{stat.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/68">{stat.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
