/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'react-blue': '#6ADCFB',
                'react-black': '#222222'
            }
        },
    },
    darkMode: 'class',
    plugins: [],
}
