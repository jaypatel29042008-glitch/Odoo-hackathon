// Site-wide content and data for EcoSphere ESG Management Platform

export const siteConfig = {
  name: 'EcoSphere',
  tagline: 'ESG Management Platform',
  description: 'Integrate Environmental, Social & Governance metrics directly into your Odoo ERP operations. Automate carbon accounting, gamify employee engagement, and ensure audit-ready compliance — all from one unified platform.',
  url: 'https://ecosphere.dev',
};

export const navLinks = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Features', href: '#features' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Impact', href: '#impact' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Team', href: '#team' },
];

export const stats = [
  { value: '40%', label: 'Environmental Weight', description: 'Carbon tracking in ESG score' },
  { value: '30%', label: 'Social Weight', description: 'Employee & CSR activities' },
  { value: '30%', label: 'Governance Weight', description: 'Compliance & audit readiness' },
  { value: '100%', label: 'ERP Integrated', description: 'Native Odoo synchronization' },
];

export const problemPoints = [
  {
    title: 'Manual Data Collection',
    description: 'Indian enterprises spend over 200+ hours annually collecting ESG data manually across departments — from carbon logs to CSR participation records.',
    icon: 'ClipboardList',
  },
  {
    title: 'Disconnected Systems',
    description: 'Sustainability data lives in spreadsheets, HR portals, and compliance databases that never talk to each other, creating blind spots in ESG reporting.',
    icon: 'Unplug',
  },
  {
    title: 'No Real-Time Visibility',
    description: 'Boards at companies like Tata, Infosys, and Reliance need real-time ESG dashboards, but most firms only see metrics during quarterly reviews.',
    icon: 'EyeOff',
  },
  {
    title: 'Regulatory Pressure',
    description: 'SEBI\'s BRSR (Business Responsibility and Sustainability Reporting) mandates require the top 1000 listed companies in India to disclose ESG metrics annually.',
    icon: 'Scale',
  },
];

export const realWorldStory = {
  title: 'The Story Behind EcoSphere',
  content: `In March 2025, a mid-sized manufacturing company in Pune was preparing its annual BRSR filing for SEBI. The sustainability team spent 6 weeks manually pulling carbon emission data from procurement spreadsheets, chasing HR for CSR participation records, and reconciling compliance audit logs from three different systems.

Despite the effort, they discovered calculation errors that inflated their Scope 2 emissions by 18%. The CFO called it "an embarrassment in front of the board."

This is not an isolated case. Across India — from textile mills in Surat to IT parks in Bengaluru — organizations struggle with the same fundamental problem: ESG data is scattered, manual, and unreliable.

EcoSphere was born from this frustration. We asked: What if ESG tracking was as automatic and reliable as your accounting ledger? What if every purchase order, every fleet trip, every employee volunteer hour was automatically captured, scored, and reported?

That's exactly what we built — an ESG Management Platform that lives inside your Odoo ERP, turning day-to-day business operations into a continuous stream of sustainability intelligence.`,
};

export const existingSolutions = [
  {
    name: 'Standalone ESG Tools',
    examples: 'Watershed, Persefoni, Sphera',
    limitation: 'Require manual data imports from ERP systems. No native integration with business operations. Data is always stale.',
  },
  {
    name: 'Spreadsheet-Based Tracking',
    examples: 'Excel templates, Google Sheets',
    limitation: 'No automation, no audit trail, prone to human error. Cannot scale beyond a single department.',
  },
  {
    name: 'Consulting-Led Reporting',
    examples: 'Big 4 ESG Advisory Services',
    limitation: 'Expensive (₹20-50L annually), periodic snapshots rather than real-time monitoring. No employee engagement layer.',
  },
  {
    name: 'Built-In ERP Modules',
    examples: 'SAP Sustainability Control Tower',
    limitation: 'Limited to large enterprises with ₹2Cr+ licensing costs. No gamification. Governance tracking is often an add-on.',
  },
];

