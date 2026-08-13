# FeaturesGrid Specification

## Overview
- **Target file:** `src/components/sites/feedhive-com-669d1bb4/root-8a5edab2/FeaturesGrid.tsx`
- **Interaction model:** Static (large grid of feature icons, some highlighted in colored cards)

## DOM Structure
```
section
  div.mx-auto.max-w-[1188px].px-4.lg:px-8
    div.text-center.mb-10
      h2 "Advanced features professional marketers love."
    div.grid (multi-column grid of feature items)
      [Regular items: icon + label, small, muted]
      [Highlighted items: pink/purple card with bigger icon, title, description]
```

## Grid Layout
- ~10 columns on desktop (or flexible grid with ~80-100px per item)
- Mix of regular small items and 2×2 highlighted feature cards
- 4 highlighted features: "AI Image Generation" (pink/rose bg), "Vibe Marketing" (purple bg), "Post Recycling" (yellow/green bg), "Link Shortening" (teal/blue bg)

## Regular Feature Item Style
- width: ~90px; display: flex; flexDirection: column; alignItems: center; gap: 8px
- icon: SVG 24px, color: #4f5562 (muted gray)
- label: 12px, color: #4f5562, textAlign: center, fontWeight: 500

## Highlighted Feature Card Style
- spans ~2×2 grid cells
- backgroundColor: varies (rose/pink for AI Image Gen, purple/lavender for Vibe Marketing, etc.)
- borderRadius: 16px; padding: 20px 24px; display: flex; flexDirection: column; gap: 12px
- icon: 32-40px, tinted to match card theme
- title: 18-20px, fontWeight: 700, Plus Jakarta Sans, color: #20232b
- description: 13-14px, color: #4f5562, lineHeight: 20px

## Feature List (all items, in order)
Row 1: Vibe Marketing, Smart Scheduling, Post Conditions, Generate Hashtags, Recycle Posts, Grid Preview, IG Carousels, FB Stories/Reels, Instagram Stories, Link Shortening
Row 2: AI Image Gen, Dynamic Variables, AI Assistant, [AI Image Generation card — large], [Vibe Marketing card — large], Content Planner, Social Inbox, Approval Flows
Row 3: Automation, Media Library, Brand Templates, [Post Recycling card], [Link Shortening card], Performance Stats, Best Time Slots, Campaign Tags
Row 4: Cross-Posting, AI Captions, UGC Scripts, Comment Triggers, Performance Prediction, Workspace Access
Row 5: Idea Generation, Approval Flows, Custom Fields, Content Calendar, Link Tracking, Bulk Scheduling, Video Thumbs, Post Preview, Team Roles, Content Library

## Highlighted Cards Content

### AI Image Generation (rose/pink bg: #fef3f5 or similar)
- Title: "AI Image Generation"
- Desc: "Generate fresh visuals inside FeedHive with Flux Pro and Nano Banana 2."
- Icon: sparkles/stars icon in rose

### Vibe Marketing (purple/lavender bg)
- Title: "Vibe Marketing"
- Desc: "Our built-in AI agent will help you turn random thoughts into powerful posts."
- Icon: chat bubble icon in purple

### Post Recycling (amber/green bg)
- Title: "Post Recycling"
- Desc: "Let FeedHive suggest the best posts to recycle, and post them automatically."

### Link Shortening (teal/blue bg)
- Title: "Link Shortening"
- Desc: "Automatically shorten all your links with LinkDrip. No need to..."

## Computed Styles

### H2
- Plus Jakarta Sans, 44-52px, weight 700-800; color: #20232b; letterSpacing: -0.03em; textAlign: center

### Grid container
- display: grid; grid-template-columns: repeat(auto-fill, minmax(80px, 1fr))
- border: 1px solid rgba(0,0,0,0.05) on each cell (creating grid lines)
- gap: 0 (borders create visual separation)

## Responsive Behavior
- Desktop: many columns (~10)
- Mobile: 3-4 columns, highlighted cards still span 2 cells
