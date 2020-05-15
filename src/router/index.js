import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: "/login",
    name: "login",
    component: () => import('@/views/auth/login.vue')
  },
  {
    path: '/home',
    redirect: '/authorize/unitInformation',
    component: () =>
      import('@/views/home'),
    children: [
      {
      name: 'authorize',
      path: '/authorize/',
      component: () =>
        import('@/views/authorize/index.vue'),
      children: [
        {
          path: 'unitInformation',
          name: 'unitInformation',
          component: () =>
            import('@/views/authorize/unitInformation.vue'),
        },
      ]
    }, ]
  },
];

const router = new VueRouter({
  routes,
});

export default router;