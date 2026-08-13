import Image from 'next/image'

const panels = [
  {
    label: 'CROSS-POSTING',
    title: 'Publish everywhere from one place.',
    desc: 'Turn one post into channel-ready versions for Instagram, LinkedIn, X, YouTube, and more - without rebuilding it for every platform.',
    image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/showcase-image-1.webp',
    alt: 'Cross-posting UI mockup',
    imageLeft: true,
  },
  {
    label: 'COLLABORATION',
    title: 'Keep your team and content aligned.',
    desc: 'Plan posts, review drafts, leave feedback, and approve content before it goes live.',
    image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/showcase-image-2.webp',
    alt: 'Team collaboration approval UI',
    imageLeft: false,
  },
  {
    label: 'AUTOMATION',
    title: 'Automate the schedule behind the scenes.',
    desc: 'Use posting plans, post conditions, and recycled content to keep your channels active without starting from scratch every day.',
    image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/feature-image-4.webp',
    alt: 'Automation rules and content queue',
    imageLeft: true,
  },
]

export function FeatureShowcase() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1188px]">
        <div className="mb-12 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#4457ff]">
            AI-POWERED SOCIAL MEDIA WORKFLOW
          </p>
          <h2
            className="text-[40px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#20232b] lg:text-[52px]"
            style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
          >
            Everything your social media
            <br className="hidden lg:block" /> needs to keep moving.
          </h2>
        </div>
        <div className="divide-y divide-black/5">
          {panels.map((panel) => (
            <div
              key={panel.title}
              className={`grid grid-cols-1 items-center gap-8 py-12 lg:grid-cols-2 lg:gap-16 ${
                !panel.imageLeft
                  ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'
                  : ''
              }`}
            >
              <div className="overflow-hidden rounded-[20px] border border-black/5 bg-[#f7f7f9]">
                <Image
                  src={panel.image}
                  alt={panel.alt}
                  width={800}
                  height={600}
                  className="h-auto w-full"
                />
              </div>
              <div>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[#4457ff]">
                  {panel.label}
                </p>
                <h3
                  className="text-[26px] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#20232b] lg:text-[30px]"
                  style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
                >
                  {panel.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-[#4f5562]">{panel.desc}</p>
                <a
                  href="https://app.feedhive.com/signup"
                  className="mt-5 inline-flex items-center rounded-[11px] border border-[#dfdfe4] px-5 py-2 text-[14px] font-medium text-[#20232b] transition-colors hover:border-[#20232b]"
                >
                  Get started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
