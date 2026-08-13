import { AnnouncementBar } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/AnnouncementBar";
import { Navigation } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/Navigation";
import { HeroSection } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/HeroSection";
import { TrustedByBrands } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/TrustedByBrands";
import { HowItWorks } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/HowItWorks";
import { VideoSection } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/VideoSection";
import { SocialProof } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/SocialProof";
import { SupportedSocials } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/SupportedSocials";
import { AgenticWorkflows } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/AgenticWorkflows";
import { FeatureShowcase } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/FeatureShowcase";
import { FeaturesGrid } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/FeaturesGrid";
import { GradientCTA } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/GradientCTA";
import { Footer } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#20232b]">
      <AnnouncementBar />
      <Navigation />
      <main>
        <HeroSection />
        <TrustedByBrands />
        <HowItWorks />
        <VideoSection />
        <SocialProof />
        <SupportedSocials />
        <AgenticWorkflows />
        <FeatureShowcase />
        <FeaturesGrid />
        <GradientCTA />
      </main>
      <Footer />
    </div>
  );
}
