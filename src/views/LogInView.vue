<template>
  <div :class="`${this.$store.state.language}-${this.$store.state.mood}-page`">
    <div :class="`cont-${this.status}`">
      <h1>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.Login_page.title
            : this.$store.state.Arabic.Login_page.title
        }}
      </h1>

      <label for="email">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.Login_page.email_label
            : this.$store.state.Arabic.Login_page.email_label
        }}
      </label>

      <input
        v-model="this.email"
        type="email"
        :placeholder="
          this.$store.state.language == `English`
            ? this.$store.state.English.Login_page.email_placeholder
            : this.$store.state.Arabic.Login_page.email_placeholder
        "
        id="email"
      />

      <label for="password">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.Login_page.password_label
            : this.$store.state.Arabic.Login_page.password_label
        }}
      </label>

      <div class="password">
        <icon icon="eye" :id="this.eye_status" @click="ShowOrHidd" />

        <input
          v-model="this.password"
          id="password"
          :type="this.password_input_status"
          :placeholder="
            this.$store.state.language == `English`
              ? this.$store.state.English.Login_page.password_placeholder
              : this.$store.state.Arabic.Login_page.password_placeholder
          "
        />
      </div>

      <button @click="LogInMethod">
        {{
          this.$store.state.language == `English`
            ? this.$store.state.English.Login_page.button
            : this.$store.state.Arabic.Login_page.button
        }}
      </button>

      <p>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.global_message
            : this.$store.state.Arabic.global_message
        }}
        {{ new Date().getFullYear() }}
      </p>
    </div>
  </div>
</template>

<script>
// import axios libbery
import axios from "axios";

export default {
  name: "log-in-page",
  data() {
    return {
      // page status
      status: "close",

      // password's input status
      password_input_status: "password",

      // eye status
      eye_status: "hidd",

      // email
      email: "",

      // password
      password: "",
    };
  },
  mounted() {
    // change the page status after 500 ms to open the page with animation
    setTimeout(() => {
      this.status = "open";
    }, 500);
  },
  methods: {
    // show or hiss the password
    ShowOrHidd() {
      // change the eye status
      this.eye_status = this.eye_status == "show" ? "hidd" : "show";

      // change the password's input status
      this.password_input_status =
        this.password_input_status == "password" ? "text" : "password";
    },

    // log in method
    async LogInMethod() {
      // to open the loading animation
      this.$store.state.loading_status = "open";

      // create the body
      const body = {
        email: this.email,
        password: this.password,
      };

      try {
        await axios
          .post(this.$store.state.APIS.auth.log_in, body)
          .then((response) => {
            // save the admin data in local storage
            window.localStorage.setItem(
              "sultan-site",
              JSON.stringify({
                admin: response.data.admin_data,
                token: response.data.token,
              })
            );

            // to close the loading animation
            this.$store.state.loading_status = "close";
          })
          .catch((error) => {
            // to close the loading animation
            this.$store.state.loading_status = "close";

            // emptying the inputs
            this.email = "";
            this.password = "";

            // to set the reqeust's error message to error message var in store
            this.$store.state.error_object = error.response.data.message;

            // to open the error form
            this.$store.state.error_message_status = "open";
          });
      } catch (error) {
        // to close the loading animation
        this.$store.state.loading_status = "close";

        // emptying the inputs
        this.email = "";
        this.password = "";

        // to set the reqeust's error message to error message var in store
        this.$store.state.error_message = error.response.data.message;

        // to open the error form
        this.$store.state.error_message_status = "open";
      }
    },
  },
};
</script>

