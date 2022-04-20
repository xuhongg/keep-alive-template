// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'amfe-flexible'; // 引入lib-flexible
import router from './router'
import './main.less'
import 'vant/lib/index.css'
import './plugins/vant.js'; // 引入vant
import '@vant/touch-emulator';
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
