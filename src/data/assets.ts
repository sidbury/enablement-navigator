export type AssetStatus = 'current' | 'needs-review' | 'deprecated';
export type ReviewPriority = 'Gold' | 'Silver' | 'Bronze' | null;
export type TagStyle = 'tag-info' | 'tag-positive' | 'tag-warning' | 'tag-neutral' | 'tag-negative' | 'tag-discovery';

export interface Asset {
  name: string;
  type: string;
  typeStyle: TagStyle;
  desc: string;
  status: AssetStatus;
  lastReviewed: string | null;
  reviewPrio: ReviewPriority;
  topics: string[];
  url: string;
  owner?: string;
  category?: string[];
}

export interface Scenario {
  id: string;
  icon: string;
  title: string;
  assets: string[];
}

export const ASSETS: Record<string, Asset> = {

  // ── Messaging & Positioning ──────────────────────────────────────────────

  'ai-narrative': {
    name: 'AI narrative (customer-facing)',
    type: 'Deck', typeStyle: 'tag-info',
    desc: "Core AI story for customer conversations. Covers zh's AI direction and MCP. Updated Jan '26.",
    status: 'current', lastReviewed: '2026-01-22', reviewPrio: 'Silver',
    topics: ['narrative', 'ai-mcp'],
    url: 'https://app.notion.com/p/311523d064a38076a223c285be8ef4ea',
    owner: 'Liam T.', category: ['Messaging & Positioning'],
  },
  'key-feature-themes': {
    name: 'Key feature themes and outcomes',
    type: 'Deck', typeStyle: 'tag-info',
    desc: 'Feature-level messaging with customer outcomes. Useful for tailoring to specific needs.',
    status: 'current', lastReviewed: '2026-02-03', reviewPrio: 'Silver',
    topics: ['narrative', 'roadmap'],
    url: 'https://app.notion.com/p/312523d064a38093aac4c6c9ab99191c',
    owner: 'Liam T.', category: ['Messaging & Positioning', 'Customer Success', 'Pitch & Demo'],
  },
  'icp-deck': {
    name: 'What is our ICP — background deck',
    type: 'Deck', typeStyle: 'tag-info',
    desc: 'Background on our ideal customer profile — who we sell to and why they buy.',
    status: 'current', lastReviewed: '2024-03-01', reviewPrio: 'Bronze',
    topics: ['narrative'],
    url: 'https://app.notion.com/p/30d523d064a380e7bc61df23d905569f',
    owner: '—', category: ['Messaging & Positioning'],
  },
  'zh-icp': {
    name: 'zh ICP',
    type: 'Guide / playbook', typeStyle: 'tag-neutral',
    desc: 'Detailed ICP reference for zeroheight. Covers who we sell to, why they buy, and what good looks like.',
    status: 'needs-review', lastReviewed: '2024-01-01', reviewPrio: 'Bronze',
    topics: ['narrative'],
    url: 'https://app.notion.com/p/30d523d064a3801d8a06fc691db20db2',
    owner: '—', category: ['Messaging & Positioning'],
  },
  'mcp-refresher-deck': {
    name: 'MCP refresher deck',
    type: 'Deck', typeStyle: 'tag-info',
    desc: 'Quick refresher on MCP — what it is, why it matters, and how to talk about it with customers.',
    status: 'current', lastReviewed: '2026-05-29', reviewPrio: 'Bronze',
    topics: ['ai-mcp'],
    url: 'https://app.notion.com/p/36f523d064a38074a44afe6ed8d25772',
    owner: 'Liam T.', category: ['Messaging & Positioning'],
  },
  'agentic-1pager': {
    name: 'Agentic vision 1-pager',
    type: 'One-pager', typeStyle: 'tag-info',
    desc: "zh's agentic platform direction in a single page. Use to open conversations about where DS tools are heading.",
    status: 'current', lastReviewed: '2026-05-13', reviewPrio: 'Silver',
    topics: ['narrative', 'ai-mcp'],
    url: 'https://app.notion.com/p/35d523d064a380f4bd6ae6c58c53a1d2',
    owner: 'Seb M.', category: ['Messaging & Positioning', 'Pitch & Demo'],
  },
  'supernova-1pager': {
    name: 'Supernova internal 1-pager',
    type: 'One-pager', typeStyle: 'tag-info',
    desc: 'Quick internal reference on zh vs Supernova. Key differentiators at a glance.',
    status: 'current', lastReviewed: '2026-03-26', reviewPrio: 'Silver',
    topics: ['competitive', 'narrative'],
    url: 'https://app.notion.com/p/32f523d064a3800babc2d51cde10a9ff',
    owner: 'Seb M.', category: ['Messaging & Positioning', 'Competitor Collateral'],
  },
  'tokens-1pager': {
    name: 'Tokens rebuild 1-pager',
    type: 'One-pager', typeStyle: 'tag-info',
    desc: 'One-page summary of the tokens rebuild — what changed, why it matters, and the upgrade path.',
    status: 'current', lastReviewed: '2026-04-23', reviewPrio: 'Bronze',
    topics: ['tokens'],
    url: 'https://app.notion.com/p/34b523d064a380059736dc117705dde4',
    owner: 'Seb M.', category: ['Messaging & Positioning'],
  },
  'mcp-messaging': {
    name: 'Feature messaging: MCP (remote)',
    type: 'Messaging doc', typeStyle: 'tag-neutral',
    desc: 'Approved messaging for MCP remote. Covers FAQs, setup guidance, and talking points.',
    status: 'current', lastReviewed: '2026-01-19', reviewPrio: null,
    topics: ['ai-mcp'],
    url: 'https://app.notion.com/p/30d523d064a38069b11ce87971dae205',
    owner: 'Liam T.', category: ['Messaging & Positioning'],
  },
  'mcp-figma-sync': {
    name: 'Feature messaging: web vs plugin Figma sync',
    type: 'Messaging doc', typeStyle: 'tag-neutral',
    desc: 'Messaging guide covering the difference between web and plugin Figma sync. Useful when customers ask about sync behaviour.',
    status: 'current', lastReviewed: '2026-02-27', reviewPrio: null,
    topics: ['narrative'],
    url: 'https://app.notion.com/p/314523d064a380278e3acc717962ab2a',
    owner: '—', category: ['Messaging & Positioning'],
  },
  'mcp-updates': {
    name: '2026 MCP updates log',
    type: 'Guide / playbook', typeStyle: 'tag-neutral',
    desc: "Running log of MCP changes. Use to answer \"what's new in MCP?\" and keep conversations current.",
    status: 'current', lastReviewed: '2026-03-27', reviewPrio: 'Gold',
    topics: ['ai-mcp'],
    url: 'https://app.notion.com/p/30d523d064a38048ab54fd0bca0a628c',
    owner: 'Seb M.', category: ['Messaging & Positioning'],
  },
  'status-quo-guide': {
    name: 'Status quo positioning guide',
    type: 'Guide / playbook', typeStyle: 'tag-neutral',
    desc: 'How to handle "why not stick with what we have?" and "why not build it ourselves?" conversations.',
    status: 'current', lastReviewed: '2026-04-09', reviewPrio: 'Silver',
    topics: ['competitive', 'narrative', 'roi'],
    url: 'https://app.notion.com/p/33d523d064a380928051d0b2197f3c7b',
    owner: 'Seb M.', category: ['Messaging & Positioning', 'Competitor Collateral', 'Playbooks'],
  },
  'tokens-field-guide': {
    name: "Tokens rebuild '26 field guide",
    type: 'Messaging doc', typeStyle: 'tag-neutral',
    desc: 'Field guide covering the tokens rebuild — key changes, talking points, and upgrade path.',
    status: 'current', lastReviewed: '2026-04-23', reviewPrio: 'Bronze',
    topics: ['tokens'],
    url: 'https://app.notion.com/p/34b523d064a38081b55bf1baaaa2c206',
    owner: 'Seb M.', category: ['Messaging & Positioning'],
  },

  // ── Pitch & Demo ────────────────────────────────────────────────────────

  'demo-deck': {
    name: 'Demo deck template',
    type: 'Deck', typeStyle: 'tag-info',
    desc: 'Standard demo deck template. Start here for any product walkthrough with a prospect.',
    status: 'current', lastReviewed: '2026-01-23', reviewPrio: 'Gold',
    topics: ['demo'],
    url: 'https://app.notion.com/p/312523d064a3807886f2e1b7adf53aa7',
    owner: 'Liam T.', category: ['Pitch & Demo'],
  },
  'roadmap-deck': {
    name: 'Roadmap & New Features deck',
    type: 'Deck', typeStyle: 'tag-info',
    desc: 'Latest roadmap and recent releases. Use for renewal conversations, QBRs, and expansion.',
    status: 'current', lastReviewed: '2026-03-09', reviewPrio: 'Gold',
    topics: ['roadmap', 'narrative'],
    url: 'https://app.notion.com/p/30a523d064a38024b478ddd8408c9b1f',
    owner: 'Liam T., Seb M.', category: ['Pitch & Demo', 'Customer Success', 'Messaging & Positioning'],
  },
  'enterprise-plans': {
    name: 'Enterprise sales plans',
    type: 'Deck', typeStyle: 'tag-info',
    desc: 'Sales plan templates for Enterprise accounts. Covers goals, stakeholders, and timelines.',
    status: 'current', lastReviewed: '2026-05-22', reviewPrio: 'Bronze',
    topics: ['narrative', 'roi'],
    url: 'https://app.notion.com/p/312523d064a380c39255ebecb4a6d388',
    owner: '—', category: ['Messaging & Positioning', 'Pitch & Demo', 'Product Collateral'],
  },
  'demo-env-baseline': {
    name: 'Demo environment — Baseline',
    type: 'Tool', typeStyle: 'tag-discovery',
    desc: 'Pre-built demo environment with sample content. Use as your starting point for live demos.',
    status: 'current', lastReviewed: '2026-01-22', reviewPrio: 'Silver',
    topics: ['demo'],
    url: 'https://app.notion.com/p/30d523d064a3803dbe02cbd9d262f49e',
    owner: '—', category: ['Tools', 'Pitch & Demo'],
  },
  'demo-env-walkthrough': {
    name: 'Demo environment — Walkthrough',
    type: 'Guide / playbook', typeStyle: 'tag-neutral',
    desc: 'Step-by-step guide for navigating the demo environment. Good for AE onboarding.',
    status: 'current', lastReviewed: '2026-03-17', reviewPrio: 'Bronze',
    topics: ['demo'],
    url: 'https://app.notion.com/p/326523d064a380ff9108d1524719a2e8',
    owner: '—', category: ['Pitch & Demo'],
  },
  'demo-video-mcp': {
    name: 'Demo video: MCP + Figma Make',
    type: 'Demo', typeStyle: 'tag-positive',
    desc: 'Short video showing MCP in action with Figma Make. Send async or use to open an AI conversation.',
    status: 'current', lastReviewed: '2026-04-29', reviewPrio: 'Silver',
    topics: ['demo', 'ai-mcp'],
    url: 'https://app.notion.com/p/351523d064a3801e99ace9de0cd58d4c',
    owner: 'Liam T.', category: ['Product Collateral', 'Pitch & Demo'],
  },
  'demo-video-assistant': {
    name: 'Demo video: Assistant for Figma',
    type: 'Demo', typeStyle: 'tag-positive',
    desc: 'Short video demonstrating the Assistant for Figma. Good for showing AI-assisted design workflows.',
    status: 'current', lastReviewed: '2026-05-13', reviewPrio: null,
    topics: ['demo', 'ai-mcp'],
    url: 'https://app.notion.com/p/35f523d064a380dba1aefb2af204f404',
    owner: 'Liam T.', category: ['Pitch & Demo'],
  },

  // ── Competitor Collateral ────────────────────────────────────────────────

  'supernova-deck': {
    name: 'Supernova comparison deck',
    type: 'Deck', typeStyle: 'tag-info',
    desc: 'Head-to-head comparison with Supernova. Use when Supernova is actively in play.',
    status: 'current', lastReviewed: '2026-01-16', reviewPrio: 'Bronze',
    topics: ['competitive'],
    url: 'https://app.notion.com/p/30a523d064a380519d90fe3f79f11b7c',
    owner: '—', category: ['Competitor Collateral'],
  },
  'knapsack-info': {
    name: 'zh vs Knapsack info',
    type: 'Battlecard', typeStyle: 'tag-warning',
    desc: 'Internal reference on Knapsack. Note: Knapsack is pivoting to an agency/dev-services model.',
    status: 'current', lastReviewed: '2026-02-04', reviewPrio: 'Bronze',
    topics: ['competitive'],
    url: 'https://app.notion.com/p/30a523d064a380cc8551e598b22d54cf',
    owner: '—', category: ['Competitor Collateral'],
  },
  'supernova-quotes': {
    name: 'Supernova customer/prospect quotes',
    type: 'Testimonial / quote', typeStyle: 'tag-positive',
    desc: 'Real quotes from customers who chose zh over Supernova. Use to add proof in competitive situations.',
    status: 'current', lastReviewed: '2026-03-18', reviewPrio: 'Bronze',
    topics: ['competitive', 'social-proof'],
    url: 'https://app.notion.com/p/327523d064a38014b0b7efaa36e8cf73',
    owner: 'Seb M.', category: ['Social Proof'],
  },

  // ── Social Proof ─────────────────────────────────────────────────────────

  'case-study-avalara': {
    name: 'Case study — Avalara',
    type: 'Case study', typeStyle: 'tag-neutral',
    desc: 'How Avalara built a design system to unify their products. Good for multi-product companies.',
    status: 'current', lastReviewed: '2026-02-20', reviewPrio: 'Bronze',
    topics: ['social-proof'],
    url: 'https://app.notion.com/p/30d523d064a380e08dead564ba68ed55',
    owner: 'Seb M., Liam T.', category: ['Social Proof'],
  },
  'case-study-sage': {
    name: 'Case study — Sage',
    type: 'Case study', typeStyle: 'tag-neutral',
    desc: 'Sage went from "wild west" to clear design principles with zh. Good for regulated industries.',
    status: 'current', lastReviewed: '2026-02-20', reviewPrio: 'Bronze',
    topics: ['social-proof'],
    url: 'https://app.notion.com/p/30d523d064a380539d52ed95435e6976',
    owner: 'Seb M., Liam T.', category: ['Social Proof'],
  },
  'case-study-sage-api': {
    name: 'Case study — Sage (API/AI)',
    type: 'Case study', typeStyle: 'tag-neutral',
    desc: 'How Sage built AI design tooling on the zeroheight API. Strong for AI-forward and technical audiences.',
    status: 'current', lastReviewed: '2026-05-28', reviewPrio: null,
    topics: ['social-proof', 'ai-mcp'],
    url: 'https://app.notion.com/p/36e523d064a3805ca324f897695d3ad1',
    owner: 'Liam T.', category: ['Social Proof'],
  },
  'case-study-outdoorsy': {
    name: 'Case study — Outdoorsy',
    type: 'Case study', typeStyle: 'tag-neutral',
    desc: 'How the startup Outdoorsy launched a brand new company with help from their design system.',
    status: 'current', lastReviewed: '2026-02-20', reviewPrio: 'Bronze',
    topics: ['social-proof'],
    url: 'https://app.notion.com/p/30d523d064a380449a3dd762e7e1bf4a',
    owner: 'Seb M., Liam T.', category: ['Social Proof'],
  },
  'case-study-notebooklm': {
    name: 'Case study NotebookLM',
    type: 'Tool', typeStyle: 'tag-discovery',
    desc: 'AI tool trained on zh case studies. Good for quickly retrieving relevant customer stories.',
    status: 'current', lastReviewed: '2026-01-19', reviewPrio: 'Silver',
    topics: ['social-proof'],
    url: 'https://app.notion.com/p/30d523d064a380c1b5e2ce1ccfcc1ff9',
    owner: 'Seb M.', category: ['Tools', 'Social Proof'],
  },

  // ── Deprecated case studies ──────────────────────────────────────────────

  'case-study-adt': {
    name: 'Case study — ADT',
    type: 'Case study', typeStyle: 'tag-neutral',
    desc: 'How ADT pushed design forward with their design system.',
    status: 'deprecated', lastReviewed: null, reviewPrio: null,
    topics: ['social-proof'],
    url: 'https://app.notion.com/p/30d523d064a38020b0b4d3abfd1f604d',
    owner: 'Seb M., Liam T.', category: ['Social Proof'],
  },
  'case-study-cathay': {
    name: 'Case study — Cathay Pacific',
    type: 'Case study', typeStyle: 'tag-neutral',
    desc: 'Cathay Pacific design system case study.',
    status: 'deprecated', lastReviewed: null, reviewPrio: null,
    topics: ['social-proof'],
    url: 'https://app.notion.com/p/30d523d064a380d4a70bfa88fc7e4856',
    owner: 'Seb M., Liam T.', category: ['Social Proof'],
  },
  'case-study-ctm': {
    name: 'Case study — Compare the Market',
    type: 'Case study', typeStyle: 'tag-neutral',
    desc: 'How Compare the Market built their Meerkat design system.',
    status: 'deprecated', lastReviewed: null, reviewPrio: null,
    topics: ['social-proof'],
    url: 'https://app.notion.com/p/30d523d064a380909e5aec834991fd42',
    owner: 'Seb M., Liam T.', category: ['Social Proof'],
  },
  'case-study-decathlon': {
    name: 'Case study — Decathlon',
    type: 'Case study', typeStyle: 'tag-neutral',
    desc: "Scaling Decathlon's design system with zeroheight.",
    status: 'deprecated', lastReviewed: null, reviewPrio: null,
    topics: ['social-proof'],
    url: 'https://app.notion.com/p/30d523d064a38051aed1f559ee1f8680',
    owner: 'Seb M., Liam T.', category: ['Social Proof'],
  },
  'case-study-eventbrite': {
    name: 'Case study — Eventbrite',
    type: 'Case study', typeStyle: 'tag-neutral',
    desc: 'How Eventbrite saved 534 days of engineering effort with zeroheight.',
    status: 'deprecated', lastReviewed: null, reviewPrio: null,
    topics: ['social-proof'],
    url: 'https://app.notion.com/p/30d523d064a380b8b35ee44070940c1d',
    owner: 'Seb M., Liam T.', category: ['Social Proof'],
  },
  'case-study-idean': {
    name: 'Case study — Idean',
    type: 'Case study', typeStyle: 'tag-neutral',
    desc: 'How Idean uses zeroheight to build successful design systems.',
    status: 'deprecated', lastReviewed: null, reviewPrio: null,
    topics: ['social-proof'],
    url: 'https://app.notion.com/p/30d523d064a380859a4ae1180a1d8dbd',
    owner: 'Seb M., Liam T.', category: ['Social Proof'],
  },
  'case-study-ie-university': {
    name: 'Case study — IE University',
    type: 'Case study', typeStyle: 'tag-neutral',
    desc: 'IE University reduced agency spend with a brand design system.',
    status: 'deprecated', lastReviewed: null, reviewPrio: null,
    topics: ['social-proof'],
    url: 'https://app.notion.com/p/30d523d064a3806ab87adeb1cf3bc21e',
    owner: 'Seb M., Liam T.', category: ['Social Proof'],
  },
  'case-study-naked-wines': {
    name: 'Case study — Naked Wines',
    type: 'Case study', typeStyle: 'tag-neutral',
    desc: 'How Naked Wines uses zeroheight to teach the importance of design.',
    status: 'deprecated', lastReviewed: null, reviewPrio: null,
    topics: ['social-proof'],
    url: 'https://app.notion.com/p/30d523d064a3806f8e41dc19a256a562',
    owner: 'Seb M., Liam T.', category: ['Social Proof'],
  },
  'case-study-open-classrooms': {
    name: 'Case study — OpenClassrooms',
    type: 'Case study', typeStyle: 'tag-neutral',
    desc: 'How OpenClassrooms uses zeroheight to serve user needs and impact revenue.',
    status: 'deprecated', lastReviewed: null, reviewPrio: null,
    topics: ['social-proof'],
    url: 'https://app.notion.com/p/30d523d064a380998f91c20e4a976133',
    owner: 'Seb M., Liam T.', category: ['Social Proof'],
  },
  'case-study-pernod-ricard': {
    name: 'Case study — Pernod Ricard',
    type: 'Case study', typeStyle: 'tag-neutral',
    desc: 'zeroheight helps Pernod Ricard scale faster amidst digital transformation.',
    status: 'deprecated', lastReviewed: null, reviewPrio: null,
    topics: ['social-proof'],
    url: 'https://app.notion.com/p/30d523d064a38056a716da8ee617ad7d',
    owner: 'Seb M., Liam T.', category: ['Social Proof'],
  },
  'case-study-prudential': {
    name: 'Case study — Prudential',
    type: 'Case study', typeStyle: 'tag-neutral',
    desc: 'How Prudential uses zeroheight to create consistent products quickly.',
    status: 'deprecated', lastReviewed: null, reviewPrio: null,
    topics: ['social-proof'],
    url: 'https://app.notion.com/p/30d523d064a38030a94ae5282128b47f',
    owner: 'Seb M., Liam T.', category: ['Social Proof'],
  },
  'case-study-teladoc': {
    name: 'Case study — Teladoc',
    type: 'Case study', typeStyle: 'tag-neutral',
    desc: 'Design Systems, Diners and Drives episode featuring Teladoc Health.',
    status: 'deprecated', lastReviewed: null, reviewPrio: null,
    topics: ['social-proof'],
    url: 'https://app.notion.com/p/30d523d064a38037a86ad6bf9a23bd55',
    owner: 'Seb M., Liam T.', category: ['Social Proof'],
  },

  // ── Product Collateral / Tools ────────────────────────────────────────────

  'convince-your-boss': {
    name: 'Convince your boss eBook',
    type: 'eBook/white paper', typeStyle: 'tag-neutral',
    desc: 'Shareable eBook for champions to use internally. Covers the case for a design system platform.',
    status: 'needs-review', lastReviewed: '2025-08-01', reviewPrio: 'Silver',
    topics: ['roi', 'narrative'],
    url: 'https://app.notion.com/p/313523d064a380a5a398e85fc15b3b1b',
    owner: '—', category: ['Product Collateral', 'Tools'],
  },
  'roi-calculator': {
    name: 'Design System ROI calculator',
    type: 'Tool', typeStyle: 'tag-discovery',
    desc: 'Interactive calculator to quantify design system value. Great for internal stakeholder buy-in.',
    status: 'current', lastReviewed: null, reviewPrio: 'Bronze',
    topics: ['roi'],
    url: 'https://app.notion.com/p/30d523d064a380c180b0d836de1cd977',
    owner: '—', category: ['Tools'],
  },
  'sales-deck-gpt': {
    name: 'Sales deck generator (custom GPT)',
    type: 'Tool', typeStyle: 'tag-discovery',
    desc: 'GPT that generates a custom sales deck based on prospect context. Good for tailored outreach.',
    status: 'current', lastReviewed: '2026-01-30', reviewPrio: null,
    topics: ['demo', 'narrative'],
    url: 'https://app.notion.com/p/312523d064a3807aafdff329fa9e896b',
    owner: '—', category: ['Tools', 'Pitch & Demo'],
  },

  // ── Customer Success ──────────────────────────────────────────────────────

  'csm-decks': {
    name: 'CSM Core & Lifecycle Decks',
    type: 'Deck', typeStyle: 'tag-info',
    desc: 'Core CS deck library covering onboarding, QBR, renewal, and expansion motions.',
    status: 'current', lastReviewed: null, reviewPrio: null,
    topics: ['narrative', 'roadmap'],
    url: 'https://app.notion.com/p/311523d064a38057847ed6a4cb124328',
    owner: '—', category: ['Customer Success'],
  },
};

