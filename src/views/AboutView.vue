<template>
  <div
    :class="`about-page-${this.$store.state.mood}-${this.$store.state.language}-${this.page_status}`"
  >
    <div :class="`cont-${this.page_status}`">
      <!-- message one -->
      <h1 class="message-one">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.messages.about_message_one
            : this.$store.state.Arabic.messages.about_message_one
        }}
      </h1>
      <!-- message one -->

      <div class="avatar-name-cont">
        <h2 class="name" v-if="this.$store.state.admin_info">
          {{
            this.$store.state.language == "English"
              ? this.$store.state.admin_info.english_name
              : this.$store.state.admin_info.arabic_name
          }}
        </h2>
        <img
          v-if="this.$store.state.admin_info"
          :src="this.$store.state.admin_info.avatar"
          alt=""
        />
      </div>

      <!-- description  -->
      <div class="description">
        <h3>
          {{
            this.$store.state.language == "English"
              ? this.$store.state.English.about_page.description
              : this.$store.state.Arabic.about_page.description
          }}
        </h3>

        <p>
          {{
            this.$store.state.language == "English"
              ? this.$store.state.admin_info.english_description
              : this.$store.state.admin_info.arabic_description
          }}
        </p>
      </div>
      <!-- description  -->

      <FooterComponent />
    </div>
  </div>
</template>

<script>
// import axios
import axios from "axios";
import FooterComponent from "@/components/global/FooterComponent.vue";

export default {
  name: "aboutView",
  data() {
    return {
      // page status
      page_status: "close",
    };
  },
  components: { FooterComponent },
  mounted() {
    this.get_admin_info();

    setTimeout(() => {
      // starte the loading animation
      this.$store.state.loading_status = "open";
    }, 200);
  },
  methods: {
    async get_admin_info() {
      await axios
        .get(`${this.$store.state.APIS.auth.get_admin_info}/user`)
        .then((response) => {
          // change the page_status
          this.page_status = "open";

          // to stop the loading animation
          this.$store.state.loading_status = "close";

          // set the admin info to admin_info var in store
          this.$store.state.admin_info = response.data.admin_data;
        })
        .catch((error) => {
          // to open the message form
          this.$store.commit("OpenOrCloseMessageForm");

          // set the error to the error_object in store
          this.$store.state.error_object = {
            title: {
              english: "😓Error😓",
              arabic: "😓خطأ😓",
            },
            type: "Error",
            messages: error.response.message,
            status: error.status,
          };

          // to close the message form
          this.$store.commit("ChangeMEssageFormStatus");
        });
    },
  },
};
</script>

<style lang="scss">
@import "../sass/varibels";
// darck and light English style
.about-page-darck-English-open {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  padding: 10% 0px 10px 0px;
  transition-duration: 0.5s;

  @media (max-width: $mobile) {
    padding: 20% 0px 10px 0px;
  }

  .cont-open {
    width: 70%;
    min-height: 100vh;
    transition-duration: 0.5s;
    margin: auto;
    padding: 10px 0px 10% 0px;
    position: relative;

    @media (max-width: $mobile) {
      width: 100%;
      padding: 10px 0px 30% 0px;
    }

    .message-one {
      width: 90%;
      height: auto;
      margin: 10px 5%;
      display: flex;
      padding: 13px 0px;
      justify-content: center;
      align-items: center;
      text-align: center;
      border-radius: 5px;
      background-color: $Navy-blue-tow;
      color: $white;
      font-size: $small;
      box-shadow: 0 0 10px $black;
    }

    .avatar-name-cont {
      width: 90%;
      height: auto;
      margin: 10px 5%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin: 20px 0px 0px 0px;

        @media (max-width: $mobile) {
          width: 120px;
          height: 120px;
        }
      }

      h2 {
        color: $white-one;
        text-decoration: underline;
        color: $gold-for;
        margin: -10% 0px 0px -10%;
        font-size: $xx-large;

        @media (max-width: $mobile) {
          font-size: $x-large;
          margin: -20% 0px 0px 0px;
        }
      }
    }

    .description {
      width: 90%;
      height: auto;
      margin: 10px 5%;

      h3 {
        width: 100%;
        height: auto;
        margin: 10px 0px;
        text-decoration: underline;
        color: $white;
      }

      p {
        width: 90%;
        height: auto;
        margin: 10px 5%;
        color: $white;
      }
    }

    .bio {
      width: 90%;
      height: auto;
      margin: 10px 5%;

      h3 {
        width: 100%;
        height: auto;
        margin: 10px 0px;
        text-decoration: underline;
        color: $white;
      }

      p {
        width: 90%;
        height: auto;
        margin: 10px 5%;
        color: $white;
      }
    }

    .contact-me {
      width: 90%;
      height: auto;
      margin: 10px 5%;

      h3 {
        width: 100%;
        height: auto;
        margin: 10px 0px;
        text-decoration: underline;
        color: $white;
      }

      a {
        color: $white;
      }
    }
  }

  .cont-close {
    @extend .cont-open;
    opacity: 0;
  }
}

