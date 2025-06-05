'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'
import { Post } from 'contentlayer/generated'

interface ClientMDXContentProps {
  post: Post
}

export default function ClientMDXContent({ post }: ClientMDXContentProps) {
  try {
    // Check if post.body.code exists
    if (!post.body?.code) {
      return (
        <div className="prose prose-lg max-w-none">
          <p>Content not available. Please check back later.</p>
        </div>
      )
    }

    const MDXContent = useMDXComponent(post.body.code)
    
    return (
      <div className="prose prose-lg max-w-none">
        <MDXContent />
      </div>
    )
  } catch (error) {
    console.error('Error rendering MDX content:', error)
    return (
      <div className="prose prose-lg max-w-none">
        <p>Error loading content. Please try refreshing the page.</p>
      </div>
    )
  }
} 