import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// eslint-disable-next-line
import style from './assets/superfeed.css'

window.FIG1_URL = 'https://staging-app.figure1.com/mock/feed';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
