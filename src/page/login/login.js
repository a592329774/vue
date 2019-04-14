import Vue from 'vue'
import Login from '@/components/Login'

Vue.config.productionTip = false
/* eslint-disable no-new */
console.log('login') ;
new Vue({
  el: '#app',
  components: { Login },
  template: '<Login/>'
})
