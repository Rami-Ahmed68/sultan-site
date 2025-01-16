<template>
  <div
    :class="`dash-skill-update-${this.$store.state.mood}-${this.$store.state.language}-${this.page_status}`"
  >
    <div class="cont">
      <h1>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_skill_update_page.title
            : this.$store.state.Arabic.dash_skill_update_page.title
        }}

        <label for="icon" class="icon_label">
          <icon icon="plus" />
        </label>
      </h1>

      <img v-if="this.icon_to_show != ''" :src="this.icon_to_show" alt="icon" />

      <img
        v-if="this.icon_to_show == ''"
        :src="this.$store.state.skill_data.icon"
        alt="icon"
      />

      <button
        @click="remove_seletced_images"
        class="delete_selected_icon"
        v-if="this.icon_to_show.length > 0"
      >
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_skill_update_page.delete_icon
            : this.$store.state.Arabic.dash_skill_update_page.delete_icon
        }}
      </button>

      <button
        @click="update_icon"
        v-if="this.icon_to_send.length > 0"
        class="update_icon_btn"
      >
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_skill_update_page.update_icon_btn
            : this.$store.state.Arabic.dash_skill_update_page.update_icon_btn
        }}
      </button>

      <!-- english title  -->
      <label for="english_title">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_skill_update_page.english_title
            : this.$store.state.Arabic.dash_skill_update_page.english_title
        }}

        <span>{{ this.english_title.length }}</span>
      </label>

      <input type="file" id="icon" accept="image/*" ref="icon" />

      <input type="text" id="english_title" v-model="this.english_title" />
      <!-- english title  -->

      <!-- arabic title  -->
      <label for="arabic_title">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_skill_update_page.arabic_title
            : this.$store.state.Arabic.dash_skill_update_page.arabic_title
        }}

        <span>{{ this.arabic_title.length }}</span>
      </label>

      <input type="text" id="arabic_title" v-model="this.arabic_title" />
      <!-- arabic title  -->

      <!-- english description  -->
      <label for="english_description">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_skill_update_page
                .english_description
            : this.$store.state.Arabic.dash_skill_update_page
                .english_description
        }}

        <span>{{ this.english_description.length }}</span>
      </label>

      <textarea
        id="english_description"
        v-model="this.english_description"
      ></textarea>
      <!-- english description  -->

      <!-- arabic description  -->
      <label for="arabic_description">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_skill_update_page
                .arabic_description
            : this.$store.state.Arabic.dash_skill_update_page.arabic_description
        }}

        <span>{{ this.arabic_description.length }}</span>
      </label>

      <textarea
        id="arabic_description"
        v-model="this.arabic_description"
      ></textarea>
      <!-- arabic description  -->

      <!-- created_at  -->
      <label for="created_at">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_skill_update_page.created_at
            : this.$store.state.Arabic.dash_skill_update_page.created_at
        }}

        <span>{{ this.created_at.length }}</span>
      </label>

      <input type="text" id="created_at" v-model="this.created_at" />
      <!-- created_at  -->

      <button class="update_btn" @click="update_skill">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_skill_update_page.update_btn
            : this.$store.state.Arabic.dash_skill_update_page.update_btn
        }}
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      // page's name
      name: "update-skill-page",

      // page status
      page_status: "close",

      // update_btn_status
      update_btn_status: false,

      // skill's data
      english_title: "",
      arabic_title: "",
      english_description: "",
      arabic_description: "",
      images: [],
      icon_to_show: [],
      icon_to_send: [],
      images_for_delete: [],
      created_at: "",

      // create form data
      formData: "",
    };
  },
  mounted() {
    // call to get skill data method
    this.get_skill_data();

    //  call to the handleFileChange method on select any image
    this.$refs.icon.addEventListener("change", this.handleFileChange);
  },
  methods: {
    // handel selected file (video)
    handleFileChange(event) {
      // call to reader files method
      this.readerFileIcon(event.target.files[0]);
      // set the selcted video's cover to the video_cover_send
      this.icon_to_send.push(event.target.files[0]);
    },

    // reader selecetd video
    readerFileIcon(video_cover) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.icon_to_show = e.target.result;
      };

      reader.readAsDataURL(video_cover);
    },

    // remove the seletced image from selected images array method
    remove_seletced_images() {
      // empty the selected icon to send
      this.icon_to_send = [];

      // empty the selected icon to show
      this.icon_to_show = [];
    },

    // get skill data
    async get_skill_data() {
      console.log("sended the request ...");
      // start the laoding
      this.$store.state.loading_status = "open";

      await axios
        .get(this.$store.state.APIS.skills.get_one, {
          params: {
            skill_id: this.$route.params.id,
          },
        })
        .then((response) => {
          console.log(response);
          // change the page status
          this.page_status = "open";

          // ste the skill data to the skill's filed in data section
          this.english_title = response.data.skill_data.english_title;
          this.arabic_title = response.data.skill_data.arabic_title;
          this.english_description =
            response.data.skill_data.english_description;
          this.arabic_description = response.data.skill_data.arabic_description;
          this.images = response.data.skill_data.images;
          this.created_at = response.data.skill_data.created_at;

          // stop the laoding
          this.$store.state.loading_status = "close";

          // set teh geted skill data to skill var in store
          this.$store.state.skill_data = response.data.skill_data;
        })
        .catch((error) => {
          // stop the laoding
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

    // update the skill
    async update_skill() {
      // change the uploaded_rate in store
      this.$store.state.uploaded_rate = 0;

      // start the loading
      this.$store.state.loading_status = "open";

      // create headers
      const headers = {
        Authorization: `Bearer ${this.$store.state.admin_data.token}`,
      };

      // crete body data
      let body_data = {};

      // add the admin's id
      body_data.admin_id = this.$store.state.admin_data.admin._id;

      // add the skill's id
      body_data.skill_id = this.$store.state.skill_data._id;


      // check if the english title is change or not and add it to form data
      if (this.english_title != this.$store.state.skill_data.english_title) {
        // add the skill's english title
        body_data.english_title = this.english_title;
      }

      // check if the arabic title is change or not and add it to form data
      if (this.arabic_title != this.$store.state.skill_data.arabic_title) {
        // add the skill's arabic title
        body_data.arabic_title = this.arabic_title;
      }

      // check if the english description is change or not and add it to form data
      if (
        this.english_description !=
        this.$store.state.skill_data.english_description
      ) {
        // this.formData.append("english_description", this.english_description);
        // add the skill's english description
        body_data.english_description = this.english_description;
      }

      // check if the arabic description is change or not and add it to form data
      if (
        this.arabic_description !=
        this.$store.state.skill_data.arabic_description
      ) {
        // add the skill's arabic description
        body_data.arabic_description = this.arabic_description;
      }

      // check if the creatd at date is change or not
      if (this.created_at != this.$store.state.skill_data.created_at) {
        // add the skill's created at
        body_data.created_at = this.created_at;
      }

      await axios
        .put(this.$store.state.APIS.skills.update, body_data, {
          headers,
          onUploadProgress: (progressEvent) => {
            // update the upload rate
            this.$store.state.uploaded_rate = `${Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            )}%`;
          },
        })
        .then((response) => {
          // change the uploaded_rate in store to "" to hidden it
          this.$store.state.uploaded_rate = "";

          // stop the loading
          this.$store.state.loading_status = "close";

          // update the skill's data in store
          this.$store.state.skill_data = response.data.skill_data;

          // set the error to the error_object in store
          this.$store.state.error_object = {
            title: {
              english: "🥳Welcome Admin🥳",
              arabic: "🥳أهلا مدير🥳",
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
          // change the uploaded_rate in store to "" to hidden it
          this.$store.state.uploaded_rate = "";

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

    // update the icon method
    async update_icon() {
      // change the uploaded_rate in store
      this.$store.state.uploaded_rate = 0;

      // start the loading
      this.$store.state.loading_status = "open";

      // create headers
      const headers = {
        Authorization: `Bearer ${this.$store.state.admin_data.token}`,
      };

      // create a new form data
      this.formData = new FormData();

      // add the admin id to form data
      this.formData.append("admin_id", this.$store.state.admin_data.admin._id);

      // add the skill id to form data
      this.formData.append("skill_id", this.$store.state.skill_data._id);

      // add the images
      if (this.icon_to_send.length > 0) {
        for (const file of this.icon_to_send) {
          this.formData.append("icon", file, file.name);
        }
      }

      await axios
        .put(this.$store.state.APIS.skills.change_icon, this.formData, {
          headers,
          onUploadProgress: (progressEvent) => {
            // update the upload rate
            this.$store.state.uploaded_rate = `${Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            )}%`;
          },
        })
        .then((response) => {
          // change the uploaded_rate in store to "" to hidden it
          this.$store.state.uploaded_rate = "";

          // stop the loading
          this.$store.state.loading_status = "close";

          // update the skill's data in store
          this.$store.state.skill_data = response.data.skill_data;

          // empty the icon_to_send
          this.icon_to_send = [];

          // empty the icon_to_show
          this.icon_to_show = [];

          // set the error to the error_object in store
          this.$store.state.error_object = {
            title: {
              english: "🥳Updated successfull🥳",
              arabic: "🥳تم التعديل بنجاح🥳",
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
          // change the uploaded_rate in store to "" to hidden it
          this.$store.state.uploaded_rate = "";

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
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";
// darck and light English style
.dash-skill-update-darck-English-open {
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

    @media (max-width: $mobile) {
      width: 90%;
    }

    h1 {
      width: 100%;
      height: auto;
      margin: 20px 0px;
      color: $white;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .icon_label {
        width: auto;
        height: auto;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        border: 1px solid $inputs-border-black;
        background-color: $inputs-back-black;
        font-size: $small;
      }
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }

    .delete_selected_icon {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      margin: 5px 0px;
      cursor: pointer;
      color: $white;
      background-color: $error-red-tow;
      border: 1px solid $error-red-one;
      transition-duration: 0.5s;
    }

    .delete_selected_icon:hover {
      background-color: $error-red-one;
    }

    .update_icon_btn {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      margin: 5px 0px;
      cursor: pointer;
      color: $white;
      background-color: $error-green-tow;
      border: 1px solid $error-green-one;
      transition-duration: 0.5s;
    }

    .update_icon_btn:hover {
      background-color: $error-green-one;
    }

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

    #icon {
      display: none;
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

    input,
    select {
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

    select > option {
      background-color: $Navy-blue-one;
    }

    .tags-cont {
      width: 100%;
      height: auto;
      padding: 5px;
      background-color: $inputs-back-black;
      border: 1px solid $inputs-border-black;
      border-radius: 5px;
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      align-items: center;

      .un_selected {
        padding: 4px;
        margin: 3px;
        cursor: pointer;
        color: $white;
        border-radius: 4px;
        font-size: $small;
        background-color: $Navy-blue-tow;

        @media (max-width: $mobile) {
          font-size: $x-small;
        }
      }

      .selected {
        @extend .un_selected;
        background-color: $Navy-blue-one;
        border: 1px solid $white;
      }
    }

    .images-cont {
      width: 100%;
      min-height: 60px;
      border-radius: 5px;
      background-color: $inputs-back-black;
      border: 1px solid $inputs-border-black;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      position: relative;
      padding-top: 20px;

      .select_images {
        border: none;
        width: auto;
        height: auto;
        cursor: pointer;
        position: absolute;
        right: 3px;
        top: 0%;

        svg {
          color: $white;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid $inputs-border-black;
          background-color: $inputs-back-black;
        }
      }

      #select_images {
        display: none;
      }

      img {
        max-width: 300px;
        height: auto;
        border-radius: 5px;
        cursor: pointer;
        margin: 5px;

        @media (max-width: $mobile) {
          max-width: 150px;
          height: auto;
        }
      }
    }

    .update_btn {
      width: 100%;
      height: 40px;
      margin: 5px 0px;
      border: none;
      border-radius: 5px;
      color: $white;
      outline: none;
      border: 1px solid $error-green-one;
      background-color: $error-green-tow;
      cursor: pointer;
      transition-duration: 0.5s;
    }

    .update_btn:hover {
      background-color: $error-green-one;
    }
  }
}

.dash-skill-update-darck-English-close {
  @extend .dash-skill-update-darck-English-open;
  padding: 30% 0px 0px 0px;

  .cont {
    opacity: 0;
  }
}

.dash-skill-update-light-English-open {
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

    @media (max-width: $mobile) {
      width: 90%;
    }

    h1 {
      width: 100%;
      height: auto;
      margin: 20px 0px;
      color: $black;
      border: 1px solid;
      border-color: transparent transparent $black transparent;
    }

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

      .icon_label {
        width: auto;
        height: auto;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        border: 1px solid $inputs-border-white;
        background-color: $inputs-back-white;
      }
    }

    #icon {
      display: none;
    }

    .video_label {
      @extend label;
      border: none;
    }

    video {
      width: 100%;
      height: auto;
    }

    .video_icon_image {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }

    .update_video_btn_icon_to_show {
      width: 100%;
      height: 40px;
      margin: 10px 0px;
      border-radius: 5px;
      border: none;
      outline: none;
      cursor: pointer;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      background-color: $error-green-tow;
      border: 1px solid $error-green-one;
      color: $white;
      transition-duration: 0.5s;
    }

    .update_video_btn_icon_hidden {
      @extend .update_video_btn_icon_to_show;
      display: none;
    }

    .update_video_btn_icon_to_show:hover {
      background-color: $error-green-one;
    }

    .video_btn {
      width: 100%;
      height: 40px;
      margin: 10px 0px;
      border-radius: 5px;
      font-size: $small;
      border: none;
      outline: none;
      cursor: pointer;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      background-color: $error-green-tow;
      border: 1px solid $error-green-one;
      color: $white;
      transition-duration: 0.5s;
    }

    .video_btn:hover {
      background-color: $error-green-one;
    }

    .delete_video_btn {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      cursor: pointer;
      color: $white;
      background-color: $error-red-tow;
      border: 1px solid $error-red-one;
      transition-duration: 0.5s;
    }

    .delete_video_btn:hover {
      background-color: $error-red-one;
    }

    #upload_video {
      display: none;
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
      border: 1px solid $inputs-border-white;
      background-color: $inputs-back-white;
    }

    input,
    select {
      width: 100%;
      height: 40px;
      margin: 5px 0px;
      outline: none;
      padding: 0px 5px;
      border-radius: 5px;
      border: 1px solid $inputs-border-white;
      background-color: $inputs-back-white;
      color: $black;
    }

    select > option {
      background-color: $white-tow;
    }

    .tags-cont {
      width: 100%;
      height: auto;
      padding: 5px;
      background-color: $inputs-back-white;
      border: 1px solid $inputs-border-white;
      border-radius: 5px;
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      align-items: center;

      .un_selected {
        padding: 4px;
        margin: 3px;
        cursor: pointer;
        color: $black;
        border-radius: 4px;
        font-size: $small;
        background-color: $white-one;

        @media (max-width: $mobile) {
          font-size: $x-small;
        }
      }

      .selected {
        @extend .un_selected;
        background-color: $white-tow;
        border: 1px solid $black;
      }
    }

    .images-cont {
      width: 100%;
      min-height: 60px;
      border-radius: 5px;
      background-color: $inputs-back-white;
      border: 1px solid $inputs-border-white;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      position: relative;
      padding-top: 20px;

      .select_images {
        border: none;
        width: auto;
        height: auto;
        cursor: pointer;
        position: absolute;
        right: 3px;
        top: 0%;

        svg {
          color: $black;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid $inputs-border-white;
          background-color: $inputs-back-white;
        }
      }

      #select_images {
        display: none;
      }

      img {
        max-width: 300px;
        height: auto;
        border-radius: 5px;
        cursor: pointer;
        margin: 5px;

        @media (max-width: $mobile) {
          max-width: 150px;
          height: auto;
        }
      }
    }

    .update_btn {
      width: 100%;
      height: 40px;
      margin: 5px 0px;
      border: none;
      border-radius: 5px;
      color: $white;
      outline: none;
      border: 1px solid $error-green-one;
      background-color: $error-green-tow;
      cursor: pointer;
      transition-duration: 0.5s;
    }

    .update_btn:hover {
      background-color: $error-green-one;
    }
  }
}

.dash-skill-update-light-English-close {
  @extend .dash-skill-update-light-English-open;
  padding: 30% 0px 0px 0px;

  .cont {
    opacity: 0;
  }
}
// darck and light English style

// darck and light Arabic style
.dash-skill-update-darck-Arabic-open {
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

    @media (max-width: $mobile) {
      width: 90%;
    }

    h1 {
      width: 100%;
      height: auto;
      margin: 20px 0px;
      color: $white;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
    }

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

      .icon_label {
        width: auto;
        height: auto;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        border: 1px solid $inputs-border-black;
        background-color: $inputs-back-black;
      }
    }

    #icon {
      display: none;
    }

    .video_label {
      @extend label;
      border: none;
    }

    video {
      width: 100%;
      height: auto;
    }

    .video_icon_image {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }

    .update_video_btn_icon_to_show {
      width: 100%;
      height: 40px;
      margin: 10px 0px;
      border-radius: 5px;
      border: none;
      outline: none;
      cursor: pointer;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      background-color: $error-green-tow;
      border: 1px solid $error-green-one;
      color: $white;
      transition-duration: 0.5s;
    }

    .update_video_btn_icon_hidden {
      @extend .update_video_btn_icon_to_show;
      display: none;
    }

    .update_video_btn_icon_to_show:hover {
      background-color: $error-green-one;
    }

    .video_btn {
      width: 100%;
      height: 40px;
      margin: 10px 0px;
      border-radius: 5px;
      font-size: $small;
      border: none;
      outline: none;
      cursor: pointer;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      background-color: $error-green-tow;
      border: 1px solid $error-green-one;
      color: $white;
      transition-duration: 0.5s;
    }

    .video_btn:hover {
      background-color: $error-green-one;
    }

    .delete_video_btn {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      cursor: pointer;
      color: $white;
      background-color: $error-red-tow;
      border: 1px solid $error-red-one;
      transition-duration: 0.5s;
    }

    .delete_video_btn:hover {
      background-color: $error-red-one;
    }

    #upload_video {
      display: none;
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

    input,
    select {
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

    select > option {
      background-color: $Navy-blue-one;
    }

    .tags-cont {
      width: 100%;
      height: auto;
      padding: 5px;
      background-color: $inputs-back-black;
      border: 1px solid $inputs-border-black;
      border-radius: 5px;
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      align-items: center;

      .un_selected {
        padding: 4px;
        margin: 3px;
        cursor: pointer;
        color: $white;
        border-radius: 4px;
        font-size: $small;
        background-color: $Navy-blue-tow;

        @media (max-width: $mobile) {
          font-size: $x-small;
        }
      }

      .selected {
        @extend .un_selected;
        background-color: $Navy-blue-one;
        border: 1px solid $white;
      }
    }

    .images-cont {
      width: 100%;
      min-height: 60px;
      border-radius: 5px;
      background-color: $inputs-back-black;
      border: 1px solid $inputs-border-black;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      position: relative;
      padding-top: 20px;

      .select_images {
        border: none;
        width: auto;
        height: auto;
        cursor: pointer;
        position: absolute;
        left: 3px;
        top: 0%;

        svg {
          color: $white;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid $inputs-border-black;
          background-color: $inputs-back-black;
        }
      }

      #select_images {
        display: none;
      }

      img {
        max-width: 300px;
        height: auto;
        border-radius: 5px;
        cursor: pointer;
        margin: 5px;

        @media (max-width: $mobile) {
          max-width: 150px;
          height: auto;
        }
      }
    }

    .update_btn {
      width: 100%;
      height: 40px;
      margin: 5px 0px;
      border: none;
      border-radius: 5px;
      color: $white;
      outline: none;
      border: 1px solid $error-green-one;
      background-color: $error-green-tow;
      cursor: pointer;
      transition-duration: 0.5s;
    }

    .update_btn:hover {
      background-color: $error-green-one;
    }
  }
}

.dash-skill-update-darck-Arabic-close {
  @extend .dash-skill-update-darck-Arabic-open;
  padding: 30% 0px 0px 0px;

  .cont {
    opacity: 0;
  }
}

.dash-skill-update-light-Arabic-open {
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

    @media (max-width: $mobile) {
      width: 90%;
    }

    h1 {
      width: 100%;
      height: auto;
      margin: 20px 0px;
      color: $black;
      border: 1px solid;
      border-color: transparent transparent $black transparent;
    }

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

      .icon_label {
        width: auto;
        height: auto;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        border: 1px solid $inputs-border-white;
        background-color: $inputs-back-white;
      }
    }

    #icon {
      display: none;
    }

    .video_label {
      @extend label;
      border: none;
    }

    video {
      width: 100%;
      height: auto;
    }

    .video_icon_image {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }

    .update_video_btn_icon_to_show {
      width: 100%;
      height: 40px;
      margin: 10px 0px;
      border-radius: 5px;
      border: none;
      outline: none;
      cursor: pointer;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      background-color: $error-green-tow;
      border: 1px solid $error-green-one;
      color: $white;
      transition-duration: 0.5s;
    }

    .update_video_btn_icon_hidden {
      @extend .update_video_btn_icon_to_show;
      display: none;
    }

    .update_video_btn_icon_to_show:hover {
      background-color: $error-green-one;
    }

    .video_btn {
      width: 100%;
      height: 40px;
      margin: 10px 0px;
      border-radius: 5px;
      font-size: $small;
      border: none;
      outline: none;
      cursor: pointer;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      background-color: $error-green-tow;
      border: 1px solid $error-green-one;
      color: $white;
      transition-duration: 0.5s;
    }

    .video_btn:hover {
      background-color: $error-green-one;
    }

    .delete_video_btn {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      cursor: pointer;
      color: $white;
      background-color: $error-red-tow;
      border: 1px solid $error-red-one;
      transition-duration: 0.5s;
    }

    .delete_video_btn:hover {
      background-color: $error-red-one;
    }

    #upload_video {
      display: none;
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
      border: 1px solid $inputs-border-white;
      background-color: $inputs-back-white;
    }

    input,
    select {
      width: 100%;
      height: 40px;
      margin: 5px 0px;
      outline: none;
      padding: 0px 5px;
      border-radius: 5px;
      border: 1px solid $inputs-border-white;
      background-color: $inputs-back-white;
      color: $black;
    }

    select > option {
      background-color: $white-tow;
    }

    .tags-cont {
      width: 100%;
      height: auto;
      padding: 5px;
      background-color: $inputs-back-white;
      border: 1px solid $inputs-border-white;
      border-radius: 5px;
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      align-items: center;

      .un_selected {
        padding: 4px;
        margin: 3px;
        cursor: pointer;
        color: $black;
        border-radius: 4px;
        font-size: $small;
        background-color: $white-one;

        @media (max-width: $mobile) {
          font-size: $x-small;
        }
      }

      .selected {
        @extend .un_selected;
        background-color: $white-tow;
        border: 1px solid $black;
      }
    }

    .images-cont {
      width: 100%;
      min-height: 60px;
      border-radius: 5px;
      background-color: $inputs-back-white;
      border: 1px solid $inputs-border-white;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      position: relative;
      padding-top: 20px;

      .select_images {
        border: none;
        width: auto;
        height: auto;
        cursor: pointer;
        position: absolute;
        left: 3px;
        top: 0%;

        svg {
          color: $black;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid $inputs-border-white;
          background-color: $inputs-back-white;
        }
      }

      #select_images {
        display: none;
      }

      img {
        max-width: 300px;
        height: auto;
        border-radius: 5px;
        cursor: pointer;
        margin: 5px;

        @media (max-width: $mobile) {
          max-width: 150px;
          height: auto;
        }
      }
    }

    .update_btn {
      width: 100%;
      height: 40px;
      margin: 5px 0px;
      border: none;
      border-radius: 5px;
      color: $white;
      outline: none;
      border: 1px solid $error-green-one;
      background-color: $error-green-tow;
      cursor: pointer;
      transition-duration: 0.5s;
    }

    .update_btn:hover {
      background-color: $error-green-one;
    }
  }
}

.dash-skill-update-light-Arabic-close {
  @extend .dash-skill-update-light-Arabic-open;
  padding: 30% 0px 0px 0px;

  .cont {
    opacity: 0;
  }
}
// darck and light Arabic style
</style>
