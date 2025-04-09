import AboutFeature from "@/components/ui/about/AboutFeature";
import AboutInspiration from "@/components/ui/about/about-inspirations/AboutInspiration";
import Hero from "@/components/ui/about/Hero";
import Beautify from "@/components/ui/about/beautify/Beautify";
import Browse from "@/components/ui/about/browse/Browse";
import HowItWorks from "@/components/ui/about/how-it-works/HowItWorks";

const About = () => {
  return (
    <>
      <Hero />
      <AboutFeature />
      <AboutInspiration />
      <Beautify />
      <Browse />
      <HowItWorks />
    </>
  );
};

export default About;
