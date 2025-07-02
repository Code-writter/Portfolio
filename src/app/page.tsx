import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import Features from "@/components/features";
import { CardHoverEffectDemo } from "@/components/profiles";
import CertificatesCarousel from "@/components/_components-certificate/Certificates";
import {Projects} from "@/components/projects/projects";
import Socials from "@/components/socials";



export default function App() {
  return (
    <div>
      <main>
        <HeroSection />
        {/* About Me */}
        <Features />
        {/*Skills  */}
        <CardHoverEffectDemo />
        {/* Certificates */}
        <CertificatesCarousel />
        {/* Projects */}
        <Projects />
        {/* Social Media */}
        <Socials />
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

