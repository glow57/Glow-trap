import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Courier New', 'Courier', 'monospace'],
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        forge: {
          bg: '#070B14',
          surface: '#0D1320',
          border: '#1E2D40',
          text: '#E2E8F0',
          muted: '#64748B',
          accent: '#6366F1',
        },
      },
    },
  },
  plugins: [],
}

export default config
