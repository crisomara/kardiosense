import { ArrowLeft, Calendar, MapPin, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const acknowledgements = [
  "Royal Academy of Engineering LIF Community Project",
  "Vivian Arinaitwe and Che Innovations",
  "National ICT Innovation Hub",
  "Train Africa Alliance for Medical Research in Africa",
  "HSB Global",
];

const LifBootcamp2026 = () => (
  <div className="min-h-screen bg-background text-navy">
    <div className="container mx-auto px-4 pt-8">
      <Link
        to="/#news"
        className="inline-flex items-center gap-2 text-sm text-teal hover:text-cyan-accent transition-colors font-medium"
      >
        <ArrowLeft size={15} />
        Back to News
      </Link>
    </div>

    <header className="container mx-auto px-4 pt-12 pb-10 max-w-4xl">
      <span className="inline-flex items-center rounded-full border border-teal/20 bg-teal/10 px-3 py-1 text-xs font-medium text-teal uppercase tracking-wider mb-5">
        Milestone
      </span>
      <h1 className="font-serif text-4xl md:text-6xl text-navy leading-tight mb-6">
        Engineering Innovation Bootcamp closes with seed funding for Kardiosense
      </h1>
      <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Calendar size={14} className="text-teal" />
          May 31, 2026
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin size={14} className="text-teal" />
          National ICT Innovation Hub
        </span>
        <span className="flex items-center gap-1.5">
          <Trophy size={14} className="text-teal" />
          Engineering Innovation Bootcamp
        </span>
      </div>
    </header>

    <article className="container mx-auto px-4 max-w-3xl pb-24">
      <p className="text-lg md:text-xl text-navy/80 leading-relaxed mb-10 font-light border-l-2 border-teal pl-5">
        The grand finale of the Engineering Innovation Bootcamp, supported by the Royal Academy of
        Engineering LIF Community Project, marked a historic day for student engineers stepping onto
        the stage as founders. For Kardiosense, it was also a moment of encouragement, clarity, and
        renewed momentum.
      </p>

      {/* Finalists photo */}
      <div className="container mx-auto px-4 max-w-3xl mb-10">
        <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-teal/10 border border-border">
          <img
            src="/images/news/bootcamp-2026/finalists.jpg"
            alt="Engineering Innovation Bootcamp 2026 finalists"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Bootcamp finalists on stage at the Engineering Innovation Bootcamp grand finale.
        </p>
      </div>

      <section className="mb-10 space-y-5 text-base text-navy/75 leading-relaxed">
        <p>
          We are especially grateful for the seed funding provided through the bootcamp and for the
          support of Vivian Arinaitwe of Che Innovations. That support will help us continue refining
          Kardiosense, strengthening the product, and building toward the clinical impact we believe
          is possible.
        </p>
        <p>
          Congratulations to Oprah Asero and the Move Safe Energy team for taking first place with a
          portable EV motor power bank, a bold response to Uganda's growing electric mobility needs.
          Every finalist brought creativity, resilience, and vision to the bootcamp, making the final
          day a celebration of what engineering talent can become when it is given room to grow.
        </p>
      </section>

      <section className="mb-10 rounded-2xl border border-border bg-card p-6">
        <h2 className="font-serif text-2xl md:text-3xl text-navy mb-4">With gratitude</h2>
        <p className="text-base text-navy/75 leading-relaxed mb-5">
          A heartfelt thank you to the judges Kenneth Legesi, CFA, Alvin Mbabazi, Donald Byamugisha,
          and David Nalwebe, PMP, for their insight and encouragement. Special appreciation also goes
          to Aijuka Edmand, Africa Prize Alumni President, for inspiring us to build boldly, and to
          the organizers, mentors, and partners who shaped the bootcamp experience.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {acknowledgements.map((name) => (
            <div key={name} className="rounded-xl bg-teal/5 border border-teal/15 px-4 py-3 text-sm text-navy/75">
              {name}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 space-y-5 text-base text-navy/75 leading-relaxed">
        <p>
          To the Kardiosense team, Emmanuel Ogwal and Dr. Patricia Wanjiru, thank you for the hard
          work that has carried us this far. To our mentors, Dr. Bamba Gaye, Gurbinder J. Singh, and
          Ezinne Eke Aso, and to our partners at Train Africa Alliance for Medical Research in Africa
          and HSB Global, your belief and guidance have kept us moving forward. This achievement
          belongs to all of us.
        </p>
        <p>
          The bootcamp was more than a competition. It was a refining process that strengthened our
          ideas, sharpened our communication, and reminded us of the power of persistence.
        </p>
      </section>

      {/* Additional bootcamp photos */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="rounded-2xl overflow-hidden border border-border bg-teal/10">
          <img
            src="/images/news/bootcamp-2026/bootcamp-3.jpg"
            alt="Engineering Innovation Bootcamp 2026"
            className="w-full h-64 object-cover"
            loading="lazy"
          />
        </div>
        <div className="rounded-2xl overflow-hidden border border-border bg-teal/10">
          <img
            src="/images/news/bootcamp-2026/bootcamp-4-clear.jpg"
            alt="Engineering Innovation Bootcamp 2026 grand finale"
            className="w-full h-64 object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <blockquote className="border-l-4 border-cyan-accent bg-teal/5 px-6 py-5 font-serif text-2xl text-navy leading-snug">
        Innovation is not about being the best today, but about building the courage to keep creating
        tomorrow.
      </blockquote>
    </article>
  </div>
);

export default LifBootcamp2026;
