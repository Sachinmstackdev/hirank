# Image Placeholder for About Section

## Required Image

Please add an image file named `ai-commerce.jpg` to this directory.

### Recommendation:
- Use a high-quality image related to AI e-commerce, digital marketing, or technology
- Ideal dimensions: Approximately 800x600px (4:3 aspect ratio)
- The image should be visually appealing and modern
- Consider an image that shows digital interfaces, AI visualization, or e-commerce concepts

### Temporary Solution:
Until you add your preferred image, you can use a placeholder service in the About.tsx component by replacing:

```tsx
<Image
  src="/images/ai-commerce.jpg"
  alt="AI-Powered E-Commerce"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
  priority
/>
```

with:

```tsx
<Image
  src="https://source.unsplash.com/random/800x600/?ai,ecommerce,technology"
  alt="AI-Powered E-Commerce"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
  priority
/>
```

This will load a random relevant image from Unsplash. 