<template>
  <transition name="fade">
    <div>
      <topBar></topBar>
      <bg></bg>
      <jobs></jobs>
      <Footer></Footer>
    </div>
  </transition>
</template>
<script>
import bg from './components/backgroundP.vue'
import jobs from './components/jobs.vue'
import topBar from './components/topBar.vue'
import Footer from './components/footer.vue'
export default {
  name: 'App',
  components: {
    bg,
    jobs,
    topBar,
    Footer
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
</style>
