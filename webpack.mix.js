const mix = require('laravel-mix');

mix
    .disableNotifications()
    .setPublicPath('public/')
    .postCss('resources/css/app.css', 'public', [
        require('tailwindcss'),
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

if (mix.inProduction()) {
    mix.version();
}
