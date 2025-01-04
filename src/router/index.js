import { createRouter, createWebHistory } from "vue-router";
// home page
import HomeView from "../views/HomeView.vue";
// works page
import WorksView from "../views/WorksView.vue";
// lessons page
import LessonsView from "@/views/LessonsView.vue";
// skills page
import SkillsView from "@/views/SkillsView.vue";
// log in page
import LogInView from "@/views/LogInView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Works",
    name: "works",
    component: WorksView,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
