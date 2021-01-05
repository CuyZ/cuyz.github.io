const colors = require('tailwindcss/colors');

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            white: colors.white,
            black: colors.black,
            gray: colors.blueGray,
            orange: colors.orange,
            blue: colors.blue,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
