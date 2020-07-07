const tailwind = require('tailwindcss')
const postcssPlugins = [tailwind()]

module.exports = {
  siteName: 'Gridsome Blog Template',
  titleTemplate: '%s | Gridsome Blog Template',
  siteDescription: 'Gridsome Blog Template Description',
  icon: {
    favicon: {
      src: './src/assets/images/amykble/gridsome-circle-dark.svg',
      sizes: [16, 32, 96],
    },
  },
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Posts',
        baseDir: './static/blog',
        pathPrefix: 'blog',
        template: './src/templates/BlogTemplate.vue',
        remark: {
          plugins: [
            [
              'gridsome-plugin-remark-shiki',
              { theme: 'nord', skipInline: false },
            ],
          ],
        },
      },
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
