import { Hono } from 'hono'

const app = new Hono()

interface Account {
  handle: string
  name: string
  bio: string
  tier: string
}

function getAccounts(): Account[] {
  return [
    // Core - Founders & Primary Builders
    { handle: '@0xSigil', name: 'Sigil Wen', bio: 'Creator of Automaton, Conway Research founder, Thiel Fellow', tier: 'Core' },
    { handle: '@ConwayResearch', name: 'Conway Research', bio: 'Permissionless infrastructure for autonomous agents', tier: 'Core' },
    { handle: '@shawmakesmagic', name: 'Shaw', bio: 'ElizaOS/ai16z creator, Milady AI builder', tier: 'Core' },
    { handle: '@AndyAyrey', name: 'Andy Ayrey', bio: 'Truth Terminal creator, AI agent pioneer', tier: 'Core' },

    // Major Endorsers - VCs, Protocol Accounts, Notable Figures
    { handle: '@beffjezos', name: 'Beff (e/acc)', bio: 'E/acc movement leader', tier: 'Endorser' },
    { handle: '@justinsuntron', name: 'H.E. Justin Sun', bio: 'TRON founder', tier: 'Endorser' },
    { handle: '@VitalikButerin', name: 'Vitalik Buterin', bio: 'Ethereum co-founder (critic)', tier: 'Endorser' },
    { handle: '@base', name: 'Base', bio: 'Coinbase L2', tier: 'Endorser' },
    { handle: '@solana', name: 'Solana', bio: 'Solana Foundation', tier: 'Endorser' },
    { handle: '@ethereum', name: 'Ethereum', bio: 'Ethereum Foundation', tier: 'Endorser' },
    { handle: '@shaunmmaguire', name: 'Shaun Maguire', bio: 'Sequoia partner', tier: 'Endorser' },
    { handle: '@eddylazzarin', name: 'Eddy Lazzarin', bio: 'a16z crypto CTO', tier: 'Endorser' },
    { handle: '@tbpn', name: 'TBPN', bio: 'Tech podcast', tier: 'Endorser' },
    { handle: '@pmarca', name: 'Marc Andreessen', bio: 'a16z co-founder', tier: 'Endorser' },

    // Builders - Infrastructure & Agent Projects
    { handle: '@otonix_tech', name: 'OTONIX', bio: 'Building Web 4.0 infrastructure', tier: 'Builder' },
    { handle: '@OrbitAI_OAI', name: 'Orbit AI', bio: 'Decentralized AI Cloud in orbit', tier: 'Builder' },
    { handle: '@eigencloud', name: 'EigenCloud', bio: 'Verifiable infrastructure for AI agents', tier: 'Builder' },
    { handle: '@inteliose', name: 'Inteliose', bio: 'Agent-native infrastructure', tier: 'Builder' },
    { handle: '@istudycharts', name: 'LennoX Cartel', bio: 'Built AgentV2 autonomous AI launchpad', tier: 'Builder' },
    { handle: '@aixbt_agent', name: 'aixbt', bio: 'AI crypto analyst agent on Virtuals/Base', tier: 'Builder' },
    { handle: '@0xyoussea', name: 'Youss', bio: 'Testing Automaton framework on Base', tier: 'Builder' },
    { handle: '@cryptokong30', name: 'CryptoKong30', bio: 'Created autonomous agent Molly2', tier: 'Builder' },
    { handle: '@elizaOS', name: 'ElizaOS', bio: 'Open-source AI agent framework', tier: 'Builder' },
    { handle: '@eliza__ok', name: 'Eliza', bio: 'Live autonomous agent on X', tier: 'Builder' },
    { handle: '@virtuals_io', name: 'Virtuals Protocol', bio: 'Tokenized AI agent platform on Base', tier: 'Builder' },
    { handle: '@freysa_ai', name: 'Freysa', bio: 'AI agent with self-custody wallet', tier: 'Builder' },
    { handle: '@truth_terminal', name: 'Truth Terminal', bio: 'Andy Ayrey\'s viral AI agent', tier: 'Builder' },
    { handle: '@bankrbot', name: 'Bankr', bio: 'AI agent for crypto trading on Base/Solana', tier: 'Builder' },
    { handle: '@0xzerebro', name: 'Zerebro', bio: 'Autonomous AI agent', tier: 'Builder' },
    { handle: '@luna_virtuals', name: 'Luna', bio: 'Virtuals Protocol AI agent', tier: 'Builder' },
    { handle: '@clawdbotatg', name: 'Clawd', bio: 'ERC-8004 agent registration', tier: 'Builder' },
    { handle: '@clanker_world', name: 'Clanker', bio: 'Agent token launcher', tier: 'Builder' },
    { handle: '@konnex_world', name: 'Konnex', bio: 'L1 for autonomous robots, PoPW', tier: 'Builder' },
    { handle: '@Talus_Labs', name: 'Talus', bio: 'AI agent infrastructure, Polychain-backed', tier: 'Builder' },
    { handle: '@wardenprotocol', name: 'Warden Protocol', bio: 'AI-powered L1 for autonomous apps', tier: 'Builder' },
    { handle: '@Soly_AI', name: 'Soly AI', bio: 'Decentralized AI agent framework on Solana', tier: 'Builder' },
    { handle: '@Butler_Agent', name: 'Butler', bio: 'Virtuals Protocol agent coordinator', tier: 'Builder' },
    { handle: '@dexteraiagent', name: 'Dexter Agent', bio: 'On-chain AI agent tracker', tier: 'Builder' },
    { handle: '@agenttech', name: 'AgentPay', bio: 'AI agent payment infrastructure', tier: 'Builder' },
    { handle: '@tator_trader', name: 'Tator', bio: 'AI trading agent, 24+ chains', tier: 'Builder' },
    { handle: '@Clawmode', name: 'Claw Mode', bio: 'AI agent DeFi platform', tier: 'Builder' },
    { handle: '@t54ai', name: 'T54', bio: 'x402 facilitator on XRPL', tier: 'Builder' },

    // Analysts & Content - Media, Researchers, Critics
    { handle: '@decryptmedia', name: 'Decrypt', bio: 'Morning Minute: Web 4.0 coverage', tier: 'Analyst' },
    { handle: '@BSCNews', name: 'BSCN', bio: 'Covered Vitalik response', tier: 'Analyst' },
    { handle: '@KobeissiLetter', name: 'The Kobeissi Letter', bio: 'Market impact analysis', tier: 'Analyst' },
    { handle: '@CCNDotComNews', name: 'CCN', bio: 'AI agent risk analysis', tier: 'Analyst' },
    { handle: '@fchollet', name: 'François Chollet', bio: 'Keras creator', tier: 'Analyst' },
    { handle: '@gigiz_eth', name: 'GiGi', bio: 'Chinese-language Web 4.0 analysis', tier: 'Analyst' },
    { handle: '@Tokyo_Crypto_', name: '東京Crypto研究所', bio: 'Japanese analysis', tier: 'Analyst' },
    { handle: '@apilpirman', name: 'Apil', bio: 'Indonesian influencer, viral autonomous AI thread', tier: 'Analyst' },
    { handle: '@zkfudo', name: 'zukafudo', bio: 'Indonesian Web 4.0 explainer', tier: 'Analyst' },
    { handle: '@thecryptoskanda', name: '加密韋馱', bio: 'Ponzi Industrial Revolution article', tier: 'Analyst' },
    { handle: '@Web3Tashan', name: '塔山', bio: 'Chinese analyst covering Web 4.0', tier: 'Analyst' },
    { handle: '@ArielFrischer', name: 'Ariel Frischer', bio: 'Automaton survival analysis', tier: 'Analyst' },
    { handle: '@ChrisJamesUSA', name: 'Chris James', bio: 'Early autonomous AI thesis', tier: 'Analyst' },
    { handle: '@bnox', name: 'Clo Willaerts', bio: 'Web of autonomous action thesis', tier: 'Analyst' },
    { handle: '@TomPolakow', name: 'Tom', bio: 'Automaton vs Silas comparison', tier: 'Analyst' },
    { handle: '@oCYBERDOGo', name: 'CYBERDOG', bio: 'Safety/alignment critic', tier: 'Analyst' },
    { handle: '@VeritasDYOR', name: 'Veritas Research', bio: 'Conway critic - vendor lock-in analysis', tier: 'Analyst' },
    { handle: '@0xarithmos', name: 'Arithmos', bio: 'AI agent security researcher', tier: 'Analyst' },
    { handle: '@imrrathi', name: 'imrrathi', bio: 'x402 protocol deep dive', tier: 'Analyst' },
    { handle: '@BigHand_Btc', name: 'BigHand', bio: 'Chinese Conway/Automaton analysis', tier: 'Analyst' },
    { handle: '@0xave', name: 'Xave Meegan', bio: 'Agent data layer thesis', tier: 'Analyst' },
    { handle: '@JAFFYJEE', name: 'JAFFY JEE', bio: 'Agent-first architecture explainer', tier: 'Analyst' },
    { handle: '@EthereumDenver', name: 'ETHDenver', bio: 'x402 AI payments talk', tier: 'Analyst' },
    { handle: '@Flippix_sol', name: 'Flippix', bio: 'Vitalik pushback coverage', tier: 'Analyst' },
    { handle: '@growwitai', name: 'Grow wit AI', bio: 'Automaton explainer videos', tier: 'Analyst' },
    { handle: '@traviskellogg1', name: 'Travis Kellogg', bio: 'ElizaOS x402 integration dev', tier: 'Analyst' },

    // Token Ecosystem - Community & Token Projects
    { handle: '@AutomatonMaxi', name: 'AutoMaxi', bio: '$AUTOMATON community', tier: 'Token' },
    { handle: '@Wisemenmentors', name: 'The Wisemen Alpha', bio: '$74K creator fees from $AUTOMATON on pump.fun', tier: 'Token' },
    { handle: '@replicas_web4', name: 'Replicas', bio: 'Web4 platform on BNB Chain', tier: 'Token' },
    { handle: '@ai16z', name: 'ai16z DAO', bio: 'AI agent DAO, Shaw\'s first project', tier: 'Token' },
    { handle: '@kazuyam3k', name: 'zuya', bio: 'Conway Research supporter', tier: 'Token' },
    { handle: '@Cryptojackaus', name: 'Crypto Jack', bio: 'Replicas Web4 coverage', tier: 'Token' },
    { handle: '@flat_cash', name: 'Flat Cash', bio: 'Stablecoin protocol for agents', tier: 'Token' },
    { handle: '@_paydao', name: 'PayDAO', bio: 'x402 merchant payments', tier: 'Token' },
    { handle: '@thelaborlayer', name: 'TASKA', bio: 'Proof-of-Task + x402', tier: 'Token' },
    { handle: '@LobstarWilde', name: 'Lobstar', bio: 'Autonomous Solana agent, viral $200K transfer', tier: 'Token' },
  ]
}

