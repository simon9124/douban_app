<template>
  <div class="mine">
    <m-header title="我的" fixed>
      <a href="javascript:;" slot="right">
        <img class="m-icon-img" src="../../assets/images/ic_settings.png"/>
      </a>
    </m-header>
    <div class="login">

    </div>
    <div class="content">
      <m-cell title="提醒" icon>
        <img src="../../assets/images/ic_mine_notification.png" slot="icon">
        <a href="javascript:;" slot="cell-right">
          <img src="../../assets/images/ic_arrow_gray_small.png">
        </a>
      </m-cell>
      <m-cell class="myLike" title="喜欢" icon>
        <img src="../../assets/images/ic_my_likes.png" slot="icon">
        <a href="javascript:;" slot="cell-right">
          <img src="../../assets/images/ic_arrow_gray_small.png">
        </a>
      </m-cell>
      <m-cell title="日记" icon>
        <img src="../../assets/images/ic_my_note.png" slot="icon">
        <a href="javascript:;" slot="cell-right">
          <img src="../../assets/images/ic_arrow_gray_small.png">
        </a>
      </m-cell>
      <m-cell title="相册" icon>
        <img src="../../assets/images/ic_my_album.png" slot="icon">
        <a href="javascript:;" slot="cell-right">
          <img src="../../assets/images/ic_arrow_gray_small.png">
        </a>
      </m-cell>
      <m-cell class="myMovie" title="电影·电视·综艺" icon>
        <img src="../../assets/images/ic_my_movies_tvs.png" slot="icon">
        <a href="javascript:;" slot="cell-right">
          <img src="../../assets/images/ic_arrow_gray_small.png">
        </a>
      </m-cell>
      <m-cell title="读书" icon>
        <img src="../../assets/images/ic_my_books.png" slot="icon">
        <a href="javascript:;" slot="cell-right">
          <img src="../../assets/images/ic_arrow_gray_small.png">
        </a>
      </m-cell>
      <m-cell title="音乐" icon>
        <img src="../../assets/images/ic_my_music.png" slot="icon">
        <a href="javascript:;" slot="cell-right">
          <img src="../../assets/images/ic_arrow_gray_small.png">
        </a>
      </m-cell>
      <m-cell class="myPocket" title="钱包" icon>
        <img src="../../assets/images/ic_my_wallet.png" slot="icon">
        <a href="javascript:;" slot="cell-right">
          <img src="../../assets/images/ic_arrow_gray_small.png">
        </a>
      </m-cell>
    </div>
  </div>
</template>

<script>
  import mHeader from '../../components/header'
  import mSwipe from '../../components/swipe'
  import mCell from '../../components/cell'
  import mCellMedia from '../../components/cell-media'
  export default {
    name : 'mine',
    components : {
      mHeader,
      mSwipe,
      mCell,
      mCellMedia
    }
  }
</script>

<style lang="less">
  @import "../../assets/css/normalize.css";
  @import "../../assets/css/app.css";
  @import "../../assets/less/var.less";
  .mine{
    background:#eee;
    .m-cell{
      background:#fff;
    }
  }
  .myLike,.myMovie,.myPocket{
    margin-top:10px;
  }
</style>
