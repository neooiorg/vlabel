# TrustedByBrands Specification

## Overview
- **Target file:** `src/components/sites/feedhive-com-669d1bb4/root-8a5edab2/TrustedByBrands.tsx`
- **Interaction model:** Static

## DOM Structure
```
section.bg-white.px-4.py-7.sm:px-6.lg:px-8.lg:py-8
  div.mx-auto.max-w-[1188px]
    div.flex.items-center.gap-8.lg:gap-12 (or grid)
      p "Trusted by the best"
      div (logo images — flex row, evenly spaced)
        img beehiiv
        img fauna
        img prismic
        img rapidapi
        img riverside
        img thirdweb
```

## Computed Styles

### Section
- backgroundColor: rgb(255,255,255)
- padding: 28px 16px (py-7 px-4) / lg: 32px 32px

### "Trusted by the best" label
- fontSize: 12-13px; fontWeight: 600; letterSpacing: 0.06em; textTransform: uppercase
- color: rgb(79,85,98) = #4f5562
- whiteSpace: nowrap

### Logo images
- height: 20-28px (varies by logo); width: auto; filter: grayscale(100%) or low opacity
- maxWidth: 96px mobile, 104px sm, none lg

## Assets
- beehiiv: `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/beehiiv.webp`
- fauna: `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/fauna.webp`
- prismic: `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/prismic.webp`
- rapidapi: `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/rapidapi.webp`
- riverside: `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/riverside.webp`
- thirdweb: `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/thirdweb.webp`

## Text Content
- Label: "Trusted by the best"

## Responsive Behavior
- Desktop: single row, all logos + label
- Mobile: may stack or overflow-scroll
