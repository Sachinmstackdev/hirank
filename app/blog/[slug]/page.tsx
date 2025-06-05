'use client'

import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { Metadata } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'

interface PageProps {
  params: {
    slug: string
  }
}

function getPostFromParams(slug: string) {
  const post = allPosts.find((post) => post.slug === slug)
  if (!post) {
    return null
  }
  return post
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostFromParams(params.slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: PageProps) {
  const post = getPostFromParams(params.slug)

  if (!post) {
    notFound()
  }

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <article className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Post Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>•</span>
            <span>{post.category}</span>
          </div>
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          <MDXContent />
        </div>

        {/* Tags */}
        {post.tags && (
          <div className="mt-8 pt-8 border-t">
            <h2 className="text-xl font-semibold mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
} 