import { User, MapPin, Clock, FileText, Camera, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '../SectionHeading'

interface Element {
  icon: LucideIcon
  label: string
  desc: string
}

const elements: Element[] = [
  { icon: User, label: 'Ai', desc: 'Đơn vị hoặc người thực hiện.' },
  { icon: MapPin, label: 'Ở đâu', desc: 'Địa điểm, cơ sở hoặc vùng sản xuất.' },
  { icon: Clock, label: 'Khi nào', desc: 'Thời gian diễn ra công đoạn.' },
  { icon: FileText, label: 'Thông tin', desc: 'Dữ liệu liên quan như lô, số lượng và thông số.' },
  { icon: Camera, label: 'Hình ảnh', desc: 'Hình ảnh minh chứng cho từng công đoạn.' },
]

export function GS1Elements() {
  return (
    <section className="bg-[#f7f8fb] px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-[92px]">
      <div className="mx-auto max-w-[1188px]">
        <SectionHeading
          className="mb-10 lg:mb-14"
          eyebrow="NĂM YẾU TỐ · GS1 EPCIS"
          title="Mỗi sự kiện, năm thông tin cốt lõi."
          desc="Mỗi công đoạn được ghi nhận thành một sự kiện, với đầy đủ thông tin theo chuẩn GS1 EPCIS."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {elements.map((el) => {
            const Icon = el.icon
            return (
              <div
                key={el.label}
                className="rounded-[18px] border border-black/5 bg-white p-5 transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#eef0ff]">
                  <Icon className="h-5 w-5 text-[#4457ff]" strokeWidth={1.8} />
                </div>
                <h3 className="mt-4 text-[16px] font-medium text-[#20232b]" style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}>
                  {el.label}
                </h3>
                <p className="mt-1 text-[13.5px] leading-[1.5] text-[#4f5562]">{el.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
