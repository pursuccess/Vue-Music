import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import store from './store'

import './common/stylus/index.styl'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('common/image/default.png'),
  loading: require('common/image/default.png'),
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
