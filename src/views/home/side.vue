<template>
  <div class="side-wrap">
    <div class="userInfo">
      <img src="../../assets/images/avatar.jpg" />
      <div class="username">个人博客</div>
      <div class="contact">
        <el-tooltip effect="light" placement="top">
          <div slot="content" class="tooltip">
            <img src="../../assets/images/qq.jpg" />
          </div>
          <span class="iconfont iconQQ"></span>
        </el-tooltip>
        <el-tooltip effect="light" placement="top">
          <div slot="content" class="tooltip">
            <img src="../../assets/images/wechat.png" />
          </div>
          <span class="iconfont iconicon-test5"></span>
        </el-tooltip>
        <el-tooltip effect="light" placement="top">
          <div slot="content" class="tooltip">
            <img src="../../assets/images/dingtalk.jpg" />
          </div>
          <span class="iconfont icondingtalk"></span>
        </el-tooltip>
        <a href="https://github.com/shouldhavedone" target="_block"
          ><span class="iconfont iconicon-test3"></span
        ></a>
        <el-tooltip effect="light" placement="top" content="570143006@qq.com">
          <span class="iconfont iconemail"></span>
        </el-tooltip>
      </div>
    </div>

    <div class="tag-cloud">
      <div>标签云</div>
      <ul class="cloud">
        <li>vue.js</li>
        <li>数据结构</li>
        <li>算法</li>
        <li>react</li>
        <li>mongoose</li>
        <li>JavaScript</li>
        <li>简历</li>
        <li>浏览器</li>
        <li>node</li>
        <li>webpack</li>
      </ul>
    </div>

    <!-- <div class="hot-articles">热门文章</div>
    <div class="top-articles">置顶文章</div> -->
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
  text-align: center;

  .userInfo {
    height: 200px;
    width: 100%;
    padding: 0 24px * @width;
    border-bottom: 1px solid rgba(228, 228, 228, 1);

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
        cursor: pointer;
        color: #333333;
      }
    }
  }

  .tag-cloud {
    height: 200px;
    width: 100%;
    padding: 16px * @height 24 * @width;
    cursor: pointer;

    &>div:first-child {
      margin-bottom: 10px * @height;
      font-weight: 700;
    }
    .cloud {
      display: inline;
      list-style-type: none;
      width: 100%;
    }
    .cloud li {
      font-size: 16px * @width;
      list-style: none;
      display: inline-block;
      background-color: #eee;
      padding: 6px 8px;
      margin: 6px;
    }
    .cloud li:hover {
      color: #409eff;
    }
  }
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