# LeadFlowOS

LeadFlowOS is an AI-powered lead intelligence and prioritization product concept built as a product-management portfolio project.

## Product problem

Growth and sales teams often have more leads than they can meaningfully prioritize. Existing workflows rely on static lead lists, scattered engagement data, and manual judgment. That creates slow follow-up, inconsistent qualification, and missed high-intent opportunities.

## Product hypothesis

If teams can see a transparent lead score, the signals behind it, and a recommended next action in one place, they can prioritize better and move high-intent accounts through the funnel faster.

## MVP

- Executive dashboard with pipeline KPIs
- AI-generated opportunity brief
- Searchable lead workspace
- Lead scoring and intent labels
- Explainable scoring rationale
- Recommended next-best action
- Funnel analysis
- Source conversion analytics
- PM experiment recommendation

## PM thinking

### Primary persona
Revenue Operations / Growth lead at a B2B SaaS company.

### Key pain points
1. Too many leads and no reliable way to prioritize them.
2. High-intent signals are scattered across systems.
3. Sales response time is inconsistent.
4. Teams cannot easily explain why one lead should be prioritized over another.

### North-star metric
Percentage of qualified leads that reach a demo.

### Supporting metrics
- Time to qualification
- High-intent lead response time
- Qualified → demo conversion
- Demo → won conversion
- Conversion rate by acquisition source

### Example experiment
**Hypothesis:** Routing score-80+ leads to a two-hour response SLA with AI-personalized context will improve qualified → demo conversion.

**Primary metric:** Qualified → demo conversion rate  
**Guardrail:** Sales workload per rep  
**Segment:** ICP-fit mid-market and enterprise accounts

## Tech stack

- Next.js
- React
- TypeScript
- Recharts
- CSS

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Portfolio positioning

This project is designed to demonstrate both product and technical thinking: problem framing, prioritization, measurable success metrics, experimentation, explainable AI UX, and a working product prototype.
