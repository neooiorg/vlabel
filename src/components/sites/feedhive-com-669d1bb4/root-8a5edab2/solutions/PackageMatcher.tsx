import { SectionHeading } from '../SectionHeading'

const options = [
  {
    num: '01',
    desc: 'HTX, SME, OCOP — ngân sách gọn, cần đúng luật từ ngày đầu',
    pkg: 'VLabel Standard',
  },
  {
    num: '02',
    desc: 'Có thương hiệu, coi trọng hình ảnh, muốn trang quét đẹp',
    pkg: 'VLabel Brand',
  },
  {
    num: '03',
    desc: 'Doanh nghiệp lớn hoặc xuất khẩu, muốn hệ thống riêng và tích hợp ERP',
    pkg: 'VLabel Enterprise',
  },
  {
    num: '04',
    desc: 'Nhập khẩu và phân phối, cần nhãn phụ tiếng Việt đúng mẫu',
    pkg: 'VLabel SubLabel',
  },
  {
    num: '05',
    desc: 'Mua về mà đội chưa rành — cần đào tạo và chuyển giao',
    pkg: 'Gói đào tạo & chuyển giao',
  },
]

export function PackageMatcher() {
  return (
    <section id="chon-goi" className="scroll-mt-24 bg-white px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-[92px] lg:pt-[92px]">
      <div className="mx-auto max-w-[1188px]">
        <SectionHeading
          className="mb-10 lg:mb-14"
          eyebrow="03 · CHỌN GÓI"
          title={
            <>
              Chọn mô tả
              <br className="hidden lg:block" /> gần nhất.
            </>
          }
          desc="Nhận ra mình trong mô tả nào, điền form bên dưới — Vlabel tư vấn gói và quy trình cụ thể."
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
