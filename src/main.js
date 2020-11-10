import Vue from 'vue'
import App from './App.vue'
import router from "./router";

import "./styles/skeleton.css";
import "./styles/normalize.css";
import "./styles/site.less";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
