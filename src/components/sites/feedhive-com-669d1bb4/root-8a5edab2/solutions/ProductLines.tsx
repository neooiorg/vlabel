import { cn } from '@/lib/utils'
import { SectionHeading } from '../SectionHeading'

interface Product {
  badge?: string
  name: string
  audience: string
  desc: string
  cost: string
  costLabel: string
  features: string[]
  featured?: boolean
}

const products: Product[] = [
  {
    badge: 'PHỔ BIẾN',
    name: 'VLabel Standard',
    audience: 'SME · HTX · OCOP',
    desc: 'Nền tảng dùng chung, cấp account lên dùng ngay. Đúng luật từ ngày đầu, không cần đụng tới IT.',
    cost: '$',
    costLabel: 'Chi phí thấp',
    features: ['Nền tảng dùng chung', 'Đồng bộ cổng quốc gia', 'Triển khai nhanh'],
    featured: true,
  },
  {
    name: 'VLabel Brand',
    audience: 'Thương hiệu · đặc sản · mỹ phẩm',
    desc: 'Trang quét theo thương hiệu, vẫn đồng bộ quốc gia. Không cần chọn giữa đẹp và đúng luật.',
    cost: '$$',
    costLabel: 'Chi phí trung bình',
    features: ['Landing page theo thương hiệu', 'Nút mua hàng, Zalo, hotline', 'Thống kê lượt quét theo lô'],
  },
  {
    name: 'VLabel Enterprise',
    audience: 'Doanh nghiệp lớn · xuất khẩu',
    desc: 'Hệ thống riêng trên tên miền của bạn, tùy biến sâu theo quy trình sản xuất thực tế.',
    cost: '$$$$',
    costLabel: 'Theo dự án',
    features: ['Tùy biến quy trình theo công đoạn', 'Tích hợp ERP, MES, phần mềm kho', 'Phân quyền nhiều cấp'],
  },
  {
    name: 'VLabel SubLabel',
    audience: 'Nhà nhập khẩu · phân phối',
    desc: 'Nhãn phụ hàng nhập khẩu làm sẵn theo mẫu. Sai một chữ là giữ cả lô — mẫu sẵn tránh được chuyện đó.',
    cost: '$',
    costLabel: 'Chi phí thấp',
    features: ['Đủ nội dung bắt buộc theo quy định', 'Mẫu sẵn, nhập là ra nhãn', 'Kèm QR dẫn về thông tin đầy đủ'],
  },
]

const columns = ['Standard', 'Brand', 'Enterprise', 'SubLabel']
const rows: { label: string; values: (string | boolean)[] }[] = [
  { label: 'Bản chất', values: ['Nền tảng dùng chung', 'Dùng chung và trang đẹp', 'Hệ thống riêng', 'Nhánh nhãn phụ'] },
  { label: 'Đồng bộ cổng quốc gia', values: [true, true, true, true] },
  { label: 'Landing page tùy biến', values: ['Cơ bản', 'Đẹp theo thương hiệu', 'Toàn quyền', 'Theo mẫu'] },
  { label: 'Tùy biến quy trình', values: ['Thấp', 'Thấp đến trung bình', 'Rất cao', 'Thấp, dùng mẫu sẵn'] },
  { label: 'Tốc độ triển khai', values: ['Nhanh', 'Nhanh', 'Theo dự án', 'Nhanh'] },
  { label: 'Chi phí tương đối', values: ['$', '$$', '$$$$', '$'] },
  { label: 'Khách mục tiêu', values: ['SME, HTX, OCOP', 'Thương hiệu, đặc sản', 'Doanh nghiệp lớn, xuất khẩu', 'Nhà nhập khẩu'] },
]

