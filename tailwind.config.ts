import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        primaryAccent: '#103931',
        secondaryAccent: 'rgba(16, 57, 49, 0.2)',
        error: '#DA1414',
        success: '#3CBC81'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        tablet: '32px',
        desktop: '128px'
      }
    }
  },
  plugins: []
}
export default config
