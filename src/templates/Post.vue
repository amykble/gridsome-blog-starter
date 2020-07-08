<!-- Post template -->
<template>
  <Layout class="font-body">
    <section class="bg-gray-200 pb-3">
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
              class="text-lg p-1 border border-solid border-pink-400 text-pink-400 hover:text-green-400 focus:text-green-400"
            >Go Back</g-link>
          </div>
        </header>
        <div class="remark mx-3 bg-gray-100 rounded-md shadow-lg">
          <div v-html="$page.post.content" class="mx-3 pb-3"></div>
        </div>
      </div>
    </section>
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
.remark h1,
.remark h2,
.remark h3,
.remark h4 {
	@apply font-bold mb-5;
}

.remark h1 {
	@apply text-3xl pt-5;
}

.remark h2 {
	@apply text-2xl;
}

.remark h3 {
	@apply text-xl;
}

.remark h4 {
	@apply text-lg;
}

.remark p,
.remark ul,
.remark ol {
	@apply text-lg mb-5;
}

.remark a {
	@apply text-pink-400 underline;
}

.remark a:hover {
	@apply text-green-400;
}

.remark ul li {
	@apply list-disc ml-5;
}

.remark ol li {
	@apply list-decimal ml-8;
}

.remark img {
	@apply w-3/4 max-w-lg mx-auto rounded-md;
}

.remark pre {
	@apply mb-5 p-3 overflow-auto rounded-md;
}

.remark p code {
	@apply bg-gray-800 text-gray-100 px-1 rounded;
}
</style>