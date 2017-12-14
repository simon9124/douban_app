<template>
  <div>
    <!--头部-->
    <!--<m-header title="豆瓣app" v-bind:bg="true" fixed>-->
      <!--&lt;!&ndash;通过slot钩子获得&ndash;&gt;-->
      <!--<a href="javascript:;" slot="left">-->
        <!--<img class="m-icon-img" src="../../assets/images/ic_bar_back_white.png">返回-->
      <!--</a>-->
      <!--<a href="javascript:;" slot="right">分享</a>-->
    <!--</m-header>-->
    <header class="m-header is-fixed is-bg top-search">
      <div class="search-wrap">
        <img src="../../assets/images/ic_search_gray.png" alt="">
        <span class="placeholder">影视 图书 唱片 小组 舞台剧等</span>
        <img src="../../assets/images/ic_scan_gray.png" alt="">
      </div>
      <div class="m-header-button is-right" style="text-align: center;width: 50px;">
        <a href="javascript:;"><img class="m-icon-img" src="../../assets/images/ic_chat_white.png" /></a>
      </div>
    </header>
    <!--内容-->
    <div class="page-content">
      <!--轮播-->
      <m-swipe class="swipeid" swipeid="swipe01" v-bind:autoplay="10000" effect="cube">

        <div class="swiper-slide" slot="swiper-con">
          <!--v-for="(item,index) in swipesData">-->
          <img src="../../assets/images/banner/01.jpg"/>
          <!--<img src="../../assets/images/banner/01.jpg">-->
        </div>

        <div class="swiper-slide" slot="swiper-con">
          <img src="../../assets/images/banner/02.jpg">
        </div>
        <div class="swiper-slide" slot="swiper-con">
          <img src="../../assets/images/banner/03.jpg">
        </div>
      </m-swipe>
      <div class="content">
        <!--提醒 + 设置-->
        <m-cell title="设置">
          <a href="javascript:;" slot="cell-right">
            <img src="../../assets/images/ic_arrow_gray_small.png">
          </a>
        </m-cell>
        <!--热门-->
        <div class="hot-wrap">
          <m-cell title="热门" label="hot">
          </m-cell>
          <!--动态生成内容-->
          <m-cell-media
            v-bind:author="item.target.author.name"
            v-bind:column="item.source_cn"
            v-bind:img="item.target.cover_url"
            v-for="(item,index) in hotData"
            v-bind:key="item.id">
            <span slot="title">{{item.title}}</span>
            <span slot="describe">{{item.target.desc}}</span>
          </m-cell-media>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mHeader from '../../components/header'
  import mSwipe from '../../components/swipe'
  import mCell from '../../components/cell'
  import mCellMedia from '../../components/cell-media'
  import axios from 'axios'
  export default {
    name : 'index' ,
    components : {
      mHeader,
      mSwipe,
      mCell,
      mCellMedia
    },
    data() {
      return {
        //select : 'tab1'
        recommendData : [] ,
        hotData : [],
        swipesData : []
      }
    },
    created () {
      this.fetchData();
    },
    methods : {
      fetchData () {
        //this.$http.get('../../../static/homeData.json').then((res)=>{
        axios.get('../../../static/homeData.json').then((res) => {
          let data = res.data.recommend_feeds;
          //console.log(data);
          //渲染标题、作者、内容
          let recommend = [];
          let hot = [];
          for(var i in data){
            if(data[i].card && data[i].card.name == '为你推荐'){
              recommend.push(data[i]);
            }else{
              hot.push(data[i]);
            }
          }
          this.recommendData = recommend;
          this.hotData = hot;
          //渲染轮播图
          let swipes = [];
          let data2 = res.data.swipe_pictures;
          for(var i in data2){
            swipes.push(data2[i]);
            //console.log(swipes[i].url);
          }
          //console.log(swipes);
          this.swipesData = swipes;
        })
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/css/normalize.css";
  @import "../../assets/less/var.less";
  .is-fixed ~ .page-content{
    padding-top: 0;
    padding-bottom: 50px;
    width:100%;
    .swipeid {
      width : 100%;
      .swiper-slide {
        width :100%;
        /*line-height:auto;*/
        img {
          width:100%;
          height:100%;
        }
      }
    }
  }
  .top-search {
    .search-wrap {
      width: 100%;
      height: 30px;
      background: #fff;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #c0c0c0;
      padding: 0 12px;
      .placeholder {
        flex: 1;
        text-align: left;
        padding-left: 12px;
      }
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
  .hot-wrap, .recommend-wrap {
    padding-top: 12px;
  }
</style>
