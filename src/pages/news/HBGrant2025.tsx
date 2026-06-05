import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const HBGrant2025 = () => (
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
        Winners of the H&amp;B Global Undergraduate Student Research Grant
      </h1>
      <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Calendar size={14} className="text-teal" />
          July 2025
        </span>
      </div>
    </header>

    {/* Winners graphic — contained, centred */}
    <div className="container mx-auto px-4 max-w-3xl mb-12">
      <div className="max-w-sm mx-auto rounded-2xl overflow-hidden border border-border shadow-lg">
        <img
          src="/images/hsb-grant-2025/winners.jpg"
          alt="H&B Challenge Winners — Undergraduate Student Research 2025"
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.classList.add("flex", "items-center", "justify-center", "h-64", "bg-teal/10");
            e.target.parentElement.innerHTML = `<span class="text-sm text-muted-foreground p-6 text-center">Winners announcement — coming soon</span>`;
          }}
        />
      </div>
      <p className="text-xs text-muted-foreground mt-2 text-center">
        Official H&amp;B Challenge winners announcement — Undergraduate Student Research, July 2025.
      </p>
    </div>

    {/* Article body */}
    <article className="container mx-auto px-4 max-w-3xl pb-24">

      {/* Intro */}
      <p className="text-lg md:text-xl text-navy/80 leading-relaxed mb-10 font-light border-l-2 border-teal pl-5">
        In July 2025, Kardiosense received recognition that meant more than funding. Our co-founder
        Omara Christian Kenneth was named one of the winners of the H&amp;B Global Undergraduate
        Student Research Grant 2025 — selected from a competitive cohort of young researchers from
        across the continent working at the intersection of technology and health.
      </p>

      {/* What the grant recognised */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl md:text-3xl text-navy mb-4">What the grant recognised</h2>
        <p className="text-base text-navy/75 leading-relaxed mb-4">
          H&amp;B Global awarded the grant in recognition of Omara's work on AI in healthcare —
          specifically, the machine learning system Kardiosense had been building for early
          detection of myocardial infarctions. The selection was a signal that the broader global
          health community was paying attention, and that the problem we were trying to solve was
          one worth backing.
        </p>
        <p className="text-base text-navy/75 leading-relaxed">
          For us, it was also a moment of reflection. The work had begun as a question asked in a
          third-year Biomedical Engineering class. By July 2025, it had been presented at two
          national and international conferences, improved across two model iterations, and was now
          being recognised by a global health research platform. The distance between those two
          points had been covered in under a year.
        </p>
      </section>

      {/* The H&B Research Training journey */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl md:text-3xl text-navy mb-4">The H&amp;B Research Training journey</h2>
        <p className="text-base text-navy/75 leading-relaxed mb-4">
          The grant did not arrive in isolation. It came at the end of a research training programme
          run by H&amp;B Global — one that pushed our thinking well beyond technical problems and
          into the harder questions: Who is this for? What does impact actually look like? How do
          you build research that serves communities rather than just careers?
        </p>
        <p className="text-base text-navy/75 leading-relaxed mb-4">
          Those questions sharpened how we think about Kardiosense. The programme brought together
          a cohort of researchers, thinkers, and builders — and the quality of that community was
          as valuable as anything else. Every session was a reminder that the next generation of
          African health innovation is not waiting to be given permission.
        </p>
      </section>

      {/* Gratitude callout */}
      <div className="rounded-xl bg-teal/5 border border-teal/20 p-6 mb-10">
        <p className="text-sm text-navy/75 leading-relaxed mb-3">
          We are grateful to the H&amp;B Global team, particularly Miss Ezinne Eke Aso and the
          facilitators — Oluwatoyin Alice Tella, Seto C. Ogunleye, Islam Khalil Ahmed, Aanouluwa
          Omilani, and Samuel Lateef — for the guidance and wisdom poured into every session.
        </p>
        <p className="text-sm text-navy/75 leading-relaxed">
          To the fellow participants of the programme: your passion and seriousness made the work
          better.
        </p>
      </div>

      {/* On being recognised */}
      <section className="mb-14">
        <h2 className="font-serif text-2xl md:text-3xl text-navy mb-4">On being recognised</h2>
        <p className="text-base text-navy/75 leading-relaxed mb-4">
          Receiving this grant is not the end of anything — it is the ignition. It is a reminder
          that ideas, when nurtured with discipline and purpose, can grow into solutions that serve
          communities and shape futures.
        </p>
        <p className="text-base text-navy/75 leading-relaxed mb-4">
          To those watching, wondering whether their ideas matter — they do. Don't wait for perfect
          conditions. Start where you are, with what you have. Waiting has killed more dreams than
          failure ever did.
        </p>
        <p className="text-base text-navy/75 leading-relaxed">
          Thank you for believing in us, H&amp;B Global. The journey continues.
        </p>
      </section>

      {/* Navigation */}
      <div className="border-t border-border pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Link
          to="/news/gulu-2025"
          className="inline-flex items-center gap-2 text-sm text-teal hover:text-cyan-accent transition-colors font-medium"
        >
          <ArrowLeft size={15} />
          Previous: Gulu University Conference
        </Link>
        <div className="text-right">
          <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Back to all stories</p>
          <Link
            to="/#news"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-teal transition-colors"
          >
            News &amp; Insights
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

    </article>
  </div>
);

export default HBGrant2025;
