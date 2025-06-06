'use client'

import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FadeIn } from './animations'

// Type definitions
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

interface CaseStudyContentProps {
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
}

const CaseStudyContent: FC<CaseStudyContentProps> = ({
  clientDescription,
  challenges,
  approach,
  solutions,
  technologies,
  process,
  outcomes,
  keyTakeaways,
  galleryImages,
  testimonial,
  relatedCaseStudies
}) => {
  return (
    <div className="bg-white">
      {/* Client Description */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <FadeIn>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">About the Client</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-700 text-center leading-relaxed">{clientDescription}</p>
          </div>
        </FadeIn>
      </section>

      {/* Challenges */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col items-center mb-16">
              <span className="text-blue-600 text-sm font-medium tracking-wider uppercase mb-3">Problem</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900">Challenges</h2>
            </div>
          </FadeIn>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8 border border-gray-100 h-full flex flex-col">
                  <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-full mb-6">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{challenge.title}</h3>
                  <p className="text-gray-700 mb-4 flex-grow">{challenge.description}</p>
                  {challenge.beforeState && (
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <span className="text-sm font-medium text-gray-500">Before: </span>
                      <span className="text-sm text-gray-700">{challenge.beforeState}</span>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Approach */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex flex-col items-center mb-12">
              <span className="text-blue-200 text-sm font-medium tracking-wider uppercase mb-3">Strategy</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">Our Approach</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-center text-blue-100 leading-relaxed">{approach}</p>
              
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">Strategy</h3>
                  <p className="text-sm text-blue-200">Research-backed</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">Design</h3>
                  <p className="text-sm text-blue-200">Mobile-first</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">Development</h3>
                  <p className="text-sm text-blue-200">Performance-first</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">Analytics</h3>
                  <p className="text-sm text-blue-200">Data-driven</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col items-center mb-16">
              <span className="text-blue-600 text-sm font-medium tracking-wider uppercase mb-3">Solution</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900">How We Solved It</h2>
            </div>
          </FadeIn>
          
          <div className="max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 mb-8 lg:mb-12">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/4 mb-6 lg:mb-0">
                      <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">{index + 1}</div>
                    </div>
                    <div className="lg:w-3/4">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{solution.title}</h3>
                      <p className="text-gray-700">{solution.description}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col items-center mb-16">
              <span className="text-blue-600 text-sm font-medium tracking-wider uppercase mb-3">Stack</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900">Technologies Used</h2>
            </div>
          </FadeIn>
          
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center border border-gray-100 w-[140px]">
                  {tech.icon && (
                    <div className="w-12 h-12 flex items-center justify-center mb-4">
                      <Image 
                        src={`/images/tech/${tech.icon}.svg`} 
                        alt={tech.name}
                        width={36}
                        height={36}
                      />
                    </div>
                  )}
                  <span className="font-medium text-gray-800 text-center">{tech.name}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col items-center mb-16">
              <span className="text-blue-600 text-sm font-medium tracking-wider uppercase mb-3">Execution</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900">Our Process</h2>
            </div>
          </FadeIn>
          
          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="mb-12 md:mb-16 relative">
                  {index < process.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-px bg-blue-200 h-full -z-10 hidden md:block"></div>
                  )}
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 mr-8 mb-4 md:mb-0">
                      <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">{step.description}</p>
                      {step.outcomeText && (
                        <div className="bg-blue-50 border border-blue-100 text-blue-800 p-4 rounded-lg">
                          <div className="font-medium mb-1">Outcome:</div>
                          <div>{step.outcomeText}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Outcomes */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col items-center mb-16">
              <span className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-3">Impact</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-center">Results & Outcomes</h2>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {outcomes.map((outcome, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700/50 shadow-lg">
                  <div className="text-4xl lg:text-5xl font-bold mb-4 text-blue-400">{outcome.value}</div>
                  <h3 className="text-xl font-medium mb-3 text-white">{outcome.title}</h3>
                  {outcome.description && (
                    <p className="text-gray-300 text-sm">{outcome.description}</p>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery */}
      {galleryImages.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="flex flex-col items-center mb-16">
                <span className="text-blue-600 text-sm font-medium tracking-wider uppercase mb-3">Showcase</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900">Project Gallery</h2>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {galleryImages.map((image, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                    <div className="relative">
                      <Image 
                        src={image} 
                        alt={`${index + 1} gallery image`}
                        width={800}
                        height={500}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="text-white font-medium">View larger image</div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Testimonial */}
      {testimonial && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="flex flex-col items-center mb-16">
                <span className="text-blue-600 text-sm font-medium tracking-wider uppercase mb-3">Client Feedback</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900">What They Say</h2>
              </div>
              
              <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
                {/* Quote marks */}
                <div className="absolute text-blue-100 top-6 left-8 text-8xl leading-none font-serif">"</div>
                <div className="absolute text-blue-100 bottom-6 right-8 text-8xl leading-none font-serif rotate-180">"</div>
                
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl text-gray-700 mb-8 relative z-10 font-light leading-relaxed text-center">
                    {testimonial.quote}
                  </p>
                  
                  <div className="flex flex-col items-center">
                    {testimonial.avatar && (
                      <div className="mb-4">
                        <Image 
                          src={testimonial.avatar} 
                          alt={testimonial.author}
                          width={80}
                          height={80}
                          className="rounded-full h-20 w-20 object-cover border-2 border-blue-200"
                        />
                      </div>
                    )}
                    <div className="text-center">
                      <p className="font-bold text-xl text-gray-900">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}
      
      {/* Key Takeaways */}
      {keyTakeaways.length > 0 && (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="flex flex-col items-center mb-16">
                <span className="text-blue-200 text-sm font-medium tracking-wider uppercase mb-3">Insights</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-center">Key Takeaways</h2>
              </div>
            </FadeIn>
            
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
              {keyTakeaways.map((takeaway, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-blue-700/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 shadow-lg h-full flex flex-col">
                    <div className="text-4xl font-bold mb-4 text-blue-200">{index + 1}</div>
                    <p className="text-white text-lg font-medium">{takeaway}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="flex flex-col items-center mb-16">
                <span className="text-blue-600 text-sm font-medium tracking-wider uppercase mb-3">Explore More</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900">Related Projects</h2>
              </div>
            </FadeIn>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedCaseStudies.map((project, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <Link href={`/projects/${project.slug}`} className="group block">
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                      <div className="p-8">
                        <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 mb-6">{project.subtitle}</p>
                        <div className="inline-flex items-center text-blue-600 font-medium">
                          View case study
                          <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default CaseStudyContent 