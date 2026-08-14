import Image from 'next/image'

const IMG = '/sites/feedhive-com-669d1bb4/root-8a5edab2/images'

const bulletItems = [
  {
    bold: 'Truy xuất.',
    rest: ' Quét một mã QR, người tiêu dùng thấy hành trình đã ký — không cần app.',
  },
  {
    bold: 'Nhãn điện tử.',
    rest: ' Soạn nhãn theo NĐ 37/2026, hệ thống bung đúng trường bắt buộc.',
  },
  {
    bold: 'Đa khách hàng.',
    rest: ' Một nền tảng cho nhiều doanh nghiệp, hợp tác xã và địa phương.',
  },
]

const marqueeItems = [
  'Truy xuất',
  'Nhãn điện tử',
  'QR công khai',
  'Bản đồ hành trình',
  'Đa khách hàng',
  'Trợ lý dẫn dắt',
  'Quản lý lô',
  'Bảng tổng quan',
  'Thư viện nhãn',
  'Kê khai thực địa',
  'API / Tích hợp',
  'Nhật ký kiểm toán',
]

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* PART 1: Main hero content */}
      <section className="relative overflow-hidden px-4 pb-2 pt-10 sm:px-6 lg:px-8 lg:pb-10 lg:pt-14 xl:pt-16">
        {/* Right-edge fade gradient (decorative) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-[100px] bg-gradient-to-l from-white to-transparent lg:block" />

        {/* 2-col grid */}
        <div className="mx-auto grid max-w-[1188px] items-start gap-10 lg:grid-cols-[minmax(0,620px)_minmax(0,1fr)] lg:gap-2 xl:grid-cols-[minmax(0,640px)_minmax(0,1fr)]">
          {/* LEFT COLUMN */}
          <div className="relative z-10 pt-3 lg:pt-8">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-[#f7f8fb] px-3.5 py-1.5 text-[13px] font-medium text-[#4f5562]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22a06b]" />
              Nền tảng đa khách hàng · DN & địa phương
            </div>

            {/* H1 */}
            <h1 className="text-[44px] font-medium leading-[1.06] tracking-[-0.035em] text-[#23252b] lg:text-[55px]">
              Một mã QR.
              <br />
              <span className="text-[#4457ff]">Trọn nguồn gốc.</span>
            </h1>

            <p className="mt-6 max-w-[520px] text-[16px] leading-[1.6] text-[#4f5562]">
              Nhãn điện tử và truy xuất nguồn gốc cho doanh nghiệp và địa phương. Quét mã QR, người tiêu dùng thấy hành trình đã ký.
            </p>

            {/* Bullet checklist */}
            <ul className="mt-6 space-y-2.5">
              {bulletItems.map((item) => (
                <li key={item.bold} className="flex items-start gap-3 text-[15px] text-[#20232b]">
                  <span className="mt-0.5 flex-shrink-0 text-[#4457ff]">✓</span>
                  <span>
                    <strong className="font-semibold">{item.bold}</strong>
                    {item.rest}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8 flex items-center gap-5">
              <a
                href="#tu-van"
                className="inline-flex h-[50px] items-center justify-center rounded-[15px] bg-[#4457ff] px-8 text-[15px] font-medium tracking-[-0.03em] text-white transition-colors duration-200 hover:bg-[#3a4ce0]"
              >
                Dùng thử / Đăng ký
              </a>
              <div className="space-y-0.5 text-[13px] leading-5 tracking-[-0.015em] text-[#767b84]">
                <p>Báo giá trong 24 giờ, không cần cam kết.</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative flex min-h-[430px] items-start justify-start pt-2 lg:min-h-[600px] lg:pt-6">
            <div className="relative w-full shrink-0 overflow-hidden rounded-l-[16px] lg:w-[880px] lg:max-w-none">
              <Image
                src={`${IMG}/hero-traceability.png`}
                alt="Quét mã QR, truy xuất nguồn gốc toàn chuỗi cung ứng"
                width={1600}
                height={1067}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* PART 2: Marquee */}
      <div className="relative border-t border-black/5 bg-white py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="overflow-hidden">
          <div className="animate-marquee">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="inline-flex shrink-0 items-center gap-8 pr-8 text-[15px] font-medium text-[#4457ff]">
                {item}
                <span className="h-3 w-px bg-[#c7cdff]" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
