/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config, { isServer }) => {
    if (isServer) {
      const remotionServerPackages = [
        '@remotion/renderer',
        '@remotion/bundler',
        '@remotion/compositor-linux-x64-gnu',
        '@remotion/compositor-linux-x64-musl',
        '@remotion/compositor-linux-arm64-gnu',
        '@remotion/compositor-linux-arm64-musl',
        '@remotion/compositor-darwin-arm64',
        '@remotion/compositor-darwin-x64',
        '@remotion/compositor-win32-x64-msvc',
      ];

      config.externals = [
        ...(Array.isArray(config.externals) ? config.externals : [config.externals]),
        ({ request }, callback) => {
          if (remotionServerPackages.some((pkg) => request?.startsWith(pkg))) {
            return callback(null, `commonjs ${request}`);
          }
          callback();
        },
      ];
    }

    return config;
  },
};

module.exports = nextConfig;
