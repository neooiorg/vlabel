const platformLinks = [
  { label: 'Giải pháp', href: '/giai-phap' },
  { label: 'Cách hoạt động', href: '/cach-hoat-dong' },
  { label: 'Tuân thủ', href: '/tuan-thu' },
  { label: 'FAQ', href: '/faq' },
]
const companyLinks = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Trải nghiệm', href: '/#trai-nghiem' },
  { label: 'Liên hệ', href: '/#tu-van' },
]
const featureTags = [
  'GS1 EPCIS',
  'Nhãn điện tử NĐ 37/2026',
  'Đa khách hàng',
  'Kê khai offline',
]
const bottomPills = ['GS1 EPCIS', 'NĐ 37/2026', 'TRUYXUATNGUONGOC.GOV.VN']

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#4457ff] text-white">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
          <rect x="15.5" y="15.5" width="4" height="4" rx="0.5" fill="currentColor" />
        </svg>
      </span>
      <span
        className="text-[18px] font-bold text-[#20232b]"
        style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
      >
        Vlabel
      </span>
    </a>
  )
}

function NavCol({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <h4 className="mb-4 text-[14px] font-semibold text-[#20232b]">{title}</h4>
      <ul className="space-y-1">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-[14px] text-[#4f5562] transition-colors hover:text-[#20232b]"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1188px]">
        <div className="border-t border-black/5 pt-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-[280px_1fr_1fr_1.4fr]">
            {/* Brand column */}
            <div className="col-span-2 lg:col-span-1">
              <Logo />
              <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#4457ff]">
                Số hóa niềm tin
              </p>
              <p className="mt-2 max-w-[280px] text-[14px] leading-[1.6] text-[#4f5562]">
                Nền tảng Nhãn điện tử &amp; Truy xuất nguồn gốc đa khách hàng cho doanh nghiệp và địa
                phương.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {featureTags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#dfdfe4] px-3 py-1 text-[12px] font-medium text-[#4f5562]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <NavCol title="Nền tảng" links={platformLinks} />
            <NavCol title="Công ty" links={companyLinks} />
            {/* Contact column */}
            <div>
              <h4 className="mb-4 text-[14px] font-semibold text-[#20232b]">Liên hệ</h4>
              <ul className="space-y-2 text-[14px] text-[#4f5562]">
                <li>
                  <a href="tel:0369777713" className="font-semibold text-[#20232b] hover:text-[#4457ff]">
                    0369 777 713
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@vlabel.vn" className="hover:text-[#20232b]">
                    contact@vlabel.vn
                  </a>
                </li>
                <li className="leading-[1.6]">
                  Số 15 ngách 20 ngõ 634 Kim Giang, Thanh Liệt, Hà Nội
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 flex flex-col gap-3 border-t border-black/5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-[#9fa3af]">
            © 2026 VLABEL · NỀN TẢNG NHÃN ĐIỆN TỬ &amp; TRUY XUẤT
          </p>
          <div className="flex flex-wrap gap-2">
            {bottomPills.map((p) => (
              <span
                key={p}
                className="rounded-full border border-[#dfdfe4] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.05em] text-[#4f5562]"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
