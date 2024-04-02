/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'dev.littlebigsocial.com',
        port: '',
        pathname: '/*',
      },
    ],
  },
};
export default nextConfig;
