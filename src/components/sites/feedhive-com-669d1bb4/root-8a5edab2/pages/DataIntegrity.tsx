import { PenLine, CheckCircle2, Lock, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '../SectionHeading'

interface Stage {
  icon: LucideIcon
  index: string
  title: string
  desc: string
}

const stages: Stage[] = [
  {
    icon: PenLine,
    index: '01',
    title: 'Kê khai',
    desc: 'Cán bộ nhập dữ liệu cho từng Sự kiện, kể cả offline khi ở nhà máy, vùng trồng hay kho.',
  },
  {
    icon: CheckCircle2,
    index: '02',
    title: 'Duyệt',
    desc: 'Quản lý rà soát, đối chiếu và phê duyệt dữ liệu trước khi công bố ra ngoài.',
  },
  {
    icon: Lock,
    index: '03',
    title: 'Khoá',
    desc: 'Sự kiện được khoá để đảm bảo toàn vẹn — dữ liệu đã ký không thể sửa lén.',
  },
]

export function DataIntegrity() {
  return (
    <section className="bg-[#f7f8fb] px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-[92px] lg:pt-[92px]">
      <div className="mx-auto max-w-[1188px]">
        <SectionHeading
          className="mb-10 lg:mb-14"
          eyebrow="TOÀN VẸN DỮ LIỆU"
          title="Kê khai · Duyệt · Khoá."
          desc="Ba lớp bảo vệ để dữ liệu hiển thị cho người tiêu dùng luôn đáng tin. Mỗi bước tuân thủ nguyên tắc một bước trước, một bước sau theo TCVN 12850."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stages.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.index} className="rounded-[18px] border border-black/5 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#eef0ff]">
                    <Icon className="h-5 w-5 text-[#4457ff]" strokeWidth={1.8} />
                  </div>
                  <span className="tabular-nums text-[13px] font-semibold text-[#c7d0ff]">{s.index}</span>
                </div>
                <h3 className="mt-4 text-[19px] font-medium text-[#20232b]" style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}>
                  {s.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.55] text-[#4f5562]">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