// Deprecated case study IDs — appear in competitive/social proof scenarios with reduced opacity
const DEPRECATED_CASE_STUDIES = [
  'case-study-adt', 'case-study-cathay', 'case-study-ctm', 'case-study-decathlon',
  'case-study-eventbrite', 'case-study-idean', 'case-study-ie-university',
  'case-study-naked-wines', 'case-study-open-classrooms', 'case-study-pernod-ricard',
  'case-study-prudential', 'case-study-teladoc',
];

export const SCENARIOS: Record<'sales' | 'cs', Scenario[]> = {
  sales: [
    {
      id: 's-discovery', icon: '🔍', title: 'Initial discovery call',
      assets: [
        'supernova-deck', 'ai-narrative', 'enterprise-plans', 'key-feature-themes',
        'mcp-refresher-deck', 'icp-deck', 'status-quo-guide', 'zh-icp',
        'mcp-messaging', 'mcp-figma-sync', 'tokens-field-guide', 'agentic-1pager',
        'supernova-1pager', 'tokens-1pager', 'demo-deck', 'roadmap-deck', 'sales-deck-gpt',
      ],
    },
    {
      id: 's-demo', icon: '🎬', title: 'Tailored product demo',
      assets: [
        'supernova-deck', 'ai-narrative', 'enterprise-plans', 'key-feature-themes',
        'mcp-refresher-deck', 'mcp-messaging', 'mcp-figma-sync', 'tokens-field-guide',
        'agentic-1pager', 'tokens-1pager', 'demo-deck', 'roadmap-deck',
        'demo-video-assistant', 'demo-env-walkthrough', 'demo-video-mcp',
        'case-study-sage-api', 'demo-env-baseline',
      ],
    },
    {
      id: 's-objections', icon: '⚔️', title: 'Objections & competitive pushback',
      assets: [
        'knapsack-info', 'supernova-deck', 'ai-narrative', 'mcp-refresher-deck',
        'mcp-updates', 'status-quo-guide', 'mcp-messaging', 'mcp-figma-sync',
        'tokens-field-guide', 'agentic-1pager', 'supernova-1pager', 'tokens-1pager',
        'demo-video-mcp', 'case-study-avalara', 'case-study-outdoorsy',
        'case-study-sage', 'case-study-sage-api', 'supernova-quotes', 'case-study-notebooklm',
        ...DEPRECATED_CASE_STUDIES,
      ],
    },
    {
      id: 's-bizcase', icon: '💼', title: 'Building a business case',
      assets: [
        'enterprise-plans', 'convince-your-boss', 'roi-calculator', 'sales-deck-gpt',
        'case-study-avalara', 'case-study-outdoorsy', 'case-study-sage', 'case-study-sage-api',
        'supernova-quotes', 'case-study-notebooklm',
        ...DEPRECATED_CASE_STUDIES,
      ],
    },
    {
      id: 's-champion', icon: '🏆', title: 'Enabling a champion',
      assets: [
        'enterprise-plans', 'mcp-messaging', 'mcp-figma-sync', 'tokens-field-guide',
        'agentic-1pager', 'supernova-1pager', 'tokens-1pager', 'convince-your-boss',
        'sales-deck-gpt', 'case-study-avalara', 'case-study-outdoorsy',
        'case-study-sage', 'case-study-sage-api', 'supernova-quotes', 'case-study-notebooklm',
        ...DEPRECATED_CASE_STUDIES,
      ],
    },
    {
      id: 's-closing', icon: '🤝', title: 'Progressing & closing a deal',
      assets: [
        'enterprise-plans', 'convince-your-boss', 'roi-calculator', 'sales-deck-gpt',
        'case-study-avalara', 'case-study-outdoorsy', 'case-study-sage', 'case-study-sage-api',
        'supernova-quotes', 'case-study-notebooklm',
        ...DEPRECATED_CASE_STUDIES,
      ],
    },
  ],
  cs: [
    {
      id: 'c-onboarding', icon: '🚀', title: 'Onboarding & initial value',
      assets: [
        'csm-decks', 'ai-narrative', 'mcp-refresher-deck', 'icp-deck', 'zh-icp',
        'mcp-messaging', 'mcp-figma-sync', 'tokens-field-guide', 'agentic-1pager',
        'supernova-1pager', 'tokens-1pager', 'demo-deck', 'demo-video-assistant',
        'demo-env-walkthrough', 'demo-video-mcp', 'convince-your-boss',
        'case-study-sage-api', 'mcp-updates', 'demo-env-baseline',
      ],
    },
    {
      id: 'c-adoption', icon: '📈', title: 'Driving product adoption',
      assets: [
        'csm-decks', 'ai-narrative', 'key-feature-themes', 'mcp-refresher-deck',
        'icp-deck', 'zh-icp', 'mcp-updates', 'mcp-messaging', 'mcp-figma-sync',
        'tokens-field-guide', 'agentic-1pager', 'supernova-1pager', 'tokens-1pager',
        'demo-deck', 'roadmap-deck', 'demo-video-assistant', 'demo-env-walkthrough',
        'demo-video-mcp', 'convince-your-boss', 'demo-env-baseline',
        'case-study-avalara', 'case-study-outdoorsy', 'case-study-sage',
        'case-study-sage-api', 'case-study-notebooklm',
        ...DEPRECATED_CASE_STUDIES,
      ],
    },
    {
      id: 'c-atrisk', icon: '⚠️', title: 'Customer disengaged or at risk',
      assets: [
        'csm-decks', 'knapsack-info', 'supernova-deck', 'ai-narrative', 'mcp-refresher-deck',
        'mcp-updates', 'status-quo-guide', 'mcp-messaging', 'mcp-figma-sync',
        'tokens-field-guide', 'agentic-1pager', 'supernova-1pager', 'tokens-1pager',
        'demo-video-mcp', 'convince-your-boss', 'case-study-avalara', 'case-study-outdoorsy',
        'case-study-sage', 'case-study-sage-api', 'supernova-quotes', 'case-study-notebooklm',
        ...DEPRECATED_CASE_STUDIES,
      ],
    },
    {
      id: 'c-renewal', icon: '🔄', title: 'Renewal conversation',
      assets: [
        'csm-decks', 'knapsack-info', 'supernova-deck', 'ai-narrative', 'key-feature-themes',
        'mcp-refresher-deck', 'mcp-updates', 'status-quo-guide', 'mcp-messaging',
        'mcp-figma-sync', 'tokens-field-guide', 'agentic-1pager', 'supernova-1pager',
        'tokens-1pager', 'roadmap-deck', 'demo-video-mcp', 'convince-your-boss',
        'case-study-avalara', 'case-study-outdoorsy', 'case-study-sage',
        'case-study-sage-api', 'supernova-quotes', 'case-study-notebooklm',
        ...DEPRECATED_CASE_STUDIES,
      ],
    },
    {
      id: 'c-expansion', icon: '💡', title: 'Expansion or upsell',
      assets: [
        'csm-decks', 'ai-narrative', 'key-feature-themes', 'mcp-refresher-deck',
        'mcp-updates', 'mcp-messaging', 'mcp-figma-sync', 'tokens-field-guide',
        'agentic-1pager', 'supernova-1pager', 'tokens-1pager', 'demo-deck',
        'roadmap-deck', 'demo-video-assistant', 'demo-env-walkthrough', 'demo-video-mcp',
        'convince-your-boss', 'demo-env-baseline', 'roi-calculator',
        'case-study-avalara', 'case-study-outdoorsy', 'case-study-sage',
        'case-study-sage-api', 'supernova-quotes', 'case-study-notebooklm',
        ...DEPRECATED_CASE_STUDIES,
      ],
    },
    {
      id: 'c-qbr', icon: '📋', title: 'Business review / QBR',
      assets: [
        'csm-decks', 'ai-narrative', 'key-feature-themes', 'mcp-refresher-deck',
        'icp-deck', 'zh-icp', 'mcp-updates', 'mcp-messaging', 'tokens-field-guide',
        'agentic-1pager', 'supernova-1pager', 'tokens-1pager', 'demo-deck',
        'roadmap-deck', 'demo-video-assistant', 'demo-env-walkthrough', 'demo-video-mcp',
        'convince-your-boss', 'case-study-sage-api', 'demo-env-baseline', 'roi-calculator',
      ],
    },
  ],
};

export const ASSET_TYPES = [
  'Battlecard', 'Case study', 'Deck', 'Demo', 'eBook/white paper',
  'Guide / playbook', 'Messaging doc', 'One-pager', 'Testimonial / quote', 'Tool',
];

export const CATEGORIES = [
  'Competitor Collateral', 'Customer Success', 'Messaging & Positioning',
  'Pitch & Demo', 'Playbooks', 'Product Collateral', 'Social Proof', 'Tools',
];
