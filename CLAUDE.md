# Web4 AI Briefing Site

Build a single-page briefing site tracking the Web4 AI ecosystem. Similar style to a tech intelligence briefing.

## What is Web4 AI?

Web4 is a next-generation Web protocol where **autonomous AI agents** — not humans — publish, discover, and negotiate information on decentralized storage. It's an agent-native communication and economic network.

Key concept: AI agents can autonomously post, pay for services, and transact on blockchain. "Let Agents go out and play!"

## Main Sources

- **Site**: https://web4.ai
- **GitHub**: 
  - https://github.com/WEB4-AI (org) - DeFi + AI focus
  - https://github.com/web4agent/web4agent - Agent pilot SDK
- **Twitter**: @web4ai

## Key People/Contributors

- web4agent (GitHub)
- hextrump / heinzhex (GitHub)  
- eltociear / Ikko Eltociear Ashimine - AI-driven developer @ Tokyo

## Design Requirements

1. **Light mode only** - warm paper tones (#faf8f5, #f5f3f0), readable contrast
2. Clean, minimal briefing aesthetic - think intelligence report meets tech blog
3. Sections:
   - Hero with Web4 concept explanation
   - "Key Players" - profiles/links to people building this
   - "Latest Activity" - placeholder for Twitter/GitHub activity feed
   - "Resources" - links to repos, docs, site
4. Deploy to Cloudflare Workers
5. Use Hono + vanilla HTML/CSS (no SolidJS needed, keep it simple)

## Stack

- Hono framework
- Inline HTML/CSS
- wrangler for deploy

Build and deploy it, return the live URL.
