import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects, Project } from '@/data/projects'
import Hero from '@/components/projects/case-study/Hero'
import Navigation from '@/components/projects/case-study/Navigation'
import ClientInfo from '@/components/projects/case-study/ClientInfo'
import Challenges from '@/components/projects/case-study/Challenges'
import Solution from '@/components/projects/case-study/Solution'
import TechStack from '@/components/projects/case-study/TechStack'
import ProcessTimeline from '@/components/projects/case-study/ProcessTimeline'
import Results from '@/components/projects/case-study/Results'
import Gallery from '@/components/projects/case-study/Gallery'
import Testimonial from '@/components/projects/case-study/Testimonial'
import KeyTakeaways from '@/components/projects/case-study/KeyTakeaways'
import RelatedProjects from '@/components/projects/case-study/RelatedProjects'
import CTABanner from '@/components/projects/case-study/CTABanner'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project: Project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p: Project) => p.slug === params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested case study could not be found.'
    }
  }

  return {
    title: project.seoMeta.title,
    description: project.seoMeta.description,
    keywords: project.seoMeta.keywords,
    openGraph: {
      title: project.seoMeta.title,
      description: project.seoMeta.description,
      images: [project.image]
    }
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p: Project) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  // Get related projects
  const relatedProjects = projects
    .filter((p: Project) => p.slug !== project.slug)
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-white">
      <Navigation 
        projectTitle={project.title}
        liveUrl={project.website}
      />
      
      {/* Hero Section */}
      <Hero
        title={project.title}
        client={project.client}
        logo={project.logo}
        image={project.image}
        metrics={project.metrics}
        subtitle={project.tagline}
      />
      
      {/* Client Info & Project Overview */}
      <ClientInfo
        client={project.client}
        description={project.description}
        timeline={project.timeline}
        industry={project.industry}
      />
      
      {/* Challenges */}
      <Challenges 
        challenges={project.challenges}
      />
      
      {/* Solution Overview */}
      <Solution 
        solution={project.solution}
        features={project.features}
      />
      
      {/* Tech Stack */}
      <TechStack 
        technologies={project.technologies}
      />
      
      {/* Process Timeline */}
      <ProcessTimeline 
        process={project.process}
      />
      
      {/* Results & Outcomes */}
      <Results 
        results={project.results}
        metrics={project.metrics}
      />
      
      {/* Project Gallery */}
      <Gallery 
        images={project.gallery}
        title={project.title}
      />
      
      {/* Client Testimonial */}
      <Testimonial 
        {...project.testimonial}
      />
      
      {/* Key Takeaways */}
      <KeyTakeaways 
        takeaways={project.keyTakeaways}
      />
      
      {/* Related Projects */}
      <RelatedProjects 
        projects={relatedProjects}
      />
      
      {/* Final CTA Banner */}
      <CTABanner 
        heading="Want results like this?"
        subheading="Let's discuss how we can help you achieve similar success"
        primaryButtonText="Book a Strategy Call"
        primaryButtonLink="/contact"
      />
    </main>
  )
} 