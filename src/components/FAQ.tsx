import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Kardiosense?",
    a: "Kardiosense is an AI cardiac platform that pairs a wearable ECG chest strap with an on device AI engine. It surfaces heart attack risk and rhythm patterns so clinicians can act sooner.",
  },
  {
    q: "Who is Kardiosense for?",
    a: "It is built for clinicians, nurses, and community health workers who care for patients at the front line, especially in low and middle income settings. Patients and caregivers benefit indirectly through faster, more confident clinical decisions.",
  },
  {
    q: "Does Kardiosense replace a doctor?",
    a: "No. Kardiosense is a clinical decision support tool. It is designed to assist clinicians, flagging risk and surfacing anomalies, while every clinical decision stays firmly in their hands.",
  },
  {
    q: "What conditions does it focus on?",
    a: "We are currently focused on a selected set of cardiac conditions, with our deepest work on myocardial infarction, also known as a heart attack or MI. We expand to new conditions as we validate the model with clinical partners.",
  },
  {
    q: "Is the product available today?",
    a: "Kardiosense is at the prototype stage. The Demo of the Prototype section gives a preview of the experience, and we are running early pilots with selected clinical partners.",
  },
  {
    q: "Are clinicians involved in the design?",
    a: "Yes. The team includes practising clinicians and researchers, and every clinical workflow is reviewed with cardiologists, GPs, and community health workers before it ships.",
  },
  {
    q: "How is patient data protected?",
    a: "All analysis runs on the device. Patient data is not sent to a cloud service unless a clinic explicitly opts in to encrypted sync for record keeping.",
  },
  {
    q: "How can I join the waitlist?",
    a: "Use the Join the Waitlist section at the bottom of this page. Tell us a little about your role and country and we will be in touch as pilots open up.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-navy-deep text-white py-28">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 text-center reveal">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-accent mb-4">
            Frequently Asked
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Questions clinicians ask us.
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-white/10 rounded-2xl px-6 bg-white/[0.03]"
            >
              <AccordionTrigger className="text-left font-serif text-lg hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/75 leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
