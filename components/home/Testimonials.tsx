const testimonials = [
  {
    name: 'John Smith',
    company: 'Fashion Hub',
    text: 'HiRank transformed our online presence. Our e-commerce sales increased by 200% within months.',
    image: '/testimonials/client1.jpg'
  },
  {
    name: 'Sarah Johnson',
    company: 'Tech Solutions',
    text: 'Their expertise in MERN stack development helped us create a scalable marketplace platform.',
    image: '/testimonials/client2.jpg'
  },
  {
    name: 'Mike Brown',
    company: 'Lifestyle Store',
    text: 'The SEO and PPC campaigns delivered exceptional ROI. Highly recommended!',
    image: '/testimonials/client3.jpg'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">&quot;{testimonial.text}&quot;</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 