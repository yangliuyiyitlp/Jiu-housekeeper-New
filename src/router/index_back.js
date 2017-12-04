import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/commons/NotFound.vue'
import UserInfo from '@/pages/User/Userinfo.vue'
import UserPwd from '@/pages/User/Userpwd.vue'
import User from '@/pages/User/User.vue'
// 十大功能路由
import Setting from '@/pages/Setting/Setting.vue'
import Facility from '@/pages/Facility/Facility.vue'
import Content from '@/pages/Content/Content.vue'
import Status from '@/pages/Status/Status.vue'
import Vip from '@/pages/Vip/Vip.vue'
import Report from '@/pages/Report/Report.vue'
import City from '@/pages/City/City.vue'
import Service from '@/pages/Service/Service.vue'
import RedPacket from '@/pages/RedPacket/RedPacket.vue'
import Activity from '@/pages/Activity/Activity.vue'
// 登录页
import Home from '@/pages/Login/Home.vue'   // 为用户登录成功之后的主页
import Login from '@/pages/Login/Login.vue' // 为登录注册页

// 设备管理
import FacilityTabs from '@/pages/Facility/TabsMod.vue'
import FacilityInfo from '@/pages/Facility/bikessetting/FacilityInfo.vue'
import FacilityCount from '@/pages/Facility/bikessetting/FacilityCount.vue'
import FacilityDetailed from '@/pages/Facility/bikessetting/FacilityDetailed.vue'
import FacilityState from '@/pages/Facility/bikessetting/FacilityState.vue'
import RegisterMod from '@/pages/Facility/RegisterMod.vue'
import FacilityUnbund from '@/pages/Facility/bikessetting/FacilityUnbund.vue'
// setting相关
import SettingUser from '@/pages/Setting/User/User.vue'
import SettingMechanism from '@/pages/Setting/User/Mechanism.vue'
import SettingArea from '@/pages/Setting/User/Area.vue'
import SettingMenu from '@/pages/Setting/System/Menu.vue'
import SettingRole from '@/pages/Setting/System/Role.vue'
import SettingDictionary from '@/pages/Setting/System/Dictionary.vue'
import SettingDaily from '@/pages/Setting/Daily/Daily.vue'
import SettingConnectControl from '@/pages/Setting/Daily/ConnectControl.vue'
import SettingAbout from '@/pages/Setting/About.vue'
// content 相关
import ContentRelease from '@/pages/Content/ContentRelease.vue'
import ContentComment from '@/pages/Content/ContentComment.vue'
import ContentPublicMessage from '@/pages/Content/ContentPublicMessage.vue'
import ContentInformationTotal from '@/pages/Content/ContentInformationTotal.vue'
import ContentColumn from '@/pages/Content/ContentColumn.vue'
import ContentColumnUpdate from '@/pages/Content/ContentColumnUpdate.vue'
import ContentColumnNew from '@/pages/Content/ContentColumnNew.vue'
import ContentSiteSetting from '@/pages/Content/ContentSiteSetting.vue'
import ContentSiteSwitch from '@/pages/Content/ContentSiteSwitch.vue'
// status相关
import StatusBikeMap from '@/pages/Status/StatusBikeMap.vue'
import StatusHeatchart from '@/pages/Status/StatusHeatchart.vue'
import StatusGovernment from '@/pages/Status/StatusGovernment.vue'
import StatusCity from '@/pages/Status/StatusCity.vue'
import StatusBikeArea from '@/pages/Status/StatusBikeArea.vue'
// vip相关
import VipInfo from '@/pages/Vip/VipInfo.vue'
import VipInviteList from '@/pages/Vip/VipInviteList.vue'
import VipInviteTotal from '@/pages/Vip/VipInviteTotal.vue'
// report相关
import ReportVip from '@/pages/Report/ReportVip.vue'
import ReportManualReturn from '@/pages/Report/ReportManualReturn.vue'
import ReportTransaction from '@/pages/Report/ReportTransaction.vue'
import ReportTransactionNow from '@/pages/Report/ReportTransactionNow.vue'
import ReportReplaceBattery from '@/pages/Report/ReportReplaceBattery.vue'
import ReportRecharge from '@/pages/Report/ReportRecharge.vue'
// city 相关
import CityBikeInterveneList from '@/pages/City/CityBikeInterveneList.vue'
import CityCompanyInfo from '@/pages/City/CityCompanyInfo.vue'
import CityOperator from '@/pages/City/CityOperator.vue'
import CityRemote from '@/pages/City/CityRemote.vue'
import CityRange from '@/pages/City/CityRange.vue'
import CityPoint from '@/pages/City/CityPoint.vue'
import CityAreaTotal from '@/pages/City/CityAreaTotal.vue'
import CityBlacklist from '@/pages/City/CityBlacklist.vue'
// 客服管理相关
import ServiceChangeCredit from '@/pages/Service/ServiceChangeCredit.vue'
import ServiceChangePhone from '@/pages/Service/ServiceChangePhone.vue'
import ServiceFeedback from '@/pages/Service/ServiceFeedback.vue'
import ServiceViolation from '@/pages/Service/ServiceViolation.vue'
import ServiceOperation from '@/pages/Service/ServiceOperation.vue'
// 红包管理相关
import RedPacketClick from '@/pages/RedPacket/RedPacketClick.vue'
import RedPacketConfig from '@/pages/RedPacket/RedPacketConfig.vue'
import RedPacketCash from '@/pages/RedPacket/RedPacketCash.vue'
// 活动中心
import ActivityMessage from '@/pages/Activity/ActivityMessage.vue'
import ActivityMessagePlan from '@/pages/Activity/ActivityMessagePlan.vue'
import ActivityEnjoy from '@/pages/Activity/ActivityEnjoy.vue'
import ActivityConfig from '@/pages/Activity/ActivityConfig.vue'
import ActivityCoupon from '@/pages/Activity/ActivityCoupon.vue'
import ActivityInviteDetail from '@/pages/Activity/ActivityInviteDetail.vue'
import ActivityCouponReceive from '@/pages/Activity/ActivityCouponReceive.vue'
import ActivityInviteList from '@/pages/Activity/ActivityInviteList.vue'
import ActivityConfigIcon from '@/pages/Activity/Zombie/ActivityConfigIcon.vue'
import ActivityInMobi from '@/pages/Activity/ActivityInMobi.vue'
import ActivityCouponDetails from '@/pages/Activity/ActivityCoupon/CouponDetails.vue'
import ActivityHealth from '@/pages/Activity/ActivityMonth/ActivityHealth.vue'
import ActivityRedrain from '@/pages/Activity/ActivityMonth/ActivityRedrain.vue'

