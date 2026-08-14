interface PageHeroProps {
  eyebrow: string
  title: React.ReactNode
  desc: string
}

export function PageHero({ eyebrow, title, desc }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-8 pt-14 sm:px-6 lg:px-8 lg:pb-12 lg:pt-20">
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
          {eyebrow}
        </p>
        <h1
          className="text-[44px] font-medium uppercase leading-[1.06] tracking-[-0.035em] text-[#23252b] lg:text-[55px]"
          style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
        >
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-[640px] text-[16px] leading-[1.6] text-[#4f5562]">
          {desc}
        </p>
      </div>
    </section>
  )
}
