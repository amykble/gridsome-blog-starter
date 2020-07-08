# Gridsome Blog Starter ✨

<p align="center">
  <img width="500" src="src/assets/images/amykble/gridsome-logo-normal.svg" alt="Project Logo">
</p>

## Information about The Site

This is a blog starter for gridsome, a vue static site generator that uses plugins to create complex sites with the bennefits of a static website. See the [changelog](CHANGELOG.md) to see all updates to this project.

## Technologies Used

- **[Tailwind CSS](https://tailwindcss.com)**
  is a low-level CSS framework that allows you to build responsive css with html classes

- **[Gridsome](https://gridsome.org)**
  is a jamstack static site generator for vue, it allows you to use any cms, markdown and many forms of data to build websites that can be deployed on Github and hosted on [Netlify](https://www.netlify.com) or a similar host.

- **[Vue](https://vuejs.org)**
  is a JavaScript framework that is easy to use and build websites out of components and intergrate functionality into a site with ease.

## File Structure

```
.
|- package.json
|- gridsome.config.js
|- gridsome.server.js
|- prettier.config.js
|- tailwind.config.js
|- CHANGELOG.md
|- content/
  |- blog/
    |- blog.md files
|- src/
  |- main.js
  |- main.css
  |- pages/
    |- Index.vue
    |- About.vue, etc..
  |- layouts/
    |- Default.vue
    |- any other layouts..
  |- templates/
    |- Post.vue
    |- any other templates..
  |- components/
    |- default/
      |- Navigation.vue
      |- Footer.vue, etc..
    |- modules/
      |- Landing.vue
      |- Review.vue, etc..
  |- assets/
    |- images/
      |- logos, images, etc..
    |- styles/
      |- resets, global styles, etc..
|- dist/
  |- index.html
  |- 404.html
  |- css/ style pages...
  The dist folder is built when 'gridsome build' is output to
```

## Using Gridsome

### Install Gridsome CLI tool

- Using YARN: `yarn global add @gridsome/cli`
- Using NPM: `npm install --global @gridsome/cli`

### Create a Gridsome project

- `gridsome create my-gridsome-site` to create a new project
- `cd my-gridsome-site` to open folder
- `gridsome develop` to start local dev server at http://localhost:8080
- `gridsome build` to build a dist folder with generated static files

Your super fast and secure static site is ready to be deployed 🙌

---

[changelog](CHANGELOG.md)

<p>Created with 
<a href="https://gridsome.org" target="_blank" rel="noopener"><img height="16" src="src/assets/images/amykble/gridsome.svg" alt="gridsome"></a>
<a href="https://vuejs.org" target="_blank" rel="noopener"><img height="16" src="src/assets/images/amykble/vue.svg.png" alt="vue"></a>
<a href="https://tailwindcss.com" target="_blank" rel="noopener"><img height="16" src="src/assets/images/amykble/tailwind.png" alt="tailwind"></a>
 by <a href="#" target="_blank" rel="noopener">Amy Keable</a></p>
