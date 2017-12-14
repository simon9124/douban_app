<template>
  <div class="broadCasts">
    <m-header title="推荐广播" fixed>
      <a href="javascript:;" slot="right">
        <img class="m-icon-img margin-right-10" src="../../assets/images/ic_status_search_user.png"/>
      </a>
      <a href="javascript:;" slot="right">
        <img class="m-icon-img" src="../../assets/images/ic_chat_green.png"/>
      </a>
    </m-header>
    <div class="findPeople">
      <img src="../../assets/images/ic_status_anonymous_header.png">
      <div>
        <h1>发现有趣的人</h1>
        <p>关注他们，发现更大的世界</p>
      </div>
    </div>
    <div class="broadCast" v-for="(item,i) in broadCastsData">
      <div class="delete"></div>
      <div class="left">
        <img class="avatar" :src="item.avatar">
      </div>
      <div class="right">
        <div class="top">
          <h1>{{item.castName}}
            <p>{{item.followers}}人关注</p>
          </h1>
          <span>关注</span>
        </div>
        <p>{{item.cast}}</p>
        <img class="pic" :src="item.pic">
        <div class="comment">
          <img src="../../assets/images/ic_like_full.png">
          <span class="like">{{item.like}}</span>
          <img src="../../assets/images/ic_feedback_comment.png">
          <span class="comments">{{item.comments}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mHeader from '../../components/header'
  import axios from 'axios'
  export default {
    name : 'broadCast',
    components : {
      mHeader
    },
    data () {
      return {
        broadCastsData : [] ,
      }
    },
    created(){
      this.fetchData();
    },
    methods : {
      fetchData () {
        axios.get('../../../static/broadCast.json').then((res)=>{
          let data = res.data.broadCasts;
          //console.log(data);
          let broadCasts = [];
          for(var i in data){
            broadCasts.push(data[i]);
          }
          this.broadCastsData = broadCasts;
          console.log(this.broadCastsData);
        })
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/css/normalize.css";
  @import "../../assets/css/app.css";
  @import "../../assets/less/var.less";
  .broadCasts{
    background:#eee;
    padding-bottom: 50px;
    .findPeople{
      padding:20px 30px 0 30px;
      img{
        width: 80px;
      }
      div{
        display: inline-block;
        margin-left: 20px;
        vertical-align: middle;
        h1{
          text-align: left;
          font-size: 18px;
        }
        p{
          color: #a1a29c;
        }
      }
    }
    .broadCast{
      background:#fff;
      margin:20px 10px;
      padding:10px;
      border-radius: 5px;
      box-shadow: 0 1px 1px 1px #cccccc;
      .left{
        width:60px;
        float:left;
        .avatar{
          width:60px;
          border-radius: 50%;
        }
      }
      .right{
        padding-left:80px;
        padding-right:20px;
        .top{
          display: flex;
          justify-content:space-between;
          margin-bottom: 10px;
          h1{
            font-size:18px;
            font-weight: bold;
            margin:0;
            p{
              font-size:12px;
              text-align: left;
              font-weight: normal;
              margin-top: -10px;
              color: #b0b0b0;
            }
          }
          span{
            display: inline-block;
            width:60px;
            height:25px;
            line-height: 25px;
            background: @defaultColor;
            color: #fff;
            border-radius: 3px;
            margin-top: 10px;
          }
        }
        p{
          text-align: justify;
        }
        .pic{
          width: 100%;
          margin-top: 10px;
        }
        .comment{
          margin-top: 10px;
          text-align: left;
          color: #b0b0b0;
          img{
            width:20px;
          }
          span{
            line-height: 20px;
          }
          .like{
            margin-right: 15px;
          }
        }
      }
    }
  }
</style>
