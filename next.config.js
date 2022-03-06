/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/domq50ciy/',
  },
  //basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  //assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
}
