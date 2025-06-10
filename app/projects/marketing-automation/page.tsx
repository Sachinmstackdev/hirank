import { Metadata } from 'next'
import ClientCaseStudyPage from './client-page'

export const metadata: Metadata = {
  title: 'Marketing Automation Platform | Intelligence Dock',
  description: 'How we built a comprehensive marketing platform that increased efficiency by 40% and boosted engagement metrics by 52% for a tech startup.',
  openGraph: {
    title: 'Marketing Automation Platform Case Study | Intelligence Dock',
    description: 'See how we developed a powerful marketing automation system that revolutionized campaign management for a growing tech startup.',
    images: [
      {
        url: 'https://res.cloudinary.com/twosapiens/image/upload/v1745687548/ChatGPT_Image_Apr_26_2025_10_39_21_PM_fr5piu.png',
        width: 1200,
        height: 630,
        alt: 'Marketing automation platform dashboard'
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Automation Platform Case Study',
    description: 'How we built a SaaS platform that increased marketing efficiency by 40%',
    images: ['https://res.cloudinary.com/twosapiens/image/upload/v1745687548/ChatGPT_Image_Apr_26_2025_10_39_21_PM_fr5piu.png'],
  }
}

// For the static route, we don't need params since the slug is in the file path
export default async function MarketingAutomationPage() {
  // This is a static page, so we can just return the data directly
  const projectData = {
    title: 'Marketing Automation Platform',
    subtitle: 'SaaS Development for Tech Startup',
    description: 'How we designed and developed a comprehensive marketing automation platform that streamlined campaign management, enhanced analytics tracking, and significantly improved marketing performance.',
    tagline: 'Revolutionizing Campaign Management',
    clientName: 'Apollo Marketing',
    industry: 'Technology / SaaS',
    timeframe: 'Jun 2023 - Dec 2023',
    heroImage: 'https://res.cloudinary.com/twosapiens/image/upload/v1745687548/ChatGPT_Image_Apr_26_2025_10_39_21_PM_fr5piu.png',
    logoImage: 'https://res.cloudinary.com/twosapiens/image/upload/v1745687548/ChatGPT_Image_Apr_26_2025_10_39_21_PM_fr5piu.png',
    liveUrl: 'https://www.apollomarketing.io',
    executiveSummary: [
      {
        title: 'Challenge',
        description: 'A growing tech startup was struggling with fragmented campaign management across multiple channels, leading to inefficiencies and poor tracking.'
      },
      {
        title: 'Solution',
        description: 'We built a unified marketing platform with powerful automation capabilities, integrated analytics, and multi-channel campaign orchestration.'
      }
    ],
    clientDescription: 'Apollo Marketing is a tech startup that provides marketing solutions for small to medium-sized businesses, focusing on streamlining campaign management and performance analytics.',
    challenges: [
      {
        title: 'Fragmented Systems',
        description: 'The client was using multiple disconnected tools for email, social media, and analytics, causing inefficiencies and data silos.',
        beforeState: 'Using 6+ different marketing tools'
      },
      {
        title: 'Limited Automation',
        description: 'Manual processes for campaign setup and monitoring resulted in extensive time investments and human error.',
        beforeState: 'Manual campaign management'
      },
      {
        title: 'Poor Data Visibility',
        description: 'Lack of integrated analytics made it difficult to track performance and optimize marketing efforts across channels.',
        beforeState: 'Disconnected analytics dashboards'
      }
    ],
    approach: 'We took a modular, API-first approach to building the platform, ensuring scalability and future extensibility. The development process prioritized an intuitive user experience while implementing powerful automation capabilities under the hood.',
    solutions: [
      {
        title: 'Unified Platform Architecture',
        description: 'Developed a centralized platform using MERN stack (MongoDB, Express, React, Node.js) with microservices for different marketing functions.'
      },
      {
        title: 'Multi-Channel Campaign Orchestration',
        description: 'Created an intuitive campaign builder with drag-and-drop functionality for email and WhatsApp campaign creation and scheduling.'
      },
      {
        title: 'Advanced Analytics Engine',
        description: 'Implemented real-time analytics with customizable dashboards, performance tracking, and actionable insights.'
      },
      {
        title: 'Workflow Automation',
        description: 'Built sophisticated automation tools for subscriber segmentation, personalized messaging, and triggered campaign sequences.'
      }
    ],
    technologies: [
      {
        name: 'React',
        icon: 'react'
      },
      {
        name: 'Node.js',
        icon: 'nodejs'
      },
      {
        name: 'MongoDB',
        icon: 'mongodb'
      },
      {
        name: 'AWS',
        icon: 'aws'
      }
    ],
    process: [
      {
        title: 'Requirements Analysis',
        description: 'Conducted thorough stakeholder interviews and competitor analysis to identify key platform requirements and differentiators.',
        outcomeText: 'Detailed product specification'
      },
      {
        title: 'UX/UI Design',
        description: 'Created wireframes and interactive prototypes focused on intuitive user flows and accessibility for marketing professionals.',
        outcomeText: 'User-tested design system'
      },
      {
        title: 'Agile Development',
        description: 'Implemented the platform using Agile methodology with two-week sprints, continuous integration, and regular stakeholder reviews.',
        outcomeText: 'Modular platform architecture'
      },
      {
        title: 'Beta Testing & Refinement',
        description: 'Conducted extensive beta testing with selected customers to gather feedback and refine functionality before full launch.',
        outcomeText: 'Optimized production release'
      }
    ],
    outcomes: [
      {
        title: 'Efficiency',
        value: '+40%',
        description: 'Reduction in campaign setup time'
      },
      {
        title: 'Engagement',
        value: '+52%',
        description: 'Increase in cross-channel metrics'
      },
      {
        title: 'Revenue Growth',
        value: '+64%',
        description: 'Client revenue increase in 6 months'
      }
    ],
    keyTakeaways: [
      'Unified platforms significantly reduce marketing operational overhead',
      'Intuitive UX is critical for adoption of complex marketing tools',
      'API-first architecture ensures long-term platform extensibility'
    ],
    galleryImages: [
      'https://res.cloudinary.com/twosapiens/image/upload/v1745687548/ChatGPT_Image_Apr_26_2025_10_39_21_PM_fr5piu.png',
      'https://res.cloudinary.com/twosapiens/image/upload/v1745687548/ChatGPT_Image_Apr_26_2025_10_39_21_PM_fr5piu.png',
    ],
    testimonial: {
      quote: 'Intelligence Dock didn\'t just build a platform, they transformed our entire approach to marketing. The automation capabilities have saved us countless hours while the analytics provide insights we never had access to before. The result is more effective campaigns and happier clients.',
      author: 'Alex Rivera',
      position: 'CTO, Apollo Marketing',
      avatar: 'https://res.cloudinary.com/twosapiens/image/upload/v1745687548/ChatGPT_Image_Apr_26_2025_10_39_21_PM_fr5piu.png',
    },
    relatedCaseStudies: [
      {
        title: 'Hostel Booking System',
        subtitle: 'Custom Web Application',
        slug: 'hostel-booking'
      }
    ],
    miniTestimonials: [
      {
        quote: 'The workflow automation tools have completely changed how we approach campaign creation - we\'re now able to deliver much more personalized experiences at scale.',
        author: 'Sarah Johnson',
        position: 'Marketing Director'
      }
    ]
  };
  
  // Enhanced Schema for case study with rich structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "name": projectData.title,
    "description": projectData.description,
    "url": "https://www.intelligencedock.com/projects/marketing-automation",
    "datePublished": "2024-01-15",
    "provider": {
      "@type": "Organization",
      "name": "Intelligence Dock",
      "url": "https://www.intelligencedock.com",
      "logo": "https://www.intelligencedock.com/logo.png"
    },
    "about": {
      "@type": "SoftwareApplication",
      "name": "Marketing Automation Platform",
      "description": "Comprehensive marketing platform with campaign management and analytics",
      "applicationCategory": "MarketingApplication",
      "operatingSystem": "Cloud"
    },
    "reviewedBy": {
      "@type": "Person",
      "name": projectData.testimonial.author,
      "jobTitle": projectData.testimonial.position.split(',')[0]
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": projectData.testimonial.author
      },
      "reviewBody": projectData.testimonial.quote
    },
    "teaches": [
      "Marketing automation",
      "SaaS development",
      "Campaign management"
    ],
    "result": {
      "@type": "Thing",
      "name": "Increased Marketing Efficiency",
      "description": "40% reduction in campaign setup time with 52% improvement in engagement metrics"
    },
    "workExample": {
      "@type": "CreativeWork",
      "image": projectData.galleryImages[0]
    }
  }
  
  return (
    <>
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData)
        }}
      />
      
      {/* Client component with all interactive elements */}
      <ClientCaseStudyPage projectData={projectData} />
    </>
  )
} 