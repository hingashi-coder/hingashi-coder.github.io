<template>
  <div>
    <div :class="`header ${headerState}`">
      <div class='row'>
        <div class='col-6'>
          <div class='title'>
            Engage
          </div>
        </div>
        <div class="col-6">
          <div class="row">
            <div class="col scrollbtn">
              <div v-scroll-to="'#jobs'" ><p>Jobs</p></div>
            </div>
            <div class="col scrollbtn">
              <div v-scroll-to="'#jobs'" class="scrollbtn"><p>Contact</p></div>
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
    p{
      margin:0;
    }
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
    width: 100vw;
    height:60px;
    background-color: rgb(0, 0, 0);
    transition-duration: 0.5s;
    .row{
      height: 100%;
      .col-6{
        height: 100%;
        display: flex;
        align-items: center;
        .title{
          height:auto;
          font-size:30px;
          letter-spacing: 2.5px;
          margin-left :30px;
        }
      }
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
      headerState: 'trans'
    }
  },
  methods: {
    handleScroll () {
      if (window.scrollY > 5) {
        this.headerState = ''
      } else if (window.scrollY < 150) {
        this.headerState = 'trans'
      }
    }
  }
}
</script>
