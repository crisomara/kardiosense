import listenImg from "@/assets/clinician-listen.jpg";

const stats = [
  {
    value: "17.9M",
    label: "people die from cardiovascular disease globally each year",
    percentage: 72,
  },
  {
    value: "1.5M+",
    label: "cardiovascular deaths occur each year in sub-Saharan Africa",
    percentage: 54,
  },
  {
    value: "75%+",
    label: "of CVD deaths take place in low and middle income countries",
    percentage: 78,
  },
  {
    value: "4 in 5",
    label: "CVD deaths are caused by heart attacks and strokes",
    percentage: 82,
  },
];

const Problem = () => {
  return (
    <section className="bg-near-black text-white py-28 relative overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-12 gap-12 items-center relative">
        <div className="md:col-span-5 reveal">
          <p className="text-xs uppercase tracking-[0.25em] text-teal mb-6">The Problem</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
            A continent of hearts,
            <br />
            and not enough listeners.
          </h2>
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={listenImg}
              alt="Clinician listening to a patient's heart with a stethoscope"
              loading="lazy"
              className="w-full h-auto block opacity-75 mix-blend-luminosity"
              style={{ filter: "contrast(1.05) brightness(0.9)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--navy) / 0.55) 0%, hsl(var(--teal) / 0.25) 100%)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-near-black via-transparent to-transparent" />
          </div>
        </div>

        <div className="md:col-span-7 md:col-start-6 space-y-6 text-white/80 text-lg leading-relaxed reveal">
          <p>
            Cardiovascular disease is the leading cause of death in the world, and Africa carries a
            disproportionate share of that weight. Each year, more than{" "}
            <span className="text-cyan-accent font-medium">1.5 million people</span> die in
            sub-Saharan Africa from conditions that are routinely caught early in better resourced
            parts of the world. The treatments exist. What is missing are the tools that help
            clinicians notice risk in time.
          </p>
          <p>
            More than{" "}
            <span className="text-cyan-accent font-medium">three quarters of CVD deaths</span>{" "}
            happen in low and middle income countries. Yet most diagnostic platforms assume reliable
            electricity, stable internet, expensive cardiology suites, and specialists in walking
            distance. The rural clinic in Mbale and the community health worker in Kisumu rarely
            have any of those.
          </p>
          <p className="font-serif text-2xl text-white">
            Kardiosense was born inside that gap. Not as a replacement for cardiologists, but as
            infrastructure that quietly extends their reach.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-elevated"
              >
                <div className="flex items-end justify-between gap-4 mb-3">
                  <span className="font-serif text-4xl text-cyan-accent">{stat.value}</span>
                  <span className="h-16 w-16 rounded-full border border-cyan-accent/25 bg-cyan-accent/10 grid place-items-center">
                    <span className="h-9 w-9 rounded-full bg-cyan-accent/70" />
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-white/75 mb-4">{stat.label}</p>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden" aria-hidden="true">
                  <div
                    className="h-full rounded-full gradient-teal"
                    style={{ width: `${stat.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
