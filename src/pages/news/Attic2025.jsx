import { ArrowLeft, ArrowRight, MapPin, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const metrics = [
  { label: "Accuracy", value: "73%", note: "Overall correctness" },
  { label: "Recall", value: "85%", note: "True positive rate", highlight: true },
  { label: "Precision", value: "50%", note: "Positive predictive value" },
  { label: "ROC-AUC", value: "74%", note: "Discrimination ability" },
];

const Attic2025 = () => (
  <div className="min-h-screen bg-background text-navy">

    {/* Back navigation */}
    <div className="container mx-auto px-4 pt-8">
      <Link
        to="/news"
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
        Presenting AI for Heart Attack Detection at ATTIC 2025
      </h1>
      <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Calendar size={14} className="text-teal" />
          28–30 May 2025
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin size={14} className="text-teal" />
          Silver Springs Hotel, Bugolobi, Kampala
        </span>
        <span className="flex items-center gap-1.5">
          <Users size={14} className="text-teal" />
          ~100 attendees
        </span>
      </div>
    </header>

    {/* Hero image — Christian by poster */}
    <div className="container mx-auto px-4 max-w-3xl mb-12">
      <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-teal/10 border border-border">
        <img
          src="/images/news/attic-2025/christian-poster.jpg"
          alt="Omara Christian Kenneth presenting at ATTIC 2025"
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.classList.add("flex", "items-center", "justify-center");
            e.target.parentElement.innerHTML = `<span class="text-sm text-muted-foreground">Photo coming soon</span>`;
          }}
        />
      </div>
      <p className="text-xs text-muted-foreground mt-2 text-center">
        Omara Christian Kenneth presenting at ATTIC 2025, Silver Springs Hotel, Kampala.
      </p>
    </div>

    {/* Article body */}
    <article className="container mx-auto px-4 max-w-3xl pb-24">

      {/* Intro */}
      <p className="text-lg md:text-xl text-navy/80 leading-relaxed mb-10 font-light border-l-2 border-teal pl-5">
        We presented at ATTIC 2025 in late May — the 3rd Africa Test and Treat Initiative Conference
        on Non-Communicable Diseases, held at Silver Springs Hotel in Bugolobi, Kampala. Our
        co-founder Omara Christian Kenneth spoke in front of about 100 people: doctors, professors,
        students, a few policy makers. It was the first time Kardiosense existed anywhere outside
        our own heads and laptops.
      </p>

      {/* The problem */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl md:text-3xl text-navy mb-4">The problem</h2>
        <p className="text-base text-navy/75 leading-relaxed">
          Cardiovascular disease kills a lot of people on this continent. The bottleneck is rarely
          medicine — it's time. By the time a patient in an under-resourced clinic gets referred
          somewhere with the equipment to detect a myocardial infarction, the window for doing
          anything useful has often already closed. We thought machine learning could help.
        </p>
      </section>

      {/* What we built */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl md:text-3xl text-navy mb-4">What we built</h2>
        <p className="text-base text-navy/75 leading-relaxed">
          At conference time, Kardiosense was a research prototype — our first honest attempt to
          turn an idea into actual code. We built a machine learning system for early detection of
          myocardial infarctions using real-time ECG signals, combining two classifiers (an SVM and
          a Random Forest) to identify early markers of a heart attack. The system connected to a
          cloud dashboard with mobile alerts so clinicians could be notified quickly, even from
          remote clinics.
        </p>
      </section>

      {/* Metrics */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl md:text-3xl text-navy mb-6">How it performed</h2>
        <p className="text-base text-navy/75 leading-relaxed mb-6">Here's where we started:</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {metrics.map((m) => (
            <div
              key={m.label}
              className={`rounded-xl p-5 border text-center ${
                m.highlight
                  ? "bg-teal text-white border-teal"
                  : "bg-card border-border text-navy"
              }`}
            >
              <p className={`text-3xl font-serif mb-1 ${m.highlight ? "text-white" : "text-teal"}`}>
                {m.value}
              </p>
              <p className={`text-sm font-medium mb-1 ${m.highlight ? "text-white/90" : "text-navy"}`}>
                {m.label}
              </p>
              <p className={`text-xs ${m.highlight ? "text-white/70" : "text-muted-foreground"}`}>
                {m.note}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-teal/5 border border-teal/20 p-5 text-sm text-navy/75 leading-relaxed">
          <p className="mb-3">
            Recall was the number that mattered most to us. Missing a heart attack is worse than a
            false alarm, so a model that errs toward alerting is the right place to begin. But 50%
            precision meant half our positive flags were wrong. We knew that needed fixing.
          </p>
          <p>
            It didn't put us off — it gave us something specific to work on. A cautious model is a
            reasonable first model. The job after that is making it smarter.
          </p>
        </div>
      </section>

      {/* Event poster image */}
      <div className="my-12">
        <div className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-border bg-teal/10">
          <img
            src="/images/news/attic-2025/event-poster.jpg"
            alt="ATTIC 2025 Conference Poster"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.classList.add("flex", "items-center", "justify-center", "h-48");
              e.target.parentElement.innerHTML = `<span class="text-sm text-muted-foreground p-6 text-center">ATTIC 2025 event poster — coming soon</span>`;
            }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Official poster for the 3rd Africa Test and Treat Initiative Conference, Kampala 2025.
        </p>
      </div>

      {/* What the conference meant */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl md:text-3xl text-navy mb-4">What the conference meant</h2>
        <p className="text-base text-navy/75 leading-relaxed">
          Presenting at ATTIC put us in front of people actually dealing with this problem —
          clinicians managing patients with limited tools, researchers tracking the NCD burden,
          policy makers deciding how healthcare gets structured. The conversations over those three
          days told us something we'd hoped but hadn't confirmed: the problem was real, the interest
          was genuine, and we weren't alone in thinking AI had a role here.
        </p>
      </section>

      {/* What came next */}
      <section className="mb-14">
        <h2 className="font-serif text-2xl md:text-3xl text-navy mb-4">What came next</h2>
        <p className="text-base text-navy/75 leading-relaxed">
          ATTIC was a starting point. Every flaw in that first model became a design constraint for
          the next one. We went back to work — bigger datasets, a better architecture, eventually a
          multi-modal system combining ECG deep learning with clinical risk modelling. That work
          took us to the International Scientific Conference on NCDs at Gulu University, where we
          presented a significantly improved model and moved to implement it.
        </p>
      </section>

      {/* Next story CTA */}
      <div className="border-t border-border pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Link
          to="/news"
          className="inline-flex items-center gap-2 text-sm text-teal hover:text-cyan-accent transition-colors font-medium"
        >
          <ArrowLeft size={15} />
          Back to News
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

export default Attic2025;

