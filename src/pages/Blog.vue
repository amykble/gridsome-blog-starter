<template>
  <Layout class="bg-topo bg-gray-200 font-body">
    <main>
      <section>
        <div class="max-w-screen-lg mx-auto">
          <header class="mx-6 py-10">
            <h1 class="font-title font-bold text-4xl">Blog Posts</h1>
          </header>
          <article v-for="edge in $page.blog.edges" :key="edge.node.id" class="mx-6 mt-10">
            <h3 class="font-title font-bold text-xl">
              <span class="underline">Title:</span>
              {{ edge.node.title }}
            </h3>
            <h4>Posted: {{ edge.node.date }}</h4>
            <p>Snippet: {{ edge.node.snippet }}</p>
            <div class="mt-4 mb-10">
              <g-link
                :to="edge.node.path"
                class="text-lg p-1 bg-gray-200 hover:bg-gray-300 border border-solid border-green-400 rounded text-green-400 hover:text-pink-400 focus:text-pink-400"
              >Read more</g-link>
            </div>
          </article>
        </div>
      </section>
    </main>
  </Layout>
</template>

<page-query>
query Post {
  blog: allPost(sortBy: "date") {
    edges {
      node {
        title
        date (format: "DD MM YYYY")
        snippet
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