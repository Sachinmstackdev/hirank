import { Metadata } from 'next'
import { allPosts } from 'contentlayer/generated'

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
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Intelligence Dock Team'],
    },
  }
} 