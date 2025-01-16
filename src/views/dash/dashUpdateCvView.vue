<template>
  <div
    :class="`update-cv-page-${this.$store.state.mood}-${this.$store.state.language}-${this.page_status}`"
  >
    <div class="cont">
      <h1>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.update_cv_page.title
            : this.$store.state.Arabic.update_cv_page.title
        }}
        <label for="cv"><icon icon="plus" /></label>
      </h1>

      <input type="file" accept="image/*" id="cv" ref="cv_image" />

      <img
        v-if="this.$store.state.cv && this.cv_to_send.length == 0"
        :src="this.$store.state.cv"
        alt="cv"
      />

      <img v-else :src="this.cv_to_show" alt="cv" />

      <button v-if="this.cv_to_send.length > 0" @click="update_cv">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.update_cv_page.button
            : this.$store.state.Arabic.update_cv_page.button
        }}
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "dash-update-cv-page",
  data() {
    return {
      // page status
      page_status: "close",

      // cv to show
      cv_to_show: [],

      // cv to send
      cv_to_send: [],

      // form Data
      formData: "",
    };
  },
  mounted() {
    // call to get cv method
    this.get_cv_method();

    // andel the selected image
    this.$refs.cv_image.addEventListener("change", this.hanelSelectedCv);
  },
  methods: {
    // hanelSelectedCv
    hanelSelectedCv(event) {
      // call to reader the selected file
      this.readerFile(event.target.files[0]);

      // send the selected cv to cv_to_send
      this.cv_to_send.push(event.target.files[0]);
    },

    // reader selecetd video
    readerFile(video_cover) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.cv_to_show = e.target.result;
      };

      reader.readAsDataURL(video_cover);
    },

    async get_cv_method() {
      // to start the loading animation
      this.$store.state.loading_status = "open";

      await axios
        .get(this.$store.state.APIS.auth.get_admin_cv)
        .then((response) => {
          // change the page status
          this.page_status = "open";

          // to stop the loading animation
          this.$store.state.loading_status = "close";

          // set the cv to cv var in store
          this.$store.state.cv = response.data.cv_path.cv;
        })
        .catch((error) => {
          // to stop the loading animation
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

    // update the cv method
    async update_cv() {
      // start the loading
      this.$store.state.loading_status = "open";

      // create headers
      const headers = {
        Authorization: `Bearer ${this.$store.state.admin_data.token}`,
      };

      // craete a new formn data
      this.formData = new FormData();

      // set the admin id
      this.formData.append("_id", this.$store.state.admin_data.admin._id);

      // add the cv to form data
      if (this.cv_to_send.length > 0) {
        for (const file of this.cv_to_send) {
          this.formData.append("cv", file, file.name);
        }
      }

      await axios
        .put(this.$store.state.APIS.auth.change_cv, this.formData, {
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

          // set the new cv url form response to cv path in store
          this.$store.state.cv = response.data.cv_url;

          // empty the cv_to_send
          this.cv_to_send = [];

          // empty the cv_to_show
          this.cv_to_show = [];

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
.update-cv-page-darck-English-open {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  padding: 10% 0% 0% 0%;
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
      color: $white;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
      display: flex;
      justify-content: space-between;
      align-items: center;

      label {
        width: auto;
        height: auto;
        margin: 5px;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        border: 1px solid $inputs-border-black;
        background-color: $inputs-back-black;
        font-size: $small;
      }
    }

    input {
      display: none;
    }

    img {
      width: 100%;
      height: auto;
      margin: 10px 0px;
    }

    button {
      width: 100%;
      height: 40px;
      margin: 10px 0px;
      outline: none;
      border-radius: 5px;
      border: 1px solid $error-green-one;
      background-color: $error-green-tow;
      color: $white;
      cursor: pointer;
      transition-duration: 0.5s;
    }

    button:hover {
      background-color: $error-green-one;
    }
  }
}

.update-cv-page-darck-English-close {
  @extend .update-cv-page-darck-English-open;
  padding-top: 30%;

  .cont {
    opacity: 0;
  }
}
// darck and light English style
</style>
