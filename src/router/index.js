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
// contact page
import ContactView from "@/views/ContactView.vue";
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
// import create work
import dashCraeteWorksView from "@/views/dash/dashCreateWorkView.vue";
// import dash home page
import dashinfoView from "@/views/dash/dashinfoView.vue";
// dash's works page
import dashWorksView from "@/views/dash/dashWorksView.vue";
// dash's update work page
import dashWorkUpdateView from "@/views/dash/dashWorkUpdateView.vue";
// dash's lessons view
import dashLessonsView from "@/views/dash/dashLessonsView.vue";
// dash's lesson update page
import dashLessonUpdateView from "@/views/dash/dashLessonUpdateView.vue";
// dash's create lesson page
import dashCreateLessonsView from "@/views/dash/dashCreateLessonsView.vue";
// dash's skills page
import dashSkillsView from "@/views/dash/dashSkillsView.vue";
// dash's update skills page
import dashSkillUpdateView from "@/views/dash/dashSkillUpdateView.vue";
// dash's craete skill page
import dashSkillCreateView from "@/views/dash/dashSkillCreateView.vue";
// dash's cv page
import dashUpdateCvView from "@/views/dash/dashUpdateCvView.vue";
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
    path: "/contact",
    name: "contact me",
    component: ContactView,
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
        name: "dash-indo",
        component: dashinfoView,
      },
      {
        path: "works",
        name: "dash-works",
        component: dashWorksView,
      },
      {
        path: "work/create",
        name: "dash-create-work",
        component: dashCraeteWorksView,
      },
      {
        path: "work/update:id",
        name: "dash-update-work",
        component: dashWorkUpdateView,
      },
      {
        path: "lessons",
        name: "dash-lessons",
        component: dashLessonsView,
      },
      {
        path: "lesson/create",
        name: "dash-create-lesson",
        component: dashCreateLessonsView,
      },
      {
        path: "lesson/update:id",
        name: "dash-update-lesson",
        component: dashLessonUpdateView,
      },
      {
        path: "skills",
        name: "dash-skills",
        component: dashSkillsView,
      },
      {
        path: "skill/create",
        name: "dash-create-skill",
        component: dashSkillCreateView,
      },
      {
        path: "skill/update:id",
        name: "dash-update-skill",
        component: dashSkillUpdateView,
      },
      {
        path: "cv/update",
        name: "dash-test",
        component: dashUpdateCvView,
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
