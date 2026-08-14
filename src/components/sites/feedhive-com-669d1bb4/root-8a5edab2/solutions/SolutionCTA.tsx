import { SectionHeading } from '../SectionHeading'

export function SolutionCTA() {
  return (
    <section className="bg-white px-4 pb-10 pt-7 sm:px-6 sm:pb-14 lg:px-8 lg:pb-[84px] lg:pt-10">
      <div className="mx-auto max-w-[1248px]">
        <div
          className="relative overflow-hidden rounded-[34px] px-6 py-14 text-center sm:px-10 lg:px-14 lg:py-[72px]"
          style={{
            backgroundImage:
              'linear-gradient(135deg, #4e7cff 0%, #9f4bff 24%, #d54a96 58%, #ed7d3f 100%)',
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 15% 15%, rgba(255,255,255,0.4), transparent 20%), radial-gradient(circle at 85% 100%, rgba(86,74,255,0.5), transparent 26%)',
            }}
          />
          <div className="relative z-10 mx-auto max-w-[680px]">
            <SectionHeading
              tone="light"
              eyebrow="07 · BẮT ĐẦU"
              title="Chưa rõ nên bắt đầu ở gói nào?"
              desc="Gửi thông tin sản phẩm, Vlabel khảo sát và báo giá trong 24 giờ làm việc. Không ràng buộc."
            />
            <a
              href="/#tu-van"
              className="mt-8 inline-flex h-[52px] items-center justify-center rounded-[15px] bg-white px-8 text-[15px] font-semibold text-[#24262d] transition-opacity hover:opacity-90"
            >
              Đăng ký nhận tư vấn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
