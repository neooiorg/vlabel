import Image from 'next/image'
import { SectionHeading } from './SectionHeading'

const points = [
  {
    number: '01',
    title: 'Thông tin sản phẩm & nhãn điện tử',
    desc: 'Nội dung nhãn đầy đủ theo quy định, luôn cập nhật, không phải in lại.',
  },
  {
    number: '02',
    title: 'Hành trình truy xuất đã xác thực',
    desc: 'Từ nhà máy tới điểm bán, theo từng mốc, kèm GPS.',
  },
  {
    number: '03',
    title: 'Dấu xác thực & song ngữ',
    desc: 'Dấu xác thực kèm nút chuyển ngôn ngữ cho khách quốc tế.',
  },
]

const consumerTabs = ['Sản phẩm', 'Nhãn điện tử', 'Hành trình', 'Đã xác thực', 'Doanh nghiệp']

export function FeaturesGrid() {
  return (
    <section
      id="trai-nghiem"
      className="scroll-mt-24 bg-[#f7f7f9] px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-[92px] lg:pt-[92px]"
    >
      <div className="mx-auto max-w-[1188px]">
        <SectionHeading
          className="mb-10 lg:mb-14"
          eyebrow="07 · TRẢI NGHIỆM NGƯỜI TIÊU DÙNG"
          title={
            <>
              Một lần quét,
              <br className="hidden lg:block" /> trọn câu chuyện.
            </>
          }
          desc="Người tiêu dùng, kể cả khách nước ngoài, thấy thông tin sản phẩm, nội dung nhãn điện tử, hành trình truy xuất và doanh nghiệp chịu trách nhiệm, song ngữ ngay trên trang QR."
        />

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Consumer QR page mockup */}
          <div className="overflow-hidden rounded-[22px] border border-black/5 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-black/5 px-5 py-3">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#4457ff]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#22a06b]" />
                Đã xác thực · GS1 EPCIS · Vlabel
              </span>
              <span className="rounded-full border border-black/10 px-2 py-0.5 text-[11px] font-semibold text-[#4f5562]">
                VI / EN
              </span>
            </div>
            <div className="px-5 pt-4">
              <div className="flex flex-wrap gap-2">
                {consumerTabs.map((t, i) => (
                  <span
                    key={t}
                    className={`rounded-full px-3 py-1 text-[12px] font-medium ${
                      i === 0
                        ? 'bg-[#eef0ff] text-[#4457ff]'
                        : 'border border-black/[0.08] text-[#767b84]'
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <Image
              src="/sites/feedhive-com-669d1bb4/root-8a5edab2/images/analytics-hero.png"
              alt="Trang QR cho người tiêu dùng"
              width={1200}
              height={800}
              className="mt-4 h-auto w-full"
            />
            <div className="flex items-center justify-center gap-2 border-t border-black/5 bg-[#f7f8fb] py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#4f5562]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22a06b]" />
              Đã đồng bộ · Cổng quốc gia
            </div>
          </div>

          {/* Points */}
          <div className="divide-y divide-black/10">
            {points.map((p) => (
              <div key={p.number} className="flex gap-4 py-5 first:pt-0">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4457ff] text-[14px] font-bold text-white"
                  style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
                >
                  {p.number}
                </span>
                <div>
                  <h3
                    className="text-[18px] font-bold text-[#20232b]"
                    style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-1 text-[15px] leading-[1.55] text-[#4f5562]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
