# AgenticWorkflows Specification

## Overview
- **Target file:** `src/components/sites/feedhive-com-669d1bb4/root-8a5edab2/AgenticWorkflows.tsx`
- **Interaction model:** Static (large feature cards + small feature list)

## DOM Structure
```
section
  div.mx-auto.max-w-[1188px].px-4.lg:px-8
    div.text-center.mb-10
      p.label "AGENTIC WORKFLOWS"
      h2 "Your agentic social media scheduling tool."
    div.grid.grid-cols-1.gap-4.lg:grid-cols-2 (2 large feature cards)
      card1: "Automation workflows" + workflow UI mockup image
      card2: "OpenClaw skills" + chat UI mockup image
      card3: "Claude Code" + terminal UI mockup
      card4: "API / CLI" + code snippet mockup
    div.grid.grid-cols-1.gap-6.sm:grid-cols-3.mt-10 (3 small feature items)
      item: icon + "Automation" + desc
      item: icon + "OpenClaw skills" + desc
      item: icon + "Zapier integration" + desc
```

## Large Feature Cards

### Card 1: Automation workflows
- backgroundColor: #fff or light card bg
- border: 1px solid rgba(0,0,0,0.06); borderRadius: 20px; padding: 24px
- Title: "Automation workflows" (16-18px, bold, dark)
- Description: "Set up automation workflows and build advanced content pipelines to boost your productivity."
- Image: workflow UI mockup (feature-image-4.webp or similar)

### Card 2: OpenClaw skills
- Similar card styling
- Title: "OpenClaw skills"
- Description: "Install the FeedHive skills so your OpenClaw agent can take full control and operate the tool for you."
- Image: chat/messaging UI mockup

### Card 3: Claude Code
- Title: "Claude Code"
- Description: "Create, organize, and schedule content directly from your Claude Code workspace."
- Image: `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/claude-code-terminal.webp` (terminal screenshot)

### Card 4: API / CLI
- Title: "API / CLI"
- Description: "Connect FeedHive to custom scripts, developer tools, and terminal-first automations."
- Image: Code snippet with API call (`const response = await fetch('https://api.feedhive.com/posts', {...})`)

## Small Feature Items (3 below)
Each has: icon (SVG, blue/purple tinted), title (16px bold), description (14px gray)
1. Automation — "Built-in visual automation workflow builder to create custom pipelines."
2. OpenClaw skills — "Setup FeedHive with OpenClaw using a single command."
3. Zapier integration — "Connect FeedHive with +9000 apps using Zapier."

## Computed Styles

### Section label
- color: #4457FF; fontSize: 11px; fontWeight: 700; letterSpacing: 0.1em

### H2
- Plus Jakarta Sans, ~44px, weight 700; color: #20232b; letterSpacing: -0.03em; textAlign: center

### Large cards
- backgroundColor: #f7f7f9 or #fff; borderRadius: 20px
- border: 1px solid rgba(0,0,0,0.05-0.06)
- overflow: hidden; padding: 24px 24px 0 (image flush to bottom)

### Card title
- fontSize: 18px; fontWeight: 700; color: #20232b; fontFamily: Plus Jakarta Sans

### Card description
- fontSize: 14-15px; color: #4f5562; lineHeight: 22px

## Assets
- Claude Code card image: `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/claude-code-terminal.webp`
- API/CLI card image: `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/feedhive-api-cli-terminal.webp`
- feature-image-4: `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/feature-image-4.webp`
- feature-image-5: `/sites/feedhive-com-669d1bb4/root-8a5edab2/images/feature-image-5.webp`

## Responsive Behavior
- Desktop: 2-col grid for large cards
- Mobile: single column stacked
