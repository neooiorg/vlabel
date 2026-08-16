import { SectionHeading } from '../SectionHeading'

const options = [
  {
    num: '01',
    desc: 'Dành cho HTX, SME, OCOP cần triển khai nhanh, chi phí hợp lý và đáp ứng quy định.',
    pkg: 'VLabel Standard',
  },
  {
    num: '02',
    desc: 'Dành cho thương hiệu chú trọng hình ảnh và muốn trang quét QR đẹp, đồng bộ nhận diện.',
    pkg: 'VLabel Brand',
  },
  {
    num: '03',
    desc: 'Dành cho doanh nghiệp lớn hoặc xuất khẩu, cần hệ thống riêng và tích hợp ERP.',
    pkg: 'VLabel Enterprise',
  },
  {
    num: '04',
    desc: 'Dành cho doanh nghiệp nhập khẩu, phân phối cần nhãn phụ tiếng Việt đúng quy định.',
    pkg: 'VLabel SubLabel',
  },
  {
    num: '05',
    desc: 'Dành cho đội ngũ cần hướng dẫn vận hành, đào tạo và chuyển giao hệ thống.',
    pkg: 'Đào tạo & chuyển giao',
  },
]

export function PackageMatcher() {
  return (
    <section id="chon-goi" className="scroll-mt-24 bg-white px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-[92px] lg:pt-[92px]">
      <div className="mx-auto max-w-[1188px]">
        <SectionHeading
          className="mb-10 lg:mb-14"
          eyebrow="03 · CHỌN GÓI"
          title="Chọn giải pháp phù hợp với nhu cầu."
          desc="Chọn mô tả gần nhất với doanh nghiệp của bạn, Vlabel sẽ tư vấn gói triển khai và quy trình phù hợp."
        />

        <div className="mx-auto max-w-[780px] overflow-hidden rounded-[18px] border border-black/5">
          {options.map((opt, i) => (
            <a
              key={opt.num}
              href="/#tu-van"
              className="group flex items-center gap-5 border-b border-black/5 px-6 py-5 transition-colors last:border-b-0 hover:bg-[#f7f8fb]"
            >
              <span className="w-8 shrink-0 tabular-nums text-[16px] font-bold text-[#4457ff]">
                {opt.num}
              </span>
              <span className="flex-1 text-[15px] leading-[1.5] text-[#4f5562]">
                {opt.desc}
              </span>
              <span className="shrink-0 rounded-full bg-[#f1f2f6] px-3 py-1 text-[12px] font-semibold text-[#20232b] transition-colors group-hover:bg-[#eef0ff] group-hover:text-[#4457ff]">
                {opt.pkg}
              </span>
              <svg
                className="h-4 w-4 shrink-0 text-[#c0c4cc] transition-colors group-hover:text-[#4457ff]"
                viewBox="0 0 24 24" fill="none"
              >
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
