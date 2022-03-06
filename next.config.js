/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
    loader: 'cloudinary',
  },
  //basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  //assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
}
