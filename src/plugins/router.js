import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../pages/Home.vue';
import move from '../pages/move.vue';
import numn from '../pages/numn.vue';
import app from '../pages/app.vue';
import opo from '../pages/opo.vue';
import paa from '../pages/paa.vue';
import Login from '../pages/Login.vue';
import Reg from '../pages/Reg.vue';
import NoPage from '../pages/NoPage.vue';

let routes = [
  {path:'/home',component:Home},
  {path:'/move',component:move},
  {path:'/numn',component:numn},
  {path:'/app',component:app},
  {path:'/opo',component:opo},
  {path:'/paa',component:paa},
  {path:'/Login',component:Login},
  {path:'/reg',component:Reg},
  {path:'/',redirect:'/home'},
  {path:'*',component:NoPage}
];

let router = new VueRouter({
  routes
})

export default router;