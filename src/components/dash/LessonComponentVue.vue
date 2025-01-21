<template>
  <div
    :class="`lesson-${this.$store.state.mood}-${this.$store.state.language}`"
  >
    <p :class="`level-${this.lesson_data.level}`">
      {{ this.lesson_data.level }}
    </p>

    <div class="image-cont" @click="go_lesson">
      <img
        v-if="
          this.lesson_data.video_cover && this.lesson_data.video_cover != ''
        "
        :src="this.lesson_data.video_cover"
        alt=""
      />
    </div>

    <div class="info" v-if="this.lesson_data" @click="go_lesson">
      <!-- title  -->
      <h4 v-if="this.lesson_data && this.$store.state.language == 'English'">
        {{
          this.lesson_data.english_title
            ? this.lesson_data.english_title.length > 20
              ? this.lesson_data.english_title.slice(0, 20) + "..."
              : this.lesson_data.english_title
            : ""
        }}
      </h4>

      <h4 v-if="this.lesson_data && this.$store.state.language == 'Arabic'">
        {{
          this.lesson_data.arabic_title
            ? this.lesson_data.arabic_title.length > 20
              ? this.lesson_data.arabic_title.slice(0, 20) + "..."
              : this.lesson_data.arabic_title
            : ""
        }}
      </h4>
      <!-- title  -->

      <!-- description  -->
      <p
        v-if="this.lesson_data && this.$store.state.language == 'English'"
        class="description"
      >
        {{
          this.lesson_data.english_description
            ? this.lesson_data.english_description.length > 100
              ? this.lesson_data.english_description.slice(0, 70) + "..."
              : this.lesson_data.english_description
            : ""
        }}
      </p>

      <p
        v-if="this.lesson_data && this.$store.state.language == 'Arabic'"
        class="description"
      >
        {{
          this.lesson_data.arabic_description
            ? this.lesson_data.arabic_description.length > 100
              ? this.lesson_data.arabic_description.slice(0, 70) + "..."
              : this.lesson_data.arabic_description
            : ""
        }}
      </p>
      <!-- description  -->

      <p
        class="tag"
        v-for="(tag, index) in this.lesson_data.tags.slice(0, 3)"
        :key="index"
      >
        {{ tag }}
      </p>

      <!-- create at  -->
      <p class="date">
        {{ this.lesson_data.created_at }}
      </p>
      <!-- create at  -->
    </div>

    <icon icon="ellipsis-vertical" id="kabab" @click="change_options_type" />

    <div :class="`options-${this.options_type}`">
      <p @click="this.delete_form">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_lessons_component.options.delete
            : this.$store.state.Arabic.dash_lessons_component.options.delete
        }}
        <icon icon="trash" />
      </p>
      <p @click="this.move_to_update">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_lessons_component.options.update
            : this.$store.state.Arabic.dash_lessons_component.options.update
        }}
        <icon icon="pen" />
      </p>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  props: {
    lesson_data: Object,
  },
  data() {
    return {
      name: "lesson-component",
      english_title: this.lesson_data
        ? this.lesson_data.english_title
        : "this.lesson_data.english_title",

      // options_type
      options_type: "close",
    };
  },
  methods: {
    go_lesson() {
      router.push(`/lesson/${this.lesson_data._id}`);
    },

    // change options type
    change_options_type() {
      this.options_type = this.options_type == "close" ? "open" : "close";
    },

    // open delete form
    delete_form() {
      // ste the lesson id into store
      this.$store.state.lesson_id_for_delete = this.lesson_data._id;

      // clall to change_options_type method
      this.change_options_type();

      // change the delete lesson form status in stor to open the delete lesson form
      this.$store.commit("OpenOrCloseDeleteLessonForm");
    },

    // move to update method
    move_to_update() {
      router.push(`/dashboard/lesson/update${this.lesson_data._id}`);
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";
// darck and light English style
.lesson-darck-English {
  direction: ltr;
  width: 98%;
  height: auto;
  background-color: $Navy-blue-tow;
  margin: 5px 1%;
  cursor: pointer;
  border-radius: 5px;
  transition-duration: 0.5s;
  position: relative;
  display: flex;
  flex-wrap: wrap;

  .level-advanced {
    padding: 4px;
    border-radius: 4px;
    color: $white;
    font-size: $x-small;
    border: 1px solid $error-red-one;
    background-color: $error-red-tow;
    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 5;

    @media (max-width: $mobile) {
      font-size: $xx-small;
    }
  }

  .level-professional {
    @extend .level-advanced;
    border: 1px solid $error-orange-one;
    background-color: $error-orange-tow;
  }

  .level-essential {
    @extend .level-advanced;
    border: 1px solid $error-green-one;
    background-color: $error-green-tow;
  }

  .image-cont {
    width: 150px;
    height: 100px;
    border-radius: 5px;
    margin: 10px 1%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      transition-duration: 0.5s;
    }

    img:hover {
      transform: scale(1.1);
    }
  }

  .info {
    width: 70%;
    height: auto;
    margin: 0px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;

    @media (max-width: $mobile) {
      width: 50%;
    }

    h4 {
      width: 100%;
      height: auto;
      margin: 5px 0%;
      color: $white;
    }

    .description {
      @extend h4;
    }

    .tag {
      width: auto;
      font-size: $x-small;
      color: $white;
      padding: 4px;
      border-radius: 4px;
      background-color: $Navy-blue-one;
      margin: 3px;

      @media (max-width: $mobile) {
        font-size: $xx-small;
      }
    }

    .date {
      font-size: $small;
      color: $white;
      margin: 5px;
      width: 100%;
    }
  }

  #kabab {
    color: $white;
    width: 15px;
    height: 15px;
    padding: 5px;
    border-radius: 3px;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: $Navy-blue-one;
    transition-duration: 0.5s;
  }

  #kabab:hover {
    background-color: $Navy-blue-for;
  }

  .options-open {
    width: 100px;
    max-height: 100px;
    overflow: hidden;
    border-radius: 5px;
    backdrop-filter: blur(30px);
    border: 1px solid $inputs-border-white;
    position: absolute;
    right: 30px;
    top: 20px;
    transition-duration: 0.5s;
    opacity: 1;

    p {
      width: 90%;
      height: 40px;
      margin: 5%;
      display: flex;
      justify-content: start;
      align-items: center;
      padding: 0px 5px;
      border-radius: 5px;
      background-color: $Navy-blue-tow;
      color: $white;
      cursor: pointer;
      transition-duration: 0.5s;
      font-size: $small;

      svg {
        margin: 0px 5px;
      }
    }

    p:hover {
      background-color: $Navy-blue-one;
    }
  }

  .options-close {
    @extend .options-open;
    width: 0px;
    max-height: 0px;
    opacity: 0;
  }
}

