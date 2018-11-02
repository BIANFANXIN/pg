// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入包
import Vuex from 'vuex'
// 注册vuex到vue中
Vue.use(Vuex)
// new Vuex.Store()实例，得到一个数据储存对象
var store = new Vuex.Store({
  state: {
    // 可以把state想象成组件中的data，专门用来储存数据的
    // 如果在组件中，想要访问store中的数据，只能通过this.$store.state.***
    count: 0
  },
  mutations: {
   
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store // 将vuex创建store挂载到vm实例上，只要挂载到了vm上，任何组件都能使用store存取数据
})
