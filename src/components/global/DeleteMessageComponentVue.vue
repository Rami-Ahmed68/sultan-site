<template>
  <div
    :class="`delete-message-${this.$store.state.mood}-${this.$store.state.language}-${this.$store.state.delete_message_form_status}`"
  >
    <h3>
      {{
        this.$store.state.language == "English"
          ? this.$store.state.English.delete_message_form.title
          : this.$store.state.Arabic.delete_message_form.title
      }}
    </h3>
    <p>
      {{
        this.$store.state.language == "English"
          ? this.$store.state.English.delete_message_form.message
          : this.$store.state.Arabic.delete_message_form.message
      }}
    </p>

    <button class="yes" @click="delete_message">
      {{
        this.$store.state.language == "English"
          ? this.$store.state.English.delete_message_form.yes
          : this.$store.state.Arabic.delete_message_form.yes
      }}
    </button>
    <button
      class="no"
      @click="this.$store.commit('OpenOrCloseDeleteMessageForm')"
    >
      {{
        this.$store.state.language == "English"
          ? this.$store.state.English.delete_message_form.no
          : this.$store.state.Arabic.delete_message_form.no
      }}
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "delete-message-component",
    };
  },
  methods: {
    async delete_message() {
      // start the loading animation
      this.$store.state.loading_status = "open";

      // craete headers
      const headers = {
        Authorization: `Bearer ${this.$store.state.admin_data.token}`,
      };

      // craete teh body data
      const data = {
        admin_id: this.$store.state.admin_data.admin._id,
        message_id: this.$store.state.message_id_for_delete,
      };

      await axios
        .delete(this.$store.state.APIS.messages.delete, {
          headers,
          data,
        })
        .then((response) => {
          // stop the loading animation
          this.$store.state.loading_status = "close";

          // check if the notifications_count in store is more than 0
          if (this.$store.state.notifications_count > 0) {
            this.$store.state.notifications_count =
              this.$store.state.notifications_count -= 1;
          }

          // filter the messages_data array in store and delete the deleted message by his id
          this.$store.state.messages_data =
            this.$store.state.messages_data.filter((message) => {
              return message._id != this.$store.state.message_id_for_delete;
            });

          // check if the messages's data length is 0
          if (this.$store.state.messages_data.length == 0) {
            this.$store.state.messages_default_victor_status = "open";
          }

          // close the delete work form
          this.$store.commit("OpenOrCloseDeleteMessageForm");

          // set the error to the error_object in store
          this.$store.state.error_object = {
            title: {
              english: "🥳Deleted Successfully🥳",
              arabic: "🥳تم الحذف بنجاح🥳",
            },
            type: "Success",
            messages: response.data.message,
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

          // close the delete work form
          this.$store.commit("OpenOrCloseDeleteMessageForm");

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
.delete-message-darck-English-open {
  direction: ltr;
  width: 70%;
  height: auto;
  border-radius: 5px;
  backdrop-filter: blur(40px);
  box-shadow: 0 0 10px $black;
  position: fixed;
  bottom: 10px;
  left: 15%;
  z-index: 10;
  transition-duration: 0.5s;
  padding: 5px;

  @media (max-width: $mobile) {
    width: 90%;
    left: 5%;
  }

  h3 {
    width: 100%;
    height: auto;
    color: $white;
    border: 1px solid;
    border-color: transparent transparent $white transparent;
  }

  p {
    width: 100%;
    height: auto;
    margin: 5px 0px;
    color: $white;
    font-size: $small;
  }

  button {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    outline: none;
    color: $white;
    cursor: pointer;
    margin: 5px 0px;
    transition-duration: 0.5s;
  }

  .yes {
    @extend button;
    background-color: $error-green-tow;
    border: 1px solid $error-green-one;
  }

  .yes:hover {
    background-color: $error-green-one;
  }

  .no {
    @extend button;
    background-color: $error-red-tow;
    border: 1px solid $error-red-one;
  }

  .no:hover {
    background-color: $error-red-one;
  }
}

.delete-message-darck-English-close {
  @extend .delete-message-darck-English-open;
  bottom: -30%;
}

.delete-message-light-English-open {
  direction: ltr;
  width: 70%;
  height: auto;
  border-radius: 5px;
  backdrop-filter: blur(40px);
  box-shadow: 0 0 10px $black;
  position: fixed;
  bottom: 10px;
  left: 15%;
  z-index: 10;
  transition-duration: 0.5s;
  padding: 5px;

  @media (max-width: $mobile) {
    width: 90%;
    left: 5%;
  }

  h3 {
    width: 100%;
    height: auto;
    color: $black;
    border: 1px solid;
    border-color: transparent transparent $black transparent;
  }

  p {
    width: 100%;
    height: auto;
    margin: 5px 0px;
    color: $black;
    font-size: $small;
  }

  button {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    outline: none;
    color: $black;
    cursor: pointer;
    margin: 5px 0px;
    transition-duration: 0.5s;
  }

  .yes {
    @extend button;
    background-color: $error-green-tow;
    border: 1px solid $error-green-one;
  }

  .yes:hover {
    background-color: $error-green-one;
  }

  .no {
    @extend button;
    background-color: $error-red-tow;
    border: 1px solid $error-red-one;
  }

  .no:hover {
    background-color: $error-red-one;
  }
}

.delete-message-light-English-close {
  @extend .delete-message-light-English-open;
  bottom: -30%;
}
// darck and light English style

// darck and light Arabic style
.delete-message-darck-Arabic-open {
  direction: rtl;
  width: 70%;
  height: auto;
  border-radius: 5px;
  backdrop-filter: blur(40px);
  box-shadow: 0 0 10px $black;
  position: fixed;
  bottom: 10px;
  left: 15%;
  z-index: 10;
  transition-duration: 0.5s;
  padding: 5px;

  @media (max-width: $mobile) {
    width: 90%;
    left: 5%;
  }

  h3 {
    width: 100%;
    height: auto;
    color: $white;
    border: 1px solid;
    border-color: transparent transparent $white transparent;
  }

  p {
    width: 100%;
    height: auto;
    margin: 5px 0px;
    color: $white;
    font-size: $small;
  }

  button {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    outline: none;
    color: $white;
    cursor: pointer;
    margin: 5px 0px;
    transition-duration: 0.5s;
  }

  .yes {
    @extend button;
    background-color: $error-green-tow;
    border: 1px solid $error-green-one;
  }

  .yes:hover {
    background-color: $error-green-one;
  }

  .no {
    @extend button;
    background-color: $error-red-tow;
    border: 1px solid $error-red-one;
  }

  .no:hover {
    background-color: $error-red-one;
  }
}

.delete-message-darck-Arabic-close {
  @extend .delete-message-darck-Arabic-open;
  bottom: -30%;
}

.delete-message-light-Arabic-open {
  direction: rtl;
  width: 70%;
  height: auto;
  border-radius: 5px;
  backdrop-filter: blur(40px);
  box-shadow: 0 0 10px $black;
  position: fixed;
  bottom: 10px;
  left: 15%;
  z-index: 10;
  transition-duration: 0.5s;
  padding: 5px;

  @media (max-width: $mobile) {
    width: 90%;
    left: 5%;
  }

  h3 {
    width: 100%;
    height: auto;
    color: $black;
    border: 1px solid;
    border-color: transparent transparent $black transparent;
  }

  p {
    width: 100%;
    height: auto;
    margin: 5px 0px;
    color: $black;
    font-size: $small;
  }

  button {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    outline: none;
    color: $black;
    cursor: pointer;
    margin: 5px 0px;
    transition-duration: 0.5s;
  }

  .yes {
    @extend button;
    background-color: $error-green-tow;
    border: 1px solid $error-green-one;
  }

  .yes:hover {
    background-color: $error-green-one;
  }

  .no {
    @extend button;
    background-color: $error-red-tow;
    border: 1px solid $error-red-one;
  }

  .no:hover {
    background-color: $error-red-one;
  }
}

.delete-message-light-Arabic-close {
  @extend .delete-message-light-Arabic-open;
  bottom: -30%;
}
// darck and light Arabic style
</style>
