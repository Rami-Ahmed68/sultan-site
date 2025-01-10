<template>
  <div
    :class="`lesson-page-${this.$store.state.mood}-${this.$store.state.language}-${this.page_status}`"
  >
    <div class="cont">
      <h2>
        <span :class="`span-${this.$store.state.lesson_data.level}`">
          {{ this.$store.state.lesson_data.level }}
        </span>

        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.lesson_page.title
            : this.$store.state.Arabic.lesson_page.title
        }}
      </h2>

      <video
        v-if="
          this.$store.state.lesson_data && this.$store.state.lesson_data.video
        "
        class="video"
        type="video/mp4"
        :poster="this.$store.state.lesson_data.video_cover"
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

      <h3>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.lesson_data.english_title
            : this.$store.state.lesson_data.arabic_title
        }}
      </h3>

      <p>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.lesson_data.english_description
            : this.$store.state.lesson_data.arabic_description
        }}
      </p>

      <p class="program">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.lesson_page.program_name
            : this.$store.state.Arabic.lesson_page.program_name
        }}
        :
        {{ this.$store.state.lesson_data.program }}
      </p>

      <a
        v-if="
          this.$store.state.lesson_data && this.$store.state.lesson_data.link
        "
        :href="this.$store.state.lesson_data.link"
        target="_blank"
      >
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.lesson_page.see_more
            : this.$store.state.Arabic.lesson_page.see_more
        }}
        <icon icon="arrow-right" />
      </a>

      <div class="tags-cont">
        <div class="tags-section-title">
          {{
            this.$store.state.language == "English"
              ? this.$store.state.English.lesson_page.tags_title
              : this.$store.state.Arabic.lesson_page.tags_title
          }}
        </div>

        <router-link
          :to="`/lessons/tag_name=${tag}`"
          class="tag"
          v-for="(tag, index) in (this, $store.state.lesson_data.tags)"
          :key="index"
        >
          {{ tag }}
        </router-link>
      </div>

      <img
        v-for="(path, index) in this.$store.state.lesson_data"
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
    // call to get lesson method
    this.get_lesson();
  },
  methods: {
    // get lesson data methods
    async get_lesson() {
      // to start the loading animation
      this.$store.state.loading_status = "open";

      await axios
        .get(`${this.$store.state.APIS.lessons.get_one}`, {
          params: {
            lesson_id: this.$route.params.id,
          },
        })
        .then((response) => {
          console.log(response);
          // to stope the loading  animation
          this.$store.state.loading_status = "close";

          // change the page status to open the page
          this.page_status = "open";

          // set the lesson's data to lesson var in store
          this.$store.state.lesson_data = response.data.lesson_data;
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
.lesson-page-darck-English-open {
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
      position: relative;

      .span-advanced {
        padding: 4px;
        border-radius: 4px;
        background-color: $error-red-tow;
        border: 1px solid $error-red-one;
        font-size: $small;
        position: absolute;
        right: 0%;
      }

      .span-professional {
        @extend .span-advanced;
        background-color: $error-orange-tow;
        border: 1px solid $error-orange-one;
      }

      .span-essential {
        @extend .span-advanced;
        background-color: $error-green-tow;
        border: 1px solid $error-green-one;
      }
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
      transition-duration: 0.5s;

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
        margin: 5px;
        border-radius: 3px;
        font-size: $small;
        @media (max-width: $mobile) {
          font-size: $x-small;
        }
        background-color: $Navy-blue-tow;
      }
    }

    .program {
      padding: 4px;
      border-radius: 4px;
      background-color: $Navy-blue-tow;
      transition-duration: 0.5s;
      font-size: $small;
      @media (max-width: $mobile) {
        font-size: $x-small;
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

.lesson-page-darck-English-close {
  @extend .lesson-page-darck-English-open;
  padding: 20% 0px;
  background-color: $Navy-blue-five;

  .cont {
    opacity: 0;
  }
}

.lesson-page-light-English-open {
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
      position: relative;

      .span-advanced {
        padding: 4px;
        border-radius: 4px;
        background-color: $error-red-tow;
        border: 1px solid $error-red-one;
        font-size: $small;
        position: absolute;
        right: 0%;
      }

      .span-professional {
        @extend .span-advanced;
        background-color: $error-orange-tow;
        border: 1px solid $error-orange-one;
      }

      .span-essential {
        @extend .span-advanced;
        background-color: $error-green-tow;
        border: 1px solid $error-green-one;
      }
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
      transition-duration: 0.5s;

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
        margin: 5px;
        border-radius: 3px;
        font-size: $small;
        @media (max-width: $mobile) {
          font-size: $x-small;
        }
        background-color: $white-for;
      }
    }

    .program {
      padding: 4px;
      border-radius: 4px;
      background-color: $white-tow;
      color: $black;
      transition-duration: 0.5s;
      font-size: $small;
      @media (max-width: $mobile) {
        font-size: $x-small;
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

.lesson-page-light-English-close {
  @extend .lesson-page-darck-English-open;
  padding: 20% 0px;
  background-color: $white-one;

  .cont {
    opacity: 0;
  }
}
// darck and light English style

// darck and light Arabic style
.lesson-page-darck-Arabic-open {
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
      position: relative;

      .span-advanced {
        padding: 4px;
        border-radius: 4px;
        background-color: $error-red-tow;
        border: 1px solid $error-red-one;
        font-size: $small;
        position: absolute;
        left: 0%;
      }

      .span-professional {
        @extend .span-advanced;
        background-color: $error-orange-tow;
        border: 1px solid $error-orange-one;
      }

      .span-essential {
        @extend .span-advanced;
        background-color: $error-green-tow;
        border: 1px solid $error-green-one;
      }
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

    .program {
      padding: 4px;
      border-radius: 4px;
      background-color: $Navy-blue-tow;
      transition-duration: 0.5s;
      font-size: $small;
      @media (max-width: $mobile) {
        font-size: $x-small;
      }
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
      transition-duration: 0.5s;

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
        margin: 5px;
        border-radius: 3px;
        font-size: $small;
        @media (max-width: $mobile) {
          font-size: $x-small;
        }
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

.lesson-page-darck-Arabic-close {
  @extend .lesson-page-darck-Arabic-open;
  padding: 20% 0px;
  background-color: $Navy-blue-five;

  .cont {
    opacity: 0;
  }
}

.lesson-page-light-Arabic-open {
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
      position: relative;

      .span-advanced {
        padding: 4px;
        border-radius: 4px;
        background-color: $error-red-tow;
        border: 1px solid $error-red-one;
        font-size: $small;
        position: absolute;
        left: 0%;
      }

      .span-professional {
        @extend .span-advanced;
        background-color: $error-orange-tow;
        border: 1px solid $error-orange-one;
      }

      .span-essential {
        @extend .span-advanced;
        background-color: $error-green-tow;
        border: 1px solid $error-green-one;
      }
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

    .program {
      padding: 4px;
      border-radius: 4px;
      background-color: $white-tow;
      transition-duration: 0.5s;
      font-size: $small;
      @media (max-width: $mobile) {
        font-size: $x-small;
      }
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
      transition-duration: 0.5s;

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
        margin: 5px;
        border-radius: 3px;
        font-size: $small;
        @media (max-width: $mobile) {
          font-size: $x-small;
        }
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

.lesson-page-light-Arabic-close {
  @extend .lesson-page-darck-Arabic-open;
  padding: 20% 0px;
  background-color: $white-one;

  .cont {
    opacity: 0;
  }
}
// darck and light Arabic style
</style>
