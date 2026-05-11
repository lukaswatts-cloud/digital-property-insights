export interface ProductDefinition {
  slug: string;
  name: string;
  shortName: string;
  href: string;
  appHref: string;
  tagline: string;
  summary: string;
  audience: string[];
  outcomes: string[];
  capabilities: string[];
  ctaLabel: string;
  appLabel: string;
  heroImageId: string;
  appStatus: 'Live workspace' | 'Workspace ready';
}

export const siteConfig = {
  name: 'Digital Property Insights',
  shortName: 'DPI',
  tagline: 'Property intelligence tools for better valuation, renovation, and investment decisions.',
  mission:
    'Digital Property Insights helps property owners, advisors, and investors make clearer decisions with practical digital tools and sharper market insight.',
  navLinks: [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
};

export const products: ProductDefinition[] = [
  {
    slug: 'valuvista',
    name: 'ValuVista',
    shortName: 'ValuVista',
    href: '/valuvista',
    appHref: '/valuvista/app',
    tagline: 'AI-guided property valuation for faster, more confident pricing conversations.',
    summary:
      'ValuVista helps agents, advisors, and investors move from rough estimates to structured, explainable valuation stories.',
    audience: ['Agents', 'Brokers', 'Investors'],
    outcomes: [
      'Present pricing guidance with more confidence',
      'Reduce manual valuation research time',
      'Turn market data into client-friendly reports',
    ],
    capabilities: [
      'Automated valuation workflows',
      'Comparable sales framing',
      'Suburb trend storytelling',
      'Report-style outputs for client conversations',
    ],
    ctaLabel: 'Explore ValuVista',
    appLabel: 'Open ValuVista',
    heroImageId: 'valuvista-mockup',
    appStatus: 'Live workspace',
  },
  {
    slug: 'renoscope',
    name: 'RenoScope',
    shortName: 'RenoScope',
    href: '/renoscope',
    appHref: '/renoscope/app',
    tagline: 'Renovation planning tools designed to connect scope, spend, and uplift.',
    summary:
      'RenoScope gives homeowners, investors, and project advisors a structured way to discuss renovation priorities and value impact.',
    audience: ['Homeowners', 'Investors', 'Project teams'],
    outcomes: [
      'Frame renovation decisions around value and budget',
      'Communicate project scope clearly with clients',
      'Prepare future ROI-focused workflows in one branded environment',
    ],
    capabilities: [
      'Renovation scope planning',
      'ROI discussion framework',
      'Budget-ready workflow patterns',
      'Future client dashboard foundation',
    ],
    ctaLabel: 'Explore RenoScope',
    appLabel: 'Open RenoScope',
    heroImageId: 'renoscope-mockup',
    appStatus: 'Workspace ready',
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
