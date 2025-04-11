'use client'

import { useState } from 'react'
import Link from 'next/link'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What is HiRank?",
    answer: "HiRank is an AI-powered platform that helps businesses automate client acquisition and lead management."
  },
  {
    question: "How does HiRank improve efficiency?",
    answer: "HiRank automates repetitive tasks, provides intelligent insights, and streamlines your workflow to save time and resources while improving results."
  },
  {
    question: "Is HiRank suitable for all business sizes?",
    answer: "Yes, HiRank is designed to scale with your business, whether you're a startup or an enterprise. Our flexible solutions adapt to your needs."
  },
  {
    question: "Does HiRank integrate with other tools?",
    answer: "Yes, HiRank seamlessly integrates with popular CRM systems, marketing tools, and business software to enhance your existing workflow."
  },
  {
    question: "How can I get started with HiRank?",
    answer: "Getting started is easy! Simply click the 'Get Started' button below to schedule a demo or contact our team for more information."
  }
]

export default function FAQSection() {
  // Initialize with the first FAQ open (index 0)
  const [openIndex, setOpenIndex] = useState<number>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(index)
  }

  return (
    <section className="py-28 bg-[#f5f8ff]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-2">
            <span className="text-[#4F7DF3]">•</span>
            <span className="text-sm font-medium ml-2 text-gray-600">FAQ's</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 leading-[1.2] tracking-tight">
            Answers to your common<br />AI questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-6 flex justify-between items-center"
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <span className="text-xl text-gray-900">×</span>
                ) : (
                  <span className="text-xl text-gray-900">+</span>
                )}
              </button>
              {openIndex === index && (
                <div className="pb-6">
                  <p className="text-lg text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="rounded-[40px] mt-16 overflow-hidden">
          <div className="bg-gradient-to-b from-[#a2c0ff] to-[#6495ed] text-white p-16 text-center">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L4.09347 12.6356C3.74552 13.0462 3.57155 13.2515 3.56387 13.4278C3.55731 13.5805 3.62498 13.7272 3.7497 13.8281C3.89398 13.9434 4.16267 13.9434 4.70004 13.9434H12L11 22L19.9065 11.3644C20.2545 10.9538 20.4284 10.7485 20.4361 10.5722C20.4427 10.4195 20.375 10.2728 20.2503 10.1719C20.106 10.0566 19.8373 10.0566 19.3 10.0566H12L13 2Z" />
                </svg>
              </div>
            </div>
            <h3 className="text-4xl font-medium mb-12">
              Transform the way you manage<br />AI tasks with HiRank
            </h3>
            <div className="flex justify-center">
              <Link 
                href="/get-started"
                className="bg-white hover:bg-gray-50 text-black px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Get started
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 