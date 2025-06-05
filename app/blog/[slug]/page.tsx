import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { Metadata } from 'next'
import Image from 'next/image'
import ClientMDXContent from '@/components/blog/ClientMDXContent'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

function getPostFromParams(slug: string) {
  const post = allPosts.find((post) => post.slug === slug)
  if (!post) {
    return null
  }
  return post
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostFromParams(slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams() {
  // Handle case where contentlayer hasn't generated any posts
  if (!allPosts || allPosts.length === 0) {
    console.warn('No posts found from contentlayer, returning empty params')
    return []
  }
  
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params
  const post = getPostFromParams(slug)

  if (!post) {
    notFound()
  }

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
        <ClientMDXContent post={post} />

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