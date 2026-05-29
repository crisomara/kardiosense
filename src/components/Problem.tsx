import listenImg from "@/assets/clinician-listen.jpg";

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
            <span className="text-cyan-accent font-medium">90 percent of cardiovascular events</span>{" "}
            happen in low and middle income countries. Yet most diagnostic platforms assume reliable
            electricity, stable internet, expensive cardiology suites, and specialists in walking
            distance. The rural clinic in Mbale and the community health worker in Kisumu rarely
            have any of those.
          </p>
          <p className="font-serif text-2xl text-white">
            Kardiosense was born inside that gap. Not as a replacement for cardiologists, but as
            infrastructure that quietly extends their reach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
