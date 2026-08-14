import { cn } from '@/lib/utils'
import { SectionHeading } from '../SectionHeading'
import { AnimateIn } from '@/components/AnimateIn'

interface Stage {
  index: string
  title: string
  desc: string
}

const stages: Stage[] = [
  {
    index: '01',
    title: 'Kê khai',
    desc: 'Cán bộ nhập dữ liệu cho từng Sự kiện, kể cả offline khi ở nhà máy, vùng trồng hay kho.',
  },
  {
    index: '02',
    title: 'Duyệt',
    desc: 'Quản lý rà soát, đối chiếu và phê duyệt dữ liệu trước khi công bố ra ngoài.',
  },
  {
    index: '03',
    title: 'Khoá',
    desc: 'Sự kiện được khoá để đảm bảo toàn vẹn — dữ liệu đã ký không thể sửa lén.',
  },
]

export function DataIntegrity() {
  return (
    <section className="bg-[#f7f8fb] px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-[92px] lg:pt-[92px]">
      <div className="mx-auto max-w-[1188px]">
        <AnimateIn>
          <SectionHeading
            className="mb-12 lg:mb-16"
            eyebrow="TOÀN VẸN DỮ LIỆU"
          title="Kê khai · Duyệt · Khoá."
            desc="Ba lớp bảo vệ để dữ liệu hiển thị cho người tiêu dùng luôn đáng tin. Mỗi bước tuân thủ nguyên tắc một bước trước, một bước sau theo TCVN 12850."
          />
        </AnimateIn>

        <AnimateIn delay={100}>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {stages.map((s, i) => (
              <div
                key={s.index}
                className={cn(
                  'flex flex-col py-10 lg:py-0',
                  i > 0 &&
                    'border-t border-black/[0.07] lg:border-l lg:border-t-0 lg:pl-10',
                  i < stages.length - 1 && 'lg:pr-10',
                )}
              >
                <span
                  className="mb-4 block text-[52px] font-bold leading-none tabular-nums text-[#4457ff]"
                  style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
                >
                  {s.index}
                </span>
                <h3
                  className="text-[20px] font-semibold text-[#20232b]"
                  style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
                >
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[1.65] text-[#4f5562]">{s.desc}</p>
              </div>
          ))}
        </div>
        </AnimateIn>
      </div>
    </section>
  )
}
