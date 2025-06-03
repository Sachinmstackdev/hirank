import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import BlogPost from '@/components/blog/BlogPost'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Await the params object first
  const resolvedParams = await params
  const post = allPosts.find((post) => post.slug === resolvedParams.slug)

  if (!post) {
    notFound()
  }

  const Content = getMDXComponent(post.body.code)

  return (
    <BlogPost
      title={post.title}
      description={post.description}
      date={post.date}
      content={<Content />}
      image={post.image}
      authors={post.authors}
      tags={post.tags}
    />
  )
} 