export const solutionPillars = [
  {
    title: 'Environmental',
    icon: 'Leaf',
    color: 'emerald',
    features: [
      'Automated carbon emission calculation from ERP transactions',
      'Scope 1, 2 & 3 emission tracking with configurable emission factors',
      'Sustainability goal setting and progress monitoring',
      'Department-level carbon footprint analysis',
    ],
  },
  {
    title: 'Social',
    icon: 'Users',
    color: 'blue',
    features: [
      'CSR activity management with evidence-based proof uploads',
      'Employee participation tracking with approval workflows',
      'Gamified engagement: XP, badges, challenges, leaderboards',
      'Diversity metrics and training completion tracking',
    ],
  },
  {
    title: 'Governance',
    icon: 'Shield',
    color: 'purple',
    features: [
      'Policy management with employee acknowledgement tracking',
      'Audit scheduling and compliance issue monitoring',
      'Real-time compliance scoring with severity-based alerts',
      'Automated notifications for overdue issues',
    ],
  },
  {
    title: 'Gamification',
    icon: 'Trophy',
    color: 'amber',
    features: [
      'Sustainability challenges with full lifecycle management',
      'XP system with automatic badge awarding on thresholds',
      'Redeemable rewards catalog (deducted from points balance)',
      'Department and individual leaderboards',
    ],
  },
];

export const workflowSteps = [
  {
    step: 1,
    title: 'Master Configuration',
    description: 'Configure departments, emission factors, product ESG profiles, sustainability goals, policies, and challenge templates.',
    details: ['Departments & Categories', 'Emission Factors', 'ESG Policies', 'Badge & Reward Catalog'],
    icon: 'Settings',
  },
  {
    step: 2,
    title: 'Daily Business Operations',
    description: 'Regular ERP transactions — purchases, manufacturing orders, fleet logs, and expense claims — flow into the system automatically.',
    details: ['Purchase Orders', 'Manufacturing Records', 'Fleet Management', 'Expense Claims'],
    icon: 'Activity',
  },
  {
    step: 3,
    title: 'Auto Carbon Transactions',
    description: 'When enabled, carbon emissions are calculated automatically from linked ERP records using configured emission factors. Zero manual data entry.',
    details: ['Auto Emission Calculation', 'ERP Sync', 'Emission Factor Matching', 'Scope Classification'],
    icon: 'Zap',
  },
  {
    step: 4,
    title: 'Employee Participation',
    description: 'Employees join CSR activities, complete sustainability challenges, earn XP, unlock badges, and redeem rewards — all tracked with evidence.',
    details: ['CSR Activity Proof', 'Challenge Completion', 'XP & Badge Awards', 'Policy Acknowledgements'],
    icon: 'UserCheck',
  },
  {
    step: 5,
    title: 'ESG Score Aggregation',
    description: 'Environmental (40%), Social (30%), and Governance (30%) scores aggregate into department and organization-level ESG performance metrics.',
    details: ['Environmental Score', 'Social Score', 'Governance Score', 'Department Total Score'],
    icon: 'BarChart3',
  },
  {
    step: 6,
    title: 'Dashboard & Reports',
    description: 'Organization-wide ESG dashboard with drill-downs, custom report builder, and PDF/Excel/CSV exports for board presentations and BRSR filings.',
    details: ['Organization Dashboard', 'Custom Report Builder', 'BRSR-Ready Exports', 'Supplier Analytics'],
    icon: 'PieChart',
  },
];

export const showcaseScreens = [
  {
    id: 'org-dashboard',
    title: 'Organization Dashboard',
    description: 'Enterprise-wide ESG performance overview with weighted scores, trend analysis, and department rankings at a glance.',
    image: '/screens/organization-dashboard.png',
  },
  {
    id: 'carbon-transactions',
    title: 'Carbon Transactions',
    description: 'Detailed management of environmental impact data with automated ERP sync and emission factor calculations.',
    image: '/screens/carbon-transactions.png',
  },
  {
    id: 'social-impact',
    title: 'Social Impact Hub',
    description: 'Gamified CSR module with activity tracking, XP progression, badge awards, and employee engagement metrics.',
    image: '/screens/social-impact-hub.png',
  },
  {
    id: 'governance',
    title: 'Governance & Compliance',
    description: 'Centralized control for audits, policy tracking, compliance issues, and real-time governance scoring.',
    image: '/screens/governance-compliance.png',
  },
  {
    id: 'carbon-report',
    title: 'Carbon Emissions Report',
    description: 'Comprehensive report generation tool with Scope 1/2/3 breakdowns and supply chain drill-downs.',
    image: '/screens/carbon-reporting.png',
  },
  {
    id: 'supplier',
    title: 'Supplier Performance',
    description: 'Granular drill-down into individual supplier ESG metrics, certifications, and risk assessments.',
    image: '/screens/supplier-analysis.png',
  },
  {
    id: 'dept-rankings',
    title: 'Department Rankings',
    description: 'Comparative ESG performance across all departments with environmental, social, and governance breakdowns.',
    image: '/screens/department-rankings.png',
  },
  {
    id: 'challenges',
    title: 'Sustainability Challenges',
    description: 'Gamified challenge board with lifecycle management from Draft to Active to Completed status tracking.',
    image: '/screens/sustainability-challenges.png',
  },
  {
    id: 'global-insights',
    title: 'Global ESG Insights',
    description: 'Bird\'s-eye view of ESG trends, benchmarks, and industry comparisons for strategic decision-making.',
    image: '/screens/global-esg-insights.png',
  },
];

