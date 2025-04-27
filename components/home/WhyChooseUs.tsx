'use client'

import { useRef } from 'react'

const reasons = [
  {
    title: 'Expert-Led Execution',
    description: 'Work with senior designers, developers & marketers who\'ve scaled 50+ eCommerce and SaaS brands from scratch. Not interns. Not freelancers.',
    icon: '✅'
  },
  {
    title: 'Strategy-Tailored Builds',
    description: 'We don\'t force templates. Every site, funnel or workflow is built with your goals, stack, and audience in mind.',
    icon: '🎯'
  },
  {
    title: 'Real Results, Fast',
    description: 'From 0 to 100 orders/day. From $500 to $25K/month in 4 months. We build to generate ROI — not just views.',
    icon: '📈'
  },
  {
    title: 'Support + Systems',
    description: 'Beyond 24/7 help — we install automation, dashboards & AI workflows to make support... optional.',
    icon: '🤖'
  }
]

export default function WhyChooseUs() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-3">Why Brands Choose Intelligence Dock</h2>
        <p className="text-center text-gray-600 mb-12">We don't just build — we solve, scale, and support growth from day one.</p>
        
        {/* Mobile/tablet swipeable container */}
        <div 
          ref={scrollContainerRef}
          className="lg:hidden flex overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 snap-start w-[85%] sm:w-[45%] md:w-[40%] px-3"
            >
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow h-full">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination dots for mobile */}
        <div className="flex justify-center space-x-2 mt-6 lg:hidden">
          {reasons.map((_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300 hover:bg-blue-500 focus:bg-blue-500"
              aria-label={`Go to reason ${index + 1}`}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const containerWidth = scrollContainerRef.current.clientWidth;
                  const itemWidth = containerWidth * 0.85; // Adjust to match the width of items
                  scrollContainerRef.current.scrollTo({
                    left: index * itemWidth,
                    behavior: 'smooth'
                  });
                }
              }}
            />
          ))}
        </div>
        
        {/* Desktop grid view - hidden on mobile */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 