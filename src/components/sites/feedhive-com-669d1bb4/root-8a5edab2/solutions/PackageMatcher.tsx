'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { SectionHeading } from '../SectionHeading'

interface Option {
  number: string
  desc: string
  pkg: string
  reason: string
}

const options: Option[] = [
  {
    number: '01',
    desc: 'HTX, SME, OCOP, ngân sách gọn, cần có cho đúng luật',
    pkg: 'VLabel Standard',
    reason: 'Cấp account lên dùng ngay, không cần IT. Chi phí thấp, đúng luật từ ngày đầu.',
  },
  {
    number: '02',
    desc: 'Có thương hiệu, coi trọng hình ảnh, muốn trang quét đẹp và bán hàng',
    pkg: 'VLabel Brand',
    reason: 'Landing page đẹp theo thương hiệu, có nút mua hàng/Zalo/hotline, vẫn đồng bộ quốc gia.',
  },
  {
    number: '03',
    desc: 'DN lớn hoặc xuất khẩu, quy trình phức tạp, muốn hệ thống riêng và tích hợp ERP',
    pkg: 'VLabel Enterprise',
    reason: 'Hệ thống riêng trên tên miền của bạn, tùy biến quy trình sâu, tích hợp ERP/MES/kho.',
  },
  {
    number: '04',
    desc: 'Chuyên nhập khẩu và phân phối, đau đầu chuyện nhãn phụ tiếng Việt',
    pkg: 'VLabel SubLabel',
    reason: 'Nhãn phụ làm sẵn theo mẫu, đủ nội dung bắt buộc, kèm QR dẫn về thông tin đầy đủ.',
  },
  {
    number: '05',
    desc: 'Lo mua về không biết dùng, không có người rành',
    pkg: 'Gói đào tạo và chuyển giao',
    reason: 'Chuyển giao để đội bạn tự vận hành: hiểu quy định, khai báo đúng chuẩn, đọc số liệu.',
  },
]

export function PackageMatcher() {
  const [active, setActive] = useState<number | null>(null)
  const current = active !== null ? options[active] : null

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
          desc="Chọn một mô tả bên dưới, Vlabel gợi ý gói phù hợp. Để được khảo sát cụ thể, điền form bên dưới."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_minmax(0,380px)]">
          {/* Options */}
          <div className="space-y-3">
            {options.map((opt, i) => (
              <button
                key={opt.number}
                onClick={() => setActive(i)}
                className={cn(
                  'flex w-full items-start gap-4 rounded-[16px] border p-5 text-left transition-all duration-200',
                  active === i
                    ? 'border-[#4457ff] bg-[#eef0ff] shadow-sm'
                    : 'border-black/5 bg-white hover:border-[#c7d0ff]'
                )}
              >
                <span
                  className={cn(
                    'flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[14px] font-bold transition-colors',
                    active === i ? 'bg-[#4457ff] text-white' : 'bg-[#f1f2f6] text-[#767b84]'
                  )}
                  style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
                >
                  {opt.number}
                </span>
                <span className="pt-1 text-[15px] font-medium leading-[1.45] text-[#20232b]">
                  {opt.desc}
                </span>
              </button>
            ))}
          </div>

          {/* Recommendation panel */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[20px] border border-black/5 bg-[#f7f8fb] p-6 lg:p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#4457ff]">
                GỢI Ý CỦA VLABEL
              </p>
              {current ? (
                <div className="mt-4">
                  <span className="inline-flex rounded-full bg-[#4457ff] px-3 py-1 text-[13px] font-semibold text-white">
                    {current.pkg}
                  </span>
                  <p className="mt-4 text-[15px] leading-[1.6] text-[#20232b]">{current.reason}</p>
                  <a
                    href="/#tu-van"
                    className="mt-6 inline-flex h-11 items-center justify-center rounded-[12px] bg-[#4457ff] px-6 text-[14px] font-semibold text-white transition-colors hover:bg-[#4f5fd7]"
                  >
                    Nhận tư vấn cho gói này
                  </a>
                </div>
              ) : (
                <p className="mt-4 text-[15px] leading-[1.6] text-[#4f5562]">
                  Chọn một mô tả bên cạnh, Vlabel gợi ý gói và lý do. Hoặc điền form bên dưới để được khảo sát.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
