<template>
  <transition name="fade">
    <div>
      <topBar></topBar>
      <bg></bg>
      <transition mode="out-in" name="fade">
        <router-view>
        </router-view>
      </transition>
      <Footer></Footer>
    </div>
  </transition>
</template>
<script>
import bg from './components/backgroundP.vue'
import Footer from './components/footer.vue'
import topBar from './components/topBar.vue'

export default {
  name: 'Top',
  components: {
    bg,
    Footer,
    topBar
  }
}
</script>
<style>
  ::-webkit-scrollbar {
      width: 10px;
  }
  ::-webkit-scrollbar-thumb {
      border-radius: 15px;
      background: rgba(128, 128, 128, 0.418)
  }
  ::-webkit-scrollbar-track {
      border-radius: 30px;
      background: white;
      }
  body{
    background: url("./assets/bg.jpg");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }
  .fade-enter-active{
    transition: all 0.5s 0s ease;
  }
  .fade-leave-active{
    animation: Slideout 0.5s;
  }
  .fade-enter, .fade-leave-to {
    transition: all 0.5s 0s ease;
  }
@keyframes SlideOut {
    0% {
      opacity: 0;/*初期状態では透明に*/
    }
    110% {
      opacity: 1;
    }
  }
</style>
