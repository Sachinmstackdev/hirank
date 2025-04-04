const reasons = [
  {
    title: 'Expert Team',
    description: 'Seasoned professionals with years of industry experience',
    icon: '👥'
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored strategies to meet your specific business needs',
    icon: '⚡'
  },
  {
    title: 'Proven Results',
    description: 'Track record of successful client transformations',
    icon: '📈'
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock assistance for your business',
    icon: '🔧'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 