import { createRouter, createWebHistory } from "vue-router";
// home page
import HomeView from "../views/HomeView.vue";
//about me
import AboutView from "@/views/AboutView.vue";
// works page
import WorksView from "../views/WorksView.vue";
// lessons page
import LessonsView from "@/views/LessonsView.vue";
// skills page
import SkillsView from "@/views/SkillsView.vue";
// log in page
import LogInView from "@/views/LogInView.vue";
// not found page
import NotFoundView from "@/views/NotFoundView.vue";
// work page
import WorkView from "@/views/WorkView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about me",
    component: AboutView,
  },
  {
    path: "/works/:tag_name?",
    name: "works",
    component: WorksView,
  },
  {
    path: "/work/:id",
    name: "work",
    component: WorkView,
  },
  {
    path: "/lessons",
    name: "lessons",
    component: LessonsView,
  },
  {
    path: "/skills",
    name: "skills",
    component: SkillsView,
  },
  {
    path: "/login",
    name: "login",
    component: LogInView,
  },
  // send the user to note found page
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
