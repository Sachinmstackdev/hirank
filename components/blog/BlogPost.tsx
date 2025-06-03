'use client'

import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { buildCloudinaryURL } from '@/lib/cloudinary'

interface BlogPostProps {
  title: string
  description: string
  date: string
  content: React.ReactNode
  image?: string
  authors?: string[]
  tags?: string[]
}

export default function BlogPost({
  title,
  description,
  date,
  content,
  image,
  authors,
  tags,
}: BlogPostProps) {
  // Generate optimized Cloudinary URL if image is provided
  const imageUrl = image ? buildCloudinaryURL(image, {
    width: 1200,
    height: 630,
    quality: 90,
    format: 'auto'
  }) : null;

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          {imageUrl && (
            <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                quality={90}
              />
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
            <time dateTime={date}>
              {format(parseISO(date), 'MMMM d, yyyy')}
            </time>
            {authors && authors.length > 0 && (
              <div className="flex items-center">
                <span className="mx-2">•</span>
                <span>By {authors.join(', ')}</span>
              </div>
            )}
          </div>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <p className="text-xl text-gray-600">{description}</p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          {content}
        </div>
      </motion.div>
    </article>
  )
} 