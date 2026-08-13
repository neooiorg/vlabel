# FeedHive Design Tokens

## Fonts
- **Body:** Inter (via `next/font/google`, weight: 400 500 600)
- **Headings:** Plus Jakarta Sans (via `next/font/google`, weight: 400 500 600 700 800)

## Colors
```
--primary: #4457FF           /* rgb(68, 87, 255) — blue CTA */
--primary-hover: #4F5FD7     /* rgb(79, 95, 215) */
--foreground: #20232b        /* rgb(32, 35, 43) — body text */
--foreground-heading: #23252b /* rgb(35, 37, 43) — heading text */
--foreground-secondary: #4f5562 /* rgb(79, 85, 98) */
--foreground-muted: #767b84
--foreground-label: #2d2f35  /* rgb(45, 47, 53) — announcement bar */
--background: #ffffff
--background-light: #f4f3f2  /* rgb(244, 243, 242) — announcement bar */
--background-card: #f7f7f9   /* rgb(247, 247, 249) */
--border: #dfdfe4            /* rgb(223, 223, 228) */
--border-subtle: oklab(0 0 0 / 0.05)
--dark-surface: #17191f      /* rgb(23, 25, 31) */
--dark-surface-2: #27293a    /* rgb(39, 43, 52) */
```

## Gradient (CTA section)
```
linear-gradient(135deg, #4e7cff 0%, #9f4bff 24%, #d54a96 58%, #ed7d3f 100%)
```
With radial-gradient overlays:
```
radial-gradient(circle at 12% 22%, rgba(255,255,255,0.55), transparent 17%)
radial-gradient(circle at 82% 20%, rgba(255,255,255,0.14), transparent 22%)
radial-gradient(circle at 78% 100%, rgba(86,74,255,0.5), transparent 24%)
```

## Typography
- **H1:** Plus Jakarta Sans, 55px, weight 600, line-height 56.1px (1.02), letter-spacing -1.925px (-0.035em)
- **H2 large:** Plus Jakarta Sans, ~52-64px, weight 700-800, tight letter-spacing
- **Body:** Inter, 16px, weight 400, line-height 24px
- **Small label:** Inter, 11px desktop 14px, weight 600, tracking -0.01em
- **Nav links:** Inter, 16px, weight 400
- **Button:** Inter, 15px, weight 500, tracking -0.03em
- **Muted/secondary:** 13px, line-height 20px, tracking -0.015em

## Spacing Scale (Tailwind v4)
Common spacing on this page: 4 8 10 12 14 16 20 24 28 32 40 46 56 84 92px

## Border Radius
- Buttons: 11px (Sign Up btn), 15px (Get started CTA)
- Cards: 16-34px
- Badge: 9999px (rounded-full)
- Hero image wrapper: 16px left-side rounded

## Shadows
- Card/header on white: no shadow, border instead
- Dropdown: box-shadow with rgba(0,0,0,0.1)

## Button Styles
### Primary (Sign Up)
- bg: #4457FF, color: #fff
- border-radius: 11px, padding: 0 18px, height: auto
- font: 14px 500 Inter

### Hero CTA (Get started for free)
- bg: #4457FF, color: #fff
- border-radius: 15px, padding: 0 32px, height: 50px
- font: 15px 500 Inter, tracking: -0.03em
- Has `cta-gradient-ring` animation wrapper

### Ghost/Outline (Login)
- bg: transparent, color: foreground
- border: 1px solid #dfdfe4
- border-radius: 11px

### White CTA (in gradient card)
- bg: #fff, color: #24262d
- border-radius: 16px, padding: 0 28px
- font: 16px 600, height ~52px
