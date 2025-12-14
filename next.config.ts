// next.config.js
const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // Remove X-Powered-By header
  compress: true, // Enable gzip compression
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
    ],
    formats: ['image/webp', 'image/avif'], // Modern image formats
    minimumCacheTTL: 60, // Cache images for 1 minute
    dangerouslyAllowSVG: false, // Disable SVG for security
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'off',
          },
        ],
      },
    ];
  },
  // Experimental features for performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Security: Don't expose source maps in production
    if (!dev && !isServer) {
      config.devtool = false;
    }
    
    // Optimize bundle size
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    };
    
    return config;
  },
};

// Only enable PWA in production
if (isProd) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: false,
    buildExcludes: [/middleware-manifest\.json$/],
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 365 * 24 * 60 * 60, // 365 days
          },
        },
      },
      {
        urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-static',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 365 * 24 * 60 * 60, // 365 days
          },
        },
      },
    ],
  });

  nextConfig = withPWA(nextConfig);
}

module.exports = nextConfig;
