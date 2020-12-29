<template>
  <div class="side-wrap">
    <div class="userInfo">
      <img src="../../assets/images/avatar.jpg" />
      <div class="username">个人博客</div>
      <div class="contact">
        <el-tooltip effect="light" placement="top">
          <div slot="content" class="tooltip">
            <img src="../../assets/images/avatar.jpg" />
          </div>
          <span class="iconfont iconQQ"></span>
        </el-tooltip>
        <el-tooltip effect="light" placement="top">
          <div slot="content" class="tooltip">
            <img src="../../assets/images/avatar.jpg" />
          </div>
          <span class="iconfont iconicon-test5"></span>
        </el-tooltip>
        <el-tooltip effect="light" placement="top">
          <div slot="content" class="tooltip">
            <img src="../../assets/images/avatar.jpg" />
          </div>
          <span class="iconfont icondingtalk"></span>
        </el-tooltip>
        <el-tooltip effect="light" placement="top">
          <div slot="content" class="tooltip">
            <img src="../../assets/images/avatar.jpg" />
          </div>
          <span class="iconfont iconicon-test3"></span>
        </el-tooltip>
        <el-tooltip effect="light" placement="top">
          <div slot="content" class="tooltip">
            <img src="../../assets/images/avatar.jpg" />
          </div>
          <span class="iconfont iconemail"></span>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
@height: 100vh/960px;
@width: 100vw/1920px;

.side-wrap {
  height: 100%;
  width: 100%;
  margin-top: 20px * @height;

  .userInfo {
    height: 200px;
    width: 100%;
    padding: 0 24px * @width;

    img {
      height: 100px * @height;
      width: 100px * @width;
      border-radius: 100%;
    }

    .username {
      margin: 16px * @height 0;
      font-size: 16px * @width;
      font-weight: 900;
      letter-spacing: 2px;
    }

    .contact {
      display: flex;
      justify-content: space-around;
      span {
        font-size: 36px;
      }
    }
  }
}

.el-tooltip__popper.is-light {
  border: none !important;
  background-color: rgba(94, 94, 94, 0.1) !important;
  height: 120px * @height !important;
  width: 120px * @width !important;
}
.tooltip {
  height: 100px * @height;
  width: 100px * @width;

  img {
    height: 100%;
    width: 100%;
  }
}
</style>