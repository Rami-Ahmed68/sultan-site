<template>
  <div
    :class="`skills-page-${this.$store.state.mood}-${this.$store.state.language}-${this.page_status}`"
  >
    <div class="cont">
      <h1>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.skills_page.title
            : this.$store.state.Arabic.skills_page.title
        }}
      </h1>

      <div class="skills-section">
        <SkillComponentVue
          v-for="(skill, index) in this.$store.state.skills_data"
          :key="index"
          :skill_data="skill"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SkillComponentVue from "@/components/skill/SkillComponentVue.vue";

export default {
  data() {
    return {
      name: "skills-page",
      // page status
      page_status: "close",

      // limit of skills's documents
      limit: 20,

      // page of skills's documents
      page: 1,
    };
  },
  mounted() {
    // call to the handele scroll method on window scroll
    window.addEventListener("scroll", this.handeScroll);

    // call to get skills method
    this.get_skills();
  },
  components: {
    SkillComponentVue,
  },
  methods: {
    // get to skills method
    async get_skills() {
      // check if the skills array in store is empty or not
      if (this.$store.state.skills_data.length == 0) {
        // to start the laodong animation
        this.$store.state.loading_status = "open";
      }

      await axios
        .get(this.$store.state.APIS.skills.get_all, {
          params: {
            limit: this.limit,
            page: this.page,
          },
        })
        .then((response) => {
          // to stop the laodong animation
          this.$store.state.loading_status = "close";

          // changethe page status
          this.page_status = "open";
          // check if the skills array in store is enpty or not to add the new geted skills
          if (this.$store.state.skills_data.length == 0) {
            // set teh skills data in to store
            this.$store.state.skills_data = response.data.skills_data;
          } else {
            this.$store.state.skills_data = [
              ...this.$store.state.skills_data,
              ...response.data.skills_data,
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

    // handel scroll method
    async handeScroll() {
      if (
        window.scrollY + window.innerHeight >=
        document.body.scrollHeight - 600
      ) {
        // update the page number
        this.page += 1;

        // call to get skills method
        await this.get_skills();

        // to hidden the not found victor at message
        this.$store.state.works_not_found_message_status = "close";
      }
    },
  },
};
</script>

<style lang="scss">
@import "../sass/varibels";
// darck and light English style
.skills-page-darck-English-open {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  margin: auto;
  transition-duration: 0.5s;
  padding: 15% 0px 10px 0px;
  background-color: $Navy-blue-for;

  .cont {
    width: 70%;
    height: 100%;
    padding: 10px 0px;
    margin: auto;
    transition-duration: 0.5s;
    opacity: 1;

    @media (max-width: $mobile) {
      width: 90%;
      height: auto;
    }

    h1 {
      width: 100%;
      height: auto;
      margin: 10px 0px;
      color: $white;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
    }

    .skills-section {
      width: 100%;
      height: auto;
    }
  }
}

.skills-page-darck-English-close {
  @extend .skills-page-darck-English-open;
  padding: 30% 0px 0px 0px;

  .cont {
    opacity: 0;
  }
}

.skills-page-light-English-open {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  margin: auto;
  transition-duration: 0.5s;
  padding: 15% 0px 10px 0px;
  background-color: $white-one;

  .cont {
    width: 70%;
    height: 100%;
    padding: 10px 0px;
    margin: auto;
    transition-duration: 0.5s;
    opacity: 1;

    @media (max-width: $mobile) {
      width: 90%;
      height: auto;
    }

    h1 {
      width: 100%;
      height: auto;
      margin: 10px 0px;
      color: $black;
      border: 1px solid;
      border-color: transparent transparent $black transparent;
    }

    .skills-section {
      width: 100%;
      height: auto;
    }
  }
}

.skills-page-light-English-close {
  @extend .skills-page-darck-English-open;
  padding: 30% 0px 0px 0px;

  .cont {
    opacity: 0;
  }
}
// darck and light English style

// darck and light Arabic style
.skills-page-darck-Arabic-open {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  margin: auto;
  transition-duration: 0.5s;
  padding: 15% 0px 10px 0px;
  background-color: $Navy-blue-for;

  .cont {
    width: 70%;
    height: 100%;
    padding: 10px 0px;
    margin: auto;
    transition-duration: 0.5s;
    opacity: 1;

    @media (max-width: $mobile) {
      width: 90%;
      height: auto;
    }

    h1 {
      width: 100%;
      height: auto;
      margin: 10px 0px;
      color: $white;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
    }

    .skills-section {
      width: 100%;
      height: auto;
    }
  }
}

.skills-page-darck-Arabic-close {
  @extend .skills-page-darck-Arabic-open;
  padding: 30% 0px 0px 0px;

  .cont {
    opacity: 0;
  }
}

.skills-page-light-Arabic-open {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  margin: auto;
  transition-duration: 0.5s;
  padding: 15% 0px 10px 0px;
  background-color: $white-one;

  .cont {
    width: 70%;
    height: 100%;
    padding: 10px 0px;
    margin: auto;
    transition-duration: 0.5s;
    opacity: 1;

    @media (max-width: $mobile) {
      width: 90%;
      height: auto;
    }

    h1 {
      width: 100%;
      height: auto;
      margin: 10px 0px;
      color: $black;
      border: 1px solid;
      border-color: transparent transparent $black transparent;
    }

    .skills-section {
      width: 100%;
      height: auto;
    }
  }
}

.skills-page-light-Arabic-close {
  @extend .skills-page-darck-Arabic-open;
  padding: 30% 0px 0px 0px;

  .cont {
    opacity: 0;
  }
}
// darck and light Arabic style
</style>
