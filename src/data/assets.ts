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
  'demo-deck': {
    name: 'Demo deck template',
    type: 'Deck', typeStyle: 'tag-info',
    desc: 'Standard demo deck template. Start here for any product walkthrough with a prospect.',
    status: 'current', lastReviewed: '2026-01-23', reviewPrio: 'Gold',
    topics: ['demo'],
    url: 'https://app.notion.com/p/312523d064a3807886f2e1b7adf53aa7',
    owner: 'Liam T.', category: ['Pitch & Demo'],
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
  'supernova-deck': {
    name: 'Supernova comparison deck',
    type: 'Deck', typeStyle: 'tag-info',
    desc: 'Head-to-head comparison with Supernova. Use when Supernova is actively in play.',
    status: 'current', lastReviewed: '2026-01-16', reviewPrio: 'Bronze',
    topics: ['competitive'],
    url: 'https://app.notion.com/p/30a523d064a380519d90fe3f79f11b7c',
    owner: '—', category: ['Competitor Collateral'],
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
  'supernova-quotes': {
    name: 'Supernova customer/prospect quotes',
    type: 'Testimonial / quote', typeStyle: 'tag-positive',
    desc: 'Real quotes from customers who chose zh over Supernova. Use to add proof in competitive situations.',
    status: 'current', lastReviewed: '2026-03-18', reviewPrio: 'Bronze',
    topics: ['competitive', 'social-proof'],
    url: 'https://app.notion.com/p/327523d064a38014b0b7efaa36e8cf73',
    owner: 'Seb M.', category: ['Social Proof'],
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
  'enterprise-plans': {
    name: 'Enterprise sales plans',
    type: 'Deck', typeStyle: 'tag-info',
    desc: 'Sales plan templates for Enterprise accounts. Covers goals, stakeholders, and timelines.',
    status: 'current', lastReviewed: '2026-03-09', reviewPrio: 'Bronze',
    topics: ['narrative', 'roi'],
    url: 'https://app.notion.com/p/312523d064a380c39255ebecb4a6d388',
    owner: '—', category: ['Messaging & Positioning', 'Pitch & Demo', 'Product Collateral'],
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
  'convince-your-boss': {
    name: 'Convince your boss eBook',
    type: 'eBook/white paper', typeStyle: 'tag-neutral',
    desc: 'Shareable eBook for champions to use internally. Covers the case for a design system platform.',
    status: 'needs-review', lastReviewed: '2025-08-01', reviewPrio: 'Silver',
    topics: ['roi', 'narrative'],
    url: 'https://app.notion.com/p/313523d064a380a5a398e85fc15b3b1b',
    owner: '—', category: ['Product Collateral', 'Tools'],
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
  'case-study-avalara': {
    name: 'Case study — Avalara',
    type: 'Case study', typeStyle: 'tag-neutral',
    desc: 'How Avalara built a design system to unify their products. Good for multi-product companies.',
    status: 'current', lastReviewed: '2026-02-20', reviewPrio: 'Bronze',
    topics: ['social-proof'],
    url: 'https://app.notion.com/p/30d523d064a380e08dead564ba68ed55',
    owner: 'Seb M., Liam T.', category: ['Social Proof'],
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
  'roadmap-deck': {
    name: 'Roadmap & New Features deck',
    type: 'Deck', typeStyle: 'tag-info',
    desc: 'Latest roadmap and recent releases. Use for renewal conversations, QBRs, and expansion.',
    status: 'current', lastReviewed: '2026-03-09', reviewPrio: 'Gold',
    topics: ['roadmap', 'narrative'],
    url: 'https://app.notion.com/p/30a523d064a38024b478ddd8408c9b1f',
    owner: 'Liam T., Seb M.', category: ['Pitch & Demo', 'Customer Success', 'Messaging & Positioning'],
  },
  'csm-decks': {
    name: 'CSM Core & Lifecycle Decks',
    type: 'Deck', typeStyle: 'tag-info',
    desc: 'Core CS deck library covering onboarding, QBR, renewal, and expansion motions.',
    status: 'current', lastReviewed: null, reviewPrio: null,
    topics: ['narrative', 'roadmap'],
    url: 'https://app.notion.com/p/311523d064a38057847ed6a4cb124328',
    owner: '—', category: ['Customer Success'],
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
  'mcp-updates': {
    name: '2026 MCP updates log',
    type: 'Guide / playbook', typeStyle: 'tag-neutral',
    desc: "Running log of MCP changes. Use to answer \"what's new in MCP?\" and keep conversations current.",
    status: 'current', lastReviewed: '2026-03-27', reviewPrio: 'Gold',
    topics: ['ai-mcp'],
    url: 'https://app.notion.com/p/30d523d064a38048ab54fd0bca0a628c',
    owner: 'Seb M.', category: ['Messaging & Positioning'],
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
  'case-study-notebooklm': {
    name: 'Case study NotebookLM',
    type: 'Tool', typeStyle: 'tag-discovery',
    desc: 'AI tool trained on zh case studies. Good for quickly retrieving relevant customer stories.',
    status: 'current', lastReviewed: '2026-01-19', reviewPrio: 'Silver',
    topics: ['social-proof'],
    url: 'https://app.notion.com/p/30d523d064a380c1b5e2ce1ccfcc1ff9',
    owner: 'Seb M.', category: ['Tools', 'Social Proof'],
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
};

export const SCENARIOS: Record<'sales' | 'cs', Scenario[]> = {
  sales: [
    { id: 's-discovery', icon: '🔍', title: 'Initial discovery call',
      assets: ['ai-narrative', 'key-feature-themes', 'icp-deck', 'demo-deck', 'sales-deck-gpt'] },
    { id: 's-demo', icon: '🎬', title: 'Tailored product demo',
      assets: ['demo-deck', 'demo-env-baseline', 'demo-env-walkthrough', 'demo-video-mcp'] },
    { id: 's-objections', icon: '⚔️', title: 'Objections & competitive pushback',
      assets: ['status-quo-guide', 'supernova-deck', 'supernova-1pager', 'supernova-quotes', 'knapsack-info', 'roi-calculator'] },
    { id: 's-bizcase', icon: '💼', title: 'Building a business case',
      assets: ['roi-calculator', 'convince-your-boss', 'enterprise-plans', 'case-study-avalara', 'case-study-notebooklm'] },
    { id: 's-champion', icon: '🏆', title: 'Enabling a champion',
      assets: ['convince-your-boss', 'roi-calculator', 'case-study-sage', 'case-study-avalara', 'key-feature-themes'] },
    { id: 's-closing', icon: '🤝', title: 'Progressing & closing a deal',
      assets: ['enterprise-plans', 'key-feature-themes', 'roadmap-deck', 'supernova-1pager'] },
  ],
  cs: [
    { id: 'c-onboarding', icon: '🚀', title: 'Onboarding & initial value',
      assets: ['csm-decks', 'demo-env-baseline', 'key-feature-themes', 'roadmap-deck'] },
    { id: 'c-adoption', icon: '📈', title: 'Driving product adoption',
      assets: ['demo-video-mcp', 'mcp-messaging', 'mcp-updates', 'ai-narrative', 'roadmap-deck'] },
    { id: 'c-atrisk', icon: '⚠️', title: 'Customer disengaged or at risk',
      assets: ['csm-decks', 'roadmap-deck', 'roi-calculator', 'key-feature-themes', 'case-study-notebooklm'] },
    { id: 'c-renewal', icon: '🔄', title: 'Renewal conversation',
      assets: ['roadmap-deck', 'csm-decks', 'key-feature-themes', 'supernova-1pager', 'supernova-quotes', 'status-quo-guide'] },
    { id: 'c-expansion', icon: '💡', title: 'Expansion or upsell',
      assets: ['roadmap-deck', 'ai-narrative', 'demo-video-mcp', 'enterprise-plans'] },
    { id: 'c-qbr', icon: '📋', title: 'Business review / QBR',
      assets: ['roadmap-deck', 'csm-decks', 'key-feature-themes', 'case-study-sage'] },
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
