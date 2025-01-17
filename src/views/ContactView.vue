<template>
  <div
    :class="`contact-page-${this.$store.state.mood}-${this.$store.state.language}-${this.page_status}`"
  >
    <div class="cont">
      <h1>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.contact_page.title
            : this.$store.state.Arabic.contact_page.title
        }}
      </h1>

      <p>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.contact_page.helping_message
            : this.$store.state.Arabic.contact_page.helping_message
        }}
      </p>

      <div class="form">
        <label for="name">{{
          this.$store.state.language == "English"
            ? this.$store.state.English.contact_page.name_label
            : this.$store.state.Arabic.contact_page.name_label
        }}</label>
        <input type="text" v-model="this.name" id="name" />

        <label for="email">{{
          this.$store.state.language == "English"
            ? this.$store.state.English.contact_page.email_label
            : this.$store.state.Arabic.contact_page.email_label
        }}</label>
        <input type="email" v-model="this.email" id="email" />

        <label for="message">{{
          this.$store.state.language == "English"
            ? this.$store.state.English.contact_page.message_label
            : this.$store.state.Arabic.contact_page.message_label
        }}</label>
        <textarea name="" id="message"></textarea>

        <button @click="send_email">
          {{
            this.$store.state.language == "English"
              ? this.$store.state.English.contact_page.send_btn
              : this.$store.state.Arabic.contact_page.send_btn
          }}
        </button>
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
        <a :href="`tel:${this.$store.state.sulta_links.phone}`" target="_blank">
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "contact-page",
  data() {
    return {
      // page status
      page_status: "close",
      // email
      email: "",
      // name
      name: "",
      // message
      message: "",
    };
  },
  mounted() {
    // call to get get_admin_links method
    this.get_admin_links();
  },
  methods: {
    async get_admin_links() {
      // start the loading
      this.$store.state.loading_status = "open";

      await axios
        .get(this.$store.state.APIS.auth.get_admin_links, {
          name: this.name,
          email: this.email,
          message: this.messaeg,
        })
        .then((response) => {
          // stop the loading
          this.$store.state.loading_status = "close";

          // change the page_status
          this.page_status = "open";

          // to stop the loading animation
          this.$store.state.loading_status = "close";

          // set the admin info to admin_info var in store
          this.$store.state.sulta_links = response.data.admin_data;
        })
        .catch((error) => {
          // stop the loading
          this.$store.state.loading_status = "close";

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

    // send email method
    async send_email() {
      await axios
        .post(this.$store.state.sulta_links.email_address)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
@import "../sass/varibels";
// darck and light English style
.contact-page-darck-English-open {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  padding: 15% 0px 10px 0px;
  transition-duration: 0.5s;

  @media (max-width: $mobile) {
    padding: 20% 0px 5px 0px;
  }

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
      color: $white;
      border: 1px solid $white;
      border-color: transparent transparent $white transparent;
    }

    p {
      width: 100%;
      height: auto;
      margin: 10px 0px;
      color: $white;

      @media (max-width: $mobile) {
        font-size: $x-small;
      }
    }

    .form {
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      padding-top: 20px;

      label {
        width: 100%;
        height: auto;
        margin: 10px 0px 5px 0px;
        color: $white;
        border: 1px solid;
        border-color: transparent transparent $white transparent;
      }

      input {
        width: 100%;
        height: 40px;
        margin: 10px 0px;
        border-radius: 5px;
        border: 1px solid $inputs-border-black;
        background-color: $inputs-back-black;
        color: $white;
        outline: none;
        padding: 10px;
      }

      textarea {
        width: 100%;
        height: 200px;
        margin: 10px 0px;
        border-radius: 5px;
        color: $white;
        border: 1px solid $inputs-border-black;
        background-color: $inputs-back-black;
        outline: none;
        resize: none;
        padding: 10px;
      }

      button {
        width: 100%;
        height: 40px;
        border-radius: 5px;
        cursor: pointer;
        color: $white;
        background-color: $error-green-tow;
        border: 1px solid $error-green-one;
        transition-duration: 0.5s;
      }

      button:hover {
        background-color: $error-green-one;
      }
    }

    .cont-tow {
      width: 100%;
      height: auto;
      margin: 40px 0px 0px 0px;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      border: 1px solid;
      border-color: $white transparent transparent transparent;
      position: relative;
      bottom: 0%;

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
}

.contact-page-darck-English-close {
  @extend .contact-page-darck-English-open;
  padding-top: 30%;

  .cont {
    opacity: 0;
  }
}

.contact-page-light-English-open {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  background-color: $white-one;
  padding: 15% 0px 10px 0px;
  transition-duration: 0.5s;

  @media (max-width: $mobile) {
    padding: 20% 0px 10px 0px;
  }

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
      color: $black;
      border: 1px solid $black;
      border-color: transparent transparent $black transparent;
    }

    p {
      width: 100%;
      height: auto;
      margin: 10px 0px;
      color: $black;

      @media (max-width: $mobile) {
        font-size: $x-small;
      }
    }

    .form {
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      padding-top: 20px;

      label {
        width: 100%;
        height: auto;
        margin: 10px 0px 5px 0px;
        color: $black;
        border: 1px solid;
        border-color: transparent transparent $black transparent;
      }

      input {
        width: 100%;
        height: 40px;
        margin: 10px 0px;
        border-radius: 5px;
        border: 1px solid $inputs-border-black;
        background-color: $inputs-back-black;
        color: $black;
        outline: none;
        padding: 10px;
      }

      textarea {
        width: 100%;
        height: 200px;
        margin: 10px 0px;
        border-radius: 5px;
        color: $black;
        border: 1px solid $inputs-border-black;
        background-color: $inputs-back-black;
        outline: none;
        resize: none;
        padding: 10px;
      }

      button {
        width: 100%;
        height: 40px;
        border-radius: 5px;
        cursor: pointer;
        color: $white;
        background-color: $error-green-tow;
        border: 1px solid $error-green-one;
        transition-duration: 0.5s;
      }

      button:hover {
        background-color: $error-green-one;
      }
    }

    .cont-tow {
      width: 100%;
      height: auto;
      margin: 40px 0px 0px 0px;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      border: 1px solid;
      border-color: $black transparent transparent transparent;
      position: relative;
      bottom: 0%;

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
}

.contact-page-light-English-close {
  @extend .contact-page-light-English-open;
  padding-top: 30%;

  .cont {
    opacity: 0;
  }
}
// darck and light English style

// darck and light Arabic style
.contact-page-darck-Arabic-open {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  padding: 15% 0px 10px 0px;
  transition-duration: 0.5s;

  @media (max-width: $mobile) {
    padding: 20% 0px 10px 0px;
  }

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
      color: $white;
      border: 1px solid $white;
      border-color: transparent transparent $white transparent;
    }

    p {
      width: 100%;
      height: auto;
      margin: 10px 0px;
      color: $white;

      @media (max-width: $mobile) {
        font-size: $x-small;
      }
    }

    .form {
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      padding-top: 20px;

      label {
        width: 100%;
        height: auto;
        margin: 10px 0px 5px 0px;
        color: $white;
        border: 1px solid;
        border-color: transparent transparent $white transparent;
      }

      input {
        width: 100%;
        height: 40px;
        margin: 10px 0px;
        border-radius: 5px;
        border: 1px solid $inputs-border-black;
        background-color: $inputs-back-black;
        color: $white;
        outline: none;
        padding: 10px;
      }

      textarea {
        width: 100%;
        height: 200px;
        margin: 10px 0px;
        border-radius: 5px;
        color: $white;
        border: 1px solid $inputs-border-black;
        background-color: $inputs-back-black;
        outline: none;
        resize: none;
        padding: 10px;
      }

      button {
        width: 100%;
        height: 40px;
        border-radius: 5px;
        cursor: pointer;
        color: $white;
        background-color: $error-green-tow;
        border: 1px solid $error-green-one;
        transition-duration: 0.5s;
      }

      button:hover {
        background-color: $error-green-one;
      }
    }

    .cont-tow {
      width: 100%;
      height: auto;
      margin: 40px 0px 0px 0px;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      border: 1px solid;
      border-color: $white transparent transparent transparent;
      position: relative;
      bottom: 0%;

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
}

.contact-page-darck-Arabic-close {
  @extend .contact-page-darck-Arabic-open;
  padding-top: 30%;

  .cont {
    opacity: 0;
  }
}

.contact-page-light-Arabic-open {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  background-color: $white-one;
  padding: 15% 0px 10px 0px;
  transition-duration: 0.5s;

  @media (max-width: $mobile) {
    padding: 20% 0px 10px 0px;
  }

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
      color: $black;
      border: 1px solid $black;
      border-color: transparent transparent $black transparent;
    }

    p {
      width: 100%;
      height: auto;
      margin: 10px 0px;
      color: $black;

      @media (max-width: $mobile) {
        font-size: $x-small;
      }
    }

    .form {
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      padding-top: 20px;

      label {
        width: 100%;
        height: auto;
        margin: 10px 0px 5px 0px;
        color: $black;
        border: 1px solid;
        border-color: transparent transparent $black transparent;
      }

      input {
        width: 100%;
        height: 40px;
        margin: 10px 0px;
        border-radius: 5px;
        border: 1px solid $inputs-border-black;
        background-color: $inputs-back-black;
        color: $black;
        outline: none;
        padding: 10px;
      }

      textarea {
        width: 100%;
        height: 200px;
        margin: 10px 0px;
        border-radius: 5px;
        color: $black;
        border: 1px solid $inputs-border-black;
        background-color: $inputs-back-black;
        outline: none;
        resize: none;
        padding: 10px;
      }

      button {
        width: 100%;
        height: 40px;
        border-radius: 5px;
        cursor: pointer;
        color: $white;
        background-color: $error-green-tow;
        border: 1px solid $error-green-one;
        transition-duration: 0.5s;
      }

      button:hover {
        background-color: $error-green-one;
      }
    }

    .cont-tow {
      width: 100%;
      height: auto;
      margin: 40px 0px 0px 0px;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      border: 1px solid;
      border-color: $black transparent transparent transparent;
      position: relative;
      bottom: 0%;

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
}

.contact-page-light-Arabic-close {
  @extend .contact-page-light-Arabic-open;
  padding-top: 30%;

  .cont {
    opacity: 0;
  }
}
// darck and light Arabic style
</style>
