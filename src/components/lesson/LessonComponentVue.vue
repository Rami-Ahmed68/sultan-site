<template>
  <div
    @click="go_lesson"
    :class="`lesson-${this.$store.state.mood}-${this.$store.state.language}-${this.view_style}`"
  >
    <p :class="`level-${this.lesson_data.level}`">
      {{ this.lesson_data.level }}
    </p>

    <div class="image-cont">
      <img
        v-if="
          this.lesson_data.video_cover && this.lesson_data.video_cover != ''
        "
        :src="this.lesson_data.video_cover"
        alt=""
      />
    </div>

    <div class="info" v-if="this.lesson_data">
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
        v-if="
          this.view_style == 'list' &&
          this.lesson_data &&
          this.$store.state.language == 'English'
        "
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
        v-if="
          this.view_style == 'list' &&
          this.lesson_data &&
          this.$store.state.language == 'Arabic'
        "
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

      <p class="tag" v-for="(tag, index) in this.lesson_data.tags" :key="index">
        {{ tag }}
      </p>

      <!-- create at  -->
      <p class="date">
        {{ this.lesson_data.created_at }}
      </p>
      <!-- create at  -->
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  props: {
    lesson_data: Object,
    view_style: String,
  },
  data() {
    return {
      name: "lesson-component",
      english_title: this.lesson_data
        ? this.lesson_data.english_title
        : "this.lesson_data.english_title",
    };
  },
  methods: {
    go_lesson() {
      router.push(`/lesson/${this.lesson_data._id}`);
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";

// darck and light English style
.lesson-darck-English-window-restore {
  direction: ltr;
  width: 300px;
  height: auto;
  background-color: $Navy-blue-tow;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition-duration: 0.5s;
  position: relative;

  @media (max-width: $mobile) {
    width: 45%;
    height: auto;
  }

  .level-advanced {
    padding: 4px;
    border-radius: 4px;
    color: $white;
    border: 1px solid $error-red-one;
    background-color: $error-red-tow;
    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 5;

    @media (max-width: $mobile) {
      font-size: $x-small;
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

    @media (max-width: $mobile) {
      height: 100px;
    }

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
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    flex-wrap: wrap;

    h4 {
      width: 90%;
      height: auto;
      margin: 10px 5%;
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
    }

    .date {
      font-size: $small;
      color: $white;
      margin: 5px;
      width: 100%;
    }
  }
}

.lesson-light-English-window-restore {
  direction: ltr;
  width: 300px;
  height: auto;
  background-color: $white-tow;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition-duration: 0.5s;
  position: relative;

  @media (max-width: $mobile) {
    width: 45%;
    height: auto;
  }

  .level-advanced {
    padding: 4px;
    border-radius: 4px;
    color: $black;
    border: 1px solid $error-red-one;
    background-color: $error-red-tow;
    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 5;

    @media (max-width: $mobile) {
      font-size: $x-small;
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

    @media (max-width: $mobile) {
      height: 100px;
    }

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
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    flex-wrap: wrap;

    h4 {
      width: 90%;
      height: auto;
      margin: 10px 5%;
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
    }

    .date {
      font-size: $small;
      color: $black;
      margin: 5px;
      width: 100%;
    }
  }
}
// darck and light English style

// darck and light English style
.lesson-darck-English-list {
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
    border: 1px solid $error-red-one;
    background-color: $error-red-tow;
    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 5;

    @media (max-width: $mobile) {
      font-size: $x-small;
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
    }

    .date {
      font-size: $small;
      color: $white;
      margin: 5px;
      width: 100%;
    }
  }
}

.lesson-light-English-list {
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
    border: 1px solid $error-red-one;
    background-color: $error-red-tow;
    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 5;

    @media (max-width: $mobile) {
      font-size: $x-small;
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

  // .image-cont {
  //   width: 90%;
  //   height: 180px;
  //   border-radius: 5px;
  //   margin: 10px 5%;
  //   overflow: hidden;

  //   img {
  //     width: 100%;
  //     height: 100%;
  //     transition-duration: 0.5s;
  //   }

  //   img:hover {
  //     transform: scale(1.1);
  //   }
  // }

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
    }

    .date {
      font-size: $small;
      color: $black;
      margin: 5px;
      width: 100%;
    }
  }
}
// darck and light English style

// darck and light Arabic style
.lesson-darck-Arabic-window-restore {
  direction: rtl;
  width: 300px;
  height: auto;
  background-color: $Navy-blue-tow;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition-duration: 0.5s;
  position: relative;

  @media (max-width: $mobile) {
    width: 45%;
    height: auto;
  }

  .level-advanced {
    padding: 4px;
    border-radius: 4px;
    color: $white;
    border: 1px solid $error-red-one;
    background-color: $error-red-tow;
    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 5;

    @media (max-width: $mobile) {
      font-size: $x-small;
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

    @media (max-width: $mobile) {
      height: 100px;
    }

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
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    flex-wrap: wrap;

    h4 {
      width: 90%;
      height: auto;
      margin: 10px 5%;
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
    }

    .date {
      font-size: $small;
      color: $white;
      margin: 5px;
      width: 100%;
    }
  }
}

.lesson-light-Arabic-window-restore {
  direction: rtl;
  width: 300px;
  height: auto;
  background-color: $white-tow;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition-duration: 0.5s;
  position: relative;

  @media (max-width: $mobile) {
    width: 45%;
    height: auto;
  }

  .level-advanced {
    padding: 4px;
    border-radius: 4px;
    color: $black;
    border: 1px solid $error-red-one;
    background-color: $error-red-tow;
    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 5;

    @media (max-width: $mobile) {
      font-size: $x-small;
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

    @media (max-width: $mobile) {
      height: 100px;
    }

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
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    flex-wrap: wrap;

    h4 {
      width: 90%;
      height: auto;
      margin: 10px 5%;
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
    }

    .date {
      color: $black;
      font-size: $small;
      margin: 5px;
      width: 100%;
    }
  }
}
// darck and light Arabic style

// darck and light Arabic style
.lesson-darck-Arabic-list {
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
    border: 1px solid $error-red-one;
    background-color: $error-red-tow;
    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 5;

    @media (max-width: $mobile) {
      font-size: $x-small;
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
    }

    .date {
      font-size: $small;
      color: $white;
      margin: 5px;
      width: 100%;
    }
  }
}

.lesson-light-Arabic-list {
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
    color: $black;
    border: 1px solid $error-red-one;
    background-color: $error-red-tow;
    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 5;

    @media (max-width: $mobile) {
      font-size: $x-small;
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
    }

    .date {
      font-size: $small;
      color: $black;
      margin: 5px;
      width: 100%;
    }
  }
}
// darck and light English style
</style>
