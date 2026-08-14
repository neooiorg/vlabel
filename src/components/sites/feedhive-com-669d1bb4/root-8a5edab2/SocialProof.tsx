import { SectionHeading } from './SectionHeading'

interface Step {
  number: string
  title: string
  desc: string
  flow: string
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Thiết lập tổ chức & người dùng',
    desc: 'Dựng cây đơn vị, mời thành viên, phân vai trò.',
    flow: 'TỔ CHỨC → VAI TRÒ',
  },
  {
    number: '02',
    title: 'Tạo sản phẩm & thiết kế Luồng',
    desc: 'Gán GTIN và thiết kế quy trình gồm các Sự kiện.',
    flow: 'GTIN → LUỒNG',
  },
  {
    number: '03',
    title: 'Cấp & gán QR, phân công',
    desc: 'Theo từng lô, giao người phụ trách và thời hạn.',
    flow: 'LÔ → QR',
  },
  {
    number: '04',
    title: 'Kê khai · Duyệt · Khoá',
    desc: 'Cán bộ nhập dữ liệu (kể cả offline); quản lý duyệt và khoá.',
    flow: 'DỮ LIỆU → ĐÃ KHOÁ',
  },
  {
    number: '05',
    title: 'Người tiêu dùng quét QR',
    desc: 'Xem hành trình đã xác thực kèm nhãn điện tử.',
    flow: 'QR → ĐÃ XÁC THỰC',
  },
]

export function SocialProof() {
  return (
    <section
      id="cach-hoat-dong"
      className="scroll-mt-24 bg-[#f7f7f9] px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-[92px] lg:pt-[92px]"
    >
      <div className="mx-auto max-w-[1188px]">
        <SectionHeading
          className="mb-10 lg:mb-14"
          eyebrow="03 · CÁCH HOẠT ĐỘNG · QUY TRÌNH"
          title={
            <>
              Năm bước, từ nhà máy
              <br className="hidden lg:block" /> đến người tiêu dùng.
            </>
          }
          desc="Mỗi bước là một sự kiện EPCIS đã ký, được duyệt rồi khoá để đảm bảo toàn vẹn."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col rounded-[16px] border border-black/5 bg-white p-5 shadow-sm"
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4457ff] text-[16px] font-bold text-white"
                style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
              >
                {step.number}
              </span>
              <h3
                className="mt-4 text-[16px] font-bold leading-[1.3] text-[#20232b]"
                style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
              >
                {step.title}
              </h3>
              <p className="mt-2 flex-1 text-[14px] leading-[1.5] text-[#4f5562]">{step.desc}</p>
              <p className="mt-4 rounded-full bg-[#eef0ff] px-3 py-1.5 text-center font-mono text-[10px] font-semibold tracking-[0.02em] text-[#4457ff]">
                {step.flow}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
