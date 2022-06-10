const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './public/**/*.html',
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        colors: {
            white: colors.white,
            black: colors.black,
            gray: colors.gray,
            orange: colors.orange,
            blue: colors.blue,
            logo: {
                800: '#563130',
                500: '#9c6333',
                300: '#cc9a60',
            }
        },
    }
}
