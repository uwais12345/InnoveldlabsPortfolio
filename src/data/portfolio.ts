import type {
  ClientExperience,
  CaseStudy,
  Service,
  ProcessStep,
  Testimonial,
  TeamMember,
  NavLink,
} from '../types';

// ─── Navigation ──────────────────────────────────────────────────────────────
export const navLinks: NavLink[] = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Case Studies', href: '/projects' },
  { label: 'Process', href: '/#process' },
  { label: 'Team', href: '/#team' },
];

// ─── Recent Client Experience ─────────────────────────────────────────────────
export const clientExperiences: ClientExperience[] = [
  {
    id: 'feast-at-night',
    clientName: 'Feast At Night',
    industry: 'Food & Beverage',
    projectType: 'Web Platform Development',
    summary:
      'Built a responsive, mobile-first ordering platform for a late-night food business — enabling seamless browsing, cart, and real-time kitchen updates.',
    problem:
      'Zero digital presence — all orders managed via phone calls, leading to errors and limited growth.',
    solution:
      'Custom ordering platform with menu CMS, cart flow, payment integration, and kitchen order panel.',
    duration: '6 Weeks',
    toolsUsed: ['React.js', 'Node.js', 'MongoDB', 'Vercel'],
    keyResults: [
      '2× increase in customer engagement',
      '40% improvement in order processing efficiency',
      '35% conversion boost post-launch',
      '80% of orders via mobile within first month',
    ],
    metrics: [
      { label: 'Engagement', value: '2×' },
      { label: 'Efficiency', value: '40%' },
      { label: 'Conversion', value: '35%' },
    ],
    icon: '🌙',
    accentColor: 'indigo',
  },
  {
    id: 'habeeb-paradise',
    clientName: "Habeeb's Paradise",
    industry: 'Fashion & Retail',
    projectType: 'E-Commerce Platform',
    summary:
      'Full-featured hijab boutique e-commerce with tiered membership, curated catalogs, wishlists, reviews, and an admin dashboard for complete catalog control.',
    problem:
      'Manual order management and no loyalty system meant lost revenue and repeat customer drop-off.',
    solution:
      'Bespoke e-commerce with tiered memberships, wishlists, reviews, and full admin dashboard.',
    duration: '8 Weeks',
    toolsUsed: ['Next.js', 'Express', 'MongoDB', 'Stripe'],
    keyResults: [
      '3× increase in repeat purchases',
      '55% longer average session duration',
      '28% cart-to-checkout conversion rate',
      'Launched membership tier system with 200+ sign-ups',
    ],
    metrics: [
      { label: 'Repeat Purchases', value: '3×' },
      { label: 'Session Duration', value: '55%' },
      { label: 'Cart Conversion', value: '28%' },
    ],
    icon: '🧕',
    accentColor: 'violet',
  },
  {
    id: 'tender-guard',
    clientName: 'Tender Guard',
    industry: 'Legal Tech / Gov',
    projectType: 'SaaS Platform',
    summary:
      'Full-stack SaaS for automated government tender discovery, document parsing, and bid management for procurement professionals across India.',
    problem:
      'SMEs missed tender opportunities due to fragmented portal data and manual daily tracking workflows.',
    solution:
      'Centralized SaaS dashboard with automated scraping, NLP document parsing, keyword alerts, and deadline tracking.',
    duration: '10 Weeks',
    toolsUsed: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
    keyResults: [
      '5× more tenders discovered per week',
      '70% reduction in manual tracking time',
      '90% alert accuracy rate',
      '3.2× increase in bids submitted',
    ],
    metrics: [
      { label: 'Tenders Found', value: '5×' },
      { label: 'Time Saved', value: '70%' },
      { label: 'Alert Accuracy', value: '90%' },
    ],
    icon: '🛡️',
    accentColor: 'cyan',
  },
];

