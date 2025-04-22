import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Projects | HiRank Digital',
  description: 'Explore our portfolio of projects across web development, e-commerce, branding, and digital marketing.',
}

// Project data
const projects = [
  {
    id: 1,
    title: 'Two Sapiens E-Commerce Launch',
    category: 'E-Commerce & Marketing',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1744980709/Two_sapiens_pu_bag_collection_rfd0xd.png',
    technologies: ['WooCommerce', 'SMM', 'Google Analytics', 'Email Marketing', 'Meta Ads'],
    client: 'Two Sapiens',
    slug: 'two-sapiens',
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
    description: 'Interactive learning platform with course management, video streaming, and student progress tracking.'
  }
]

export default function ProjectsPage() {
  return (
    <main className="bg-white">
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-blue-100">
              Explore our portfolio of successful digital projects across various industries.
              Each project is a story of transformation and digital excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                href={`/projects/${project.slug}`}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  <div className="relative h-60 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-3">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 text-sm flex-1">
                      {project.description}
                    </p>
                    
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span 
                            key={tech} 
                            className="text-xs py-1 px-2 bg-gray-100 text-gray-600 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-sm text-gray-500">{project.client}</span>
                        <span className="text-blue-600 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
                          View Case Study
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
      
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Build Your Next Project?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's transform your vision into digital reality. We combine strategy, design, 
              and technology to create impactful digital experiences.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow-lg hover:bg-blue-700 transition-colors"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 