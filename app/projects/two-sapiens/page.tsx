import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ClientCaseStudyPage from './client-page'

export const metadata: Metadata = {
  title: 'Two Sapiens: Luxury E-Commerce Success Story | Intelligence Dock',
  description: 'How we increased conversions by 40% for Two Sapiens luxury bag brand through premium UX design, personalized journeys and performance optimization.',
  openGraph: {
    title: 'Two Sapiens Case Study | Luxury E-Commerce Success',
    description: 'See how we transformed Two Sapiens into a thriving luxury bag e-commerce brand with conversion-focused design and strategic optimization.',
    images: [
      {
        url: 'https://res.cloudinary.com/twosapiens/image/upload/v1744980709/Two_sapiens_pu_bag_collection_rfd0xd.png',
        width: 1200,
        height: 630,
        alt: 'Two Sapiens luxury bag collection'
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Two Sapiens: E-Commerce Transformation Case Study',
    description: 'How we increased conversions by 40% for Two Sapiens luxury bag brand',
    images: ['https://res.cloudinary.com/twosapiens/image/upload/v1744980709/Two_sapiens_pu_bag_collection_rfd0xd.png'],
  }
}

// For the static route, we don't need params since the slug is in the file path
export default async function TwoSapiensPage() {
  console.log('Rendering Two Sapiens page directly')
  
  // This is a static page, so we can just return the data directly
  const projectData = {
    title: 'Two Sapiens',
    subtitle: 'Full-Scale Digital Growth for Premium Leather Brand',
    description: 'A comprehensive digital transformation that turned Two Sapiens into a market leader through multi-channel marketing, marketplace optimization, and data-driven growth strategies.',
    tagline: 'From Local Brand to Multi-Channel Market Leader',
    clientName: 'Two Sapiens',
    industry: 'Luxury Leather Goods',
    timeframe: 'Jan 2023 - Present',
    heroImage: 'https://res.cloudinary.com/twosapiens/image/upload/v1744980709/Two_sapiens_pu_bag_collection_rfd0xd.png',
    logoImage: 'https://res.cloudinary.com/twosapiens/image/upload/v1744477383/Two-Sapiens-logo-banner_efgx9t.png',
    liveUrl: 'https://www.twosapiens.com',
    executiveSummary: [
      {
        title: 'Challenge',
        description: 'Two Sapiens needed to establish a strong digital presence across multiple channels while maintaining their premium brand positioning.'
      },
      {
        title: 'Solution',
        description: 'We implemented an omnichannel strategy combining e-commerce optimization, marketplace presence, paid advertising, and email marketing.'
      },
      {
        title: 'Results',
        description: 'Achieved 300% YoY growth with successful expansion to Amazon, Flipkart, and international markets.'
      }
    ],
    clientDescription: 'Two Sapiens crafts premium leather bags and accessories, combining traditional craftsmanship with modern design. Their commitment to quality and sustainability needed to be reflected across all digital touchpoints.',
    challenges: [
      {
        title: 'Brand Consistency',
        description: 'Maintaining premium brand image across multiple marketplaces and channels.',
        beforeState: 'Limited to single-channel sales'
      },
      {
        title: 'Market Expansion',
        description: 'Breaking into competitive marketplaces while maintaining profit margins.',
        beforeState: 'No marketplace presence'
      },
      {
        title: 'Customer Acquisition',
        description: 'Scaling customer acquisition while keeping CAC under control.',
        beforeState: 'High customer acquisition costs'
      },
      {
        title: 'Data Integration',
        description: 'Unifying customer data across multiple platforms for coherent marketing.',
        beforeState: 'Fragmented customer data'
      }
    ],
    approach: 'We developed a data-driven omnichannel strategy, focusing on brand consistency, customer experience, and performance marketing across all platforms.',
    solutions: [
      {
        title: 'Multi-Channel E-commerce',
        description: 'Custom-built website with marketplace integrations for Amazon and Flipkart.'
      },
      {
        title: 'Performance Marketing',
        description: 'Optimized campaigns across Google Ads, Facebook Ads, and Instagram with advanced targeting.'
      },
      {
        title: 'Email Automation',
        description: 'Personalized email sequences with 45% open rates and 12% conversion rates.'
      },
      {
        title: 'Analytics Infrastructure',
        description: 'Unified dashboard combining data from all channels for real-time decision making.'
      },
      {
        title: 'Marketplace Optimization',
        description: 'Optimized listings and A+ content on Amazon and Flipkart with brand registry.'
      }
    ],
    technologies: [
      {
        name: 'Next.js',
        icon: 'nextjs'
      },
      {
        name: 'Google Analytics 4',
        icon: 'google-analytics'
      },
      {
        name: 'Meta Ads',
        icon: 'meta'
      },
      {
        name: 'Google Ads',
        icon: 'google-ads'
      },
      {
        name: 'Klaviyo',
        icon: 'klaviyo'
      },
      {
        name: 'Amazon Seller Central',
        icon: 'amazon'
      }
    ],
    process: [
      {
        title: 'Research & Strategy',
        description: 'Comprehensive market analysis and channel strategy development.',
        outcomeText: 'Clear growth roadmap'
      },
      {
        title: 'Digital Infrastructure',
        description: 'Built scalable e-commerce and analytics foundation.',
        outcomeText: 'Unified digital ecosystem'
      },
      {
        title: 'Channel Expansion',
        description: 'Systematic launch across marketplaces and ad platforms.',
        outcomeText: 'Multi-channel presence'
      },
      {
        title: 'Optimization & Scale',
        description: 'Continuous improvement based on cross-channel data.',
        outcomeText: 'Sustainable growth'
      }
    ],
    outcomes: [
      {
        title: 'Revenue Growth',
        value: '300%',
        description: 'Year-over-year revenue increase'
      },
      {
        title: 'ROAS',
        value: '4.8x',
        description: 'Return on ad spend across platforms'
      },
      {
        title: 'Email Revenue',
        value: '25%',
        description: 'Of total revenue from email marketing'
      },
      {
        title: 'Marketplace Sales',
        value: '45%',
        description: 'Revenue share from Amazon & Flipkart'
      },
      {
        title: 'CAC Reduction',
        value: '-35%',
        description: 'Decrease in customer acquisition cost'
      }
    ],
    keyTakeaways: [
      'Omnichannel presence is crucial for luxury brand growth',
      'Data integration enables personalized customer journeys',
      'Marketplace optimization requires brand-consistent storytelling',
      'Email marketing drives significant ROI for premium products',
      'Cross-channel attribution improves marketing efficiency'
    ],
    galleryImages: [
      'https://res.cloudinary.com/twosapiens/image/upload/v1744980709/Two_sapiens_pu_bag_collection_rfd0xd.png',
      'https://res.cloudinary.com/twosapiens/image/upload/v1745289748/Untitled_design_16_typ8wk.png',
    ],
    testimonial: {
      quote: 'Intelligence Dock has transformed Two Sapiens from a local brand to a digital-first market leader. Their comprehensive approach to digital marketing and deep understanding of premium brand positioning has been instrumental in our 300% growth.',
      author: 'Sarah Chen',
      position: 'CEO & Founder, Two Sapiens',
      avatar: 'https://res.cloudinary.com/twosapiens/image/upload/v1744477383/Two-Sapiens-logo-banner_efgx9t.png',
    },
    relatedCaseStudies: [
      {
        title: 'LuxHome Decor',
        subtitle: 'Premium Home Goods E-Commerce',
        slug: 'luxhome-decor'
      },
      {
        title: 'Heritage Leather',
        subtitle: 'Traditional Craftmanship Meets Digital Excellence',
        slug: 'heritage-leather'
      }
    ],
    miniTestimonials: [
      {
        quote: 'The multi-channel strategy has exponentially increased our market reach while maintaining our premium positioning.',
        author: 'Michael James',
        position: 'Marketing Director'
      },
      {
        quote: 'Our email campaigns now drive 25% of our revenue with highly engaged customers.',
        author: 'Lisa Wong',
        position: 'Digital Marketing Manager'
      },
      {
        quote: 'The marketplace optimization has opened up entirely new customer segments for us.',
        author: 'David Kumar',
        position: 'E-commerce Manager'
      }
    ]
  };
  
  console.log('Successfully loaded Two Sapiens project data');
  
  // Enhanced Schema for case study with rich structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "name": "Two Sapiens E-commerce Growth Case Study",
    "description": "How we helped Two Sapiens achieve 300% revenue growth through multi-channel optimization",
    "url": "https://www.intelligencedock.com/projects/two-sapiens",
    "datePublished": "2023-06-15",
    "provider": {
      "@type": "Organization",
      "name": "Intelligence Dock",
      "url": "https://www.intelligencedock.com"
    },
    "about": {
      "@type": "Organization",
      "name": "Two Sapiens",
      "description": "Premium leather bag manufacturer",
      "url": projectData.liveUrl
    },
    "industry": "Luxury Leather Goods",
    "audience": {
      "@type": "Audience",
      "audienceType": "Premium Fashion Consumers"
    },
    "businessFunction": [
      "E-commerce Optimization",
      "Digital Marketing",
      "Marketplace Integration"
    ],
    "result": {
      "@type": "Thing",
      "name": "Growth Results",
      "description": "300% revenue growth in 12 months with 4.8x ROAS"
    },
    "workExample": [
      {
        "@type": "CreativeWork",
        "name": "Website Redesign",
        "image": projectData.heroImage
      },
      {
        "@type": "CreativeWork",
        "name": "Email Marketing",
        "description": "25% of total revenue generated through email campaigns"
      },
      {
        "@type": "CreativeWork",
        "name": "Marketplace Integration",
        "description": "45% revenue from Amazon & Flipkart"
      }
    ],
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": projectData.testimonial.author,
        "jobTitle": projectData.testimonial.position
      },
      "reviewBody": projectData.testimonial.quote
    },
    "keywords": [
      "e-commerce case study",
      "luxury brand growth",
      "digital marketing success",
      "marketplace optimization",
      "email marketing ROI",
      "Shopify success story",
      "premium brand digital transformation"
    ]
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