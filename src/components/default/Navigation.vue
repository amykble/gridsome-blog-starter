<template>
  <nav>
    <section class="fixed z-10 w-full text-pink-500 bg-gray-200 dark:bg-gray-900 shadow-md">
      <div class="max-w-screen-lg my-2 mx-auto">
        <ul class="flex items-center justify-end">
          <li class="mr-6">
            <g-link class="hover:text-green-400 focus:text-green-400" to="/">Home</g-link>
          </li>
          <li class="mr-6">
            <g-link class="hover:text-green-400 focus:text-green-400" to="/about">About</g-link>
          </li>
          <li class="mr-6 p-1 border border-solid border-green-400 rounded">
            <g-link class="hover:text-green-400 focus:text-green-400" to="/blog">Blog</g-link>
          </li>
          <li class="mr-6">
            <g-link class="hover:text-green-400 focus:text-green-400" to="/contact">Contact</g-link>
          </li>
        </ul>
      </div>
    </section>
    <section class="h-12"></section>
  </nav>
</template>


<script>
export default {
	name: 'Navigation',
}
</script>


<style scoped>
</style>