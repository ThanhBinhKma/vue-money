import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'
import router from './router'

Vue.use(VueCompositionAPI)
Vue.use(Element)

const app = createApp({
  router,
  render: () => h(App)
})

app.mount('#app')
