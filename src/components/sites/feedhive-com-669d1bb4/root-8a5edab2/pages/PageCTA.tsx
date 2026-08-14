import { SectionHeading } from '../SectionHeading'

interface PageCTAProps {
  eyebrow: string
  title: string
  desc: string
  buttonLabel: string
  buttonHref?: string
}

export function PageCTA({ eyebrow, title, desc, buttonLabel, buttonHref = '/#tu-van' }: PageCTAProps) {
  return (
    <section className="bg-white px-4 pb-10 pt-7 sm:px-6 sm:pb-14 lg:px-8 lg:pb-[84px] lg:pt-10">
      <div className="mx-auto max-w-[1248px]">
        <div className="relative overflow-hidden rounded-[34px] bg-[#4457ff] px-6 py-14 text-center sm:px-10 lg:px-14 lg:py-[72px]">
          {/* Dot grid pattern */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(ellipse at 0% 50%, rgba(255,255,255,0.06), transparent 50%), radial-gradient(ellipse at 100% 50%, rgba(30,20,100,0.3), transparent 50%)',
            }}
          />
          <div className="relative z-10 mx-auto max-w-[680px]">
            <SectionHeading tone="light" eyebrow={eyebrow} title={title} desc={desc} />
            <a
              href={buttonHref}
              className="mt-8 inline-flex h-[52px] items-center justify-center rounded-[15px] bg-[#20232b] px-8 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              {buttonLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
