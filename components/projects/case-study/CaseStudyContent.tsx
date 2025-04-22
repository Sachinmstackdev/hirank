'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeIn } from './animations'

interface Challenge {
  title: string
  description: string
}

interface Solution {
  title: string
  description: string
  icon?: string
}

interface Technology {
  name: string
  icon?: string
}

interface Outcome {
  title: string
  value: string
  description?: string
}

interface CaseStudyContentProps {
  clientDescription: string
  challenges: Challenge[]
  solutions: Solution[]
  technologies: Technology[]
  outcomes: Outcome[]
  galleryImages?: string[]
  testimonial?: {
    quote: string
    author: string
    position: string
    avatar?: string
  }
}

export default function CaseStudyContent({
  clientDescription,
  challenges,
  solutions,
  technologies,
  outcomes,
  galleryImages = [],
  testimonial
}: CaseStudyContentProps) {
  return (
    <div className="bg-white">
      {/* Client description */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="mx-auto max-w-4xl text-center text-xl leading-relaxed text-gray-700">
              {clientDescription}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Challenge */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Challenge
            </h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-blue-600"></div>
          </FadeIn>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((challenge, index) => (
              <FadeIn
                key={index}
                delay={index * 0.1}
                className="rounded-xl bg-white p-8 shadow-md transition-all hover:shadow-xl"
              >
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {challenge.title}
                </h3>
                <p className="text-gray-600">{challenge.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Solution
            </h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-blue-600"></div>
          </FadeIn>

          <div className="mt-16 space-y-16">
            {solutions.map((solution, index) => (
              <FadeIn
                key={index}
                delay={index * 0.1}
                className="relative mx-auto flex max-w-4xl flex-col gap-8 rounded-xl p-8 md:flex-row md:items-start"
              >
                {solution.icon && (
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <span className="text-2xl">{solution.icon}</span>
                  </div>
                )}
                <div>
                  <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      {galleryImages.length > 0 && (
        <section className="bg-gray-900 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Project Gallery
              </h2>
              <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-blue-500"></div>
            </FadeIn>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image, index) => (
                <FadeIn
                  key={index}
                  delay={index * 0.1}
                  className="group relative aspect-video overflow-hidden rounded-lg shadow-xl"
                >
                  <Image
                    src={image}
                    alt={`Project image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies Used */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Technologies Used
            </h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-blue-600"></div>
          </FadeIn>

          <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12">
            {technologies.map((tech, index) => (
              <FadeIn
                key={index}
                delay={index * 0.05}
                className="flex items-center justify-center rounded-lg bg-white p-4 shadow-md transition-all hover:shadow-lg"
              >
                <div className="text-center">
                  {tech.icon && <div className="mb-2 text-4xl">{tech.icon}</div>}
                  <span className="font-medium text-gray-900">{tech.name}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Business Impact
            </h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-blue-600"></div>
          </FadeIn>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((outcome, index) => (
              <FadeIn
                key={index}
                delay={index * 0.1}
                className="rounded-lg bg-white p-8 text-center shadow-md transition-all hover:shadow-xl"
              >
                <div className="mb-4 text-4xl font-bold text-blue-600">
                  {outcome.value}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {outcome.title}
                </h3>
                {outcome.description && (
                  <p className="text-gray-600">{outcome.description}</p>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {testimonial && (
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 lg:py-24 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="mx-auto max-w-4xl rounded-xl bg-white/10 p-8 text-center backdrop-blur-sm md:p-12">
              <div className="mb-6 text-5xl">"</div>
              <blockquote className="mb-8 text-xl font-medium italic text-white md:text-2xl">
                {testimonial.quote}
              </blockquote>
              <div className="flex items-center justify-center">
                {testimonial.avatar && (
                  <div className="mr-4 h-16 w-16 overflow-hidden rounded-full border-2 border-white">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="text-left">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-blue-100">{testimonial.position}</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}
    </div>
  )
} 