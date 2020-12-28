<template>
  <div class="home-container">
    <cheader></cheader>
    <el-scrollbar>
      <router-view
        v-if="!$route.meta.keepalive"
        :key="$route.path"
      ></router-view>
    </el-scrollbar>
  </div>
</template>
<script>
import cheader from './header'
export default {
  name: "homeContainer",
  components: {
    cheader,
  }
};
</script>
<style lang="less" scoped>
@height: 100vh/960px;
@width: 100vw/1920px;
@height1: 60px * @height;

.home-container {
  height: 100%;
  width: 100%;
  text-align: center;
  margin: 0 auto;

  .el-scrollbar {
  width: 1200px * @width;

    height: calc(100% - @height1);
  }
}
</style>