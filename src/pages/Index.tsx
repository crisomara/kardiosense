import { useReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import WhatMakesDifferent from "@/components/WhatMakesDifferent";
import WhoWeServe from "@/components/WhoWeServe";
import ForClinicians from "@/components/ForClinicians";
import DemoVideo from "@/components/DemoVideo";
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
        <Features />
        <HowItWorks />
        <WhatMakesDifferent />
        <WhoWeServe />
        <ForClinicians />
        <DemoVideo />
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
