/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com', 'images.pexels.com','image.tmdb.org'],
    },
    env: {
        API_URL: process.env.API_URL,
    },
}

module.exports = nextConfig
