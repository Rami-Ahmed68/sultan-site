<template>
  <div
    :class="`delete-work-${this.$store.state.mood}-${this.$store.state.language}-${this.$store.state.delete_work_form_status}`"
  >
    <h3>
      {{
        this.$store.state.language == "English"
          ? this.$store.state.English.delete_work_form.title
          : this.$store.state.Arabic.delete_work_form.title
      }}
    </h3>
    <p>
      {{
        this.$store.state.language == "English"
          ? this.$store.state.English.delete_work_form.message
          : this.$store.state.Arabic.delete_work_form.message
      }}
    </p>

    <button class="yes" @click="delete_work">
      {{
        this.$store.state.language == "English"
          ? this.$store.state.English.delete_work_form.yes
          : this.$store.state.Arabic.delete_work_form.yes
      }}
    </button>
    <button class="no" @click="this.$store.commit('OpenOrCloseDeleteWorkForm')">
      {{
        this.$store.state.language == "English"
          ? this.$store.state.English.delete_work_form.no
          : this.$store.state.Arabic.delete_work_form.no
      }}
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "delete-work-component",
    };
  },
  methods: {
    async delete_work() {
      // start the loading animation
      this.$store.state.loading_status = "open";
      // craete headers
      const headers = {
        Authorization: `Bearer ${this.$store.state.admin_data.token}`,
      };

      // craete teh body data
      const data = {
        admin_id: this.$store.state.admin_data.admin._id,
        work_id: this.$store.state.work_id_for_delete,
      };

      await axios
        .delete(this.$store.state.APIS.works.delete, {
          headers,
          data,
        })
        .then((response) => {
          // stop the loading animation
          this.$store.state.loading_status = "close";

          // close the delete work form
          this.$store.commit("OpenOrCloseDeleteWorkForm");

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
          this.$store.commit("OpenOrCloseDeleteWorkForm");

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
@import "../../../sass/varibels";
// darck and light English style
.delete-work-darck-English-open {
  direction: ltr;
  width: 70%;
  height: auto;
  border-radius: 5px;
  backdrop-filter: blur(40px);
  box-shadow: 0 0 10px $black;
  position: fixed;
  bottom: 10px;
  left: 15%;
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

.delete-work-darck-English-close {
  @extend .delete-work-darck-English-open;
  bottom: -30%;
}

.delete-work-light-English-open {
  direction: ltr;
  width: 70%;
  height: auto;
  border-radius: 5px;
  backdrop-filter: blur(40px);
  box-shadow: 0 0 10px $black;
  position: fixed;
  bottom: 10px;
  left: 15%;
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

.delete-work-light-English-close {
  @extend .delete-work-light-English-open;
  bottom: -30%;
}
// darck and light English style

// darck and light Arabic style
.delete-work-darck-Arabic-open {
  direction: rtl;
  width: 70%;
  height: auto;
  border-radius: 5px;
  backdrop-filter: blur(40px);
  box-shadow: 0 0 10px $black;
  position: fixed;
  bottom: 10px;
  left: 15%;
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

.delete-work-darck-Arabic-close {
  @extend .delete-work-darck-Arabic-open;
  bottom: -30%;
}

.delete-work-light-Arabic-open {
  direction: rtl;
  width: 70%;
  height: auto;
  border-radius: 5px;
  backdrop-filter: blur(40px);
  box-shadow: 0 0 10px $black;
  position: fixed;
  bottom: 10px;
  left: 15%;
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

.delete-work-light-Arabic-close {
  @extend .delete-work-light-Arabic-open;
  bottom: -30%;
}
// darck and light Arabic style
</style>
