import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import Features from "@/components/features";
import { Profiles } from "@/components/profiles";
import {Certificates} from "@/components/certificates/certificates";
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
        <Profiles />
        {/* Certificates */}
        <Certificates />
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