export const features = [
  {
    title: 'Auto Emission Calculation',
    description: 'Carbon transactions are calculated automatically from linked Purchase, Manufacturing, Expense, and Fleet records using configured emission factors. Toggle on — no manual entry needed.',
    icon: 'Calculator',
    category: 'automation',
  },
  {
    title: 'Badge Auto-Award',
    description: 'Badges are automatically assigned the moment an employee\'s XP, completed challenge count, or tracked metric satisfies the Badge\'s unlock rule. No admin action required.',
    icon: 'Award',
    category: 'gamification',
  },
  {
    title: 'Evidence-Based Auditing',
    description: 'CSR Activity participation cannot be marked Approved without an attached proof file. Every claim is verifiable, every contribution is documented.',
    icon: 'FileCheck',
    category: 'compliance',
  },
  {
    title: 'Real-Time Compliance',
    description: 'Every Compliance Issue must have an assigned Owner and Due Date. Overdue issues are auto-flagged and feed the notification system for immediate escalation.',
    icon: 'AlertTriangle',
    category: 'compliance',
  },
  {
    title: 'Custom Report Builder',
    description: 'Build reports by combining filters — Department, Date Range, Module, Employee, Challenge, ESG Category — and export as PDF, Excel, or CSV.',
    icon: 'FileText',
    category: 'reporting',
  },
  {
    title: 'Smart Notifications',
    description: 'In-app and email notifications for compliance issues, CSR/Challenge approvals, policy acknowledgement reminders, and badge unlocks. Configurable via Settings.',
    icon: 'Bell',
    category: 'automation',
  },
  {
    title: 'XP & Rewards System',
    description: 'Employees earn XP through challenges and CSR activities. Redeem earned Points for Rewards from the catalog, with automatic stock management and balance deduction.',
    icon: 'Gift',
    category: 'gamification',
  },
  {
    title: 'Department Leaderboard',
    description: 'Real-time rankings of departments by total ESG score, fostering healthy inter-departmental competition on sustainability performance.',
    icon: 'Medal',
    category: 'gamification',
  },
  {
    title: 'Supplier ESG Analytics',
    description: 'Track and evaluate supplier ESG performance with certification monitoring, risk scoring, and Scope 3 supply chain emission analysis.',
    icon: 'Truck',
    category: 'reporting',
  },
];

export const techStack = [
  { name: 'Odoo 17', category: 'Backend', description: 'Enterprise ERP Framework', icon: 'Server' },
  { name: 'Python', category: 'Backend', description: 'Business Logic & APIs', icon: 'Code' },
  { name: 'PostgreSQL', category: 'Database', description: 'Relational Data Store', icon: 'Database' },
  { name: 'OWL Framework', category: 'Frontend', description: 'Odoo Web Library', icon: 'Layout' },
  { name: 'QWeb Templates', category: 'Frontend', description: 'Server-side Rendering', icon: 'FileCode' },
  { name: 'XML/CSV', category: 'Data', description: 'Configuration & Seed Data', icon: 'FileSpreadsheet' },
  { name: 'Docker', category: 'DevOps', description: 'Containerized Deployment', icon: 'Container' },
  { name: 'Git', category: 'DevOps', description: 'Version Control', icon: 'GitBranch' },
];

export const impactMetrics = [
  { value: '80%', label: 'Reduction in ESG Reporting Time', description: 'From 6 weeks to 1 week with automated data aggregation' },
  { value: '₹15L+', label: 'Annual Cost Savings', description: 'Compared to Big-4 consulting-led ESG advisory services' },
  { value: '3x', label: 'Employee Engagement', description: 'Gamification drives 3x more participation in CSR activities' },
  { value: '100%', label: 'Audit Readiness', description: 'Evidence-based tracking ensures every metric is verifiable' },
  { value: '0', label: 'Manual Data Entry', description: 'Auto emission calculation eliminates manual carbon logging' },
  { value: '1000+', label: 'BRSR-Listed Companies', description: 'Addressable market of SEBI-mandated companies in India' },
];

