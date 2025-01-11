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
// Lesson view
import LessonView from "@/views/LessonView.vue";
// Cv view
import CvView from "@/views/CvView.vue";
// install app page
import InstallAppView from "@/views/InstallAppView.vue";
// Skill page
import SkillView from "@/views/SkillView.vue";
// dash board page
import DashBoaredview from "@/views/DashBoaredview.vue";
// import test
import TestComponent from "@/components/global/TestComponent.vue";
// import create work
import dashCraeteWorksView from "@/views/dash/dashCreateWorksView.vue";
// import dash home page
import dashinfoView from "@/views/dash/dashinfoView.vue";
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
    path: "/lessons/:tag_name?",
    name: "lessons",
    component: LessonsView,
  },
  {
    path: "/lesson/:id",
    name: "lesson",
    component: LessonView,
  },
  {
    path: "/skills",
    name: "skills",
    component: SkillsView,
  },
  {
    path: "/skill/:id",
    name: "skill",
    component: SkillView,
  },
  {
    path: "/cv",
    name: "cv",
    component: CvView,
  },
  {
    path: "/install",
    name: "install",
    component: InstallAppView,
  },
  {
    path: "/login",
    name: "login",
    component: LogInView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashBoaredview,
    children: [
      {
        path: "",
        name: "indo",
        component: dashinfoView,
      },
      {
        path: "work/create",
        name: "create-work",
        component: dashCraeteWorksView,
      },
      {
        path: "lesson/create",
        name: "test",
        component: TestComponent,
      },
      {
        path: "skill/create",
        name: "test",
        component: TestComponent,
      },
      {
        path: "cv/update",
        name: "test",
        component: TestComponent,
      },
    ],
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
