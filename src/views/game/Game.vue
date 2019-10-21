<template>
  <div id="game">
    game
  </div>
</template>

<script>
import api from '@/assets/js/game.api';
export default {
  name: 'game',
  created() {
    console.log(api, 'api');
  }
}
</script>

<style lang="less" scoped>
#game {
  width: 100%;
  min-height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
