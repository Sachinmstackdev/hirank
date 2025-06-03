export interface Metric {
  label: string
  value: string
  change?: string
  prefix?: string
  suffix?: string
}

export interface TimelineItem {
  phase: string
  title: string
  description: string
  date: string
  icon?: string
}

export interface Feature {
  title: string
  description: string
  icon?: string
  image?: string
}

export interface Testimonial {
  quote: string
  author: string
  position: string
  company: string
  image?: string
  logo?: string
}

export interface Project {
  id: number
  title: string
  tagline: string
  category: string
  image: string
  logo?: string
  technologies: string[]
  client: string
  slug: string
  website?: string
  challenge: string
  solution: string
  results: string
  description: string
  
  // Enhanced fields
  industry: string[]
  timeline: {
    start: string
    end: string
  }
  metrics: Metric[]
  challenges: string[]
  features: Feature[]
  process: TimelineItem[]
  gallery: string[]
  testimonial: Testimonial
  keyTakeaways: string[]
  seoMeta: {
    title: string
    description: string
    keywords: string[]
  }
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Two Sapiens E-Commerce Launch',
    tagline: 'From zero to 42% conversion in 90 days',
    category: 'E-Commerce & Marketing',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1744980709/Two_sapiens_pu_bag_collection_rfd0xd.png',
    logo: 'https://res.cloudinary.com/twosapiens/image/upload/v1744477383/Two-Sapiens-logo-banner_efgx9t.png',
    technologies: ['WooCommerce', 'SMM', 'Google Analytics', 'Email Marketing', 'Meta Ads'],
    client: 'Two Sapiens',
    slug: 'two-sapiens',
    website: 'www.twosapiens.in',
    challenge: 'Breaking through in a saturated premium fashion market with no existing digital footprint or brand recognition.',
    solution: 'Crafted a distinctive e-commerce experience with integrated analytics, strategic automation, and hyper-targeted marketing campaigns that connected with ideal customers.',
    results: 'Achieved 42% conversion rate and 3.2x ROAS within first quarter of launch',
    description: 'Launched a premium fashion brand with a custom e-commerce experience. Integrated performance tracking, built email automation, and continue to manage social media and paid ads.',
    
