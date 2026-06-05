import { Check, X, Minus } from "lucide-react";

const highlights = [
  {
    title: "Offline first cardiac AI",
    body:
      "Most clinical AI assumes a steady connection. Kardiosense assumes the opposite. The full analysis happens on the device, in the room with the patient.",
  },
  {
    title: "Built for African realities from day one",
    body:
      "Not retrofitted from a Western product. Designed for the rural clinic, the community health worker, and the daily reality of intermittent power and patchy networks.",
  },
  {
    title: "Explainable and auditable AI",
    body:
      "Clinicians see the rhythm, the risk factors, and the reasoning. Every output is a clinical artifact that can be reviewed and defended, not a black box.",
  },
];

type Cell = boolean | "partial";
const rows: { feature: string; cells: [Cell, Cell, Cell, Cell] }[] = [
  { feature: "Works fully offline", cells: [true, false, false, "partial"] },
  { feature: "Multi lead ECG", cells: [true, true, false, false] },
  { feature: "On device AI inference", cells: [true, false, "partial", false] },
  { feature: "No specialist required", cells: [true, false, true, true] },
  { feature: "Designed for low resource settings", cells: [true, false, false, "partial"] },
  { feature: "OpenMRS and DHIS2 integration", cells: [true, false, false, "partial"] },
  { feature: "Explainable predictions", cells: [true, "partial", false, false] },
  { feature: "WhatsApp shareable PDF", cells: [true, false, false, false] },
  { feature: "Affordable at scale", cells: [true, false, "partial", true] },
];

function CellMark({ value }: { value: Cell }) {
  if (value === true) return <Check className="mx-auto text-teal" size={18} />;
  if (value === false) return <X className="mx-auto text-muted-foreground/50" size={18} />;
  return <Minus className="mx-auto text-amber-500" size={18} />;
}

const WhatMakesDifferent = () => {
  return (
    <section id="different" className="bg-background py-28">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 reveal">
          <p className="text-xs uppercase tracking-[0.25em] text-teal mb-4">
            What Makes It Different
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-near-black leading-tight">
            What makes Kardiosense different?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="reveal rounded-2xl bg-navy text-white p-8 hover:shadow-elevated transition"
            >
              <h3 className="font-serif text-2xl mb-4">{h.title}</h3>
              <p className="text-white/75 leading-relaxed">{h.body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-border bg-card overflow-hidden reveal">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left font-medium px-5 py-4">Feature</th>
                  <th className="px-5 py-4 font-medium text-cyan-accent">Kardiosense</th>
                  <th className="px-5 py-4 font-medium">12 lead ECG machine</th>
                  <th className="px-5 py-4 font-medium">Consumer wearables</th>
                  <th className="px-5 py-4 font-medium">General health apps</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.feature} className={i % 2 === 0 ? "bg-muted/40" : "bg-background"}>
                    <td className="px-5 py-4 font-medium text-near-black">{r.feature}</td>
                    {r.cells.map((c, idx) => (
                      <td key={idx} className="px-5 py-4 text-center">
                        <CellMark value={c} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-6 text-xs text-muted-foreground text-center">
          <Check className="inline text-teal" size={14} /> supported &nbsp;·&nbsp;
          <Minus className="inline text-amber-500" size={14} /> partial &nbsp;·&nbsp;
          <X className="inline text-muted-foreground/50" size={14} /> not supported
        </p>
      </div>
    </section>
  );
};

export default WhatMakesDifferent;
