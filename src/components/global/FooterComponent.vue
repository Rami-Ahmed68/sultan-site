<template>
  <div
    :class="`footer-${this.$store.state.language}-${this.$store.state.mood}`"
  >
    <h4>
      {{
        this.$store.state.language == "English"
          ? this.$store.state.sulta_links.english_name
          : this.$store.state.sulta_links.arabic_name
      }}
    </h4>
    <div class="cont-tow">
      <a :href="this.$store.state.sulta_links.linkedIn" target="_blank">
        <img src="../../assets/linkedin.png" alt="" />
      </a>
      <a :href="this.$store.state.sulta_links.behance" target="_blank">
        <img src="../../assets/behanse.png" alt="" />
      </a>
      <a :href="this.$store.state.sulta_links.instgram" target="_blank">
        <img src="../../assets/instgram.png" alt="" />
      </a>
      <a :href="this.$store.state.sulta_links.facebook" target="_blank">
        <img src="../../assets/facebook.png" alt="" />
      </a>
      <a :href="`tel:${this.$store.state.sulta_links.phone}`" target="_blank">
        <img src="../../assets/phone.png" alt="" />
      </a>
      <router-link to="contact">
        <img src="../../assets/email.png" alt="" />
      </router-link>
      <a
        :href="`https://wa.me/${this.$store.state.sulta_links.whattsapp}`"
        target="_blank"
      >
        <img src="../../assets/whattsapp.png" alt="" />
      </a>
      <a :href="this.$store.state.sulta_links.telegram" target="_blank">
        <img src="../../assets/telegram.png" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "footer-component",
  data() {
    return {};
  },
  mounted() {
    // call to get admin links method
    this.get_admin_links();
  },
  methods: {
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
@import "../../sass/varibels";
// darck and light English style
.footer-English-darck {
  direction: ltr;
  width: 90%;
  height: auto;
  margin: 10px 5%;
  position: absolute;
  bottom: 0px;
  margin-top: 40px;

  h4 {
    width: 100%;
    height: auto;
    color: $gold-for;
  }

  .cont-tow {
    width: 100%;
    height: auto;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border: 1px solid;
    border-color: $white transparent transparent transparent;

    a {
      width: 25%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 20px;
        height: 20px;
        margin-top: 20px;
      }
    }
  }
}

.footer-English-light {
  @extend .footer-English-darck;

  h4 {
    width: 100%;
    height: auto;
    color: $gold-for;
  }

  .cont-tow {
    width: 100%;
    height: auto;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border: 1px solid;
    border-color: $black transparent transparent transparent;

    a {
      width: 25%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 20px;
        height: 20px;
        margin-top: 20px;
      }
    }
  }
}
// darck and light English style

// darck and light English style
.footer-Arabic-darck {
  @extend .footer-English-darck;
  direction: rtl;
}

.footer-Arabic-light {
  @extend .footer-English-light;
  direction: rtl;
}
// darck and light English style
</style>
