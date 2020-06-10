<template>
  <div style="overflow:hidden">
    <div class="dummy">
    </div>
    <div class="background">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.3"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="7"
        linesColor="#33aa33"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.3"
        :linesDistance="150"
        :moveSpeed="4"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </div>
    <h1 id="catch" v-prlx.mobile="{direction: 'x',speed :0.4}">WE Shape Up your WebSite</h1>
  </div>
</template>
<script>
export default {
  mounted () {
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
  .background{
    position: fixed;
    top:0;
    width:100vw;
    height:100vh;

    z-index: -1;
  }
  #catch{
    height:40vh;
    padding-right: 10vw;
    text-align: right;
    color:white;
    font-size:40px;
  }
  #particles-js{
    height:100% !important;
    width:100%;
  }
  .dummy{
    height:60vh;
  }
</style>
