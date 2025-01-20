<template>
  <div
    :class="`install-page-${this.$store.state.mood}-${this.$store.state.language}-${this.page_status}`"
  >
    <div class="cont">
      <h1>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.install_page.title
            : this.$store.state.Arabic.install_page.title
        }}
      </h1>
      <img src="../assets/logo.png" alt="" />
      <p>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.install_page.message
            : this.$store.state.Arabic.install_page.message
        }}
      </p>
      <button @click="install">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.install_page.button
            : this.$store.state.Arabic.install_page.button
        }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "install-app-page",
  data() {
    return {
      deferredPrompt: null,
      open_cont: "close",
      // page status
      page_status: "close",
    };
  },
  mounted() {
    // change the page status afet 0.5s
    setTimeout(() => {
      this.page_status = "open";
    }, 500);
  },
  created() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
    });
  },
  methods: {
    install() {
      if (this.deferredPrompt) {
        this.$store.state.loading_status = "open";
        this.deferredPrompt.prompt();

        this.deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            console.log("User accepted the A2HS prompt");
            // Show success message (if needed)
            this.$store.state.error_object = {
              title: {
                english: "🥳Is down🥳",
                arabic: "🥳تم التنزيل🥳",
              },
              type: "Success",
              messages: {
                english: "App installed successfully",
                arabic: "تم تنزيل التطبيق بنجاح",
              },
              status: 200,
            };
          } else {
            console.log("User dismissed the A2HS prompt");
            // Show error message (if needed)
            this.$store.state.error_object = {
              title: {
                english: "😓Error😓",
                arabic: "😓خطأ😓",
              },
              type: "Error",
              messages: {
                english: "Sorry, cann't install the app",
                arabic: "عذرا لا يمكن تنزيل التطبيق",
              },
              status: 403,
            };
          }
          this.$store.state.loading_status = "close";
          this.$store.commit("OpenOrCloseMessageForm");
          this.$store.commit("ChangeMEssageFormStatus");
          this.deferredPrompt = null;
        });
      } else {
        // Handle case where deferredPrompt is not available
        console.warn("deferredPrompt is not available");
        // Show error message to the user
        this.$store.state.error_object = {
          title: {
            english: "😓Error😓",
            arabic: "😓خطأ😓",
          },
          type: "Error",
          messages: {
            english: "Sorry, cann't install the app",
            arabic: "عذرا لا يمكن تنزيل التطبيق",
          },
          status: 403,
        };
        this.$store.commit("OpenOrCloseMessageForm");
        this.$store.commit("ChangeMEssageFormStatus");
      }
    },
  },
};
</script>

<style lang="scss">
@import "../sass/varibels";
// darck and light English style
.install-page-darck-English-open {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  transition-duration: 0.5s;
  padding: 15% 0px 10px 0px;

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
      margin: 10px 0px;
      color: $white;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
    }

    img {
      width: 60%;
      height: auto;
      margin: 10px 20%;
    }

    p {
      width: 90%;
      height: auto;
      margin: 20px 5%;
      text-align: center;
      color: $white;
    }

    button {
      width: 80%;
      height: 40px;
      margin: 10px 10%;
      border: none;
      outline: none;
      transition-duration: 0.5s;
      background-color: $error-green-tow;
      border: 1px solid $error-green-one;
      color: $white;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: $error-green-one;
    }
  }
}

.install-page-darck-English-close {
  @extend .install-page-darck-English-open;
  padding-top: 30%;
  .cont {
    opacity: 0;
  }
}

.install-page-light-English-open {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  background-color: $white-one;
  transition-duration: 0.5s;
  padding: 15% 0px 10px 0px;

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
      margin: 10px 0px;
      color: $black;
      border: 1px solid;
      border-color: transparent transparent $black transparent;
    }

    img {
      width: 60%;
      height: auto;
      margin: 10px 20%;
    }

    p {
      width: 90%;
      height: auto;
      margin: 20px 5%;
      text-align: center;
      color: $black;
    }

    button {
      width: 80%;
      height: 40px;
      margin: 10px 10%;
      border: none;
      outline: none;
      transition-duration: 0.5s;
      background-color: $error-green-tow;
      border: 1px solid $error-green-one;
      color: $white;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: $error-green-one;
    }
  }
}

.install-page-light-English-close {
  @extend .install-page-light-English-open;
  padding-top: 30%;
  .cont {
    opacity: 0;
  }
}
// darck and light English style

// darck and light Arabic style
.install-page-darck-Arabic-open {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  transition-duration: 0.5s;
  padding: 15% 0px 10px 0px;

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
      margin: 10px 0px;
      color: $white;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
    }

    img {
      width: 60%;
      height: auto;
      margin: 10px 20%;
    }

    p {
      width: 90%;
      height: auto;
      margin: 20px 5%;
      text-align: center;
      color: $white;
    }

    button {
      width: 80%;
      height: 40px;
      margin: 10px 10%;
      border: none;
      outline: none;
      transition-duration: 0.5s;
      background-color: $error-green-tow;
      border: 1px solid $error-green-one;
      color: $white;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: $error-green-one;
    }
  }
}

.install-page-darck-Arabic-close {
  @extend .install-page-darck-Arabic-open;
  padding-top: 30%;
  .cont {
    opacity: 0;
  }
}

.install-page-light-Arabic-open {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  background-color: $white-one;
  transition-duration: 0.5s;
  padding: 15% 0px 10px 0px;

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
      margin: 10px 0px;
      color: $black;
      border: 1px solid;
      border-color: transparent transparent $black transparent;
    }

    img {
      width: 60%;
      height: auto;
      margin: 10px 20%;
    }

    p {
      width: 90%;
      height: auto;
      margin: 20px 5%;
      text-align: center;
      color: $black;
    }

    button {
      width: 80%;
      height: 40px;
      margin: 10px 10%;
      border: none;
      outline: none;
      transition-duration: 0.5s;
      background-color: $error-green-tow;
      border: 1px solid $error-green-one;
      color: $white;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: $error-green-one;
    }
  }
}

.install-page-light-Arabic-close {
  @extend .install-page-light-Arabic-open;
  padding-top: 30%;
  .cont {
    opacity: 0;
  }
}
// darck and light Arabic style
</style>
