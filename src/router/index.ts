import * as VueRouter from 'vue-router'
// import MainContainer from "../layouts/MainContainer.vue";
const routes:any = [
  {
    path: '/',
    redirect:'/main'
  },
  {
    path: '/main',
    component: ()=>import('./../components/main-box/main-box.component.vue'),
    redirect:'/main/table-list',
    children: [
      {
        path: 'table-list',
        component: ()=>import('./../pages/table-list/table-list.component.vue'),
      }
    ]
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router
