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
              <div v-scroll-to="{ el :'#jobs', offset: -100}" ><p>Jobs</p></div>
            </div>
            <div class="col-3 scrollbtn">
              <div v-scroll-to="{ el :'#whoweare', offset: -100}" class=""><p>Who</p></div>
            </div>
            <div class="col-3 scrollbtn">
              <div v-scroll-to="{ el :'#contact', offset: -100}" class=""><p>contact</p></div>
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