// ─── Case Studies ─────────────────────────────────────────────────────────────
export const caseStudies: CaseStudy[] = [
  {
    id: 'feast-at-night',
    title: 'Transforming a Night Food Brand into a Digital Business',
    clientType: 'Food & Beverage — Local Business',
    problem:
      'Feast At Night had zero digital infrastructure. All orders were phone-based, leading to missed orders, errors, and an inability to scale beyond word-of-mouth.',
    solution:
      'We designed and built a full responsive ordering platform with menu CMS, cart flow, payment integration, and an order management panel for the kitchen team.',
    features: [
      'Custom Menu CMS',
      'Live Order Tracking',
      'Mobile-First Design',
      'Payment Gateway',
      'Admin Dashboard',
    ],
    outcomes: [
      '2× customer engagement increase',
      '40% performance improvement',
      '35% conversion rate',
      '80% mobile adoption',
    ],
    metrics: [
      { label: 'Engagement', value: '2×' },
      { label: 'Performance', value: '40%' },
      { label: 'Conversion', value: '35%' },
      { label: 'Mobile Adoption', value: '80%' },
    ],
    testimonial:
      'Innoveld turned our chaotic phone-order system into a professional online platform in just 6 weeks. Our night business has doubled since launch.',
    testimonialAuthor: '— Founder, Feast At Night',
    learnings: [
      'Reducing checkout steps from 7 to 3 was the single biggest conversion lever',
      'Mobile UX alone drove 80% of total orders post-launch',
      'Real-time kitchen updates reduced order errors by 60%',
    ],
    toolsUsed: ['React.js', 'Node.js', 'MongoDB', 'Vercel'],
    duration: '6 Weeks',
    icon: '🌙',
  },
  {
    id: 'tender-guard',
    title: 'Building a SaaS Procurement Intelligence Platform',
    clientType: 'Legal Tech / Government Procurement — SaaS',
    problem:
      'Small procurement teams across India were manually checking 50+ tender portals daily — missing opportunities and losing bids to more tech-savvy competitors.',
    solution:
      'A centralized SaaS dashboard that aggregates tenders, parses documents, sends keyword alerts, and provides deadline reminders — all from one unified interface.',
    features: [
      'Automated Scraper',
      'NLP Document Parser',
      'Smart Alerting',
      'Deadline Calendar',
      'Bid History',
      'Multi-portal Aggregation',
    ],
    outcomes: [
      '5× tender discovery rate',
      '70% reduction in time spent weekly',
      '90% alert accuracy',
      '3.2× bids submitted per month',
    ],
    metrics: [
      { label: 'Tender Discovery', value: '5×' },
      { label: 'Time Saved', value: '70%' },
      { label: 'Alert Accuracy', value: '90%' },
      { label: 'Bids Submitted', value: '3.2×' },
    ],
    testimonial:
      'Tender Guard changed how we operate. We now bid on 3× more opportunities without adding headcount. Innoveld Labs delivered something truly transformative.',
    testimonialAuthor: '— Operations Lead, SME Procurement Firm',
    learnings: [
      'Alert accuracy above 85% is the primary retention driver for procurement SaaS',
      'Simple UX over complex filters — users want answers, not configurability',
      'Multi-portal aggregation in real-time was the key differentiator vs competitors',
    ],
    toolsUsed: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
    duration: '10 Weeks',
    icon: '🛡️',
  },
  {
    id: 'habeeb-paradise',
    title: 'Premium E-Commerce for a Boutique Fashion Brand',
    clientType: 'Fashion & Retail — E-Commerce',
    problem:
      'Habeeb\'s Paradise had no digital storefront. Orders were placed via DMs, inventory tracked in spreadsheets, and loyal customers had no incentive to return.',
    solution:
      'A bespoke e-commerce platform with tiered loyalty membership, curated product pages with rich narratives, wishlists, reviews, and a full admin control panel.',
    features: [
      'Tiered Membership System',
      'Product Catalog CMS',
      'Wishlist & Reviews',
      'Stripe Payments',
      'Order Management',
      'Admin Dashboard',
    ],
    outcomes: [
      '3× repeat purchase rate',
      '55% longer session duration',
      '28% cart-to-checkout conversion',
      '200+ membership sign-ups at launch',
    ],
    metrics: [
      { label: 'Repeat Purchases', value: '3×' },
      { label: 'Session Duration', value: '55%' },
      { label: 'Cart Conversion', value: '28%' },
      { label: 'Members at Launch', value: '200+' },
    ],
    testimonial:
      'Professional, fast, and genuinely invested in our success. What impressed me most was how they connected every design decision to a business outcome.',
    testimonialAuthor: '— Founder, Habeeb\'s Paradise',
    learnings: [
      'Storytelling-led product pages increased average order value by 22%',
      'Membership tiers drove 3× higher repeat purchase rate within 60 days',
      'Mobile-first checkout reduced cart abandonment by 38%',
    ],
    toolsUsed: ['Next.js', 'Express', 'MongoDB', 'Stripe'],
    duration: '8 Weeks',
    icon: '🧕',
  },
];

