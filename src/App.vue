<template>
  <div id="app">
    <transition name="fade">
      <router-view>
      </router-view>
    </transition>
  </div>
</template>

<script>
export default{
}
</script>

<style>
  body{
    margin:0;
  }
  .fade-enter-active, .fade-leave-active {
   animation: SlideIn 1.6s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  /* CSSアニメーションの設定 */
  @keyframes SlideIn {
    100% {
      opacity: 0;/*初期状態では透明に*/
      transform: translateX(300px);
    }
    0% {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>
