import { FC } from 'react'
import Image from 'next/image'

interface TestimonialProps {
  quote: string
  author: string
  position: string
  company: string
  image?: string
}

const Testimonial: FC<TestimonialProps> = ({
  quote,
  author,
  position,
  company,
  image
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl font-light text-gray-700 italic mb-8">
            "{quote}"
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            {image && (
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={image}
                  alt={author}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="text-left">
              <div className="font-medium text-gray-900">{author}</div>
              <div className="text-gray-600">{position} at {company}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial 