import Vue from 'vue'
import App from './App.vue'
var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo, { offset: -55 })
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
