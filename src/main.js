import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Col, Row, Search, Tab, Tabs, Swipe, SwipeItem, Tabbar, TabbarItem } from 'vant';

Vue.config.productionTip = false
Vue.use(Button).use(Col).use(Row).use(Search)
.use(Tab).use(Tabs)
.use(Swipe).use(SwipeItem)
.use(Tabbar).use(TabbarItem);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
