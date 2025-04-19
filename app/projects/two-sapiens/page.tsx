import { Metadata } from 'next'
import Hero from '@/components/projects/case-study/Hero'
import CaseStudyContent from '@/components/projects/case-study/CaseStudyContent'
import CTA from '@/components/projects/case-study/CTA'
import Navigation from '@/components/projects/case-study/Navigation'

export const metadata: Metadata = {
  title: 'Two Sapiens – From Vision to E-Commerce Reality | HiRank Digital',
  description: 'See how we transformed Two Sapiens into a premium e-commerce brand with custom development, marketing automation, and performance optimization.',
  openGraph: {
    title: 'Two Sapiens – From Vision to E-Commerce Reality | HiRank Digital',
    description: 'See how we transformed Two Sapiens into a premium e-commerce brand with custom development, marketing automation, and performance optimization.',
    images: [
      {
        url: 'https://res.cloudinary.com/twosapiens/image/upload/v1744980709/Two_sapiens_pu_bag_collection_rfd0xd.png',
        width: 1200,
        height: 630,
        alt: 'Two Sapiens E-Commerce Case Study'
      }
    ],
    type: 'website',
  },
}

export default function TwoSapiensPage() {
  // Project data
  const projectData = {
    title: 'Two Sapiens – From Vision to E-Commerce Reality',
    tagline: 'Transforming a luxury bag brand into a digital success story',
    clientName: 'Two Sapiens',
    heroImage: 'https://res.cloudinary.com/twosapiens/image/upload/v1744980709/Two_sapiens_pu_bag_collection_rfd0xd.png',
    logoImage: undefined, // Remove placeholder path that might cause 404
    liveUrl: 'https://twosapiens.com',
    clientDescription: 'Two Sapiens is a luxury Indian brand specializing in premium PU bags. The brand needed a complete digital presence to showcase their premium products and connect with fashion-conscious consumers through a seamless shopping experience.',
    
    challenges: [
      {
        title: 'Brand Visibility',
        description: 'As a new entrant in a competitive market, Two Sapiens needed to establish a strong online presence and reach their target audience effectively.'
      },
      {
        title: 'Premium Experience',
        description: 'The e-commerce platform needed to reflect the premium nature of the products while maintaining optimal performance and user experience.'
      },
      {
        title: 'Marketing Infrastructure',
        description: 'The brand needed robust marketing infrastructure to drive traffic, generate leads, and convert customers through multiple digital channels.'
      }
    ],
    
    solutions: [
      {
        title: 'Custom E-Commerce Development',
        description: 'We built a custom e-commerce platform using WooCommerce, focusing on performance optimization and mobile-first design to provide a seamless shopping experience across all devices.',
        icon: '🛒'
      },
      {
        title: 'Conversion-Focused UX Design',
        description: 'Our design team created a premium user experience with high-quality product photography, intuitive navigation, and streamlined checkout process to maximize conversions.',
        icon: '🎨'
      },
      {
        title: 'Performance & Analytics Setup',
        description: 'We implemented Google Analytics 4 with enhanced e-commerce tracking and custom events to provide detailed insights into customer behavior and sales performance.',
        icon: '📈'
      },
      {
        title: 'Marketing Automation',
        description: 'We set up email marketing workflows using Klaviyo, targeting abandoned carts, welcome series, and post-purchase follow-ups to nurture customers and drive repeat sales.',
        icon: '✉️'
      },
      {
        title: 'Paid Advertising Campaigns',
        description: 'We designed and implemented Meta Ads campaigns targeting fashion-conscious consumers, optimizing for conversion and return on ad spend.',
        icon: '🎯'
      }
    ],
    
    technologies: [
      { name: 'WooCommerce', icon: '🛒' },
      { name: 'WordPress', icon: '📝' },
      { name: 'Stripe', icon: '💳' },
      { name: 'Klaviyo', icon: '✉️' },
      { name: 'Google Analytics 4', icon: '📊' },
      { name: 'Meta Ads', icon: '📱' },
      { name: 'SEO', icon: '🔍' },
      { name: 'Email Marketing', icon: '📧' }
    ],
    
    outcomes: [
      {
        title: 'Faster Load Times',
        value: '3x',
        description: 'Improved page loading speed for better user experience and SEO'
      },
      {
        title: 'Email Automations',
        value: '5+',
        description: 'Automated workflows driving repeat business'
      },
      {
        title: 'Conversion Rate',
        value: '+40%',
        description: 'Increase in conversion rate after optimization'
      },
      {
        title: 'Organic Traffic',
        value: '+65%',
        description: 'Growth in organic traffic month-over-month'
      }
    ],
    
    galleryImages: [
      'https://res.cloudinary.com/twosapiens/image/upload/v1744980709/Two_sapiens_pu_bag_collection_rfd0xd.png',
      // Use the same image for all gallery slots to prevent 404s
      'https://res.cloudinary.com/twosapiens/image/upload/v1744980709/Two_sapiens_pu_bag_collection_rfd0xd.png',
      'https://res.cloudinary.com/twosapiens/image/upload/v1744980709/Two_sapiens_pu_bag_collection_rfd0xd.png',
    ],
    
    testimonial: {
      quote: "The team at HiRank Digital transformed our vision into a stunning e-commerce platform. Their expertise in design, development, and marketing has been instrumental in our successful online launch.",
      author: "Founder",
      position: "Two Sapiens",
      avatar: undefined // Remove placeholder path that might cause 404
    }
  }
  
  return (
    <main>
      <Navigation projectTitle={projectData.title} liveUrl={projectData.liveUrl} />
      
      <Hero 
        title={projectData.title}
        tagline={projectData.tagline}
        clientName={projectData.clientName}
        heroImage={projectData.heroImage}
        logoImage={projectData.logoImage}
      />
      
      <CaseStudyContent 
        clientDescription={projectData.clientDescription}
        challenges={projectData.challenges}
        solutions={projectData.solutions}
        technologies={projectData.technologies}
        outcomes={projectData.outcomes}
        galleryImages={projectData.galleryImages}
        testimonial={projectData.testimonial}
      />
      
      <CTA 
        heading="Want results like Two Sapiens?"
        subheading="Let's create a tailored digital strategy for your brand."
        primaryButtonText="Let's Work Together"
        primaryButtonLink="/contact"
        secondaryButtonText="View More Projects"
        secondaryButtonLink="/projects"
      />
    </main>
  )
} 