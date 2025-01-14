<template>
  <div
    :class="`dash-lesson-update-${this.$store.state.mood}-${this.$store.state.language}-${this.page_status}`"
  >
    <div class="cont">
      <h1>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_lesson_update_page.title
            : this.$store.state.Arabic.dash_lesson_update_page.title
        }}
      </h1>

      <label for="video">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_lesson_update_page.video
            : this.$store.state.Arabic.dash_lesson_update_page.video
        }}

        <label for="cover" class="cover_label">
          <icon icon="plus" />
        </label>
      </label>

      <input type="file" id="cover" accept="image/*" ref="cover" />

      <!-- video  -->
      <video
        v-if="
          this.$store.state.lesson_data &&
          this.$store.state.lesson_data.video &&
          !this.selected_video
        "
        :poster="
          this.video_cover_show != ''
            ? this.video_cover_show
            : this.$store.state.lesson_data.video_cover
        "
        class="video"
        type="video/mp4"
        @loadedmetadata="onVideoLoaded"
        controls
      >
        <source
          play
          :src="this.$store.state.lesson_data.video"
          type="video/mp4"
        />
        <source
          play
          :src="this.$store.state.lesson_data.video"
          type="video/ogg"
        />
      </video>

      <video
        v-if="this.selected_video"
        class="video"
        type="video/mp4"
        :poster="
          this.video_cover_show != ''
            ? this.video_cover_show
            : this.$store.state.lesson_data.video_cover
        "
        @loadedmetadata="onVideoLoaded"
        controls
      >
        <source play :src="this.selected_video" type="video/mp4" />
        <source play :src="this.selected_vide" type="video/ogg" />
      </video>

      <img
        :src="
          this.video_cover_show
            ? this.video_cover_show
            : this.$store.state.lesson_data.video_cover
        "
        class="video_cover_image"
        alt="video_cover"
        v-if="
          this.selected_video == '' && this.$store.state.lesson_data.video == ''
        "
      />
      <!-- video  -->

      <!-- update video_cover btn  -->
      <button
        :class="`update_video_btn_cover_${
          this.video_cover_show != '' ? 'show' : 'hidden'
        }`"
        @click="update_video_cover"
      >
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_lesson_update_page.video_cover_btn
            : this.$store.state.Arabic.dash_lesson_update_page.video_cover_btn
        }}
      </button>
      <!-- update video_cover btn  -->

      <!-- delete video btn  -->
      <button class="delete_video_btn" @click="delete_video">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_lesson_update_page.delete_video_btn
            : this.$store.state.Arabic.dash_lesson_update_page.delete_video_btn
        }}
      </button>
      <!-- delete video btn  -->

      <label for="upload_video" class="video_label">
        <p class="video_btn">
          {{
            this.$store.state.language == "English"
              ? this.$store.state.English.dash_lesson_update_page.video_btn
              : this.$store.state.Arabic.dash_lesson_update_page.video_btn
          }}
        </p>
      </label>

      <input
        type="file"
        id="upload_video"
        ref="selected_video"
        accept="video/*"
      />

      <!-- english title  -->
      <label for="english_title">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_lesson_update_page.english_title
            : this.$store.state.Arabic.dash_lesson_update_page.english_title
        }}

        <span>{{ this.english_title.length }}</span>
      </label>

      <input type="text" id="english_title" v-model="this.english_title" />
      <!-- english title  -->

      <!-- arabic title  -->
      <label for="arabic_title">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_lesson_update_page.arabic_title
            : this.$store.state.Arabic.dash_lesson_update_page.arabic_title
        }}

        <span>{{ this.arabic_title.length }}</span>
      </label>

      <input type="text" id="arabic_title" v-model="this.arabic_title" />
      <!-- arabic title  -->

      <!-- english description  -->
      <label for="english_description">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_lesson_update_page
                .english_description
            : this.$store.state.Arabic.dash_lesson_update_page
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
            ? this.$store.state.English.dash_lesson_update_page
                .arabic_description
            : this.$store.state.Arabic.dash_lesson_update_page
                .arabic_description
        }}

        <span>{{ this.arabic_description.length }}</span>
      </label>

      <textarea
        id="arabic_description"
        v-model="this.arabic_description"
      ></textarea>
      <!-- arabic description  -->

      <!-- link  -->
      <label for="link">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_lesson_update_page.link
            : this.$store.state.Arabic.dash_lesson_update_page.link
        }}

        <span>{{ this.link.length }}</span>
      </label>

      <input type="text" id="link" v-model="this.link" />
      <!-- link  -->

      <!-- program  -->
      <label for="program">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_lesson_update_page.program
            : this.$store.state.Arabic.dash_lesson_update_page.program
        }}

        <span>{{ this.program.length }}</span>
      </label>

      <select id="program" v-model="this.program">
        <option
          v-for="(program, index) in this.$store.state.programs"
          :key="index"
          :value="program.english_title"
        >
          {{
            this.$store.state.language == "English"
              ? program.english_title
              : program.arabic_title
          }}
        </option>
      </select>
      <!-- program  -->

      <!-- level  -->
      <label for="level">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_lesson_update_page.level
            : this.$store.state.Arabic.dash_lesson_update_page.level
        }}

        <span>{{ this.level.length }}</span>
      </label>

      <select id="level" v-model="this.level">
        <option
          v-for="(level, index) in this.$store.state.levels"
          :key="index"
          :value="level.english_title"
        >
          {{
            this.$store.state.language == "English"
              ? level.english_title
              : level.arabic_title
          }}
        </option>
      </select>
      <!-- level  -->

      <!-- created_at  -->
      <label for="created_at">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_lesson_update_page.created_at
            : this.$store.state.Arabic.dash_lesson_update_page.created_at
        }}

        <span>{{ this.created_at.length }}</span>
      </label>

      <input type="text" id="created_at" v-model="this.created_at" />
      <!-- created_at  -->

      <!-- tags  -->
      <label
        >{{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_lesson_update_page.tags
            : this.$store.state.Arabic.dash_lesson_update_page.tags
        }}
        <span>{{ this.tags.length }}</span>
      </label>

      <div class="tags-cont">
        <p
          v-for="(tag, index) in this.$store.state.tags"
          :key="index"
          @click="select_tag(tag.english_title)"
          :class="
            !this.tags.includes(tag.english_title) ? 'un_selected' : 'selected'
          "
        >
          {{
            this.$store.state.language == "English"
              ? tag.english_title
              : tag.arabic_title
          }}
        </p>
      </div>
      <!-- tags  -->

      <!-- images  -->
      <label
        >{{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_lesson_update_page.image_label
            : this.$store.state.Arabic.dash_lesson_update_page.image_label
        }}
        <span>{{ this.images.length + this.selected_images_show.length }}</span>
      </label>

      <div class="images-cont">
        <label for="select_images" class="select_images">
          <icon icon="plus" />
        </label>

        <input
          type="file"
          id="select_images"
          multiple
          ref="selected_images"
          accept="image/*"
        />

        <img
          v-for="(url, index) in this.$store.state.lesson_data.images"
          :key="index"
          :src="url"
          @click="delete_image_url(index, url)"
          alt=""
        />

        <img
          v-for="(url, index) in this.selected_images_show"
          :key="index"
          :src="url"
          @click="remove_seletced_images(index)"
          alt="new_image"
        />
      </div>
      <!-- images  -->

      <button class="update_btn" @click="update_lesson">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_lesson_update_page.update_btn
            : this.$store.state.Arabic.dash_lesson_update_page.update_btn
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
      name: "update-lesson-page",

      // page status
      page_status: "close",

      // update_btn_status
      update_btn_status: false,

      // lesson's data
      english_title: "",
      arabic_title: "",
      english_description: "",
      arabic_description: "",
      link: "",
      tags: [],
      images: [],
      selected_images_show: [],
      selected_images_send: [],
      images_for_delete: [],
      program: "",
      level: "",
      created_at: "",

      selected_video: "",

      selected_video_send: [],

      video_reaction: "",

      video_cover_send: "",
      video_cover_show: "",

      // create form data
      formData: "",
    };
  },
  mounted() {
    //  call to the handleFileChange method on select any image
    this.$refs.selected_images.addEventListener(
      "change",
      this.handleFileChange
    );

    this.$refs.selected_video.addEventListener(
      "change",
      this.handleFileChangeVideo
    );

    // call to the handelFileChange method on select video cover
    this.$refs.cover.addEventListener(
      "change",
      this.handleFileChangeVideoCover
    );

    // call to get lesson data method
    this.get_lesson_data();
  },
  methods: {
    // handel selected files
    handleFileChange(event) {
      // call to reader files method
      this.readerFiles(Array.from(event.target.files));

      this.selected_images_send = Array.from(event.target.files);
    },

    // handel selected file (video)
    handleFileChangeVideo(event) {
      // empty the selected_video
      this.selected_video = "";

      // call to reader files method
      this.readerFileVideo(event.target.files[0]);

      // set the selcted video to the selected_video_send
      this.selected_video_send.push(event.target.files[0]);
    },

    // handel selected file (video)
    handleFileChangeVideoCover(event) {
      // call to reader files method
      this.readerFileVideoCover(event.target.files[0]);
      // set the selcted video's cover to the video_cover_send
      this.video_cover_send = event.target.files[0];
    },

    // to reade the selected images
    async readerFiles(images_array) {
      // looping to read all selecetd images
      for (const image of images_array) {
        const reader = new FileReader();

        const promise = new Promise((resolve) => {
          reader.onload = (e) => {
            resolve(e.target.result);
          };

          reader.readAsDataURL(image);
        });

        // add the promise results to images array
        this.selected_images_show.push(await promise);
      }
    },

    // reader selecetd video
    readerFileVideo(video) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.selected_video = e.target.result;
      };

      reader.readAsDataURL(video);

      // change the video reaction
      this.video_reaction = "";
    },

    // reader selecetd video
    readerFileVideoCover(video_cover) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.video_cover_show = e.target.result;
      };

      reader.readAsDataURL(video_cover);
    },

    // remove the seletced image from selected images array method
    remove_seletced_images(index) {
      // delete the clicked image from selcted images to show
      this.selected_images_show.splice(index, 1);

      // delete the clicked image from selcted images to show
      this.selected_images_send.splice(index, 1);
    },

    // add the old image's url to images_for_delete array and delete it from images array
    delete_image_url(index, url) {
      // delete the image's url from lesson's images array
      this.$store.state.lesson_data.images.splice(index, 1);

      // add the deleted imag's url to images fro delete
      this.images_for_delete.push(url);
    },

    // select the tags method
    select_tag(tag_title) {
      // check if the selected tags ahs the clicked tag
      !this.tags.includes(tag_title)
        ? // push the tag
          this.tags.push(tag_title)
        : // filter the selected tags and return the tags
          (this.tags = this.tags.filter((tag) => {
            return tag != tag_title;
          }));
    },

    // delete the video method
    delete_video() {
      // update the video reaction
      this.video_reaction = "delete";

      // rmpty the selected_video
      this.selected_video = "";

      // empty the lesson_data's video
      this.$store.state.lesson_data.video = "";

      // empty the selcted video to send
      this.selected_video_send = [];
    },

    // get lesson data
    async get_lesson_data() {
      // start the laoding
      this.$store.state.loading_status = "open";

      await axios
        .get(this.$store.state.APIS.lessons.get_one, {
          params: {
            lesson_id: this.$route.params.id,
          },
        })
        .then((response) => {
          // change the page status
          this.page_status = "open";

          // ste the lesson data to the lesson's filed in data section
          this.english_title = response.data.lesson_data.english_title;
          this.arabic_title = response.data.lesson_data.arabic_title;
          this.english_description =
            response.data.lesson_data.english_description;
          this.arabic_description =
            response.data.lesson_data.arabic_description;
          this.tags = response.data.lesson_data.tags;
          this.link = response.data.lesson_data.link;
          this.images = response.data.lesson_data.images;
          this.program = response.data.lesson_data.program;
          this.level = response.data.lesson_data.level;
          this.created_at = response.data.lesson_data.created_at;

          // stop the laoding
          this.$store.state.loading_status = "close";

          // set teh geted lesson data to lesson var in store
          this.$store.state.lesson_data = response.data.lesson_data;
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

    // update the lesson
    async update_lesson() {
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

      // add the lesson id to form data
      this.formData.append("lesson_id", this.$store.state.lesson_data._id);

      // check if the english title is change or not and add it to form data
      if (this.english_title != this.$store.state.lesson_data.english_title) {
        this.formData.append("english_title", this.english_title);
      }

      // check if the arabic title is change or not and add it to form data
      if (this.arabic_title != this.$store.state.lesson_data.arabic_title) {
        this.formData.append("arabic_title", this.arabic_title);
      }

      // check if the english description is change or not and add it to form data
      if (
        this.english_description !=
        this.$store.state.lesson_data.english_description
      ) {
        this.formData.append("english_description", this.english_description);
      }

      // check if the arabic description is change or not and add it to form data
      if (
        this.arabic_description !=
        this.$store.state.lesson_data.arabic_description
      ) {
        this.formData.append("arabic_description", this.arabic_description);
      }

      // check if the linke is change or not
      if (this.link != this.$store.state.lesson_data.link) {
        this.formData.append("link", this.link);
      }

      // cgeck if the program is change or not
      if (this.program != this.$store.state.lesson_data.program) {
        this.formData.append("program", this.program);
      }

      // check if the level is changed or not
      if (this.level != this.$store.state.lesson_data.level) {
        this.formData.append("level", this.level);
      }

      // check if the creatd at date is change or not
      if (this.created_at != this.$store.state.lesson_data.created_at) {
        this.formData.append("created_at", this.created_at);
      }

      // add the images
      if (this.selected_images_send.length > 0) {
        for (const file of this.selected_images_send) {
          this.formData.append("files", file, file.name);
        }
      }

      // check if the video reaction is not delete
      if (this.video_reaction != "delete") {
        for (const file of this.selected_video_send) {
          this.formData.append("files", file, file.name);
        }
      } else {
        this.formData.append("video_reaction", this.video_reaction);
      }

      // chaneg the images_for_delete's length is more than 0
      if (this.images_for_delete.length > 0) {
        // covaert it to staring and add it to formData
        this.formData.append(
          "images_for_delete",
          this.images_for_delete.join("split_here")
        );
      }

      // add the tags
      this.formData.append("tags", this.tags.join("."));

      await axios
        .put(this.$store.state.APIS.lessons.update, this.formData, {
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

          // update the lesson's data in store
          this.$store.state.lesson_data = response.data.lesson_data;

          // empty the selected_images_send
          this.selected_images_send = [];

          // empty the selected_images_show
          this.selected_images_show = [];

          // empty the selected video
          this.selected_video = "";

          // empty the selected_video_send
          this.selected_video_send = [];

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

    //update cover
    async update_video_cover() {
      // change the uploaded_rate in store
      this.$store.state.uploaded_rate = 0;

      // start teh loading
      this.$store.state.loading_status = "open";

      // create a new form data
      this.formData = new FormData();

      // create headers
      const headers = {
        Authorization: `Bearer ${this.$store.state.admin_data.token}`,
      };

      // add the admin id to fom data
      this.formData.append("admin_id", this.$store.state.admin_data.admin._id);

      // add the lesson id to form data
      this.formData.append("lesson_id", this.$store.state.lesson_data._id);

      // add the cover to form data
      this.formData.append(
        "cover",
        this.video_cover_send,
        this.video_cover_send.name
      );

      await axios
        .put(this.$store.state.APIS.lessons.change_cover, this.formData, {
          headers,
          onUploadProgress: (progressEvent) => {
            // update the upload rate
            this.$store.state.uploaded_rate = `${Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            )}%`;
          },
        })
        .then((response) => {
          console.log(response);
          // change the uploaded_rate in store to "" to hidden it
          this.$store.state.uploaded_rate = "";

          // stop the loading
          this.$store.state.loading_status = "close";

          // set the lesson's data from response to lesson_data in store
          this.$store.state.lesson_data = response.data.lesson_data;

          // empty the video_cover_send
          this.video_cover_send = "";

          // empty the video_cover_show
          this.video_cover_show = "";

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
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";
// darck and light English style
.dash-lesson-update-darck-English-open {
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

      .cover_label {
        width: auto;
        height: auto;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        border: 1px solid $inputs-border-black;
        background-color: $inputs-back-black;
      }
    }

    #cover {
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

    .video_cover_image {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }

    .update_video_btn_cover_show {
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

    .update_video_btn_cover_hidden {
      @extend .update_video_btn_cover_show;
      display: none;
    }

    .update_video_btn_cover_show:hover {
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

.dash-lesson-update-darck-English-close {
  @extend .dash-lesson-update-darck-English-open;
  padding: 30% 0px 0px 0px;

  .cont {
    opacity: 0;
  }
}

.dash-lesson-update-light-English-open {
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

      .cover_label {
        width: auto;
        height: auto;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        border: 1px solid $inputs-border-white;
        background-color: $inputs-back-white;
      }
    }

    #cover {
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

    .video_cover_image {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }

    .update_video_btn_cover_show {
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

    .update_video_btn_cover_hidden {
      @extend .update_video_btn_cover_show;
      display: none;
    }

    .update_video_btn_cover_show:hover {
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

.dash-lesson-update-light-English-close {
  @extend .dash-lesson-update-light-English-open;
  padding: 30% 0px 0px 0px;

  .cont {
    opacity: 0;
  }
}
// darck and light English style

// darck and light Arabic style
.dash-lesson-update-darck-Arabic-open {
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

      .cover_label {
        width: auto;
        height: auto;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        border: 1px solid $inputs-border-black;
        background-color: $inputs-back-black;
      }
    }

    #cover {
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

    .video_cover_image {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }

    .update_video_btn_cover_show {
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

    .update_video_btn_cover_hidden {
      @extend .update_video_btn_cover_show;
      display: none;
    }

    .update_video_btn_cover_show:hover {
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

.dash-lesson-update-darck-Arabic-close {
  @extend .dash-lesson-update-darck-Arabic-open;
  padding: 30% 0px 0px 0px;

  .cont {
    opacity: 0;
  }
}

.dash-lesson-update-light-Arabic-open {
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

      .cover_label {
        width: auto;
        height: auto;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        border: 1px solid $inputs-border-white;
        background-color: $inputs-back-white;
      }
    }

    #cover {
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

    .video_cover_image {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }

    .update_video_btn_cover_show {
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

    .update_video_btn_cover_hidden {
      @extend .update_video_btn_cover_show;
      display: none;
    }

    .update_video_btn_cover_show:hover {
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

.dash-lesson-update-light-Arabic-close {
  @extend .dash-lesson-update-light-Arabic-open;
  padding: 30% 0px 0px 0px;

  .cont {
    opacity: 0;
  }
}
// darck and light Arabic style
</style>
