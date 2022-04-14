import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/app.scss'

// 3rd party plugins
import '@/plugins/vee-validate'
import '@/plugins/vue-toastification'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
