'use client'

import { motion } from 'framer-motion'

// Process steps data
const processSteps = [
  {
    id: 1,
    title: "Discovery & Strategy",
    description: "We start by understanding your business, goals, and challenges through in-depth consultation to develop a tailored strategy.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 2,
    title: "Planning & Design",
    description: "We create detailed project plans and design mockups, establishing clear timelines, deliverables, and expectations.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 3,
    title: "Development & Implementation",
    description: "Our experts build your solution, with regular check-ins and transparent updates throughout the development process.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 9L11 12L8 15M13 15H16M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 4,
    title: "Testing & Refinement",
    description: "We thoroughly test all aspects of your solution, making refinements based on data and feedback to ensure optimal performance.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 5,
    title: "Launch & Support",
    description: "We ensure a smooth launch and provide ongoing support and maintenance to help your business continue to grow and evolve.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
]

export default function HowWeWork() {
  return (
    <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Section indicator */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center text-blue-500 dark:text-blue-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 mr-2"></span>
            Our Process
          </div>
        </div>
        
        {/* Main heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 dark:text-white leading-tight mb-6">
            How We Work With You
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We follow a proven process that ensures high-quality results, clear communication, and successful project delivery.
          </p>
        </div>
        
        {/* Process steps */}
        <div className="max-w-6xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-0.5 bg-blue-100 dark:bg-blue-900/30 hidden md:block"></div>
          
          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {processSteps.map((step, index) => (
              <motion.div 
                key={step.id}
                className="relative md:flex items-center md:h-80"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Number Circle - Centered in MD, Left in Mobile */}
                <div className="absolute flex md:left-1/2 md:transform md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 top-0 left-4 z-10">
                  <div className="h-12 w-12 rounded-full bg-blue-500 dark:bg-blue-400 text-white flex items-center justify-center font-medium text-lg shadow-md">
                    {step.id}
                  </div>
                </div>
                
                {/* Content Card - Alternating Left/Right */}
                <div className={`md:w-[45%] ${index % 2 === 0 ? 'md:pr-20 md:text-right md:ml-auto' : 'md:pl-20 md:mr-auto'} pl-16 md:pl-0`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className={`flex items-center mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className={`rounded-md p-2 bg-${getIconColor(step.id)}-50 dark:bg-${getIconColor(step.id)}-900/20 text-${getIconColor(step.id)}-600 dark:text-${getIconColor(step.id)}-400 ${index % 2 === 0 ? 'md:order-1 md:ml-3' : 'mr-3'}`}>
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Helper function to get different colors for each icon background
function getIconColor(id: number): string {
  const colors = ['blue', 'indigo', 'blue', 'indigo', 'blue'];
  return colors[id - 1] || 'blue';
} 