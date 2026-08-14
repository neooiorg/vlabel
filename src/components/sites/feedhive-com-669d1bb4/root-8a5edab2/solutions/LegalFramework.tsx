import { SectionHeading } from '../SectionHeading'

const references = [
  { label: 'Nhãn điện tử', value: 'elabel.gov.vn' },
  { label: 'Cổng quốc gia (NBC)', value: 'truyxuatnguongoc.gov.vn' },
  { label: 'Chuẩn kỹ thuật', value: 'TCVN 12850 · GS1' },
]

export function LegalFramework() {
  return (
    <section id="phap-ly" className="scroll-mt-24 bg-white px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-[92px] lg:pt-[92px]">
      <div className="mx-auto max-w-[1188px]">
        <SectionHeading
          className="mb-10 lg:mb-14"
          eyebrow="05 · KHUNG PHÁP LÝ"
          title={
            <>
              Tuân thủ pháp luật,
              <br className="hidden lg:block" /> không cần tự lo.
            </>
          }
          desc="Doanh nghiệp không phải tự nghiên cứu quy định. Vlabel triển khai đúng yêu cầu pháp luật và đồng bộ hệ thống quốc gia."
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.4fr_1fr]">
          {/* Main basis */}
          <div className="rounded-[22px] border border-black/5 bg-[#f7f8fb] p-7 lg:p-9">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#4457ff]">
              CĂN CỨ CHÍNH
            </p>
            <h3 className="mt-3 text-[24px] font-extrabold tracking-[-0.02em] text-[#20232b] lg:text-[28px]" style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}>
              Nghị định 37/2026/NĐ-CP
            </h3>
            <p className="mt-3 text-[15px] leading-[1.6] text-[#4f5562]">
              Lần đầu luật hóa “nhãn điện tử”, thay thế Nghị định 43/2017 và 111/2021, và bắt buộc
              truy xuất với sản phẩm rủi ro cao.
            </p>
            <div className="mt-5 inline-flex items-start gap-2 rounded-[12px] border border-[#f5c542]/40 bg-[#fffaf0] px-4 py-3">
              <span className="mt-0.5 text-[#d99400]">⚠</span>
              <p className="text-[13px] font-medium leading-[1.5] text-[#8a6d1f]">
                LƯU Ý: 23.01.2026 (NĐ 37) ≠ 01.07.2026 (TT 31)
              </p>
            </div>
          </div>

          {/* References */}
          <div className="flex flex-col gap-3">
            {references.map((r) => (
              <div
                key={r.label}
                className="flex items-center justify-between rounded-[16px] border border-black/5 bg-white p-5 shadow-sm"
              >
                <span className="text-[13px] font-semibold uppercase tracking-[0.04em] text-[#767b84]">
                  {r.label}
                </span>
                <span className="font-mono text-[13px] font-semibold text-[#4457ff]">{r.value}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-[12px] leading-[1.6] text-[#9fa3af]">
          Số điều luật và mốc thời gian lấy từ bản tổng hợp phân tích; đối chiếu toàn văn Nghị định
          37/2026 trước khi công bố chính thức.
        </p>
      </div>
    </section>
  )
}
