<template>
  <div class="home-container">
    <el-backtop></el-backtop>
    <cheader></cheader>
    <div class="content-wrap">
      <div class="content">
        <div class="left-wrap">
          <router-view></router-view>
        </div>
        <cside v-if="isShowSlider" class="right-wrap"></cside>
      </div>
      <cfooter></cfooter>
    </div>
  </div>
</template>
<script>
import cheader from "./header";
import cside from "./side";
import cfooter from "./footer";
export default {
  name: "homeContainer",
  components: {
    cheader,
    cside,
    cfooter,
  },

  data() {
    return {
      isShowSlider: true,
    };
  },
};
</script>
<style lang="less" scoped>
@height: 100vh/960px;
@width: 100vw/1920px;
@height1: 60px * @height;

.home-container {
  height: 100%;
  width: 100%;
  margin: 0 auto;

  .content {
    width: 1200px;
    height: calc(100% - @height1);
    margin: 0 auto;
    display: flex;
    padding: 20px * @height 0;
  }

  .left-wrap {
    width: 71%;
    height: 100%;
  }

  .right-wrap {
    width: 28%;
    height: 100%;
  }
}
</style>