.lesson-light-English {
  direction: ltr;
  width: 98%;
  height: auto;
  background-color: $white-tow;
  margin: 5px 1%;
  cursor: pointer;
  border-radius: 5px;
  transition-duration: 0.5s;
  position: relative;
  display: flex;
  flex-wrap: wrap;

  .level-advanced {
    padding: 4px;
    border-radius: 4px;
    color: $black;
    font-size: $x-small;
    border: 1px solid $error-red-one;
    background-color: $error-red-tow;
    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 5;

    @media (max-width: $mobile) {
      font-size: $xx-small;
    }
  }

  .level-professional {
    @extend .level-advanced;
    border: 1px solid $error-orange-one;
    background-color: $error-orange-tow;
  }

  .level-essential {
    @extend .level-advanced;
    border: 1px solid $error-green-one;
    background-color: $error-green-tow;
  }

  .image-cont {
    width: 150px;
    height: 100px;
    border-radius: 5px;
    margin: 10px 1%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      transition-duration: 0.5s;
    }

    img:hover {
      transform: scale(1.1);
    }
  }

  .info {
    width: 70%;
    height: auto;
    margin: 0px 10px;
    position: relative;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: $mobile) {
      width: 50%;
    }

    h4 {
      width: 100%;
      height: auto;
      margin: 5px 0%;
      color: $black;
    }

    .description {
      @extend h4;
    }

    .tag {
      width: auto;
      font-size: $x-small;
      color: $black;
      padding: 4px;
      border-radius: 4px;
      background-color: $white-for;
      margin: 3px;

      @media (max-width: $mobile) {
        font-size: $xx-small;
      }
    }

    .date {
      font-size: $small;
      color: $black;
      margin: 5px;
      width: 100%;
    }
  }

  #kabab {
    color: $black;
    width: 15px;
    height: 15px;
    padding: 5px;
    border-radius: 3px;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: $white-one;
    transition-duration: 0.5s;
  }

  #kabab:hover {
    background-color: $white-for;
  }

  .options-open {
    width: 100px;
    max-height: 100px;
    overflow: hidden;
    border-radius: 5px;
    backdrop-filter: blur(30px);
    border: 1px solid $inputs-border-black;
    position: absolute;
    right: 30px;
    top: 20px;
    transition-duration: 0.5s;
    opacity: 1;

    p {
      width: 90%;
      height: 40px;
      margin: 5%;
      display: flex;
      justify-content: start;
      align-items: center;
      padding: 0px 5px;
      border-radius: 5px;
      background-color: $white-one;
      color: $black;
      cursor: pointer;
      transition-duration: 0.5s;
      font-size: $small;

      svg {
        margin: 0px 5px;
      }
    }

    p:hover {
      background-color: $white-tow;
    }
  }

  .options-close {
    @extend .options-open;
    width: 0px;
    max-height: 0px;
    opacity: 0;
  }
}
// darck and light English style

