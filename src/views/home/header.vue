<template>
  <div class="header-container">
    <div class="header-wrap">
      <div class="header-left">
        <div class="logo">
          <img src="../../assets/images/logo.png" />
        </div>
        <div class="nav-wrap">
          <div
            class="nav-item"
            :class="activeIndex == index ? 'active' : ''"
            v-for="(item, index) in navList"
            :key="index"
            @click="changeIndex(index)"
          >
            {{ item.name }}
          </div>
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
        { name: "归档", url: "/articles" },
        { name: "项目", url: "/articles" },
        { name: "历程", url: "/articles" },
        { name: "关于", url: "/articles" },
      ],
      activeIndex: 0,
    };
  },

  methods: {
    changeIndex(index) {
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
}

.header-wrap {
  width: 1200px * @width;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
      height: @height1;
      width: 100%;
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