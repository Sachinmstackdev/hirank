import React from 'react'
import Link from 'next/link'

export default function RefundPolicy() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Refund & Cancellation Policy</h1>
      
      <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</p>
      
      <div className="prose prose-lg max-w-none">
        <p>
          This Refund & Cancellation Policy outlines the guidelines and procedures for refunds and cancellations of purchases made on Intelligencedock.com ("the Website"), operated by Intelligence Dock ("we," "our," or "us"). By making a purchase on our Website, you agree to the terms of this Refund & Cancellation Policy.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Digital Products</h2>
        
        <h3 className="text-xl font-medium mt-6 mb-3">E-Books, Templates, and Downloadable Tools</h3>
        
        <p>
          Due to the nature of digital products, all sales of e-books, templates, tools, and other downloadable digital products are final and non-refundable, except in the following circumstances:
        </p>
        
        <ul className="list-disc pl-6 my-4">
          <li>
            <strong>Before Download:</strong> If you have purchased a digital product but have not yet downloaded or accessed it, you may request a cancellation and refund within 24 hours of purchase.
          </li>
          <li>
            <strong>Technical Issues:</strong> If the digital product is inaccessible, corrupted, or otherwise technically defective, we will either provide a working copy of the product or issue a full refund. You must report such issues within 48 hours of purchase.
          </li>
          <li>
            <strong>Significant Misrepresentation:</strong> If the product description significantly misrepresents the actual content of the digital product, you may be eligible for a refund. This must be reported within 72 hours of purchase, and we will review such claims on a case-by-case basis.
          </li>
        </ul>
        
        <div className="p-4 bg-gray-100 rounded-md my-6">
          <p className="text-gray-700">
            <strong>Please Note:</strong> Once a digital product has been downloaded, accessed, or the applicable time period for refund requests has passed, no refunds will be provided unless required by applicable law.
          </p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services</h2>
        
        <h3 className="text-xl font-medium mt-6 mb-3">Consulting, Development, and Custom Services</h3>
        
        <p>
          For consulting, development, and other custom services, our refund and cancellation policy is as follows:
        </p>
        
        <ul className="list-disc pl-6 my-4">
          <li>
            <strong>Cancellation Before Service Commencement:</strong> If you cancel a service before we have begun work, we will provide a full refund minus a 5% processing fee.
          </li>
          <li>
            <strong>Cancellation After Service Commencement:</strong> If you cancel a service after work has begun:
            <ul className="list-disc pl-6 mt-2">
              <li>Within 24 hours of commencement: 75% refund</li>
              <li>After 24 hours but before 25% completion: 50% refund</li>
              <li>After 25% but before 50% completion: 25% refund</li>
              <li>After 50% completion: No refund</li>
            </ul>
          </li>
          <li>
            <strong>Service Quality Issues:</strong> If you are dissatisfied with the quality of our services, please contact us immediately. We will work with you to address your concerns and, if necessary, reassess the refund eligibility on a case-by-case basis.
          </li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Subscription Services</h2>
        
        <p>
          For subscription-based services, the following policies apply:
        </p>
        
        <ul className="list-disc pl-6 my-4">
          <li>
            <strong>Cancellation:</strong> You may cancel your subscription at any time. Cancellation will take effect at the end of your current billing cycle, and no further charges will be made.
          </li>
          <li>
            <strong>Refunds:</strong> Generally, no partial refunds are provided for the unused portion of a subscription period. However, if you encounter significant service unavailability or technical issues during your subscription period, you may be eligible for a prorated refund for the affected time.
          </li>
          <li>
            <strong>Free Trial Period:</strong> If you cancel during a free trial period, no charges will be applied.
          </li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">4. How to Request a Refund or Cancellation</h2>
        
        <p>
          To request a refund or cancellation, please follow these steps:
        </p>
        
        <ol className="list-decimal pl-6 my-4">
          <li>
            Contact our customer support team at <strong>support@intelligencedock.com</strong> with the subject line "Refund Request" or "Cancellation Request."
          </li>
          <li>
            Include the following information in your email:
            <ul className="list-disc pl-6 mt-2">
              <li>Your full name</li>
              <li>Order number or transaction ID</li>
              <li>Date of purchase</li>
              <li>Product or service purchased</li>
              <li>Reason for the refund or cancellation request</li>
              <li>Any relevant screenshots or documentation (if applicable)</li>
            </ul>
          </li>
          <li>
            Our team will review your request and respond within 2-3 business days.
          </li>
          <li>
            If your refund is approved, it will be processed using the same method of payment that was used for the purchase. Depending on your payment provider, it may take 5-10 business days for the refund to appear in your account.
          </li>
        </ol>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Payment Processing and Razorpay</h2>
        
        <p>
          We use Razorpay as our payment gateway provider. All payment processing, including refunds, is handled in accordance with Razorpay's policies and procedures. When a refund is processed:
        </p>
        
        <ul className="list-disc pl-6 my-4">
          <li>
            Refunds will be issued to the original payment method used for the purchase.
          </li>
          <li>
            Refund processing times may vary depending on your payment method and financial institution, typically taking 5-10 business days to reflect in your account.
          </li>
          <li>
            In some cases, if the original payment method is no longer available, we may need to process the refund using an alternative method. Our team will coordinate with you in such situations.
          </li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Exceptions and Special Circumstances</h2>
        
        <p>
          We understand that exceptional circumstances may arise. In cases of:
        </p>
        
        <ul className="list-disc pl-6 my-4">
          <li>
            <strong>Accidental Purchases:</strong> If you accidentally purchased the same product or service twice, please contact us within 24 hours, and we will refund the duplicate purchase.
          </li>
          <li>
            <strong>Unauthorized Transactions:</strong> If you believe an unauthorized transaction has been made using your account, contact us immediately, and we will investigate the issue.
          </li>
          <li>
            <strong>Force Majeure Events:</strong> In the event of circumstances beyond our control (such as natural disasters, technical failures, etc.) that affect our ability to deliver services, we will work with affected customers to provide appropriate resolutions, which may include partial or full refunds.
          </li>
        </ul>
        
        <div className="p-4 bg-gray-100 rounded-md my-6">
          <p className="text-gray-700">
            <strong>Note:</strong> We reserve the right to refuse any refund request that does not comply with our policy or appears to be fraudulent. We may also modify this Refund & Cancellation Policy at any time, with changes taking effect upon posting to the Website.
          </p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Information</h2>
        
        <p>
          If you have any questions or concerns about our Refund & Cancellation Policy, please contact us at:
        </p>
        
        <p className="my-4">
          <strong>Email:</strong> support@intelligencedock.com<br />
          <strong>Address:</strong> [Your Business Address], India
        </p>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <Link href="/" className="text-blue-600 hover:underline">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
} 