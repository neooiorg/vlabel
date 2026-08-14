'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface QA {
  q: string
  a: string
}

interface Group {
  category: string
  items: QA[]
}

const groups: Group[] = [
  {
    category: 'Tổng quan',
    items: [
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
        a: 'Được. Trợ lý dẫn từng bước (wizard) giúp thiết lập truy xuất và soạn nhãn điện tử, tự lưu nháp — dành cho cả người không rành kỹ thuật. Có thể mua kèm gói đào tạo và chuyển giao.',
      },
      {
        q: 'Người tiêu dùng có cần cài app hay đăng nhập?',
        a: 'Không. Chỉ cần quét QR bằng camera điện thoại là xem được trang truy xuất song ngữ Việt/Anh — không cần app, không cần đăng nhập.',
      },
    ],
  },
  {
    category: 'Triển khai & chi phí',
    items: [
      {
        q: 'Triển khai mất bao lâu?',
        a: 'Gói Standard và SubLabel có thể lên dùng ngay sau khi chuẩn hoá dữ liệu. Gói Enterprise triển khai theo dự án tuỳ mức tích hợp và tùy biến quy trình.',
      },
      {
        q: 'Chi phí tính thế nào?',
        a: 'Giá phụ thuộc gói, số lượng SKU và nhu cầu tùy biến. Ký hiệu chi phí trên trang Giải pháp chỉ là mức tương đối; Vlabel báo giá cụ thể sau khi khảo sát.',
      },
      {
        q: 'Có cần đội IT của doanh nghiệp không?',
        a: 'Không bắt buộc. Gói dùng chung cầm account lên dùng ngay, không đụng tới IT. Chỉ gói Enterprise cần phối hợp khi tích hợp ERP/MES hoặc dùng tên miền riêng.',
      },
      {
        q: 'Vùng trồng, nhà máy mạng yếu thì sao?',
        a: 'Ứng dụng di động cho phép kê khai offline kèm hình ảnh minh chứng và GPS, tự đồng bộ khi có mạng trở lại.',
      },
    ],
  },
  {
    category: 'Dữ liệu & pháp lý',
    items: [
      {
        q: 'Vlabel đồng bộ với hệ thống quốc gia nào?',
        a: 'Dữ liệu truy xuất đồng bộ lên Cổng truy xuất nguồn gốc quốc gia (truyxuatnguongoc.gov.vn) và Hệ thống Nhãn điện tử Quốc gia (elabel.gov.vn).',
      },
      {
        q: 'Nếu quy định thay đổi thì sao?',
        a: 'Vlabel theo dõi và cập nhật nền tảng theo quy định mới, doanh nghiệp không phải tự nghiên cứu. Số điều luật và mốc thời gian sẽ được đối chiếu toàn văn trước khi áp dụng chính thức.',
      },
      {
        q: 'Hàng xuất khẩu có dùng được không?',
        a: 'Có. Hồ sơ truy xuất sẵn sàng cho hậu kiểm, đáp ứng yêu cầu Lệnh 248/249 và quy định EU; nhãn điện tử hỗ trợ đa ngôn ngữ cho hàng xuất khẩu.',
      },
      {
        q: 'Một tỉnh quản nhiều doanh nghiệp được không?',
        a: 'Được. Kiến trúc đa khách hàng cho mỗi tỉnh/doanh nghiệp một không gian riêng, với cây đơn vị đa tầng và phân quyền chi tiết theo vai trò.',
      },
    ],
  },
]

export function FaqPage() {
  // key format: `${groupIndex}-${itemIndex}`
  const [open, setOpen] = useState<string | null>('0-0')

  return (
    <section className="bg-white px-4 pb-16 pt-6 sm:px-6 sm:pb-20 lg:px-8 lg:pb-[92px]">
      <div className="mx-auto max-w-[820px]">
        {groups.map((group, gi) => (
          <div key={group.category} className={gi > 0 ? 'mt-12' : ''}>
            <h2
              className="mb-5 text-[22px] font-medium tracking-[-0.02em] text-[#20232b]"
              style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
            >
              {group.category}
            </h2>
            <div className="divide-y divide-black/5 overflow-hidden rounded-[18px] border border-black/5">
              {group.items.map((item, ii) => {
                const key = `${gi}-${ii}`
                const isOpen = open === key
                return (
                  <div key={item.q} className="bg-white">
                    <button
                      onClick={() => setOpen(isOpen ? null : key)}
                      className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                    >
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
                        <p className="px-5 pb-5 text-[15px] leading-[1.6] text-[#4f5562] sm:px-6">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
