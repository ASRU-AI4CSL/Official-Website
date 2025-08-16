/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/ASRU-ChildWorkshopWebpage' : '',
  assetPrefix: isProd ? '/ASRU-ChildWorkshopWebpage/' : '',
  images: { unoptimized: true },
  trailingSlash: true,
};

/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  basePath: '/ASRU-ChildWorkshopWebpage',   // <-- exact repo name
  assetPrefix: '/ASRU-ChildWorkshopWebpage/', 
  images: { unoptimized: true },
  trailingSlash: true,
};