Vue.use(Router)

//  login页面存token后 添加路由
import { getCookie } from '../assets/js/cookie.js'
// 获取动态路由
// import { getRouterPath } from '../assets/js/getRouter'
// let routerArr = getRouterPath(JSON.parse(sessionStorage.getItem('menus')))
// export function getRouterPath (menus) {
//   if (menus === undefined) {
//     return null
//   } else {
//     let routers = []
//     // 拿到每个一级菜单,类型是数组
//     for (let key in menus) {
//       let router = {}
//       router.path = '/' + key
//       router.name = key
//       router.component = firstUpperCase(key)
//       router.children = []
//       let firstMenuArr = menus[key]
//       if (firstMenuArr instanceof Array && firstMenuArr.length > 0) {
//         // 遍历一级菜单数组
//         for (let i = 0; i < firstMenuArr.length; i++) {
//           let firstMenu = firstMenuArr[i]
//           // 遍历一级菜单的每个属性
//           for (let firstMenuKey in firstMenu) {
//             if (firstMenuKey === 'name') {
//               let childRouter = {}
//               // 说明没有children
//               childRouter.name = firstMenu[firstMenuKey]
//               childRouter.path = '/' + firstMenu[firstMenuKey].replace('.', '/')
//               childRouter.component = firstUpperCase(dotConvert2Camel(firstMenu[firstMenuKey]))
//               router.children.push(childRouter)
//               continue
//             } else if (firstMenuKey === 'children') {
//               let secMenuArr = firstMenu.children
//               // 二级菜单数组
//               if (secMenuArr instanceof Array && secMenuArr.length > 0) {
//                 for (let j = 0; j < secMenuArr.length; j++) {
//                   let secMenu = secMenuArr[j]
//                   if (secMenu.name !== undefined && secMenu.name !== '') {
//                     let childRouter = {}
//                     childRouter.name = secMenu.name
//                     childRouter.path = '/' + secMenu.name.replace('.', '/')
//                     childRouter.component = firstUpperCase(dotConvert2Camel(secMenu.name))
//                     router.children.push(childRouter)
//                     continue
//                   }
//                 }
//               }
//             }
//           }
//         }
//       } else {
//         // 一级目录对应的不是数组的情况
//       }
//       routers.push(router)
//     }
//     console.log(JSON.stringify(routers))
//     // let router1 = new Router({
//     //   routes: routers
//     // })
//     // console.log(JSON.stringify(router1))
//     return null
//   }
// }

