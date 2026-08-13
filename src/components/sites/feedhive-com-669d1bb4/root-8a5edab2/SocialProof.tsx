import Image from 'next/image'

export function SocialProof() {
  return (
    <section className="bg-white px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-[92px]">
      <div className="mx-auto max-w-[1188px]">
        {/* Header */}
        <div className="mb-10 text-center lg:mb-14">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#4457ff]">
            THE EFFECTS OF FEEDHIVE
          </p>
          <h2
            className="text-[40px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#20232b] lg:text-[52px]"
            style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
          >
            What happens when social
            <br className="hidden lg:block" /> starts working.
          </h2>
        </div>

        {/* Testimonial */}
        <div className="mb-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <Image
            src="/sites/feedhive-com-669d1bb4/root-8a5edab2/images/testimonial-user.webp"
            alt="Francis Russell"
            width={48}
            height={48}
            className="h-12 w-12 shrink-0 rounded-full object-cover"
          />
          <div>
            <p className="text-[16px] text-[#20232b]">
              &ldquo;FeedHive turned social into a channel that consistently drives traffic for
              us.&rdquo;
            </p>
            <p className="mt-1 text-[14px] font-medium text-[#4f5562]">Francis Russell</p>
          </div>
        </div>

        {/* Chart mockup cards */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Followers bar chart card */}
          <div className="overflow-hidden rounded-[16px] border border-black/5 bg-white p-6 shadow-sm">
            <Image
              src="/sites/feedhive-com-669d1bb4/root-8a5edab2/images/showcase-image-1.webp"
              alt="Followers analytics chart"
              width={800}
              height={500}
              className="h-auto w-full rounded-[8px]"
            />
          </div>
          {/* Visitors line chart card */}
          <div className="overflow-hidden rounded-[16px] border border-black/5 bg-white p-6 shadow-sm">
            <Image
              src="/sites/feedhive-com-669d1bb4/root-8a5edab2/images/showcase-image-2.webp"
              alt="Visitors by country chart"
              width={800}
              height={500}
              className="h-auto w-full rounded-[8px]"
            />
          </div>
        </div>

        {/* Benefits row */}
        <div className="mt-8 grid grid-cols-1 divide-y divide-black/5 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
          <div className="py-8 text-center lg:pr-10">
            <h3
              className="text-[22px] font-bold text-[#20232b]"
              style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
            >
              Get more reach
            </h3>
            <p className="mt-2 text-[15px] leading-[1.6] text-[#4f5562]">
              Consistent, high-quality content gets you more reach, engagement, and followers.
            </p>
          </div>
          <div className="py-8 text-center lg:pl-10">
            <h3
              className="text-[22px] font-bold text-[#20232b]"
              style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
            >
              Drive more traffic
            </h3>
            <p className="mt-2 text-[15px] leading-[1.6] text-[#4f5562]">
              Followers turn into traffic when you share content that resonates.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
