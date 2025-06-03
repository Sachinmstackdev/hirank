'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What is IDock?",
    answer: "IDock is an AI-powered platform that helps businesses automate client acquisition and lead management."
  },
  {
    question: "How does IDock improve efficiency?",
    answer: "IDock automates repetitive tasks, provides intelligent insights, and streamlines your workflow to save time and resources while improving results."
  },
  {
    question: "Is IDock suitable for all business sizes?",
    answer: "Yes, IDock is designed to scale with your business, whether you're a startup or an enterprise. Our flexible solutions adapt to your needs."
  },
  {
    question: "Does IDock integrate with other tools?",
    answer: "Yes, IDock seamlessly integrates with popular CRM systems, marketing tools, and business software to enhance your existing workflow."
  },
  {
    question: "How can I get started with IDock?",
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


      </div>
    </section>
  )
} 