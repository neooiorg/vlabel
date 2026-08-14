'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { SectionHeading } from './SectionHeading'

const bullets = [
  'Một QR: truy xuất + nhãn điện tử + nhãn phụ + doanh nghiệp',
  'Chuẩn GS1 EPCIS + tuân thủ NĐ 37/43, có sẵn',
  'Đa khách hàng cho địa phương, kê khai offline cho thực địa',
]

export function GradientCTA() {
  const [rep, setRep] = useState<'business' | 'local'>('business')

  return (
    <section id="tu-van" className="scroll-mt-24 bg-white px-4 pb-10 pt-7 sm:px-6 sm:pb-14 lg:px-8 lg:pb-[84px] lg:pt-10">
      <div className="mx-auto max-w-[1248px]">
        <div className="relative overflow-hidden rounded-[34px] bg-[#4457ff] px-6 py-10 sm:px-10 sm:py-12 lg:px-[56px] lg:py-[56px]">
          {/* Subtle light overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(ellipse at 15% 30%, rgba(255,255,255,0.12), transparent 50%), radial-gradient(ellipse at 85% 70%, rgba(30,20,100,0.25), transparent 50%)',
            }}
          />

          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_minmax(0,480px)] lg:gap-14">
            {/* Left — copy */}
            <div className="max-w-[520px]">
              <SectionHeading
                align="left"
                tone="light"
                eyebrow="09 · BẮT ĐẦU"
                title="Gửi thông tin sản phẩm, Vlabel liên hệ trong ngày."
              />
              <p className="mt-4 text-[16px] leading-[1.6] text-white/85">
                Vlabel khảo sát và báo giá trong 24 giờ — cho doanh nghiệp và địa phương.
              </p>
              <ul className="mt-6 space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[15px] text-white/90">
                    <span className="mt-0.5 flex-shrink-0 text-white">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — form */}
            <div className="rounded-[22px] bg-white p-6 shadow-[0_28px_60px_-24px_rgba(20,23,45,0.45)] sm:p-7">
              <p className="text-[13px] font-semibold text-[#4f5562]">Tôi đại diện cho…</p>
              <div className="mt-2 grid grid-cols-2 gap-2 rounded-[12px] bg-[#f1f2f6] p-1">
                {(
                  [
                    { key: 'business', label: 'Doanh nghiệp' },
                    { key: 'local', label: 'Địa phương' },
                  ] as const
                ).map((opt) => (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setRep(opt.key)}
                    className={cn(
                      'rounded-[9px] py-2 text-[14px] font-semibold transition-colors',
                      rep === opt.key
                        ? 'bg-white text-[#4457ff] shadow-sm'
                        : 'text-[#767b84] hover:text-[#20232b]'
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <form className="mt-5 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <Field label="Họ và tên *" placeholder="Nguyễn Văn A" />
                <Field label="Đơn vị / tổ chức *" placeholder="Công ty / HTX / Sở…" />
                <Field label="Email hoặc điện thoại *" placeholder="you@email.com · 09xx xxx xxx" />
                <div>
                  <label className="mb-1.5 block text-[13px] font-medium text-[#20232b]">Nhu cầu</label>
                  <textarea
                    rows={3}
                    placeholder="Loại sản phẩm, số SKU, mong muốn về truy xuất / nhãn điện tử…"
                    className="w-full resize-none rounded-[12px] border border-[#dfdfe4] px-4 py-2.5 text-[14px] text-[#20232b] outline-none transition-colors placeholder:text-[#9fa3af] focus:border-[#4457ff]"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-[50px] w-full items-center justify-center rounded-[14px] bg-[#20232b] text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-[#2e3240]"
                >
                  Gửi yêu cầu tư vấn
                </button>
                <p className="text-center text-[12px] font-semibold uppercase tracking-[0.06em] text-[#9fa3af]">
                  Hoặc gọi 0369 777 713 · contact@vlabel.vn
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-[13px] font-medium text-[#20232b]">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-[12px] border border-[#dfdfe4] px-4 py-2.5 text-[14px] text-[#20232b] outline-none transition-colors placeholder:text-[#9fa3af] focus:border-[#4457ff]"
      />
    </div>
  )
}
