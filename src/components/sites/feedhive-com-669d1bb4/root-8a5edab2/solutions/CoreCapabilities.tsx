import Image from 'next/image'

const IMG = '/sites/feedhive-com-669d1bb4/root-8a5edab2/images'

interface Panel {
  label: string
  title: string
  desc: string
  bullets: string[]
  image: string
  alt: string
  imageLeft: boolean
}

const panels: Panel[] = [
  {
    label: 'NHÃN ĐIỆN TỬ',
    title: 'Một mã, dữ liệu sống.',
    desc: 'Nội dung nhãn sống trên mã QR, cập nhật bất cứ lúc nào mà không in lại bao bì.',
    bullets: [
      'Cập nhật tức thì, lưu vết phiên bản',
      'Đa ngôn ngữ cho hàng xuất khẩu',
      'Giảm chữ phải in trên bao bì',
    ],
    image: `${IMG}/showcase-image-2.webp`,
    alt: 'Soạn và cập nhật nhãn điện tử',
    imageLeft: true,
  },
  {
    label: 'TRUY XUẤT NGUỒN GỐC',
    title: 'Cả hành trình sau một lần quét.',
    desc: 'Ghi lại lý lịch sản phẩm qua từng công đoạn. Sẵn sàng cho hậu kiểm và xuất khẩu.',
    bullets: [
      'Một bước trước, một bước sau theo TCVN 12850',
      'Đồng bộ dữ liệu lên cổng quốc gia',
      'Hồ sơ sẵn cho Lệnh 248/249 và EU',
    ],
    image: `${IMG}/showcase-image-1.webp`,
    alt: 'Bản đồ hành trình truy xuất',
    imageLeft: false,
  },
]

export function CoreCapabilities() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1188px] pt-10 lg:pt-16">
        <div className="mb-4 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#4457ff]">
            01 · HAI NĂNG LỰC CỐT LÕI
          </p>
        </div>
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
                <p className="mt-3 text-[15px] leading-[1.6] text-[#4f5562]">{panel.desc}</p>
                <ul className="mt-5 space-y-2.5">
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
