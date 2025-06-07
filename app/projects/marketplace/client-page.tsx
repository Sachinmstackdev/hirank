'use client'

import { FC, useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Link from 'next/link'
import { Hero, CaseStudyContent, CTA, Navigation, FadeIn } from '@/components/projects/case-study/index'

// Type definitions
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
  description: string;
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

interface ClientCaseStudyPageProps {
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
      <span className="font-medium text-gray-700">Research: Sep 2023</span>
    </div>
    <div className="w-12 h-px bg-blue-200 hidden md:block"></div>
    <div className="flex items-center">
      <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 shadow-sm">2</span>
      <span className="font-medium text-gray-700">Development: Oct-Jan 2024</span>
    </div>
    <div className="w-12 h-px bg-blue-200 hidden md:block"></div>
    <div className="flex items-center">
      <span className="bg-green-100 text-green-800 rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 shadow-sm">3</span>
      <span className="font-medium text-gray-700">Launch: Feb 2024</span>
    </div>
  </div>
)

// Main client-side component with interactive elements
const ClientCaseStudyPage: FC<ClientCaseStudyPageProps> = ({ projectData }) => {
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
          client={projectData.clientName}
          image={projectData.heroImage}
          logo={projectData.logoImage}
          metrics={[]}
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
      
      {/* Gift platform dashboard mockup - specific to Gift Wrap */}
      <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg overflow-hidden relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Intelligent Dashboard</h3>
                <p className="text-gray-700 mb-6">The centralized dashboard gives businesses real-time visibility into every aspect of their gifting campaigns, from budget utilization to recipient engagement metrics.</p>
                <ul className="space-y-3">
                  {[
                    'Campaign performance tracking',
                    'Recipient engagement analytics',
                    'Budget utilization visualizations',
                    'Status alerts and notifications',
                    'Customizable reporting tools'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-white rounded-xl shadow-xl p-4 transform rotate-1">
                  <div className="bg-gray-800 rounded-lg p-2">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-xs text-gray-400">Gift Wrap Dashboard</span>
                    </div>
                    <img 
                      src="https://res.cloudinary.com/twosapiens/image/upload/v1745289748/Untitled_design_16_typ8wk.png" 
                      alt="Gift Wrap Dashboard" 
                      className="rounded-md"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTA 
        heading="Need a custom business platform for your company?"
        subheading="Let's create a tailored solution that streamlines your operations, enhances customer experiences, and drives measurable growth."
        primaryButtonText="Start Your Project"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore More Case Studies"
        secondaryButtonLink="/projects"
      />
    </main>
  );
};

export default ClientCaseStudyPage; 