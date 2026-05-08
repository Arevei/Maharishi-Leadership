
import { Navbar } from "./components/sections/Navbar";
import { CompaniesMarquee } from "./components/sections/CompaniesMarquee";
import { About } from "./components/sections/About";
import { ProfoundHeritage } from "./components/sections/ProfoundHeritage";
import { Science } from "./components/sections/Science";
import { Benefits } from "./components/sections/Benefits";
import { Programme } from "./components/sections/Programme";
import { Testimonials } from "./components/sections/Testimonials";
import { Curriculum } from "./components/sections/Curriculum";
import { CTA } from "./components/sections/CTA";
import { Footer } from "./components/sections/Footer";
import HeroSection from "./components/sections/Hero";

export default function Home() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-background selection:bg-[hsl(var(--peach))] selection:text-primary">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CompaniesMarquee />
        <About />
        <Science />
        <Benefits />
        <Programme />
        <ProfoundHeritage />
        <Testimonials />
        <Curriculum />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

