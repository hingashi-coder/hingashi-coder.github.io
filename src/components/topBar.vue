<template>
  <div>
    <div :class="`header ${headerState}`">
      <div class='row'>
        <div class='col-5'>
          <div class='title' v-scroll-to="{ el :'#bg'}">
            Engage
          </div>
        </div>
        <div class="col-7" id="buttons">
          <div :class="`row ${buttonState}`">
            <div class="col-3 scrollbtn">
              <router-link tag="div" to="/main">
                <p>Top</p>
              </router-link>
            </div>

            <div class="col-3 scrollbtn">
              <router-link tag="div" :to="{name: 'blog'}">
                <p>Blog</p>
              </router-link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<style lang='scss'>
  .scrollbtn{
    display: flex;
    align-items: center;
    transition-duration: 0.5s;
    p{
      margin:0;
    }
    &:hover{
      transition-duration: 0.5s;
      color:greenyellow;
    }
  }
  .blackButton{
    transition-duration: 0.5s;
    color:black;
  }
  .trans{
    background:transparent !important;
    transition-duration: 1s;
    transition: linear;
    height:120px !important;
    .title{
      font-size:45px !important;
      background: white !important;
      -webkit-background-clip: text !important;//テキストでくり抜く
      -webkit-text-fill-color: transparent !important;//くり抜いた部分は背景を表示
    }
  }
  .header{
    color : white;
    z-index: 300;
    position: fixed;
    top: 0;
    width: 100%;
    padding-right:5px;
    height:60px;
    background-color: rgb(0, 0, 0);
    transition-duration: 0.5s;
    .row{
      height: 100%;
      [class*="col-"]{
        height: 100%;
        display: flex;
        align-items: center;
        .title{
          height:auto;
          font-size:30px;
          letter-spacing: 2.5px;
          margin-left :5vw;
          background: linear-gradient(to left,rgb(0, 179, 0),greenyellow);
          -webkit-background-clip: text;//テキストでくり抜く
          -webkit-text-fill-color: transparent;//くり抜いた部分は背景を表示
          &:hover{
            -webkit-animation: fuwafuwa 3s infinite linear alternate;
            animation: fuwafuwa 3s infinite linear alternate;
          }
        }
      }
    }
  }
  #buttons{
    flex-direction: row-reverse;
    padding:0;
  }
  @-webkit-keyframes fuwafuwa {
  0% {
    -webkit-transform: translate(0, 0) ;
  }
  50% {
    -webkit-transform: translate(0, -10px) ;
  }
  100% {
    -webkit-transform: translate(0, 0) ;
  }
}
@keyframes fuwafuwa {
  0% {
    transform: translate(0, 0) ;
  }
  50% {
    transform: translate(0, -10px) ;
  }
  100% {
    transform: translate(0, 0) ;
  }
}
</style>
<script>
export default {
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  data () {
    return {
      headerState: 'trans',
      buttonState: 'blackButton'
    }
  },
  methods: {
    handleScroll () {
      if (window.scrollY > 5) {
        this.headerState = ''
        this.buttonState = ''
      } else if (window.scrollY < 150) {
        this.headerState = 'trans'
        this.buttonState = 'blackButton'
      }
    }
  }
}
</script>
