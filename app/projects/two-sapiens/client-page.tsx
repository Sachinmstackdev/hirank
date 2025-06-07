'use client'

import { FC, useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Link from 'next/link'
import { Hero, CaseStudyContent, CTA, Navigation, FadeIn } from '@/components/projects/case-study/index'
import Image from 'next/image'

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

interface ClientTwoSapiensPageProps {
  projectData: ProjectData;
}

// Component for scroll indicator
const ScrollIndicator: FC = () => (
  <motion.div 
    className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center"
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 1.5 }}
  >
    <span className="text-blue-200 text-sm mb-2">Scroll to see our process</span>
    <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </motion.div>
)

// Component for sticky metrics
const StickyMetric: FC<MetricProps> = ({ value, label }) => (
  <div className="bg-white/15 backdrop-blur-md p-4 rounded-xl text-center border border-white/10 shadow-lg">
    <div className="text-3xl font-bold text-white mb-1">{value}</div>
    <div className="text-blue-200 text-sm">{label}</div>
  </div>
)

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
      <span className="font-medium text-gray-700">Project Started: Jan 2023</span>
    </div>
    <div className="w-12 h-px bg-blue-200 hidden md:block"></div>
    <div className="flex items-center">
      <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 shadow-sm">2</span>
      <span className="font-medium text-gray-700">Launch: Mar 2023</span>
    </div>
    <div className="w-12 h-px bg-blue-200 hidden md:block"></div>
    <div className="flex items-center">
      <span className="bg-green-100 text-green-800 rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 shadow-sm">3</span>
      <span className="font-medium text-gray-700">Results: May 2023</span>
    </div>
  </div>
)

