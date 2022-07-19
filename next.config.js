/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
    content: [":./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],
}