.about-page-darck-English-close {
  @extend .about-page-darck-English-open;
  padding: 30% 10px 10px 10px;
}

.about-page-light-English-open {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  background-color: $white-one;
  padding: 10% 0px 10px 0px;
  transition-duration: 0.5s;

  @media (max-width: $mobile) {
    padding: 20% 0px 10px 0px;
  }

  .cont-open {
    width: 70%;
    min-height: 100vh;
    transition-duration: 0.5s;
    margin: auto;
    padding: 10px 0px 10% 0px;
    position: relative;

    @media (max-width: $mobile) {
      width: 100%;
      padding: 10px 0px 30% 0px;
    }

    .message-one {
      width: 90%;
      height: auto;
      margin: 10px 5%;
      display: flex;
      padding: 13px 0px;
      justify-content: center;
      align-items: center;
      text-align: center;
      border-radius: 5px;
      background-color: $white-one;
      color: $black;
      font-size: $small;
      box-shadow: 0 0 10px $black;
    }

    .avatar-name-cont {
      width: 90%;
      height: auto;
      margin: 10px 5%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin: 20px 0px 0px 0px;

        @media (max-width: $mobile) {
          width: 120px;
          height: 120px;
        }
      }

      h2 {
        color: $black;
        text-decoration: underline;
        color: $gold-for;
        margin: -10% 0px 0px -10%;
        font-size: $xx-large;

        @media (max-width: $mobile) {
          font-size: $x-large;
          margin: -20% 0px 0px 0px;
        }
      }
    }

    .description {
      width: 90%;
      height: auto;
      margin: 10px 5%;

      h3 {
        width: 100%;
        height: auto;
        margin: 10px 0px;
        text-decoration: underline;
        color: $black;
      }

      p {
        width: 90%;
        height: auto;
        margin: 10px 5%;
        color: $black;
      }
    }

    .bio {
      width: 90%;
      height: auto;
      margin: 10px 5%;

      h3 {
        width: 100%;
        height: auto;
        margin: 10px 0px;
        text-decoration: underline;
        color: $black;
      }

      p {
        width: 90%;
        height: auto;
        margin: 10px 5%;
        color: $black;
      }
    }

    .contact-me {
      width: 90%;
      height: auto;
      margin: 10px 5%;

      h3 {
        width: 100%;
        height: auto;
        margin: 10px 0px;
        text-decoration: underline;
        color: $black;
      }

      a {
        color: $black;
      }
    }
  }

  .cont-close {
    @extend .cont-open;
    opacity: 0;
  }
}

.about-page-ligh-English-close {
  @extend .about-page-darck-English-open;
  padding: 30% 10px 10px 10px;
}
// darck and light English style

