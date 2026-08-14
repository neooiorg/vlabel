import { AnnouncementBar } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/AnnouncementBar";
import { Navigation } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/Navigation";
import { HeroSection } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/HeroSection";
import { HowItWorks } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/HowItWorks";
import { AgenticWorkflows } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/AgenticWorkflows";
import { SocialProof } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/SocialProof";
import { SupportedSocials } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/SupportedSocials";
import { FeatureShowcase } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/FeatureShowcase";
import { VideoSection } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/VideoSection";
import { FeaturesGrid } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/FeaturesGrid";
import { FAQ } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/FAQ";
import { GradientCTA } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/GradientCTA";
import { Footer } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#20232b]">
      <AnnouncementBar />
      <Navigation />
      <main>
        <HeroSection />
        <HowItWorks />
        <AgenticWorkflows />
        <SocialProof />
        <SupportedSocials />
        <FeatureShowcase />
        <VideoSection />
        <FeaturesGrid />
        <FAQ />
        <GradientCTA />
      </main>
      <Footer />
    </div>
  );
}
