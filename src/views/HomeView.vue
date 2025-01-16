<template>
  <div
    :class="`home-page-${this.$store.state.mood}-${this.$store.state.language}`"
  >
    <img src="../assets/test.jpg" class="" />
    <div :class="`container-${this.page_status}`">
      <div class="cont-info">
        <div class="cont-one">
          <img src="../assets/logo.png" alt="logo" class="logo" />
          <h2>
            {{
              this.$store.state.language == "English"
                ? this.$store.state.English.name
                : this.$store.state.Arabic.name
            }}
          </h2>
          <p>
            {{
              this.$store.state.language == "English"
                ? this.$store.state.English.note
                : this.$store.state.Arabic.note
            }}
          </p>
        </div>
        <div class="cont-tow">
          <a :href="this.$store.state.sulta_links.linkedIn" target="_blank">
            <img src="../assets/linkedin.png" alt="" />
          </a>
          <a :href="this.$store.state.sulta_links.behance" target="_blank">
            <img src="../assets/behanse.png" alt="" />
          </a>
          <a :href="this.$store.state.sulta_links.instgram" target="_blank">
            <img src="../assets/instgram.png" alt="" />
          </a>
          <a :href="this.$store.state.sulta_links.facebook" target="_blank">
            <img src="../assets/facebook.png" alt="" />
          </a>
          <a
            :href="`tel:${this.$store.state.sulta_links.phone}`"
            target="_blank"
          >
            <img src="../assets/phone.png" alt="" />
          </a>
          <router-link to="contact">
            <img src="../assets/email.png" alt="" />
          </router-link>
          <a
            :href="`https://wa.me/${this.$store.state.sulta_links.whattsapp}`"
            target="_blank"
          >
            <img src="../assets/whattsapp.png" alt="" />
          </a>
          <a :href="this.$store.state.sulta_links.telegram" target="_blank">
            <img src="../assets/telegram.png" alt="" />
          </a>
        </div>
      </div>
      <button @click="change_page">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.buttons.discovr
            : this.$store.state.Arabic.buttons.discovr
        }}
      </button>
    </div>
  </div>
</template>

<script>
// import axios
import axios from "axios";
// import FooterComponent from "@/components/global/FooterComponent.vue";

export default {
  name: "HomeView",
  data() {
    return {
      // page status
      page_status: "close",
    };
  },
  components: {},
  mounted() {
    this.get_admin_links();
    setTimeout(() => {
      // starte the page animation
      this.page_status = "open";
    }, 200);
  },
  methods: {
    // change page method
    change_page() {
      window.location = "/about";
    },

    async get_admin_links() {
      await axios
        .get(this.$store.state.APIS.auth.get_admin_links)
        .then((response) => {
          // change the page_status
          this.page_status = "open";

          // to stop the loading animation
          this.$store.state.loading_status = "close";

          // set the admin info to admin_info var in store
          this.$store.state.sulta_links = response.data.admin_data;
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
.home-page-darck-English {
  direction: ltr;
  width: 100%;
  height: 100vh;
  background-color: $Navy-blue-for;
  overflow: hidden;
  position: relative;

  img {
    width: 150%;
    height: 150%;
  }

  .container-open {
    width: 100%;
    min-height: 100vh;
    transition-duration: 0.5s;
    padding-top: 40%;
    background-color: $Navy-blue-darck;
    position: fixed;
    top: 0%;
    left: 0%;

    @media (min-width: $mobile) {
      padding-top: 10%;
    }

    .cont-info {
      width: 30%;
      height: 100px;
      color: $gold-for;
      margin: auto;
      transition-duration: 1;

      @media (max-width: $mobile) {
        width: 80%;
        left: 10%;
      }

      .cont-one {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        border: 1px solid;
        border-color: transparent transparent $white transparent;

        img {
          width: 80px;
          height: 80px;

          @media (max-width: $mobile) {
            width: 60px;
            height: 60px;
          }
        }

        h2 {
          width: auto;
          height: auto;
        }

        p {
          width: 100%;
          height: auto;
          color: $white;
          margin: 10px 0px;
          text-align: center;

          @media (max-width: $mobile) {
            font-size: $x-small;
          }
        }
      }

      .cont-tow {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        a {
          width: 25%;
          height: 50%;
          margin: 20px 0px;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 20px;
            height: 20px;
            margin: 20px 0px;
          }
        }
      }
    }

    button {
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      position: absolute;
      bottom: 15%;
      left: 35%;
      z-index: 20;
      border: none;
      background: linear-gradient(to top, $gold-five, $gold-tow, $gold-five);
      // background-color: $gold-five;
      color: $white;
      @media (min-width: $mobile) {
        left: 45%;
      }
    }
  }

  .container-close {
    @extend .container-open;
    opacity: 0;
    padding: 50% 0px 0px 0px;
  }
}

.home-page-light-English {
  direction: ltr;
  width: 100%;
  height: 100vh;
  background-color: $white-one;
  overflow: hidden;
  position: relative;

  img {
    width: 150%;
    height: 150%;
  }

  .container-open {
    width: 100%;
    min-height: 100vh;
    transition-duration: 0.5s;
    padding-top: 40%;
    background-color: $gold;
    position: fixed;
    top: 0%;
    left: 0%;

    @media (min-width: $mobile) {
      padding-top: 10%;
    }

    .cont-info {
      width: 30%;
      height: 100px;
      color: $gold-for;
      margin: auto;
      transition-duration: 1;

      @media (max-width: $mobile) {
        width: 80%;
        left: 10%;
      }

      .cont-one {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        border: 1px solid;
        border-color: transparent transparent $black transparent;

        img {
          width: 80px;
          height: 80px;

          @media (max-width: $mobile) {
            width: 60px;
            height: 60px;
          }
        }

        h2 {
          width: auto;
          height: auto;
        }

        p {
          width: 100%;
          height: auto;
          color: $black;
          margin: 10px 0px;
          text-align: center;

          @media (max-width: $mobile) {
            font-size: $x-small;
          }
        }
      }

      .cont-tow {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        a {
          width: 25%;
          height: 50%;
          margin: 20px 0px;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 20px;
            height: 20px;
            margin: 20px 0px;
          }
        }
      }
    }

    button {
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      position: absolute;
      bottom: 15%;
      left: 35%;
      z-index: 20;
      border: none;
      background: linear-gradient(to top, $gold-five, $gold-tow, $gold-five);
      // background-color: $gold-five;
      color: $white;
      @media (min-width: $mobile) {
        left: 45%;
      }
    }
  }

  .container-close {
    @extend .container-open;
    opacity: 0;
    padding: 50% 0px 0px 0px;
  }
}
// darck and light English style

// darck and light Arabic style
.home-page-darck-Arabic {
  direction: rtl;
  @extend .home-page-darck-English;
}

.home-page-light-Arabic {
  direction: rtl;
  @extend .home-page-light-English;
}
// darck and light Arabic style
</style>
