import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: React.ReactNode
  desc?: string
  align?: 'center' | 'left'
  tone?: 'dark' | 'light'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  desc,
  align = 'center',
  tone = 'dark',
  className,
}: SectionHeadingProps) {
  const isCenter = align === 'center'
  const isLight = tone === 'light'

  return (
    <div className={cn(isCenter && 'text-center', className)}>
      <p
        className={cn(
          'mb-3 text-[11px] font-bold uppercase tracking-[0.1em]',
          isLight ? 'text-white/70' : 'text-[#4457ff]'
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          'text-[34px] font-medium uppercase leading-[1.12] tracking-[-0.03em] lg:text-[46px]',
          isLight ? 'text-white' : 'text-[#20232b]'
        )}
        style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
      >
        {title}
      </h2>
      {desc && (
        <p
          className={cn(
            'mt-4 max-w-[640px] text-[15px] leading-[1.6]',
            isCenter && 'mx-auto',
            isLight ? 'text-white/85' : 'text-[#4f5562]'
          )}
        >
          {desc}
        </p>
      )}
    </div>
  )
}
