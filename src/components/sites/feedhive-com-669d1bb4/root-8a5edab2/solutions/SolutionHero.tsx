import Image from 'next/image'

const IMG = '/sites/feedhive-com-669d1bb4/root-8a5edab2/images'

const pills = [
  { label: 'Sản phẩm', href: '#san-pham' },
  { label: 'Chọn gói', href: '#chon-goi' },
  { label: 'Quy trình', href: '#quy-trinh' },
  { label: 'Pháp lý', href: '#phap-ly' },
  { label: 'Lĩnh vực', href: '#linh-vuc' },
]

export function SolutionHero() {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-6 pt-14 sm:px-6 lg:px-8 lg:pb-10 lg:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(60% 45% at 50% 0%, rgba(68,87,255,0.10), transparent 60%)',
        }}
      />

      <div className="mx-auto grid max-w-[1188px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:gap-14">
        {/* Left — text */}
        <div>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.1em] text-[#4457ff]">
            GIẢI PHÁP &amp; SẢN PHẨM
          </p>
          <h1
            className="text-[38px] font-medium leading-[1.06] tracking-[-0.035em] text-[#23252b] lg:text-[50px]"
            style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
          >
            Bốn gói,
            <br />
            <span className="text-[#4457ff]">một nền tảng.</span>
          </h1>
          <p className="mt-5 max-w-[520px] text-[16px] leading-[1.6] text-[#4f5562]">
            Mọi gói đều có nhãn điện tử đúng luật và đồng bộ cổng quốc gia. Khác nhau ở mức tùy biến và
            trải nghiệm thương hiệu. Chọn theo quy mô của bạn.
          </p>

          {/* Pill sub-nav */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {pills.map((p) => (
              <a
                key={p.label}
                href={p.href}
                className="rounded-full border border-[#e4e4ea] bg-white px-4 py-2 text-[13px] font-medium text-[#4f5562] transition-colors hover:border-[#4457ff] hover:text-[#4457ff]"
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div className="overflow-hidden rounded-[14px] border border-white/70 shadow-[0_0_0_1px_rgba(0,0,0,0.07),inset_0_1px_0_rgba(255,255,255,0.95)]">
          <Image
            src={`${IMG}/feature-image-4-v2.png`}
            alt="Thiết kế luồng truy xuất nguồn gốc"
            width={1200}
            height={800}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </section>
  )
}
