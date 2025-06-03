export interface Project {
  id: number
  title: string
  tagline: string
  category: string
  image: string
  technologies: string[]
  client: string
  slug: string
  website?: string
  challenge: string
  solution: string
  results: string
  description: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Two Sapiens E-Commerce Launch',
    tagline: 'From zero to 42% conversion in 90 days',
    category: 'E-Commerce & Marketing',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1744980709/Two_sapiens_pu_bag_collection_rfd0xd.png',
    technologies: ['WooCommerce', 'SMM', 'Google Analytics', 'Email Marketing', 'Meta Ads'],
    client: 'Two Sapiens',
    slug: 'two-sapiens',
    website: 'www.twosapiens.in',
    challenge: 'Breaking through in a saturated premium fashion market with no existing digital footprint or brand recognition.',
    solution: 'Crafted a distinctive e-commerce experience with integrated analytics, strategic automation, and hyper-targeted marketing campaigns that connected with ideal customers.',
    results: 'Achieved 42% conversion rate and 3.2x ROAS within first quarter of launch',
    description: 'Launched a premium fashion brand with a custom e-commerce experience. Integrated performance tracking, built email automation, and continue to manage social media and paid ads.'
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