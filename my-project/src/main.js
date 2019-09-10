import Vue from 'vue'
import App from './App.vue'
// import Users from "./components/Users"
// import Header from './components/Header'

Vue.config.productionTip = false

//全局注册组件 ("调用组件的名字"，定义的对象)
// Vue.component("users",Users)
// Vue.component("header",Header);

new Vue({
  render: h => h(App),
}).$mount('#app')
