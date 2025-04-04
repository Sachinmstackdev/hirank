export const generateHomePageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Hirank Solutions",
  "url": "https://hiranksolution.com",
  "logo": "https://hiranksolution.com/assets/images/logo/hirank-logo.webp",
  "description": "Professional e-commerce development and digital marketing agency specializing in WordPress, MERN stack, and Shopify solutions.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Your Country"
  },
  "serviceArea": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "services": [
    "E-commerce Development",
    "WordPress Development",
    "MERN Stack Development",
    "Shopify Development",
    "Product Photography",
    "SEO Services",
    "PPC Management",
    "Social Media Marketing"
  ]
}) 