'use client'

import { useState, useEffect, Suspense } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '@/lib/supabase'
import { handleContactFormSubmission } from '@/app/actions/index'
import Loading from '@/components/Loading'

// Separate the form component for better performance
function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    massage: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      const result = await handleContactFormSubmission(formData)
      
      if (result.success) {
        setSubmitSuccess(true)
        setFormData({ fullName: '', email: '', subject: '', massage: '' })
      } else {
        throw new Error(result.error || 'Failed to submit message')
      }
    } catch (error) {
      setSubmitError('Something went wrong. Please try again.')
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div 
      className="rounded-3xl bg-white/90 backdrop-blur-lg border border-white/60 shadow-xl p-8 lg:col-span-2 order-1 lg:order-2"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {submitSuccess ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
          <p className="text-gray-600 mb-6">Thanks for reaching out. We'll get back to you shortly.</p>
          <button 
            onClick={() => setSubmitSuccess(false)}
            className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">Subject (Optional)</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="How can we help you?"
            />
          </div>
          
          <div>
            <label htmlFor="massage" className="block text-sm font-medium text-gray-700 mb-1.5">Message (Optional)</label>
            <textarea
              id="massage"
              name="massage"
              value={formData.massage}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="Tell us more about your project, needs, and timeline..."
            ></textarea>
          </div>

          {submitError && (
            <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">{submitError}</div>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <circle className="opacity-75" cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="4"></circle>
                </svg>
                Submitting...
              </>
            ) : 'Send Message'}
          </button>
        </form>
      )}
    </motion.div>
  )
}

// Contact information section
function ContactInfo() {
  return (
    <motion.div 
      className="rounded-3xl bg-white/80 backdrop-blur-lg border border-white/60 shadow-xl p-8 lg:col-span-1 order-2 lg:order-1"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
        <p className="text-gray-600">
          We're here to help. Reach out and we'll get back to you within 24 hours.
        </p>
      </div>

      <div className="space-y-8 mb-12">
        <div className="flex items-start space-x-5">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3.5 rounded-2xl shadow-md text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Our Location</h3>
            <p className="text-gray-600 mt-1">123 SEO Street, Digital City, 10001</p>
          </div>
        </div>

        <div className="flex items-start space-x-5">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3.5 rounded-2xl shadow-md text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77383 17.3147 6.72534 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.27097 2.12 4.18C2.09501 3.90363 2.12788 3.62492 2.21649 3.36176C2.3051 3.09859 2.4475 2.85679 2.6347 2.65172C2.82189 2.44665 3.04975 2.28281 3.30379 2.17062C3.55782 2.05843 3.83256 2.00036 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04208 3.23945 9.11 3.72C9.23662 4.68007 9.47145 5.62273 9.81 6.53C9.94455 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51356 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0554 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Phone</h3>
            <p className="text-gray-600 mt-1">+91 92896 13912</p>
          </div>
        </div>

        <div className="flex items-start space-x-5">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3.5 rounded-2xl shadow-md text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Email</h3>
            <p className="text-gray-600 mt-1">info@IDock.com</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
        <div className="flex space-x-3">
          <a href="#" className="bg-white hover:bg-gray-100 p-3 rounded-full shadow-md transition-all hover:scale-110 border border-gray-100">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#4F7DF3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#" className="bg-white hover:bg-gray-100 p-3 rounded-full shadow-md transition-all hover:scale-110 border border-gray-100">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="#4F7DF3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#" className="bg-white hover:bg-gray-100 p-3 rounded-full shadow-md transition-all hover:scale-110 border border-gray-100">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#4F7DF3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 9H2V21H6V9Z" stroke="#4F7DF3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#4F7DF3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#" className="bg-white hover:bg-gray-100 p-3 rounded-full shadow-md transition-all hover:scale-110 border border-gray-100">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 6.5H17.51M7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2ZM16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="#4F7DF3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function ContactPage() {
  // Pre-connect to Supabase once the component mounts
  useEffect(() => {
    // Preconnect to Supabase
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://pdwlvvawcmghxoqvppdq.supabase.co';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pt-40 pb-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div 
          className="text-center mb-36"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-[3.25rem] font-medium text-gray-900 leading-[1.3] tracking-tight mb-8">
            <span className="block mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">Get in Touch</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl text-gray-800">We'd love to hear from you</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our services? Looking to boost your rankings? 
            We're here to help your business grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          {/* Contact Information */}
          <Suspense fallback={<div className="animate-pulse h-full bg-gray-100 rounded-3xl"></div>}>
            <ContactInfo />
          </Suspense>

          {/* Contact Form */}
          <Suspense fallback={<div className="animate-pulse h-full bg-gray-100 rounded-3xl lg:col-span-2"></div>}>
            <ContactForm />
          </Suspense>
        </div>

        {/* Map Section */}
        <motion.div 
          className="mt-16 rounded-3xl overflow-hidden h-[450px] relative shadow-xl border border-white/60"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.1539068444266!2d77.4018923319022!3d28.49572931098987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce94343ffb089%3A0xb4762772e9f47f6a!2sTwo%20sapiens!5e0!3m2!1sen!2sin!4v1744388779110!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </motion.div>
      </div>
    </div>
  )
} 