/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "images.pexels.com",
            "cdn.iconscout.com",
            "img.freepik.com",
            "lottie.host",
            "via.placeholder.com"
        ]
    },

    experimental: {
        appDir: true,
    },
};
module.exports = nextConfig
