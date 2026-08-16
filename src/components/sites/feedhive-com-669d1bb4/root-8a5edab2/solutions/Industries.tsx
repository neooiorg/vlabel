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
    title: 'Nông sản & OCOP',
    desc: 'Minh bạch nguồn gốc, chuẩn hóa thông tin và hỗ trợ nâng cao giá trị sản phẩm.',
  },
  {
    icon: Ship,
    title: 'Hàng xuất khẩu',
    desc: 'Chuẩn hóa hồ sơ truy xuất, đáp ứng yêu cầu của thị trường và đối tác quốc tế.',
  },
  {
    icon: HeartPulse,
    title: 'Dược & thực phẩm chức năng',
    desc: 'Một mã QR cho xác thực sản phẩm, truy xuất lô và cung cấp thông tin đến người tiêu dùng.',
  },
  {
    icon: Sparkles,
    title: 'Mỹ phẩm & FMCG',
    desc: 'Trang quét QR được thiết kế theo nhận diện thương hiệu, giúp nâng cao trải nghiệm và hình ảnh sản phẩm.',
  },
  {
    icon: Utensils,
    title: 'Thực phẩm & đồ uống',
    desc: 'Cung cấp rõ nguồn gốc, thông tin sản phẩm, hạn sử dụng và các dữ liệu cần thiết cho người mua.',
  },
  {
    icon: Factory,
    title: 'Sản xuất công nghiệp',
    desc: 'Quản lý dữ liệu sản phẩm theo từng công đoạn, phân quyền vận hành và hỗ trợ tích hợp ERP, MES.',
  },
]

export function Industries() {
  return (
    <section id="linh-vuc" className="scroll-mt-24 bg-[#f7f8fb] px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-[92px] lg:pt-[92px]">
      <div className="mx-auto max-w-[1188px]">
        <SectionHeading
          className="mb-10 lg:mb-14"
          eyebrow="06 · LĨNH VỰC"
          title="Mỗi lĩnh vực, một nhu cầu riêng."
          desc="Từ OCOP, xuất khẩu đến xây dựng thương hiệu, truy xuất nguồn gốc và nhãn điện tử mang lại giá trị khác nhau cho từng ngành."
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
