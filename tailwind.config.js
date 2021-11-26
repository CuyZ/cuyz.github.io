const colors = require('tailwindcss/colors');

module.exports = {
    purge: [
        './public/**/*.html',
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        colors: {
            white: colors.white,
            black: colors.black,
            gray: colors.coolGray,
            orange: colors.orange,
            blue: colors.blue,
            logo: {
                800: '#563130',
                500: '#9c6333',
                300: '#cc9a60',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
