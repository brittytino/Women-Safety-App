/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/dashboard/:path*",
        destination: "/dashboard/page",
      },
    ];
  },
};

export default nextConfig;
