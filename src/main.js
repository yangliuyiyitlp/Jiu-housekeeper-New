// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from './store/store'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '@/assets/icon_font/iconfont.css'
import VueResource from 'vue-resource'
import VueMoment from 'vue-moment'
import 'jquery'
import 'ztree'
import Axios from 'axios'
import global_ from './Global.vue'

Vue.prototype.$ajax = Axios
// Axios.defaults.baseURL = 'https://api.example.com'

Vue.prototype.GLOBAL = global_
// Axios.defaults.baseURL = global_.BASE_URL

Vue.use(VueMoment)
// global.$ = global.jQuery = $

Vue.use(VueResource)

Vue.http.options.root = 'http://172.16.20.235:10001/a'// baseUrl的设置

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueI18n)

// Moment开始
import Moment from 'moment'
// 声明全局过滤器
Vue.filter('convertDate', function (value) {
  return Moment(value).format('HH:mm:ss')
})
Vue.filter('AddDate', function (value) {
  var nevalue = new Date(value)
  return Moment(nevalue).format('YYYY-MM-DD HH:mm:ss')
})
// Moment：结束

// 注册全局组件 start
import Paginations from './components/commons/Paginations'
import DatePickers from './components/commons/DatePicker'
import FormSearch from './components/commons/FormSearch'

Vue.component('Paginations', Paginations)
Vue.component('DatePickers', DatePickers)
Vue.component('FormSearch', FormSearch)
// 注册全局组件 end

// 注册百度地图 start
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'IK5AlGXoZ23tDAGjldRalicbhdpsrKwE'
})
// 注册百度地图 end

// 富文本编辑器
import '../static/ueditor1_4_3_3/ueditor.config.js'
import '../static/ueditor1_4_3_3/ueditor.all.min.js'
import '../static/ueditor1_4_3_3/lang/zh-cn/zh-cn.js'
import '../static/ueditor1_4_3_3/ueditor.parse.min.js'

const i18n = new VueI18n({
  locale: getLanguage()
})

function getLanguage () {
  if (typeof Storage !== 'undefined') {
    let language = localStorage.language
    if (typeof language !== 'undefined') {
      return language
    } else {
      localStorage.language = 'cn'
    }
  }

  return 'cn'
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: {App}
})

