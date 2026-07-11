import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Showcase from "@/components/Showcase";
import RealRenders from "@/components/RealRenders";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <HowItWorks />
        <Showcase />
        <RealRenders />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
