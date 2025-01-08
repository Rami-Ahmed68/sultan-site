<template>
  <navcomponent />
  <router-view />
  <LoadingComponent />
  <MessageComponent />
  <SidBarComponent />
  <ScrollTopComponent @click="scrollToTop" />
</template>

<script>
import navcomponent from "./components/global/navcomponent.vue";
import LoadingComponent from "./components/global/LoadingComponent.vue";
import MessageComponent from "./components/global/MessageComponent.vue";
import SidBarComponent from "./components/global/SidBarComponent.vue";
import ScrollTopComponent from "./components/global/ScrollTopComponent.vue";
import { computed } from "vue";
import { useHead } from "@vueuse/head";
import { useRoute } from "vue-router";

export default {
  name: "app-page",
  setup() {
    const route = useRoute();
    console.log(route);
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
  },
  mounted() {
    // call to handel Scroll method on scroll the page (change)
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    scrollToTop() {
      console.log("sdasdasd");
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

<style lang="scss"></style>
