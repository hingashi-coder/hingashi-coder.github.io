<template>
  <div>
    <div class="artbox">
      <div class="title">
        <h2>Blog</h2>
      </div>
      <div class="row articles">
        <div v-for="article in articles" class="col-md-6" :key="article.sys.id">
          <div class="blog_title">
              {{article.fields.title}}
           </div>
          <div class="blog_card">
            <img :src="article.fields.eyeCatch.fields.file.url" alt="">
          </div>
          <div class="view_more">
            <router-link tag="div" :to="{name:'detail',query:{id: article.sys.id}}" class="next">
              View More
            </router-link>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>
<script>
export default {
  data () {
    const contentful = require('contentful')
    return {
      client: contentful.createClient({
        space: 'a9p2woh7aeic',
        accessToken: 'ZaYBQJJxqL_DcL6qbu53blf3Uxl2veLkQUJDjxVUPS4'
      }),
      articles: []
    }
  },
  async mounted () {
    const articles = await this.client.getEntries()
    this.articles = articles.items
    console.log(this.articles)
  }
}
</script>
<style scoped lang="scss">
  @import "@/assets/css/articles.scss";
  .articles{
    margin: 5% 10%;
  }
  .blog_title{
    height:5vh;
    width:100%;
    background:linear-gradient(to right, green, greenyellow);
    color:white;
    display: flex;
    align-items: center;
    padding-left:10px;
  }
  .blog_card{
    padding:10px;
    background:white;
    img{
      display: block;
      width:80%;
      margin: 0 auto;
    }
  }
  .view_more{
    display: flex;
    padding: 10px 8%;
    background:white;
    height:8vh;
    .next{
      background:rgb(200, 255, 117);
      margin-right:0;
      margin-left: auto;
      padding: 10px 20px;
      height:90%;
      cursor: pointer;
      transition: .5s;
      display:flex;
      align-items:center;
      border-radius:5px;
      * {
        margin: 0 auto;
        text-align:center;
      }
      &:hover{
        transform: skewX(-8deg);
        color:white;
        background:rgb(0, 189, 0);
        transition: .5s;
        font-size:18px;
        border-radius:10px;

      }
    }

  }
</style>
