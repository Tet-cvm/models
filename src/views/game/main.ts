import Vue from 'vue'
import Game from './Game.vue'
import router from './router'
import store from './store'
import '@/assets/css/common.css'
import '@/assets/js/common.js'
import vConsole from 'vconsole';
process.env.VUE_APP_TITLE === "production" ? '':new vConsole();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Game)
}).$mount('#game')
