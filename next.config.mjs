/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/blog01/' : '',
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  };
  
  export default nextConfig;
  