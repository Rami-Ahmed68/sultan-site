<template>
  <div
    :class="`messages-page-${this.$store.state.mood}-${this.$store.state.language}-${this.page_status}`"
  >
    <CopyMessageComponentVue />

    <DeleteMessageComponentVue />
    <div class="cont">
      <h1>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.messages_page.title
            : this.$store.state.Arabic.messages_page.title
        }}
      </h1>

      <img
        src="../assets/no-notifications-victor-art.png"
        alt="victor art"
        v-if="this.$store.state.messages_default_victor_status == 'open'"
      />

      <MessagesComponentVue
        v-for="(message, index) in this.$store.state.messages_data"
        :message_data="message"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DeleteMessageComponentVue from "@/components/global/DeleteMessageComponentVue.vue";
import CopyMessageComponentVue from "@/components/global/CopyMessageComponentVue.vue";
import MessagesComponentVue from "@/components/message/MessagesComponentVue.vue";
export default {
  name: "messages-page",
  data() {
    return {
      // page status
      page_status: "close",
    };
  },
  components: {
    MessagesComponentVue,
    CopyMessageComponentVue,
    DeleteMessageComponentVue,
  },
  mounted() {
    // call to get messages method
    this.get_messages();

    setTimeout(() => {
      this.page_status = "open";
    }, 500);
  },
  methods: {
    // get to messages method
    async get_messages() {
      // reset the messages_default_victor_status's status
      this.$store.state.messages_default_victor_status = "close";

      // start the loading
      this.$store.state.loading_status = "open";

      await axios
        .get(this.$store.state.APIS.messages.get_all)
        .then((response) => {
          // stop the loading
          this.$store.state.loading_status = "close";

          // set the messages_data from response to the messages_data in store
          this.$store.state.messages_data = response.data.messages_data;

          // check if the messages's data length is 0
          if (response.data.messages_data.length == 0) {
            this.$store.state.messages_default_victor_status = "open";
          }
        })
        .catch((error) => {
          // stop the loading
          this.$store.state.loading_status = "close";

          // to open the default vidtor art (no messages)
          this.$store.state.messages_default_victor_status = "open";

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
// darck and light Englis style
.messages-page-darck-English-open {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  padding: 15% 0px 10px 0px;
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
      color: $white;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
      margin: 10px 0px;
    }

    img {
      width: 100%;
      height: auto;
      margin: 20px 0px 0px 0px;
    }
  }
}

.messages-page-darck-English-close {
  @extend .messages-page-darck-English-open;
  padding-top: 40%;

  .cont {
    opacity: 0;
  }
}

.messages-page-light-English-open {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  background-color: $white-one;
  padding: 15% 0px 10px 0px;
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
      color: $black;
      border: 1px solid;
      border-color: transparent transparent $black transparent;
      margin: 10px 0px;
    }

    img {
      width: 100%;
      height: auto;
      margin: 20px 0px 0px 0px;
    }
  }
}

.messages-page-light-English-close {
  @extend .messages-page-light-English-open;
  padding-top: 40%;

  .cont {
    opacity: 0;
  }
}
// darck and light Englis style

// darck and light Arabic style
.messages-page-darck-Arabic-open {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  padding: 15% 0px 10px 0px;
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
      color: $white;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
      margin: 10px 0px;
    }

    img {
      width: 100%;
      height: auto;
      margin: 20px 0px 0px 0px;
    }
  }
}

.messages-page-darck-Arabic-close {
  @extend .messages-page-darck-Arabic-open;
  padding-top: 40%;

  .cont {
    opacity: 0;
  }
}

.messages-page-light-Arabic-open {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  background-color: $white-one;
  padding: 15% 0px 10px 0px;
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
      color: $black;
      border: 1px solid;
      border-color: transparent transparent $black transparent;
      margin: 10px 0px;
    }

    img {
      width: 100%;
      height: auto;
      margin: 20px 0px 0px 0px;
    }
  }
}

.messages-page-light-Arabic-close {
  @extend .messages-page-light-Arabic-open;
  padding-top: 40%;

  .cont {
    opacity: 0;
  }
}
// darck and light Arabic style
</style>
