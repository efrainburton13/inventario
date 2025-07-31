/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Incluye todos los componentes de React
    "./node_modules/@ionic/react/**/*.{js,ts,jsx,tsx}", // Incluye estilos de Ionic
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
