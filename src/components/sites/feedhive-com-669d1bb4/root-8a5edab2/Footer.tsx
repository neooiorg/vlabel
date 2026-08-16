import Image from 'next/image'

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
      <Image
        src="/images/vlabel-logo.png"
        alt="Vlabel"
        width={34}
        height={38}
        sizes="40px"
        className="h-8 w-auto"
      />
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
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-[auto_1fr_1fr_1.4fr]">
            {/* Brand column */}
            <div className="col-span-2 lg:col-span-1">
              <Logo />
              <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#4457ff]">
                Minh bạch từ QR đến nguồn gốc
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
        <div className="mt-10 flex flex-col gap-4 border-t border-black/5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-[#9fa3af]">
            © 2026 Vlabel · Nền tảng Nhãn điện tử &amp; Truy xuất nguồn gốc
          </p>
          <div className="flex items-center gap-2">
            {[
              {
                href: 'https://facebook.com/vlabel.vn',
                label: 'Facebook',
                path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
              },
              {
                href: 'https://linkedin.com/company/vlabel',
                label: 'LinkedIn',
                path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z',
              },
              {
                href: 'https://youtube.com/@vlabel',
                label: 'YouTube',
                path: 'M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z',
              },
            ].map(({ href, label, path }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e4e4ea] text-[#9fa3af] transition-colors hover:border-[#4457ff] hover:text-[#4457ff]"
              >
                <svg className="h-[15px] w-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