<style lang="scss">
@import "../sass/varibels";
// darck and light English style
.English-darck-page {
  direction: ltr;
  width: 100%;
  height: 100vh;
  background-color: $Navy-blue-for;
  display: flex;
  justify-content: center;
  align-items: center;

  .cont-close {
    width: 60%;
    max-height: 70vh;
    margin-top: 30%;
    background-color: $Navy-blue-one;
    border-radius: 5px;
    opacity: 0;
    transition-duration: 0.5s;

    h1 {
      width: 98%;
      height: 50px;
      margin: 1% 1% 10px 1%;
      border-radius: 5px;
      color: $white;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $Navy-blue-for;
    }

    label {
      color: $white;
      margin: 0px 5%;
      font-size: $small;
    }

    input {
      width: 90%;
      height: 40px;
      border-radius: 5px;
      outline: none;
      padding: 0px 5px;
      border: 1px solid $Navy-blue-three;
      background-color: $ff;
      margin: 10px 5%;
    }

    .password {
      width: 90%;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 5%;
      border-radius: 5px;
      position: relative;
      border: 1px solid $Navy-blue-three;
      background-color: $ff;

      input {
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        padding: 0px;
        border-radius: 0px;
        background-color: transparent;
      }

      #hidd {
        padding: 8px;
        border-radius: 4px;
        margin: 0px 3px;
        cursor: pointer;
        background-color: $white;
      }

      #show {
        @extend #hidd;
        background-color: $Navy-blue-for;
        color: $white;
      }
    }

    @media (max-width: $mobile) {
      width: 90%;
    }

    button {
      width: 90%;
      height: 40px;
      border: none;
      outline: none;
      background: linear-gradient(to right, $gold-for, $gold-tow, $gold-three);
      border-radius: 5px;
      color: $white;
      cursor: pointer;
      margin: 10px 5%;
    }

    p {
      width: auto;
      text-align: center;
      height: auto;
      color: $white;
      margin: 5px 0px;
      font-size: $x-small;
    }
  }

  .cont-open {
    @extend .cont-close;
    margin-top: 10%;
    opacity: 1;
  }
}

.English-light-page {
  direction: ltr;
  width: 100%;
  height: 100vh;
  background-color: $white-for;
  display: flex;
  justify-content: center;
  align-items: center;

  .cont-close {
    width: 60%;
    max-height: 70vh;
    margin-top: 30%;
    background-color: $white-one;
    border-radius: 5px;
    opacity: 0;
    transition-duration: 0.5s;

    h1 {
      width: 98%;
      height: 50px;
      margin: 1% 1% 10px 1%;
      border-radius: 5px;
      color: $black;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $white-for;
    }

    label {
      color: $black;
      margin: 0px 5%;
      font-size: $small;
    }

    input {
      width: 90%;
      height: 40px;
      border-radius: 5px;
      outline: none;
      padding: 0px 5px;
      border: 1px solid $white-three;
      background-color: $ff;
      margin: 10px 5%;
    }

    .password {
      width: 90%;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 5%;
      border-radius: 5px;
      position: relative;
      border: 1px solid $white-three;
      background-color: $ff;

      input {
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        padding: 0px;
        border-radius: 0px;
        background-color: transparent;
      }

      #hidd {
        padding: 8px;
        border-radius: 4px;
        margin: 0px 3px;
        cursor: pointer;
        background-color: $white;
      }

      #show {
        @extend #hidd;
        background-color: $Navy-blue-one;
        color: $white;
      }
    }

    @media (max-width: $mobile) {
      width: 90%;
    }

    button {
      width: 90%;
      height: 40px;
      border: none;
      outline: none;
      background: linear-gradient(to right, $gold-for, $gold-tow, $gold-three);
      border-radius: 5px;
      color: $white;
      cursor: pointer;
      margin: 10px 5%;
    }

    p {
      width: auto;
      text-align: center;
      height: auto;
      color: $white;
      margin: 5px 0px;
      font-size: $x-small;
    }
  }

  .cont-open {
    @extend .cont-close;
    margin-top: 10%;
    opacity: 1;
  }
}
// darck and light English style

// darck and light Arabic style
.Arabic-darck-page {
  direction: rtl;
  @extend .English-darck-page;
}

.Arabic-light-page {
  direction: rtl;
  @extend .English-light-page;
}
// darck and light Arabic style
</style>
