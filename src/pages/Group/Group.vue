<template>
  <div>
    <m-header title="小组" fixed>
      <a href="javascript:;" slot="right">
        <img class="m-icon-img margin-right-10" src="../../assets/images/ic_actionbar_search_icon.png"/>
      </a>
      <a href="javascript:;" slot="right">
        <img class="m-icon-img" src="../../assets/images/ic_chat_green.png"/>
      </a>
    </m-header>
    <div class="Group">
      <div class="titleTop"></div>
      <div class="groups" v-for="(item,i) in groupsData">
        <div class="group">
          <div class="groupTop">
            <img class="groupImg" :src="item.groupImg">
            <span class="groupClass">{{item.groupName}}</span>
          </div>
          <div class="groupTitles" v-for="(item,i) in groupsData[0].groupsClass">
            <div class="title">
              <hr>
              <span>{{item.groupTitle}}</span>
            </div>
            <div class="groupContents">
              <div class="groupContent">
                <div class="avatar">
                  <img :src="item.groupContent[0].avatar">
                </div>
                <div class="description">
                  <h1>{{item.groupContent[0].contentTitle}}</h1>
                  <p>{{item.groupContent[0].description}}</p>
                </div>
                <div class="join">
                  <img src="../../assets/images/ic_group_check_anonymous.png">
                </div>
                <span class="persons">{{item.groupContent[0].persons}}人</span>
              </div>
              <div class="groupContent">
                <div class="avatar">
                  <img :src="item.groupContent[1].avatar">
                </div>
                <div class="description">
                  <h1>{{item.groupContent[1].contentTitle}}</h1>
                  <p>{{item.groupContent[1].description}}</p>
                </div>
                <div class="join">
                  <img src="../../assets/images/ic_group_check_anonymous.png">
                </div>
                <span class="persons">{{item.groupContent[1].persons}}人</span>
              </div>
              <div class="groupContent">
                <div class="avatar">
                  <img :src="item.groupContent[2].avatar">
                </div>
                <div class="description">
                  <h1>{{item.groupContent[2].contentTitle}}</h1>
                  <p>{{item.groupContent[2].description}}</p>
                </div>
                <div class="join">
                  <img src="../../assets/images/ic_group_check_anonymous.png">
                </div>
                <span class="persons">{{item.groupContent[2].persons}}人</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mHeader from '../../components/header'
  import axios from 'axios'
  export default {
    name : 'group',
    components : {
      mHeader
    },
    data () {
      return {
        groupsData : [] ,
        groupsClassesData : [] ,
        groupsTitlesData : [] ,
        groupsContentsData : []
      }
    },
    created(){
      this.fetchData();
    },
    methods : {
      fetchData () {
        axios.get('../../../static/group.json').then((res)=>{

          let data = res.data.groups;
          //console.log(data);

          let groups = [];
          let groupsClasses = [];
          let groupsTitles = [];
          let groupsContents = [];

          for(var i in data){
            var groupsName = data[i];
            for (var j in groupsName.groupsClass){
              var groupsClass = groupsName.groupsClass[j];
//              for (var k in groupsClass){
//                var groupsTitle = groupsClass[k];
//                for (var l in groupsTitle){
//                  var groupsContent = groupsTitle[l];
//                  groupsContents.push(groupsContent);
//                }
//                groupsTitles.push(groupsTitle);
//              }
              groupsClasses.push(groupsClass);
              break;
            }
            groups.push(groupsName);
          }
          this.groupsContentsData = groupsContents;
          this.groupsTitlesData = groupsTitles;
          this.groupsClassesData = groupsClasses;
          this.groupsData = groups;
          //console.log(this.groupsContentsData);
          //console.log(this.groupsTitlesData);
          //console.log(this.groupsClassesData);
          console.log(this.groupsData);
        })
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/css/normalize.css";
  @import "../../assets/css/app.css";
  @import "../../assets/less/var.less";
  .Group {
    /*background: #eee;*/
    padding-bottom: 50px;
    .groups{
      padding:15px;
      .group{
        .groupTop{
          position: relative;
        }
        .groupClass{
          position: absolute;
          left:5px;
          bottom:10px;
          color: #fff;
          font-size: 14px;
        }
        .groupImg{
          width: 100%;
        }
        .title{
          position: relative;
          margin-top:30px;
          hr{
            color: #b0b0b0;
          }
          span{
            display: inline-block;
            width: 100px;
            height: 16px;
            font-size: 16px;
            line-height: 16px;
            background: #fff;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
          }
        }
        .groupContent{
          display: flex;
          margin-top: 20px;
          position: relative;
          .avatar{
            width: 80px;
            position: relative;
            margin-right: 10px;
            img{
              width: 100%;
              position: absolute;
              left: 0;
              right: 0;
              margin: auto;
              bottom:0;
              border-radius: 3px;
            }
          }
          .description{
            width:350px;
            padding-right: 40px;
            h1{
              font-size: 18px;
              text-align: left;
              font-weight: bold;
              margin-bottom:0;
            }
            p{
              font-size: 12px;
              color: #c3c3c3;
              overflow: hidden;
              text-overflow: ellipsis;
              text-align: left;
              line-height: 1;
            }
          }
          .join{
            width: 45px;
            position: relative;
            img{
              width: 100%;
              position: absolute;
              top:0;
              bottom:0;
              left: 0;
              right: 0;
              margin: auto;
            }
          }
          .persons{
            display: inline-block;
            width: 60px;
            text-align: right;
            height: 12px;
            font-size: 12px;
            line-height: 12px;
            position: absolute;
            color: #e3e3e3;
            top:0;
            bottom:0;
            margin: auto;
            right: 35px;
          }
        }
      }
    }
  }
</style>
