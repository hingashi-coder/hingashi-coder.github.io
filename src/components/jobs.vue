<template>
  <div id="jobs">
    <h2>our jobs</h2>
    <div class="jobs_pic">
      <div class="left">
        <img src="" alt />
      </div>
      <div class="right">
        <h3>ウェブサイト制作</h3>
        <hr>
        <p>hogehoge。hogehoge。hogeee!jogee!KAIJU!!!</p>
      </div>
    </div>

    <div class="jobs_pic">
      <div class="right">
        <h3>ウェブサイト制作</h3>
        <hr>
        <p>hogehoge。hogehoge。hogeee!jogee!KAIJU!!!</p>
      </div>
      <div class="left">
        <img src="" alt />
      </div>
    </div>

    <div class="jobs_pic">
      <div class="left">
        <img src="" alt />
      </div>
      <div class="right">
        <h3>ウェブサイト制作</h3>
        <hr>
        <p>hogehoge。hogehoge。hogeee!jogee!KAIJU!!!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.left, .right {
  width: 50%;
}
.left, .right {
  padding: 1px;
}
#jobs {
  background: rgba(255, 255, 255, 0.877);
  padding: 0 10%;
}
h2 {
  margin-left: 30px;
  font-size: 40px;
  padding: 15px 0;
}
.jobs_pic img {
  width: 100%;
}
.jobs_pic {
  margin: 0 auto;
  display: flex;
}
.jobs_pic h3 {
  font-size: 20px;
  text-align: left;
  margin: 0 auto;
  color: rgb(117, 117, 117);
}
</style>
