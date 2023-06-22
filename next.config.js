/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'maxiviajes.com.ar',
                port: '',
                pathname: '/media/**',
            },
        ],
    },
}

module.exports = nextConfig