// darck and light Arabic style
.about-page-darck-Arabic-open {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  padding: 10% 0px 10px 0px;
  transition-duration: 0.5s;

  @media (max-width: $mobile) {
    padding: 20% 0px 10px 0px;
  }

  .cont-open {
    width: 70%;
    min-height: 100vh;
    transition-duration: 0.5s;
    margin: auto;
    padding: 10px 0px 10% 0px;
    position: relative;

    @media (max-width: $mobile) {
      width: 100%;
      padding: 10px 0px 30% 0px;
    }

    .message-one {
      width: 90%;
      height: auto;
      margin: 10px 5%;
      display: flex;
      padding: 13px 0px;
      justify-content: center;
      align-items: center;
      text-align: center;
      border-radius: 5px;
      background-color: $Navy-blue-tow;
      color: $white;
      font-size: $small;
      box-shadow: 0 0 10px $black;
    }

    .avatar-name-cont {
      width: 90%;
      height: auto;
      margin: 10px 5%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin: 20px 0px 0px 0px;

        @media (max-width: $mobile) {
          width: 120px;
          height: 120px;
        }
      }

      h2 {
        color: $white-one;
        text-decoration: underline;
        color: $gold-for;
        margin: -10% 0px 0px -10%;
        font-size: $xx-large;

        @media (max-width: $mobile) {
          font-size: $x-large;
          margin: -20% 0px 0px 0px;
        }
      }
    }

    .description {
      width: 90%;
      height: auto;
      margin: 10px 5%;

      h3 {
        width: 100%;
        height: auto;
        margin: 10px 0px;
        text-decoration: underline;
        color: $white;
      }

      p {
        width: 90%;
        height: auto;
        margin: 10px 5%;
        color: $white;
      }
    }

    .bio {
      width: 90%;
      height: auto;
      margin: 10px 5%;

      h3 {
        width: 100%;
        height: auto;
        margin: 10px 0px;
        text-decoration: underline;
        color: $white;
      }

      p {
        width: 90%;
        height: auto;
        margin: 10px 5%;
        color: $white;
      }
    }

    .contact-me {
      width: 90%;
      height: auto;
      margin: 10px 5%;

      h3 {
        width: 100%;
        height: auto;
        margin: 10px 0px;
        text-decoration: underline;
        color: $white;
      }

      a {
        color: $white;
      }
    }
  }

  .cont-close {
    @extend .cont-open;
    opacity: 0;
  }
}

.about-page-darck-Arabic-close {
  @extend .about-page-darck-Arabic-open;
  padding: 30% 10px 10px 10px;
}

.about-page-light-Arabic-open {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  background-color: $white-one;
  padding: 10% 0px 10px 0px;
  transition-duration: 0.5s;

  @media (max-width: $mobile) {
    padding: 20% 0px 10px 0px;
  }

  .cont-open {
    width: 70%;
    min-height: 100vh;
    transition-duration: 0.5s;
    margin: auto;
    padding: 10px 0px 10% 0px;
    position: relative;

    @media (max-width: $mobile) {
      width: 100%;
      padding: 10px 0px 30% 0px;
    }

    .message-one {
      width: 90%;
      height: auto;
      margin: 10px 5%;
      display: flex;
      padding: 13px 0px;
      justify-content: center;
      align-items: center;
      text-align: center;
      border-radius: 5px;
      background-color: $white-one;
      color: $black;
      font-size: $small;
      box-shadow: 0 0 10px $black;
    }

    .avatar-name-cont {
      width: 90%;
      height: auto;
      margin: 10px 5%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin: 20px 0px 0px 0px;

        @media (max-width: $mobile) {
          width: 120px;
          height: 120px;
        }
      }

      h2 {
        color: $black;
        text-decoration: underline;
        color: $gold-for;
        margin: -10% 0px 0px -10%;
        font-size: $xx-large;

        @media (max-width: $mobile) {
          font-size: $x-large;
          margin: -20% 0px 0px 0px;
        }
      }
    }

    .description {
      width: 90%;
      height: auto;
      margin: 10px 5%;

      h3 {
        width: 100%;
        height: auto;
        margin: 10px 0px;
        text-decoration: underline;
        color: $black;
      }

      p {
        width: 90%;
        height: auto;
        margin: 10px 5%;
        color: $black;
      }
    }

    .bio {
      width: 90%;
      height: auto;
      margin: 10px 5%;

      h3 {
        width: 100%;
        height: auto;
        margin: 10px 0px;
        text-decoration: underline;
        color: $black;
      }

      p {
        width: 90%;
        height: auto;
        margin: 10px 5%;
        color: $black;
      }
    }

    .contact-me {
      width: 90%;
      height: auto;
      margin: 10px 5%;

      h3 {
        width: 100%;
        height: auto;
        margin: 10px 0px;
        text-decoration: underline;
        color: $black;
      }

      a {
        color: $black;
      }
    }
  }

  .cont-close {
    @extend .cont-open;
    opacity: 0;
  }
}

.about-page-ligh-Arabic-close {
  @extend .about-page-darck-Arabic-open;
  padding: 30% 10px 10px 10px;
}
// darck and light Arabic style
</style>
