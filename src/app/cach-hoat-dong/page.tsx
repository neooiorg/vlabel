import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/AnnouncementBar";
import { Navigation } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/Navigation";
import { Footer } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/Footer";
import { PageHero } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/pages/PageHero";
import { PageCTA } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/pages/PageCTA";
import { SocialProof } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/SocialProof";
import { EpcisElements } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/pages/EpcisElements";
import { GS1Elements } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/pages/GS1Elements";
import { DataIntegrity } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/pages/DataIntegrity";

export const metadata: Metadata = {
  title: "Cách hoạt động — Vlabel",
  description:
    "Từ nhà máy đến người tiêu dùng: năm bước quy trình, năm yếu tố GS1 EPCIS, và cơ chế Kê khai · Duyệt · Khoá đảm bảo dữ liệu truy xuất toàn vẹn.",
};

export default function CachHoatDongPage() {
  return (
    <div className="min-h-screen bg-white text-[#20232b]">
      <AnnouncementBar />
      <Navigation />
      <main>
        <PageHero
          eyebrow="CÁCH HOẠT ĐỘNG"
          title={
            <>
              Quy trình rõ ràng,
              <br />
              <span className="text-[#4457ff]">theo từng bước.</span>
            </>
          }
          desc="Mỗi công đoạn được ghi nhận thành một sự kiện trong hành trình sản phẩm. Vlabel hỗ trợ chuẩn hóa, xác thực và đồng bộ dữ liệu, doanh nghiệp chỉ cần cập nhật thông tin cần thiết."
          image="/sites/feedhive-com-669d1bb4/root-8a5edab2/images/showcase-image-1-v2.png"
          imageAlt="Trang QR công khai xác thực hành trình sản phẩm"
        />
        <SocialProof />
        <EpcisElements />
        <GS1Elements />
        <DataIntegrity />
        <PageCTA
          eyebrow="BẮT ĐẦU"
          title="Gửi thông tin sản phẩm, nhận quy trình phù hợp."
          desc="Vlabel sẽ khảo sát nhu cầu và đề xuất quy trình triển khai cụ thể cho sản phẩm của bạn."
          buttonLabel="Nhận tư vấn"
        />
      </main>
      <Footer />
    </div>
  );
}