// darck and light Arabic style
.lesson-darck-Arabic {
  direction: rtl;
  width: 98%;
  height: auto;
  background-color: $Navy-blue-tow;
  margin: 5px 1%;
  cursor: pointer;
  border-radius: 5px;
  transition-duration: 0.5s;
  position: relative;
  display: flex;
  flex-wrap: wrap;

  .level-advanced {
    padding: 4px;
    border-radius: 4px;
    color: $white;
    font-size: $x-small;
    border: 1px solid $error-red-one;
    background-color: $error-red-tow;
    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 5;

    @media (max-width: $mobile) {
      font-size: $xx-small;
    }
  }

  .level-professional {
    @extend .level-advanced;
    border: 1px solid $error-orange-one;
    background-color: $error-orange-tow;
  }

  .level-essential {
    @extend .level-advanced;
    border: 1px solid $error-green-one;
    background-color: $error-green-tow;
  }

  .image-cont {
    width: 150px;
    height: 100px;
    border-radius: 5px;
    margin: 10px 1%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      transition-duration: 0.5s;
    }

    img:hover {
      transform: scale(1.1);
    }
  }

  .info {
    width: 70%;
    height: auto;
    margin: 0px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;

    @media (max-width: $mobile) {
      width: 50%;
    }

    h4 {
      width: 100%;
      height: auto;
      margin: 5px 0%;
      color: $white;
    }

    .description {
      @extend h4;
    }

    .tag {
      width: auto;
      font-size: $x-small;
      color: $white;
      padding: 4px;
      border-radius: 4px;
      background-color: $Navy-blue-one;
      margin: 3px;

      @media (max-width: $mobile) {
        font-size: $xx-small;
      }
    }

    .date {
      font-size: $small;
      color: $white;
      margin: 5px;
      width: 100%;
    }
  }

  #kabab {
    color: $white;
    width: 15px;
    height: 15px;
    padding: 5px;
    border-radius: 3px;
    cursor: pointer;
    position: absolute;
    left: 10px;
    top: 10px;
    background-color: $Navy-blue-one;
    transition-duration: 0.5s;
  }

  #kabab:hover {
    background-color: $Navy-blue-for;
  }

  .options-open {
    width: 100px;
    max-height: 100px;
    overflow: hidden;
    border-radius: 5px;
    backdrop-filter: blur(30px);
    border: 1px solid $inputs-border-white;
    position: absolute;
    left: 30px;
    top: 20px;
    transition-duration: 0.5s;
    opacity: 1;

    p {
      width: 90%;
      height: 40px;
      margin: 5%;
      display: flex;
      justify-content: start;
      align-items: center;
      padding: 0px 5px;
      border-radius: 5px;
      background-color: $Navy-blue-tow;
      color: $white;
      cursor: pointer;
      transition-duration: 0.5s;
      font-size: $small;

      svg {
        margin: 0px 5px;
      }
    }

    p:hover {
      background-color: $Navy-blue-one;
    }
  }

  .options-close {
    @extend .options-open;
    width: 0px;
    max-height: 0px;
    opacity: 0;
  }
}

