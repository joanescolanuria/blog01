/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Añadir esta línea para exportar los archivos estáticos
    assetPrefix: process.env.NODE_ENV === 'production' ? '/blog-website/' : '',
    trailingSlash: true,
  };
  
  export default nextConfig;
  