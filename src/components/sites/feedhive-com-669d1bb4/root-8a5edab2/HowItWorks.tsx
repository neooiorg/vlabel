import Image from 'next/image'
import { SectionHeading } from './SectionHeading'

interface Item {
  number: string
  pain: string
  solution: string
  image: string
  alt: string
}

const items: Item[] = [
  {
    number: '01',
    pain: '“Hàng này thật không? Nguồn gốc ở đâu? Đã qua công đoạn nào?”',
    solution:
      'Quét một mã QR ra hành trình đã xác thực — không cần app hay đăng nhập.',
    image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/cycle-image-1.webp',
    alt: 'Người tiêu dùng quét QR',
  },
  {
    number: '02',
    pain: 'Tuân thủ ghi nhãn (NĐ 43/2017) và nhãn điện tử (NĐ 37/2026) mà không có công cụ số hoá.',
    solution:
      'Chọn nhóm hàng hoá, hệ thống bung đúng các trường bắt buộc.',
    image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/cycle-image-2.webp',
    alt: 'Soạn nhãn điện tử theo quy định',
  },
  {
    number: '03',
    pain: 'Một tỉnh cần quản lý truy xuất cho nhiều doanh nghiệp, hợp tác xã cùng lúc.',
    solution:
      'Đa khách hàng: một nền tảng, nhiều doanh nghiệp, cây đơn vị đa tầng.',
    image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/cycle-image-3.webp',
    alt: 'Quản lý đa khách hàng cho địa phương',
  },
]

export function HowItWorks() {
  return (
    <section
      id="giai-phap"
      className="scroll-mt-24 bg-white px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-[92px]"
    >
      <div className="mx-auto max-w-[1188px]">
        <SectionHeading
          className="mb-10 lg:mb-14"
          eyebrow="01 · BÀI TOÁN → GIẢI PHÁP"
          title="Ba nỗi đau. Ba lời giải."
          desc="Người tiêu dùng không phân biệt thật, giả. Doanh nghiệp phải tuân thủ ghi nhãn nhưng thiếu công cụ số hoá. Địa phương cần một hệ thống thống nhất cho nhiều doanh nghiệp."
        />
        <div className="grid grid-cols-1 divide-y divide-black/5 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {items.map((item, i) => (
            <div
              key={item.number}
              className={`flex flex-col items-center gap-6 py-10 lg:py-0 ${i > 0 ? 'lg:pl-10' : ''} ${i < 2 ? 'lg:pr-10' : ''}`}
            >
              <div className="w-full overflow-hidden rounded-[16px] border border-black/5 bg-white shadow-sm">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1273}
                  height={1101}
                  className="h-auto w-full"
                />
              </div>
              <div className="text-center">
                <p className="text-[13px] font-semibold text-[#9fa3af]">{item.number}</p>
                <h3
                  className="mt-2 text-[17px] font-bold leading-[1.35] text-[#20232b]"
                  style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
                >
                  {item.pain}
                </h3>
                <div className="mt-3 rounded-[12px] bg-[#eef0ff] px-4 py-3 text-left">
                  <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#4457ff]">
                    Vlabel
                  </p>
                  <p className="mt-1 text-[14px] leading-[1.5] text-[#20232b]">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
