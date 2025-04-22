import React from 'react'
import Link from 'next/link'

export default function TermsConditions() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>
      
      <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</p>
      
      <div className="prose prose-lg max-w-none">
        <p>
          Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the website Intelligencedock.com (the "Service") operated by Intelligence Dock ("us", "we", or "our").
        </p>
        
        <p>
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
        </p>
        
        <p>
          By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Accounts</h2>
        
        <p>
          When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
        </p>
        
        <p>
          You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
        </p>
        
        <p>
          You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Intellectual Property</h2>
        
        <p>
          The Service and its original content, features, and functionality are and will remain the exclusive property of Intelligence Dock and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Intelligence Dock.
        </p>
        
        <p>
          All digital products, e-books, templates, tools, and other downloadable materials available on our Service are protected by intellectual property laws. You may not modify, reproduce, distribute, create derivative works, publicly display, or in any way exploit any of the content, in whole or in part, without our express prior written consent.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Content</h2>
        
        <p>
          Our Service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("User Content"). You are responsible for the User Content that you post to the Service, including its legality, reliability, and appropriateness.
        </p>
        
        <p>
          By posting User Content to the Service, you grant us the right and license to use, modify, perform, display, reproduce, and distribute such content on and through the Service. You retain any and all of your rights to any User Content you submit, post or display on or through the Service and you are responsible for protecting those rights.
        </p>
        
        <p>
          You represent and warrant that: (i) the User Content is yours or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your User Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Purchases</h2>
        
        <p>
          If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including your name, email, address, and payment information.
        </p>
        
        <p>
          We use Razorpay as our payment gateway provider. The processing of payments will be subject to the terms, conditions, and privacy policies of Razorpay, in addition to these Terms. We are not responsible for any errors by Razorpay.
        </p>
        
        <p>
          By making a Purchase, you represent that:
        </p>
        
        <ul className="list-disc pl-6 my-4">
          <li>You are entitled to purchase the product or service.</li>
          <li>You are providing accurate and current information.</li>
          <li>You will pay all charges incurred by you or any users of your account and credit card or other payment mechanism at the prices in effect when such charges are incurred.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Refunds and Cancellations</h2>
        
        <p>
          Refunds and cancellations are subject to our Refund & Cancellation Policy, which can be found at <Link href="/refund-policy" className="text-blue-600 hover:underline">Refund & Cancellation Policy</Link>.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Service Modifications</h2>
        
        <p>
          We reserve the right at any time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. We shall not be liable to you or to any third party for any modification, price change, suspension, or discontinuance of the Service.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Prohibited Uses</h2>
        
        <p>
          You agree not to use the Service:
        </p>
        
        <ul className="list-disc pl-6 my-4">
          <li>In any way that violates any applicable national or international law or regulation.</li>
          <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
          <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter", "spam", or any other similar solicitation.</li>
          <li>To impersonate or attempt to impersonate Intelligence Dock, an employee, another user, or any other person or entity.</li>
          <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful.</li>
          <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm Intelligence Dock or users of the Service or expose them to liability.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
        
        <p>
          In no event shall Intelligence Dock, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
        </p>
        
        <ul className="list-disc pl-6 my-4">
          <li>Your access to or use of or inability to access or use the Service;</li>
          <li>Any conduct or content of any third party on the Service;</li>
          <li>Any content obtained from the Service; and</li>
          <li>Unauthorized access, use or alteration of your transmissions or content.</li>
        </ul>
        
        <p>
          To the maximum extent permitted by applicable law, in no event shall our total liability to you for all damages, losses, or causes of action exceed the amount you have paid to Intelligence Dock in the last six (6) months, or, if greater, one hundred dollars ($100).
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Disclaimer</h2>
        
        <p>
          Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
        </p>
        
        <p>
          Intelligence Dock, its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure, or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing Law</h2>
        
        <p>
          These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
        </p>
        
        <p>
          Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">11. Changes to Terms</h2>
        
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>
        
        <p>
          By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Us</h2>
        
        <p>
          If you have any questions about these Terms, please contact us at:
        </p>
        
        <p className="my-4">
          <strong>Email:</strong> legal@intelligencedock.com<br />
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