// ─── Services ─────────────────────────────────────────────────────────────────
export const services: Service[] = [
  {
    id: 'fullstack',
    number: '01',
    icon: '⚙️',
    name: 'Full-Stack Web Development',
    description:
      'End-to-end development of scalable web applications using modern technologies. We design, build, and deploy platforms that handle real business workloads.',
    benefits: [
      'Fast, scalable, and maintainable codebases',
      'Seamless frontend-to-backend integration',
      'Performance-optimized and SEO-ready',
    ],
    deliverables: ['React / Next.js', 'Node.js / Express', 'MongoDB / PostgreSQL'],
  },
  {
    id: 'mobile',
    number: '02',
    icon: '📱',
    name: 'Mobile App Development',
    description:
      'Cross-platform mobile apps that deliver native-like experiences on iOS and Android — fast to market, easy to maintain.',
    benefits: [
      'Single codebase for iOS & Android',
      'Offline-ready with smooth animations',
      'Push notifications and real-time sync',
    ],
    deliverables: ['React Native', 'Flutter', 'Firebase'],
  },
  {
    id: 'saas',
    number: '03',
    icon: '☁️',
    name: 'SaaS Product Development',
    description:
      'Multi-tenant SaaS platforms from scratch — architected for growth, designed for conversion, built for long-term retention.',
    benefits: [
      'Subscription & billing integrations',
      'Auth, roles, and permissions system',
      'Analytics dashboards and admin panels',
    ],
    deliverables: ['SaaS Architecture', 'Stripe / Razorpay', 'AWS / Vercel'],
    featured: true,
  },
  {
    id: 'ecommerce',
    number: '04',
    icon: '🛒',
    name: 'E-Commerce Platforms',
    description:
      'Custom ordering and e-commerce systems tailored to your business model — with inventory, payments, and customer management built in.',
    benefits: [
      'Custom cart and checkout flows',
      'Payment gateway integration',
      'Real-time order tracking',
    ],
    deliverables: ['Custom E-Commerce', 'Payment Integration', 'Admin Dashboard'],
  },
  {
    id: 'api',
    number: '05',
    icon: '🔗',
    name: 'API Development & Integration',
    description:
      'Robust REST and GraphQL APIs that power your products and enable seamless third-party integrations — built for reliability and scale.',
    benefits: [
      'Clean, fully documented API design',
      'Third-party & legacy system connectors',
      'Secure auth and rate limiting',
    ],
    deliverables: ['REST APIs', 'GraphQL', 'OAuth / JWT'],
  },
  {
    id: 'uiux',
    number: '06',
    icon: '🎨',
    name: 'UI/UX Design & Prototyping',
    description:
      'User-centered design that converts — from wireframes and user flows to high-fidelity prototypes that set the stage for flawless development.',
    benefits: [
      'Research-backed design decisions',
      'Interactive Figma prototypes',
      'Design systems for consistent branding',
    ],
    deliverables: ['Figma', 'Design Systems', 'User Research'],
  },
];

