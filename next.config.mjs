import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts','tsx','mdx'],
  images: { unoptimized: true },
  experimental: {
    mdxRs: true
  }
}

export default withMDX(nextConfig)
