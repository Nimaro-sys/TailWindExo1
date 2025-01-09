module.exports = {
  content: [
    './../Index.html', // Inclure tous les fichiers HTML à la racine
    './**/*.css', // Inclure tous les fichiers CSS dans les sous-dossiers
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
        scaleUp: 'scaleUp 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};