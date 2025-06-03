export const buildCloudinaryURL = (publicId: string, options: {
  width?: number;
  height?: number;
  quality?: number | 'auto';
  format?: string;
  version?: string;
} = {}) => {
  const {
    width = 1200,
    height = 630,
    quality = 'auto',
    format = 'auto',
    version = 'v1748884282'
  } = options;

  // Remove any leading slashes and file extension from the publicId
  const cleanPublicId = publicId.replace(/^\/+/, '').replace(/\.[^/.]+$/, '');

  // Ensure we have a cloud name
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dpg0xsrnn';

  // Build transformation parameters
  const transformations = `c_fill,w_${width},h_${height},q_${quality}`;

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/${version}/${cleanPublicId}.${format === 'auto' ? 'png' : format}`;
}

export const getCloudinaryImageId = (url: string) => {
  // Extract the public ID from a Cloudinary URL
  const matches = url.match(/\/upload\/(?:v\d+\/)?(.+)$/);
  return matches ? matches[1] : url;
} 