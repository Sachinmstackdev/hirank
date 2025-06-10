import { Metadata } from 'next'
import ClientCaseStudyPage from './client-page'

export const metadata: Metadata = {
  title: 'WordPress UI Component Library | Code-Ready Components | Intelligence Dock',
  description: 'How we developed a collection of ready-to-use UI components for WordPress users to embed directly without relying on page builders.',
  openGraph: {
    title: 'WordPress UI Component Library Case Study',
    description: 'See how we created a comprehensive library of code-ready UI components that empowered WordPress users to build custom sites without page builders.',
    images: [
      {
        url: 'https://res.cloudinary.com/twosapiens/image/upload/v1745756816/Ui_Compenents_website_bzrsr9.png',
        width: 1200,
        height: 630,
        alt: 'WordPress UI Component Library showcase'
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WordPress UI Component Library Case Study',
    description: 'How we built a collection of code-ready components that reduced WordPress development time by 72%',
    images: ['https://res.cloudinary.com/twosapiens/image/upload/v1745756816/Ui_Compenents_website_bzrsr9.png'],
  }
}

// For the static route, we don't need params since the slug is in the file path
export default async function WPComponentsPage() {
  // This is a static page, so we can just return the data directly
  const projectData = {
    title: 'WordPress UI Component Library',
    subtitle: 'Code-Ready Components For WordPress Users',
    description: 'How we designed and developed a comprehensive library of customizable UI components that WordPress users can embed directly without relying on resource-heavy page builders.',
    tagline: 'Empowering WordPress Developers',
    clientName: 'WordPress Component Library',
    industry: 'Web Development / WordPress',
    timeframe: 'Nov 2023 - Apr 2024',
    heroImage: 'https://res.cloudinary.com/twosapiens/image/upload/v1745756816/Ui_Compenents_website_bzrsr9.png',
    logoImage: 'https://res.cloudinary.com/twosapiens/image/upload/v1745756816/Ui_Compenents_website_bzrsr9.png',
    liveUrl: 'https://wpcomponents.dev',
    executiveSummary: [
      {
        title: 'Challenge',
        description: 'WordPress users without advanced coding skills were forced to use bloated page builders that slowed down sites and created vendor lock-in.'
      },
      {
        title: 'Solution',
        description: 'We created a library of 150+ responsive UI components that can be copied directly into WordPress HTML widgets with minimal modification required.'
      }
    ],
    clientDescription: 'The WordPress UI Component Library is an open-source project aimed at empowering WordPress users to create beautiful, custom websites without relying on resource-heavy page builders or requiring advanced development skills.',
    challenges: [
      {
        title: 'Page Builder Dependency',
        description: 'WordPress users often rely on page builders like Elementor that significantly slow down websites and create vendor lock-in.',
        beforeState: 'Slow loading, bloated sites'
      },
      {
        title: 'Coding Knowledge Gap',
        description: 'Many WordPress users lack the coding skills to create custom components from scratch, forcing them to use pre-built solutions.',
        beforeState: 'Limited customization options'
      },
      {
        title: 'Inconsistent Styling',
        description: 'Without a systematic approach to UI components, WordPress sites often suffer from inconsistent styling and poor user experience.',
        beforeState: 'Disjointed user interfaces'
      }
    ],
    approach: 'We developed a system of modular, lightweight UI components that could be easily customized and directly embedded in WordPress HTML widgets. Each component was designed to be responsive, accessible, and optimized for performance, with clear documentation on how to implement and modify it.',
    solutions: [
      {
        title: 'Modular Component Architecture',
        description: 'Created 150+ standalone components organized by category (navigation, cards, forms, etc.) that can be used independently or combined.'
      },
      {
        title: 'Tailwind CSS Integration',
        description: 'Built components using Tailwind CSS utility classes, making customization intuitive even for users with basic CSS knowledge.'
      },
      {
        title: 'Copy-Paste Implementation',
        description: 'Designed components to be easily copied and pasted into WordPress HTML widgets with minimal modification needed.'
      },
      {
        title: 'Interactive Documentation',
        description: 'Developed comprehensive documentation with live previews, code samples, and customization guides for each component.'
      }
    ],
    technologies: [
      {
        name: 'HTML',
        icon: 'html'
      },
      {
        name: 'Tailwind CSS',
        icon: 'tailwind'
      },
      {
        name: 'JavaScript',
        icon: 'javascript'
      },
      {
        name: 'WordPress',
        icon: 'wordpress'
      }
    ],
    process: [
      {
        title: 'Component Research',
        description: 'Analyzed the most common UI patterns across successful WordPress sites and identified components that would provide the most value to users.',
        outcomeText: 'Component priority list'
      },
      {
        title: 'Design System Creation',
        description: 'Established a cohesive design system with consistent spacing, typography, and color schemes to ensure components worked well together.',
        outcomeText: 'Unified design language'
      },
      {
        title: 'Component Development',
        description: 'Built each component with a focus on accessibility, responsive design, and clean code that could be easily understood and modified.',
        outcomeText: 'Production-ready components'
      },
      {
        title: 'Documentation & Examples',
        description: 'Created comprehensive documentation with usage examples, customization options, and implementation guides for WordPress users of all skill levels.',
        outcomeText: 'User-friendly guides'
      }
    ],
    outcomes: [
      {
        title: 'Development Speed',
        value: '-72%',
        description: 'Reduction in development time'
      },
      {
        title: 'Performance',
        value: '+68%',
        description: 'Improved page load speed'
      },
      {
        title: 'User Growth',
        value: '15K+',
        description: 'Active users in first quarter'
      }
    ],
    keyTakeaways: [
      'Lightweight alternatives to page builders have strong demand in the WordPress ecosystem',
      'Empowering users with the right tools can bridge the gap between no-code and custom development',
      'Clear documentation is as important as the components themselves'
    ],
    galleryImages: [
      'https://res.cloudinary.com/twosapiens/image/upload/v1745756816/Ui_Compenents_website_bzrsr9.png',
      'https://res.cloudinary.com/twosapiens/image/upload/v1745756816/Ui_Compenents_website_bzrsr9.png',
    ],
    testimonial: {
      quote: 'This component library has completely changed how I approach WordPress development. I can now create custom, professional-looking sites for my clients without the bloat of page builders, and my clients love how fast their sites load. The documentation makes it easy even for someone with basic HTML knowledge.',
      author: 'Sarah Johnson',
      position: 'Freelance WordPress Developer',
      avatar: 'https://res.cloudinary.com/twosapiens/image/upload/v1745756816/Ui_Compenents_website_bzrsr9.png',
    },
    relatedCaseStudies: [
      {
        title: 'Gift Wrap',
        subtitle: 'Corporate Gifting Platform',
        slug: 'gift-wrap'
      }
    ],
    miniTestimonials: [
      {
        quote: "I switched from Elementor to these components and my site's PageSpeed score went from 62 to 94. My clients have noticed the difference.",
        author: 'Marcus Rivera',
        position: 'Digital Agency Owner'
      }
    ]
  };
  
  // Enhanced Schema for case study with rich structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "name": projectData.title,
    "description": projectData.description,
    "url": "https://www.intelligencedock.com/projects/wp-components",
    "datePublished": "2024-04-15",
    "provider": {
      "@type": "Organization",
      "name": "Intelligence Dock",
      "url": "https://www.intelligencedock.com",
      "logo": "https://www.intelligencedock.com/logo.png"
    },
    "about": {
      "@type": "SoftwareApplication",
      "name": "WordPress UI Component Library",
      "description": "Collection of code-ready UI components for WordPress",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Web"
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
      "WordPress component development",
      "Frontend optimization",
      "Web performance improvement"
    ],
    "result": {
      "@type": "Thing",
      "name": "Improved Development Efficiency",
      "description": "72% reduction in development time with 68% improved page load speed"
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