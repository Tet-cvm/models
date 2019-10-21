<template>
  <div id="model">
    model
  </div>
</template>

<script>
import api from '@/assets/js/model.api';
export default {
  name: 'model',
  created() {
    console.log(api, 'api');
  }
}
</script>

<style lang="less" scoped>
#model {
  width: 100%;
  min-height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
