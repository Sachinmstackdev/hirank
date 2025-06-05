'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'
import { Post } from 'contentlayer/generated'

interface BlogPostContentProps {
  post: Post
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const MDXContent = useMDXComponent(post.body.code)
  
  return <MDXContent />
} 