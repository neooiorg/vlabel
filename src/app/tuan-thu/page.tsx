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
              Xác thực dữ liệu,
              <br />
              <span className="text-[#4457ff]">kết nối hệ thống quốc gia.</span>
            </>
          }
          desc="Dữ liệu sản phẩm được xác thực và đồng bộ với Cổng truy xuất nguồn gốc quốc gia. Vlabel hỗ trợ doanh nghiệp đáp ứng các yêu cầu pháp lý trong quá trình triển khai."
          image="/sites/feedhive-com-669d1bb4/root-8a5edab2/images/showcase-image-2-v3.png"
          imageAlt="Bản đồ hành trình sản phẩm đã xác thực"
        />
        <VideoSection />
        <ComplianceHandled />
        <LegalFramework />
        <PageCTA
          eyebrow="BẮT ĐẦU"
          title="Kiểm tra yêu cầu áp dụng cho sản phẩm của bạn."
          desc="Gửi thông tin nhóm hàng hóa, Vlabel sẽ xác định yêu cầu cần tuân thủ và đề xuất phương án triển khai phù hợp."
          buttonLabel="Nhận tư vấn"
        />
      </main>
      <Footer />
    </div>
  );
}
