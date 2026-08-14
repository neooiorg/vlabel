import { Leaf, Ship, HeartPulse, Sparkles, Utensils, Factory, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '../SectionHeading'

interface Industry {
  icon: LucideIcon
  title: string
  desc: string
}

const industries: Industry[] = [
  {
    icon: Leaf,
    title: 'Nông sản và OCOP',
    desc: 'Truy xuất là điều kiện gần như bắt buộc để nâng hạng sao và vào siêu thị.',
  },
  {
    icon: Ship,
    title: 'Hàng xuất khẩu',
    desc: 'Lệnh 248/249 và yêu cầu của EU: thiếu hồ sơ truy xuất là mất đơn.',
  },
  {
    icon: HeartPulse,
    title: 'Dược và thực phẩm chức năng',
    desc: 'Ba trong một trên cùng mã QR: xác thực chính hãng, truy xuất lô, thông tin thương hiệu.',
  },
  {
    icon: Sparkles,
    title: 'Mỹ phẩm và FMCG',
    desc: 'Tem quét ra trang xấu làm giảm giá trị sản phẩm. Vlabel làm trang đẹp theo bộ nhận diện thương hiệu.',
  },
  {
    icon: Utensils,
    title: 'Thực phẩm và đồ uống',
    desc: 'Minh bạch nguồn gốc, hạn dùng và an toàn thực phẩm cho người mua.',
  },
  {
    icon: Factory,
    title: 'Sản xuất công nghiệp',
    desc: 'Hộ chiếu số sản phẩm, phân quyền theo công đoạn và tích hợp ERP hoặc MES.',
  },
]

export function Industries() {
  return (
    <section id="linh-vuc" className="scroll-mt-24 bg-[#f7f8fb] px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-[92px] lg:pt-[92px]">
      <div className="mx-auto max-w-[1188px]">
        <SectionHeading
          className="mb-10 lg:mb-14"
          eyebrow="06 · LĨNH VỰC"
          title={
            <>
              Mỗi ngành một
              <br className="hidden lg:block" /> lý do riêng.
            </>
          }
          desc="Từ nâng hạng sao đến xuất khẩu hay hình ảnh thương hiệu, truy xuất và nhãn điện tử có giá trị riêng ở mỗi ngành."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => {
            const Icon = ind.icon
            return (
              <div
                key={ind.title}
                className="rounded-[18px] border border-black/5 bg-white p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#eef0ff]">
                  <Icon className="h-5 w-5 text-[#4457ff]" strokeWidth={1.8} />
                </div>
                <h3 className="text-[18px] font-medium text-[#20232b]" style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}>
                  {ind.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.55] text-[#4f5562]">{ind.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
