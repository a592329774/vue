import Vue from 'vue'
import Success from '@/../src/components/Success'
Vue.config.productionTip = false
/* eslint-disable no-new */
console.log('success');
new Vue({
  el: '#app',
  components: { Success },
  template: '<Success/>'
})
