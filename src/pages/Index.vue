<template>
  <Layout class="bg-gray-200 dark:bg-gray-900 font-body dark:text-white">
    <main>
      <section>
        <div class="max-w-screen-lg mx-auto">
          <header class="mx-6 py-10">
            <h1 class="font-title font-bold text-4xl">Home Page</h1>
            <h2
              class="font-bold text-xl text-gray-700 dark:text-gray-300"
            >This is a Gridsome blog starter using tailwind w/ their new typography plugin, source-filesystem, transformer-remark and remark-shiki</h2>
            <div class="pt-2">
              <div>
                <p class="inline-block font-bold text-gray-500">Links:</p>
                <a
                  href="https://twitter.com/amykble_dev"
                  rel="noopener"
                  target="_blank"
                  class="inline-block ml-4 text-green-400 hover:text-pink-500 focus:text-pink-500 font-bold"
                >My Twitter</a>
                <a
                  href="https://github.com/amykble/gridsome-blog-starter"
                  rel="noopener"
                  target="_blank"
                  class="inline-block ml-4 text-green-400 hover:text-pink-500 focus:text-pink-500 font-bold"
                >Github Repo</a>
              </div>
              <div>
                <a
                  href="https://gridsome.org"
                  rel="noopener"
                  target="_blank"
                  class="inline-block text-green-400 hover:text-pink-500 focus:text-pink-500 font-bold"
                >Gridsome</a>
                <a
                  href="https://tailwindcss.com"
                  rel="noopener"
                  target="_blank"
                  class="inline-block ml-4 text-green-400 hover:text-pink-500 focus:text-pink-500 font-bold"
                >Tailwind</a>
                <a
                  href="https://github.com/tailwindcss/typography"
                  rel="noopener"
                  target="_blank"
                  class="block sm:inline-block sm:ml-4 text-green-400 hover:text-pink-500 focus:text-pink-500 font-bold"
                >Tailwind Typography</a>
              </div>
            </div>
          </header>
          <article v-for="edge in $page.blog.edges" :key="edge.node.id" class="mx-6 py-10">
            <h2 class="font-title font-bold text-xl">Most Recent Post</h2>
            <h3>
              <span class="underline">Title:</span>
              {{ edge.node.title }}
            </h3>
            <h4>
              <span class="underline">Posted:</span>
              {{ edge.node.date }}
            </h4>
            <p>
              <span class="underline">Snippet:</span>
              {{ edge.node.snippet }}
            </p>
            <div>
              <g-link
                :to="edge.node.path"
                class="text-green-400 hover:text-pink-400 focus:text-pink-400"
              >Read more</g-link>
            </div>
          </article>
        </div>
      </section>
      <section>
        <article class="max-w-screen-lg pb-3 mx-auto">
          <div class="mx-3 bg-gray-100 dark:bg-gray-800 rounded-md shadow-lg">
            <header class="mx-3 py-10">
              <h2 class="font-title font-bold text-3xl">Main Content</h2>
            </header>
            <div class="mx-3 pb-10">
              <p
                class="mb-5"
              >I'm baby disrupt PBR&B poke, vice 90's put a bird on it tote bag. Gentrify microdosing migas, intelligentsia pork belly man bun iceland hexagon. Pok pok banjo everyday carry tumblr DIY leggings pabst hammock health goth enamel pin master cleanse woke umami kitsch. Echo park woke snackwave viral marfa cronut.</p>
              <p
                class="mb-5"
              >Brooklyn brunch banh mi, tilde street art chicharrones chillwave. Portland banh mi gluten-free vice. Pug waistcoat ugh, pour-over banh mi tumblr lo-fi raclette yr occupy ramps. Etsy activated charcoal asymmetrical, pork belly ugh retro wolf jianbing.</p>
              <p>Vinyl quinoa pinterest, ennui cold-pressed chia kogi hammock glossier biodiesel photo booth. Ugh DIY you probably haven't heard of them typewriter deep v meditation slow-carb. Organic neutra microdosing kitsch, tote bag salvia four loko aesthetic skateboard VHS. Poutine vexillologist shabby chic trust fund, heirloom cardigan live-edge hashtag blog chillwave glossier pickled. Meditation unicorn deep v craft beer retro fashion axe edison bulb letterpress glossier health goth four dollar toast hot chicken. Lo-fi disrupt wayfarers woke. Irony gluten-free neutra, venmo enamel pin offal microdosing tofu everyday carry.</p>
            </div>
          </div>
        </article>
      </section>
    </main>
  </Layout>
</template>

<page-query>
query Post {
  blog: allPost(sortBy: "date", limit: 1) {
    edges {
      node {
        title
        date (format: "DD MMMM, YYYY")
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
		title: 'Home',
	},
	name: 'Home',
}
</script>

<style>
@import '../assets/styles/main.css';
</style>