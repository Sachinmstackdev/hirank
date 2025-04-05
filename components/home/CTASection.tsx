import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss how we can help you achieve your e-commerce goals
        </p>
        <Link 
          href="/contact"
          className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors inline-block"
        >
          Get Started Today
        </Link>
      </div>
    </section>
  )
} 