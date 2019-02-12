import Vue from 'vue'
import ElementUi from 'element-ui'
import App from './App.vue'
import router from './routes'
import store from './stores'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/base.css'

Vue.config.productionTip = false
Vue.use(ElementUi)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
