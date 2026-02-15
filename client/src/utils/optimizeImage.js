/**
 * Simple helper to optimize Cloudinary image URLs
 * Just adds transformation parameters to existing URLs
 */
export const optimizeImage = (url, width = 300) => {
  if (!url || !url.includes("cloudinary")) return url;
  // Replace /upload/ with /upload/w_300,q_auto,f_auto/
  return url.replace("/upload/", `/upload/w_${width},q_auto,f_auto/`);
};
