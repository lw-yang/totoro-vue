import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Toast} from 'vant';
import { Notify } from 'vant';

Vue.use(Notify);
Vue.use(Toast);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
