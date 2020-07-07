<template>
  <Layout class="font-body">
    <section class="bg-gray-200">
      <div class="max-w-screen-lg h-screen mx-auto">
        <header class="mx-6 py-10">
          <h1 class="font-title font-bold text-4xl">404 Page</h1>
        </header>
        <div class="mx-3 bg-gray-100 p-3 rounded-md shadow-lg">
          <ul class="text-green-400">
            <li class="mb-2">
              <g-link class="hover:text-pink-400 focus:text-pink-400" to="/">Home</g-link>
            </li>
            <li class="mb-2">
              <g-link class="hover:text-pink-400 focus:text-pink-400" to="/about">About</g-link>
            </li>
            <li class="mb-2">
              <g-link class="hover:text-pink-400 focus:text-pink-400" to="/blog">Blog</g-link>
            </li>
            <li>
              <g-link class="hover:text-pink-400 focus:text-pink-400" to="/contact">Contact</g-link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
	metaInfo: {
		title: '404',
	},
}
</script>

<style scoped>
</style>