function TableCheck() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#eaf7f1]">
      <svg className="h-3 w-3 text-[#22a06b]" viewBox="0 0 24 24" fill="none">
        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export function ProductLines() {
  return (
    <section id="san-pham" className="scroll-mt-24 bg-[#f7f8fb] px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-[92px] lg:pt-[92px]">
      <div className="mx-auto max-w-[1188px]">
        <SectionHeading
          className="mb-10 lg:mb-14"
          eyebrow="GIẢI PHÁP & SẢN PHẨM"
          title="Bốn gói trong một nền tảng."
          desc="Mỗi gói đều hỗ trợ nhãn điện tử theo quy định và đồng bộ với hệ thống quốc gia. Khác biệt ở mức độ tùy chỉnh, tính năng và trải nghiệm thương hiệu, phù hợp với từng quy mô triển khai."
        />

        {/* Product cards — FeedHive pricing grammar */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div
              key={p.name}
              className={cn(
                'relative flex h-full flex-col overflow-hidden rounded-[16px] border px-5 pb-6 pt-5',
                p.featured
                  ? 'border-[#4457ff] bg-[#4457ff] text-white'
                  : 'border-[#e8e4dd] bg-white text-[#20232b]'
              )}
            >
              {/* Top: name + desc + cost + CTA */}
              <div className={cn('border-b pb-6', p.featured ? 'border-white/10' : 'border-[#ece8e1]')}>
                <div className="flex items-center justify-between gap-3">
                  <h3
                    className={cn('text-[24px] font-semibold leading-none tracking-[-0.04em]', p.featured ? 'text-white' : 'text-[#23252b]')}
                    style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
                  >
                    {p.name}
                  </h3>
                  {p.badge && (
                    <span
                      className={cn(
                        'shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase leading-none tracking-[0.08em]',
                        p.featured ? 'border-white/20 bg-white text-[#4457ff]' : 'border-[#4457ff]/20 bg-[#eef0ff] text-[#4457ff]'
                      )}
                    >
                      {p.badge}
                    </span>
                  )}
                </div>
                <p className={cn('mt-1.5 text-[11px] font-semibold uppercase tracking-[0.05em]', p.featured ? 'text-white/55' : 'text-[#9fa3af]')}>
                  {p.audience}
                </p>
                <p className={cn('mt-3 text-[14px] leading-[1.55] tracking-[-0.02em]', p.featured ? 'text-white/78' : 'text-[#6b727d]')}>
                  {p.desc}
                </p>
                <div className="mt-5">
                  <div className="flex items-end gap-2">
                    <span
                      className={cn('text-[26px] font-semibold leading-none tracking-[-0.04em]', p.featured ? 'text-white' : 'text-[#20232b]')}
                      style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
                    >
                      {p.cost}
                    </span>
                    <span className={cn('pb-0.5 text-[13px] tracking-[-0.02em]', p.featured ? 'text-white/55' : 'text-[#808692]')}>
                      {p.costLabel}
                    </span>
                  </div>
                </div>
                <div className="mt-5">
                  <a
                    href="/#tu-van"
                    className={cn(
                      'inline-flex h-[46px] w-full items-center justify-center rounded-[13px] text-[14px] font-semibold tracking-[-0.02em] transition',
                      p.featured ? 'bg-white text-[#4457ff] hover:bg-white/90' : 'bg-[#4457ff] text-white hover:bg-[#3a4ce0]'
                    )}
                  >
                    Nhận báo giá
                  </a>
                </div>
              </div>

              {/* Bottom: features */}
              <div className="pt-5">
                <p className={cn('text-[10px] font-bold uppercase tracking-[0.16em]', p.featured ? 'text-white/45' : 'text-[#7a808c]')}>
                  Tính năng chính
                </p>
                <ul className="mt-4 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className={cn('flex items-start gap-3 text-[13.5px] leading-[1.4] tracking-[-0.02em]', p.featured ? 'text-white/88' : 'text-[#515864]')}>
                      <span
                        className={cn(
                          'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border',
                          p.featured ? 'border-white/20 bg-white/10 text-white' : 'border-[#ddd9d2] bg-[#f8f7f4] text-[#2c3138]'
                        )}
                      >
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Training callout */}
        <div className="mt-6 flex flex-col items-start gap-4 rounded-[20px] border border-black/5 bg-white p-6 sm:flex-row sm:items-center sm:justify-between lg:p-8">
          <div className="max-w-[720px]">
            <h3 className="text-[18px] font-medium text-[#20232b]" style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}>
              Gói đào tạo và chuyển giao
            </h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-[#4f5562]">
              Bán kèm bất kỳ gói nào: hiểu quy định ghi nhãn, khai báo dữ liệu đúng chuẩn, đọc số liệu
              lượt quét. Đội ngũ của bạn tự vận hành, không phụ thuộc.
            </p>
          </div>
          <a
            href="/#tu-van"
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-[12px] border border-[#dfdfe4] px-6 text-[14px] font-semibold text-[#20232b] transition-colors hover:border-[#20232b]"
          >
            Tìm hiểu thêm
          </a>
        </div>

        {/* Comparison table */}
        <div className="mt-12">
          <h3 className="mb-5 text-center text-[20px] font-medium text-[#20232b]" style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}>
            So sánh nhanh
          </h3>
          <div className="overflow-x-auto rounded-[18px] border border-black/5 bg-white">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-black/5 bg-[#f7f8fb]">
                  <th className="px-5 py-4 text-[11px] font-bold uppercase tracking-[0.06em] text-[#767b84]">
                    Tiêu chí
                  </th>
                  {columns.map((c, i) => (
                    <th
                      key={c}
                      className={`px-5 py-4 text-[14px] font-medium text-[#20232b] ${i === 0 ? 'text-[#4457ff]' : ''}`}
                      style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {rows.map((row) => (
                  <tr key={row.label}>
                    <td className="px-5 py-4 text-[13px] font-semibold text-[#20232b]">{row.label}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className="px-5 py-4 text-[13.5px] text-[#4f5562]">
                        {v === true ? <TableCheck /> : v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[12px] leading-[1.6] text-[#9fa3af]">
            Ký hiệu chi phí là mức tương đối để định hướng. Giá cụ thể theo nhu cầu và số lượng SKU,
            Vlabel báo giá sau khảo sát.
          </p>
        </div>
      </div>
    </section>
  )
}
