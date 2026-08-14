'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionHeading } from './SectionHeading'

interface QA {
  q: string
  a: string
}

const faqs: QA[] = [
  {
    q: 'Vlabel khác mã QR thường thế nào?',
    a: 'Mã QR thường chỉ dẫn tới một đường link tĩnh. QR của Vlabel dẫn tới hành trình đã ký theo chuẩn GS1 EPCIS, có dấu xác thực và đồng bộ Cổng quốc gia — dữ liệu được duyệt rồi khoá nên không thể tự ý chỉnh sửa.',
  },
  {
    q: 'Có tuân thủ quy định ghi nhãn không?',
    a: 'Có. Vlabel hỗ trợ nhãn điện tử theo NĐ 37/2026 và ghi nhãn hàng hoá theo NĐ 43/2017; chỉ cần chọn nhóm hàng hoá, hệ thống bung đúng các trường bắt buộc theo Phụ lục I.',
  },
  {
    q: 'Nhân sự không rành công nghệ có dùng được?',
    a: 'Được. Trợ lý dẫn từng bước (wizard) giúp thiết lập truy xuất và soạn nhãn điện tử, tự lưu nháp — dành cho cả người không rành kỹ thuật.',
  },
  {
    q: 'Vùng trồng, nhà máy mạng yếu thì sao?',
    a: 'Ứng dụng di động cho phép kê khai offline kèm hình ảnh minh chứng và GPS, tự đồng bộ khi có mạng trở lại.',
  },
  {
    q: 'Người tiêu dùng có cần cài app hay đăng nhập?',
    a: 'Không. Chỉ cần quét QR bằng camera điện thoại là xem được trang truy xuất song ngữ Việt/Anh — không cần app, không cần đăng nhập.',
  },
  {
    q: 'Một tỉnh quản nhiều doanh nghiệp được không?',
    a: 'Được. Kiến trúc đa khách hàng cho mỗi tỉnh/doanh nghiệp một không gian riêng, với cây đơn vị đa tầng và phân quyền chi tiết theo vai trò.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-24 bg-white px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-[92px] lg:pt-[92px]">
      <div className="mx-auto max-w-[820px]">
        <SectionHeading
          className="mb-10 lg:mb-14"
          eyebrow="08 · FAQ"
          title="Câu hỏi thường gặp."
          desc="Trả lời ngắn gọn cho những gì doanh nghiệp và địa phương hỏi nhiều nhất."
        />

        <div className="divide-y divide-black/5 overflow-hidden rounded-[18px] border border-black/5">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className="bg-white">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="tabular-nums text-[13px] font-semibold text-[#4457ff]">
                    Q{i + 1}
                  </span>
                  <span
                    className="flex-1 text-[16px] font-bold text-[#20232b] sm:text-[17px]"
                    style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
                  >
                    {item.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-[#767b84] transition-transform duration-200',
                      isOpen && 'rotate-180 text-[#4457ff]'
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 pl-[52px] text-[15px] leading-[1.6] text-[#4f5562] sm:px-6 sm:pl-[62px]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
