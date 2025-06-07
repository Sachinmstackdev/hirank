import { Metadata } from 'next'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { projects, Project, Metric, TimelineItem, Feature, Testimonial } from '@/data/projects'
import { 
  Hero, 
  Navigation, 
  ClientInfo, 
  Challenges, 
  Solution, 
  TechStack, 
  ProcessTimeline, 
  Results, 
  Gallery, 
  Testimonial as CaseStudyTestimonial, 
  KeyTakeaways, 
  RelatedProjects, 
  CTABanner,
  CaseStudyContent
} from '@/components/projects/case-study/index'

// Sample project data - in a real app, this would come from an API or database
const projectData = {
  'corporate': {
    title: 'Corporate Website Redesign',
    subtitle: 'Transforming Digital Presence',
    clientName: 'Global Corp Inc.',
    industry: ['Technology'],
    projectTimeline: {
      start: 'March 2023',
      end: 'August 2023'
    },
    heroImage: '/projects/corporate-hero.jpg',
    logoImage: '/projects/corporate-logo.png',
    liveUrl: 'https://example.com',
    clientDescription: 'A leading technology corporation seeking to modernize their digital presence.',
    challengeDetails: [
      {
        title: 'Outdated Design',
        description: 'The existing website was not reflecting the company\'s innovative nature.',
        beforeState: 'Legacy design from 2015'
      },
      {
        title: 'Poor Performance',
        description: 'Slow loading times were affecting user experience and SEO.',
        beforeState: '6s average load time'
      }
    ],
    challenges: [
      'The existing website was not reflecting the company\'s innovative nature',
      'Slow loading times were affecting user experience and SEO',
      'Legacy design from 2015 needed modernization'
    ],
    approach: 'We took a user-centered approach to redesign the website while maintaining brand identity.',
    solution: 'We implemented a modern design system and optimized performance using Next.js and modern web technologies.',
    features: [
      {
        title: 'Modern Design System',
        description: 'Implemented a scalable design system using modern web technologies.',
        icon: 'design'
      },
      {
        title: 'Performance Optimization',
        description: 'Optimized for speed using Next.js and modern web technologies.',
        icon: 'speed'
      }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    processSteps: [
      {
        phase: 'Discovery',
        date: 'March 2023',
        title: 'Understanding Requirements',
        description: 'Understanding client needs and current challenges',
      },
      {
        phase: 'Design',
        date: 'April 2023',
        title: 'Creating the Design System',
        description: 'Creating modern, user-centered design',
      },
      {
        phase: 'Development',
        date: 'May 2023',
        title: 'Building the Platform',
        description: 'Building with cutting-edge technologies',
      },
      {
        phase: 'Launch',
        date: 'August 2023',
        title: 'Going Live',
        description: 'Successful deployment and handover',
      }
    ],
    metrics: [
      {
        label: 'Faster Load Time',
        value: '65',
        suffix: '%',
        change: '65'
      },
      {
        label: 'More Engagement',
        value: '40',
        suffix: '%',
        change: '40'
      },
      {
        label: 'Conversion Increase',
        value: '25',
        suffix: '%',
        change: '25'
      }
    ] as Metric[],
    results: [
      'Reduced page load time by 65%',
      'Increased user engagement by 40%',
      'Improved conversion rate by 25%'
    ],
    galleryTitle: 'Project Gallery',
    galleryImages: [
      '/projects/corporate-1.jpg',
      '/projects/corporate-2.jpg',
      '/projects/corporate-3.jpg'
    ],
    testimonial: {
      quote: 'The team delivered an exceptional website that perfectly represents our brand.',
      author: 'John Smith',
      position: 'CTO',
      company: 'Global Corp Inc.',
      avatar: '/testimonials/john-smith.jpg'
    },
    keyTakeaways: [
      'Modern design systems improve maintainability',
      'Performance optimization is crucial for user experience',
      'User-centered design leads to better engagement'
    ],
    relatedCaseStudies: [
      {
        id: 2,
        title: 'E-commerce Platform',
        tagline: 'Boosting online sales',
        category: 'E-commerce',
        image: '/projects/ecommerce-thumb.jpg',
        technologies: ['Shopify', 'React', 'Node.js'],
        client: 'Fashion Co',
        slug: 'ecommerce',
        challenge: 'Scaling e-commerce operations',
        solution: 'Custom Shopify integration',
        results: 'Increased sales by 200%',
        description: 'A complete e-commerce solution'
      },
      {
        id: 3,
        title: 'Healthcare Portal',
        tagline: 'Improving patient experience',
        category: 'Healthcare',
        image: '/projects/healthcare-thumb.jpg',
        technologies: ['React', 'Node.js', 'MongoDB'],
        client: 'MedCare',
        slug: 'healthcare',
        challenge: 'Complex patient data management',
        solution: 'Modern healthcare portal',
        results: 'Reduced wait times by 50%',
        description: 'A modern healthcare portal'
      }
    ]
  }
  // Add more projects as needed
}

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projects.map((project: Project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p: Project) => p.slug === slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested case study could not be found.'
    }
  }

  return {
    title: project.seoMeta?.title || project.title,
    description: project.seoMeta?.description || project.description,
    keywords: project.seoMeta?.keywords || [],
    openGraph: {
      title: project.seoMeta?.title || project.title,
      description: project.seoMeta?.description || project.description,
      images: [project.image]
    }
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projectData[slug as keyof typeof projectData]

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation 
        projectTitle={project.title}
        liveUrl={project.liveUrl}
      />
      
      <Hero
        title={project.title}
        subtitle={project.subtitle}
        client={project.clientName}
        image={project.heroImage}
        logo={project.logoImage}
        metrics={project.metrics}
      />
      
      {/* Client Info & Project Overview */}
      {project.clientDescription && (
        <ClientInfo
          client={project.clientName}
          description={project.clientDescription}
          timeline={project.projectTimeline}
          industry={[project.industry].flat()}
        />
      )}
      
      {/* Challenges */}
      {project.challenges && (
        <Challenges 
          challenges={project.challenges}
        />
      )}
      
      {/* Solution */}
      {project.solution && (
        <Solution
          solution={project.solution}
          features={project.features}
        />
      )}
      
      {/* Tech Stack */}
      {project.technologies && (
        <TechStack
          technologies={project.technologies}
        />
      )}
      
      {/* Process Timeline */}
      {project.processSteps && (
        <ProcessTimeline
          process={project.processSteps}
        />
      )}
      
      {/* Results */}
      {project.results && project.metrics && (
        <Results
          results={project.results.join(' • ')}
          metrics={project.metrics}
        />
      )}
      
      {/* Gallery */}
      {project.galleryImages && (
        <Gallery
          images={project.galleryImages}
          title={project.galleryTitle}
        />
      )}
      
      {/* Testimonial */}
      {project.testimonial && (
        <CaseStudyTestimonial
          {...project.testimonial}
        />
      )}
      
      {/* Key Takeaways */}
      {project.keyTakeaways && (
        <KeyTakeaways
          takeaways={project.keyTakeaways}
        />
      )}
      
      {/* Related Projects */}
      {project.relatedCaseStudies && (
        <RelatedProjects
          projects={project.relatedCaseStudies as Project[]}
        />
      )}
      
      {/* CTA Banner */}
      <CTABanner
        heading="Want results like this?"
        subheading="Let's discuss how we can help you achieve similar success"
        primaryButtonText="Book a Strategy Call"
        primaryButtonLink="/contact"
      />
    </main>
  )
} 