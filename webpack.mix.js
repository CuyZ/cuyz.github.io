const mix = require('laravel-mix');

const tailwindcss = require('tailwindcss');

mix.disableNotifications();

mix.postCss('resources/css/app.css', 'public', [
    tailwindcss('./tailwind.config.js')
]);

mix.browserSync({
    proxy: 'cuyz.test', // valet link
    notify: false,
    ui: false,
    files: [
        'resources/css/app.css',
        'public/index.html',
    ]
});
