'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

// Star rating component
const StarRating = ({ rating = 5 }: { rating?: number }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <svg 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'} fill-current mr-1`}
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
    name: 'Shilpi Sharma',
    handle: 'Owner, Kamla Health Clinic',
    text: 'We got more patient appointments in 30 days than we did in the previous 3 months. IDock Meta ads just work.',
    avatar: 'https://res.cloudinary.com/twosapiens/image/upload/v1747893959/image_1_nyihdt.png',
    rating: 4
  },
  {
    name: 'Jayveer Deo',
    handle: 'Owner of Two Sapiens | https://www.twosapiens.in',
    text: "Partnering with Intelligence Dock felt like hiring an in-house growth team — without the overhead. They understood our business, moved fast, and delivered real results across ads, SEO, and website performance.",
    avatar: 'https://res.cloudinary.com/twosapiens/image/upload/v1747893958/WhatsApp_Image_2025-04-09_at_19.20.16_5c2db04b_oibmpf.jpg',
  },

  {
    name: 'Veerandra Bhati',
    handle: 'Owner, VK Hostels Groups',
    text: 'Working with Sachin and the Intelligence Dock team was one of the best decisions we made for our hostel business. They built our website from scratch, got us listed professionally on Google, and ran targeted Meta ads that brought in real bookings.',
    avatar: 'https://res.cloudinary.com/twosapiens/image/upload/v1747893958/image_4_rpgncg.png',
  },
  {
    name: 'Aashutos Mishra',
    handle: 'Property advisor, Lonar Groups | https://lonargroups.netlify.app/',
    text: 'IDock developed a stunning portfolio website that helps me showcase our properties to clients professionally. The site loads quickly, looks great on mobile, and has directly contributed to increased client conversions.',
    avatar: 'https://res.cloudinary.com/twosapiens/image/upload/v1747893959/image_3_sfske4.png',
  },
 
  {
    name: 'Priya Patel',
    handle: '@priyapatel',
    text: 'The product photography and A+ content created by IDock elevated our brand presence across all marketplaces. Sales increased by 53% within the first quarter!',
    avatar: 'https://res.cloudinary.com/twosapiens/image/upload/v1747893958/image_4_rpgncg.png',
  },
  {
    name: 'James Wilson',
    handle: '@jameswilson',
    text: 'We struggled with inventory management until IDock implemented their automation solution. Now we save 25+ hours weekly and have virtually eliminated stockouts.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200',
  },
]

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-blue-50 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/3 -left-24 w-64 h-64 bg-indigo-300 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-300 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Testimonials indicator */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center text-blue-500 font-medium px-4 py-2 rounded-full bg-blue-50 shadow-sm border border-blue-100">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
            Testimonials
          </div>
        </div>
        
        {/* Main heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-[3.25rem] font-medium text-gray-900 leading-[1.2] tracking-tight">
            <span className="block mb-4">What our happy clients say</span>
            <span className="block text-[#4F7DF3]">about our services</span>
          </h2>
        </div>
        
        {/* Mobile testimonials view - only shown on mobile */}
        <div className="md:hidden">
          {/* Testimonials scrollable container with improved styling */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 space-x-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="flex-shrink-0 snap-start w-full sm:w-[85%] px-1"
                initial={{ opacity: 0.5, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4 }}
              >
                <TestimonialCard 
                  name={testimonial.name}
                  handle={testimonial.handle}
                  text={testimonial.text}
                  avatar={testimonial.avatar}
                  rating={testimonial.rating}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Enhanced pagination dots for mobile */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.slice(0, 6).map((_, index) => (
              <button
                key={index}
                className="w-3 h-3 rounded-full bg-gray-200 hover:bg-blue-500 focus:bg-blue-500 transition-colors duration-200 focus:outline-none border border-gray-300 hover:border-blue-500"
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const containerWidth = scrollContainerRef.current.clientWidth;
                    scrollContainerRef.current.scrollTo({
                      left: index * containerWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Desktop grid view - only shown on desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={index >= 3 ? "mt-8" : ""}
            >
              <TestimonialCard 
                name={testimonial.name}
                handle={testimonial.handle}
                text={testimonial.text}
                avatar={testimonial.avatar}
                rating={testimonial.rating}
              />
            </motion.div>
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
  rating?: number;
}

function TestimonialCard({ name, handle, text, avatar, rating = 5 }: TestimonialCardProps) {
  // Extract URL from handle if it exists
  const urlMatch = handle.match(/\bhttps?:\/\/\S+/gi);
  const websiteUrl = urlMatch ? urlMatch[0] : null;
  const displayHandle = websiteUrl ? handle.replace(` | ${websiteUrl}`, '') : handle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
        transition: { duration: 0.2 }
      }}
      className="bg-white border border-gray-100 shadow-md rounded-2xl p-8 flex flex-col h-full relative overflow-hidden group"
    >
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
      
      {/* Quote icon - removed or can be styled differently */}
      
      <div className="flex items-center mb-5">
        <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-white shadow-md transform group-hover:scale-110 transition-transform">
          <Image 
            src={avatar} 
            alt={name} 
            width={56} 
            height={56} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">{name}</h3>
          <div className="flex items-center">
            <p className="text-blue-500 text-sm font-medium">{displayHandle}</p>
            {websiteUrl && (
              <a 
                href={websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors font-medium flex items-center"
              >
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
                Website
              </a>
            )}
          </div>
        </div>
      </div>
      
      <p className="text-gray-700 mb-5 flex-grow text-lg leading-relaxed italic">
        "{text}"
      </p>
      
      <div className="transform group-hover:scale-105 transition-transform">
        <StarRating rating={rating} />
      </div>
    </motion.div>
  )
}

// Add this CSS to hide scrollbars while maintaining functionality
const scrollbarHideStyles = `
  /* Hide scrollbar for Chrome, Safari and Opera */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`; 