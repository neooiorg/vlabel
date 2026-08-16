import Image from 'next/image'
import { Network, Wand2, WifiOff, ShieldCheck, Globe, ScrollText, type LucideIcon } from 'lucide-react'

const IMG = '/sites/feedhive-com-669d1bb4/root-8a5edab2/images'

interface BigCard {
  eyebrow: string
  title: string
  desc: string
  image: string
  alt: string
}

interface MiniItem {
  icon: LucideIcon
  title: string
  desc: string
}

const bigCards: BigCard[] = [
  {
    eyebrow: 'TRUY XUẤT',
    title: 'Truy xuất nguồn gốc',
    desc: 'Thiết kế Luồng gồm nhiều Sự kiện theo 5 yếu tố GS1 EPCIS: Ai · Ở đâu · Khi nào · Thông tin · Hình ảnh.',
    image: `${IMG}/feature-traceability-v3.png`,
    alt: 'Luồng sự kiện truy xuất nguồn gốc theo 5 yếu tố GS1 EPCIS',
  },
  {
    eyebrow: 'NHÃN ĐIỆN TỬ',
    title: 'Quản lý nhãn điện tử',
    desc: 'Tạo nhãn theo NĐ 37/2026, tự động hiển thị trường bắt buộc theo nhóm hàng hóa. Quản lý theo lô từ nháp → phát hành → thu hồi.',
    image: `${IMG}/feature-elabel-v2.png`,
    alt: 'Soạn nhãn điện tử theo NĐ 37/2026, quản lý lô nháp phát hành thu hồi',
  },
  {
    eyebrow: 'QR CÔNG KHAI',
    title: 'QR công khai xác thực',
    desc: 'Một QR cho mỗi sản phẩm/lô → trang cho người tiêu dùng, có dấu xác thực, đồng bộ hệ thống quốc gia. Không đăng nhập.',
    image: `${IMG}/feature-qr-public-v2.png`,
    alt: 'QR công khai xác thực — trang người tiêu dùng đồng bộ cổng quốc gia',
  },
  {
    eyebrow: 'HÀNH TRÌNH',
    title: 'Theo dõi hành trình sản phẩm',
    desc: 'Xem hành trình theo bản đồ thực, sơ đồ quy trình hoặc dòng thời gian. Phát lại từng chặng để kiểm tra và trình bày dễ dàng.',
    image: `${IMG}/feature-journey-v2.png`,
    alt: 'Bản đồ hành trình ba chế độ: bản đồ thực, sơ đồ doanh nghiệp, dòng thời gian',
  },
]

const miniRow1: MiniItem[] = [
  { icon: Network, title: 'Đa khách hàng & phân cấp đơn vị', desc: 'Một nền tảng, nhiều doanh nghiệp — phân cấp đa tầng cho cả doanh nghiệp lẫn địa phương.' },
  { icon: Wand2, title: 'Hướng dẫn từng bước', desc: 'Thiết lập truy xuất, tạo nhãn điện tử và tự động lưu nháp.' },
  { icon: WifiOff, title: 'Kê khai offline', desc: 'Ghi dữ liệu không cần mạng, tự đồng bộ khi có kết nối trở lại.' },
]

const miniRow2: MiniItem[] = [
  { icon: ShieldCheck, title: 'Đúng người, đúng quyền.', desc: 'Mỗi vai trò chỉ được truy cập và thao tác trong phạm vi được phân quyền.' },
  { icon: Globe, title: 'Đồng bộ cổng quốc gia', desc: 'Tự đẩy lên truyxuatnguongoc.gov.vn và elabel.gov.vn.' },
  { icon: ScrollText, title: 'Nhật ký kiểm toán', desc: 'Lịch sử đầy đủ: ai thay đổi gì, lúc nào — không thể xoá lén.' },
]

