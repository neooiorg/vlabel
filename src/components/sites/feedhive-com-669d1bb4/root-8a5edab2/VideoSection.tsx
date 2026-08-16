import { SectionHeading } from './SectionHeading'
import { AnimateIn } from '@/components/AnimateIn'

interface Standard {
  index: string
  code: string
  title: string
  desc: string
}

const standards: Standard[] = [
  {
    index: '01',
    code: 'GS1 EPCIS',
    title: 'Dữ liệu sự kiện theo chuẩn quốc tế',
    desc: 'Ghi nhận ai · ở đâu · khi nào · sự kiện gì · hình ảnh minh chứng trong toàn bộ chuỗi cung ứng.',
  },
  {
    index: '02',
    code: 'NĐ 37/2026',
    title: 'Nhãn điện tử',
    desc: 'Tự động hiển thị các trường thông tin bắt buộc theo từng nhóm hàng hóa.',
  },
  {
    index: '03',
    code: 'NĐ 43/2017',
    title: 'Ghi nhãn hàng hóa',
    desc: 'Hỗ trợ nhãn phụ tiếng Việt và hiển thị thông tin cần thiết cho người tiêu dùng.',
  },
  {
    index: '04',
    code: 'CỔNG QUỐC GIA',
    title: 'Đồng bộ & xác thực',
    desc: 'Đồng bộ dữ liệu với Cổng truy xuất nguồn gốc quốc gia và Hệ thống Nhãn điện tử Quốc gia.',
  },
]

export function VideoSection() {
  return (
    <section id="tuan-thu" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1188px]">
        <AnimateIn>
          <SectionHeading
            className="mb-10 lg:mb-14"
            eyebrow="06 · TUÂN THỦ & TÍCH HỢP QUỐC GIA"
            title="Đáp ứng quy định, kết nối hệ thống quốc gia."
            desc="Dữ liệu được xác thực và đồng bộ với Cổng truy xuất nguồn gốc quốc gia và Hệ thống Nhãn điện tử Quốc gia."
          />
        </AnimateIn>
        <AnimateIn delay={100}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {standards.map((s) => (
            <div
              key={s.index}
              className="rounded-[18px] border border-black/5 bg-[#f7f7f9] p-6"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="inline-flex h-[22px] items-center rounded-full bg-[#4457ff] px-2 text-[11px] font-bold text-white">
                  {s.index}
                </span>
                <span className="text-[12px] font-bold uppercase tracking-[0.06em] text-[#4457ff]">
                  {s.code}
                </span>
              </div>
              <h3
                className="text-[18px] font-bold text-[#20232b]"
                style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
              >
                {s.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.55] text-[#4f5562]">{s.desc}</p>
            </div>
          ))}
        </div>
        </AnimateIn>
      </div>
    </section>
  )
}
