<template>
  <Layout class="font-body">
    <section class="bg-gray-200">
      <div class="max-w-screen-lg mx-auto">
        <header class="mx-6 py-10">
          <h1 class="font-title font-bold text-4xl">Blog Posts</h1>
        </header>
        <hr class="mx-6" />
        <article v-for="edge in $page.blog.edges" :key="edge.node.id" class="mx-6 mt-10">
          <h3 class="font-title font-bold text-xl">Title: {{ edge.node.title }}</h3>
          <h4>Posted: {{ edge.node.date }}</h4>
          <p>Snippet: {{ edge.node.description }}</p>
          <div class="mt-4">
            <g-link
              :to="edge.node.path"
              class="text-lg p-1 border border-solid border-green-400 text-green-400 hover:text-pink-400 focus:text-pink-400"
            >Read more</g-link>
          </div>
          <hr class="mt-10" />
        </article>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Posts {
  blog: allPosts(sortBy: "date") {
    edges {
      node {
        title
        date
        description
        path
      }
    }
  }
}
</page-query>

<script>
export default {
	metaInfo: {
		title: 'Blog',
	},
	name: 'Blog',
}
</script>


<style scoped>
</style>