'use client'

import { useState } from 'react'
import Link from 'next/link'

// Social media icons
const socialIcons = [
  { name: 'Twitter', icon: 'M22 5.929a8.96 8.96 0 01-2.57.704 4.48 4.48 0 001.962-2.47 8.97 8.97 0 01-2.839 1.084A4.466 4.466 0 0015.526 4c-2.465 0-4.466 2-4.466 4.464 0 .35.04.69.117 1.017-3.71-.186-6.996-1.964-9.2-4.666a4.465 4.465 0 001.382 5.954 4.47 4.47 0 01-2.025-.56v.057c0 2.16 1.538 3.963 3.58 4.371a4.506 4.506 0 01-2.02.077 4.47 4.47 0 004.17 3.096 8.96 8.96 0 01-5.54 1.908c-.36 0-.715-.02-1.064-.062A12.65 12.65 0 0010.06 22c9.052 0 14-7.496 14-13.986 0-.213-.005-.425-.014-.636A9.998 9.998 0 0022 5.93z', viewBox: '0 0 24 24' },
  { name: 'Dribbble', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.424 25.424 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.814 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.686 8.686 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.309 35.309 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.66-6.084 2.68-.423 5.023.271 5.315.369a8.468 8.468 0 01-3.655 5.715z', viewBox: '0 0 24 24' },
  { name: 'Behance', icon: 'M7.799 10.271c0 .037 2.799.037 2.799 0 0-2.966-3.581-2.817-2.799 0zm8.352 0c-.84-2.38-4.174-1.943-3.352 0h3.352zM.808 12c.59 0 5.99.037 5.99 0 0-5.934-7.165-5.604-5.99 0zm4.76-4.143v2.64H.808s.248-5.514 4.76-2.64zm16.456 4.143c.59 0 5.99.037 5.99 0 0-5.934-7.165-5.604-5.99 0zm.77-1.502c-.84-2.38-4.174-1.944-3.352 0h3.351zm-9.082 0c.59 0 5.99.036 5.99 0 0-5.934-7.165-5.605-5.99 0zm4.76-4.143v2.638h-4.76s.248-5.513 4.76-2.638z', viewBox: '0 0 24 12' },
  { name: 'Vimeo', icon: 'M23.9765 6.4165c-.105 2.338-1.739 5.5646-4.8948 9.6791-3.2667 4.3005-6.0258 6.4507-8.2765 6.4507-1.4008 0-2.5857-1.2929-3.5547-3.8805-.6474-2.3756-1.2975-4.7552-1.9486-7.1266-.7216-2.5892-1.4972-3.8854-2.3286-3.8854-.1801 0-.8146.3789-1.8969 1.1385L0 7.0548c1.1934-1.0495 2.3705-2.0978 3.5308-3.1453C5.081 2.5009 6.2573 1.8282 7.0083 1.7325c1.8471-.1776 2.9829 1.0818 3.4089 3.7789.4634 2.9042.7847 4.7113.9621 5.4203.5355 2.4175 1.1237 3.6256 1.7689 3.6256.4996 0 1.2506-.791 2.2488-2.3749.9986-1.5833 1.5332-2.787 1.6017-3.6118.1424-1.366-.3936-2.0485-1.6081-2.0485-.5715 0-1.1601.1299-1.7653.3898 1.1718-3.8415 3.408-5.7132 6.7083-5.6156 2.4506.0646 3.6022 1.6549 3.4443 4.781z', viewBox: '0 0 24 24' },
  { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z', viewBox: '0 0 24 24' }
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  // Handle newsletter signup
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      console.log('Subscribing email:', email)
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-black text-white pt-16 pb-8 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-purple-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 bg-blue-500 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
          {/* Left column - Company info */}
          <div className="md:col-span-5">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">HiRank</span>
                <sup className="text-sm text-purple-400">TM</sup>
              </h2>
              <p className="text-xl text-gray-300 mb-4">Your Preferred Design Partner</p>
              <p className="text-gray-400 max-w-md">
                An integrated approach, competent organization of processes and personal responsibility of each specialist. We help you implement a project of any complexity.
              </p>
            </div>
            
            <Link 
              href="/contact" 
              className="inline-block mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300 text-white font-medium"
            >
              Let's Work Together
            </Link>
          </div>
          
          {/* Middle column - Platform */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-lg font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Platform</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-colors">About</Link></li>
              <li><Link href="/features" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-colors">Pricing & Plans</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Right column - Resources */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/account" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-colors">Account</Link></li>
              <li><Link href="/tools" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-colors">Tools</Link></li>
              <li><Link href="/newsletter" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-colors">Newsletter</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          {/* Far right column - Legals */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Legals</h4>
            <ul className="space-y-4">
              <li><Link href="/guides" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-colors">Guides</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/licensing" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-colors">Licensing</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Social media section */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="text-gray-500 text-sm mb-6 md:mb-0">
            &copy; {new Date().getFullYear()} HiRank Solutions. All rights reserved.
          </div>
          
          <div className="flex items-center">
            <span className="text-gray-400 mr-6">Follow us on:</span>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a 
                  key={index} 
                  href="#" 
                  aria-label={`Follow us on ${social.name}`}
                  className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox={social.viewBox}>
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Optional newsletter section - only visible on mobile */}
        <div className="md:hidden mt-8 pt-8 border-t border-gray-800">
          <h4 className="text-lg font-medium mb-3">Stay Updated</h4>
          {subscribed ? (
            <div className="text-green-400 text-sm">
              Thanks for subscribing! Check your inbox soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-500 flex-grow focus:outline-none focus:ring-1 focus:ring-gray-400"
                required
              />
              <button 
                type="submit" 
                className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </footer>
  )
} 