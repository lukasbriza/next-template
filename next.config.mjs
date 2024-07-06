/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages:
    process.env.NODE_ENV === 'production'
      ? []
      : [
          //add packages from monorepo
        ],
};

export default nextConfig;
