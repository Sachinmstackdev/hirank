import React from 'react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</p>
      
      <div className="prose prose-lg max-w-none">
        <p>
          Intelligence Dock ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Intelligence Dock.
        </p>
        
        <p>
          This Privacy Policy applies to our website (Intelligencedock.com), and its associated subdomains (collectively, our "Service"). By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms & Conditions.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
        
        <h3 className="text-xl font-medium mt-6 mb-3">Personal Information</h3>
        <p>We collect personal information that you voluntarily provide to us when you:</p>
        <ul className="list-disc pl-6 my-4">
          <li>Register for an account</li>
          <li>Purchase our products or services</li>
          <li>Sign up for our newsletter</li>
          <li>Contact us through our contact forms</li>
          <li>Participate in surveys or promotions</li>
        </ul>
        
        <p>This information may include:</p>
        <ul className="list-disc pl-6 my-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Billing address</li>
          <li>Payment information (processed securely through Razorpay)</li>
          <li>Any other information you choose to provide</li>
        </ul>
        
        <h3 className="text-xl font-medium mt-6 mb-3">Automatically Collected Information</h3>
        <p>When you access our Service, we automatically collect certain information, including:</p>
        <ul className="list-disc pl-6 my-4">
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device information</li>
          <li>Operating system</li>
          <li>Pages visited and time spent</li>
          <li>Referring websites</li>
          <li>Cookies and similar technologies</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul className="list-disc pl-6 my-4">
          <li>Provide, maintain, and improve our Service</li>
          <li>Process transactions and send related information</li>
          <li>Send administrative information, such as updates, security alerts, and support messages</li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Communicate with you about products, services, offers, promotions, and events</li>
          <li>Monitor and analyze trends, usage, and activities in connection with our Service</li>
          <li>Detect, prevent, and address technical issues</li>
          <li>Comply with legal obligations</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies and Similar Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
        </p>
        
        <p>We use the following types of cookies:</p>
        <ul className="list-disc pl-6 my-4">
          <li><strong>Essential cookies:</strong> Necessary for the functioning of our website</li>
          <li><strong>Analytical/performance cookies:</strong> Allow us to recognize and count the number of visitors and see how visitors move around our website</li>
          <li><strong>Functionality cookies:</strong> Used to recognize you when you return to our website</li>
          <li><strong>Targeting cookies:</strong> Record your visit to our website, the pages you have visited, and the links you have followed</li>
        </ul>
        
        <p>
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
        <p>
          We may use third-party service providers to monitor and analyze the use of our Service, and to process payments.
        </p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">Payment Processing</h3>
        <p>
          We use Razorpay for payment processing. When you make a purchase, your payment information is collected directly by Razorpay and is subject to their privacy policy. We do not store your full payment information on our servers.
        </p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">Analytics</h3>
        <p>
          We may use third-party Service Providers to monitor and analyze the use of our Service.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, misuse, alteration, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Data Protection Rights</h2>
        
        <p>
          Under the General Data Protection Regulation (GDPR) and the Information Technology Act (IT Act) of India, you have certain rights regarding your personal information:
        </p>
        
        <ul className="list-disc pl-6 my-4">
          <li><strong>Right to access:</strong> You have the right to request copies of your personal information.</li>
          <li><strong>Right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
          <li><strong>Right to erasure:</strong> You have the right to request that we erase your personal information, under certain conditions.</li>
          <li><strong>Right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal information, under certain conditions.</li>
          <li><strong>Right to object to processing:</strong> You have the right to object to our processing of your personal information, under certain conditions.</li>
          <li><strong>Right to data portability:</strong> You have the right to request that we transfer the data we have collected to another organization, or directly to you, under certain conditions.</li>
        </ul>
        
        <p>
          If you wish to exercise any of these rights, please contact us using the contact information provided below.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Data Retention</h2>
        <p>
          We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Privacy</h2>
        <p>
          Our Service does not address anyone under the age of 18. We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to take necessary actions.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at:
        </p>
        
        <p className="my-4">
          <strong>Email:</strong> privacy@intelligencedock.com<br />
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