// @ts-check

/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
