<template>
  <Layout>
    Blog Template
    <VueRemarkContent />
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
</style>