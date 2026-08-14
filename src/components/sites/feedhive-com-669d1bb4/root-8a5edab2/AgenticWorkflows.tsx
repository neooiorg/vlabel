import Image from 'next/image'
import { SectionHeading } from './SectionHeading'

const IMG = '/sites/feedhive-com-669d1bb4/root-8a5edab2/images'

interface Module {
  number: string
  eyebrow: string
  title: string
  desc: string
  tags: string[]
  image: string
  alt: string
}

const modules: Module[] = [
  {
    number: '01',
    eyebrow: 'Truy xuất',
    title: 'Truy xuất nguồn gốc',
    desc: 'Thiết kế Luồng gồm nhiều Sự kiện theo 5 yếu tố GS1 EPCIS: Ai · Ở đâu · Khi nào · Thông tin · Hình ảnh.',
    tags: ['GS1 EPCIS', 'Trường tự cấu hình'],
    image: `${IMG}/feature-image-4.webp`,
    alt: 'Thiết kế luồng truy xuất',
  },
  {
    number: '02',
    eyebrow: 'Nhãn điện tử',
    title: 'Nhãn điện tử',
    desc: 'Soạn nhãn theo NĐ 37/2026; chọn nhóm hàng hoá để bung đúng trường bắt buộc. Quản lý lô, nháp → phát hành → thu hồi.',
    tags: ['NĐ 37/2026', 'Quản lý lô'],
    image: `${IMG}/feature-image-5.webp`,
    alt: 'Soạn nhãn điện tử',
  },
  {
    number: '03',
    eyebrow: 'QR công khai',
    title: 'QR công khai xác thực',
    desc: 'Một QR cho mỗi sản phẩm/lô → trang cho người tiêu dùng, có dấu xác thực, đồng bộ hệ thống quốc gia. Không đăng nhập.',
    tags: ['Song ngữ', 'Sinh QR hàng loạt'],
    image: `${IMG}/showcase-image-1.webp`,
    alt: 'Trang QR công khai',
  },
  {
    number: '04',
    eyebrow: 'Hành trình',
    title: 'Bản đồ hành trình',
    desc: 'Ba chế độ: bản đồ thực (OpenStreetMap), sơ đồ doanh nghiệp và dòng thời gian, có playback chạy tuần tự các điểm.',
    tags: ['GPS', 'Playback'],
    image: `${IMG}/showcase-image-2.webp`,
    alt: 'Bản đồ hành trình',
  },
  {
    number: '05',
    eyebrow: 'Đa khách hàng',
    title: 'Đa khách hàng & cây đơn vị',
    desc: 'Mỗi tỉnh/doanh nghiệp một không gian riêng. Cây: Tập đoàn → Công ty → Nhà máy → Phòng ban → Vùng trồng.',
    tags: ['Multi-tenant', 'Phân quyền'],
    image: `${IMG}/claude-code-terminal.webp`,
    alt: 'Cây đơn vị đa tầng',
  },
  {
    number: '06',
    eyebrow: 'Trợ lý',
    title: 'Trợ lý dẫn từng bước',
    desc: 'Wizard thiết lập truy xuất và soạn nhãn từng bước, dành cho người không rành kỹ thuật. Tự lưu nháp.',
    tags: ['Trợ lý', 'Tự lưu nháp'],
    image: `${IMG}/feedhive-api-cli-terminal.webp`,
    alt: 'Trợ lý dẫn từng bước',
  },
]

export function AgenticWorkflows() {
  return (
    <section className="bg-white px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-[92px]">
      <div className="mx-auto max-w-[1188px]">
        <SectionHeading
          className="mb-10 lg:mb-14"
          eyebrow="02 · SÁU PHÂN HỆ · MỘT QR"
          title={
            <>
              Trọn vẹn dưới
              <br className="hidden lg:block" /> một lớp nhãn.
            </>
          }
          desc="Truy xuất, nhãn điện tử, QR công khai xác thực, bản đồ hành trình, đa khách hàng và trợ lý dẫn từng bước. Một sản phẩm, không phải tự lắp ghép."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <div
              key={m.number}
              className="flex flex-col overflow-hidden rounded-[20px] border border-black/5 bg-[#f7f7f9]"
            >
              <div className="flex-1 px-6 pb-4 pt-6">
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-flex h-[22px] items-center rounded-full bg-[#eef0ff] px-2 text-[11px] font-bold text-[#4457ff]">
                    {m.number}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#767b84]">
                    {m.eyebrow}
                  </span>
                </div>
                <h3
                  className="text-[18px] font-bold text-[#20232b]"
                  style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
                >
                  {m.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.55] text-[#4f5562]">{m.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {m.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-black/[0.08] bg-white px-2.5 py-1 text-[11px] font-medium text-[#4f5562]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <Image
                src={m.image}
                alt={m.alt}
                width={800}
                height={500}
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
