const Problem = () => (
  <section className="relative overflow-hidden bg-near-black py-28 text-white">
    <div className="container mx-auto grid items-center gap-12 md:grid-cols-12">
      <div className="reveal md:col-span-5">
        <p className="text-xs uppercase tracking-[0.25em] text-teal mb-6">The Problem</p>
        <h2 className="font-serif text-4xl md:text-6xl leading-tight">
          A continent of hearts,
          <br />
          and not enough listeners.
        </h2>
        <div className="relative mt-8 overflow-hidden rounded-2xl">
          <img
            src="/images/clinician-listen.jpg"
            alt="Clinician listening to a patient's heart with a stethoscope"
            loading="lazy"
            className="h-auto w-full object-cover opacity-75 mix-blend-luminosity"
            style={{ filter: "contrast(1.05) brightness(0.9)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-near-black via-transparent to-transparent" />
          <div className="absolute inset-0 bg-teal/20" />
        </div>
      </div>

      <div className="reveal space-y-6 text-lg leading-relaxed text-white/80 md:col-span-7 md:col-start-6">
        <p>
          Cardiovascular disease remains the world's leading cause of death, and African communities
          carry a heavy share of that burden. More than{" "}
          <span className="font-medium text-cyan-accent">1.5 million people</span> die each year in
          sub Saharan Africa from heart conditions that are often easier to treat when the warning
          signs are recognized early.
        </p>
        <p>
          The hardest part is not always the absence of treatment. It is the delay before risk is
          noticed. Many diagnostic tools assume stable power, reliable internet, expensive equipment,
          and specialists nearby. Those assumptions do not match the daily reality of many clinics,
          health posts, and community care teams.
        </p>
        <p className="font-serif text-2xl text-white">
          KardioSense was born inside that gap, as infrastructure that helps clinicians listen
          sooner and act with more confidence.
        </p>
      </div>
    </div>
  </section>
);

export default Problem;
