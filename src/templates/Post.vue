<!-- Post template -->
<template>
  <Layout class="bg-topo bg-gray-200 font-body">
    <main>
      <section class="pb-3">
        <div class="max-w-screen-lg mx-auto">
          <header class="mx-6 py-10">
            <h1 class="font-title font-bold text-4xl">{{ $page.post.title }}</h1>
            <h2 class="mt-2 text-green-400 text-lg">{{ $page.post.date }}</h2>
            <h3
              class="mt-2 text-gray-600 text-lg"
            >Time to Read: {{ $page.post.timeToRead }} {{ minSuffix }}</h3>
            <div class="mt-4">
              <g-link
                to="/blog"
                class="text-lg bg-gray-200 hover:bg-gray-300 rounded p-1 border border-solid border-pink-400 text-pink-400 hover:text-green-400 focus:text-green-400"
              >Go Back</g-link>
            </div>
          </header>
          <div class="remark mx-3 bg-gray-100 rounded-md shadow-lg">
            <article v-html="$page.post.content" class="prose lg:prose-xl mx-auto px-3 py-6"></article>
          </div>
        </div>
      </section>
    </main>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    id
    title
    date (format: "DD MMMM, YYYY")
    content
    timeToRead
  }
}
</page-query>

<script>
export default {
	data() {
		return {
			minSuffix: String,
		}
	},
	methods: {
		suffixCalc() {
			if (this.$page.post.timeToRead >= 5) {
				return (this.minSuffix = 'mins 📖')
			}
			if (this.$page.post.timeToRead >= 2) {
				return (this.minSuffix = 'mins ☕')
			}
			if (this.$page.post.timeToRead <= 1) {
				return (this.minSuffix = 'min 👀')
			}
		},
	},
	mounted() {
		this.suffixCalc()
	},
}
</script>


<style>
.remark p code {
	@apply px-1 rounded;
}

.remark img {
	@apply rounded-md;
}
</style>