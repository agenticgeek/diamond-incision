import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import ProfileSelector from "@/components/ProfileSelector";
import PatientSection from "@/components/PatientSection";
import ProfessionalSection from "@/components/ProfessionalSection";
import SurgeonSection from "@/components/SurgeonSection";
import ProtocolsSection from "@/components/ProtocolsSection";
import ImmersionSection from "@/components/ImmersionSection";
import FinalCTA, { Footer } from "@/components/Footer";
import SectionStack from "@/components/SectionStack";

export default function Home() {
  return (
    <main className="relative">
      <div className="grain"></div>
      <Header />
      <SectionStack>
        <Hero />
        <Intro />
        <ProfileSelector />
        <PatientSection />
        <ProfessionalSection />
        <SurgeonSection />
        <ProtocolsSection />
        <ImmersionSection />
        <FinalCTA />
      </SectionStack>
      <Footer />
    </main>
  );
}
