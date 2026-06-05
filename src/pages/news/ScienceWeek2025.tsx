import { ArrowLeft, ArrowRight, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const ScienceWeek2025 = () => (
  <div className="min-h-screen bg-background text-navy">

    {/* Back navigation */}
    <div className="container mx-auto px-4 pt-8">
      <Link
        to="/#news"
        className="inline-flex items-center gap-2 text-sm text-teal hover:text-cyan-accent transition-colors font-medium"
      >
        <ArrowLeft size={15} />
        Back to News
      </Link>
    </div>

    {/* Hero */}
    <header className="container mx-auto px-4 pt-12 pb-10 max-w-3xl">
      <div className="mb-5">
        <span className="inline-flex items-center rounded-full border border-teal/20 bg-teal/10 px-3 py-1 text-xs font-medium text-teal uppercase tracking-wider">
          Milestone
        </span>
      </div>
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy leading-tight mb-6">
        Taking Innovation to the National Stage
      </h1>
      <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Calendar size={14} className="text-teal" />
          June 2025
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin size={14} className="text-teal" />
          Kololo Independence Grounds, Kampala
        </span>
      </div>
    </header>

    {/* Hero image — stage photo 1 */}
    <div className="container mx-auto px-4 max-w-3xl mb-6">
      <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-teal/10 border border-border">
        <img
          src="/images/news/science-week-2025/stage-photo-1.jpg"
          alt="Omara Christian Kenneth presenting at National Science Week 2025"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>
      <p className="text-xs text-muted-foreground mt-2 text-center">
        Omara Christian Kenneth on stage at National Science Week 2025, Kololo Independence Grounds.
      </p>
    </div>

    {/* Article body */}
    <article className="container mx-auto px-4 max-w-3xl pb-24">

      {/* Intro */}
      <p className="text-lg md:text-xl text-navy/80 leading-relaxed mb-10 font-light border-l-2 border-teal pl-5">
        In June 2025, Kardiosense took to a bigger stage. We were selected to present and pitch at
        National Science Week 2025, held at the Kololo Independence Grounds in Kampala — an event
        bringing together scientists, policymakers, investors, government officials, and international
        delegates to celebrate and challenge Uganda's innovation landscape.
      </p>

      {/* Not just presenting */}
      <p className="text-base text-navy/75 leading-relaxed mb-10">
        We weren't just presenting research this time. We were pitching — competing for funding to
        turn Kardiosense from a prototype into a product.
      </p>

      {/* What we showed */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl md:text-3xl text-navy mb-4">What we showed</h2>
        <p className="text-base text-navy/75 leading-relaxed mb-6">
          Our co-founders Omara Christian Kenneth and Ogwal Emmanuel demonstrated our AI-powered
          myocardial infarction detection system live — a portable ECG device feeding real-time
          signals into a cloud-based machine learning model, with a dashboard that alerts healthcare
          providers to early heart attack risks as they happen. The same system we had first
          presented at ATTIC weeks earlier, now in front of a much larger and more varied audience.
        </p>
        <p className="text-base text-navy/75 leading-relaxed">
          The pitch was about more than the technology. It was about the problem it exists to solve.
          In rural and underserved communities across Uganda and the wider continent, delayed cardiac
          diagnosis is not an inconvenience — it is fatal. Our case was simple: advanced cardiac
          monitoring should be available anywhere, regardless of location or resources.
        </p>
      </section>

      {/* Additional stage photos */}
      <div className="grid md:grid-cols-2 gap-6 my-10">
        <div className="rounded-2xl overflow-hidden border border-border bg-teal/10">
          <img
            src="/images/news/science-week-2025/stage-photo-2.jpg"
            alt="Kardiosense team pitching at National Science Week 2025"
            className="w-full h-56 object-cover object-center"
            loading="lazy"
          />
        </div>
        <div className="rounded-2xl overflow-hidden border border-border bg-teal/10">
          <img
            src="/images/news/science-week-2025/stage-photo-3.jpg"
            alt="Kardiosense at National Science Week 2025"
            className="w-full h-56 object-cover object-center"
            loading="lazy"
          />
        </div>
      </div>
      <p className="text-xs text-muted-foreground mb-10 text-center">
        The Kardiosense team during the live pitch demonstration at National Science Week 2025.
      </p>

      {/* The recognition */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl md:text-3xl text-navy mb-4">The recognition</h2>
        <p className="text-base text-navy/75 leading-relaxed mb-4">
          Our work was formally featured by Kyambogo University under the title{" "}
          <em>Harnessing Machine Learning for Early Detection and Monitoring of Myocardial Infarctions</em>{" "}
          — presented by Omara Christian Kenneth and Ogwal Emmanuel, Biomedical and Mechatronics
          Engineering. The exhibition drew engagement from government officials, investors, and
          international delegates exploring how to scale local innovations to global markets, and
          featured projects across renewable energy, health technologies, agriculture, and artificial
          intelligence.
        </p>
        <a
          href="https://kyu.ac.ug/kyambogo-university-participates-in-the-national-science-week-2025-as-uganda-celebrates-its-remarkable-strides-in-science-technology-and-innovations/#:~:text=Myocardial%20infarctions%20(MI)%20result%20from,regional%20leader%20in%20technological%20advancement."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-teal hover:text-cyan-accent transition-colors border border-teal/20 rounded-lg px-4 py-2.5 bg-teal/5 hover:bg-teal/10"
        >
          Read the full feature on the Kyambogo University website
          <ExternalLink size={14} />
        </a>
      </section>

      {/* Science Week photo 4 */}
      <div className="my-10">
        <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-border bg-teal/10">
          <img
            src="/images/news/science-week-2025/stage-photo-4.jpg"
            alt="Kardiosense at National Science Week 2025 exhibition"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          At the National Science Week 2025 exhibition grounds, Kololo Independence Grounds.
        </p>
      </div>

      {/* What it meant */}
      <section className="mb-14">
        <h2 className="font-serif text-2xl md:text-3xl text-navy mb-4">What it meant</h2>
        <p className="text-base text-navy/75 leading-relaxed">
          The energy at Kololo confirmed something we were beginning to believe: Uganda's young
          engineers and scientists are genuinely ready to lead the future of health technology. Not
          eventually. Now. National Science Week gave us a platform, a room full of people who
          understood the stakes, and the motivation to keep building.
        </p>
      </section>

      {/* Navigation */}
      <div className="border-t border-border pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Link
          to="/news/attic-2025"
          className="inline-flex items-center gap-2 text-sm text-teal hover:text-cyan-accent transition-colors font-medium"
        >
          <ArrowLeft size={15} />
          Previous: ATTIC 2025
        </Link>
        <div className="text-right">
          <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Next story</p>
          <Link
            to="/news/gulu-2025"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-teal transition-colors"
          >
            Second Conference — Gulu University
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

    </article>
  </div>
);

export default ScienceWeek2025;
