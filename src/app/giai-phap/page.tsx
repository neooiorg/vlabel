import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/AnnouncementBar";
import { Navigation } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/Navigation";
import { Footer } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/Footer";
import { SolutionHero } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/solutions/SolutionHero";
import { CoreCapabilities } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/solutions/CoreCapabilities";
import { ProductLines } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/solutions/ProductLines";
import { PackageMatcher } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/solutions/PackageMatcher";
import { SolutionProcess } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/solutions/SolutionProcess";
import { LegalFramework } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/solutions/LegalFramework";
import { Industries } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/solutions/Industries";
import { SolutionCTA } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/solutions/SolutionCTA";

export const metadata: Metadata = {
  title: "Giải pháp & Sản phẩm — Vlabel",
  description:
    "Bốn gói, một nền tảng. Nhãn điện tử & truy xuất nguồn gốc đúng luật, đồng bộ cổng quốc gia. VLabel Standard, Brand, Enterprise, SubLabel — chọn theo quy mô của bạn.",
};

export default function GiaiPhapPage() {
  return (
    <div className="min-h-screen bg-white text-[#20232b]">
      <AnnouncementBar />
      <Navigation />
      <main>
        <SolutionHero />
        <CoreCapabilities />
        <ProductLines />
        <PackageMatcher />
        <SolutionProcess />
        <LegalFramework />
        <Industries />
        <SolutionCTA />
      </main>
      <Footer />
    </div>
  );
}
