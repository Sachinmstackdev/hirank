import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react' // For FAQ accordion functionality

export default function AboutPage() {
  // Service list for easy mapping
  const services = [
    { name: 'E-commerce Website Development', description: 'Building high-converting online stores using React, Next.js, MERN, Shopify, and WordPress for businesses in Noida and Delhi NCR.' },
    { name: 'Social Media Growth', description: 'Expanding your reach and engagement on Instagram, Facebook, and LinkedIn with targeted strategies for the Indian market.' },
    { name: 'Search Engine Optimization (SEO)', description: 'Improving your visibility on Google with comprehensive On-Page, Off-Page, and Local SEO services tailored for Delhi NCR.' },
    { name: 'Google Analytics, Heatmaps & CRO', description: 'Leveraging data to understand user behavior and optimize your website for maximum conversions.' },
    { name: 'PPC Advertising', description: 'Driving targeted traffic and leads through expert management of Meta & Google Ads campaigns focused on ROI.' },
    { name: 'AI Workflow & Automation', description: 'Streamlining your business processes using AI for CRM, Email Marketing, and WhatsApp Automation – giving Noida businesses a competitive edge.' },
    { name: 'Branding & Strategy', description: 'Crafting compelling brand identities and digital strategies for startups and small businesses aiming for success in Delhi and beyond.' },
  ]

  // Simple 4-step process
  const processSteps = [
    { title: '1. Discover & Strategize', description: 'We dive deep into your business goals, target audience (especially in the Delhi NCR region), and challenges to create a tailored roadmap.' },
    { title: '2. Design & Develop', description: 'Our expert team crafts user-centric designs and develops robust solutions, whether it\'s an eCommerce site or a marketing campaign.' },
    { title: '3. Execute & Optimize', description: 'We launch, monitor performance closely using tools like Google Analytics, and continuously optimize for better results – focusing on key metrics for growth.' },
    { title: '4. Grow & Scale', description: 'We focus on long-term partnerships, helping you adapt, scale your digital presence, and achieve sustained success in the competitive Noida market.' }
  ]

  // Placeholder Impact Stats
  const impactStats = [
    { number: '50+', label: 'Delhi/Noida Businesses Served' },
    { number: '300%', label: 'Avg. Client ROI Improvement' },
    { number: '95%', label: 'Client Retention Rate' },
    { number: '100+', label: 'Successful Projects Delivered' }
  ]

  // Detailed Case Studies
  const caseStudies = [
    {
      clientName: 'Organic Eats',
      clientPosition: 'D2C Organic Food Brand, Noida',
      clientImage: 'https://images.unsplash.com/photo-1607877107160-21e37c8c3b3e?q=80&w=2574',
      problem: 'A struggling organic food startup in Noida with low website traffic (300 visitors/month), poor conversion rates (0.5%), and no online marketing strategy. Product quality was exceptional, but online visibility was minimal.',
      solution: 'Implemented a comprehensive digital growth strategy including a rebuilt Shopify store with performance optimizations, local SEO targeting Delhi NCR health-conscious consumers, and Google Ads campaign with precise audience targeting.',
      results: [
        '1250% increase in organic traffic within 5 months',
        'Conversion rate improvement from 0.5% to 3.8%',
        '16x ROI on Google Ads spend',
        'Expanded from Noida to serving all of Delhi NCR'
      ]
    },
    {
      clientName: 'TechNova Solutions',
      clientPosition: 'B2B SaaS Startup, Delhi',
      clientImage: 'https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?q=80&w=2574',
      problem: 'A Delhi-based SaaS startup struggled with lead generation despite having an innovative product. Their website was slow, not optimized for conversions, and their ad campaigns were burning through budget with minimal results.',
      solution: 'Rebuilt their website using Next.js for improved performance, implemented AI-powered lead qualification flows, restructured their Google Ads account, and created an automated email nurturing sequence.',
      results: [
        'Lead acquisition cost reduced by 64%',
        'Website load time improved from 5.2s to 1.8s',
        '28% increase in demo requests within first month',
        'Marketing team saved 15+ hours weekly through AI automation'
      ]
    }
  ]

  // Placeholder Testimonials
  const testimonials = [
    { quote: 'iDOCK transformed our online presence! Their SEO strategy put our Noida storefront on the map.', name: 'Rohan Gupta', company: 'Startup Founder, Noida' },
    { quote: 'The AI automation they implemented saved us 20 hours a week. Highly recommend for Delhi businesses.', name: 'Priya Sharma', company: 'Small Business Owner, Delhi' },
  ]

  // FAQ Items
  const faqItems = [
    {
      question: 'How do I find the right digital agency in Noida?',
      answer: 'Look for an agency with proven results in your industry, transparent pricing, and strong local understanding of the Delhi NCR market. The right partner should understand your business goals, offer clear communication, and provide case studies relevant to Noida and Delhi businesses. At iDOCK, we pride ourselves on being that partner for growing businesses in the region.'
    },
    {
      question: 'Do you build Shopify or React-based ecommerce websites?',
      answer: 'Yes, we specialize in both! Our team has extensive experience building high-performance ecommerce websites using Shopify for businesses that want a quick, scalable solution with minimal maintenance. We also develop custom React-based (Next.js) ecommerce platforms for businesses with unique requirements or those needing advanced functionalities. Both solutions are optimized for Delhi NCR customers and local search visibility.'
    },
    {
      question: 'Can you help with Meta Ads and Google Ads for my Noida business?',
      answer: 'Absolutely! We provide comprehensive PPC management for both Meta Ads (Facebook, Instagram) and Google Ads, specifically optimized for businesses in Noida and Delhi NCR. Our local expertise helps in crafting targeted campaigns that reach your ideal customers in the region with messaging that resonates. We focus on ROI and performance metrics, not just impressions or clicks.'
    },
    {
      question: 'What makes iDOCK different from other digital agencies in Delhi NCR?',
      answer: 'What sets us apart is our combination of local expertise (we understand the Noida and Delhi markets deeply), our focus on measurable results (we track ROI on every campaign), and our innovative use of AI automation to maximize efficiency. We\'re also known for our transparent communication and affordable pricing structures specifically designed for startups and small businesses in Delhi NCR.'
    },
    {
      question: 'How quickly can I expect to see results from SEO services?',
      answer: 'For local SEO targeting Noida and Delhi regions, our clients typically see initial improvements in rankings within 4-6 weeks. More significant traffic increases usually occur in the 3-6 month timeframe. While SEO is a long-term strategy, our approach combines quick wins (local listing optimizations, technical fixes) with sustainable growth tactics to ensure you start seeing value quickly while building lasting results.'
    }
  ]

  return (
    <main className="pt-0 pb-0">

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#f5f8ff] overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-[3.25rem] font-medium text-gray-900 leading-[1.2] tracking-tight mb-8">
            Your <span className="text-[#4F7DF3]">Digital Growth Partner</span> in Noida & Delhi NCR
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            iDOCK is a performance-driven <strong>digital marketing agency in Noida</strong>, empowering <strong>startups</strong> and <strong>small businesses</strong> across <strong>Delhi NCR</strong> to achieve tangible results through expert <strong>eCommerce development</strong>, <strong>SEO</strong>, <strong>PPC</strong>, and cutting-edge <strong>AI automation</strong>.
          </p>
          <Link href="/contact" className="bg-[#4F7DF3] hover:bg-[#3968e7] text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2">
            Get Your Free Growth Audit
            <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* 2. Our Mission & Story */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-medium text-gray-900 leading-[1.2] tracking-tight mb-6">
                Our Story: Fueling <span className="text-[#4F7DF3]">Delhi NCR's</span> Digital Ambition
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Born in the heart of <strong>Noida</strong>, iDOCK was founded in 2019 by <strong>Sachin Sharma</strong>, a digital marketing expert with over 10 years of experience at agencies across India. After witnessing countless small businesses struggle to afford quality digital services, Sachin set out to create an agency that offered enterprise-level expertise at prices accessible to local entrepreneurs.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                "I kept meeting brilliant business owners in <strong>Delhi NCR</strong> who had amazing products but were being overcharged for mediocre digital services," says Sachin. "I knew we could build a team that delivered exceptional results while being transparent about processes and pricing."
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, our team of specialists serves as trusted digital partners to <strong>startups and small businesses</strong> across the region, leveraging technology like <strong>AI automation</strong> and proven <strong>digital marketing strategies</strong> to deliver measurable growth. We believe in building lasting relationships founded on trust, transparency, and tangible results.
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" 
                alt="iDOCK team collaborating in Noida office"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Do (Services) */}
      <section className="py-20 bg-[#f5f8ff]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-medium text-gray-900 leading-[1.2] tracking-tight mb-6">
              How We Drive Your <span className="text-[#4F7DF3]">Digital Growth</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions designed for <strong>businesses in Noida, Delhi</strong>, and the wider <strong>NCR</strong>, from <strong>eCommerce development</strong> to <strong>performance marketing</strong>.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <h3 className="text-xl font-medium text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-gray-600">Need a tailored solution? <Link href="/contact" className="text-[#4F7DF3] font-medium hover:underline">Let's discuss your project</Link>.</p>
        </div>
      </section>

      {/* 4. Our Process */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-medium text-gray-900 leading-[1.2] tracking-tight mb-6">
              Our Simple Path to <span className="text-[#4F7DF3]">Your Success</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a clear, collaborative process to ensure transparency and achieve outstanding results for our <strong>Noida and Delhi clients</strong>.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-[#f5f8ff] p-6 rounded-lg border-l-4 border-[#4F7DF3] flex flex-col hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-medium text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 flex-grow">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Mini Case Studies */}
      <section className="py-20 bg-[#f5f8ff]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-medium text-gray-900 leading-[1.2] tracking-tight mb-6">
              Success Stories: <span className="text-[#4F7DF3]">Delhi NCR</span> Businesses We've Transformed
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Real results for real businesses in <strong>Noida</strong> and <strong>Delhi</strong>. Here's how we've helped local companies achieve their digital growth goals.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="grid md:grid-cols-3">
                  <div className="relative h-64 md:h-auto">
                    <Image 
                      src={study.clientImage}
                      alt={`${study.clientName} - Client of iDOCK Digital Agency Noida`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-xl font-medium text-white">{study.clientName}</h3>
                      <p className="text-blue-100">{study.clientPosition}</p>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-6 md:p-8">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-red-600">The Challenge</h4>
                        <p className="text-gray-600">{study.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-[#4F7DF3]">Our Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-green-600">The Results</h4>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          {study.results.map((result, idx) => (
                            <li key={idx}>{result}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/case-studies" className="inline-flex items-center text-[#4F7DF3] font-medium hover:underline">
              View More Success Stories
              <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Why Choose iDOCK */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-medium text-gray-900 leading-[1.2] tracking-tight mb-6">
              Why Partner with <span className="text-[#4F7DF3]">iDOCK</span>?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Your success is our priority. Here's what makes us the preferred <strong>digital agency in Delhi NCR</strong>:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#f5f8ff] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Local Expertise (Noida & Delhi Focus)</h3>
              <p className="text-gray-600">We understand the nuances of the <strong>Delhi NCR market</strong>, helping your business connect with the right local audience.</p>
            </div>
            <div className="bg-[#f5f8ff] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Results-Driven Approach</h3>
              <p className="text-gray-600">We focus on measurable outcomes – increased traffic, leads, sales, and ROI. We're a true <strong>performance marketing</strong> partner.</p>
            </div>
            <div className="bg-[#f5f8ff] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Experienced Team</h3>
              <p className="text-gray-600">Our team comprises skilled developers, SEO specialists, PPC experts, and AI strategists dedicated to your growth.</p>
            </div>
             <div className="bg-[#f5f8ff] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-medium text-gray-900 mb-3">AI-Powered Efficiency</h3>
              <p className="text-gray-600">Leverage <strong>AI automation for business</strong> processes, giving you a competitive advantage in the <strong>Delhi</strong> market.</p>
            </div>
             <div className="bg-[#f5f8ff] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Transparent Communication</h3>
              <p className="text-gray-600">We believe in clear, honest communication and regular reporting, keeping you informed every step of the way.</p>
            </div>
             <div className="bg-[#f5f8ff] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Startup & SME Focused</h3>
              <p className="text-gray-600">Our strategies are specifically designed to meet the unique needs and budgets of <strong>startups</strong> and <strong>small businesses</strong>.</p>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mt-20">
              <h3 className="text-2xl font-medium text-center text-gray-900 mb-10">What Our Clients Say</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                    <blockquote key={index} className="bg-[#f5f8ff] p-6 rounded-lg border-l-4 border-[#4F7DF3]">
                        <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                        <footer className="text-gray-800 font-medium">{testimonial.name}, <span className="text-gray-600 font-normal">{testimonial.company}</span></footer>
                    </blockquote>
                ))}
              </div>
              <p className="text-center mt-8"><Link href="/case-studies" className="inline-flex items-center text-[#4F7DF3] font-medium hover:underline">View More Success Stories <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg></Link></p>
          </div>
        </div>
      </section>

      {/* 7. Client Snapshot / Impact Stats */}
      <section className="py-20 bg-[#4F7DF3] text-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-medium mb-6 leading-[1.2] tracking-tight">
              Our Impact in <span className="text-white">Numbers</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Driving real growth for businesses across <strong>Noida</strong> and <strong>Delhi NCR</strong>.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg hover:bg-white/15 transition-colors duration-300">
                <p className="text-4xl md:text-5xl font-medium text-white mb-2">{stat.number}</p>
                <p className="text-lg text-white/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-20 bg-[#f5f8ff]">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-medium text-gray-900 leading-[1.2] tracking-tight mb-6">
              Frequently Asked <span className="text-[#4F7DF3]">Questions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Common questions about working with our <strong>digital marketing agency in Noida</strong>
            </p>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details key={index} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-gray-900">
                  <span className="text-lg">{item.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor" className="text-[#4F7DF3]">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 pt-0 text-gray-600">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600">
              Have more questions about <strong>digital marketing services in Delhi NCR</strong>?
            </p>
            <Link href="/contact" className="mt-3 inline-flex items-center text-[#4F7DF3] font-medium hover:underline">
              Contact our team for answers
              <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Call to Action */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-medium text-gray-900 leading-[1.2] tracking-tight mb-6">
            Ready to Elevate Your Business in <span className="text-[#4F7DF3]">Delhi NCR</span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Let iDOCK be your partner in <strong>digital growth</strong>. Whether you need a powerful <strong>eCommerce website</strong>, effective <strong>SEO and PPC campaigns</strong>, or smart <strong>AI automation</strong>, we're here to help businesses in <strong>Noida, Delhi,</strong> and beyond.
          </p>
          <Link
            href="/contact"
            className="bg-[#4F7DF3] hover:bg-[#3968e7] text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            Schedule Your Free Consultation
            <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <p className="mt-6 text-gray-500">Or call us: <a href="tel:+91XXXXXXXXXX" className="text-[#4F7DF3] hover:underline">+91-XXX-XXX-XXXX</a></p>
        </div>
      </section>
    </main>
  )
} 