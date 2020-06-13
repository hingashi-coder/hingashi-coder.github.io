<template>
  <div class="artbox" id="contact">
    <div class="title">
      <h2>Contact</h2>
    </div>
    <div class="article">
      <div class="block" ref="qBox">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSekcFkBAly96XR8B61XPZTRRKOP8-4465lmngBuZdZa6NEKVw/viewform?embedded=true" width="100%" height="950" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact'
}
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
      p{
      }
    }
  }
</style>
