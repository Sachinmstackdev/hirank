'use client'

import { useRef } from 'react'

const reasons = [
  {
    title: 'Senior Talent Only',
    description: 'Your project is run by founders who\'ve built $1M+ stores. Not junior devs. Not outsourced teams. Direct access to senior builders who\'ve launched 50+ DTC brands.',
    icon: '🎯'
  },
  {
    title: 'Systems That Scale',
    description: 'We build automated systems, not band-aid fixes. Every store and funnel is engineered with SOPs, tracking, and AI tools that run without you. 90-day setup to self-running.',
    icon: '⚡'
  },
  {
    title: 'Proven Growth Model',
    description: 'Copy our proven framework: 4.6x ROAS on cold traffic, 2.8x AOV with upsells, 40% reduction in CAC. We\'ll hand you the exact systems we used to scale stores to $80K/mo.',
    icon: '📈'
  },
  {
    title: '24/7 Expert Support',
    description: 'Slack access to our founder team. Weekly optimization calls. Real-time analytics dashboard. We\'re your growth team, not another agency vendor.',
    icon: '🛠️'
  }
]

export default function WhyChooseUs() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* Services indicator */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center text-blue-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
              Why Choose Us
            </div>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-[3.25rem] font-medium text-gray-900 leading-[1.4] tracking-tight">
            <span className="block mb-2 sm:mb-4">Not another agency</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Your technical growth team
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mt-6">
            Skip the agency bloat. Get a proven system + senior team that scales your brand without the usual overhead.
          </p>
        </div>
        
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
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{reason.title}</h3>
                <p className="text-gray-700 leading-relaxed">{reason.description}</p>
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
                  const itemWidth = containerWidth * 0.85;
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
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{reason.title}</h3>
              <p className="text-gray-700 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 