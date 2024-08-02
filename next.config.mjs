import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin("./src/i18n/i18n.ts")

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
  transpilePackages:
    process.env.NODE_ENV === 'production'
      ? []
      : [
          //add packages from monorepo
        ],
})

export default nextConfig