function twitterUrl(handle: string): string {
  return `https://twitter.com/${handle.replace('@', '')}`
}

app.get('/', (c) => {
  const accounts = getAccounts()
  const tiers = ['Core', 'Endorser', 'Builder', 'Analyst', 'Token']

  const tableRows = tiers.map(tier => {
    const tierAccounts = accounts.filter(a => a.tier === tier)
    const headerRow = `<tr class="tier-row"><td colspan="4">${tier} <span class="tier-count">${tierAccounts.length}</span></td></tr>`
    const rows = tierAccounts.map(a => `<tr>
<td class="handle"><a href="${twitterUrl(a.handle)}" target="_blank" rel="noopener">${a.handle}</a></td>
<td class="name">${a.name}</td>
<td class="bio">${a.bio || '\u2014'}</td>
<td class="tier-tag ${tier.toLowerCase()}">${tier}</td>
</tr>`).join('\n')
    return headerRow + '\n' + rows
  }).join('\n')

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Web 4.0 Signals</title>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

body {
  background: #faf9f7;
  color: #111;
  font-family: -apple-system, system-ui, sans-serif;
  font-size: 12px;
  line-height: 1.4;
  min-height: 100vh;
}

.wrap {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 16px;
}

header {
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #ddd;
}

h1 {
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.subtitle {
  font-size: 11px;
  color: #888;
  margin-top: 2px;
}

.meta {
  font-size: 11px;
  color: #888;
  font-style: italic;
  margin-top: 2px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead th {
  background: #f0eeea;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #666;
  text-align: left;
  padding: 6px 8px;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  z-index: 1;
}

tr.tier-row td {
  background: #f0eeea;
  font-size: 11px;
  font-weight: 600;
  padding: 6px 8px;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
  color: #444;
}

.tier-count {
  font-weight: 400;
  color: #999;
  font-size: 10px;
}

tbody td {
  padding: 4px 8px;
  border-bottom: 1px solid #eee;
  vertical-align: top;
}

tbody tr:hover {
  background: #f5f4f2;
}

td.handle {
  font-family: 'SF Mono', 'Menlo', 'Consolas', monospace;
  font-size: 12px;
  white-space: nowrap;
  width: 160px;
}

td.handle a {
  color: #2563eb;
  text-decoration: none;
}

td.handle a:hover {
  text-decoration: underline;
}

td.name {
  font-weight: 500;
  white-space: nowrap;
  width: 180px;
}

td.bio {
  color: #666;
  max-width: 500px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

td.tier-tag {
  font-size: 9px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
  width: 70px;
}

td.tier-tag.core { color: #b91c1c; }
td.tier-tag.endorser { color: #92400e; }
td.tier-tag.builder { color: #166534; }
td.tier-tag.analyst { color: #1e40af; }
td.tier-tag.token { color: #7e22ce; }

footer {
  margin-top: 24px;
  padding-top: 12px;
  border-top: 1px solid #ddd;
  font-size: 11px;
  color: #999;
  display: flex;
  justify-content: space-between;
}

@media (max-width: 700px) {
  td.bio { max-width: 200px; }
  td.handle { width: auto; }
  td.name { width: auto; }
}
</style>
</head>
<body>
<div class="wrap">

<header>
  <h1>Web 4.0 Signals</h1>
  <div class="subtitle">Twitter accounts tracking the autonomous AI agent ecosystem</div>
  <div class="meta">${accounts.length} accounts identified &middot; Updated 2026-02-24</div>
</header>

<table>
<thead>
<tr>
  <th>Handle</th>
  <th>Name</th>
  <th>Bio</th>
  <th>Tier</th>
</tr>
</thead>
<tbody>
${tableRows}
</tbody>
</table>

<footer>
  <span>Web 4.0 Signals &mdash; Open Source Intelligence</span>
  <span>Source: <a href="https://twitter.com/0xSigil" style="color:#2563eb;text-decoration:none">@0xSigil thread</a></span>
</footer>

</div>
</body>
</html>`

  return c.html(html)
})

export default app