// Main client-side component with interactive elements
const ClientTwoSapiensPage: FC<ClientTwoSapiensPageProps> = ({ projectData }) => {
  const [showStickyButton, setShowStickyButton] = useState<boolean>(false);
  const [showBeforeAfter, setShowBeforeAfter] = useState<boolean>(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Animation variants for results counter
  const counterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
   
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
    <main className="relative bg-gradient-to-b from-gray-50 to-white">
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50" 
        style={{ scaleX }}
      />
      
      <Navigation projectTitle={projectData.title} liveUrl={projectData.liveUrl} />
      
      {/* Enhanced Hero Section with Transformation Focus */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/85 mix-blend-multiply" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-blue-500/20 text-blue-200 rounded-full text-sm font-medium">
              <span className="mr-2 bg-blue-400 w-2 h-2 rounded-full"></span>
              Case Study: {projectData.clientName}
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              From Boutique to 300% Growth in 12 Months
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
              How we helped a premium leather brand expand across channels, triple their revenue, and build a performance-first digital presence.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-full font-medium hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Your Free Growth Blueprint
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <button
                onClick={() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-4 bg-blue-700/30 text-white rounded-full font-medium hover:bg-blue-700/40 transition-all duration-300"
              >
                See the Results
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll-Jacking Results Section */}
      <section id="results" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={counterVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-5xl font-bold text-blue-600 mb-4">₹2.4Cr+</div>
              <div className="text-xl text-gray-600">New Revenue Generated</div>
            </motion.div>

            <motion.div
              variants={counterVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-5xl font-bold text-blue-600 mb-4">4.8x</div>
              <div className="text-xl text-gray-600">Return on Ad Spend</div>
            </motion.div>

            <motion.div
              variants={counterVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-5xl font-bold text-blue-600 mb-4">25%</div>
              <div className="text-xl text-gray-600">Revenue from Email</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After UI Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">The Transformation</h2>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative w-full aspect-[16/9]">
                <div className={`absolute inset-0 transition-transform duration-700 ease-in-out transform ${showBeforeAfter ? 'translate-x-0' : 'translate-x-full'}`}>
                  <Image
                    src="/images/two-sapiens-after.jpg"
                    alt="New optimized Two Sapiens website"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={`absolute inset-0 transition-transform duration-700 ease-in-out transform ${showBeforeAfter ? '-translate-x-full' : 'translate-x-0'}`}>
                  <Image
                    src="/images/two-sapiens-before.jpg"
                    alt="Original Two Sapiens website"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <button
                onClick={() => setShowBeforeAfter(!showBeforeAfter)}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium shadow-lg hover:bg-white transition-all duration-300"
              >
                {showBeforeAfter ? 'View Before' : 'View After'}
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-8 text-center">
              <div>
                <h3 className="text-lg font-semibold text-red-600 mb-2">Before</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Generic template design</li>
                  <li>4.2s page load time</li>
                  <li>2.1% conversion rate</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-2">After</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Custom premium design</li>
                  <li>1.8s page load time</li>
                  <li>5.8% conversion rate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-16">Hear it From the Founder</h2>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-12 aspect-video">
              <iframe
                src="https://www.loom.com/embed/your-video-id"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>

            <blockquote className="text-2xl font-light text-gray-700 italic mb-8">
              "{projectData.testimonial.quote}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4 mb-12">
              {projectData.testimonial.avatar && (
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-600">
                  <Image
                    src={projectData.testimonial.avatar}
                    alt={projectData.testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <div className="font-medium text-gray-900">{projectData.testimonial.author}</div>
                <div className="text-gray-600">{projectData.testimonial.position}</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300"
            >
              Want Results Like This? Get Your Free Growth Audit
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Challenges Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">The Challenges We Solved</h2>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectData.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                    <p className="text-red-600 text-sm font-medium mb-4">Before: {challenge.beforeState}</p>
                    <p className="text-gray-600">{challenge.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Timeline Solution Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-y-0 left-1/2 w-0.5 bg-blue-100 transform -translate-x-1/2"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Systematic Approach</h2>
          
          <div className="max-w-4xl mx-auto">
            {projectData.solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Phase {index + 1}: {solution.title}</h3>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    <div className="flex flex-wrap gap-2 justify-end">
                      {/* Add relevant tool icons here */}
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Klaviyo</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Meta Ads</span>
                    </div>
                  </div>
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Proof Points */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">See Our Work in Action</h2>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-8 shadow-lg cursor-pointer group"
            >
              <div className="aspect-video bg-gray-100 rounded-lg mb-6 overflow-hidden">
                <Image
                  src="/images/landing-page-preview.jpg"
                  alt="Landing page preview"
                  width={400}
                  height={225}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">High-Converting Landing Page</h3>
              <p className="text-gray-600 mb-4">See how we achieved a 5.8% conversion rate</p>
              <Link
                href="#"
                className="text-blue-600 font-medium inline-flex items-center group-hover:text-blue-700"
              >
                View Landing Page
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-8 shadow-lg cursor-pointer group"
            >
              <div className="aspect-video bg-gray-100 rounded-lg mb-6 overflow-hidden">
                <Image
                  src="/images/ad-creative-preview.jpg"
                  alt="Ad creative preview"
                  width={400}
                  height={225}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">4.8x ROAS Ad Creative</h3>
              <p className="text-gray-600 mb-4">The exact ad that drove massive returns</p>
              <Link
                href="#"
                className="text-blue-600 font-medium inline-flex items-center group-hover:text-blue-700"
              >
                See Ad Creative
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-8 shadow-lg cursor-pointer group"
            >
              <div className="aspect-video bg-gray-100 rounded-lg mb-6 overflow-hidden">
                <Image
                  src="/images/email-flow-preview.jpg"
                  alt="Email flow preview"
                  width={400}
                  height={225}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">25% Revenue Email Flow</h3>
              <p className="text-gray-600 mb-4">Download our proven email sequence</p>
              <Link
                href="#"
                className="text-blue-600 font-medium inline-flex items-center group-hover:text-blue-700"
              >
                Download Flow Template
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/cta-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Want to 3x Your Growth Like Two Sapiens?
            </h2>
            <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
              We'll show you how to unlock more sales from the assets you already have. Book a free strategy call to get your custom growth blueprint.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-full font-medium hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Your Free Strategy Blueprint
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-blue-800/50 text-white rounded-full font-medium hover:bg-blue-800/70 transition-all duration-300"
              >
                See More Case Studies
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
                <svg className="w-8 h-8 text-blue-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-blue-200">No obligation consultation</p>
              </div>
              
              <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
                <svg className="w-8 h-8 text-blue-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <p className="text-blue-200">Results in 90 days or less</p>
              </div>
              
              <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
                <svg className="w-8 h-8 text-blue-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p className="text-blue-200">Data-driven strategies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Sticky CTA */}
      {showStickyButton && (
        <motion.div 
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-lg"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-8">
              <div>
                <div className="text-blue-600 text-3xl font-bold">300%</div>
                <div className="text-gray-600">Revenue Growth</div>
              </div>
              <div>
                <div className="text-blue-600 text-3xl font-bold">4.8x</div>
                <div className="text-gray-600">ROAS</div>
              </div>
            </div>
            <Link 
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-medium shadow-lg hover:bg-blue-500 transform hover:-translate-y-1 transition-all duration-300"
            >
              Get Your Free Growth Blueprint
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

export default ClientTwoSapiensPage 