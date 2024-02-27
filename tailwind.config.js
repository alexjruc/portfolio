/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                principal: "#182836",
                dark: "#000",
            },
            fontFamily: {
                poppins: "'Poppins', sans-serif",
            },
            animation: {
              typewriter: 'typewriter 2s steps(11) forwards ',
              caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite ',
            },
            keyframes: {
              typewriter: {
                to: { left: '100%' },
              },
              blink: {
                '0%, 100%': { opacity: '0' },
                '0.1%, 50%': { opacity: '1' },
              },
            },
        },
    },
    plugins: [],
};
