import { Metadata } from 'next'
import ClientCaseStudyPage from './client-page'

export const metadata: Metadata = {
  title: 'Corporate Rebrand & Website | Intelligence Dock',
  description: 'How we helped a financial services company modernize their brand identity and create a professional website that builds trust and drives conversions.',
  openGraph: {
    title: 'Corporate Rebrand & Website Case Study | Intelligence Dock',
    description: 'See how we transformed a financial services brand with a complete identity redesign and professional website implementation.',
    images: [
      {
        url: 'https://res.cloudinary.com/twosapiens/image/upload/v1744477382/Ambro-bites-logo-banner_d9zmsv.png',
        width: 1200,
        height: 630,
        alt: 'Corporate rebrand and website design case study'
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Rebrand & Website Case Study',
    description: 'Financial services company transformation with brand identity redesign',
    images: ['https://res.cloudinary.com/twosapiens/image/upload/v1744477382/Ambro-bites-logo-banner_d9zmsv.png'],
  }
}

// For the static route, we don't need params since the slug is in the file path
export default async function CorporateRebrandPage() {
  // This is a static page, so we can just return the data directly
  const projectData = {
    title: 'Corporate Rebrand & Website',
    subtitle: 'Transforming a Financial Services Brand for Modern Markets',
    description: 'How we revitalized a financial services company with a complete brand identity redesign and website implementation, focusing on trust, professionalism, and conversion optimization.',
    tagline: 'Building Trust Through Design',
    clientName: 'Ambro Capital',
    industry: 'Financial Services',
    timeframe: 'Mar 2023 - Aug 2023',
    heroImage: 'https://res.cloudinary.com/twosapiens/image/upload/v1744477382/Ambro-bites-logo-banner_d9zmsv.png',
    logoImage: 'https://res.cloudinary.com/twosapiens/image/upload/v1744477382/Ambro-bites-logo-banner_d9zmsv.png',
    liveUrl: 'https://www.ambrocapital.com',
    executiveSummary: [
      {
        title: 'Challenge',
        description: 'An established financial services firm needed to modernize their outdated brand identity and website to appeal to younger investors while maintaining trust.'
      },
      {
        title: 'Solution',
        description: 'We designed a complete brand identity system and built a conversion-focused website that balances innovation with trustworthiness.'
      }
    ],
    clientDescription: 'Ambro Capital is a boutique financial services firm specializing in wealth management and investment strategies for high-net-worth individuals and small businesses.',
    challenges: [
      {
        title: 'Outdated Brand Perception',
        description: 'The existing brand identity failed to resonate with younger investors while their dated website undermined credibility.',
        beforeState: 'Inconsistent branding across channels'
      },
      {
        title: 'Complex Information Architecture',
        description: 'Financial products and services were difficult to understand due to poor information hierarchy and presentation.',
        beforeState: 'Confusing navigation and content structure'
      },
      {
        title: 'Low Digital Engagement',
        description: 'The website failed to convert visitors into leads with poor user journeys and calls-to-action.',
        beforeState: 'High bounce rates and low conversion'
      }
    ],
    approach: 'We applied a strategic design thinking methodology to create a brand identity and website that balances professionalism with approachability, using data-driven insights to optimize the user experience and conversion paths.',
    solutions: [
      {
        title: 'Brand Identity System',
        description: 'Developed a comprehensive brand identity including logo, color palette, typography, and visual elements that convey trust, expertise, and forward-thinking values.'
      },
      {
        title: 'Information Architecture Redesign',
        description: 'Reimagined the content structure and navigation to create intuitive pathways for different user personas, from first-time investors to experienced clients.'
      },
      {
        title: 'Conversion-Optimized Website',
        description: 'Built a responsive website with strategic CTAs, social proof elements, and personalized content paths to guide visitors through the consideration journey.'
      },
      {
        title: 'Content Strategy',
        description: 'Created a thought leadership content plan to establish authority and improve SEO, with simplified explanations of complex financial concepts.'
      }
    ],
    technologies: [
      {
        name: 'React',
        icon: 'react'
      },
      {
        name: 'GSAP',
        icon: 'gsap'
      },
      {
        name: 'Figma',
        icon: 'figma'
      },
      {
        name: 'WordPress',
        icon: 'wordpress'
      }
    ],
    process: [
      {
        title: 'Brand Discovery',
        description: 'Conducted stakeholder interviews, market research, and competitor analysis to understand the brand positioning and target audience needs.',
        outcomeText: 'Comprehensive brand strategy document'
      },
      {
        title: 'Brand Identity Design',
        description: 'Developed multiple creative directions for the visual identity, refining based on client feedback and user testing.',
        outcomeText: 'Complete brand guidelines'
      },
      {
        title: 'Website UX/UI Design',
        description: 'Created wireframes and high-fidelity mockups for the website, focusing on user journeys and conversion optimization.',
        outcomeText: 'Approved design system'
      },
      {
        title: 'Development & Implementation',
        description: 'Built the website using React for the frontend with a WordPress CMS, ensuring performance, accessibility, and SEO best practices.',
        outcomeText: 'Fully responsive website'
      }
    ],
    outcomes: [
      {
        title: 'Lead Generation',
        value: '+128%',
        description: 'Increase in qualified leads'
      },
      {
        title: 'Engagement',
        value: '4.2min',
        description: 'Avg. session duration (up from 1.8min)'
      },
      {
        title: 'Client Acquisition',
        value: '+35%',
        description: 'Growth in new client acquisition'
      }
    ],
    keyTakeaways: [
      'Trust elements must be visually reinforced throughout the customer journey',
      'Simplified explanations of complex services drive higher engagement',
      'Strategic CTAs targeted to specific user segments increase conversion rates'
    ],
    galleryImages: [
      'https://res.cloudinary.com/twosapiens/image/upload/v1744477382/Ambro-bites-logo-banner_d9zmsv.png',
      'https://res.cloudinary.com/twosapiens/image/upload/v1744477382/Ambro-bites-logo-banner_d9zmsv.png',
    ],
    testimonial: {
      quote: 'Intelligence Dock completely transformed our brand and digital presence. The new identity perfectly balances our heritage with a modern outlook, while the website has dramatically increased our lead generation and conversion rates.',
      author: 'Robert Ambrose',
      position: 'CEO, Ambro Capital',
      avatar: 'https://res.cloudinary.com/twosapiens/image/upload/v1744477382/Ambro-bites-logo-banner_d9zmsv.png',
    },
    relatedCaseStudies: [
      {
        title: 'Marketing Automation Platform',
        subtitle: 'SaaS Development for Tech Startup',
        slug: 'marketing-automation'
      }
    ],
    miniTestimonials: [
      {
        quote: 'The brand guidelines have made our marketing efforts so much more cohesive and effective across all channels.',
        author: 'Jennifer Lee',
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
    "url": "https://www.intelligencedock.com/projects/corporate",
    "datePublished": "2023-09-15",
    "provider": {
      "@type": "Organization",
      "name": "Intelligence Dock",
      "url": "https://www.intelligencedock.com",
      "logo": "https://www.intelligencedock.com/logo.png"
    },
    "about": {
      "@type": "Brand",
      "name": projectData.clientName,
      "description": projectData.clientDescription,
      "url": projectData.liveUrl
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
      "Brand identity design",
      "Financial services website design",
      "Conversion optimization"
    ],
    "result": {
      "@type": "Thing",
      "name": "Increased Lead Generation",
      "description": "128% improvement in qualified leads"
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