function MiniCard({ item, roundClass }: { item: MiniItem; roundClass: string }) {
  const Icon = item.icon
  return (
    <article className={`relative min-h-[92px] overflow-hidden sm:min-h-[98px] ${roundClass}`}>
      <div className="absolute inset-0 bg-white" />
      <div className="relative z-20 px-[24px] py-[17px] sm:px-[26px]">
        <div className="mb-[8px] flex items-center gap-[9px]">
          <span className="flex h-[18px] w-[18px] items-center justify-center text-[#4457ff]">
            <Icon size={16} strokeWidth={1.85} />
          </span>
          <h3
            className="text-[15px] font-semibold leading-none tracking-[-0.026em] text-[#3c3f49]"
            style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
          >
            {item.title}
          </h3>
        </div>
        <p className="max-w-[240px] text-[13px] leading-[1.45] tracking-[-0.015em] text-[#737785]">
          {item.desc}
        </p>
      </div>
    </article>
  )
}

export function AgenticWorkflows() {
  return (
    <section className="bg-white px-4 pb-16 pt-[36px] sm:px-6 sm:pb-24 sm:pt-[42px] lg:px-8 lg:pb-[108px] lg:pt-[54px]">
      <div className="mx-auto max-w-[1188px]">
        {/* Heading */}
        <div className="mx-auto mb-[34px] text-center sm:mb-[42px] lg:mb-[40px]">
          <p className="mb-[10px] text-[14px] font-bold uppercase tracking-[0.14em] text-[#4457ff]">
            02 · Sáu phân hệ · Một QR
          </p>
          <h2
            className="mx-auto max-w-[860px] text-[34px] font-medium leading-[1.12] tracking-[-0.03em] text-[#20232b] lg:text-[46px]"
            style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
          >
            Sáu phân hệ<br className="hidden lg:block" /> trong một mã QR.
          </h2>
        </div>

        {/* 4 big feature cards */}
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:gap-[18px]">
          {bigCards.map((card) => (
            <article
              key={card.title}
              className="relative flex min-h-[282px] flex-col overflow-hidden rounded-[15px] bg-[#f6f6f8] px-[34px] pb-0 pt-[28px] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:min-h-[316px] lg:min-h-[332px]"
            >
              <div>
                <p className="mb-[6px] text-[11px] font-bold uppercase tracking-[0.1em] text-[#4457ff]">
                  {card.eyebrow}
                </p>
                <h3
                  className="mb-[8px] text-[19px] font-medium tracking-[-0.032em] text-[#20232b]"
                  style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
                >
                  {card.title}
                </h3>
                <p className="max-w-[360px] text-[14px] leading-[1.5] tracking-[-0.015em] text-[#4f5562] sm:text-[15px]">
                  {card.desc}
                </p>
              </div>
              <div className="mt-auto pt-[24px]">
                <div className="relative h-[220px] w-full overflow-hidden rounded-t-[8px] sm:h-[240px]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mini card strip */}
        <div className="relative mt-[26px] w-full overflow-hidden rounded-[15px] bg-[#ebebef] lg:mt-[32px]">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white/50 to-transparent sm:w-14" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white/50 to-transparent sm:w-14" />

          <div className="relative z-20 grid gap-px">
            <div className="grid grid-cols-1 gap-px md:grid-cols-3">
              <MiniCard item={miniRow1[0]} roundClass="md:rounded-br-[5px]" />
              <MiniCard item={miniRow1[1]} roundClass="md:rounded-bl-[5px] md:rounded-br-[5px]" />
              <MiniCard item={miniRow1[2]} roundClass="md:rounded-bl-[5px]" />
            </div>
            <div className="grid grid-cols-1 gap-px md:grid-cols-3">
              <MiniCard item={miniRow2[0]} roundClass="md:rounded-tr-[5px]" />
              <MiniCard item={miniRow2[1]} roundClass="md:rounded-tl-[5px] md:rounded-tr-[5px]" />
              <MiniCard item={miniRow2[2]} roundClass="md:rounded-tl-[5px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
