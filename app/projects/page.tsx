import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

// Add this client component import
import WebsiteLink from '../components/WebsiteLink'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'

export const metadata: Metadata = {
  title: 'Award-Winning Digital Projects & Case Studies | HiRank Digital',
  description: 'Explore our proven results in web development, e-commerce, mobile apps, and digital marketing. See how we solve real business challenges with measurable ROI.',
  keywords: 'digital agency portfolio, web development case studies, ecommerce success stories, mobile app development, branding projects',
}

// Project data with enhanced descriptions and success metrics
const projects = [
  {
    id: 1,
    title: 'Two Sapiens E-Commerce Launch',
    category: 'E-Commerce & Marketing',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1744980709/Two_sapiens_pu_bag_collection_rfd0xd.png',
    technologies: ['WooCommerce', 'SMM', 'Google Analytics', 'Email Marketing', 'Meta Ads'],
    client: 'Two Sapiens',
    slug: 'two-sapiens',
    website: 'www.twosapiens.in',
    challenge: 'Launch a premium fashion brand in a competitive market with no existing digital presence.',
    solution: 'Custom e-commerce experience with integrated analytics, automation, and targeted marketing campaigns.',
    results: 'Achieved 42% conversion rate and 3.2x ROAS within first quarter of launch',
    description: 'Launched a premium fashion brand with a custom e-commerce experience. Integrated performance tracking, built email automation, and continue to manage social media and paid ads.'
  },
  {
    id: 2,
    title: 'Corporate Rebrand & Website',
    category: 'Branding',
    image: 'https://placehold.co/600x400/blue/white?text=Branding+Project',
    technologies: ['React', 'GSAP', 'Figma'],
    client: 'Financial Services',
    slug: 'corporate',
    challenge: 'Outdated brand identity failing to connect with modern audience and hindering digital growth.',
    solution: 'Complete brand identity redesign with animated website implementation.',
    results: '68% increase in lead generation and 5.2x improvement in client perception',
    description: 'Full brand identity redesign with website implementation, focusing on trust and professionalism.'
  },
  {
    id: 3,
    title: 'Mobile Food Delivery App',
    category: 'Mobile Apps',
    image: 'https://placehold.co/600x400/orange/white?text=Mobile+App',
    technologies: ['React Native', 'Firebase', 'Stripe'],
    client: 'Restaurant Chain',
    slug: 'mobile-app',
    challenge: 'High operational costs and customer dissatisfaction with third-party delivery platforms.',
    solution: 'Custom mobile application with real-time order tracking and loyalty system.',
    results: '135% increase in direct orders and 28% reduction in delivery costs',
    description: 'Custom mobile application allowing customers to order food for delivery with real-time tracking.'
  },
  {
    id: 4,
    title: 'SaaS Dashboard Interface',
    category: 'Web Development',
    image: 'https://placehold.co/600x400/purple/white?text=SaaS+Dashboard',
    technologies: ['Vue.js', 'D3.js', 'Node.js'],
    client: 'Tech Startup',
    slug: 'saas',
    challenge: 'Complex data visualization needs with poor user engagement and high learning curve.',
    solution: 'Intuitive dashboard with advanced yet accessible data visualization components.',
    results: '40% reduction in onboarding time and 52% increase in daily active users',
    description: 'Comprehensive dashboard with data visualization for a SaaS platform focused on analytics.'
  },
  {
    id: 5,
    title: 'Multi-vendor Marketplace',
    category: 'E-Commerce',
    image: 'https://placehold.co/600x400/green/white?text=Marketplace',
    technologies: ['React', 'GraphQL', 'MongoDB'],
    client: 'Retail Consortium',
    slug: 'marketplace',
    challenge: 'Traditional retailers struggling to compete with digital-native competitors.',
    solution: 'Scalable marketplace platform connecting multiple vendors with unified shopping experience.',
    results: '210% YoY revenue growth with 85% vendor retention rate',
    description: 'Scalable marketplace platform connecting multiple vendors with customers in a seamless shopping experience.'
  },
  {
    id: 6,
    title: 'Educational Platform',
    category: 'Web Development',
    image: 'https://placehold.co/600x400/red/white?text=Education+Platform',
    technologies: ['Next.js', 'PostgreSQL', 'AWS'],
    client: 'Online Academy',
    slug: 'education',
    challenge: 'Fragmented learning experience with poor content management and student tracking.',
    solution: 'Unified platform with video streaming, progress tracking, and personalized learning paths.',
    results: '78% completion rate (industry avg: 32%) and 4.8/5 student satisfaction',
    description: 'Interactive learning platform with course management, video streaming, and student progress tracking.'
  }
]

