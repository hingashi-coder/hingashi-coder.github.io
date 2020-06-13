<template>
  <div>
    <div class="artbox">
      <div class="title">
        <h2>{{article.fields.title}}</h2>
      </div>
      <div class="blog_body">
        <RichTextRenderer :document="article.fields.article" />
      </div>
    </div>
  </div>
</template>
<script>
import RichTextRenderer from 'contentful-rich-text-vue-renderer'
export default {
  components: {
    RichTextRenderer
  },
  data () {
    const contentful = require('contentful')
    return {
      client: contentful.createClient({
        space: 'a9p2woh7aeic',
        accessToken: 'ZaYBQJJxqL_DcL6qbu53blf3Uxl2veLkQUJDjxVUPS4'
      }),
      article: {}
    }
  },
  async mounted () {
    const articleId = this.$route.query.id
    const article = await this.client.getEntry(articleId)
    this.article = article
    console.log(article)
  }
}
</script>
<style scoped lang="scss">
  @import "@/assets/css/articles.scss";
  .blog_body{
    padding-top:5vh;
    max-width:1000px;
    margin: 0 auto;
  }
</style>
