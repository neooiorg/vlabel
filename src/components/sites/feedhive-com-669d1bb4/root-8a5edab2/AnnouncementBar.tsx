export function AnnouncementBar() {
  return (
    <div className="border-b border-black/5 bg-[#f4f3f2] text-[11px] font-semibold tracking-[-0.01em] text-[#2d2f35]">
      {/* Desktop: text tĩnh căn giữa */}
      <p className="hidden py-2 text-center text-[14px] lg:block">
        GS1 EPCIS · NĐ 37/2026 · Cổng quốc gia —
        <a href="#tu-van" className="ml-1 text-[#4457ff] hover:underline">
          Nhãn điện tử và truy xuất nguồn gốc cho doanh nghiệp Việt. Nhận tư vấn →
        </a>
      </p>

      {/* Mobile / tablet: marquee */}
      <div className="relative overflow-x-clip py-2 lg:hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#f4f3f2] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#f4f3f2] to-transparent" />
        <div className="animate-marquee-bar">
          {[0, 1].map((i) => (
            <span key={i} className="flex shrink-0 items-center">
              GS1 EPCIS · NĐ 37/2026 · Cổng quốc gia —
              <a href="#tu-van" className="ml-1 text-[#4457ff]">
                Nhãn điện tử và truy xuất nguồn gốc cho doanh nghiệp Việt. Nhận tư vấn →
              </a>
              <span className="mx-8 text-[#c0c4cc]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