// Add structured data for SEO
const generateStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Project",
        "name": project.title,
        "description": project.description,
        "url": `https://hirankdigital.com/projects/${project.slug}`
      }
    }))
  };
}

export default function ProjectsPage() {
  return (
    <>
      <div className="bg-[#f5f8ff]">
        <Header />
        <main className="pt-0">
          {/* Schema.org structured data for SEO */}
          <Script id="structured-data" type="application/ld+json">
            {JSON.stringify(generateStructuredData())}
          </Script>

          <section className="py-36 md:py-52 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl md:text-[3.25rem] font-medium text-gray-900 leading-[1.2] tracking-tight mb-10">
                  <div className="mb-2 md:whitespace-nowrap">Transforming Business Challenges</div>
                  <div className="md:whitespace-nowrap">Into Digital Success Stories</div>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-10">
                  Explore how we've helped businesses like yours overcome obstacles, seize opportunities, and achieve 
                  measurable results through strategic digital solutions.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>

      <main className="bg-white">
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
              {projects.map((project) => (
                <Link 
                  key={project.id} 
                  href={`/projects/${project.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-full flex flex-col transform group-hover:-translate-y-2">
                    <div className="relative h-72 w-full">
                      <Image
                        src={project.image}
                        alt={`${project.title} - ${project.category} case study by HiRank Digital`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white font-medium text-sm">View case study →</span>
                      </div>
                    </div>
                    
                    <div className="p-10 flex-1 flex flex-col">
                      <div className="mb-5">
                        <span className="text-xs font-medium text-[#4F7DF3] bg-blue-50 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-bold text-gray-900 mb-5 group-hover:text-[#4F7DF3] transition-colors leading-relaxed">
                        {project.title}
                      </h2>
                      
                      <div className="text-gray-600 mb-8 text-sm flex-1 space-y-5">
                        <div className="leading-relaxed">
                          <span className="font-medium text-gray-800 block mb-1">Challenge:</span> 
                          <p className="leading-relaxed">{project.challenge}</p>
                        </div>
                        <div className="leading-relaxed">
                          <span className="font-medium text-gray-800 block mb-1">Solution:</span>
                          <p className="leading-relaxed">{project.solution}</p>
                        </div>
                        <div>
                          <div className="mt-5 flex items-center">
                            <span className="text-emerald-600 font-semibold bg-emerald-50 px-4 py-2 rounded-full text-xs">
                              Results: {project.results}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-auto pt-2">
                        <div className="flex flex-wrap gap-3 mb-6">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span 
                              key={tech} 
                              className="text-xs py-1 px-2 bg-gray-100 text-gray-600 rounded-md hover:bg-[#4F7DF3] hover:text-white transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-xs py-1 px-2 bg-gray-100 text-gray-600 rounded-md">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                        
                        <div className="pt-5 border-t border-gray-100 flex justify-between items-center">
                          <span className="text-sm text-gray-500 leading-relaxed">
                            {project.client}
                            {project.website && (
                              <WebsiteLink website={project.website} />
                            )}
                          </span>
                          <span className="text-[#4F7DF3] font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
                            View Details
                            <svg 
                              className="ml-1 w-4 h-4" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M9 5l7 7-7 7" 
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-24 md:py-32 bg-[#f5f8ff]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-12 md:p-16 text-center">
                <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 leading-[1.2] tracking-tight mb-10">Ready to Be Our Next Success Story?</h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-12">
                  Let's transform your vision into measurable results. Our team combines strategic thinking, cutting-edge design, 
                  and technical expertise to create solutions that drive real business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <Link
                    href="/contact"
                    className="bg-[#4F7DF3] hover:bg-[#3968e7] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    Schedule a Free Strategy Call
                    <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <Link
                    href="/services"
                    className="border-2 border-[#4F7DF3] hover:bg-[#4F7DF3]/5 text-[#4F7DF3] px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2"
                  >
                    Explore Our Services
                  </Link>
                </div>
                <p className="text-sm text-gray-500 mt-10">No obligation. We'll respond within 24 hours.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 