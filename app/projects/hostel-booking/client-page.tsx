'use client'

import { FC, useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Link from 'next/link'
import Hero from '@/components/projects/case-study/Hero'
import CaseStudyContent from '@/components/projects/case-study/CaseStudyContent'
import CTA from '@/components/projects/case-study/CTA'
import Navigation from '@/components/projects/case-study/Navigation'
import { FadeIn } from '@/components/projects/case-study/animations'

// Type definitions - imported from the Two Sapiens project
interface MetricProps {
  value: string;
  label: string;
}

interface MiniTestimonialProps {
  quote: string;
  author: string;
  position?: string;
}

// Data types for project data
interface Challenge {
  title: string;
  description: string;
  beforeState?: string;
  icon?: string;
}

interface Solution {
  title: string;
  description: string;
  icon?: string;
}

interface Technology {
  name: string;
  icon?: string;
}

interface Outcome {
  title: string;
  value: string;
  description?: string;
}

interface ProcessStep {
  title: string;
  description: string;
  outcomeText?: string;
  icon?: string;
}

interface RelatedCaseStudy {
  title: string;
  subtitle: string;
  slug: string;
}

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  avatar?: string;
}

interface MiniTestimonial {
  quote: string;
  author: string;
  position?: string;
}

interface ExecutiveSummary {
  title: string;
  description: string;
}

interface ProjectData {
  title: string;
  subtitle: string;
  tagline: string;
  clientName: string;
  industry: string;
  timeframe: string;
  heroImage: string;
  logoImage?: string;
  liveUrl: string;
  executiveSummary: ExecutiveSummary[];
  clientDescription: string;
  challenges: Challenge[];
  approach: string;
  solutions: Solution[];
  technologies: Technology[];
  process: ProcessStep[];
  outcomes: Outcome[];
  keyTakeaways: string[];
  galleryImages: string[];
  testimonial: Testimonial;
  relatedCaseStudies: RelatedCaseStudy[];
  miniTestimonials: MiniTestimonial[];
}

interface ClientHostelBookingPageProps {
  projectData: ProjectData;
}

// Component for mini testimonials
const MiniTestimonial: FC<MiniTestimonialProps> = ({ quote, author, position }) => (
  <div className="my-10 mx-auto max-w-3xl bg-gray-50 p-6 rounded-xl border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-all duration-300">
    <p className="italic text-gray-700 leading-relaxed mb-4">"{quote}"</p>
    <p className="text-sm font-medium text-gray-900 flex items-center">
      <span className="inline-block w-8 h-0.5 bg-blue-400 mr-3"></span>
      {author}{position && `, ${position}`}
    </p>
  </div>
)

// Timeline component showing key project stages
const ProjectTimeline: FC = () => (
  <div className="flex flex-wrap justify-center items-center gap-6 text-sm mb-12">
    <div className="flex items-center">
      <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 shadow-sm">1</span>
      <span className="font-medium text-gray-700">Planning: Apr 2023</span>
    </div>
    <div className="w-12 h-px bg-blue-200 hidden md:block"></div>
    <div className="flex items-center">
      <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 shadow-sm">2</span>
      <span className="font-medium text-gray-700">Development: May-Jun 2023</span>
    </div>
    <div className="w-12 h-px bg-blue-200 hidden md:block"></div>
    <div className="flex items-center">
      <span className="bg-green-100 text-green-800 rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 shadow-sm">3</span>
      <span className="font-medium text-gray-700">Launch: Jul 2023</span>
    </div>
  </div>
)

// Main client-side component with interactive elements
const ClientHostelBookingPage: FC<ClientHostelBookingPageProps> = ({ projectData }) => {
  const [showStickyButton, setShowStickyButton] = useState<boolean>(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
   
  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      setShowStickyButton(scrollPosition > viewportHeight * 0.5);
    };
     
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <main className="relative bg-white">
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50" 
        style={{ scaleX }}
      />
      
      <Navigation projectTitle={projectData.title} liveUrl={projectData.liveUrl} />
      
      <div className="relative">
        <Hero 
          title={projectData.title}
          subtitle={projectData.subtitle}
          tagline={projectData.tagline}
          clientName={projectData.clientName}
          industry={projectData.industry}
          timeframe={projectData.timeframe}
          heroImage={projectData.heroImage}
          logoImage={projectData.logoImage}
          executiveSummary={projectData.executiveSummary}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <ProjectTimeline />
      </div>
      
      <CaseStudyContent 
        clientDescription={projectData.clientDescription}
        challenges={projectData.challenges}
        approach={projectData.approach}
        solutions={projectData.solutions}
        technologies={projectData.technologies}
        process={projectData.process}
        outcomes={projectData.outcomes}
        keyTakeaways={projectData.keyTakeaways}
        galleryImages={projectData.galleryImages}
        testimonial={projectData.testimonial}
        relatedCaseStudies={projectData.relatedCaseStudies}
      />
      
      {/* Add mini testimonials after key sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {projectData.miniTestimonials.map((testimonial, index) => (
          <MiniTestimonial 
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            position={testimonial.position}
          />
        ))}
      </div>
      
      {/* Challenge cards with before state */}
      <div className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-16">The Challenges We Solved</h3>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projectData.challenges.map((challenge, index) => (
              <FadeIn
                key={index}
                delay={index * 0.1}
                className="rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl border border-gray-100"
              >
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {challenge.title}
                </h3>
                {challenge.beforeState && (
                  <div className="mb-4 flex items-center text-red-600">
                    <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span className="text-sm font-medium">Before: {challenge.beforeState}</span>
                  </div>
                )}
                <p className="text-gray-600">{challenge.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
      
      <CTA 
        heading="Need a custom web application for your business?"
        subheading="Let's build a solution that automates your processes, improves user experience, and drives measurable growth for your organization."
        primaryButtonText="Start Your Project"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore More Case Studies"
        secondaryButtonLink="/projects"
        trustPoints={[
          "Full-stack development expertise",
          "User-centered design approach",
          "Scalable, future-proof solutions"
        ]}
      />
      
      {showStickyButton && (
        <motion.div 
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-900/95 backdrop-blur-md border-t border-gray-800 shadow-lg"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <div className="text-blue-400 text-3xl font-bold mr-3">+42%</div>
              <div className="text-gray-300">Occupancy increase</div>
            </div>
            <Link 
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow-lg hover:bg-blue-500 transform hover:translate-y-[-2px] transition-all duration-300"
            >
              Get Results Like These
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      )}
    </main>
  )
}

export default ClientHostelBookingPage 