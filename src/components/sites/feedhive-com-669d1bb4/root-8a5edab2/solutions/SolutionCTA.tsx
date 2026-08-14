import { SectionHeading } from '../SectionHeading'

export function SolutionCTA() {
  return (
    <section className="bg-white px-4 pb-10 pt-7 sm:px-6 sm:pb-14 lg:px-8 lg:pb-[84px] lg:pt-10">
      <div className="mx-auto max-w-[1248px]">
        <div className="relative overflow-hidden rounded-[34px] bg-[#4457ff] px-6 py-14 text-center sm:px-10 lg:px-14 lg:py-[72px]">
          {/* Dot grid pattern */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          {/* Radial fade overlays */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(ellipse at 50% 0%, rgba(68,87,255,0.0), transparent 70%), radial-gradient(ellipse at 0% 50%, rgba(255,255,255,0.06), transparent 50%), radial-gradient(ellipse at 100% 50%, rgba(30,20,100,0.3), transparent 50%)',
            }}
          />
          <div className="relative z-10 mx-auto max-w-[680px]">
            <SectionHeading
              tone="light"
              eyebrow="07 · BẮT ĐẦU"
              title="Gửi thông tin sản phẩm, Vlabel báo giá trong 24 giờ."
              desc="Vlabel khảo sát và báo giá cụ thể — không cần cam kết."
            />
            <a
              href="/#tu-van"
              className="mt-8 inline-flex h-[52px] items-center justify-center rounded-[15px] bg-[#20232b] px-8 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Đăng ký nhận tư vấn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
