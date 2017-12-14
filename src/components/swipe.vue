<template>
  <div class="swiper-container" v-bind:class="swipeid">
    <div class="swiper-wrapper">
      <!--<div class="swiper-slide">Slide 1</div>-->
      <!--<div class="swiper-slide">Slide 2</div>-->
      <!--<div class="swiper-slide">Slide 3</div>-->
      <!--放到钩子里-->
      <slot name="swiper-con"></slot>
    </div>
    <!-- 分页器 -->
    <div v-bind:class="{'swiper-pagination':pagination}"></div>
  </div>
</template>

<script>
  import '../assets/lib/swiper/js/swiper.js'
  import axios from 'axios'
  export default {
    props : {
      swipeid : {
        //给swipe绑定id并传值
        type : String ,
        default : ''
      },
      effect: {
        type: String,
        default: 'slide'
      },
      loop: {
        type: Boolean,
        default: true
      },
      direction: {
        type: String,
        default: 'horizontal'
      },
      pagination: {
        type: Boolean,
        default: true
      },
      autoplay: {
        type: Number,
        default: 5000,
      },
      paginationType: {
        type: String,
        default: 'bullets'
      }
    },
    mounted () {
      var That = this;
      new Swiper ( '.' + That.swipeid , {
        loop: That.loop,
        //分页器
        pagination: '.swiper-pagination',
        //分页类型
        paginationType: That.paginationType, //fraction,progress,bullets
        //自动播放
        autoplay: That.autoplay,
        //方向
        direction: That.direction,
        //特效
        effect: That.effect, //slide,fade,coverflow,cube
      })
    },
    data() {
      return {
        imgs : []
      }
    },
  }
</script>

<style>
  @import '../assets/lib/swiper/css/swiper.css';
  .swiper-pagination-bullet-active {
    background: #fff;
  }
  .swiper-container{
    padding:0;
  }
</style>
