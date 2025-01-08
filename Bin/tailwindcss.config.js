// tailwind.config.js
module.exports = {
  content: ['./../Index.html'], // Mettez à jour selon votre structure
  theme: {
    extend: {
      keyframes: {
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        scaleUp: 'scaleUp 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
};
