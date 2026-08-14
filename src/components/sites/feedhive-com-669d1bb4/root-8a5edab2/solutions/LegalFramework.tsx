import Image from 'next/image'
import { Globe, FileText, Cpu } from 'lucide-react'

const IMG = '/sites/feedhive-com-669d1bb4/root-8a5edab2/images'

const refs = [
  { icon: FileText, label: 'Nhãn điện tử', value: 'elabel.gov.vn' },
  { icon: Globe,    label: 'Cổng quốc gia', value: 'truyxuatnguongoc.gov.vn' },
  { icon: Cpu,      label: 'Chuẩn kỹ thuật', value: 'TCVN 12850 · GS1' },
]

export function LegalFramework() {
  return (
    <section id="phap-ly" className="scroll-mt-24 bg-white px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-[92px] lg:pt-[92px]">
      <div className="mx-auto max-w-[1188px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left — content */}
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.1em] text-[#4457ff]">
              05 · Khung pháp lý
            </p>
            <h2
              className="text-[34px] font-medium leading-[1.1] tracking-[-0.03em] text-[#20232b] lg:text-[42px]"
              style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
            >
              Tuân thủ pháp luật,
              <br /> không cần tự lo.
            </h2>
            <p className="mt-4 max-w-[480px] text-[15px] leading-[1.6] text-[#4f5562]">
              Doanh nghiệp không phải tự nghiên cứu quy định. Vlabel triển khai đúng yêu cầu pháp luật và đồng bộ hệ thống quốc gia.
            </p>

            <div className="mt-7 space-y-2">
              {/* Featured: NĐ 37 */}
              <div className="rounded-[14px] bg-[#eef0ff] px-5 py-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#4457ff]">Căn cứ chính</p>
                <p
                  className="mt-1 text-[18px] font-semibold tracking-[-0.02em] text-[#20232b]"
                  style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
                >
                  Nghị định 37/2026/NĐ-CP
                </p>
              </div>

              {/* Reference rows */}
              <div className="overflow-hidden rounded-[14px] bg-[#ebebef]">
                <div className="grid grid-cols-1 gap-px">
                  {refs.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-3 bg-white px-5 py-3.5">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] bg-[#f1f2f6]">
                        <Icon className="h-[13px] w-[13px] text-[#767b84]" strokeWidth={1.8} />
                      </span>
                      <span className="flex-1 text-[13px] text-[#767b84]">{label}</span>
                      <span className="text-[13px] font-semibold text-[#20232b]">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warning */}
              <div className="flex items-start gap-2.5 rounded-[12px] border border-[#fde68a] bg-[#fffbeb] px-4 py-3">
                <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#d97706]" viewBox="0 0 24 24" fill="none">
                  <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[12px] font-medium leading-[1.5] text-[#92650a]">
                  Hiệu lực 23.01.2026 (NĐ 37) — khác với 01.07.2026 (TT 31)
                </span>
              </div>
            </div>

            <p className="mt-3 text-[11px] leading-[1.6] text-[#b0b4bf]">
              Đối chiếu toàn văn NĐ 37/2026 trước khi công bố chính thức.
            </p>
          </div>

          {/* Right — image */}
          <div className="overflow-hidden rounded-[22px] border border-black/5 shadow-sm">
            <Image
              src={`${IMG}/feature-image-5-v2.png`}
              alt="Soạn nhãn điện tử theo NĐ 37/2026"
              width={1200}
              height={900}
              className="h-auto w-full"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
