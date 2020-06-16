import Vue from 'vue'
import App from './App.vue'
import VueGtag from "vue-gtag";
import VueCookies from "vue-cookies";

// vue-scrollto
var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo, { offset: -55 })

// vue-gtag
Vue.use(VueGtag, {
  config: { id: 'UA-169423151-1' },
  bootstrap: VueCookies.isKey("tc")
});

Vue.config.productionTip = false // todo

new Vue({
  render: h => h(App),
}).$mount('#app')

