<template>
  <div class="loading">
    <p>Engage</p>
  </div>
</template>
<style scoped lang="scss">
  .loading{
    z-index:9999;
    width:100vw;
    height:100vh;
    background:greenyellow;
    display:flex;
    align-items: center;
    p{
      font-size:60px;
      margin: 0 auto;
      letter-spacing: 2.5px;
      color:rgb(63, 63, 63);
    }

  }
</style>
<script>
export default {
  mounted () {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.$router.replace('main')
      }, 500)
    })
  }
}
</script>
