import Image from 'next/image'

export function GradientCTA() {
  const brands = ['beehiiv', 'fauna', 'prismic', 'Senja', 'Riverside', 'thirdweb']

  return (
    <section className="bg-white px-4 pb-10 pt-7 sm:px-6 sm:pb-14 lg:px-8 lg:pb-[84px] lg:pt-10">
      <div className="mx-auto max-w-[1248px]">
        <div
          className="relative overflow-hidden rounded-[34px] px-6 pt-10 sm:px-10 sm:pt-12 lg:px-[56px] lg:pt-[46px]"
          style={{
            backgroundImage:
              'linear-gradient(135deg, #4e7cff 0%, #9f4bff 24%, #d54a96 58%, #ed7d3f 100%)',
          }}
        >
          {/* Radial light overlays */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 12% 22%, rgba(255,255,255,0.55), transparent 17%), radial-gradient(circle at 82% 20%, rgba(255,255,255,0.14), transparent 22%), radial-gradient(circle at 78% 100%, rgba(86,74,255,0.5), transparent 24%), linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0))',
            }}
          />
          <div className="relative z-10 flex flex-col items-start gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-[540px]">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.1em] text-white/70">
                GET STARTED.
              </p>
              <h2
                className="text-[36px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white lg:text-[44px]"
                style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
              >
                Try FeedHive for free and watch it transform your social media presence.
              </h2>
              <div className="mt-8 flex items-center gap-4">
                <a
                  href="https://app.feedhive.com/signup"
                  className="inline-flex h-[52px] items-center justify-center rounded-[16px] bg-white px-7 text-[16px] font-semibold text-[#24262d] transition-opacity hover:opacity-90"
                >
                  Get started. It&apos;s FREE
                </a>
                <div className="text-[13px] leading-[1.5] text-white/70">
                  <p>Try for free.</p>
                  <p>Cancel anytime.</p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                {brands.map((b) => (
                  <span key={b} className="text-[13px] font-medium text-white/80">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Bottom product screenshot */}
          <div className="relative z-10 mt-10 overflow-hidden rounded-t-[16px]">
            <Image
              src="/sites/feedhive-com-669d1bb4/root-8a5edab2/images/hero-ai-assistant.webp"
              alt="FeedHive AI Assistant"
              width={1200}
              height={700}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
