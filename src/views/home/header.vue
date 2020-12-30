<template>
  <div class="header-container">
    <div class="header-wrap">
      <div class="header-left">
        <div class="logo">
          <img src="../../assets/images/logo.png" />
        </div>
        <div class="nav-wrap">
          <template v-for="(item, index) in navList">
            <router-link class="nav-item" :to="item.url" :key="index" exact >
              <div
                :class="activeIndex == index ? 'active' : ''"
                @click="changeIndex(item, index)"
              >
                {{ item.name }}
              </div>
            </router-link>
          </template>
        </div>
      </div>
      <div class="header-right">
        <el-button type="primary" size="small">登录</el-button>
        <el-button type="danger" size="small">注册</el-button>
      </div>
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
        { name: "归档", url: "/archive" },
        { name: "项目", url: "/project" },
        { name: "历程", url: "/timeline" },
        { name: "留言", url: "/message" },
        { name: "关于", url: "/about" },
      ],
      activeIndex: 0,
    };
  },

  methods: {
    changeIndex(item, index) {
      this.activeIndex = index;
    },
  },
};
</script>
<style lang="less" scoped>
@height: 100vh/960px;
@width: 100vw/1920px;
@height1: 60px * @height;

.header-container {
  height: @height1;
  width: 100%;
  border-bottom: 1px solid rgba(238, 238, 238, 1);
  position: fixed;
  z-index: 2;
  background-color: #fff;
}

.header-wrap {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  .header-left {
    flex: 4;
    display: flex;
    align-items: center;
  }

  .header-left .logo {
    width: 60px * @width;
    height: 100%;
    margin-right: 84px * @width;

    img {
      height: 52px * @height;
      width: 52px * @width;
      border-radius: 100%;
      border: 1px solid #ccc;
    }
  }

  .active {
    border-bottom: 2px solid #409eff;
    color: #409eff;
  }

  .header-left .nav-wrap {
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .nav-item {
      flex: 1;
      height: @height1;
      // width: 100%;
      line-height: @height1;
    }
  }

  .header-right {
    flex: 3;
    text-align: right;
    padding-right: 50px * @width;
  }
}
</style>