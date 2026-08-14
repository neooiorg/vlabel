import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { PageTransition } from "@/components/PageTransition";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vlabel — Nhãn điện tử & Truy xuất nguồn gốc",
  description:
    "Nền tảng Nhãn điện tử & Truy xuất nguồn gốc đa khách hàng cho doanh nghiệp và địa phương. Một mã QR, trọn nguồn gốc. Chuẩn GS1 EPCIS, tuân thủ NĐ 37/2026 & NĐ 43/2017.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#20232b]">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
