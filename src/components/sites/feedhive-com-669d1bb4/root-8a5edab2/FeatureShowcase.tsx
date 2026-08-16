import Image from 'next/image'
import { SectionHeading } from './SectionHeading'
import { AnimateIn } from '@/components/AnimateIn'

interface Panel {
  label: string
  title: string
  subtitle: string
  bullets: string[]
  image: string
  alt: string
  imageLeft: boolean
}

const panels: Panel[] = [
  {
    label: 'WEB · BẢNG ĐIỀU KHIỂN',
    title: 'Quản trị tập trung trên web.',
    subtitle: 'Cho quản lý, admin, cán bộ',
    bullets: [
      'Quản trị song ngữ Việt / Anh',
      'Thiết kế Luồng & Sự kiện, soạn nhãn điện tử',
      'Bảng tổng quan, nhật ký kiểm toán, duyệt & khoá',
      'Sinh QR & nhập QR hàng loạt',
    ],
    image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/showcase-web-dashboard-v2.png',
    alt: 'Bảng điều khiển web Vlabel — quản trị tập trung, nhật ký kiểm toán, sinh QR hàng loạt',
    imageLeft: true,
  },
  {
    label: 'DI ĐỘNG · iOS / ANDROID',
    title: 'Cập nhật và theo dõi ngay trên điện thoại.',
    subtitle: 'Dành cho nhân sự vận hành & giám sát',
    bullets: [
      'Xem công việc được giao, quét mã QR',
      'Ghi nhận sự kiện kèm hình ảnh và vị trí GPS',
      'Theo dõi tiến độ và hành trình sản phẩm',
      'Nhận thông báo và nhắc việc kịp thời',
    ],
    image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/showcase-mobile-app-v2.png',
    alt: 'Ứng dụng di động Vlabel — kê khai thực địa, ghi sự kiện kèm GPS, bản đồ hành trình',
    imageLeft: false,
  },
]

export function FeatureShowcase() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1188px] pt-16 sm:pt-20 lg:pt-[92px]">
        <AnimateIn>
          <SectionHeading
            className="mb-12"
            eyebrow="05 · WEB + DI ĐỘNG"
            title="Quản lý trên web, cập nhật trên điện thoại."
            desc="Dễ dàng sử dụng tại nhà máy, vùng trồng và kho, kể cả khi kết nối mạng yếu."
          />
        </AnimateIn>
        <div className="divide-y divide-black/5">
          {panels.map((panel) => (
            <div
              key={panel.title}
              className={`grid grid-cols-1 items-center gap-8 py-12 lg:grid-cols-2 lg:gap-16 ${
                !panel.imageLeft
                  ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'
                  : ''
              }`}
            >
              <div className="overflow-hidden rounded-[12px] border border-white/70 bg-[#f7f7f9] shadow-[0_0_0_1px_rgba(0,0,0,0.07),inset_0_1px_0_rgba(255,255,255,0.95)]">
                <Image
                  src={panel.image}
                  alt={panel.alt}
                  width={800}
                  height={600}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-auto w-full"
                />
              </div>
              <div className={!panel.imageLeft ? 'lg:justify-self-end' : ''}>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[#4457ff]">
                  {panel.label}
                </p>
                <h3
                  className="text-[26px] font-medium leading-[1.12] tracking-[-0.025em] text-[#20232b] lg:text-[30px]"
                  style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
                >
                  {panel.title}
                </h3>
                <p className="mt-2 text-[14px] font-semibold text-[#767b84]">{panel.subtitle}</p>
                <ul className="mt-4 space-y-2.5">
                  {panel.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[15px] text-[#20232b]">
                      <span className="mt-0.5 flex-shrink-0 text-[#4457ff]">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
