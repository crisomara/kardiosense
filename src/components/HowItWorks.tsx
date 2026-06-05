import { Activity, Bluetooth, FileHeart, Smartphone } from "lucide-react";

const steps = [
  {
    icon: Activity,
    title: "Wear the strap",
    body:
      "Place the Kardiosense chest strap across the patient and confirm the dry electrodes are making contact.",
  },
  {
    icon: Bluetooth,
    title: "Pair the app",
    body:
      "Connect the strap to the Kardiosense mobile app and begin a guided ECG capture workflow.",
  },
  {
    icon: Smartphone,
    title: "Run the analysis",
    body:
      "The app combines ECG morphology with clinical risk information on the device, even when internet access is unreliable.",
  },
  {
    icon: FileHeart,
    title: "Review and share",
    body:
      "Receive a clinician ready report that can support triage, referral, follow up, and patient conversations.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="bg-background py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-16 max-w-3xl text-center reveal">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-teal">How It Works</p>
          <h2 className="font-serif text-4xl text-near-black md:text-5xl">
            Getting started is simple.
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            The workflow is designed for real clinical settings: put on the strap, pair the app,
            capture the signal, and review a report that helps the care team decide what happens
            next.
          </p>
        </div>

        <div className="relative reveal">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-border lg:block" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="relative rounded-2xl border border-border bg-card p-7 text-center shadow-sm transition hover:-translate-y-1 hover:border-teal hover:shadow-elevated"
              >
                <div className="mx-auto mb-6 grid h-24 w-24 place-items-center rounded-full border border-teal/20 bg-background">
                  <div className="grid h-16 w-16 place-items-center rounded-full gradient-teal text-white">
                    <step.icon size={28} />
                  </div>
                </div>
                <div className="mx-auto mb-5 grid h-9 w-9 place-items-center rounded-full bg-navy font-serif text-lg text-cyan-accent">
                  {index + 1}
                </div>
                <h3 className="mb-3 font-serif text-2xl text-near-black">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
