'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const IMG = '/sites/feedhive-com-669d1bb4/root-8a5edab2/images'

const tabs = [
  { label: 'Truy xuất', image: `${IMG}/hero-composer.webp`, alt: 'Giao diện thiết kế luồng truy xuất' },
  { label: 'Nhãn điện tử', image: `${IMG}/hero-ai-assistant.webp`, alt: 'Soạn nhãn điện tử' },
  { label: 'QR công khai', image: `${IMG}/hero-automation.webp`, alt: 'Trang QR công khai xác thực' },
  { label: 'Bản đồ hành trình', image: `${IMG}/hero-post-conditions.webp`, alt: 'Bản đồ hành trình sản phẩm' },
  { label: 'Đa khách hàng', image: `${IMG}/hero-smart-scheduling.webp`, alt: 'Quản lý đa khách hàng' },
  { label: 'Trợ lý dẫn dắt', image: `${IMG}/hero-social-inbox.webp`, alt: 'Trợ lý dẫn từng bước' },
  { label: 'Quản lý lô', image: `${IMG}/hero-recycle-suggestions.webp`, alt: 'Quản lý lô sản phẩm' },
  { label: 'Bảng tổng quan', image: `${IMG}/analytics-hero.png`, alt: 'Bảng tổng quan' },
  { label: 'Thư viện nhãn', image: `${IMG}/hero-ai-design-library.webp`, alt: 'Thư viện nhãn' },
  { label: 'Kê khai thực địa', image: `${IMG}/hero-telegram.webp`, alt: 'Kê khai thực địa trên di động' },
  { label: 'API / Tích hợp', image: `${IMG}/claude-code-terminal.webp`, alt: 'API và tích hợp' },
  { label: 'Nhật ký kiểm toán', image: `${IMG}/feedhive-api-cli-terminal.webp`, alt: 'Nhật ký kiểm toán' },
]

const bulletItems = [
  {
    bold: 'Truy xuất.',
    rest: ' Quét một mã QR, người tiêu dùng thấy hành trình đã ký — không cần app.',
  },
  {
    bold: 'Nhãn điện tử.',
    rest: ' Soạn nhãn theo NĐ 37/2026, hệ thống bung đúng trường bắt buộc.',
  },
  {
    bold: 'Đa khách hàng.',
    rest: ' Một nền tảng cho nhiều doanh nghiệp, hợp tác xã và địa phương.',
  },
]

export function HeroSection() {
  const [activeTab, setActiveTab] = useState('Truy xuất')

  const activeTabData = tabs.find((t) => t.label === activeTab) ?? tabs[0]

  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* PART 1: Main hero content */}
      <section className="relative overflow-hidden px-4 pb-2 pt-10 sm:px-6 lg:px-8 lg:pb-10 lg:pt-14 xl:pt-16">
        {/* Right-edge fade gradient (decorative) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-[100px] bg-gradient-to-l from-white to-transparent lg:block" />

        {/* 2-col grid */}
        <div className="mx-auto grid max-w-[1188px] items-start gap-10 lg:grid-cols-[minmax(0,620px)_minmax(0,1fr)] lg:gap-2 xl:grid-cols-[minmax(0,640px)_minmax(0,1fr)]">
          {/* LEFT COLUMN */}
          <div className="relative z-10 pt-3 lg:pt-8">
            {/* Badge */}
            <div className="mb-6 inline-flex">
              <span className="cta-gradient-ring cta-gradient-ring-pill inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white px-3 py-1.5 text-[13px] font-medium text-[#20232b] shadow-sm">
                Đa khách hàng
                <span className="rounded-full bg-[#eef0ff] px-2 py-0.5 text-[11px] font-semibold text-[#4457ff]">
                  DN + Địa phương
                </span>
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-[44px] font-medium uppercase leading-[1.06] tracking-[-0.035em] text-[#23252b] lg:text-[55px]">
              Một mã QR.
              <br />
              <span className="inline-block">
                <span className="text-[#4457ff]">Trọn nguồn gốc.</span>
                <div
                  className="mt-1 h-[3px] w-full"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(90deg, #4457ff 0, #4457ff 8px, transparent 8px, transparent 14px)',
                    backgroundSize: '14px 3px',
                  }}
                />
              </span>
            </h1>

            <p className="mt-6 max-w-[520px] text-[16px] leading-[1.6] text-[#4f5562]">
              Nhãn điện tử và truy xuất nguồn gốc cho doanh nghiệp và địa phương. Quét mã QR, người tiêu dùng thấy toàn bộ hành trình đã ký.
            </p>

            {/* Bullet checklist */}
            <ul className="mt-6 space-y-2.5">
              {bulletItems.map((item) => (
                <li
                  key={item.bold}
                  className="flex items-start gap-3 text-[15px] text-[#20232b]"
                >
                  <span className="mt-0.5 flex-shrink-0 text-[#4457ff]">✓</span>
                  <span>
                    <strong className="font-semibold">{item.bold}</strong>
                    {item.rest}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8 flex items-center gap-5">
              <div className="cta-gradient-ring inline-flex rounded-[15px]">
                <a
                  href="#tu-van"
                  className="inline-flex h-[50px] items-center justify-center rounded-[15px] bg-[#4457ff] px-8 text-[15px] font-medium tracking-[-0.03em] text-white transition-colors duration-300 hover:bg-[#4f5fd7]"
                >
                  Dùng thử / Đăng ký
                </a>
              </div>
              <div className="space-y-0.5 text-[13px] leading-5 tracking-[-0.015em] text-[#767b84]">
                <p>Dùng thử miễn phí, không cần thẻ.</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative flex min-h-[430px] items-start justify-start pt-2 lg:min-h-[600px] lg:pt-6">
            <div className="relative w-full shrink-0 overflow-hidden rounded-l-[16px] lg:w-[880px] lg:max-w-none">
              <Image
                src={activeTabData.image}
                alt={activeTabData.alt}
                width={3391}
                height={2280}
                className="h-auto w-full transition-opacity duration-300"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* PART 2: Feature tabs section */}
      <div className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1188px]">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.08em] text-[#767b84]">
            SÁU PHÂN HỆ · MỘT QR.
          </p>
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={cn(
                  'rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-200',
                  activeTab === tab.label
                    ? 'border-[#4457ff]/20 bg-[#eef0ff] text-[#4457ff]'
                    : 'border-transparent text-[#767b84] hover:text-[#20232b]'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
