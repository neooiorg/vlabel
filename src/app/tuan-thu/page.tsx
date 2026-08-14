import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/AnnouncementBar";
import { Navigation } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/Navigation";
import { Footer } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/Footer";
import { PageHero } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/pages/PageHero";
import { PageCTA } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/pages/PageCTA";
import { VideoSection } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/VideoSection";
import { ComplianceHandled } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/pages/ComplianceHandled";
import { LegalFramework } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/solutions/LegalFramework";

export const metadata: Metadata = {
  title: "Tuân thủ & tích hợp quốc gia — Vlabel",
  description:
    "Chuẩn quốc tế, tuân thủ nội địa. GS1 EPCIS, NĐ 37/2026, NĐ 43/2017 và đồng bộ Cổng truy xuất nguồn gốc quốc gia — Vlabel lo phần tuân thủ cho bạn.",
};

export default function TuanThuPage() {
  return (
    <div className="min-h-screen bg-white text-[#20232b]">
      <AnnouncementBar />
      <Navigation />
      <main>
        <PageHero
          eyebrow="TUÂN THỦ & TÍCH HỢP QUỐC GIA"
          title={
            <>
              Đã xác thực,
              <br />
              <span className="text-[#4457ff]">đồng bộ quốc gia.</span>
            </>
          }
          desc="Mỗi sản phẩm mang dấu xác thực và được đồng bộ lên Cổng truy xuất nguồn gốc quốc gia. Phần tuân thủ pháp lý, để Vlabel lo."
        />
        <VideoSection />
        <ComplianceHandled />
        <LegalFramework />
        <PageCTA
          eyebrow="BẮT ĐẦU"
          title="Đưa sản phẩm của bạn đúng luật."
          desc="Để lại nhóm hàng hoá, Vlabel khảo sát yêu cầu pháp lý và triển khai đúng chuẩn."
          buttonLabel="Nhận tư vấn"
        />
      </main>
      <Footer />
    </div>
  );
}