export const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Core ERP Integration',
    timeline: 'Q3 2025',
    status: 'completed' as const,
    items: [
      'Odoo 17 module development',
      'Carbon transaction engine',
      'Department scoring system',
      'Basic ESG dashboards',
      'Policy & audit management',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Gamification & Engagement',
    timeline: 'Q4 2025',
    status: 'current' as const,
    items: [
      'XP, Badges & Challenges system',
      'Employee leaderboards',
      'Reward redemption catalog',
      'CSR activity proof workflows',
      'Smart notification engine',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'AI-Powered Insights',
    timeline: 'Q1 2026',
    status: 'upcoming' as const,
    items: [
      'AI-driven emission forecasting',
      'Anomaly detection in ESG data',
      'Natural language report generation',
      'Predictive compliance alerts',
      'Benchmark against industry peers',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Supply Chain ESG Network',
    timeline: 'Q2 2026',
    status: 'upcoming' as const,
    items: [
      'Supplier ESG scoring portal',
      'Scope 3 supply chain tracking',
      'Multi-org data sharing protocol',
      'BRSR auto-filing integration',
      'Mobile app for field teams',
    ],
  },
];

export const teamMembers = [
  {
    name: 'Jay Patel',
    role: 'Full Stack Developer & Team Lead',
    bio: 'Building the EcoSphere platform with a passion for sustainable technology. Expert in Odoo development, Python, and enterprise architecture.',
    avatar: 'JP',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Arjun Mehta',
    role: 'Backend Developer',
    bio: 'Architecting the ESG scoring engine and carbon transaction automation. Specializes in PostgreSQL optimization and API design.',
    avatar: 'AM',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Priya Sharma',
    role: 'Frontend Developer & UI/UX',
    bio: 'Designing the dashboard experience and gamification interfaces. Focused on creating intuitive data visualizations for complex ESG metrics.',
    avatar: 'PS',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Rohan Desai',
    role: 'Data Engineer',
    bio: 'Building the emission factor database and custom report builder. Handles data pipelines from ERP transactions to ESG analytics.',
    avatar: 'RD',
    linkedin: '#',
    github: '#',
  },
];

export const futureScope = [
  {
    title: 'AI-Powered Carbon Forecasting',
    description: 'Use machine learning to predict future carbon emissions based on procurement patterns, manufacturing schedules, and fleet usage trends.',
    icon: 'Brain',
  },
  {
    title: 'Blockchain Audit Trail',
    description: 'Immutable audit trail on blockchain for ESG data integrity, enabling third-party verification and regulatory trust.',
    icon: 'Link',
  },
  {
    title: 'IoT Sensor Integration',
    description: 'Connect factory floor IoT sensors for real-time energy consumption and emissions monitoring — direct from the source.',
    icon: 'Radio',
  },
  {
    title: 'Global ESG Benchmarking',
    description: 'Compare organizational ESG performance against industry benchmarks, national averages, and UN SDG alignment scores.',
    icon: 'Globe',
  },
  {
    title: 'BRSR Auto-Filing',
    description: 'Auto-generate SEBI BRSR filings directly from platform data, reducing compliance burden from weeks to minutes.',
    icon: 'FileUp',
  },
  {
    title: 'Mobile Field Application',
    description: 'Native mobile app for field teams to log CSR activities, upload evidence, scan QR-coded emission sources, and track challenges on the go.',
    icon: 'Smartphone',
  },
];

export const benefitsList = [
  {
    title: 'For CXOs & Board',
    items: [
      'Real-time ESG dashboards for board presentations',
      'BRSR-ready reports generated in minutes, not weeks',
      'Data-driven sustainability strategy with trend analysis',
    ],
    icon: 'Crown',
  },
  {
    title: 'For Sustainability Teams',
    items: [
      'Zero manual data collection — ERP does the heavy lifting',
      'Automated compliance alerts before deadlines hit',
      'Custom report builder for any ESG metric combination',
    ],
    icon: 'Target',
  },
  {
    title: 'For Employees',
    items: [
      'Gamified sustainability journey with tangible rewards',
      'Clear visibility into personal ESG contribution',
      'Social recognition via leaderboards and badges',
    ],
    icon: 'Smile',
  },
  {
    title: 'For Investors & Auditors',
    items: [
      'Evidence-based, verifiable ESG data with proof files',
      'Department-level drill-downs with audit trails',
      'Standardized scoring methodology (E40/S30/G30)',
    ],
    icon: 'ShieldCheck',
  },
];
