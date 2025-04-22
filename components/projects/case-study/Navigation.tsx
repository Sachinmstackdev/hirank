'use client'

import Link from 'next/link'
import { FadeIn } from './animations'

interface NavigationProps {
  projectTitle: string
  liveUrl?: string
}

export default function Navigation({
  projectTitle,
  liveUrl
}: NavigationProps) {
  return (
    <FadeIn className="bg-white py-4 md:py-6 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm md:text-base">
            <Link 
              href="/projects" 
              className="flex items-center text-gray-500 hover:text-blue-600 transition-colors"
            >
              <svg 
                className="w-4 h-4 mr-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
              Back to Projects
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="font-medium text-gray-900 truncate">{projectTitle}</span>
          </div>
          
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors"
            >
              Visit Live Site
              <svg 
                className="ml-2 w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </FadeIn>
  )
} 