import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from '@/components/HelloWorld'
import Home from "@/views/Home";
import list from "@/views/list";
import detail from "@/views/detail";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: { keepAlive: false }
    },
    {
      path: "/list",
      name: "list",
      component: list,
      meta: { keepAlive: true }
    },
    {
      path: "/detail",
      name: "detail",
      component: detail,
      meta: { keepAlive: false }
    }
  ]
});
