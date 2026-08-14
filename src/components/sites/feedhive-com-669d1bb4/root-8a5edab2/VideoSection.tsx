import { SectionHeading } from './SectionHeading'

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
    title: 'Dữ liệu sự kiện quốc tế',
    desc: 'Ai · Ở đâu · Khi nào · Thông tin · Hình ảnh. Chuẩn toàn cầu cho sự kiện chuỗi cung ứng.',
  },
  {
    index: '02',
    code: 'NĐ 37/2026',
    title: 'Nhãn điện tử',
    desc: 'Nhóm hàng hoá & trường bắt buộc theo Phụ lục I, bung tự động.',
  },
  {
    index: '03',
    code: 'NĐ 43/2017',
    title: 'Ghi nhãn hàng hoá',
    desc: 'Nhãn phụ tiếng Việt, hiển thị cho người tiêu dùng như một phần của nhãn điện tử.',
  },
  {
    index: '04',
    code: 'CỔNG QG',
    title: 'Đồng bộ xác thực',
    desc: 'Đồng bộ lên Cổng truy xuất nguồn gốc quốc gia & Hệ thống Nhãn điện tử Quốc gia.',
  },
]

export function VideoSection() {
  return (
    <section id="tuan-thu" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1188px]">
        <SectionHeading
          className="mb-10 lg:mb-14"
          eyebrow="06 · TUÂN THỦ & TÍCH HỢP QUỐC GIA"
          title={
            <>
              Chuẩn quốc tế,
              <br className="hidden lg:block" /> tuân thủ nội địa.
            </>
          }
          desc="Mỗi hành trình được “đóng dấu” xác thực và đồng bộ lên Cổng truy xuất nguồn gốc quốc gia và Hệ thống Nhãn điện tử Quốc gia."
        />
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
      </div>
    </section>
  )
}
