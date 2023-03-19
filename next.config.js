/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    });
    return config;
  },
  images: {
    domains: [
      process.env.NEXT_PUBLIC_IMG_HOST.substring(8),
    ],
  },
  basePath: "",
} 
