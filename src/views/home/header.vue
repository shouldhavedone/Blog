<template>
  <div class="header-container">
    <div class="header-left">
      <div class="logo">
        <img src="../../assets/images/logo.png" />
      </div>
      <div class="nav-wrap">
        <div class="nav-item" v-for="(item, index) in navList" :key="index">
          <div>{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="header-right">
      <el-button size='small'>登录</el-button>
      <el-button size='small'>注册</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "blogHeader",

  data() {
    return {
      navList: [
        { name: "首页", url: "/" },
        { name: "文章", url: "/articles" },
        { name: "归档", url: "/articles" },
        { name: "项目", url: "/articles" },
        { name: "留言", url: "/articles" },
        { name: "历程", url: "/articles" },
        { name: "关于", url: "/articles" },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
@height: 100vh/960px;
@width: 100vw/1920px;
@height1: 60px * @height;

.header-container {
  height: @height1;
  width: 1200px * @width;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(238, 238, 238, 1);

  .header-left {
    flex: 3;
    display: flex;
  }

  .header-left .logo {
    width: 60px * @width;
    height: 100%;
    margin-right: 60px * @width;

    img {
      height: 52px * @height;
      width: 52px * @width;
      border-radius: 100%;
      border: 1px solid #ccc;
    }
  }

  .header-left .nav-wrap {
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;  
  }

  .header-right {
    flex: 1;
  }
}
</style>