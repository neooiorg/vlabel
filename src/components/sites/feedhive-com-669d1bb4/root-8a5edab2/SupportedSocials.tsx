'use client'

export function SupportedSocials() {
  const row1 = [
    { name: 'Facebook', bg: '#1877F2', icon: 'fb' },
    { name: 'Instagram', bg: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', icon: 'ig' },
    { name: 'YouTube', bg: '#FF0000', icon: 'yt' },
    { name: 'X', bg: '#000000', icon: 'x' },
    { name: 'TikTok', bg: '#010101', icon: 'tt' },
    { name: 'LinkedIn', bg: '#0A66C2', icon: 'li' },
    { name: 'Pinterest', bg: '#E60023', icon: 'pi' },
    { name: 'Threads', bg: '#101010', icon: 'th' },
  ]
  const row2 = [
    { name: 'Zapier', bg: '#FF4F00', icon: 'za' },
    { name: 'Discord', bg: '#5865F2', icon: 'di' },
    { name: 'Make', bg: '#6D00CC', icon: 'ma' },
    { name: 'Slack', bg: '#4A154B', icon: 'sl' },
    { name: 'Google', bg: '#4285F4', icon: 'go' },
    { name: 'Notion', bg: '#101010', icon: 'no' },
  ]

  function SocialIcon({ icon }: { icon: string }) {
    switch (icon) {
      case 'fb':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.5H16L15.5 11H13.5V18H11V11H9V8.5H11V7C11 5.34 12.34 4 14 4H16V6.5H14.5C13.95 6.5 13.5 6.95 13.5 7.5V8.5Z" />
          </svg>
        )
      case 'ig':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3.5" />
            <circle cx="16.5" cy="7.5" r="0.8" fill="white" stroke="none" />
          </svg>
        )
      case 'yt':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 8.5L16 12L10 15.5V8.5Z" />
          </svg>
        )
      case 'x':
        return (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.99 2H19.8L13.3 9.47L21 20H14.83L9.99 13.67L4.47 20H1.65L8.6 12.02L1.21 2H7.53L11.93 7.76L16.99 2ZM16.01 18.27H17.56L6.07 3.63H4.41L16.01 18.27Z" />
          </svg>
        )
      case 'tt':
        return (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 5.5C16.2 4.6 15.8 3.5 15.8 2.5H13V14.5C13 15.6 12.1 16.5 11 16.5C9.9 16.5 9 15.6 9 14.5C9 13.4 9.9 12.5 11 12.5C11.3 12.5 11.6 12.6 11.8 12.7V9.8C11.5 9.75 11.25 9.7 11 9.7C8.2 9.7 6 11.9 6 14.7C6 17.5 8.2 19.7 11 19.7C13.8 19.7 16 17.5 16 14.7V8.5C17.1 9.3 18.4 9.8 19.8 9.8V7C18.5 7 17.6 6.4 17 5.5Z" />
          </svg>
        )
      case 'li':
        return (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 8H3V19H5V8ZM4 6.5C3.2 6.5 2.5 5.8 2.5 5C2.5 4.2 3.2 3.5 4 3.5C4.8 3.5 5.5 4.2 5.5 5C5.5 5.8 4.8 6.5 4 6.5ZM19 12.5C19 10 17.5 8 15 8C13.6 8 12.6 8.6 12 9.5V8H10V19H12V13.5C12 12 12.8 10.5 14.5 10.5C16.2 10.5 17 11.8 17 13.5V19H19V12.5Z" />
          </svg>
        )
      case 'pi':
        return (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 2C6 2 2 6 2 11C2 14.9 4.4 18.3 7.9 19.7C7.8 18.9 7.8 17.6 8 16.9L9.3 11.7C9.3 11.7 8.9 10.9 8.9 9.7C8.9 7.8 10 6.4 11.3 6.4C12.5 6.4 13.1 7.3 13.1 8.4C13.1 9.6 12.3 11.4 11.9 13.1C11.6 14.5 12.6 15.7 14 15.7C16.5 15.7 18.3 13 18.3 9.4C18.3 6.3 16.1 4.1 12.9 4.1C9.2 4.1 7 6.9 7 9.8C7 11 7.5 12.3 8.1 12.9C8.2 13 8.2 13.1 8.2 13.2L7.8 14.8C7.7 15.1 7.5 15.2 7.2 15C5.3 14.1 4.2 11.8 4.2 9.7C4.2 5.7 7.2 2 13.2 2C18 2 21.7 5.4 21.7 10.3C21.7 15.4 18.4 19.5 13.7 19.5C12.3 19.5 10.9 18.8 10.5 18L9.7 21.1C9.4 22.2 8.6 23.6 8.1 24.5C9 24.8 10 25 11 25C16.5 25 21 20.5 21 15C21 9.5 16.5 2 11 2Z" />
          </svg>
        )
      case 'th':
        return (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.6 9.1C15.4 9.1 15.2 9.1 15 9.1C13.9 9.1 12.9 9.5 12.2 10.2V7H10.2V15.5C10.2 16.8 11.3 17.9 12.6 17.9C13.9 17.9 15 16.8 15 15.5C15 14.2 13.9 13.1 12.6 13.1C12.4 13.1 12.2 13.1 12 13.2V11.1C12.2 11 12.4 11 12.6 11C14.9 11 16.8 12.9 16.8 15.2V15.5C16.8 17.8 14.9 19.7 12.6 19.7C10.3 19.7 8.4 17.8 8.4 15.5V7H6.4V6C6.4 3.8 8.2 2 10.4 2H15.6V4H10.4C9.3 4 8.4 4.9 8.4 6H15.6V9.1Z" />
          </svg>
        )
      case 'za':
        return (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 8H11L4 16H11M11 6H18L11 14H18" />
          </svg>
        )
      case 'di':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6 5.3C18.2 4.6 16.7 4.1 15.1 3.8C14.9 4.2 14.6 4.7 14.4 5.1C12.8 4.9 11.2 4.9 9.6 5.1C9.4 4.7 9.1 4.2 8.9 3.8C7.3 4.1 5.8 4.6 4.4 5.3C1.6 9.5 0.9 13.5 1.2 17.5C3 18.8 4.7 19.7 6.4 20.2C6.8 19.7 7.2 19.1 7.5 18.5C6.9 18.2 6.3 17.9 5.8 17.6C5.9 17.5 6.1 17.4 6.2 17.3C9.5 18.8 13.1 18.8 16.3 17.3C16.4 17.4 16.6 17.5 16.7 17.6C16.2 17.9 15.6 18.2 15 18.5C15.3 19.1 15.7 19.7 16.1 20.2C17.8 19.7 19.5 18.8 21.3 17.5C21.7 12.9 20.6 8.9 19.6 5.3ZM8.5 15C7.5 15 6.7 14.1 6.7 13C6.7 11.9 7.5 11 8.5 11C9.5 11 10.3 11.9 10.3 13C10.3 14.1 9.5 15 8.5 15ZM15.5 15C14.5 15 13.7 14.1 13.7 13C13.7 11.9 14.5 11 15.5 11C16.5 11 17.3 11.9 17.3 13C17.3 14.1 16.5 15 15.5 15Z" />
          </svg>
        )
      case 'ma':
        return (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="11" r="2.5" fill="white" />
            <circle cx="16" cy="6" r="2.5" fill="white" />
            <circle cx="16" cy="16" r="2.5" fill="white" />
            <line x1="8.5" y1="10" x2="13.5" y2="7" stroke="white" strokeWidth="1.5" />
            <line x1="8.5" y1="12" x2="13.5" y2="15" stroke="white" strokeWidth="1.5" />
          </svg>
        )
      case 'sl':
        return (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 14.5C8.5 15.6 7.6 16.5 6.5 16.5C5.4 16.5 4.5 15.6 4.5 14.5C4.5 13.4 5.4 12.5 6.5 12.5H8.5V14.5ZM9.5 14.5C9.5 13.4 10.4 12.5 11.5 12.5C12.6 12.5 13.5 13.4 13.5 14.5V17.5C13.5 18.6 12.6 19.5 11.5 19.5C10.4 19.5 9.5 18.6 9.5 17.5V14.5ZM13.5 7.5C13.5 6.4 14.4 5.5 15.5 5.5C16.6 5.5 17.5 6.4 17.5 7.5C17.5 8.6 16.6 9.5 15.5 9.5H13.5V7.5ZM12.5 7.5C12.5 8.6 11.6 9.5 10.5 9.5C9.4 9.5 8.5 8.6 8.5 7.5V4.5C8.5 3.4 9.4 2.5 10.5 2.5C11.6 2.5 12.5 3.4 12.5 4.5V7.5ZM7.5 11C6.4 11 5.5 10.1 5.5 9C5.5 7.9 6.4 7 7.5 7H10.5V10C10.5 10.6 10 11 9.5 11H7.5ZM14.5 11C15.6 11 16.5 11.9 16.5 13C16.5 14.1 15.6 15 14.5 15H11.5V12C11.5 11.4 12 11 12.5 11H14.5Z" />
          </svg>
        )
      case 'go':
        return (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 5C7.7 5 5 7.7 5 11C5 14.3 7.7 17 11 17C13.9 17 16.4 15 17 12H11V10H19.1C19.2 10.7 19.3 11.3 19.3 12C19.3 16.1 15.6 19.3 11 19.3C6.4 19.3 2.7 15.6 2.7 11C2.7 6.4 6.4 2.7 11 2.7C13.1 2.7 15 3.5 16.5 4.8L14.7 6.7C13.7 5.7 12.4 5 11 5Z" />
          </svg>
        )
      case 'no':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 3.5C4 3.5 5.2 3.6 6.1 4.2L14.9 16.1C15.4 16.8 16 17 16 17V3.5C16 3.5 14.9 3.4 13.9 2.8L5.1 14.8L4 3.5Z" fill="white" />
            <path d="M4 3.5V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M16 3.5V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )
      default:
        return null
    }
  }

  const IconCard = ({ name, bg, icon }: { name: string; bg: string; icon: string }) => (
    <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[18px] bg-[#f4f3f2] lg:h-[84px] lg:w-[84px] lg:rounded-[22px]">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-[10px] lg:h-12 lg:w-12 lg:rounded-[12px]"
        style={{ background: bg }}
      >
        <SocialIcon icon={icon} />
      </div>
    </div>
  )

  return (
    <section className="overflow-hidden bg-white px-0 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-[82px]">
      <div className="mx-auto max-w-[1188px]">
        <div className="mb-10 px-4 text-center sm:px-0 lg:mb-14">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#4457ff]">
            SUPPORTED SOCIALS
          </p>
          <h2
            className="text-[40px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#20232b] lg:text-[52px]"
            style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
          >
            Publish to all trending
            <br className="hidden lg:block" /> social media channels.
          </h2>
        </div>
        {/* Row 1 */}
        <div className="flex items-center gap-3 px-4 sm:px-0 lg:gap-4">
          {row1.map((s) => (
            <IconCard key={s.name} name={s.name} bg={s.bg} icon={s.icon} />
          ))}
        </div>
        {/* Row 2 - offset */}
        <div className="mt-3 flex items-center gap-3 pl-8 sm:pl-4 lg:gap-4 lg:pl-10">
          {row2.map((s) => (
            <IconCard key={s.name} name={s.name} bg={s.bg} icon={s.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
