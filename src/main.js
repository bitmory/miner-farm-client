import Vue from 'vue'
import App from './App.vue'
import router from './router'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.use(elementUi)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
