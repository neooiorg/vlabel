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
      <div className="mx-auto max-w-[860px] text-center">
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.1em] text-[#4457ff]">
          GIẢI PHÁP &amp; SẢN PHẨM
        </p>
        <h1
          className="text-[44px] font-medium uppercase leading-[1.06] tracking-[-0.035em] text-[#23252b] lg:text-[55px]"
          style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
        >
          Bốn gói,
          <br />
          <span className="text-[#4457ff]">một nền tảng.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-[640px] text-[16px] leading-[1.6] text-[#4f5562]">
          Mọi gói đều có nhãn điện tử đúng luật và đồng bộ cổng quốc gia. Khác nhau ở mức tùy biến và
          trải nghiệm thương hiệu. Chọn theo quy mô của bạn.
        </p>
      </div>

      {/* Pill sub-nav */}
      <div className="mx-auto mt-9 flex max-w-[720px] flex-wrap items-center justify-center gap-2">
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
    </section>
  )
}
