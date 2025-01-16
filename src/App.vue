<template>
  <div :class="this.$store.state.language">
    <navcomponent v-if="!$route.path.includes('/dashboard')" />
    <router-view />
    <LoadingComponent />
    <MessageComponent />
    <SidBarComponent />
    <WorksFilterComponentVue />
    <LessonsFilterComponentVue />
    <ScrollTopComponent @click="scrollToTop" />
  </div>
</template>

<script>
import navcomponent from "./components/global/navcomponent.vue";
import LoadingComponent from "./components/global/LoadingComponent.vue";
import MessageComponent from "./components/global/MessageComponent.vue";
import SidBarComponent from "./components/global/SidBarComponent.vue";
import ScrollTopComponent from "./components/global/ScrollTopComponent.vue";
import WorksFilterComponentVue from "./components/global/WorksFilterComponentVue.vue";
import LessonsFilterComponentVue from "./components/global/LessonsFilterComponentVue.vue";
import { computed } from "vue";
import { useHead } from "@vueuse/head";
import { useRoute } from "vue-router";
import axios from "axios";

export default {
  name: "app-page",
  setup() {
    const route = useRoute();
    // const siteData = reactive({
    //   title: "sultan home page",
    //   description: "this is Sultan's home page ...",
    // });
    useHead({
      title: computed(() => {
        switch (route.name) {
          case "about me":
            return "Sultan site-about";
          case "works":
            return "Sultan site-works";
          case "work":
            return "Sultan site-work";
          case "lessons":
            return "Sultan site-lessons";
          case "lesson":
            return "Sultan site-lesson";
          case "skills":
            return "Sultan site-skills";
          case "skill":
            return "Sultan site-skill";
          case "cv":
            return "Sultan site-cv";
          case "login":
            return "Sultan site-login";
          case "dashboard":
            return "Sultan site-dashboard";
          case "install":
            return "Sultan site-install-app";
          case "notfound":
            return "Sultan site-notfound";
          default:
            return "Sultan site-home-page";
        }
      }),
      meta: [
        {
          name: "description",
          content: computed(() => {
            switch (route.name) {
              case "about me":
                return "Sultan site-about akbar sultan graphic design syria designer about page";
              case "works":
                return "Sultan site-works akbar sultan graphic design works page";
              case "work":
                return "Sultan site-work akbar sultan graphic design work page";
              case "lessons":
                return "Sultan site-lessons akbar sultan graphic design lessons page";
              case "lesson":
                return "Sultan site-lesson akbar sultan graphic design lesson page";
              case "skills":
                return "Sultan site-skills akbar sultan graphic design skills page";
              case "skill":
                return "Sultan site-skill akbar sultan graphic design skill page";
              case "login":
                return "Sultan site-login akbar sultan graphic design log in page";
              case "dashboard":
                return "Sultan site-dashboard akbar sultan graphic design dashboard page";
              case "install":
                return "Sultan site-install-app akbar sultan graphic design install the app page";
              case "notfound":
                return "Sultan site-notfound akbar sultan graphic design not found page";
              default:
                return "Sultan site-home-page akbar sultan graphic design home page";
            }
          }),
        },
        {
          name: "keywords",
          content: computed(() => {
            switch (route.name) {
              case "about me":
                return "Sultan site-about akbar sultan graphic design syria designer about page";
              case "works":
                return "Sultan site-works akbar sultan graphic design works page";
              case "work":
                return "Sultan site-work akbar sultan graphic design work page";
              case "lessons":
                return "Sultan site-lessons akbar sultan graphic design lessons page";
              case "lesson":
                return "Sultan site-lesson akbar sultan graphic design lesson page";
              case "skills":
                return "Sultan site-skills akbar sultan graphic design skills page";
              case "skill":
                return "Sultan site-skill akbar sultan graphic design skill page";
              case "login":
                return "Sultan site-login akbar sultan graphic design log in page";
              case "dashboard":
                return "Sultan site-dashboard akbar sultan graphic design dashboard page";
              case "install":
                return "Sultan site-install-app akbar sultan graphic design install the app page";
              case "notfound":
                return "Sultan site-notfound akbar sultan graphic design not found page";
              default:
                return "Sultan site-home-page akbar sultan graphic design home page";
            }
          }),
        },
      ],
    });
  },
  components: {
    navcomponent,
    LoadingComponent,
    MessageComponent,
    SidBarComponent,
    ScrollTopComponent,
    WorksFilterComponentVue,
    LessonsFilterComponentVue,
  },
  mounted() {
    // call to getb skills page status methods
    this.get_skills_page();

    // call to handel Scroll method on scroll the page (change)
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    // get to skills page status
    async get_skills_page() {
      await axios
        .get(this.$store.state.APIS.skills_page_status.get_status)
        .then((response) => {
          // set the skills page status from response to var in store
          this.$store.state.skills_page_status =
            response.data.skills_page_status.skills_page_status;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },

    // scroll method
    handleScroll() {
      this.$store.state.scroll_top_status =
        window.scrollY > 200 ? "open" : "close";
    },
  },
};
</script>

<style lang="scss">
.English {
  font-family: "Noto Sans", serif;
}

.Arabic {
  font-family: "Noto Kufi Arabic", serif;
}
</style>
