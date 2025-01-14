<template>
  <div
    :class="`work-page-${this.$store.state.mood}-${this.$store.state.language}-${this.page_status}`"
  >
    <div class="cont">
      <h2>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.work_page.title
            : this.$store.state.Arabic.work_page.title
        }}
      </h2>

      <video
        v-if="this.$store.state.work_data && this.$store.state.work_data.video"
        class="video"
        type="video/mp4"
        :poster="this.$store.state.work_data.video_cover"
        @loadedmetadata="onVideoLoaded"
        controls
      >
        <source
          play
          :src="this.$store.state.work_data.video"
          type="video/mp4"
        />
        <source
          play
          :src="this.$store.state.work_data.video"
          type="video/ogg"
        />
      </video>

      <h3>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.work_data.english_title
            : this.$store.state.work_data.arabic_title
        }}
      </h3>

      <p>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.work_data.english_description
            : this.$store.state.work_data.arabic_description
        }}
      </p>

      <a
        v-if="this.$store.state.work_data && this.$store.state.work_data.link"
        :href="this.$store.state.work_data.link"
        target="_blank"
      >
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.work_page.visit_link
            : this.$store.state.Arabic.work_page.visit_link
        }}
        <icon icon="arrow-right" />
      </a>

      <div class="tags-cont">
        <div class="tags-section-title">
          {{
            this.$store.state.language == "English"
              ? this.$store.state.English.work_page.tags_title
              : this.$store.state.Arabic.work_page.tags_title
          }}
        </div>

        <router-link
          :to="`/works/tag_name=${tag}`"
          class="tag"
          v-for="(tag, index) in (this, $store.state.work_data.tags)"
          :key="index"
        >
          {{ tag }}
        </router-link>
      </div>

      <img
        v-for="(path, index) in this.$store.state.work_data.images"
        :key="index"
        :src="path"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "wok-page",
      // page status
      page_status: "close",
    };
  },
  mounted() {
    // call to get work method
    this.get_work();
  },
  methods: {
    // get work data methods
    async get_work() {
      // to start the loading animation
      this.$store.state.loading_status = "open";

      await axios
        .get(`${this.$store.state.APIS.works.get_one}`, {
          params: {
            work_id: this.$route.params.id,
          },
        })
        .then((response) => {
          console.log(response);
          // to stope the loading  animation
          this.$store.state.loading_status = "close";

          // change the page status to open the page
          this.page_status = "open";

          // set the work's data to work var in store
          this.$store.state.work_data = response.data.work_data;
        })
        .catch((error) => {
          // to stop the loading animation
          this.$store.state.loading = "close";

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

// darck and light English style
.work-page-darck-English-open {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-five;
  opacity: 1;
  transition-duration: 0.5s;
  padding: 10% 0%;

  @media (max-width: $mobile) {
    padding: 15% 0%;
  }

  .cont {
    width: 70%;
    height: auto;
    margin: auto;
    transition-duration: 0.5s;

    @media (max-width: $mobile) {
      width: 90%;
      margin: 10px 5%;
    }

    h2 {
      width: 100%;
      height: auto;
      color: $white;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
    }

    video {
      width: 100%;
      height: auto;
      margin: 10px 0px;
    }

    h3 {
      width: 100%;
      height: auto;
      color: $white;
      margin: 10px 0px;
    }

    p {
      width: 100%;
      height: auto;
      color: $white;
      margin: 10px 0px;
    }

    img {
      width: 100%;
      height: auto;
    }

    .tags-cont {
      width: 100%;
      height: auto;
      background-color: $Navy-blue-three;
      padding: 5px 5px 0px 5px;
      border-radius: 5px;
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      align-items: center;
      margin: 10px 0px;

      .tags-section-title {
        width: 100%;
        height: auto;
        color: $white;
        border: 1px solid;
        border-color: transparent transparent $white transparent;
      }

      .tag {
        padding: 5px;
        color: $white;
        font-size: $small;
        @media (max-width: $mobile) {
          font-size: $x-small;
        }
        margin: 5px;
        border-radius: 3px;
        background-color: $Navy-blue-tow;
      }
    }

    a {
      color: $gold-five;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  }
}

.work-page-darck-English-close {
  @extend .work-page-darck-English-open;
  padding: 20% 0px;
  background-color: $Navy-blue-five;

  .cont {
    opacity: 0;
  }
}

.work-page-light-English-open {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  background-color: $white-one;
  opacity: 1;
  transition-duration: 0.5s;
  padding: 10% 0%;

  @media (max-width: $mobile) {
    padding: 15% 0%;
  }

  .cont {
    width: 70%;
    height: auto;
    margin: auto;
    transition-duration: 0.5s;

    @media (max-width: $mobile) {
      width: 90%;
      margin: 10px 5%;
    }

    h2 {
      width: 100%;
      height: auto;
      color: $black;
      border: 1px solid;
      border-color: transparent transparent $black transparent;
    }

    video {
      width: 100%;
      height: auto;
      margin: 10px 0px;
    }

    h3 {
      width: 100%;
      height: auto;
      color: $black;
      margin: 10px 0px;
    }

    p {
      width: 100%;
      height: auto;
      color: $black;
      margin: 10px 0px;
    }

    img {
      width: 100%;
      height: auto;
    }

    .tags-cont {
      width: 100%;
      height: auto;
      background-color: $white-tow;
      padding: 5px 5px 0px 5px;
      border-radius: 5px;
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      align-items: center;
      margin: 10px 0px;

      .tags-section-title {
        width: 100%;
        height: auto;
        color: $black;
        border: 1px solid;
        border-color: transparent transparent $black transparent;
      }

      .tag {
        padding: 5px;
        color: $black;
        font-size: $small;
        @media (max-width: $mobile) {
          font-size: $x-small;
        }
        margin: 5px;
        border-radius: 3px;
        background-color: $white-for;
      }
    }

    a {
      color: $gold-five;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  }
}

.work-page-light-English-close {
  @extend .work-page-darck-English-open;
  padding: 20% 0px;
  background-color: $white-one;

  .cont {
    opacity: 0;
  }
}
// darck and light English style

// darck and light Arabic style
.work-page-darck-Arabic-open {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-five;
  opacity: 1;
  transition-duration: 0.5s;
  padding: 10% 0%;

  @media (max-width: $mobile) {
    padding: 15% 0%;
  }

  .cont {
    width: 70%;
    height: auto;
    margin: auto;
    transition-duration: 0.5s;

    @media (max-width: $mobile) {
      width: 90%;
      margin: 10px 5%;
    }

    h2 {
      width: 100%;
      height: auto;
      color: $white;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
    }

    video {
      width: 100%;
      height: auto;
      margin: 10px 0px;
    }

    h3 {
      width: 100%;
      height: auto;
      color: $white;
      margin: 10px 0px;
    }

    p {
      width: 100%;
      height: auto;
      color: $white;
      margin: 10px 0px;
    }

    img {
      width: 100%;
      height: auto;
    }

    .tags-cont {
      width: 100%;
      height: auto;
      background-color: $Navy-blue-three;
      padding: 5px 5px 0px 5px;
      border-radius: 5px;
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      align-items: center;
      margin: 10px 0px;

      .tags-section-title {
        width: 100%;
        height: auto;
        color: $white;
        border: 1px solid;
        border-color: transparent transparent $white transparent;
      }

      .tag {
        padding: 5px;
        color: $white;
        font-size: $small;
        @media (max-width: $mobile) {
          font-size: $x-small;
        }
        margin: 5px;
        border-radius: 3px;
        background-color: $Navy-blue-tow;
      }
    }

    a {
      color: $gold-five;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  }
}

.work-page-darck-Arabic-close {
  @extend .work-page-darck-Arabic-open;
  padding: 20% 0px;
  background-color: $Navy-blue-five;

  .cont {
    opacity: 0;
  }
}

.work-page-light-Arabic-open {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  background-color: $white-one;
  opacity: 1;
  transition-duration: 0.5s;
  padding: 10% 0%;

  @media (max-width: $mobile) {
    padding: 15% 0%;
  }

  .cont {
    width: 70%;
    height: auto;
    margin: auto;
    transition-duration: 0.5s;

    @media (max-width: $mobile) {
      width: 90%;
      margin: 10px 5%;
    }

    h2 {
      width: 100%;
      height: auto;
      color: $black;
      border: 1px solid;
      border-color: transparent transparent $black transparent;
    }

    video {
      width: 100%;
      height: auto;
      margin: 10px 0px;
    }

    h3 {
      width: 100%;
      height: auto;
      color: $black;
      margin: 10px 0px;
    }

    p {
      width: 100%;
      height: auto;
      color: $black;
      margin: 10px 0px;
    }

    img {
      width: 100%;
      height: auto;
    }

    .tags-cont {
      width: 100%;
      height: auto;
      background-color: $white-tow;
      padding: 5px 5px 0px 5px;
      border-radius: 5px;
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      align-items: center;
      margin: 10px 0px;

      .tags-section-title {
        width: 100%;
        height: auto;
        color: $black;
        border: 1px solid;
        border-color: transparent transparent $black transparent;
      }

      .tag {
        padding: 5px;
        color: $black;
        font-size: $small;
        @media (max-width: $mobile) {
          font-size: $x-small;
        }
        margin: 5px;
        border-radius: 3px;
        background-color: $white-for;
      }
    }

    a {
      color: $gold-five;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  }
}

.work-page-light-Arabic-close {
  @extend .work-page-darck-Arabic-open;
  padding: 20% 0px;
  background-color: $white-one;

  .cont {
    opacity: 0;
  }
}
// darck and light Arabic style
</style>
