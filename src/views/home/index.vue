<template>
  <div>
    <div class="header">我是头部</div>
    <el-scrollbar style="height: 100%">
      <router-view v-if="!$route.meta.keepalive" :key="$route.path"></router-view>
    </el-scrollbar>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less">
  .header {
    height: 100px;
    width: 100%;
  }
</style>