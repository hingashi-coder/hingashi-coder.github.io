<template>
  <div class="artbox" id="jobs">
    <div class="title">
      <div class="scroll fuwafuwa">scroll</div>
      <h2>our jobs</h2>
    </div>
    <div class="article">
      <section>
        <div class="row">
          <div class="col-md-3">
            <img src="@/assets/web.jpg" class="eyeCatch" alt="">
          </div>
          <div class="col-md-9">
            <h3>WEBサイト制作</h3>
            <hr>
            <p>新規での作成、現状のウェブページ作り直しに対応しております。</p>
            <p>「造ってみたけれど、しっくりこない・・」など対応いたします。</p>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-md-3">
            <img src="@/assets/support.jpg" class="eyeCatch" alt="">
          </div>
          <div class="col-md-9">
            <h3>ITサポート・トラブルシュート</h3>
            <hr>
            <p>以前のパソコンで使っていたソフトが動かない</p>
            <p>プログラミング環境の不調など対応いたします。</p>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-md-3">
            <img style="background:skyblue" src="@/assets/wp.png" class="eyeCatch" alt="">
          </div>
          <div class="col-md-9">
            <h3>WPサポート</h3>
            <hr>
            <p>購入したデザインテンプレートをカスタムしたい。</p>
            <p>WordPressのプラグインの不調など対応いたします。</p>
          </div>
        </div>
      </section>
      <h2>その他のご依頼に付きましても、ご相談ください。</h2>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
  @import "@/assets/css/articles.scss";
  .article > section{
    width:100%;
    margin: 5vh auto;
    border-radius:10px;
  }
  .eyeCatch{
    width:100%;
  }
  p{
    font-size:16px;
  }
</style>
