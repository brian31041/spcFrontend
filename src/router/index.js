import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '../components/Main/mainPage'
import prodPage from '../components/Product/prodPage'
import login from '../components/Member/mebLogin'
import member from '../components/Member/mebPage.vue'
import cart from '..//components/Cart/cartPage.vue'
// import cartBuyerDetail from '..//components/Cart/cartBuyerDetail.vue'
import cartPayOK from '../components/Cart/cartPayOk.vue'
import prodPomote from '../components/Article/prodPromote.vue'
import AnonymousSearch from '../components/Order/AnonymousSearch.vue'
import QandA from '../components/Other/QandA.vue'
// import axios from 'axios'
import Cookies from 'js-cookie'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'main',
      component: mainPage
    },
    {
      path: '/product/:prodID',
      name: 'product',
      component: prodPage
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/member',
      name: 'member',
      component: member
    },
    {
      path: '/AnonymousSearch',
      name: 'AnonymousSearch',
      component: AnonymousSearch
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
      // beforeEnter: (to, from, next) => {
      //   axios({
      //     method: 'get',
      //     url: '/api/Ecpay/Get'
      //   }).then(val => {
      //     alert(val)
      //   })
      //   next()
      // }
    },
    // {
    //   path: '/cartBuyerDetail',
    //   name: 'cartBuyerDetail',
    //   component: cartBuyerDetail
    // },
    {
      path: '/cartPayOK',
      name: 'cartPayOK',
      component: cartPayOK
    },
    {
      path: '/prodPromte/:articalID/:prodID',
      name: 'prodPromte',
      component: prodPomote
    },
    {
      path: '/QandA',
      component: QandA
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log(to.fullPath)
  Cookies.set('userlastUrl', to.fullPath)
  // 進入商品按鈕可能消失，故觸動顯示
  if (document.getElementById('wh-widget-send-button') !== null) {
    document.getElementById('wh-widget-send-button').style.visibility = 'visible'
  }
  next()
})
export default router
