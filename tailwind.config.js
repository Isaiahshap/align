/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Rich black base with soft vignette gradients
        'base-black': '#0A0A0A',
        'black-light': '#121212',
        'black-dark': '#050505',
        
        // Gold: two-tone metallic gradient
        'gold-deep': '#B8860B',
        'gold-light': '#F5DEB3',
        
        // White accents
        'off-white': '#F5F5F5',
        'white-dim': 'rgba(255, 255, 255, 0.7)',
        'white-dimmer': 'rgba(255, 255, 255, 0.4)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #B8860B, #F5DEB3)',
        'black-gradient': 'linear-gradient(to bottom, #0A0A0A, #050505)',
        'vignette': 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.8) 100%)',
      },
      fontFamily: {
        'raleway': ['var(--font-raleway)', 'sans-serif'],
      },
      boxShadow: {
        'gold': '0 0 10px rgba(184, 134, 11, 0.3)',
        'gold-hover': '0 0 15px rgba(184, 134, 11, 0.5)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}