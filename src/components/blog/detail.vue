<template>
  <div>
    <div class="artbox">
      <div class="title">
        <h2>{{title}}</h2>
      </div>
      <div v-html="doc" class="blog_body">
      </div>
    </div>
  </div>
</template>
<script>
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
export default {
  data () {
    const contentful = require('contentful')
    return {
      client: contentful.createClient({
        space: 'a9p2woh7aeic',
        accessToken: 'ZaYBQJJxqL_DcL6qbu53blf3Uxl2veLkQUJDjxVUPS4'
      }),
      article: {},
      doc: '',
      title: ''
    }
  },
  async mounted () {
    const articleId = this.$route.query.id
    const article = await this.client.getEntry(articleId)
    this.article = article
    this.title = article.fields.title
    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: ({data: {target: { fields }}}) =>
          `<img class="blog_img" style="display:block; margin:0 auto; width:100%; max-width:600px;" src="${fields.file.url}" alt="${fields.description}"/>`
      }
    }
    this.doc = documentToHtmlString(article.fields.article, options)
    console.log(this.doc)
  }
}
</script>
<style scoped lang="scss">
  @import "@/assets/css/articles.scss";
  .title > h2{
    font-size:inherit;
  }
  .blog_body{
    padding-top:5vh;
    max-width:1000px;
    margin: 0 auto;
  }
</style>
