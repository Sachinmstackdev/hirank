'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Star rating component
const StarRating = () => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <svg 
        key={i} 
        className="w-5 h-5 text-black fill-current mr-1" 
        viewBox="0 0 24 24"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
)

// Testimonial data
const testimonials = [
  {
    name: 'Ryan Carter',
    handle: '@ryanc_ai',
    text: 'IDock transformed our workflow with AI automation, saving us countless hours!',
    avatar: '/testimonials/ryan.jpg',
  },
  {
    name: 'Ethan James',
    handle: '@ethanj',
    text: 'From automating tasks to optimizing workflows, IDock made our business more efficient than ever by eliminating manual work and reducing errors significantly.',
    avatar: '/testimonials/ethan.jpg',
  },
  {
    name: 'Jake Mitchell',
    handle: '@jakem',
    text: 'IDock our daily tool to bypass averages and reveal true insights, for the whole team!',
    avatar: '/testimonials/jake.jpg',
  },
  {
    name: 'Daniel Brooks',
    handle: '@dbrooks',
    text: 'Smart, fast, and intuitive—IDock simplifies AI automation like no other platform, enhancing scalability, reducing costs, and optimizing everyday operations with ease.',
    avatar: '/testimonials/daniel.jpg',
  },
  {
    name: 'Liam Foster',
    handle: '@liamf',
    text: 'The AI chatbot integration is a game-changer—it feels like having a 24/7 assistant!',
    avatar: '/testimonials/liam.jpg',
  },
  {
    name: 'Sophia Reed',
    handle: '@sophiareed',
    text: 'IDock transformed our workflow with AI automation, saving us countless hours every week and improving overall team efficiency effortlessly.',
    avatar: '/testimonials/sophia.jpg',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Testimonials indicator */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center text-blue-500 font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
            Testimonials
          </div>
        </div>
        
        {/* Main heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-[3.25rem] font-medium text-gray-900 leading-[1.2] tracking-tight">
            What our happy clients say<br />about our services
          </h2>
        </div>
        
        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              handle={testimonial.handle}
              text={testimonial.text}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonial card component
interface TestimonialCardProps {
  name: string;
  handle: string;
  text: string;
  avatar: string;
}

function TestimonialCard({ name, handle, text, avatar }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-gray-50 rounded-xl p-6 flex flex-col"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
          <Image 
            src={avatar} 
            alt={name} 
            width={48} 
            height={48} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{name}</h3>
          <p className="text-gray-500 text-sm">{handle}</p>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4 flex-grow">
        {text}
      </p>
      
      <StarRating />
    </motion.div>
  )
} 