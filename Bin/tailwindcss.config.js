/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // Ajoutez le chemin correct ici
    './**/*.html',  // Cela inclura tous les fichiers HTML dans votre projet
  ],
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
