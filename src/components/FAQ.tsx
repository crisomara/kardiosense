import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is KardioSense?",
    a:
      "KardioSense is a cardiac decision support prototype that combines ECG signals and clinical risk factors to help clinicians recognize selected heart risks sooner.",
  },
  {
    q: "Who is it for?",
    a:
      "It is being designed for clinicians, general clinics, district hospitals, community health workers, and patients who need clearer referral support.",
  },
  {
    q: "Does it replace a doctor?",
    a:
      "No. KardioSense supports clinical judgment. A trained clinician remains responsible for diagnosis, treatment, and referral decisions.",
  },
  {
    q: "Which conditions does it focus on right now?",
    a:
      "The first focus is myocardial infarction, also called MI. The team is also exploring selected rhythm patterns that can influence urgent care decisions.",
  },
  {
    q: "Is there a working prototype?",
    a:
      "The prototype is in active development. The landing page includes a demo area that can be replaced with a recorded walkthrough when the team is ready.",
  },
  {
    q: "How are clinicians involved?",
    a:
      "Clinicians guide the workflow, review the language used in reports, and help shape validation plans so the tool remains useful in real care settings.",
  },
  {
    q: "How is patient data protected?",
    a:
      "The product direction is privacy conscious, with analysis designed to run on the device where possible and any future syncing handled with secure consent based workflows.",
  },
  {
    q: "How do I join the waitlist?",
    a:
      "Use the waitlist form at the bottom of this page and share your role, country, and how you would like to engage with KardioSense.",
  },
];

const FAQ = () => (
  <section id="faq" className="bg-near-black py-28 text-white">
    <div className="container mx-auto max-w-4xl">
      <div className="reveal mb-12 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-cyan-accent">FAQs</p>
        <h2 className="font-serif text-4xl leading-tight md:text-5xl">
          Clear answers for patients, clinicians, and partners.
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={f.q}
            value={`item-${i}`}
            className="reveal rounded-2xl border border-white/10 bg-white/[0.03] px-6"
          >
            <AccordionTrigger className="py-5 text-left font-serif text-lg hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-5 leading-relaxed text-white/75">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
