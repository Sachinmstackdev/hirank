import { Metadata } from 'next'
import Hero from '@/components/projects/case-study/Hero'
import CaseStudyContent from '@/components/projects/case-study/CaseStudyContent'
import CTA from '@/components/projects/case-study/CTA'
import Navigation from '@/components/projects/case-study/Navigation'

export const metadata: Metadata = {
  title: 'Two Sapiens Luxury Bag E-Commerce Success Story | Premium Brand Case Study',
  description: 'Discover how we transformed Two Sapiens into a thriving luxury bag e-commerce brand with 40% higher conversions, seamless UX design, and targeted marketing automation.',
  openGraph: {
    title: 'Two Sapiens Luxury Bag E-Commerce Success Story | Premium Brand Case Study',
    description: 'Discover how we transformed Two Sapiens into a thriving luxury bag e-commerce brand with 40% higher conversions, seamless UX design, and targeted marketing automation.',
    images: [
      {
        url: 'https://res.cloudinary.com/twosapiens/image/upload/v1744980709/Two_sapiens_pu_bag_collection_rfd0xd.png',
        width: 1200,
        height: 630,
        alt: 'Two Sapiens Luxury Bag E-Commerce Case Study'
      }
    ],
    type: 'website',
  },
}

export default function TwoSapiensPage() {
  // Project data
  const projectData = {
    title: 'Two Sapiens – Crafting Digital Luxury',
    tagline: 'How we transformed a premium bag brand into an e-commerce success story with exceptional UX and targeted marketing',
    clientName: 'Two Sapiens',
    heroImage: 'https://res.cloudinary.com/twosapiens/image/upload/v1744980709/Two_sapiens_pu_bag_collection_rfd0xd.png',
    logoImage: undefined,
    liveUrl: 'https://twosapiens.com',
    clientDescription: "Two Sapiens is a premium Indian luxury brand specializing in handcrafted PU bags that blend contemporary design with exceptional quality. Founded by fashion enthusiasts with a vision to disrupt the accessory market, they needed a digital presence that would showcase their unique aesthetic and create an immersive shopping experience that matched the premium nature of their products.",
    
    challenges: [
      {
        title: 'Standing Out in a Crowded Market',
        description: 'In the competitive luxury bag industry, Two Sapiens needed to establish a distinctive brand identity and reach fashion-forward consumers who value quality and design.'
      },
      {
        title: 'Creating a Premium Digital Experience',
        description: 'The brand needed an e-commerce platform that would reflect their premium positioning while delivering seamless functionality and intuitive navigation across all devices.'
      },
      {
        title: 'Building a Marketing Ecosystem',
        description: 'With no existing digital presence, Two Sapiens required a comprehensive marketing infrastructure to drive qualified traffic, capture leads, and nurture customers through the purchase journey.'
      }
    ],
    
    solutions: [
      {
        title: 'Bespoke E-Commerce Experience',
        description: "We crafted a custom WooCommerce platform optimized for conversion, with lightning-fast performance and intuitive product filtering. Every touchpoint was designed to showcase the brand's luxury positioning, from sophisticated product displays to seamless checkout flows that reduced friction and increased sales.",
        icon: '🛒'
      },
      {
        title: 'Emotionally Engaging Visual Design',
        description: "Our design team developed a visual language that evokes luxury and exclusivity. We directed professional product photography that highlights texture and craftsmanship, created immersive product pages with zoom capabilities, and implemented a mobile-first approach that delivers a consistent premium experience across all devices.",
        icon: '🎨'
      },
      {
        title: 'Data-Driven Decision Making',
        description: "We implemented comprehensive tracking with Google Analytics 4, creating custom events and enhanced e-commerce tracking that provides actionable insights into the customer journey. This data foundation allowed the brand to make informed decisions about product development, pricing strategy, and marketing investments.",
        icon: '📈'
      },
      {
        title: 'Personalized Marketing Automation',
        description: "We built sophisticated email workflows with Klaviyo that nurture relationships at every stage of the customer journey. From personalized welcome sequences to strategic abandoned cart recovery and post-purchase engagement, our email ecosystem drives consistent revenue and builds lasting brand loyalty.",
        icon: '✉️'
      },
      {
        title: 'Strategic Paid Media Campaigns',
        description: "We designed and executed targeted Meta Ads campaigns that connect with fashion-conscious consumers at key moments of discovery. Our data-driven approach to audience targeting, creative messaging, and campaign optimization delivered exceptional ROAS while building brand awareness among ideal customers.",
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
        title: 'Site Performance',
        value: '3x',
        description: 'Faster load times resulting in lower bounce rates and higher engagement'
      },
      {
        title: 'Email Revenue',
        value: '22%',
        description: 'Of total sales generated through automated email sequences'
      },
      {
        title: 'Conversion Rate',
        value: '+40%',
        description: 'Increase after implementing our UX optimizations and trust elements'
      },
      {
        title: 'Organic Traffic',
        value: '+65%',
        description: 'Monthly growth through strategic content and technical SEO implementation'
      }
    ],
    
    galleryImages: [
      'https://res.cloudinary.com/twosapiens/image/upload/v1744980709/Two_sapiens_pu_bag_collection_rfd0xd.png',
      'https://res.cloudinary.com/twosapiens/image/upload/v1744980709/Two_sapiens_pu_bag_collection_rfd0xd.png',
      'https://res.cloudinary.com/twosapiens/image/upload/v1744980709/Two_sapiens_pu_bag_collection_rfd0xd.png',
    ],
    
    testimonial: {
      quote: "The HiRank Digital team didn't just build us a website—they crafted a digital experience that perfectly captures the essence of our brand. Their strategic approach to design, development, and marketing has been transformative, helping us connect with customers and exceed our sales targets from day one.",
      author: "Founder",
      position: "Two Sapiens",
      avatar: undefined
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
        heading="Ready to transform your brand's digital presence?"
        subheading="Let us create a tailored strategy that drives real business results, just like we did for Two Sapiens."
        primaryButtonText="Start Your Project"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore More Case Studies"
        secondaryButtonLink="/projects"
      />
    </main>
  )
} 