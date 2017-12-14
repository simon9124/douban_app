<template>
  <header class="m-header" v-bind:class="{'is-bg':bg,'is-fixed':fixed}">
    <div class="m-header-button is-left">
      <!--此处的javascript是伪协议 -> 取消<a>的默认行为-->
      <!--<a href="javascript:;">-->
        <!--<img class="m-icon-img" src="../assets/images/ic_bar_back_white.png">返回-->
      <!--</a>-->
      <slot name="left"></slot>
    </div>
    <h1 class="m-header-title" >{{title}}</h1>
    <div class="m-header-button is-right">
      <!--<a href="javascript:;">分享</a>-->
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
  export default {
    props : {
      title : {
        type : String ,
        default : ''
      },
      bg : {
        type : Boolean ,
        default : false
      },
      fixed : {
        type : Boolean ,
        default : false
      }
    }
  }
</script>

<style lang="less">
  /*导入颜色变量*/
  @import "../assets/less/var.less";
  .m-header {
    /*居中对齐弹性盒的<div>*/
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 10px;
    background: #fff;
    color: @headerDefaultColor;
    border-bottom: 1px solid #eee;
    a {
      color: @headerDefaultColor;
      text-decoration: none;
    }
    .m-header-button {
      width: 70px;
      /*居中对齐弹性元素*/
      align-items: stretch;
      &.is-left {
        text-align: left;
      }
      &.is-right{
        text-align: right;
      }
      .m-icon-img{
        width: 20px;
        height: 20px;
        vertical-align: middle;
      }
      .margin-right-10 {
        margin-right: 10px;
      }
    }
    .m-header-title {
      flex: 1;
      /*flex -> 弹性盒模型对象的子元素平均分布*/
      text-align: center;
      font-size: 16px;
      /*ellipsis -> 用...代表hidden的文本*/
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    &.is-bg{
      background:@headerBg;
      color: #fff;
      a{
        color: #fff;
      }
      .m-header-title{
        color: #fff;
      }
    }
    &.is-fixed{
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      z-index: 9;
    }
  }
</style>
