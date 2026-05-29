import { useReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhatIsKardiosense from "@/components/WhatIsKardiosense";
import HowItWorks from "@/components/HowItWorks";
import WhatMakesDifferent from "@/components/WhatMakesDifferent";
import WhoWeServe from "@/components/WhoWeServe";
import ForClinicians from "@/components/ForClinicians";
import DemoPrototype from "@/components/DemoPrototype";
import Story from "@/components/Story";
import Journey from "@/components/Journey";
import Team from "@/components/Team";
import News from "@/components/News";
import FAQ from "@/components/FAQ";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

const Index = () => {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <WhatIsKardiosense />
        <HowItWorks />
        <WhatMakesDifferent />
        <WhoWeServe />
        <ForClinicians />
        <DemoPrototype />
        <Story />
        <Journey />
        <Team />
        <News />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
