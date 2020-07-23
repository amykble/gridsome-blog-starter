module.exports = {
  siteName: 'Gridsome Blog Template',
  titleTemplate: '%s ~ Gridsome Blog Template',
  siteDescription: 'Gridsome Blog Template Description',
  icon: {
    favicon: {
      src: './src/assets/images/amykble/gridsome-circle-dark.svg',
      sizes: [16, 32, 96],
    },
  },
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './content/blog/*.md',
        remark: {
          plugins: [
            [
              'gridsome-plugin-remark-shiki',
              { theme: 'Material-Theme-Palenight', skipInline: false },
            ],
          ],
        },
      },
    },
  ],
  templates: {
    Post: [
      {
        path: '/blog/:title',
        component: './src/templates/Post.vue',
      },
    ],
  },
}
