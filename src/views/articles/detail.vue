<template>
  <div>
    我是文章详情
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: '',
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    console.log(this.id)
  }
}
</script>
<style lang="less">
  
</style>