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
    subtitle: 'From Startup to Premium E-Commerce Success',
    description: 'How we transformed Two Sapiens into a thriving luxury bag e-commerce brand with conversion-focused design, personalized marketing automation, and strategic digital presence.',
    tagline: 'Elevating Luxury Bag E-Commerce',
    clientName: 'Two Sapiens',
    industry: 'Luxury E-Commerce',
    timeframe: 'Jan 2023 - May 2023',
    heroImage: 'https://res.cloudinary.com/twosapiens/image/upload/v1744980709/Two_sapiens_pu_bag_collection_rfd0xd.png',
    logoImage: 'https://res.cloudinary.com/twosapiens/image/upload/v1744477383/Two-Sapiens-logo-banner_efgx9t.png',
    liveUrl: 'https://www.twosapiens.com',
    executiveSummary: [
      {
        title: 'Challenge',
        description: 'Two Sapiens needed a premium e-commerce presence that reflected their luxury brand positioning.'
      },
      {
        title: 'Solution',
        description: 'We created a conversion-optimized website with strategic UX and personalized marketing automation.'
      }
    ],
    clientDescription: 'Two Sapiens is a luxury bag manufacturer focused on sustainable materials and timeless design.',
    challenges: [
      {
        title: 'Brand Presentation',
        description: 'Needed to elevate their digital presence to match their premium products.',
        beforeState: 'Generic template site with low conversions'
      }
    ],
    approach: 'We took a data-driven approach to redesign the entire digital experience, focusing on conversion optimization and brand storytelling.',
    solutions: [
      {
        title: 'Custom E-Commerce Platform',
        description: 'Built a tailored shopping experience with advanced product visualization.'
      }
    ],
    technologies: [
      {
        name: 'Next.js',
        icon: 'nextjs'
      },
      {
        name: 'Shopify',
        icon: 'shopify'
      }
    ],
    process: [
      {
        title: 'Discovery',
        description: 'Comprehensive brand and customer analysis to understand the luxury market positioning.',
        outcomeText: 'Detailed strategy blueprint'
      }
    ],
    outcomes: [
      {
        title: 'Conversion Rate',
        value: '+40%',
        description: 'Increase in product page conversions'
      }
    ],
    keyTakeaways: [
      'Premium positioning requires seamless UX',
      'Personalization drives luxury conversions',
      'Mobile optimization is crucial for high-end purchases'
    ],
    galleryImages: [
      'https://res.cloudinary.com/twosapiens/image/upload/v1744980709/Two_sapiens_pu_bag_collection_rfd0xd.png',
      'https://res.cloudinary.com/twosapiens/image/upload/v1745289748/Untitled_design_16_typ8wk.png',
    ],
    testimonial: {
      quote: 'Intelligence Dock transformed our online presence into a true reflection of our luxury brand. The results speak for themselves with dramatic increases in engagement and sales.',
      author: 'Sarah Chen',
      position: 'Co-Founder, Two Sapiens',
      avatar: 'https://res.cloudinary.com/twosapiens/image/upload/v1744477383/Two-Sapiens-logo-banner_efgx9t.png',
    },
    relatedCaseStudies: [
      {
        title: 'LuxHome Decor',
        subtitle: 'Premium Home Goods E-Commerce',
        slug: 'luxhome-decor'
      }
    ],
    miniTestimonials: [
      {
        quote: 'The attention to detail in our product pages has made all the difference in conversion rates.',
        author: 'Michael James',
        position: 'Marketing Director'
      }
    ]
  };
  
  console.log('Successfully loaded Two Sapiens project data');
  
  // Enhanced Schema for case study with rich structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "name": projectData.title,
    "description": projectData.description,
    "url": "https://www.intelligencedock.com/projects/two-sapiens",
    "datePublished": "2023-06-15",
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
      "E-commerce UX design",
      "Digital brand positioning",
      "Conversion optimization"
    ],
    "result": {
      "@type": "Thing",
      "name": "Increased Conversion Rate",
      "description": "40% improvement in e-commerce conversion rates"
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