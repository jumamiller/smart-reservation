import Vue from "vue";
import VueRouter from "vue-router";
import PopularGitUsers from "@/components/PopularGitUsers";
import HomeComponent from "@/components/HomeComponent";
import AuthorArticles from "@/components/AuthorArticles";
import Blog from "@/components/Blog";
import AboutUs from "@/components/AboutUs";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeComponent,
  },
  {
    path: "/articles",
    name: "Popular",
    component: PopularGitUsers,
  },
  {
    path: '/author-articles/:username',
    name: 'AuthorArticles',
    component: AuthorArticles
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/authors',
    name: 'Authors',
    component: AboutUs
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
