/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: '/blog01/',
    basePath: '/blog01',
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  };
  
  export default nextConfig;  