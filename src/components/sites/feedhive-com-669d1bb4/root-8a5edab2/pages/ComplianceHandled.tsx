import { Tag, FileText, GitBranch, Globe, RefreshCw, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '../SectionHeading'

interface Item {
  icon: LucideIcon
  title: string
  ref: string
}

const items: Item[] = [
  {
    icon: Tag,
    title: 'Đúng nhóm hàng hóa & trường thông tin',
    ref: 'NĐ 37/2026',
  },
  {
    icon: FileText,
    title: 'Nhãn phụ tiếng Việt cho hàng nhập khẩu',
    ref: 'NĐ 43/2017',
  },
  {
    icon: GitBranch,
    title: 'Chuẩn hóa dữ liệu truy xuất',
    ref: 'GS1 EPCIS · TCVN 12850',
  },
  {
    icon: Globe,
    title: 'Kết nối hệ thống quốc gia',
    ref: 'Cổng truy xuất nguồn gốc & Hệ thống Nhãn điện tử',
  },
  {
    icon: RefreshCw,
    title: 'Cập nhật khi quy định thay đổi',
    ref: 'Giảm công việc theo dõi và điều chỉnh thủ công cho doanh nghiệp.',
  },
]

export function ComplianceHandled() {
  return (
    <section className="bg-[#f7f8fb] px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-[92px] lg:pt-[92px]">
      <div className="mx-auto max-w-[1188px]">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            align="left"
            eyebrow="VLABEL LO PHẦN KỸ THUẬT"
            title="Không cần tự theo dõi từng quy định."
            desc="Vlabel hỗ trợ doanh nghiệp chuẩn hóa dữ liệu, ghi nhãn và kết nối hệ thống quốc gia theo các yêu cầu áp dụng."
          />

          <div className="overflow-hidden rounded-[15px] bg-[#ebebef]">
            <div className="grid grid-cols-1 gap-px">
              {items.map((item) => {
                const Icon = item.icon
                return (
                  <article key={item.title} className="flex items-start gap-4 bg-white px-5 py-4">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-[#eef0ff]">
                      <Icon className="h-[15px] w-[15px] text-[#4457ff]" strokeWidth={1.85} />
                    </div>
                    <div>
                      <p className="text-[14px] font-medium leading-[1.4] text-[#20232b]">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-[12px] text-[#767b84]">{item.ref}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