// 首字母大写方法
// function firstUpperCase (s) {
//   if (s === undefined) {
//     return ''
//   }
//   return s.replace(/^\S/, function (s) { return s.toUpperCase() })
// }

// function dotConvert2Camel (s) {
//   if (s === undefined) {
//     return ''
//   } else {
//     let result = ''
//     s = s.split('.')
//     let length = s.length
//     for (let i = 0; i < length; i++) {
//       result = result + firstUpperCase(s[i])
//     }
//     return result
//   }
// }

// let routes = [
//   {path: '/', redirect: {name: 'Login'}}, // 不能同名
//   {path: '/login', name: 'Login', component: Login},
//   {path: '/home', name: 'Home', component: Home},
//   {path: '*', component: NotFound}
// ]
let routes = [
  {path: '/', redirect: {name: 'Login'}}, // 不能同名
  {path: '/login', name: 'Login', component: Login},
  {path: '/home', name: 'Home', component: Home},
  {
    path: '/user',
    name: 'User',
    component: User,
    children: [
      {name: 'user.info', path: '/user/info', component: UserInfo},
      {name: 'user.pwd', path: '/user/pwd', component: UserPwd}
    ]
  },
  {
    path: '/facility',
    name: 'facility',
    component: Facility,
    children: [
      {name: 'tabs', path: '/facility/tabs', component: FacilityTabs},
      {name: 'info', path: '/facility/info', component: FacilityInfo},
      {name: 'count', path: '/facility/count', component: FacilityCount},
      {name: 'detailed', path: '/facility/detailed', component: FacilityDetailed},
      {name: 'state', path: '/facility/state', component: FacilityState},
      {name: 'register', path: '/facility/register', component: RegisterMod},
      {name: 'unbund', path: '/facility/unbund', component: FacilityUnbund}
    ]
  },
  {
    path: '/setting',
    name: 'setting',
    component: Setting,
    children: [
      // setting相关
      {path: '/setting/user', name: 'setting.user', component: SettingUser},
      {path: '/setting/mechanism', name: 'setting.mechanism', component: SettingMechanism},
      {path: '/setting/area', name: 'setting.area', component: SettingArea},
      {path: '/setting/menu', name: 'setting.menu', component: SettingMenu},
      {path: '/setting/role', name: 'setting.role', component: SettingRole},
      {path: '/setting/dictionary', name: 'setting.dictionary', component: SettingDictionary},
      {path: '/setting/daily', name: 'setting.daily', component: SettingDaily},
      {path: '/setting/connect/control', name: 'setting.connect.control', component: SettingConnectControl},
      {path: '/setting/about', name: 'setting.about', component: SettingAbout}
    ]
  },
  {
    path: '/content',
    name: 'content',
    component: Content,
    children: [
      // content相关
      {path: '/content/release', name: 'content.release', component: ContentRelease},
      {path: '/content/comment', name: 'content.comment', component: ContentComment},
      {path: '/content/public/message', name: 'content.public.message', component: ContentPublicMessage},
      {path: '/content/information/total', name: 'content.information.total', component: ContentInformationTotal},
      {path: '/content/column', name: 'content.column', component: ContentColumn},
      {path: '/content/site/setting', name: 'content.site.setting', component: ContentSiteSetting},
      {path: '/content/site/switch', name: 'content.site.switch', component: ContentSiteSwitch},
      {path: '/content/column/update', name: 'content.column.update', component: ContentColumnUpdate},
      {path: '/content/column/new', name: 'content.column.new', component: ContentColumnNew}
    ]
  },
  {
    path: '/status',
    name: 'status',
    component: Status,
    children: [
      // status相关
      {path: '/status/bike/map', name: 'status.bike.map', component: StatusBikeMap},
      {path: '/status/heatchart', name: 'status.heatchart', component: StatusHeatchart},
      {path: '/status/government', name: 'status.government', component: StatusGovernment},
      {path: '/status/city', name: 'status.city', component: StatusCity},
      {path: '/status/bike/area', name: 'status.bike.area', component: StatusBikeArea}
    ]
  },
  {
    path: '/vip',
    name: 'vip',
    component: Vip,
    children: [
      // vip相关
      {path: '/vip/info', name: 'vip.info', component: VipInfo},
      {path: '/vip/invite/list', name: 'vip.invite.list', component: VipInviteList},
      {path: '/vip/invite/total', name: 'vip.invite.total', component: VipInviteTotal}
    ]
  },
  {
    path: '/report',
    name: 'report',
    component: Report,
    children: [
      // report相关
      {path: '/report/vip', name: 'report.vip', component: ReportVip},
      {path: '/report/manual/return', name: 'report.manual.return', component: ReportManualReturn},
      {path: '/report/transaction', name: 'report.transaction', component: ReportTransaction},
      {path: '/report/transaction/now', name: 'report.transaction.now', component: ReportTransactionNow},
      {path: '/report/replace/battery', name: 'report.replace.battery', component: ReportReplaceBattery},
      {path: '/report/recharge', name: 'report.recharge', component: ReportRecharge}
    ]
  },
  {
    path: '/city',
    name: 'city',
    component: City,
    children: [
      // city 相关
      {path: '/city/bike/intervene/list', name: 'city.bike.intervene.list', component: CityBikeInterveneList},
      {path: '/city/company/info', name: 'city.company.info', component: CityCompanyInfo},
      {path: '/city/operator', name: 'city.operator', component: CityOperator},
      {path: '/city/remote', name: 'city.remote', component: CityRemote},
      {path: '/city/range', name: 'city.range', component: CityRange},
      {path: '/city/point', name: 'city.point', component: CityPoint},
      {path: '/city/area/total', name: 'city.area.total', component: CityAreaTotal},
      {path: '/city/blacklist', name: 'city.blacklist', component: CityBlacklist}
    ]
  },
  {
    path: '/service',
    name: 'service',
    component: Service,
    children: [
      // 客服管理相关
      {path: '/service/change/credit', name: 'service.change.credit', component: ServiceChangeCredit},
      {path: '/service/change/phone', name: 'service.change.phone', component: ServiceChangePhone},
      {path: '/service/feedback', name: 'service.feedback', component: ServiceFeedback},
      {path: '/service/violation', name: 'service.violation', component: ServiceViolation},
      {path: '/service/operation', name: 'service.operation', component: ServiceOperation}
    ]
  },
  {
    path: '/redpacket',
    name: 'redpacket',
    component: RedPacket,
    children: [
      // 红包管理相关
      {path: '/redpacket/click', name: 'redpacket.click', component: RedPacketClick},
      {path: '/redpacket/config', name: 'redpacket.config', component: RedPacketConfig},
      {path: '/redpacket/cash', name: 'redpacket.cash', component: RedPacketCash}
    ]
  },
  {
    path: '/activity',
    name: 'activity',
    component: Activity,
    children: [
      // 活动中心
      {path: '/activity/message', name: 'activity.message', component: ActivityMessage},
      {path: '/activity/message/plan', name: 'activity.message.plan', component: ActivityMessagePlan},
      {path: '/activity/enjoy', name: 'activity.enjoy', component: ActivityEnjoy},
      {path: '/activity/config', name: 'activity.config', component: ActivityConfig},
      {path: '/activity/coupon', name: 'activity.coupon', component: ActivityCoupon},
      {path: '/activity/invite/detail', name: 'activity.invite.detail', component: ActivityInviteDetail},
      {path: '/activity/coupon/receive', name: 'activity.coupon.receive', component: ActivityCouponReceive},
      {path: '/activity/invite/list', name: 'activity.invite.list', component: ActivityInviteList},
      {path: '/activity/config/icon', name: 'activity.config.icon', component: ActivityConfigIcon},
      {path: '/activity/inmobi', name: 'activity.inmobi', component: ActivityInMobi},
      {path: '/activity/coupon/details', name: 'activity.coupon.details', component: ActivityCouponDetails},
      {path: '/activity/health', name: 'activity.health', component: ActivityHealth},
      {path: '/activity/red/rain', name: 'activity.red.rain', component: ActivityRedrain}
    ]
  },
  {path: '*', component: NotFound}
]
let baseRoute = routes
// if (getCookie('token') !== '') {
//   // 初始路由
//   console.log(2, JSON.stringify(routes))
//   baseRoute = routes
//   // routes = routes.concat(routerArr)
//   // 初始路由结束
// } else {
//   baseRoute = [{path: '/', redirect: {name: 'Login'}},
//     {path: '/login', name: 'Login', component: Login}]
// }

