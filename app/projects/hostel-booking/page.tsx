import { Metadata } from 'next'
import ClientCaseStudyPage from './client-page'

export const metadata: Metadata = {
  title: 'Hostel Booking System | Intelligence Dock',
  description: 'How we built a custom web application for real-time hostel room bookings with payment integration that increased occupancy rates by 42%.',
  openGraph: {
    title: 'Hostel Booking System Case Study | Intelligence Dock',
    description: 'Custom web application development with real-time availability and payment processing that transformed a hostel\'s booking experience.',
    images: [
      {
        url: 'https://res.cloudinary.com/twosapiens/image/upload/v1744477383/VK-pg-hostel-logo-banner_emq6ax.png',
        width: 1200,
        height: 630,
        alt: 'Hostel booking system dashboard'
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hostel Booking System Case Study',
    description: 'How we built a custom web application that increased occupancy rates by 42%',
    images: ['https://res.cloudinary.com/twosapiens/image/upload/v1744477383/VK-pg-hostel-logo-banner_emq6ax.png'],
  }
}

// For the static route, we don't need params since the slug is in the file path
export default async function HostelBookingPage() {
  // This is a static page, so we can just return the data directly
  const projectData = {
    title: 'Hostel Booking System',
    subtitle: 'Custom Web Application with Real-Time Availability',
    description: 'How we designed and built a custom booking system for VK PG Hostel that streamlined operations, improved guest experience, and dramatically increased occupancy rates.',
    tagline: 'Streamlining Accommodation Management',
    clientName: 'VK PG Hostel',
    industry: 'Hospitality',
    timeframe: 'Apr 2023 - Jul 2023',
    heroImage: 'https://res.cloudinary.com/twosapiens/image/upload/v1744477383/VK-pg-hostel-logo-banner_emq6ax.png',
    logoImage: 'https://res.cloudinary.com/twosapiens/image/upload/v1744477383/VK-pg-hostel-logo-banner_emq6ax.png',
    liveUrl: 'https://www.vkpghostel.com',
    executiveSummary: [
      {
        title: 'Challenge',
        description: 'A popular hostel was losing bookings and efficiency due to their manual booking system and lack of real-time availability information.'
      },
      {
        title: 'Solution',
        description: 'We built a custom web application that automated reservations, integrated payments, and provided real-time room availability.'
      }
    ],
    clientDescription: 'VK PG Hostel is a popular accommodation provider for students and young professionals, with multiple properties across three cities and over 200 rooms in total.',
    challenges: [
      {
        title: 'Manual Booking Process',
        description: 'Staff spent hours each day manually handling reservations via phone and email, leading to double bookings and lost opportunities.',
        beforeState: 'Paper-based booking system with spreadsheets'
      },
      {
        title: 'Payment Collection Issues',
        description: 'The lack of integrated payment processing led to payment delays and tracking problems.',
        beforeState: 'Cash payments and bank transfers only'
      },
      {
        title: 'No Real-Time Availability',
        description: 'Potential guests couldn\'t check room availability in real-time, resulting in missed booking opportunities.',
        beforeState: 'Phone call required to check availability'
      }
    ],
    approach: 'We took a user-centered design approach, focusing on both the administrative needs of hostel staff and the booking experience for guests. Our solution needed to be intuitive, scalable, and reliable even during high-traffic booking periods.',
    solutions: [
      {
        title: 'Custom Booking Platform',
        description: 'Developed a full-stack web application with real-time inventory management, reservation handling, and automated confirmation emails.'
      },
      {
        title: 'Administrative Dashboard',
        description: 'Created an intuitive admin interface for staff to manage rooms, rates, special offers, and view comprehensive booking analytics.'
      },
      {
        title: 'Payment Integration',
        description: 'Implemented secure payment processing with multiple options including credit cards, digital wallets, and international payment methods.'
      },
      {
        title: 'Mobile-First Design',
        description: 'Optimized the entire platform for mobile users, who make up 70% of the hostel\'s target demographic.'
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
        name: 'Stripe',
        icon: 'stripe'
      }
    ],
    process: [
      {
        title: 'Discovery & Planning',
        description: 'Conducted stakeholder interviews and analyzed existing booking processes to identify pain points and opportunities for improvement.',
        outcomeText: 'Detailed requirement specification'
      },
      {
        title: 'UX/UI Design',
        description: 'Created wireframes and interactive prototypes for both guest-facing and administrative interfaces, refining based on usability testing.',
        outcomeText: 'Finalized design system'
      },
      {
        title: 'Development',
        description: 'Built the application with a React frontend, Node.js backend, and MongoDB database, focusing on performance and scalability.',
        outcomeText: 'Functional web application'
      },
      {
        title: 'Testing & Deployment',
        description: 'Conducted extensive testing, including load testing to ensure stability during peak booking periods, followed by staged rollout.',
        outcomeText: 'Production-ready platform'
      }
    ],
    outcomes: [
      {
        title: 'Occupancy Rate',
        value: '+42%',
        description: 'Increase in average occupancy'
      },
      {
        title: 'Operational Efficiency',
        value: '85%',
        description: 'Reduction in administrative time'
      },
      {
        title: 'Revenue',
        value: '+38%',
        description: 'Growth in monthly revenue'
      }
    ],
    keyTakeaways: [
      'Real-time availability is critical for maximizing booking conversions',
      'Administrative tools must prioritize efficiency and simplicity',
      'Mobile optimization drives significantly higher completion rates'
    ],
    galleryImages: [
      'https://res.cloudinary.com/twosapiens/image/upload/v1744477383/VK-pg-hostel-logo-banner_emq6ax.png',
      'https://res.cloudinary.com/twosapiens/image/upload/v1744477383/VK-pg-hostel-logo-banner_emq6ax.png',
    ],
    testimonial: {
      quote: 'The booking system transformed our business. We\'ve not only increased our occupancy rates dramatically but also saved countless hours in administrative work. Our guests love the easy booking process, and we now have valuable data insights we never had before.',
      author: 'Vinod Kumar',
      position: 'Owner, VK PG Hostel',
      avatar: 'https://res.cloudinary.com/twosapiens/image/upload/v1744477383/VK-pg-hostel-logo-banner_emq6ax.png',
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
        quote: 'The dashboard gives me exactly the information I need to make better pricing decisions during peak seasons.',
        author: 'Rajesh S.',
        position: 'Property Manager'
      }
    ]
  };
  
  // Enhanced Schema for case study with rich structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "name": projectData.title,
    "description": projectData.description,
    "url": "https://www.intelligencedock.com/projects/hostel-booking",
    "datePublished": "2023-08-10",
    "provider": {
      "@type": "Organization",
      "name": "Intelligence Dock",
      "url": "https://www.intelligencedock.com",
      "logo": "https://www.intelligencedock.com/logo.png"
    },
    "about": {
      "@type": "SoftwareApplication",
      "name": "VK PG Hostel Booking System",
      "description": "Custom web application for hostel room booking and management",
      "applicationCategory": "WebApplication",
      "operatingSystem": "All"
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
      "Custom web application development",
      "Booking system design",
      "Payment integration"
    ],
    "result": {
      "@type": "Thing",
      "name": "Increased Occupancy Rate",
      "description": "42% improvement in hostel occupancy rates"
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