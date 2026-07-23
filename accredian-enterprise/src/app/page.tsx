import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AccreditianEdge from "@/components/AccredianEdge";
import DomainExpertise from "@/components/DomainExpertise";
import CourseSegmentation from "@/components/CourseSegmentation";
import HowItWorks from "@/components/HowItWorks";
import CATFramework from "@/components/CATFramework";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AccreditianEdge />
        <DomainExpertise />
        <CourseSegmentation />
        <CATFramework />
        <HowItWorks />
        <FAQ />
        <LeadForm />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
