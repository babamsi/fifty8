module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [require('daisyui')],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/image8.png')",
      },
    },
  },
};
