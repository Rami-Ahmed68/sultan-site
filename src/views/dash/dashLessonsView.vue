<template>
  <div
    :class="`lessons-page-${this.$store.state.mood}-${this.$store.state.language}-${this.page_status}`"
  >
    <div class="cont">
      <h1>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_lessons_page.title
            : this.$store.state.Arabic.dash_lessons_page.title
        }}
      </h1>

      <LessonsComponentVue
        v-for="(lesson, index) in this.$store.state.lessons_data"
        :key="index"
        :lesson_data="lesson"
      />
    </div>

    <DeleteLessonsComponentVue />
  </div>
</template>

<script>
import axios from "axios";
import LessonsComponentVue from "@/components/dash/LessonComponentVue.vue";
import DeleteLessonsComponentVue from "@/components/global/dash/DeleteLessonsComponentVue.vue";
export default {
  data() {
    return {
      name: "lessons-page",

      // page status
      page_status: "close",

      // limit of the work's documents
      limit: 5,
      // page of the lessons documenst
      page: 1,
    };
  },
  components: {
    LessonsComponentVue,
    DeleteLessonsComponentVue,
  },
  mounted() {
    // call to get lessons mthod
    this.get_lessons();

    // add event (escroll) to window
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    // get lessons method
    async get_lessons() {
      // check if the lessons arry in store is empty or not
      if (this.$store.state.lessons_data.length == 0) {
        // to open the loading animation
        this.$store.state.loading_status = "open";
      }

      await axios
        .get(
          `${this.$store.state.APIS.lessons.get_all}?page=${this.page}&limit=${this.limit}`,
          {
            tag: JSON.stringify([this.$route.params.tag_name]),
          }
        )
        .then((response) => {
          // to open the page slowly
          this.page_status = "open";

          // to close the loading animation
          this.$store.state.loading_status = "close";

          // close the no results image message
          this.$store.state.lessons_not_found_message_statu = "close";

          //check if the lessons arry in store is empty or not
          if (this.$store.state.lessons_data.length == 0) {
            // ste the geted lessons to lessons arry in store
            this.$store.state.lessons_data = response.data.lessons_data;
          } else {
            // ste the geted lessons with the old lessons in lessons arry in stor
            this.$store.state.lessons_data = [
              ...this.$store.state.lessons_data,
              ...response.data.lessons_data,
            ];
          }
        })
        .catch((error) => {
          // to close the loading animation
          this.$store.state.loading_status = "close";

          // set the error to the error_object in store
          this.$store.state.error_object = {
            title: {
              english: "😓Error😓",
              arabic: "😓خطأ😓",
            },
            type: "Error",
            messages: error.response.data.message,
            status: error.status,
          };

          // to open the message form
          this.$store.commit("OpenOrCloseMessageForm");

          // call to change the message form status
          this.$store.commit("ChangeMEssageFormStatus");
        });
    },

    async handleScroll() {
      // check if the window height is donw
      if (
        window.scrollY + window.innerHeight >=
        document.body.scrollHeight - 600
      ) {
        // to change page
        this.page += 1;
        // call the get_lessons method
        await this.get_lessons();

        // to hidden the not found victor at message
        this.$store.state.lessons_not_found_message_status = "close";
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";
// darck and light English style
.lessons-page-darck-English-open {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  padding: 15% 0px 10px 0px;
  transition-duration: 0.5s;

  .cont {
    width: 70%;
    height: auto;
    margin: auto;

    transition-duration: 0.5s;
    opacity: 1;

    @media (max-width: $mobile) {
      width: 90%;
    }

    h1 {
      width: 100%;
      height: auto;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
      margin: 5px 0px;
      color: $white;
    }
  }
}

.lessons-page-darck-English-close {
  @extend .lessons-page-darck-English-open;
  padding: 30% 0px 10px 0px;

  .cont {
    opacity: 0;
  }
}

.lessons-page-light-English-open {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  background-color: $white-one;
  padding: 15% 0px 10px 0px;
  transition-duration: 0.5s;

  .cont {
    width: 70%;
    height: auto;
    margin: auto;
    transition-duration: 0.5s;
    opacity: 1;

    @media (max-width: $mobile) {
      width: 90%;
    }

    h1 {
      width: 100%;
      height: auto;
      border: 1px solid;
      border-color: transparent transparent $black transparent;
      margin: 5px 0px;
      color: $black;
    }
  }
}

.lessons-page-light-English-close {
  @extend .lessons-page-light-English-open;
  padding: 30% 0px 10px 0px;

  .cont {
    opacity: 0;
  }
}
// darck and light English style

// darck and light Arabic style
.lessons-page-darck-Arabic-open {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  padding: 15% 0px 10px 0px;
  transition-duration: 0.5s;

  .cont {
    width: 70%;
    height: auto;
    margin: auto;

    transition-duration: 0.5s;
    opacity: 1;

    @media (max-width: $mobile) {
      width: 90%;
    }

    h1 {
      width: 100%;
      height: auto;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
      margin: 5px 0px;
      color: $white;
    }
  }
}

.lessons-page-darck-Arabic-close {
  @extend .lessons-page-darck-Arabic-open;
  padding: 30% 0px 10px 0px;

  .cont {
    opacity: 0;
  }
}

.lessons-page-light-Arabic-open {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  background-color: $white-one;
  padding: 15% 0px 10px 0px;
  transition-duration: 0.5s;

  .cont {
    width: 70%;
    height: auto;
    margin: auto;
    transition-duration: 0.5s;
    opacity: 1;

    @media (max-width: $mobile) {
      width: 90%;
    }

    h1 {
      width: 100%;
      height: auto;
      border: 1px solid;
      border-color: transparent transparent $black transparent;
      margin: 5px 0px;
      color: $black;
    }
  }
}

.lessons-page-light-Arabic-close {
  @extend .lessons-page-light-Arabic-open;
  padding: 30% 0px 10px 0px;

  .cont {
    opacity: 0;
  }
}
// darck and light Arabic style
</style>
