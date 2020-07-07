<template>
  <Layout class="font-body">
    <section class="bg-gray-200">
      <div class="max-w-screen-lg mx-auto">
        <header class="mx-6 py-10">
          <h1 class="font-title font-bold text-4xl">{{ $page.posts.title }}</h1>
          <h2 class="mt-2 text-green-400 text-lg">{{ $page.posts.date }}</h2>
        </header>
        <div class="remark mx-3 mb-3 bg-gray-100 rounded-md shadow-lg">
          <VueRemarkContent class="mx-3 pb-3" />
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Posts($id: ID!) {
  posts(id: $id) {
    title
    date
  }
}
</page-query>

<script>
export default {
	name: 'BlogTemplate',
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

.remark p {
	@apply text-lg mb-5;
}

.remark a {
	@apply text-pink-400 underline;
}

.remark a:hover {
	@apply text-green-400;
}

.remark img {
	@apply w-3/4 max-w-lg mx-auto rounded-md;
}

.remark pre {
	@apply mb-5 bg-gray-800 text-gray-100 rounded-md shadow-inner-md-dark;
}

.remark p code {
	@apply bg-gray-800 text-gray-100 px-1 rounded;
}
</style>