import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/AnnouncementBar";
import { Navigation } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/Navigation";
import { Footer } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/Footer";
import { PageHero } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/pages/PageHero";
import { PageCTA } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/pages/PageCTA";
import { FaqPage } from "@/components/sites/feedhive-com-669d1bb4/root-8a5edab2/pages/FaqPage";

export const metadata: Metadata = {
  title: "Câu hỏi thường gặp — Vlabel",
  description:
    "Giải đáp về nhãn điện tử, truy xuất nguồn gốc, triển khai, chi phí, dữ liệu và pháp lý cho doanh nghiệp và địa phương.",
};

export default function FaqRoutePage() {
  return (
    <div className="min-h-screen bg-white text-[#20232b]">
      <AnnouncementBar />
      <Navigation />
      <main>
        <PageHero
          eyebrow="FAQ"
          title={
            <>
              Câu hỏi
              <br />
              <span className="text-[#4457ff]">thường gặp.</span>
            </>
          }
          desc="Trả lời ngắn cho những câu hỏi phổ biến. Chưa thấy câu trả lời — để lại thông tin bên dưới."
        />
        <FaqPage />
        <PageCTA
          eyebrow="BẮT ĐẦU"
          title="Câu hỏi chưa có trong danh sách."
          desc="Để lại thông tin, Vlabel giải đáp cụ thể theo trường hợp của bạn."
          buttonLabel="Nhận tư vấn"
        />
      </main>
      <Footer />
    </div>
  );
}