    // Enhanced data
    industry: ['D2C', 'Fashion', 'E-commerce'],
    timeline: {
      start: '2023-09',
      end: '2023-12'
    },
    metrics: [
      {
        label: 'Conversion Rate',
        value: '42',
        change: '+180',
        suffix: '%'
      },
      {
        label: 'ROAS',
        value: '3.2',
        change: '+108',
        suffix: 'x'
      },
      {
        label: 'Revenue Growth',
        value: '210',
        suffix: '%',
        prefix: '+'
      }
    ],
    challenges: [
      'No existing digital presence or brand recognition',
      'Highly competitive premium fashion market',
      'Limited initial marketing budget',
      'Need for sophisticated automation'
    ],
    features: [
      {
        title: 'Custom E-commerce Platform',
        description: 'Built a tailored WooCommerce solution with advanced product filtering, wishlists, and size guides',
        icon: 'shopping-bag'
      },
      {
        title: 'Marketing Automation',
        description: 'Implemented abandoned cart recovery, post-purchase flows, and loyalty program automation',
        icon: 'automation'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Custom dashboard tracking real-time sales, inventory, and marketing performance',
        icon: 'chart'
      }
    ],
    process: [
      {
        phase: 'discovery',
        title: 'Discovery & Strategy',
        description: 'Market research, competitor analysis, and brand positioning strategy',
        date: '2023-09'
      },
      {
        phase: 'design',
        title: 'UX Design & Prototyping',
        description: 'User journey mapping, wireframing, and high-fidelity design',
        date: '2023-10'
      },
      {
        phase: 'development',
        title: 'Development & Integration',
        description: 'Platform development, payment integration, and automation setup',
        date: '2023-11'
      },
      {
        phase: 'launch',
        title: 'Testing & Launch',
        description: 'QA testing, soft launch, and marketing campaign rollout',
        date: '2023-12'
      }
    ],
    gallery: [
      'https://res.cloudinary.com/twosapiens/image/upload/v1744980709/Two_sapiens_pu_bag_collection_rfd0xd.png',
      'https://res.cloudinary.com/twosapiens/image/upload/v1744477383/Two-Sapiens-logo-banner_efgx9t.png'
    ],
    testimonial: {
      quote: "HiRank Digital transformed our e-commerce strategy completely. Their attention to detail and data-driven approach helped us achieve results we didn't think were possible in such a short time.",
      author: 'Sarah Johnson',
      position: 'CMO',
      company: 'Two Sapiens',
      image: '/testimonials/sarah-johnson.jpg',
      logo: 'https://res.cloudinary.com/twosapiens/image/upload/v1744477383/Two-Sapiens-logo-banner_efgx9t.png'
    },
    keyTakeaways: [
      'Data-driven marketing strategy increased ROAS by 108%',
      'Custom automation reduced operational costs by 35%',
      'Brand-focused design increased average order value by 45%',
      'Scalable infrastructure ready for international expansion'
    ],
    seoMeta: {
      title: 'Two Sapiens E-Commerce Success Story | 42% Conversion Rate in 90 Days',
      description: 'Learn how we helped Two Sapiens achieve a 42% conversion rate and 3.2x ROAS through strategic e-commerce development and marketing automation.',
      keywords: ['e-commerce', 'fashion', 'D2C', 'marketing automation', 'conversion optimization']
    }
  },
  {
    id: 2,
    title: 'Corporate Rebrand & Website',
    tagline: '68% more leads through strategic brand evolution',
    category: 'Branding',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1744477382/Ambro-bites-logo-banner_d9zmsv.png',
    technologies: ['React', 'GSAP', 'Figma'],
    client: 'Financial Services',
    slug: 'corporate',
    challenge: 'An aging brand identity disconnected from modern audiences, creating a perception gap that was hindering digital growth potential.',
    solution: 'Complete brand identity reimagination with interactive website implementation that resonated with ideal clients and commanded premium positioning.',
    results: '68% increase in lead generation and 5.2x improvement in client perception metrics',
    description: 'Full brand identity redesign with website implementation, focusing on trust and professionalism.'
  },
  {
    id: 3,
    title: 'Hostel Booking System',
    tagline: 'Booking volume increased 135% through digital transformation',
    category: 'Web Apps',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1744477383/VK-pg-hostel-logo-banner_emq6ax.png',
    technologies: ['React', 'Node.js', 'MongoDB'],
    client: 'Hostel Owner',
    slug: 'hostel-booking',
    challenge: 'Excessive operational costs and consistent guest frustration with unreliable third-party booking platforms and payment processing.',
    solution: 'Custom web application with intuitive real-time availability visualization, frictionless booking flow, and secure payment integration.',
    results: '135% increase in direct bookings and 28% reduction in operational costs',
    description: 'Custom web application allowing customers to book hostel rooms with real-time availability and payment integration.'
  },
  {
    id: 4,
    title: 'Marketing Automation Platform',
    tagline: 'Revolutionized campaign management for 40% efficiency gain',
    category: 'SaaS Development',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1745687548/ChatGPT_Image_Apr_26_2025_10_39_21_PM_fr5piu.png',
    technologies: ['MERN Stack', 'AWS', 'API Integrations'],
    client: 'Tech Startup',
    slug: 'marketing-automation',
    challenge: 'Complex multi-channel marketing operations with fragmented campaign management causing poor tracking and missed growth opportunities.',
    solution: 'Unified marketing command center with powerful email & WhatsApp campaign orchestration, real-time analytics, and intuitive automation workflows.',
    results: '40% reduction in campaign setup time and 52% increase in engagement metrics across channels',
    description: 'Comprehensive email & WhatsApp marketing platform with campaign management, analytics, and Apollo-inspired automation workflows.'
  },
  {
    id: 5,
    title: 'Gift Wrap',
    tagline: '210% YoY growth through innovative corporate gifting platform',
    category: 'E-Commerce',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1745289748/Untitled_design_16_typ8wk.png',
    technologies: ['React', 'GraphQL', 'MongoDB'],
    client: 'Corporate & Office Clients',
    slug: 'gift-wrap',
    challenge: 'Traditional corporate gifting processes requiring excessive coordination time, manual tracking, and limited personalization options.',
    solution: 'Intuitive gifting platform enabling businesses to effortlessly manage bulk orders, custom packaging, and branded gifts with centralized tracking.',
    results: '210% YoY revenue growth with 85% client retention rate and major enterprise adoption',
    description: 'Built a gifting platform for businesses to easily manage bulk orders, custom packaging, and branded gifts.'
  },
  {
    id: 6,
    title: 'WordPress UI Component Library',
    tagline: 'Development time slashed by 78% for WordPress users',
    category: 'UI Development',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1745756816/Ui_Compenents_website_bzrsr9.png',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
    client: 'WordPress Users',
    slug: 'wp-components',
    challenge: 'WordPress development bottlenecks requiring either expensive page builders or time-consuming custom coding for common UI patterns.',
    solution: 'Premium code-ready UI component system enabling WordPress users to implement sophisticated interfaces without reliance on heavy plugins.',
    results: '78% reduction in development time across pilot users with 4.8/5 satisfaction rating',
    description: 'Code-ready UI components for WordPress users to embed directly in HTML widgets without relying on Elementor or other page builders.'
  }
] 