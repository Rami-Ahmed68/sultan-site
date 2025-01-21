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
            return "Muhammad Sultan-about";
          case "works":
            return "Muhammad Sultan-works";
          case "work":
            return "Muhammad Sultan-work";
          case "lessons":
            return "Muhammad Sultan-lessons";
          case "lesson":
            return "Muhammad Sultan-lesson";
          case "skills":
            return "Muhammad Sultan-skills";
          case "skill":
            return "Muhammad Sultan-skill";
          case "cv":
            return "Muhammad Sultan-cv";
          case "login":
            return "Muhammad Sultan-login";
          case "dashboard":
            return "Muhammad Sultan-dashboard";
          case "install":
            return "Muhammad Sultan-install-app";
          case "messages":
            return "Muhammad Sultan-messages";

          case "dashboard/works":
            return "Muhammad Sultan-dash-works";

          case "dashboard/work/create":
            return "Muhammad Sultan-dash-works-create";

          case "dashboard/lessons":
            return "Muhammad Sultan-dash-lessons";

          case "dashboard/lesson/create":
            return "Muhammad Sultan-dash-lesson-create";

          case "dashboard/skills":
            return "Muhammad Sultan-dash-skills";

          case "dashboard/skill/create":
            return "Muhammad Sultan-dash-skill-create";

          case "dashboard/cv/update":
            return "Muhammad Sultan-dash-cv-update";

          case "notfound":
            return "Muhammad Sultan-notfound";
          default:
            return "Muhammad Sultan-home-page";
        }
      }),
      meta: [
        {
          name: "description",
          content: computed(() => {
            switch (route.name) {
              case "about me":
                return "Find out more about designer Muhammad Sultan on his about-me page.";
              case "works":
                return "Explore the works on the works page of designer Muhammad Sultan's website";
              case "work":
                return "Explore the work on the work page of designer Muhammad Sultan's website";
              case "lessons":
                return "Explore the lessons on the lessons page of designer Muhammad Sultan's website";
              case "lesson":
                return "Explore the lesson on the lesson page of designer Muhammad Sultan's website";
              case "skills":
                return "Explore the skills on the skills page of designer Muhammad Sultan's website";
              case "skill":
                return "Explore the skill on the skill page of designer Muhammad Sultan's website";
              case "login":
                return "you can login to Muhammad Sultan's website in this page just click it";
              case "dashboard":
                return "This page is a dachBoard to controll all Muhammad Sultan's website data";
              case "messages":
                return "You can see all the message here just login";

              case "dashboard/works":
                return "Control all the work in this section in this view";

              case "dashboard/work/create":
                return "Control all the work in this section in this view.";

              case "dashboard/lessons":
                return "Control all the lessons in this section in this view.";

              case "dashboard/lesson/create":
                return "Control all the lesson in this section in this view.";

              case "dashboard/skills":
                return "Control all the skills in this section in this view.";

              case "dashboard/skill/create":
                return "Control all the skill in this section in this view.";

              case "dashboard/cv/update":
                return "Control all the cv events in this section in this view.";

              case "install":
                return "Download the designer Muhammad Sultan's application from here and explore the world of fantasy and magnificence";
              case "notfound":
                return "Muhammad Sultan-notfound graphic design not found page";
              default:
                return "Mohammad Sultan is an Graphic Designer and video editor from Syria living and working in Dubai | Home page of the inspiring designer Muhammad Sultan | Start exploring many beautiful and attractive designs | You can order a design at any time you want";
            }
          }),
        },
        {
          name: "keywords",
          content: computed(() => {
            switch (route.name) {
              case "about me":
                return `General, information, about ,designer, Muhammad Sultan, designer Muhammad Sultan info, Typography
Branding,
Layout,
Color theory,
Illustration,
Digital art,
User interface,
Visual communication,
Print design,
Adobe Creative Suite,
Logo design,
Creative process,
Art direction,
Web design,
Motion graphics,
Concept development,
Image editing,
Graphic elements,
Marketing materials,
Infographics,
Portfolio,
Client collaboration,
Design trends,
Visual hierarchy,
Aesthetics`;
              case "works":
                return `Designer Muhammad Sultan's ,works page. , designer Muhammad Sultan's works, here Branding
Layout,
Color theory,
Illustration,
Digital art,
User interface,
Visual communication,
Print design,
Adobe Creative Suite,
Logo design,
Creative process,
Art direction,
Web design,
Motion graphics,
Concept development,
Image editing,
Graphic elements,
Marketing materials,
Infographics,
Portfolio,
Client collaboration,
Design trends,
Visual hierarchy,
Aesthetics`;
              case `work`:
                return `Designer Muhammad Sultan's, works page, designer Muhammad Sultan's, Branding
Layout,
Color theory,
Illustration,
Digital art,
User interface,
Visual communication,
Print design,
Adobe Creative Suite,
Logo design,
Creative process,
Art direction,
Web design,
Motion graphics,
Concept development,
Image editing,
Graphic elements,
Marketing materials,
Infographics,
Portfolio,
Client collaboration,
Design trends,
Visual hierarchy,
Aesthetics,`;

              case `lessons`:
                return `Designer Muhammad Sultan's, lessons page, designer Muhammad Sultan's, lessons,Branding
Layout,
Color theory,
Illustration,
Digital art,
User interface,
Visual communication,
Print design,
Adobe Creative Suite,
Logo design,
Creative process,
Art direction,
Web design,
Motion graphics,
Concept development,
Image editing,
Graphic elements,
Marketing materials,
Infographics,
Portfolio,
Client collaboration,
Design trends,
Visual hierarchy,
Aesthetics`;
              case `lesson`:
                return `Designer Muhammad Sultan's, lesson's page, designer Muhammad Sultan's lesson's , Branding
Layout,
Color theory,
Illustration,
Digital art,
User interface,
Visual communication,
Print design,
Adobe Creative Suite,
Logo design,
Creative process,
Art direction,
Web design,
Motion graphics,
Concept development,
Image editing,
Graphic elements,
Marketing materials,
Infographics,
Portfolio,
Client collaboration,
Design trends,
Visual hierarchy,
Aesthetics`;

              case `skills`:
                return `Designer Muhammad Sultan's skills page. You can view all of designer Muhammad Sultan's skills here Branding
Layout,
Color theory,
Illustration,
Digital art,
User interface,
Visual communication,
Print design,
Adobe Creative Suite,
Logo design,
Creative process,
Art direction,
Web design,
Motion graphics,
Concept development,
Image editing,
Graphic elements,
Marketing materials,
Infographics,
Portfolio,
Client collaboration,
Design trends,
Visual hierarchy,
Aesthetics`;

              case `skill`:
                return `Designer Muhammad Sultan's skill's page. You can view all of designer Muhammad Sultan's skill's here Branding
Layout,
Color theory,
Illustration,
Digital art,
User interface,
Visual communication,
Print design,
Adobe Creative Suite,
Logo design,
Creative process,
Art direction,
Web design,
Motion graphics,
Concept development,
Image editing,
Graphic elements,
Marketing materials,
Infographics,
Portfolio,
Client collaboration,
Design trends,
Visual hierarchy,
Aesthetics`;

              case `login`:
                return `login sigin register تسجيل الدخول اشتراك اشترك هنا `;
              case `dashboard`:
                return `Muhammad Sultan-dashboard Branding
Layout,
Color theory,
Illustration,
Digital art,
User interface,
Visual communication,
Print design,
Adobe Creative Suite,
Logo design,
Creative process,
Art direction,
Web design,
Motion graphics,
Concept development,
Image editing,
Graphic elements,
Marketing materials,
Infographics,
Portfolio,
Client collaboration,
Design trends,
Visual hierarchy,
Aesthetics`;
              case `install`:
                return `Muhammad Sultan-install-app akbar sultan graphic design install the app page Branding
Layout,
Color theory,
Illustration,
Digital art,
User interface,
Visual communication,
Print design,
Adobe Creative Suite,
Logo design,
Creative process,
Art direction,
Web design,
Motion graphics,
Concept development,
Image editing,
Graphic elements,
Marketing materials,
Infographics,
Portfolio,
Client collaboration,
Design trends,
Visual hierarchy,
Aesthetics`;
              case `notfound`:
                return `Muhammad Sultan-notfound akbar sultan graphic design not found page Branding
Layout,
Color theory,
Illustration,
Digital art,
User interface,
Visual communication,
Print design,
Adobe Creative Suite,
Logo design,
Creative process,
Art direction,
Web design,
Motion graphics,
Concept development,
Image editing,
Graphic elements,
Marketing materials,
Infographics,
Portfolio,
Client collaboration,
Design trends,
Visual hierarchy,
Aesthetics`;
              default:
                return `Designer in Syria, Designers in Syria, Advertising, Designer in Dubai, Designers in Dubai, Advertising Design, Dubai, United Arab Emirates, Designers in Yemen, Advertising Design, Graphic Designer
Branding
Layout,
Color theory,
Illustration,
Digital art,
User interface,
Visual communication,
Print design,
Adobe Creative Suite,
Logo design,
Creative process,
Art direction,
Web design,
Motion graphics,
Concept development,
Image editing,
Graphic elements,
Marketing materials,
Infographics,
Portfolio,
Client collaboration,
Design trends,
Visual hierarchy,
Aesthetics`;
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

    setInterval(() => {
      this.get_messages_count();
    }, 10000);

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

    // get message's count
    async get_messages_count() {
      await axios
        .get(this.$store.state.APIS.messages.get_count)
        .then((response) => {
          // set the messages's count to messages's count var in stor
          this.$store.state.notifications_count = response.data.messages_count;
        })
        .catch((error) => {
          console.log(error);
        });
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
