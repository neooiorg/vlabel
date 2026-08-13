import Image from 'next/image'

const productLinks = ['Scheduling', 'Automation', 'FeedHive AI', 'Social Inbox', 'Collaboration']
const resourceLinks = ['Help center', 'Integrations', 'API', 'Blog']
const companyLinks = ['Pricing', 'Brand kit', 'Privacy', 'Terms']
const otherLinks = ['LinkDrip', 'Aidbase', 'Image Creator']
const featureTags = [
  'AI-powered publishing',
  'Approval workflows',
  'Smart scheduling',
  'Team collaboration',
]
const bottomPills = [
  'MULTI-CHANNEL',
  'FREE TRIAL',
  'WEEKLY CONTENT PLANNING',
  'AI CREDITS INCLUDED',
]

const socialIcons: Record<string, React.ReactNode> = {
  Facebook: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 8.5H16L15.5 11H13.5V18H11V11H9V8.5H11V7C11 5.34 12.34 4 14 4H16V6.5H14.5C13.95 6.5 13.5 6.95 13.5 7.5V8.5Z" />
    </svg>
  ),
  Threads: (
    <svg width="14" height="14" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.6 9.1C15.4 9.1 15.2 9.1 15 9.1C13.9 9.1 12.9 9.5 12.2 10.2V7H10.2V15.5C10.2 16.8 11.3 17.9 12.6 17.9C13.9 17.9 15 16.8 15 15.5C15 14.2 13.9 13.1 12.6 13.1C12.4 13.1 12.2 13.1 12 13.2V11.1C12.2 11 12.4 11 12.6 11C14.9 11 16.8 12.9 16.8 15.2V15.5C16.8 17.8 14.9 19.7 12.6 19.7C10.3 19.7 8.4 17.8 8.4 15.5V7H6.4V6C6.4 3.8 8.2 2 10.4 2H15.6V4H10.4C9.3 4 8.4 4.9 8.4 6H15.6V9.1Z" />
    </svg>
  ),
  Instagram: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="16.5" cy="7.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  LinkedIn: (
    <svg width="14" height="14" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 8H3V19H5V8ZM4 6.5C3.2 6.5 2.5 5.8 2.5 5C2.5 4.2 3.2 3.5 4 3.5C4.8 3.5 5.5 4.2 5.5 5C5.5 5.8 4.8 6.5 4 6.5ZM19 12.5C19 10 17.5 8 15 8C13.6 8 12.6 8.6 12 9.5V8H10V19H12V13.5C12 12 12.8 10.5 14.5 10.5C16.2 10.5 17 11.8 17 13.5V19H19V12.5Z" />
    </svg>
  ),
  YouTube: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.6 7.2C21.4 6.4 20.8 5.8 20 5.6C18.4 5.2 12 5.2 12 5.2C12 5.2 5.6 5.2 4 5.6C3.2 5.8 2.6 6.4 2.4 7.2C2 8.8 2 12 2 12C2 12 2 15.2 2.4 16.8C2.6 17.6 3.2 18.2 4 18.4C5.6 18.8 12 18.8 12 18.8C12 18.8 18.4 18.8 20 18.4C20.8 18.2 21.4 17.6 21.6 16.8C22 15.2 22 12 22 12C22 12 22 8.8 21.6 7.2ZM10 15V9L15.5 12L10 15Z" />
    </svg>
  ),
}

function NavCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="mb-4 text-[14px] font-semibold text-[#20232b]">{title}</h4>
      <ul className="space-y-1">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="text-[14px] text-[#4f5562] transition-colors hover:text-[#20232b]"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1188px]">
        <div className="border-t border-black/5 pt-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-[240px_1fr_1fr_1fr_1fr]">
            {/* Brand column */}
            <div className="col-span-2 lg:col-span-1">
              <a href="/" className="flex items-center gap-2">
                <Image
                  src="/sites/feedhive-com-669d1bb4/shared/logo.webp"
                  alt="FeedHive"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <span
                  className="text-[18px] font-bold text-[#20232b]"
                  style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
                >
                  FeedHive
                </span>
              </a>
              <p className="mt-3 max-w-[260px] text-[14px] leading-[1.6] text-[#4f5562]">
                Create content at scale. Social media using AI, automation, and a workspace your
                whole team can use.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {featureTags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#dfdfe4] px-3 py-1 text-[12px] font-medium text-[#4f5562]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <NavCol title="Product" links={productLinks} />
            <NavCol title="Resources" links={resourceLinks} />
            <NavCol title="Company" links={companyLinks} />
            <NavCol title="Other products" links={otherLinks} />
          </div>
        </div>
        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start gap-4 border-t border-black/5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            {(['Facebook', 'Threads', 'Instagram', 'LinkedIn', 'YouTube'] as const).map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dfdfe4] text-[#4f5562] transition-colors hover:border-[#20232b] hover:text-[#20232b]"
              >
                {socialIcons[s]}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {bottomPills.map((p) => (
              <span
                key={p}
                className="rounded-full border border-[#dfdfe4] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.05em] text-[#4f5562]"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
        {/* Copyright */}
        <div className="flex flex-col gap-2 border-t border-black/5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-[#9fa3af]">© 2026 FeedHive. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {['Privacy', 'Terms', 'Cookie preferences'].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[13px] text-[#9fa3af] transition-colors hover:text-[#4f5562]"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
