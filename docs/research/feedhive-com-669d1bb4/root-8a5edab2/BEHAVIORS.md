# FeedHive Homepage - Behavior Bible

## Interaction Model Summary
- **Header:** STATIC — does NOT change on scroll, no sticky behavior
- **Hero tabs:** CLICK-DRIVEN — 12 tab buttons switch the right-side product screenshot
- **All other sections:** STATIC — no scroll animations detected
- **No smooth scroll library** (Lenis/Locomotive) detected

## Behavior 1: Hero Feature Tab Switching
- **Trigger:** Click on any of the 12 tab buttons
- **Element:** Buttons inside `section.relative.isolate > section > [grid] > [right-col]`
- **Tabs and images:**
  - Composer → `/images/hero-composer.webp`
  - AI Assistant → `/images/hero-ai-assistant.webp`
  - Automation → `/images/hero-automation.webp`
  - Post Conditions → `/images/hero-post-conditions.webp`
  - Smart Scheduling → `/images/hero-smart-scheduling.webp`
  - Social Inbox → `/images/hero-social-inbox.webp`
  - Recycle Suggestions → `/images/hero-recycle-suggestions.webp`
  - Analytics → `/images/analytics-hero.png`
  - AI Design Library → `/images/hero-ai-design-library.webp`
  - OpenClaw → `/images/hero-telegram.webp`
  - Claude Code → `/images/claude-code-terminal.webp`
  - API / CLI → `/images/feedhive-api-cli-terminal.webp`
- **Active state:** Active tab gets a highlighted style (blue bg or border), inactive tabs are muted
- **Image transition:** Opacity fade between images (likely `transition-opacity duration-300`)
- **Interaction model:** CLICK-DRIVEN

## Behavior 2: CTA Gradient Ring Animation
- **Trigger:** CSS `@keyframes cta-gradient-shift` — animates `--cta-border-angle` from 0deg to 360deg
- **Duration:** 2.2s linear infinite (paused by default, plays on hover via `.cta-gradient-ring:hover::before`)
- **Effect:** Rotating conic-gradient border: `conic-gradient(from var(--cta-border-angle), #4f7dff, #7165ff, #d650ff, #ff7f59, #4f7dff)`
- **Used on:** "Introducing FeedHive v2.0" badge and "Get started for free" button

## Behavior 3: Button Hover States
- Primary button: `bg-primary hover:bg-primary-hover` — transitions from `#4457FF` to `#4F5FD7`
- Transition: `transition-colors duration-300`
- Navigation links: likely opacity or color change on hover

## Behavior 4: How It Works — Auto-cycling steps
- The 3 step images (cycle-image-alt-2-1/2/3.webp) auto-cycle with a timer
- Step numbers 01, 02, 03 with progress indicators

## Responsive Breakpoints (Tailwind)
- `sm:` = 640px
- `lg:` = 1024px  
- `xl:` = 1280px
- Mobile: 390px target
- Desktop: 1440px target

## No Scroll-Driven Animations
Confirmed: No IntersectionObserver, no scroll-snap, no scroll-timeline effects. Elements are visible immediately.
