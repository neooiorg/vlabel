import Image from 'next/image'
import { SectionHeading } from './SectionHeading'

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
    title: 'Kê khai thực địa trên điện thoại.',
    subtitle: 'Cho kê khai & giám sát thực địa',
    bullets: [
      'Danh sách công việc được giao, quét QR',
      'Ghi Sự kiện kèm hình ảnh minh chứng & GPS',
      'Luồng quản lý: trợ lý, bản đồ hành trình',
      'Thông báo đẩy nhắc việc',
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
        <SectionHeading
          className="mb-12"
          eyebrow="05 · WEB + DI ĐỘNG"
          title={
            <>
              Quản trị trên web,
              <br className="hidden lg:block" /> thực địa trên điện thoại.
            </>
          }
          desc="Hỗ trợ thực địa nơi mạng yếu: nhà máy, vùng trồng, kho."
        />
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
              <div className="overflow-hidden rounded-[20px] border border-black/5 bg-[#f7f7f9]">
                <Image
                  src={panel.image}
                  alt={panel.alt}
                  width={800}
                  height={600}
                  className="h-auto w-full"
                />
              </div>
              <div>
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