.lesson-light-Arabic {
  direction: rtl;
  width: 98%;
  height: auto;
  background-color: $white-tow;
  margin: 5px 1%;
  cursor: pointer;
  border-radius: 5px;
  transition-duration: 0.5s;
  position: relative;
  display: flex;
  flex-wrap: wrap;

  .level-advanced {
    padding: 4px;
    border-radius: 4px;
    font-size: $x-small;
    color: $black;
    border: 1px solid $error-red-one;
    background-color: $error-red-tow;
    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 5;

    @media (max-width: $mobile) {
      font-size: $xx-small;
    }
  }

  .level-professional {
    @extend .level-advanced;
    border: 1px solid $error-orange-one;
    background-color: $error-orange-tow;
  }

  .level-essential {
    @extend .level-advanced;
    border: 1px solid $error-green-one;
    background-color: $error-green-tow;
  }

  .image-cont {
    width: 90%;
    height: 180px;
    border-radius: 5px;
    margin: 10px 5%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      transition-duration: 0.5s;
    }

    img:hover {
      transform: scale(1.1);
    }
  }

  .image-cont {
    width: 150px;
    height: 100px;
    border-radius: 5px;
    margin: 10px 1%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      transition-duration: 0.5s;
    }

    img:hover {
      transform: scale(1.1);
    }
  }

  .info {
    width: 70%;
    height: auto;
    margin: 0px 10px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;

    @media (max-width: $mobile) {
      width: 50%;
    }

    h4 {
      width: 100%;
      height: auto;
      margin: 5px 0%;
      color: $black;
    }

    .description {
      @extend h4;
    }

    .tag {
      width: auto;
      font-size: $x-small;
      color: $black;
      padding: 4px;
      border-radius: 4px;
      background-color: $white-for;
      margin: 3px;

      @media (max-width: $mobile) {
        font-size: $xx-small;
      }
    }

    .date {
      font-size: $small;
      color: $black;
      margin: 5px;
      width: 100%;
    }
  }

  #kabab {
    color: $black;
    width: 15px;
    height: 15px;
    padding: 5px;
    border-radius: 3px;
    cursor: pointer;
    position: absolute;
    left: 10px;
    top: 10px;
    background-color: $white-one;
    transition-duration: 0.5s;
  }

  #kabab:hover {
    background-color: $white-for;
  }

  .options-open {
    width: 100px;
    max-height: 100px;
    overflow: hidden;
    border-radius: 5px;
    backdrop-filter: blur(30px);
    border: 1px solid $inputs-border-black;
    position: absolute;
    left: 30px;
    top: 20px;
    transition-duration: 0.5s;
    opacity: 1;

    p {
      width: 90%;
      height: 40px;
      margin: 5%;
      display: flex;
      justify-content: start;
      align-items: center;
      padding: 0px 5px;
      border-radius: 5px;
      background-color: $white-one;
      color: $black;
      cursor: pointer;
      transition-duration: 0.5s;
      font-size: $small;

      svg {
        margin: 0px 5px;
      }
    }

    p:hover {
      background-color: $white-tow;
    }
  }

  .options-close {
    @extend .options-open;
    width: 0px;
    max-height: 0px;
    opacity: 0;
  }
}
// darck and light English style
</style>
