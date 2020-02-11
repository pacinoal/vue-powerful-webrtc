import Vue from 'vue'
import App from './App.vue'
require('webrtc-adapter');
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
