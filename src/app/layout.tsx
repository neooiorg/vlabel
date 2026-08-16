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
  metadataBase: new URL("https://vlabel.apps.neooi.com"),
  title: "Vlabel — Nhãn điện tử & Truy xuất nguồn gốc",
  description:
    "Nền tảng Nhãn điện tử & Truy xuất nguồn gốc đa khách hàng cho doanh nghiệp và địa phương. Một mã QR, trọn nguồn gốc. Chuẩn GS1 EPCIS, tuân thủ NĐ 37/2026 & NĐ 43/2017.",
  openGraph: {
    title: "Vlabel — Nhãn điện tử & Truy xuất nguồn gốc",
    description:
      "Nền tảng Nhãn điện tử & Truy xuất nguồn gốc đa khách hàng cho doanh nghiệp và địa phương. Một mã QR, trọn nguồn gốc.",
    url: "https://vlabel.apps.neooi.com",
    siteName: "Vlabel",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vlabel — Nhãn điện tử & Truy xuất nguồn gốc",
    description:
      "Nền tảng Nhãn điện tử & Truy xuất nguồn gốc đa khách hàng cho doanh nghiệp và địa phương.",
    images: ["/opengraph-image.png"],
  },
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
