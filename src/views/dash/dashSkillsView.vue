<template>
  <div
    :class="`skills-page-${this.$store.state.mood}-${this.$store.state.language}-${this.page_status}`"
  >
    <div class="cont">
      <h1>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_skills_page.title
            : this.$store.state.Arabic.dash_skills_page.title
        }}

        <p
          @click="change_skills_page_status"
          :class="
            this.$store.state.skills_page_status ? 'open-btn' : 'closed-btn'
          "
        >
          {{
            this.$store.state.language == "English"
              ? this.$store.state.English.dash_skills_page.skills_page_btn
              : this.$store.state.Arabic.dash_skills_page.skills_page_btn
          }}
          {{ this.$store.state.skills_page_status ? "🔓" : "🔒" }}
        </p>
      </h1>

      <SkillComponentVue
        v-for="(skill, index) in this.$store.state.skills_data"
        :key="index"
        :skill_data="skill"
      />
    </div>

    <DeleteSkillComponentVue />
  </div>
</template>

<script>
import axios from "axios";
import SkillComponentVue from "@/components/dash/SkillComponentVue.vue";
import DeleteSkillComponentVue from "@/components/global/dash/DeleteSkillComponentVue.vue";
export default {
  data() {
    return {
      name: "skills-page",

      // page status
      page_status: "close",

      // limit of the work's documents
      limit: 5,
      // page of the skills documenst
      page: 1,
    };
  },
  components: {
    DeleteSkillComponentVue,
    SkillComponentVue,
  },
  mounted() {
    // call to get skills mthod
    this.get_skills();

    // add event (escroll) to window
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    // get skills method
    async get_skills() {
      // check if the skills arry in store is empty or not
      if (this.$store.state.skills_data.length == 0) {
        // to open the loading animation
        this.$store.state.loading_status = "open";
      }

      await axios
        .get(
          `${this.$store.state.APIS.skills.get_all}?page=${this.page}&limit=${this.limit}`
        )
        .then((response) => {
          // to open the page slowly
          this.page_status = "open";

          // to close the loading animation
          this.$store.state.loading_status = "close";

          // close the no results image message
          this.$store.state.skills_not_found_message_statu = "close";

          //check if the skills arry in store is empty or not
          if (this.$store.state.skills_data.length == 0) {
            // ste the geted skills to skills arry in store
            this.$store.state.skills_data = response.data.skills_data;
          } else {
            // ste the geted skills with the old skills in skills arry in stor
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

    async handleScroll() {
      // check if the window height is donw
      if (
        window.scrollY + window.innerHeight >=
        document.body.scrollHeight - 600
      ) {
        // to change page
        this.page += 1;
        // call the get_skills method
        await this.get_skills();

        // to hidden the not found victor at message
        this.$store.state.skills_not_found_message_status = "close";
      }
    },

    // change skills page status
    async change_skills_page_status() {
      // start the loaidng
      this.$store.state.loading_status = "open";

      // craete headers
      const headers = {
        Authorization: `Bearer ${this.$store.state.admin_data.token}`,
      };

      // create body data
      let body_data = {
        admin_id: this.$store.state.admin_data.admin._id,
        skills_page_status: this.$store.state.skills_page_status ? false : true,
      };

      await axios
        .put(
          this.$store.state.APIS.skills_page_status.change_status,
          body_data,
          { headers }
        )
        .then((response) => {
          // stop the loading
          this.$store.state.loading_status = "close";

          // set the ne skills_page_status
          this.$store.state.skills_page_status =
            response.data.skills_page_status;

          // set the error to the error_object in store
          this.$store.state.error_object = {
            title: {
              english: "🥳Updatd Successfully🥳",
              arabic: "🥳تم التعديل بنجاح🥳",
            },
            type: "Success",
            messages: response.data.messgae,
            status: response.status,
          };

          // to open the message form
          this.$store.commit("OpenOrCloseMessageForm");

          // call to change the message form status
          this.$store.commit("ChangeMEssageFormStatus");
        })
        .catch((error) => {
          // stop the loading animation
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
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";
// darck and light English style
.skills-page-darck-English-open {
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
      display: flex;
      justify-content: space-between;
      align-items: center;

      .open-btn {
        padding: 10px;
        border-radius: 5px;
        margin: 5px;
        cursor: pointer;
        color: $white;
        font-size: $small;
        border: 1px solid $error-green-one;
        background-color: $error-green-tow;
        transition-duration: 0.5s;

        @media (max-width: $mobile) {
          font-size: $x-small;
        }
      }
      .closed-btn {
        padding: 10px;
        border-radius: 5px;
        margin: 5px;
        cursor: pointer;
        color: $white;
        font-size: $small;
        border: 1px solid $error-red-one;
        background-color: $error-red-tow;
        transition-duration: 0.5s;

        @media (max-width: $mobile) {
          font-size: $x-small;
        }
      }
    }
  }
}

.skills-page-darck-English-close {
  @extend .skills-page-darck-English-open;
  padding: 30% 0px 10px 0px;

  .cont {
    opacity: 0;
  }
}

.skills-page-light-English-open {
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
      display: flex;
      justify-content: space-between;
      align-items: center;

      .open-btn {
        padding: 10px;
        border-radius: 5px;
        margin: 5px;
        cursor: pointer;
        color: $black;
        font-size: $small;
        border: 1px solid $error-green-one;
        background-color: $error-green-tow;
        transition-duration: 0.5s;

        @media (max-width: $mobile) {
          font-size: $x-small;
        }
      }
    }
  }
}

.skills-page-light-English-close {
  @extend .skills-page-light-English-open;
  padding: 30% 0px 10px 0px;

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

      display: flex;
      justify-content: space-between;
      align-items: center;

      .open-btn {
        padding: 10px;
        border-radius: 5px;
        margin: 5px;
        cursor: pointer;
        color: $white;
        font-size: $small;
        border: 1px solid $error-green-one;
        background-color: $error-green-tow;
        transition-duration: 0.5s;

        @media (max-width: $mobile) {
          font-size: $x-small;
        }
      }
    }
  }
}

.skills-page-darck-Arabic-close {
  @extend .skills-page-darck-Arabic-open;
  padding: 30% 0px 10px 0px;

  .cont {
    opacity: 0;
  }
}

.skills-page-light-Arabic-open {
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

      display: flex;
      justify-content: space-between;
      align-items: center;

      .open-btn {
        padding: 10px;
        border-radius: 5px;
        margin: 5px;
        cursor: pointer;
        color: $black;
        font-size: $small;
        border: 1px solid $error-green-one;
        background-color: $error-green-tow;
        transition-duration: 0.5s;

        @media (max-width: $mobile) {
          font-size: $x-small;
        }
      }
    }
  }
}

.skills-page-light-Arabic-close {
  @extend .skills-page-light-Arabic-open;
  padding: 30% 0px 10px 0px;

  .cont {
    opacity: 0;
  }
}
// darck and light Arabic style
</style>
