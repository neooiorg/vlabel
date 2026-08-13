export function FeaturesGrid() {
  const features = [
    'Vibe Marketing',
    'Smart Scheduling',
    'Post Conditions',
    'Generate Hashtags',
    'Recycle Posts',
    'Grid Preview',
    'IG Carousels',
    'FB Stories/Reels',
    'Instagram Stories',
    'Link Shortening',
    'AI Image Gen',
    'Dynamic Variables',
    'AI Assistant',
    'Content Planner',
    'Social Inbox',
    'Approval Flows',
    'Automation',
    'Media Library',
    'Brand Templates',
    'Performance Stats',
    'Best Time Slots',
    'Campaign Tags',
    'Cross-Posting',
    'AI Captions',
    'UGC Scripts',
    'Comment Triggers',
    'Performance Prediction',
    'Workspace Access',
    'Idea Generation',
    'Custom Fields',
    'Content Calendar',
    'Link Tracking',
    'Bulk Scheduling',
    'Video Thumbs',
    'Post Preview',
    'Team Roles',
    'Content Library',
  ]

  const highlighted = [
    {
      title: 'AI Image Generation',
      desc: 'Generate fresh visuals inside FeedHive with Flux Pro and Nano Banana 2.',
      bg: '#fdf2f4',
      iconBg: '#fce7eb',
      iconColor: '#e11d48',
    },
    {
      title: 'Vibe Marketing',
      desc: 'Our built-in AI agent will help you turn random thoughts into powerful posts.',
      bg: '#f5f3ff',
      iconBg: '#ede9fe',
      iconColor: '#7c3aed',
    },
    {
      title: 'Post Recycling',
      desc: 'Let FeedHive suggest the best posts to recycle, and post them automatically.',
      bg: '#fefce8',
      iconBg: '#fef9c3',
      iconColor: '#ca8a04',
    },
    {
      title: 'Link Shortening',
      desc: 'Automatically shorten all your links with LinkDrip, no extra setup needed.',
      bg: '#eff6ff',
      iconBg: '#dbeafe',
      iconColor: '#2563eb',
    },
  ]

  return (
    <section className="bg-white px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-[92px]">
      <div className="mx-auto max-w-[1188px]">
        <div className="mb-10 text-center lg:mb-14">
          <h2
            className="text-[36px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#20232b] lg:text-[48px]"
            style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
          >
            Advanced features professional
            <br className="hidden lg:block" /> marketers love.
          </h2>
        </div>
        {/* Highlighted feature cards */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlighted.map((f) => (
            <div
              key={f.title}
              className="rounded-[16px] p-5"
              style={{ backgroundColor: f.bg }}
            >
              <div
                className="mb-3 flex h-10 w-10 items-center justify-center rounded-[10px]"
                style={{ backgroundColor: f.iconBg }}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: f.iconColor }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 3l14 9-14 9V3z"
                  />
                </svg>
              </div>
              <h3
                className="text-[16px] font-bold text-[#20232b]"
                style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
              >
                {f.title}
              </h3>
              <p className="mt-1 text-[13px] leading-[1.5] text-[#4f5562]">{f.desc}</p>
            </div>
          ))}
        </div>
        {/* Feature grid */}
        <div className="grid grid-cols-3 divide-x divide-y divide-black/5 border border-black/5 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {features.map((f) => (
            <div key={f} className="flex flex-col items-center gap-2 p-4 text-center">
              <svg
                className="h-5 w-5 text-[#767b84]"
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
              <span className="text-[11px] font-medium leading-[1.3] text-[#4f5562]">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
