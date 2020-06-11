<template>
  <div class="artbox" id="whoweare">
    <div class="title">
      <h2>Who We Are?</h2>
    </div>
    <div class="article">
      <div class="block">
        <div class="row">
          <div class="col-md-3" style="display:flex;align-items:center;flex-direction: row-reverse">
            <img style="border-radius: 50%;" src="@/assets/hingashi.jpg" alt="">
          </div>
          <div class="col-md-9">
            <h3>ひんがし</h3>
            <p>昨年からココナラにてフリーのエンジニアとして活動しております。</p>
            <p>大規模な開発よりも、ミニマルなシステムの開発を好んで行っています。</p>
            <p>対応言語: Java Pyhton3 Javascript PHP(WordPress) </p>
            <img style="width:100px;" onclick="window.open('https://profile.coconala.com/users/1301135')" src="@/assets/coconalasvg.svg"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
  @import "@/assets/css/articles.scss";
  .blockimg{
    img{
      width:100%;
    }
  }
  .block{
    .sentence{
      background:rgba(247, 255, 177, 0.425);
      width:100%;
      height:30vh;
    }
  }
</style>
