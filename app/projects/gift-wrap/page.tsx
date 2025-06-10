import { Metadata } from 'next'
import ClientCaseStudyPage from './client-page'

export const metadata: Metadata = {
  title: 'Gift Wrap | Corporate Gifting Platform | Intelligence Dock',
  description: 'How we built a corporate gifting platform that achieved 210% YoY growth and 85% client retention through intuitive bulk ordering and branding options.',
  openGraph: {
    title: 'Gift Wrap Case Study | Corporate Gifting Platform',
    description: 'See how we developed an innovative corporate gifting platform that streamlined bulk ordering, custom packaging, and branded gift management.',
    images: [
      {
        url: 'https://res.cloudinary.com/twosapiens/image/upload/v1745289748/Untitled_design_16_typ8wk.png',
        width: 1200,
        height: 630,
        alt: 'Gift Wrap corporate gifting platform dashboard'
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gift Wrap: Corporate Gifting Platform Case Study',
    description: 'How we built a platform that achieved 210% YoY growth through innovative corporate gifting solutions',
    images: ['https://res.cloudinary.com/twosapiens/image/upload/v1745289748/Untitled_design_16_typ8wk.png'],
  }
}

// For the static route, we don't need params since the slug is in the file path
export default async function GiftWrapPage() {
  // This is a static page, so we can just return the data directly
  const projectData = {
    title: 'Gift Wrap',
    subtitle: 'Innovative Corporate Gifting Platform',
    description: 'How we designed and developed a complete corporate gifting platform that revolutionized business gift management with streamlined bulk ordering, custom branding, and centralized tracking.',
    tagline: 'Transforming Business Gifting',
    clientName: 'Gift Wrap',
    industry: 'E-Commerce / Corporate Services',
    timeframe: 'Sep 2023 - Feb 2024',
    heroImage: 'https://res.cloudinary.com/twosapiens/image/upload/v1745289748/Untitled_design_16_typ8wk.png',
    logoImage: 'https://res.cloudinary.com/twosapiens/image/upload/v1745289748/Untitled_design_16_typ8wk.png',
    liveUrl: 'https://www.giftwrapplatform.com',
    executiveSummary: [
      {
        title: 'Challenge',
        description: 'Corporate gifting involved excessive coordination time, fragmented processes, and limited personalization options, creating frustration for businesses.'
      },
      {
        title: 'Solution',
        description: 'We built a comprehensive gifting platform enabling businesses to manage bulk orders, create custom gift packages, and track deliveries in one unified system.'
      }
    ],
    clientDescription: 'Gift Wrap is a startup that provides corporate gifting solutions for businesses of all sizes, focusing on simplifying the process of sending branded gifts to clients, employees, and partners.',
    challenges: [
      {
        title: 'Complex Ordering Process',
        description: 'Companies struggled with coordinating bulk gift orders, especially for events and holidays, leading to errors and missed deadlines.',
        beforeState: 'Manual spreadsheet tracking'
      },
      {
        title: 'Limited Customization',
        description: 'Existing solutions offered minimal branding options, preventing companies from creating truly personalized gift experiences.',
        beforeState: 'Generic gift options only'
      },
      {
        title: 'Tracking Difficulties',
        description: 'Tracking the status of hundreds of gift deliveries was nearly impossible, leading to customer service challenges and recipient confusion.',
        beforeState: 'No centralized tracking system'
      }
    ],
    approach: 'We took a comprehensive approach that focused on simplifying the corporate gifting journey while adding powerful customization and management tools. Our solution needed to accommodate everything from small businesses sending dozens of gifts to enterprises managing thousands of recipients.',
    solutions: [
      {
        title: 'Bulk Order Management',
        description: 'Developed an intuitive interface for CSV uploads, list management, and gift selection with variable pricing tiers and approval workflows.'
      },
      {
        title: 'Branding & Customization Engine',
        description: 'Created a powerful customization system allowing companies to design branded packaging, custom cards, and personalized gift bundles.'
      },
      {
        title: 'Centralized Tracking Dashboard',
        description: 'Implemented a real-time tracking system for monitoring order status, delivery confirmation, and recipient engagement metrics.'
      },
      {
        title: 'Recipient Experience Portal',
        description: 'Built a dedicated interface for gift recipients to customize certain aspects of their gifts, choose delivery preferences, and send thank-you notes.'
      }
    ],
    technologies: [
      {
        name: 'React',
        icon: 'react'
      },
      {
        name: 'GraphQL',
        icon: 'graphql'
      },
      {
        name: 'MongoDB',
        icon: 'mongodb'
      },
      {
        name: 'Stripe',
        icon: 'stripe'
      }
    ],
    process: [
      {
        title: 'Market Research',
        description: 'Conducted extensive research with corporate procurement teams, HR departments, and marketing agencies to identify key pain points in the corporate gifting process.',
        outcomeText: 'Comprehensive market analysis'
      },
      {
        title: 'UX Design & Prototyping',
        description: 'Created detailed wireframes and interactive prototypes for both the corporate management interface and recipient experience.',
        outcomeText: 'Validated user flows'
      },
      {
        title: 'Platform Development',
        description: 'Built the platform with a React frontend, GraphQL API, and MongoDB database, focusing on scalability for handling high-volume gifting campaigns.',
        outcomeText: 'Production-ready platform'
      },
      {
        title: 'Vendor Integration',
        description: 'Established partnerships with gift vendors, logistics providers, and packaging suppliers to create a complete gifting ecosystem.',
        outcomeText: 'Full service offering'
      }
    ],
    outcomes: [
      {
        title: 'Business Growth',
        value: '+210%',
        description: 'Year-over-year revenue growth'
      },
      {
        title: 'Retention',
        value: '85%',
        description: 'Client retention rate'
      },
      {
        title: 'Efficiency',
        value: '6x',
        description: 'Faster gift campaign deployment'
      }
    ],
    keyTakeaways: [
      'Simplifying complex workflows drives enterprise adoption',
      'Branding personalization is critical for corporate gifting success',
      'Recipient experience is as important as sender management tools'
    ],
    galleryImages: [
      'https://res.cloudinary.com/twosapiens/image/upload/v1745289748/Untitled_design_16_typ8wk.png',
      'https://res.cloudinary.com/twosapiens/image/upload/v1745289748/Untitled_design_16_typ8wk.png',
    ],
    testimonial: {
      quote: 'Gift Wrap has completely transformed how we manage our corporate gifting. What used to take weeks of coordination now takes just hours, and our clients consistently rave about the quality and personalization of the gifts. The platform has become an essential part of our client relationship strategy.',
      author: 'Michael Torres',
      position: 'VP of Client Relations, EnterpriseGlobal',
      avatar: 'https://res.cloudinary.com/twosapiens/image/upload/v1745289748/Untitled_design_16_typ8wk.png',
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
        quote: 'The ability to customize every aspect of our gift packages has significantly improved how our brand is perceived by clients.',
        author: 'Sophia Chen',
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
    "url": "https://www.intelligencedock.com/projects/gift-wrap",
    "datePublished": "2024-03-10",
    "provider": {
      "@type": "Organization",
      "name": "Intelligence Dock",
      "url": "https://www.intelligencedock.com",
      "logo": "https://www.intelligencedock.com/logo.png"
    },
    "about": {
      "@type": "SoftwareApplication",
      "name": "Gift Wrap Corporate Gifting Platform",
      "description": "Platform for managing corporate gifting workflows and customization",
      "applicationCategory": "BusinessApplication",
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
      "Corporate gifting platform design",
      "E-commerce customization",
      "Business process optimization"
    ],
    "result": {
      "@type": "Thing",
      "name": "Increased Business Growth",
      "description": "210% year-over-year revenue growth with 85% client retention"
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