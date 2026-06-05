import { ArrowLeft, ArrowRight, MapPin, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const metrics = [
  { label: "Accuracy", v1: "73%", v2: "89%" },
  { label: "Recall", v1: "85%", v2: "85%" },
  { label: "Precision", v1: "50%", v2: "70%" },
  { label: "ROC-AUC", v1: "74%", v2: "89%" },
];

const Gulu2025 = () => (
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
        A Stronger Model and a First Partner — Gulu 2025
      </h1>
      <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Calendar size={14} className="text-teal" />
          Early August 2025
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin size={14} className="text-teal" />
          Bomah Hotel, Gulu, Uganda
        </span>
        <span className="flex items-center gap-1.5">
          <Users size={14} className="text-teal" />
          International Scientific Conference on the NCD Epidemic in Africa
        </span>
      </div>
    </header>

    {/* Conference photos */}
    <div className="container mx-auto px-4 max-w-3xl mb-6">
      <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-teal/10 border border-border">
        <img
          src="/images/news/gulu-2025/ncd-conference-1.jpg"
          alt="International Scientific Conference on the NCD Epidemic in Africa — Gulu University 2025"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>
      <p className="text-xs text-muted-foreground mt-2 text-center">
        International Scientific Conference on the NCD Epidemic in Africa, hosted by Gulu University at Bomah Hotel, Gulu.
      </p>
    </div>

    {/* Article body */}
    <article className="container mx-auto px-4 max-w-3xl pb-24">

      {/* Intro */}
      <p className="text-lg md:text-xl text-navy/80 leading-relaxed mb-10 font-light border-l-2 border-teal pl-5">
        In early August 2025, Kardiosense travelled north. We presented at the International
        Scientific Conference on the NCD Epidemic in Africa, hosted by Gulu University at Bomah
        Hotel in Gulu — a gathering of researchers, clinicians, advocates, and policymakers united
        around one of the continent's most urgent health crises. This time, we came with something
        better.
      </p>

      {/* A stronger model */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl md:text-3xl text-navy mb-4">A stronger model</h2>
        <p className="text-base text-navy/75 leading-relaxed mb-6">
          Between ATTIC in May and Gulu in August, we went back to the drawing board on our
          detection system. The first model — built on SVM and Random Forest classifiers — had given
          us a solid foundation but left clear room for improvement, particularly on precision. For
          Gulu, we added a deep learning layer: a Convolutional Neural Network (CNN) pipeline
          trained on 12-lead ECG signals, using stacked Conv1D layers with batch normalisation,
          dropout for regularisation, and global average pooling to extract compact feature
          embeddings.
        </p>
        <p className="text-base text-navy/75 leading-relaxed mb-8">
          The results were a significant step forward. Both co-founders, Omara Christian Kenneth
          and Ogwal Emmanuel, presented together — the first time the full founding team stood on
          stage side by side.
        </p>

        {/* Comparison table */}
        <div className="rounded-2xl border border-border overflow-hidden mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-navy text-white">
                <th className="text-left px-5 py-3 font-medium">Metric</th>
                <th className="text-center px-5 py-3 font-medium">ATTIC v1</th>
                <th className="text-center px-5 py-3 font-medium bg-teal">Gulu v2</th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((m, i) => (
                <tr key={m.label} className={i % 2 === 0 ? "bg-card" : "bg-background"}>
                  <td className="px-5 py-3 text-navy font-medium">{m.label}</td>
                  <td className="px-5 py-3 text-center text-muted-foreground">{m.v1}</td>
                  <td className="px-5 py-3 text-center font-semibold text-teal bg-teal/5">{m.v2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-xl bg-teal/5 border border-teal/20 p-5 text-sm text-navy/75 leading-relaxed">
          Recall held steady at 85% — we maintained our sensitivity to true positives. Precision
          jumped from 50% to 70%, meaning far fewer false alarms. Accuracy and ROC-AUC both rose
          by 15 percentage points. The model was not just more accurate — it was more trustworthy.
        </div>
      </section>

      {/* Photos from the conference */}
      <div className="grid md:grid-cols-2 gap-6 my-10 items-stretch">
        <div className="rounded-2xl overflow-hidden border border-border bg-teal/10 aspect-[4/3]">
          <img
            src="/images/news/gulu-2025/ncd-conference-2.jpg"
            alt="Kardiosense at the NCD Conference in Gulu 2025"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
        <div className="rounded-2xl overflow-hidden border border-border bg-teal/10 aspect-[4/3]">
          <img
            src="/images/news/gulu-2025/ncd-conference-3.jpg"
            alt="Kardiosense team at Gulu University NCD Conference 2025"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
      </div>
      <p className="text-xs text-muted-foreground mb-10 text-center">
        Moments from the International Scientific Conference on the NCD Epidemic in Africa, Gulu 2025.
      </p>

      {/* The conversations that mattered */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl md:text-3xl text-navy mb-4">The conversations that mattered</h2>
        <p className="text-base text-navy/75 leading-relaxed mb-4">
          The conference opened doors we hadn't expected. Sessions led by Prof. Francis Omaswa,
          Vice-Chancellor Prof. George Ladaah Openjuru, and Prof. David Kitara Lagoro set the tone:
          African-led solutions, built with ownership and accountability, not dependency.
        </p>
        <p className="text-base text-navy/75 leading-relaxed mb-4">
          The Alliance for Medical Research in Africa (AMedRA) presented five sessions highlighting
          decades of cardiovascular disease trends across the continent — a powerful evidence base
          that grounded our own work in a much larger picture.
        </p>
        <p className="text-base text-navy/75 leading-relaxed">
          But the conversation that changed things most was with Prof. Dr. Bamba Gaye. We shared
          our work with him, he engaged with it seriously, asked hard questions, and expressed
          genuine interest in what we were building. That conversation did not end at the conference.
        </p>
      </section>

      {/* Photo — with Prof Bamba */}
      <div className="my-10">
        <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-teal/10 border border-border">
          <img
            src="/images/news/gulu-2025/ncd-conference-1.jpg"
            alt="Kardiosense co-founders with Prof. Dr. Bamba Gaye at Gulu 2025"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          With Prof. Dr. Bamba Gaye — who would become Kardiosense's first external partner.
        </p>
      </div>

      {/* First partner */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl md:text-3xl text-navy mb-4">Our first partner</h2>
        <p className="text-base text-navy/75 leading-relaxed">
          Prof. Bamba Gaye went on to become Kardiosense's first external partner. His organisation,
          the Alliance for Medical Research in Africa, became the first institution to formally stand
          behind what we were building — a signal that the work had moved beyond a student project
          and into something the broader research community was willing to invest its credibility in.
        </p>
      </section>

      {/* What we took home */}
      <section className="mb-14">
        <h2 className="font-serif text-2xl md:text-3xl text-navy mb-4">What we took home</h2>
        <p className="text-base text-navy/75 leading-relaxed mb-4">
          Three things, which a keynote framed as the triangle that moves mountains: knowledge
          creation, social mobilisation, and political involvement. The fight against NCDs in Africa
          is not about noise — it is about finding solutions, building collaborations, and changing
          the narrative, one study, one partnership, one conference at a time.
        </p>
        <p className="text-base text-navy/75 leading-relaxed">
          Gulu reminded us that research must always move beyond theory. We left with new
          collaborators, a stronger model, and a clearer sense of the responsibility young
          researchers carry in advancing solutions for this continent.
        </p>
      </section>

      {/* Navigation */}
      <div className="border-t border-border pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Link
          to="/news/science-week-2025"
          className="inline-flex items-center gap-2 text-sm text-teal hover:text-cyan-accent transition-colors font-medium"
        >
          <ArrowLeft size={15} />
          Previous: National Science Week
        </Link>
        <div className="text-right">
          <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Back to all stories</p>
          <Link
            to="/#news"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-teal transition-colors"
          >
            News & Insights
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

    </article>
  </div>
);

export default Gulu2025;
