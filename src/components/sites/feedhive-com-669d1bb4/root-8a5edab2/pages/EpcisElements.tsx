import { Building2, Package, QrCode, CheckSquare, ScanLine, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '../SectionHeading'

interface Step {
  icon: LucideIcon
  number: string
  title: string
  desc: string
}

const steps: Step[] = [
  {
    icon: Building2,
    number: '01',
    title: 'Thiết lập đơn vị & người dùng',
    desc: 'Tạo đơn vị, thêm thành viên và phân quyền theo vai trò.',
  },
  {
    icon: Package,
    number: '02',
    title: 'Tạo sản phẩm & quy trình',
    desc: 'Khai báo sản phẩm, gán GTIN và thiết lập các bước truy xuất.',
  },
  {
    icon: QrCode,
    number: '03',
    title: 'Cấp mã QR & phân công',
    desc: 'Tạo mã theo từng lô, giao người phụ trách và thời hạn thực hiện.',
  },
  {
    icon: CheckSquare,
    number: '04',
    title: 'Cập nhật · Duyệt · Xác nhận',
    desc: 'Nhập dữ liệu, gửi duyệt và xác nhận sau khi hoàn tất.',
  },
  {
    icon: ScanLine,
    number: '05',
    title: 'Người tiêu dùng quét QR',
    desc: 'Xem thông tin sản phẩm, nhãn điện tử và hành trình đã được xác thực.',
  },
]

export function EpcisElements() {
  return (
    <section className="bg-white px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-[92px]">
      <div className="mx-auto max-w-[1188px]">
        <SectionHeading
          className="mb-10 lg:mb-14"
          eyebrow="03 · CÁCH HOẠT ĐỘNG · QUY TRÌNH"
          title="Năm bước, từ nhà máy đến người tiêu dùng."
          desc="Mỗi công đoạn được ghi nhận, xác thực và lưu lại để đảm bảo dữ liệu minh bạch, nhất quán."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="rounded-[18px] border border-black/5 bg-[#f7f8fb] p-5 transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#eef0ff]">
                    <Icon className="h-5 w-5 text-[#4457ff]" strokeWidth={1.8} />
                  </div>
                  <span className="tabular-nums text-[22px] font-bold leading-none text-[#4457ff]">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-4 text-[16px] font-medium text-[#20232b]" style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}>
                  {step.title}
                </h3>
                <p className="mt-1 text-[13.5px] leading-[1.5] text-[#4f5562]">{step.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
