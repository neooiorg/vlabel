import { SectionHeading } from '../SectionHeading'

const handled = [
  'Áp đúng nhóm hàng hoá & trường bắt buộc theo NĐ 37/2026',
  'Nhãn phụ tiếng Việt theo NĐ 43/2017',
  'Chuẩn hoá sự kiện theo GS1 EPCIS & TCVN 12850',
  'Đồng bộ lên Cổng quốc gia & Hệ thống Nhãn điện tử Quốc gia',
  'Cập nhật khi quy định thay đổi, doanh nghiệp không phải theo dõi',
]

export function ComplianceHandled() {
  return (
    <section className="bg-[#f7f8fb] px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-[92px] lg:pt-[92px]">
      <div className="mx-auto max-w-[1188px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            align="left"
            eyebrow="VLABEL LO PHẦN KHÓ"
            title={
              <>
                Không phải tự
                <br className="hidden lg:block" /> nghiên cứu luật.
              </>
            }
            desc="Quy định ghi nhãn và truy xuất thay đổi liên tục. Vlabel triển khai đúng yêu cầu pháp luật và đồng bộ hệ thống quốc gia — doanh nghiệp chỉ tập trung vào sản phẩm."
          />

          <div className="rounded-[22px] border border-black/5 bg-white p-7 shadow-sm lg:p-8">
            <ul className="space-y-4">
              {handled.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eaf7f1]">
                    <svg className="h-3.5 w-3.5 text-[#22a06b]" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[15px] leading-[1.5] text-[#20232b]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
