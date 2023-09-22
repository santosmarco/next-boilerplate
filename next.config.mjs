// @ts-check

/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "tailwindui.com"],
    dangerouslyAllowSVG: true,
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
