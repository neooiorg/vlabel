# Navigation Specification

## Overview
- **Target file:** `src/components/sites/feedhive-com-669d1bb4/root-8a5edab2/Navigation.tsx`
- **Interaction model:** Static (not sticky)

## DOM Structure
```
header.relative.z-30.px-4.lg:px-8
  div (max-w-[1188px] mx-auto flex items-center justify-between)
    a (logo link)
      img src="/sites/feedhive-com-669d1bb4/shared/logo.webp" alt="FeedHive" h-8
    nav (flex gap-7 items-center)
      a "Product" + chevron ▾
      a "Socials" + chevron ▾
      a "Learn" + chevron ▾
      a "Pricing"
    div (flex gap-2 items-center)
      a "Login" (ghost btn)
      a "Sign Up" (primary btn)
```

## Computed Styles

### Header container
- position: relative
- zIndex: 30
- padding: 16px 16px 16px / lg: 20px 32px
- backgroundColor: transparent (rgba(0,0,0,0))

### Inner wrapper
- display: flex
- justifyContent: space-between
- alignItems: center
- maxWidth: 1188px
- margin: 0 auto

### Logo image
- height: 32px (h-8), width: auto
- display: block

### Nav links (Product, Socials, Learn, Pricing)
- display: flex; gap: 28px; alignItems: center
- fontSize: 16px; fontWeight: 400; fontFamily: Inter
- color: rgb(32, 35, 43) = #20232b
- Chevrons after Product, Socials, Learn (▾ icon)

### Login button (ghost)
- backgroundColor: transparent
- border: 1px solid rgb(223, 223, 228) = #dfdfe4
- borderRadius: 11px
- padding: 0 18px; height: 36px
- fontSize: 14px; fontWeight: 500; color: #20232b

### Sign Up button (primary)
- backgroundColor: rgb(68, 87, 255) = #4457FF
- color: #ffffff
- borderRadius: 11px
- padding: 0 18px; height: 36px
- fontSize: 14px; fontWeight: 500

## Responsive Behavior
- Desktop: full nav with all links + both buttons
- Mobile/tablet: hamburger or simplified nav (hide nav links, show only logo + Sign Up)
- lg breakpoint: full layout visible

## States & Behaviors
- Nav link hover: opacity change or color shift
- Buttons have transition-colors duration-300
- Sign Up hover: bg changes to #4F5FD7
