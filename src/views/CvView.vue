<template>
  <div
    :class="`cv-page-${this.$store.state.mood}-${this.$store.state.language}-${this.page_status}`"
  >
    <div class="cont">
      <h1>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.cv_page.title
            : this.$store.state.Arabic.cv_page.title
        }}
      </h1>

      <img
        v-if="this.$store.state.cv"
        :src="this.$store.state.cv"
        alt="muhammad sultan cv"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "cv-page",
  data() {
    return {
      // page status
      page_status: "close",
    };
  },
  mounted() {
    // call to get admin's cv method
    this.et_cv();
  },
  methods: {
    // get admin's cv method
    async et_cv() {
      // to start the loading animation
      this.$store.state.loading_status = "open";

      await axios
        .get(this.$store.state.APIS.auth.get_admin_cv)
        .then((response) => {
          // change the page status
          this.page_status = "open";

          // to stop the loading animation
          this.$store.state.loading_status = "close";

          // set the cv to cv var in store
          this.$store.state.cv = response.data.cv_path.cv;
        })
        .catch((error) => {
          // to stop the loading animation
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
@import "../sass/varibels";
// darck and light English style
.cv-page-darck-English-open {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  padding-top: 10%;
  transition-duration: 0.5s;

  @media (max-width: $mobile) {
    padding-top: 20%;
  }

  .cont {
    width: 70%;
    height: 100%;
    margin: auto;
    opacity: 1;
    transition-duration: 0.5s;

    @media (max-width: $mobile) {
      width: 90%;
    }

    h1 {
      width: 100%;
      height: auto;
      margin: 10px 0px;
      color: $white;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
}

.cv-page-darck-English-close {
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  padding-top: 30%;

  .cont {
    opacity: 0;
  }
}

.cv-page-light-English-open {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  background-color: $white-one;
  padding-top: 10%;
  transition-duration: 0.5s;

  @media (max-width: $mobile) {
    padding-top: 20%;
  }

  .cont {
    width: 70%;
    height: 100%;
    margin: auto;
    opacity: 1;
    transition-duration: 0.5s;

    @media (max-width: $mobile) {
      width: 90%;
    }

    h1 {
      width: 100%;
      height: auto;
      margin: 10px 0px;
      color: $black;
      border: 1px solid;
      border-color: transparent transparent $black transparent;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
}

.cv-page-light-English-close {
  width: 100%;
  min-height: 100vh;
  background-color: $white-one;
  padding-top: 30%;

  .cont {
    opacity: 0;
  }
}
// darck and light English style

// darck and light Arabic style
.cv-page-darck-Arabic-open {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  padding-top: 10%;
  transition-duration: 0.5s;

  @media (max-width: $mobile) {
    padding-top: 20%;
  }

  .cont {
    width: 70%;
    height: 100%;
    margin: auto;
    opacity: 1;
    transition-duration: 0.5s;

    @media (max-width: $mobile) {
      width: 90%;
    }

    h1 {
      width: 100%;
      height: auto;
      margin: 10px 0px;
      color: $white;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
}

.cv-page-darck-Arabic-close {
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  padding-top: 30%;

  .cont {
    opacity: 0;
  }
}

.cv-page-light-Arabic-open {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  background-color: $white-one;
  padding-top: 10%;
  transition-duration: 0.5s;

  @media (max-width: $mobile) {
    padding-top: 20%;
  }

  .cont {
    width: 70%;
    height: 100%;
    margin: auto;
    opacity: 1;
    transition-duration: 0.5s;

    @media (max-width: $mobile) {
      width: 90%;
    }

    h1 {
      width: 100%;
      height: auto;
      margin: 10px 0px;
      color: $black;
      border: 1px solid;
      border-color: transparent transparent $black transparent;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
}

.cv-page-light-Arabic-close {
  width: 100%;
  min-height: 100vh;
  background-color: $white-one;
  padding-top: 30%;

  .cont {
    opacity: 0;
  }
}
// darck and light Arabic style
</style>
