import Vue from "vue";
import VueRouter from "vue-router";
import PopularGitUsers from "@/components/PopularGitUsers";
import HomeComponent from "@/components/HomeComponent";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeComponent,
  },
  {
    path: "/",
    name: "Popular",
    component: PopularGitUsers,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
