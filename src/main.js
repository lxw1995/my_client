import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false

// 全局资源 主程序(main.js|app.vue) | providerPlugin webpack插件
// 易于优化


// 设置字体比例，基础样式normal，base)
// 引入通用样式

import './assets/css/base.css'     //src相对路劲
//引入字体比例控制
import './assets/js/font.js'

//引入路由的配置
import router from './plugins/router.js'

//引入axios插件配置
import './plugins/axios'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
