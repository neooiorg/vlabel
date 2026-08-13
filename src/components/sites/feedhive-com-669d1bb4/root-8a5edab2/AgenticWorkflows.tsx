import Image from 'next/image'

export function AgenticWorkflows() {
  const bigCards = [
    {
      title: 'Automation workflows',
      desc: 'Set up automation workflows and build advanced content pipelines to boost your productivity.',
      image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/feature-image-4.webp',
      alt: 'Automation workflows',
    },
    {
      title: 'OpenClaw skills',
      desc: 'Install the FeedHive skills so your OpenClaw agent can take full control and operate the tool for you.',
      image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/feature-image-5.webp',
      alt: 'OpenClaw skills',
    },
    {
      title: 'Claude Code',
      desc: 'Create, organize, and schedule content directly from your Claude Code workspace.',
      image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/claude-code-terminal.webp',
      alt: 'Claude Code terminal',
    },
    {
      title: 'API / CLI',
      desc: 'Connect FeedHive to custom scripts, developer tools, and terminal-first automations.',
      image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/feedhive-api-cli-terminal.webp',
      alt: 'API and CLI',
    },
  ]

  const smallFeatures = [
    {
      title: 'Automation',
      desc: 'Built-in visual automation workflow builder to create custom pipelines.',
    },
    {
      title: 'OpenClaw skills',
      desc: 'Setup FeedHive with OpenClaw using a single command.',
    },
    {
      title: 'Zapier integration',
      desc: 'Connect FeedHive with +9000 apps using Zapier.',
    },
  ]

  return (
    <section className="bg-white px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-[92px]">
      <div className="mx-auto max-w-[1188px]">
        <div className="mb-10 text-center lg:mb-14">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#4457ff]">
            AGENTIC WORKFLOWS
          </p>
          <h2
            className="text-[40px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#20232b] lg:text-[52px]"
            style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
          >
            Your agentic social media
            <br className="hidden lg:block" /> scheduling tool.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {bigCards.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-[20px] border border-black/5 bg-[#f7f7f9]"
            >
              <div className="px-6 pb-4 pt-6">
                <h3
                  className="text-[18px] font-bold text-[#20232b]"
                  style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
                >
                  {card.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.55] text-[#4f5562]">{card.desc}</p>
              </div>
              <Image
                src={card.image}
                alt={card.alt}
                width={800}
                height={500}
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {smallFeatures.map((f) => (
            <div key={f.title}>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#eef0ff]">
                <svg
                  className="h-5 w-5 text-[#4457ff]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4
                className="text-[16px] font-bold text-[#20232b]"
                style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
              >
                {f.title}
              </h4>
              <p className="mt-1 text-[14px] leading-[1.55] text-[#4f5562]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
