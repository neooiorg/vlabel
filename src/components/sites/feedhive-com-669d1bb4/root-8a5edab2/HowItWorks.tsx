import Image from 'next/image'

interface Step {
  number: string
  title: string
  desc: string
  image: string
  alt: string
}

const steps: Step[] = [
  {
    number: '01.',
    title: 'Learn your brand',
    desc: 'FeedHive learns your voice, audience, and goals to generate your content.',
    image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/cycle-image-1.webp',
    alt: 'Learn your brand',
  },
  {
    number: '02.',
    title: 'One-click content',
    desc: 'Generate on-brand posts, ideas, and variations in just a few clicks.',
    image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/cycle-image-2.webp',
    alt: 'One-click content',
  },
  {
    number: '03.',
    title: 'Stay active',
    desc: 'Schedule and automate your content across every channel and platform.',
    image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/cycle-image-3.webp',
    alt: 'Stay active',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-white px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-[92px]">
      <div className="mx-auto max-w-[1188px]">
        <div className="mb-10 text-center lg:mb-14">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#4457ff]">
            HOW IT WORKS
          </p>
          <h2
            className="text-[40px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#20232b] lg:text-[52px]"
            style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
          >
            How FeedHive turns your
            <br className="hidden lg:block" /> business into content.
          </h2>
        </div>
        <div className="grid grid-cols-1 divide-y divide-black/5 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`flex flex-col items-center gap-6 py-10 lg:py-0 ${i > 0 ? 'lg:pl-10' : ''} ${i < 2 ? 'lg:pr-10' : ''}`}
            >
              <div className="w-full overflow-hidden rounded-[16px] border border-black/5 bg-white shadow-sm">
                <Image
                  src={step.image}
                  alt={step.alt}
                  width={1273}
                  height={1101}
                  className="h-auto w-full"
                />
              </div>
              <div className="text-center">
                <p className="text-[13px] font-semibold text-[#9fa3af]">{step.number}</p>
                <h3
                  className="mt-1 text-[20px] font-bold text-[#20232b]"
                  style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
                >
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.5] text-[#4f5562]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
