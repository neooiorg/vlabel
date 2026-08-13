'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const tabs = [
  {
    label: 'Composer',
    image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/hero-composer.webp',
    alt: 'Composer interface preview',
  },
  {
    label: 'AI Assistant',
    image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/hero-ai-assistant.webp',
    alt: 'AI Assistant interface preview',
  },
  {
    label: 'Automation',
    image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/hero-automation.webp',
    alt: 'Automation interface preview',
  },
  {
    label: 'Post Conditions',
    image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/hero-post-conditions.webp',
    alt: 'Post Conditions interface preview',
  },
  {
    label: 'Smart Scheduling',
    image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/hero-smart-scheduling.webp',
    alt: 'Smart Scheduling interface preview',
  },
  {
    label: 'Social Inbox',
    image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/hero-social-inbox.webp',
    alt: 'Social Inbox interface preview',
  },
  {
    label: 'Recycle Suggestions',
    image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/hero-recycle-suggestions.webp',
    alt: 'Recycle Suggestions interface preview',
  },
  {
    label: 'Analytics',
    image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/analytics-hero.png',
    alt: 'Analytics dashboard preview',
  },
  {
    label: 'AI Design Library',
    image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/hero-ai-design-library.webp',
    alt: 'AI Design Library interface preview',
  },
  {
    label: 'OpenClaw',
    image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/hero-telegram.webp',
    alt: 'OpenClaw workflow preview',
  },
  {
    label: 'Claude Code',
    image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/claude-code-terminal.webp',
    alt: 'Claude Code workflow preview',
  },
  {
    label: 'API / CLI',
    image: '/sites/feedhive-com-669d1bb4/root-8a5edab2/images/feedhive-api-cli-terminal.webp',
    alt: 'API and CLI workflow preview',
  },
]

const bulletItems = [
  {
    bold: 'Create with AI.',
    rest: ' Generate content that fits your tone-of-voice & brand.',
  },
  {
    bold: 'Automate.',
    rest: ' Create advanced workflows and posting conditions.',
  },
  {
    bold: 'Collaborate.',
    rest: ' Work together with humans and AI agents in one workspace.',
  },
]

export function HeroSection() {
  const [activeTab, setActiveTab] = useState('Composer')

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
              <span className="cta-gradient-ring cta-gradient-ring-pill inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white px-3 py-1.5 text-[13px] font-[500] text-[#20232b] shadow-sm">
                Introducing FeedHive
                <span className="rounded-full bg-[#eef0ff] px-2 py-0.5 text-[11px] font-[600] text-[#4457ff]">
                  v2.0
                </span>
              </span>
            </div>

            {/* H1 */}
            <h1 className="font-[var(--font-plus-jakarta-sans)] text-[48px] font-[600] leading-[1.02] tracking-[-0.035em] text-[#23252b] lg:text-[55px]">
              Social media using
              <br />
              <span className="text-[#4457ff]">Automation &amp; AI Agents.</span>
            </h1>

            {/* Dashed underline under "Automation & AI Agents." */}
            <div
              className="mt-1 h-[3px] w-full max-w-[470px] lg:max-w-[610px]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(90deg, #4457ff 0, #4457ff 8px, transparent 8px, transparent 14px)',
                backgroundSize: '14px 3px',
              }}
            />

            {/* Bullet checklist */}
            <ul className="mt-6 space-y-2.5">
              {bulletItems.map((item) => (
                <li
                  key={item.bold}
                  className="flex items-start gap-3 text-[15px] text-[#20232b]"
                >
                  <span className="mt-0.5 flex-shrink-0 text-[#4457ff]">✓</span>
                  <span>
                    <strong className="font-[600]">{item.bold}</strong>
                    {item.rest}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8 flex items-center gap-5">
              <div className="cta-gradient-ring inline-flex rounded-[15px]">
                <a
                  href="https://app.feedhive.com/signup"
                  className="inline-flex h-[50px] items-center justify-center rounded-[15px] bg-[#4457ff] px-8 text-[15px] font-[500] tracking-[-0.03em] text-white transition-colors duration-300 hover:bg-[#4f5fd7]"
                >
                  Get started for free
                </a>
              </div>
              <div className="space-y-0.5 text-[13px] leading-5 tracking-[-0.015em] text-[#767b84]">
                <p>Try for free.</p>
                <p>Cancel anytime.</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative flex min-h-[430px] items-start justify-end pt-2 lg:min-h-[680px] lg:pt-6">
            <div className="relative w-[125%] overflow-hidden rounded-l-[16px]">
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
          <p className="mb-4 text-[11px] font-[700] uppercase tracking-[0.08em] text-[#767b84]">
            BUILD A CONTENT MACHINE FOR SOCIAL.
          </p>
          {/* Horizontally scrollable tabs on mobile */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={cn(
                  'rounded-full border px-3.5 py-1.5 text-[13px] font-[500] transition-colors duration-200',
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
