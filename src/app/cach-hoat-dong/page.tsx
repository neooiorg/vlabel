import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/AnnouncementBar";
import { Navigation } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/Navigation";
import { Footer } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/Footer";
import { PageHero } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/pages/PageHero";
import { PageCTA } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/pages/PageCTA";
import { SocialProof } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/SocialProof";
import { EpcisElements } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/pages/EpcisElements";
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
              Vlabel vận hành
              <br />
              <span className="text-[#4457ff]">thế nào.</span>
            </>
          }
          desc="Mỗi sản phẩm đi qua các công đoạn, mỗi công đoạn là một sự kiện đã ký. Vlabel chuẩn hoá và đồng bộ, đội bạn chỉ khai báo dữ liệu."
        />
        <SocialProof />
        <EpcisElements />
        <DataIntegrity />
        <PageCTA
          eyebrow="BẮT ĐẦU"
          title="Đưa quy trình của bạn lên Vlabel."
          desc="Để lại thông tin sản phẩm, Vlabel liên hệ khảo sát và đề xuất quy trình cụ thể."
          buttonLabel="Nhận tư vấn"
        />
      </main>
      <Footer />
    </div>
  );
}