// ─── Process ──────────────────────────────────────────────────────────────────
export const processSteps: ProcessStep[] = [
  {
    step: '01',
    icon: '🔍',
    title: 'Discovery & Scoping',
    description:
      'We deep-dive into your business goals, users, and constraints to define a clear product scope — before writing a single line of code.',
  },
  {
    step: '02',
    icon: '🎨',
    title: 'Design & Prototype',
    description:
      'User flows, wireframes, and high-fidelity Figma designs — validated with your team before development begins, saving time and rework.',
  },
  {
    step: '03',
    icon: '⚙️',
    title: 'Agile Development',
    description:
      '2-week sprints with weekly demos. You see real progress, give feedback, and shape the product — not just a monthly status report.',
  },
  {
    step: '04',
    icon: '🧪',
    title: 'QA & Testing',
    description:
      'Rigorous testing across devices, browsers, and edge cases. We ensure your product works perfectly before it meets your customers.',
  },
  {
    step: '05',
    icon: '🚀',
    title: 'Launch & Deploy',
    description:
      'CI/CD pipelines, cloud provisioning, and a smooth go-live process. We handle the technical complexity so you can focus on your business.',
  },
  {
    step: '06',
    icon: '📈',
    title: 'Support & Scale',
    description:
      'Post-launch monitoring, bug fixes, and iterative improvements. We grow with you — as your product evolves, so does our support.',
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      "Innoveld Labs didn't just build our platform — they understood our business. The ordering system they created transformed how we serve customers every single night.",
    author: 'Founder',
    role: 'Founder',
    company: 'Feast At Night · Food & Beverage',
    initials: 'FN',
  },
  {
    id: 't2',
    quote:
      'Professional, fast, and genuinely invested in our success. What impressed me most was how they connected every design decision to a business outcome. That level of thinking is rare.',
    author: 'Founder',
    role: 'Founder',
    company: "Habeeb's Paradise · Fashion & Retail",
    initials: 'HP',
    featured: true,
  },
  {
    id: 't3',
    quote:
      'Tender Guard was a complex product with a tight timeline. Innoveld delivered on every milestone, and the platform has genuinely changed how our team operates.',
    author: 'Operations Lead',
    role: 'Operations Lead',
    company: 'Tender Guard · Legal Tech',
    initials: 'TG',
  },
];

// ─── Team ─────────────────────────────────────────────────────────────────────
export const teamMembers: TeamMember[] = [
  {
    id: 'uwais',
    name: 'Uwais',
    role: 'Co-Founder & Full-Stack Lead',
    initials: 'UW',
    expertise: ['React', 'Node.js', 'MongoDB', 'System Design'],
    gradientClass: 'from-indigo-500 to-violet-500',
  },
  {
    id: 'siddiq',
    name: 'Siddiq',
    role: 'Co-Founder & Product Strategist',
    initials: 'SI',
    expertise: ['Product Mgmt', 'UX Research', 'Go-to-Market', 'Agile'],
    gradientClass: 'from-cyan-500 to-indigo-500',
  },
  {
    id: 'ayesha',
    name: 'Ayesha',
    role: 'UI/UX Designer',
    initials: 'AY',
    expertise: ['Figma', 'Design Systems', 'User Research', 'Prototyping'],
    gradientClass: 'from-violet-500 to-pink-500',
  },
  {
    id: 'rahul',
    name: 'Rahul',
    role: 'Backend & DevOps Engineer',
    initials: 'RK',
    expertise: ['Python', 'FastAPI', 'AWS', 'CI/CD'],
    gradientClass: 'from-emerald-500 to-cyan-500',
  },
];
