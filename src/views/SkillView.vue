<template>
  <div
    :class="`skill-page-${this.$store.state.mood}-${this.$store.state.language}-${this.page_status}`"
  >
    <div class="cont">
      <h1>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.skill_page.title
            : this.$store.state.Arabic.skill_page.title
        }}
      </h1>

      <img :src="this.$store.state.skill_data.icon" alt="skill icon" />

      <h3>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.skill_data.english_title
            : this.$store.state.skill_data.arabic_title
        }}
      </h3>

      <p>
        {{
          this.$store.state.langauge == "English"
            ? this.$store.state.skill_data.english_description
            : this.$store.state.skill_data.arabic_description
        }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "skill-page",
      // page status
      page_status: "close",
    };
  },
  mounted() {
    // call to get skill data method
    this.get_skill();
  },
  methods: {
    async get_skill() {
      // start the loading animation
      this.$store.state.loading = "open";
      await axios
        .get(
          `${this.$store.state.APIS.skills.get_one}?skill_id=${this.$route.params.id}`
        )
        .then((response) => {
          // stop the loading animation
          this.$store.state.loading = "close";

          // change the page status
          this.page_status = "open";

          // set the skill data in to store
          this.$store.state.skill_data = response.data.skill_data;
        })
        .catch((error) => {
          // stop the loading animation
          this.$store.state.loading = "close";

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
@import "../sass/varibels";
// darck and light English style
.skill-page-darck-English-open {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  padding: 15% 0px 10px 0px;
  transition-duration: 0.5s;

  .cont {
    width: 70%;
    height: 100%;
    margin: auto;
    transition-duration: 0.5s;
    opacity: 1;

    @media (max-width: $mobile) {
      width: 90%;
    }

    h1 {
      width: 100%;
      height: auto;
      color: $white;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
    }

    img {
      width: 100%;
      height: auto;
      margin: 10px 0%;
    }

    h3 {
      width: 100%;
      height: auto;
      margin: 10px 0%;
      color: $white;
    }

    p {
      width: 100%;
      height: auto;
      margin: 10px 0%;
      color: $white;

      @media (max-width: $mobile) {
        font-size: $small;
      }
    }
  }
}

.skill-page-darck-English-close {
  @extend .skill-page-darck-English-open;
  padding: 30% 0px 10px 0px;

  .cont {
    opacity: 0;
  }
}

.skill-page-light-English-open {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  background-color: $white-one;
  padding: 15% 0px 10px 0px;
  transition-duration: 0.5s;

  .cont {
    width: 70%;
    height: 100%;
    margin: auto;
    transition-duration: 0.5s;
    opacity: 1;

    @media (max-width: $mobile) {
      width: 90%;
    }

    h1 {
      width: 100%;
      height: auto;
      color: $black;
      border: 1px solid;
      border-color: transparent transparent $black transparent;
    }

    img {
      width: 100%;
      height: auto;
      margin: 10px 0%;
    }

    h3 {
      width: 100%;
      height: auto;
      margin: 10px 0%;
      color: $black;
    }

    p {
      width: 100%;
      height: auto;
      margin: 10px 0%;
      color: $black;

      @media (max-width: $mobile) {
        font-size: $small;
      }
    }
  }
}

.skill-page-light-English-close {
  @extend .skill-page-light-English-open;
  padding: 30% 0px 10px 0px;

  .cont {
    opacity: 0;
  }
}
// darck and light English style

// darck and light Arabic style
.skill-page-darck-Arabic-open {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  padding: 15% 0px 10px 0px;
  transition-duration: 0.5s;

  .cont {
    width: 70%;
    height: 100%;
    margin: auto;
    transition-duration: 0.5s;
    opacity: 1;

    @media (max-width: $mobile) {
      width: 90%;
    }

    h1 {
      width: 100%;
      height: auto;
      color: $white;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
    }

    img {
      width: 100%;
      height: auto;
      margin: 10px 0%;
    }

    h3 {
      width: 100%;
      height: auto;
      margin: 10px 0%;
      color: $white;
    }

    p {
      width: 100%;
      height: auto;
      margin: 10px 0%;
      color: $white;

      @media (max-width: $mobile) {
        font-size: $small;
      }
    }
  }
}

.skill-page-darck-Arabic-close {
  @extend .skill-page-darck-Arabic-open;
  padding: 30% 0px 10px 0px;

  .cont {
    opacity: 0;
  }
}

.skill-page-light-Arabic-open {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  background-color: $white-one;
  padding: 15% 0px 10px 0px;
  transition-duration: 0.5s;

  .cont {
    width: 70%;
    height: 100%;
    margin: auto;
    transition-duration: 0.5s;
    opacity: 1;

    @media (max-width: $mobile) {
      width: 90%;
    }

    h1 {
      width: 100%;
      height: auto;
      color: $black;
      border: 1px solid;
      border-color: transparent transparent $black transparent;
    }

    img {
      width: 100%;
      height: auto;
      margin: 10px 0%;
    }

    h3 {
      width: 100%;
      height: auto;
      margin: 10px 0%;
      color: $black;
    }

    p {
      width: 100%;
      height: auto;
      margin: 10px 0%;
      color: $black;

      @media (max-width: $mobile) {
        font-size: $small;
      }
    }
  }
}

.skill-page-light-Arabic-close {
  @extend .skill-page-light-Arabic-open;
  padding: 30% 0px 10px 0px;

  .cont {
    opacity: 0;
  }
}
// darck and light Arabic style
</style>
