import Image from 'next/image'
import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import BlogList from '@/components/blog/BlogList'

export default function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published !== false)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Insights & Resources
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our latest thoughts on technology, digital transformation, and business innovation
        </p>
      </div>

      {/* Blog Posts */}
      <BlogList initialPosts={posts} />
    </div>
  )
} 