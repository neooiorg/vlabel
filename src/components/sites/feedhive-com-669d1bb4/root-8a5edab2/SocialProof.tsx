import { Users, GitBranch, QrCode, Lock, Smartphone, type LucideIcon } from 'lucide-react'

interface Step {
  number: string
  icon: LucideIcon
  title: string
  desc: string
}

const steps: Step[] = [
  {
    number: '01',
    icon: Users,
    title: 'Thiết lập tổ chức & người dùng',
    desc: 'Dựng cây đơn vị, mời thành viên, phân vai trò.',
  },
  {
    number: '02',
    icon: GitBranch,
    title: 'Tạo sản phẩm & thiết kế Luồng',
    desc: 'Gán GTIN và thiết kế quy trình gồm các Sự kiện.',
  },
  {
    number: '03',
    icon: QrCode,
    title: 'Cấp & gán QR, phân công',
    desc: 'Theo từng lô, giao người phụ trách và thời hạn.',
  },
  {
    number: '04',
    icon: Lock,
    title: 'Kê khai · Duyệt · Khoá',
    desc: 'Cán bộ nhập dữ liệu, kể cả offline; quản lý duyệt và khoá.',
  },
  {
    number: '05',
    icon: Smartphone,
    title: 'Người tiêu dùng quét QR',
    desc: 'Xem hành trình đã xác thực kèm nhãn điện tử.',
  },
]

export function SocialProof() {
  return (
    <section
      id="cach-hoat-dong"
      className="scroll-mt-24 bg-white px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-[92px]"
    >
      <div className="mx-auto max-w-[1188px]">
        {/* Heading */}
        <div className="mx-auto mb-[30px] text-center sm:mb-[38px] lg:mb-[44px]">
          <p className="mb-[10px] text-[14px] font-bold uppercase tracking-[0.14em] text-[#4457ff]">
            03 · Cách hoạt động · Quy trình
          </p>
          <h2
            className="mx-auto max-w-[760px] text-[32px] font-medium leading-[1.0] tracking-[-0.03em] text-[#23252b] sm:text-[44px] lg:text-[56px]"
            style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
          >
            Năm bước, từ nhà máy đến người tiêu dùng.
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-balance text-[15px] leading-[1.6] text-[#4f5562]">
            Mỗi bước là một sự kiện EPCIS đã ký, được duyệt rồi khoá để đảm bảo toàn vẹn.
          </p>
        </div>

        {/* Steps strip */}
        <div className="relative overflow-hidden rounded-[15px] bg-[#ebebef]">
          <div className="grid gap-px grid-cols-1 lg:grid-cols-5">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <article
                  key={step.number}
                  className="flex flex-col items-center bg-white px-6 pb-8 pt-7 text-center"
                >
                  <p className="mb-3 font-mono text-[13px] font-semibold text-[#c0c3cc]">
                    {step.number}.
                  </p>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[13px] bg-[#eef0ff]">
                    <Icon className="h-[18px] w-[18px] text-[#4457ff]" strokeWidth={1.8} />
                  </div>
                  <h3
                    className="text-[15px] font-medium leading-[1.35] tracking-[-0.02em] text-[#20232b]"
                    style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-[#4f5562]">
                    {step.desc}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
