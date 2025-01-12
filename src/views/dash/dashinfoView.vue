<template>
  <div
    :class="`dash-info-page-${this.$store.state.mood}-${this.$store.state.language}-${this.page_status}`"
  >
    <div class="cont">
      <h1>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.update_info_page.title
            : this.$store.state.Arabic.update_info_page.title
        }}
      </h1>

      <div class="avatar-section">
        <label for="avatar" class="avatar_label">
          <img :src="this.avatar" alt="avatar" />
        </label>

        <input type="file" id="avatar" ref="ChangeAvatar" />

        <button
          @click="update_avatar"
          :class="this.avatar_btn_status ? 'selected' : 'un_selected'"
        >
          {{
            this.$store.state.language == "English"
              ? this.$store.state.English.update_info_page.avatar_btn
              : this.$store.state.Arabic.update_info_page.avatar_btn
          }}
        </button>
      </div>

      <div class="form">
        <!-- name  -->
        <label for="english_name">
          {{
            this.$store.state.language == "English"
              ? this.$store.state.English.update_info_page.english_name_label
              : this.$store.state.Arabic.update_info_page.english_name_label
          }}
          <span>{{ this.english_name.length }}</span>
        </label>
        <input name="" id="english_name" v-model="this.english_name" />

        <label for="arabic_name">
          {{
            this.$store.state.language == "English"
              ? this.$store.state.English.update_info_page.arabic_name_label
              : this.$store.state.Arabic.update_info_page.arabic_name_label
          }}
          <span>{{ this.arabic_name.length }}</span>
        </label>
        <input id="arabic_name" v-model="this.arabic_name" />
        <!-- name  -->

        <!-- english_description  -->
        <label for="english_description">
          {{
            this.$store.state.language == "English"
              ? this.$store.state.English.update_info_page
                  .english_description_label
              : this.$store.state.Arabic.update_info_page
                  .english_description_label
          }}
          <span>{{ this.english_description.length }}</span>
        </label>
        <textarea
          english_description=""
          id="english_description"
          v-model="this.english_description"
        ></textarea>

        <label for="arabic_description">
          {{
            this.$store.state.language == "English"
              ? this.$store.state.English.update_info_page
                  .arabic_description_label
              : this.$store.state.Arabic.update_info_page
                  .arabic_description_label
          }}
          <span>{{ this.arabic_description.length }}</span>
        </label>
        <textarea
          id="arabic_description"
          v-model="this.arabic_description"
        ></textarea>
        <!-- english_description  -->

        <!-- whatsapp  -->
        <label for="whatsapp">
          {{
            this.$store.state.language == "English"
              ? this.$store.state.English.update_info_page.whatsApp_label
              : this.$store.state.Arabic.update_info_page.whatsApp_label
          }}
          <span>{{ this.whatsapp_number.length }}</span>
        </label>
        <input
          name=""
          id="whatsapp"
          type="string"
          v-model="this.whatsapp_number"
        />
        <!-- whatsapp  -->

        <!-- phone  -->
        <label for="phone">
          {{
            this.$store.state.language == "English"
              ? this.$store.state.English.update_info_page.phone_label
              : this.$store.state.Arabic.update_info_page.phone_label
          }}
          <span>{{ this.phone_number.length }}</span>
        </label>
        <input id="phone" type="number" v-model="this.phone_number" />
        <!-- phone  -->

        <!-- telegram  -->
        <label for="telegram">
          {{
            this.$store.state.language == "English"
              ? this.$store.state.English.update_info_page.telegram_label
              : this.$store.state.Arabic.update_info_page.telegram_label
          }}
          <span>{{ this.telegram_link.length }}</span>
        </label>
        <input id="telegram" v-model="this.telegram_link" />
        <!-- telegram  -->

        <!-- facebook  -->
        <label for="facebook">
          {{
            this.$store.state.language == "English"
              ? this.$store.state.English.update_info_page.facebook_label
              : this.$store.state.Arabic.update_info_page.facebook_label
          }}
          <span>{{ this.facebook_link.length }}</span>
        </label>
        <input name="" id="facebook" v-model="this.facebook_link" />
        <!-- facebook  -->

        <!-- instgram  -->
        <label for="instgram">
          {{
            this.$store.state.language == "English"
              ? this.$store.state.English.update_info_page.instgram_label
              : this.$store.state.Arabic.update_info_page.instgram_label
          }}
          <span>{{ this.instagram_link.length }}</span>
        </label>
        <input id="instgram" v-model="this.instagram_link" />
        <!-- instgram  -->

        <!-- linkedIn  -->
        <label for="linkedIn">
          {{
            this.$store.state.language == "English"
              ? this.$store.state.English.update_info_page.linkedIn_label
              : this.$store.state.Arabic.update_info_page.linkedIn_label
          }}
          <span>{{ this.linked_in_link.length }}</span>
        </label>
        <input name="" id="linkedIn" v-model="this.linked_in_link" />
        <!-- linkedIn  -->

        <!-- behance  -->
        <label for="behance">
          {{
            this.$store.state.language == "English"
              ? this.$store.state.English.update_info_page.behance_label
              : this.$store.state.Arabic.update_info_page.behance_label
          }}
          <span>{{ this.behance_link.length }}</span>
        </label>
        <input id="behance" v-model="this.behance_link" />
        <!-- behance  -->

        <!-- email_address  -->
        <label for="email_address">
          {{
            this.$store.state.language == "English"
              ? this.$store.state.English.update_info_page.email_address_label
              : this.$store.state.Arabic.update_info_page.email_address_label
          }}
          <span>{{ this.email_address.length }}</span>
        </label>
        <input
          name=""
          id="email_address"
          type="email"
          v-model="this.email_address"
        />
        <!-- email_address  -->
        <button @click="update_info">
          {{
            this.$store.state.language == "English"
              ? this.$store.state.English.update_info_page.update_btn
              : this.$store.state.Arabic.update_info_page.update_btn
          }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "info-page",

      // page status
      page_status: "close",

      // avatar_btn_status
      avatar_btn_status: false,

      // info_btn_status
      info_btn_status: false,

      // english name
      english_name: "",
      // arabic name
      arabic_name: "",
      // english description
      english_description: "",
      // arabic description
      arabic_description: "",

      // whatsapp number
      whatsapp_number: "",
      // phone number
      phone_number: "",
      // telegram link
      telegram_link: "",
      // faceboo link
      facebook_link: "",
      // instagram link
      instagram_link: "",
      // linked_in link
      linked_in_link: "",
      // behance link
      behance_link: "",
      // email_address
      email_address: "",
      // avatar
      avatar: "",

      formData: "",
    };
  },
  mounted() {
    // call to get admin info method
    this.get_info();

    //  call to the handleFileChange method on select any image
    this.$refs.ChangeAvatar.addEventListener("change", this.handleFileChange);
  },
  methods: {
    handleFileChange(event) {
      this.$store.state.selectd_avatar = event.target.files;

      this.readerFile();
    },

    // reader selecetd image
    readerFile() {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.avatar = e.target.result;
      };

      reader.readAsDataURL(this.$store.state.selectd_avatar[0]);

      // update the avatar_btn_status
      this.avatar_btn_status = true;

      // return the avatar to use the ass a path in avatar image
      return this.avatar;
    },

    // get to admin info
    async get_info() {
      // start the loading
      this.$store.state.loading_status = "open";

      await axios
        .get(`${this.$store.state.APIS.auth.get_admin_info}/admin`)
        .then((response) => {
          // stop the loading
          this.$store.state.loading_status = "close";

          // change the page status
          this.page_status = "open";

          // setb the admin info to admin info in store
          this.$store.state.admin_info = response.data.admin_data;

          // ste the admin info data to the vars in data section
          this.english_name = this.$store.state.admin_info.english_name;
          this.arabic_name = this.$store.state.admin_info.arabic_name;
          this.english_description =
            this.$store.state.admin_info.english_description;
          this.arabic_description =
            this.$store.state.admin_info.arabic_description;
          this.whatsapp_number = this.$store.state.admin_info.whatsapp;
          this.phone_number = this.$store.state.admin_info.phone;
          this.telegram_link = this.$store.state.admin_info.telegram;
          this.facebook_link = this.$store.state.admin_info.facebook;
          this.instagram_link = this.$store.state.admin_info.instgram;
          this.linked_in_link = this.$store.state.admin_info.linkedIn;
          this.behance_link = this.$store.state.admin_info.behance;
          this.email_address = this.$store.state.admin_info.email_address;
          this.avatar = this.$store.state.admin_info.avatar;
        })
        .catch((error) => {
          // stop the loading
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

    // udate avatar merthod
    async update_avatar() {
      // start the loading animation
      this.$store.state.loading_status = "open";

      // create the form data
      this.formData = new FormData();

      // cgheck if the user selected a new avatar
      if (this.$store.state.selectd_avatar.length > 0) {
        // add the avatar to form data
        // this.formData.append("avatar", [this.$store.state.selectd_avatar]);

        for (const file of this.$store.state.selectd_avatar) {
          this.formData.append("avatar", file, file.name);
        }
      }

      // add the admin id
      this.formData.append("_id", this.$store.state.admin_data.admin._id);

      // create headers
      const headers = {
        Authorization: `Bearer ${this.$store.state.admin_data.token}`,
      };

      await axios
        .put(this.$store.state.APIS.auth.update_avatar, this.formData, {
          headers,
        })
        .then((response) => {
          // stop the loading animation
          this.$store.state.loading_status = "close";

          // check if the admin data is exists
          if (this.$store.state.admin_data) {
            // update admin's avatar url
            this.$store.state.admin_data.admin.avatar =
              response.data.avatar_path;

            // save the new avatar's url in local storage
            window.localStorage.setItem(
              "sultan-site",
              JSON.stringify(this.$store.state.admin_data)
            );
          }

          // update the avatar_btn_status
          this.avatar_btn_status = false;

          // set the error to the error_object in store
          this.$store.state.error_object = {
            title: {
              english: "🥳Welcome Admin🥳",
              arabic: "🥳أهلا مدير🥳",
            },
            type: "Success",
            messages: JSON.parse(response.data.messgae),
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

          // update the avatar_btn_status
          this.avatar_btn_status = false;

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

    // update admin's info
    async update_info() {
      // start the loading
      this.$store.state.loading_status = "open";

      // craete headers
      const headers = {
        Authorization: `Bearer ${this.$store.state.admin_data.token}`,
      };

      // craete the body
      let all_data = {
        english_name:
          this.english_name != this.$store.state.admin_info.english_name
            ? this.english_name
            : null,
        arabic_name:
          this.arabic_name != this.$store.state.admin_info.arabic_name
            ? this.arabic_name
            : null,
        english_description:
          this.english_description !=
          this.$store.state.admin_info.english_description
            ? this.english_description
            : null,
        arabic_description:
          this.arabic_description !=
          this.$store.state.admin_info.arabic_description
            ? this.arabic_description
            : null,
        whatsapp:
          this.whatsapp_number != this.$store.state.admin_info.whatsapp
            ? this.whatsapp_number
            : null,
        telegram:
          this.telegram_number != this.$store.state.admin_info.telegram
            ? this.telegram_number
            : null,
        facebook:
          this.facebook_link != this.$store.state.admin_info.facebook
            ? this.facebook_link
            : null,
        instgram:
          this.instagram_link != this.$store.state.admin_info.instgram
            ? this.instagram_link
            : null,
        linkedIn:
          this.linked_in_link != this.$store.state.admin_info.linkedIn
            ? this.linked_in_link
            : null,
        behance:
          this.behance_link != this.$store.state.admin_info.behance
            ? this.behance_link
            : null,
        phone:
          this.phone_number != this.$store.state.admin_info.phone
            ? this.phone_number
            : null,
        email_address:
          this.email_address != this.$store.state.admin_info.email_address
            ? this.email_address
            : null,
      };

      // bod_data
      let body_data = {};

      // loop to all all-data's and check if her value is null or not
      for (const key in all_data) {
        // check if line value is null add to body data object
        if (all_data[key] != null) {
          body_data[key] = all_data[key];
        }
      }

      // check if the body_data object has any var or not
      if (Object.keys(body_data).length > 0) {
        await axios
          .put(this.$store.state.APIS.auth.update_info, body_data, { headers })
          .then((response) => {
            // stop the loading animation
            this.$store.state.loading_status = "close";

            // set the error to the error_object in store
            this.$store.state.error_object = {
              title: {
                english: "🥳Welcome Admin🥳",
                arabic: "🥳أهلا مدير🥳",
              },
              type: "Success",
              messages: response.data.messages,
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

            // to open the message form
            this.$store.commit("OpenOrCloseMessageForm");

            // call to change the message form status
            this.$store.commit("ChangeMEssageFormStatus");
          });
      } else {
        // stop the loading animation
        this.$store.state.loading_status = "close";

        // set the error to the error_object in store
        this.$store.state.error_object = {
          title: {
            english: "😓Error😓",
            arabic: "😓خطأ😓",
          },
          type: "Error",
          messages: {
            english: "Sorry, you should update any data to send request",
            arabic: "عذرا يجب عليك تحديث اي خانة لإرسال الطلب",
          },
          status: 403,
        };

        // to open the message form
        this.$store.commit("OpenOrCloseMessageForm");

        // call to change the message form status
        this.$store.commit("ChangeMEssageFormStatus");
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";
// darck and light English style
.dash-info-page-darck-English-open {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  padding: 15% 0px 10px 0px;
  transition-duration: 0.5s;

  .cont {
    width: 70%;
    height: auto;
    margin: auto;
    transition-duration: 0.5s;
    opacity: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media (max-width: $mobile) {
      width: 96%;
      margin: 10px 2%;
    }

    h1 {
      width: 100%;
      height: auto;
      color: $white;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
    }

    .avatar-section {
      width: 50%;
      height: auto;
      margin: 10px 25%;
      border-radius: 10px;
      overflow: hidden;
      background-color: $Navy-blue-tow;
      position: relative;

      .avatar_label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px;
        cursor: pointer;
      }

      #avatar {
        display: none;
      }

      img {
        width: 150px;
        height: auto;
      }

      .selected {
        width: 90%;
        height: 40px;
        border-radius: 5px;
        margin: 10px 5%;
        border: none;
        color: $white;
        background-color: $error-green-one;
        outline: none;
        cursor: pointer;
        transition-duration: 0.5s;
      }

      .un_selected {
        @extend .selected;
        background-color: $error-green-tow;
        border: 1px solid $error-green-one;
        pointer-events: none;
      }
    }

    .form {
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;

      label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: auto;
        margin: 5px 0px;
        color: $white;
        border: 1px solid;
        border-color: transparent transparent $white transparent;
      }

      textarea {
        resize: none;
        width: 100%;
        min-height: 200px;
        margin: 5px 0px;
        border-radius: 5px;
        padding: 5px;
        color: $white;
        outline: none;
        border: 1px solid $inputs-border-white;
        background-color: $inputs-back-white;
      }

      input {
        width: 100%;
        height: 40px;
        margin: 5px 0px;
        outline: none;
        padding: 0px 5px;
        border-radius: 5px;
        border: 1px solid $inputs-border-white;
        background-color: $inputs-back-white;
        color: $white;
      }

      button {
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 5px;
        outline: none;
        color: $white;
        cursor: pointer;
        background: linear-gradient(to top, $gold-five, $gold-tow, $gold-five);
      }
    }
  }
}

.dash-info-page-darck-English-close {
  @extend .dash-info-page-darck-English-open;
  padding: 30% 0px 0px 0px;

  .cont {
    opacity: 0;
  }
}

.dash-info-page-light-English-open {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  background-color: $white;
  padding: 15% 0px 10px 0px;
  transition-duration: 0.5s;

  .cont {
    width: 70%;
    height: auto;
    margin: auto;
    transition-duration: 0.5s;
    opacity: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media (max-width: $mobile) {
      width: 96%;
      margin: 10px 2%;
    }

    h1 {
      width: 100%;
      height: auto;
      color: $black;
      border: 1px solid;
      border-color: transparent transparent $black transparent;
    }

    .avatar-section {
      width: 50%;
      height: auto;
      margin: 10px 25%;
      border-radius: 10px;
      overflow: hidden;
      background-color: $white-tow;
      position: relative;

      .avatar_label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px;
        cursor: pointer;
      }

      #avatar {
        display: none;
      }

      img {
        width: 150px;
        height: auto;
      }

      .selected {
        width: 90%;
        height: 40px;
        border-radius: 5px;
        margin: 10px 5%;
        border: none;
        color: $white;
        background-color: $error-green-one;
        outline: none;
        cursor: pointer;
        transition-duration: 0.5s;
      }

      .un_selected {
        @extend .selected;
        background-color: none;
        pointer-events: none;
        background-color: $error-green-tow;
        border: 1px solid $error-green-one;
      }
    }

    .form {
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;

      label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: auto;
        margin: 5px 0px;
        color: $black;
        border: 1px solid;
        border-color: transparent transparent $black transparent;
      }

      textarea {
        resize: none;
        width: 100%;
        min-height: 200px;
        margin: 5px 0px;
        border-radius: 5px;
        padding: 5px;
        color: $black;
        outline: none;
        border: 1px solid $inputs-border-black;
        background-color: $inputs-back-black;
      }

      input {
        width: 100%;
        height: 40px;
        margin: 5px 0px;
        outline: none;
        padding: 0px 5px;
        border-radius: 5px;
        border: 1px solid $inputs-border-black;
        background-color: $inputs-back-black;
        color: $black;
      }

      button {
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 5px;
        outline: none;
        color: $white;
        cursor: pointer;
        background: linear-gradient(to top, $gold-five, $gold-tow, $gold-five);
      }
    }
  }
}

.dash-info-page-light-English-close {
  @extend .dash-info-page-light-English-open;
  padding: 30% 0px 0px 0px;

  .cont {
    opacity: 0;
  }
}
// darck and light English style

// darck and light Arabic style
.dash-info-page-darck-Arabic-open {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  padding: 15% 0px 10px 0px;
  transition-duration: 0.5s;

  .cont {
    width: 70%;
    height: auto;
    margin: auto;
    transition-duration: 0.5s;
    opacity: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media (max-width: $mobile) {
      width: 96%;
      margin: 10px 2%;
    }

    h1 {
      width: 100%;
      height: auto;
      color: $white;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
    }

    .avatar-section {
      width: 50%;
      height: auto;
      margin: 10px 25%;
      border-radius: 10px;
      overflow: hidden;
      background-color: $Navy-blue-tow;
      position: relative;

      .avatar_label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px;
        cursor: pointer;
      }

      #avatar {
        display: none;
      }

      img {
        width: 150px;
        height: auto;
      }

      .selected {
        width: 90%;
        height: 40px;
        border-radius: 5px;
        margin: 10px 5%;
        border: none;
        color: $white;
        background-color: $error-green-one;

        outline: none;
        cursor: pointer;
        transition-duration: 0.5s;
      }

      .un_selected {
        @extend .selected;
        background-color: none;
        pointer-events: none;
        background-color: $error-green-tow;
        border: 1px solid $error-green-one;
      }
    }

    .form {
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;

      label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: auto;
        margin: 5px 0px;
        color: $white;
        border: 1px solid;
        border-color: transparent transparent $white transparent;
      }

      textarea {
        resize: none;
        width: 100%;
        min-height: 200px;
        margin: 5px 0px;
        border-radius: 5px;
        padding: 5px;
        color: $white;
        outline: none;
        border: 1px solid $inputs-border-white;
        background-color: $inputs-back-white;
      }

      input {
        width: 100%;
        height: 40px;
        margin: 5px 0px;
        outline: none;
        padding: 0px 5px;
        border-radius: 5px;
        border: 1px solid $inputs-border-white;
        background-color: $inputs-back-white;
        color: $white;
      }

      button {
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 5px;
        outline: none;
        color: $white;
        cursor: pointer;
        background: linear-gradient(to top, $gold-five, $gold-tow, $gold-five);
      }
    }
  }
}

.dash-info-page-darck-Arabic-close {
  @extend .dash-info-page-darck-Arabic-open;
  padding: 30% 0px 0px 0px;

  .cont {
    opacity: 0;
  }
}

.dash-info-page-light-Arabic-open {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  background-color: $white;
  padding: 15% 0px 10px 0px;
  transition-duration: 0.5s;

  .cont {
    width: 70%;
    height: auto;
    margin: auto;
    transition-duration: 0.5s;
    opacity: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media (max-width: $mobile) {
      width: 96%;
      margin: 10px 2%;
    }

    h1 {
      width: 100%;
      height: auto;
      color: $black;
      border: 1px solid;
      border-color: transparent transparent $black transparent;
    }

    .avatar-section {
      width: 50%;
      height: auto;
      margin: 10px 25%;
      border-radius: 10px;
      overflow: hidden;
      background-color: $white-tow;
      position: relative;

      .avatar_label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px;
        cursor: pointer;
      }

      #avatar {
        display: none;
      }

      img {
        width: 150px;
        height: auto;
      }

      .selected {
        width: 90%;
        height: 40px;
        border-radius: 5px;
        margin: 10px 5%;
        border: none;
        color: $white;
        background-color: $error-green-one;
        outline: none;
        cursor: pointer;
        transition-duration: 0.5s;
      }

      .un_selected {
        @extend .selected;
        background-color: none;
        pointer-events: none;
        background-color: $error-green-tow;
        border: 1px solid $error-green-one;
      }
    }

    .form {
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;

      label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: auto;
        margin: 5px 0px;
        color: $black;
        border: 1px solid;
        border-color: transparent transparent $black transparent;
      }

      textarea {
        resize: none;
        width: 100%;
        min-height: 200px;
        margin: 5px 0px;
        border-radius: 5px;
        padding: 5px;
        color: $black;
        outline: none;
        border: 1px solid $inputs-border-black;
        background-color: $inputs-back-black;
      }

      input {
        width: 100%;
        height: 40px;
        margin: 5px 0px;
        outline: none;
        padding: 0px 5px;
        border-radius: 5px;
        border: 1px solid $inputs-border-black;
        background-color: $inputs-back-black;
        color: $black;
      }

      button {
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 5px;
        outline: none;
        color: $white;
        cursor: pointer;
        background: linear-gradient(to top, $gold-five, $gold-tow, $gold-five);
      }
    }
  }
}

.dash-info-page-light-Arabic-close {
  @extend .dash-info-page-light-Arabic-open;
  padding: 30% 0px 0px 0px;

  .cont {
    opacity: 0;
  }
}
// darck and light Arabic style
</style>
