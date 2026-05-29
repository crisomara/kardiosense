import { Check, Minus, X } from "lucide-react";

const highlights = [
  {
    title: "Offline cardiac AI",
    body:
      "KardioSense is designed for the room where the patient is sitting. Assessment can happen on the device, without waiting for a stable connection.",
  },
  {
    title: "Built for frontline care",
    body:
      "The workflow is shaped around district hospitals, general clinics, and community health teams that need clear support without adding heavy equipment.",
  },
  {
    title: "Explainable clinical support",
    body:
      "Reports are meant to show the signal and the risk factors behind each result, so clinicians can review the output and make the final decision.",
  },
];

type Cell = boolean | "partial";

const rows: { feature: string; cells: [Cell, Cell, Cell, Cell] }[] = [
  { feature: "Works fully offline", cells: [true, false, false, "partial"] },
  { feature: "Multi lead ECG capture", cells: [true, true, false, false] },
  { feature: "On device AI inference", cells: [true, false, "partial", false] },
  { feature: "No specialist required to start", cells: [true, false, true, true] },
  { feature: "Designed for low resource care", cells: [true, false, false, "partial"] },
  { feature: "OpenMRS and DHIS2 integration path", cells: [true, false, false, "partial"] },
  { feature: "Explainable predictions", cells: [true, "partial", false, false] },
  { feature: "WhatsApp shareable PDF", cells: [true, false, false, false] },
  { feature: "Affordable at scale", cells: [true, false, "partial", true] },
];

function CellMark({ value }: { value: Cell }) {
  if (value === true) return <Check className="mx-auto text-teal" size={18} />;
  if (value === false) return <X className="mx-auto text-muted-foreground/50" size={18} />;
  return <Minus className="mx-auto text-amber-500" size={18} />;
}

const WhatMakesDifferent = () => (
  <section id="different" className="bg-background py-28">
    <div className="container mx-auto">
      <div className="reveal mx-auto mb-14 max-w-3xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-teal">
          What Makes It Different
        </p>
        <h2 className="font-serif text-4xl leading-tight text-near-black md:text-5xl">
          A cardiac tool built for the realities of care, not ideal conditions.
        </h2>
      </div>

      <div className="mb-16 grid gap-6 md:grid-cols-3">
        {highlights.map((h) => (
          <div key={h.title} className="reveal rounded-2xl bg-navy p-8 text-white transition hover:shadow-xl">
            <h3 className="mb-4 font-serif text-2xl">{h.title}</h3>
            <p className="leading-relaxed text-white/75">{h.body}</p>
          </div>
        ))}
      </div>

      <div className="reveal overflow-hidden rounded-3xl border border-border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-sm">
            <thead>
              <tr className="bg-navy text-white">
                <th className="px-5 py-4 text-left font-medium">Feature</th>
                <th className="px-5 py-4 font-medium text-cyan-accent">KardioSense</th>
                <th className="px-5 py-4 font-medium">12 lead ECG machine</th>
                <th className="px-5 py-4 font-medium">Consumer wearables</th>
                <th className="px-5 py-4 font-medium">Typical health apps</th>
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

      <p className="reveal mt-6 text-center text-xs text-muted-foreground">
        <Check className="inline text-teal" size={14} /> supported
        <span className="mx-3 text-muted-foreground/50">|</span>
        <Minus className="inline text-amber-500" size={14} /> partial
        <span className="mx-3 text-muted-foreground/50">|</span>
        <X className="inline text-muted-foreground/50" size={14} /> not supported
      </p>
    </div>
  </section>
);

export default WhatMakesDifferent;
