import { ContactBanner } from "@/components/ContactBanner";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { FeaturedProjectsSection } from "@/components/FeaturedProjectsSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { MetricsBar } from "@/components/MetricsBar";
import { Navbar } from "@/components/Navbar";
import { TechStackSection } from "@/components/TechStackSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      <JsonLd />
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <MetricsBar />
        <ExperienceTimeline />
        <FeaturedProjectsSection />
        <TechStackSection />
        <ContactBanner />
      </main>

      <Footer />
    </div>
  );
}
