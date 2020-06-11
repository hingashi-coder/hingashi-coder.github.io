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
    animation: SlideOut 0.8s;
  }
  .fade-enter {
  }
  /* CSSアニメーションの設定 */
  @keyframes SlideOut {
    100% {
      opacity: 0.9;/*初期状態では透明に*/
      transform: translateX(100vw);
    }
    0% {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>