let router = new Router({
  routes: baseRoute
})

// router.beforeEach((to, from, next) => {
//   let routeName = to.name
//   window.document.title = (routeName ? routeName + ' - ' : '') + '赳赳后台管理系统'
//   // let userInfo = sessionStorage.getItem('menus')
//   next()
// })
export default router

// export default new Router({
//   routes: [
//     {path: '/', redirect: {name: 'Login'}}, // 不能同名
//     {path: '/login', name: 'Login', component: Login},
//     {path: '/main', name: 'Main', component: Main},
//     {path: '/home', name: 'Home', component: Home},
//     {
//       path: '/user',
//       name: 'User',
//       component: User,
//       children: [
//         {name: 'user.info', path: '/user/info', component: UserInfo},
//         {name: 'user.pwd', path: '/user/pwd', component: UserPwd}
//       ]
//     },
//     {
//       path: '/facility',
//       name: 'facility',
//       component: Facility,
//       children: [
//         {name: 'tabs', path: '/facility/tabs', component: FacilityTabs},
//         {name: 'info', path: '/facility/info', component: FacilityInfo},
//         {name: 'count', path: '/facility/count', component: FacilityCount},
//         {name: 'detailed', path: '/facility/detailed', component: FacilityDetailed},
//         {name: 'state', path: '/facility/state', component: FacilityState},
//         {name: 'register', path: '/facility/register', component: RegisterMod},
//         {name: 'unbund', path: '/facility/unbund', component: FacilityUnbund}
//       ]
//     },
//     {
//       path: '/setting',
//       name: 'setting',
//       component: Setting,
//       children: [
//         // setting相关
//         {path: '/setting/user', name: 'setting.user', component: SettingUser},
//         {path: '/setting/mechanism', name: 'setting.mechanism', component: SettingMechanism},
//         {path: '/setting/area', name: 'setting.area', component: SettingArea},
//         {path: '/setting/menu', name: 'setting.menu', component: SettingMenu},
//         {path: '/setting/role', name: 'setting.role', component: SettingRole},
//         {path: '/setting/dictionary', name: 'setting.dictionary', component: SettingDictionary},
//         {path: '/setting/daily', name: 'setting.daily', component: SettingDaily},
//         {path: '/setting/connect/control', name: 'setting.connect.control', component: SettingConnectControl},
//         {path: '/setting/about', name: 'setting.about', component: SettingAbout}
//       ]
//     },
//     {
//       path: '/content',
//       name: 'content',
//       component: Content,
//       children: [
//         // content相关
//         {path: '/content/release', name: 'content.release', component: ContentRelease},
//         {path: '/content/comment', name: 'content.comment', component: ContentComment},
//         {path: '/content/public/message', name: 'content.public.message', component: ContentPublicMessage},
//         {path: '/content/information/total', name: 'content.information.total', component: ContentInformationTotal},
//         {path: '/content/column', name: 'content.column', component: ContentColumn},
//         {path: '/content/site/setting', name: 'content.site.setting', component: ContentSiteSetting},
//         {path: '/content/site/switch', name: 'content.site.switch', component: ContentSiteSwitch},
//         {path: '/content/column/update', name: 'content.column.update', component: ContentColumnUpdate},
//         {path: '/content/column/new', name: 'content.column.new', component: ContentColumnNew}
//       ]
//     },
//     {
//       path: '/status',
//       name: 'status',
//       component: Status,
//       children: [
//         // status相关
//         {path: '/status/bike/map', name: 'status.bike.map', component: StatusBikeMap},
//         {path: '/status/heatchart', name: 'status.heatchart', component: StatusHeatchart},
//         {path: '/status/government', name: 'status.government', component: StatusGovernment},
//         {path: '/status/city', name: 'status.city', component: StatusCity},
//         {path: '/status/bike/area', name: 'status.bike.area', component: StatusBikeArea}
//       ]
//     },
//     {
//       path: '/vip',
//       name: 'vip',
//       component: Vip,
//       children: [
//         // vip相关
//         {path: '/vip/info', name: 'vip.info', component: VipInfo},
//         {path: '/vip/invite/list', name: 'vip.invite.list', component: VipInviteList},
//         {path: '/vip/invite/total', name: 'vip.invite.total', component: VipInviteTotal}
//       ]
//     },
//     {
//       path: '/report',
//       name: 'report',
//       component: Report,
//       children: [
//         // report相关
//         {path: '/report/vip', name: 'report.vip', component: ReportVip},
//         {path: '/report/manual/return', name: 'report.manual.return', component: ReportManualReturn},
//         {path: '/report/transaction', name: 'report.transaction', component: ReportTransaction},
//         {path: '/report/transaction/now', name: 'report.transaction.now', component: ReportTransactionNow},
//         {path: '/report/replace/battery', name: 'report.replace.battery', component: ReportReplaceBattery},
//         {path: '/report/recharge', name: 'report.recharge', component: ReportRecharge}
//       ]
//     },
//     {
//       path: '/city',
//       name: 'city',
//       component: City,
//       children: [
//         // city 相关
//         {path: '/city/bike/intervene/list', name: 'city.bike.intervene.list', component: CityBikeInterveneList},
//         {path: '/city/company/info', name: 'city.company.info', component: CityCompanyInfo},
//         {path: '/city/operator', name: 'city.operator', component: CityOperator},
//         {path: '/city/remote', name: 'city.remote', component: CityRemote},
//         {path: '/city/range', name: 'city.range', component: CityRange},
//         {path: '/city/point', name: 'city.point', component: CityPoint},
//         {path: '/city/area/total', name: 'city.area.total', component: CityAreaTotal},
//         {path: '/city/blacklist', name: 'city.blacklist', component: CityBlacklist}
//       ]
//     },
//     {
//       path: '/service',
//       name: 'service',
//       component: Service,
//       children: [
//         // 客服管理相关
//         {path: '/service/change/credit', name: 'service.change.credit', component: ServiceChangeCredit},
//         {path: '/service/change/phone', name: 'service.change.phone', component: ServiceChangePhone},
//         {path: '/service/feedback', name: 'service.feedback', component: ServiceFeedback},
//         {path: '/service/violation', name: 'service.violation', component: ServiceViolation},
//         {path: '/service/operation', name: 'service.operation', component: ServiceOperation}
//       ]
//     },
//     {
//       path: '/redpacket',
//       name: 'redpacket',
//       component: RedPacket,
//       children: [
//         // 红包管理相关
//         {path: '/redpacket/click', name: 'redpacket.click', component: RedPacketClick},
//         {path: '/redpacket/config', name: 'redpacket.config', component: RedPacketConfig},
//         {path: '/redpacket/cash', name: 'redpacket.cash', component: RedPacketCash}
//       ]
//     },
//     {
//       path: '/activity',
//       name: 'activity',
//       component: Activity,
//       children: [
//         // 活动中心
//         {path: '/activity/message', name: 'activity.message', component: ActivityMessage},
//         {path: '/activity/message/plan', name: 'activity.message.plan', component: ActivityMessagePlan},
//         {path: '/activity/enjoy', name: 'activity.enjoy', component: ActivityEnjoy},
//         {path: '/activity/config', name: 'activity.config', component: ActivityConfig},
//         {path: '/activity/coupon', name: 'activity.coupon', component: ActivityCoupon},
//         {path: '/activity/invite/detail', name: 'activity.invite.detail', component: ActivityInviteDetail},
//         {path: '/activity/coupon/receive', name: 'activity.coupon.receive', component: ActivityCouponReceive},
//         {path: '/activity/invite/list', name: 'activity.invite.list', component: ActivityInviteList},
//         {path: '/activity/config/icon', name: 'activity.config.icon', component: ActivityConfigIcon},
//         {path: '/activity/inmobi', name: 'activity.inmobi', component: ActivityInMobi},
//         {path: '/activity/coupon/details', name: 'activity.coupon.details', component: ActivityCouponDetails},
//         {path: '/activity/health', name: 'activity.health', component: ActivityHealth},
//         {path: '/activity/red/rain', name: 'activity.red.rain', component: ActivityRedrain}
//       ]
//     },
//     {path: '*', component: NotFound}
//   ]
// })