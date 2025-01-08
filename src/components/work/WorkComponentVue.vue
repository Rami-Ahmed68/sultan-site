<template>
  <div
    @click="go_work"
    :class="`work-${this.$store.state.mood}-${this.$store.state.language}-${this.view_style}`"
  >
    <div class="image-cont">
      <img
        v-if="this.work_data.video_cover"
        :src="this.work_data.video_cover"
        alt=""
      />
    </div>

    <div class="info" v-if="this.work_data">
      <!-- title  -->
      <h4 v-if="this.work_data && this.$store.state.language == 'English'">
        {{
          this.work_data.english_title
            ? this.work_data.english_title.length > 20
              ? this.work_data.english_title.slice(0, 5) + "..."
              : this.work_data.english_title
            : ""
        }}
      </h4>

      <h4 v-if="this.work_data && this.$store.state.language == 'Arabic'">
        {{
          this.work_data.arabic_title
            ? this.work_data.arabic_title.length > 20
              ? this.work_data.arabic_title.slice(0, 5) + "..."
              : this.work_data.arabic_title
            : ""
        }}
      </h4>
      <!-- title  -->

      <!-- description  -->
      <p
        v-if="
          this.view_style == 'list' &&
          this.work_data &&
          this.$store.state.language == 'English'
        "
        class="description"
      >
        {{
          this.work_data.english_description
            ? this.work_data.english_description.length > 60
              ? this.work_data.english_description.slice(0, 30) + "..."
              : this.work_data.english_description
            : ""
        }}
      </p>

      <p
        v-if="
          this.view_style == 'list' &&
          this.work_data &&
          this.$store.state.language == 'Arabic'
        "
        class="description"
      >
        {{
          this.work_data.arabic_description
            ? this.work_data.arabic_description.length > 60
              ? this.work_data.arabic_description.slice(0, 30) + "..."
              : this.work_data.arabic_description
            : ""
        }}
      </p>
      <!-- description  -->

      <!-- create at  -->
      <p class="date">
        {{ this.work_data.created_at }}
      </p>
      <!-- create at  -->
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  props: {
    work_data: Object,
    view_style: String,
  },
  data() {
    return {
      name: "work-component",
      english_title: this.work_data
        ? this.work_data.english_title
        : "this.work_data.english_title",
    };
  },
  methods: {
    go_work() {
      router.push(`/work/${this.work_data._id}`);
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";

// darck and light English style
.work-darck-English-window-restore {
  direction: ltr;
  width: 300px;
  height: auto;
  background-color: $Navy-blue-tow;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition-duration: 0.5s;

  @media (max-width: $mobile) {
    width: 45%;
    height: auto;
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

    h4 {
      width: 90%;
      height: auto;
      margin: 10px 5%;
      color: $white;
    }

    .description {
      @extend h4;
    }

    .date {
      font-size: $small;
      color: $white;
      margin: 5px;
    }
  }
}

.work-light-English-window-restore {
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

    h4 {
      width: 90%;
      height: auto;
      margin: 10px 5%;
      color: $black;
    }

    .description {
      @extend h4;
    }

    .date {
      font-size: $small;
      color: $black;
      margin: 5px;
    }
  }
}
// darck and light English style

// darck and light English style
.work-darck-English-list {
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

    @media (max-width: $mobile) {
      width: 50%;
    }

    h4 {
      width: auto;
      height: auto;
      margin: 10px 5%;
      color: $white;
    }

    .description {
      @extend h4;
    }

    .date {
      font-size: $small;
      color: $white;
      margin: 5px;
    }
  }
}

.work-light-English-list {
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

    @media (max-width: $mobile) {
      width: 50%;
    }

    h4 {
      width: auto;
      height: auto;
      margin: 10px 5%;
      color: $black;
    }

    .description {
      @extend h4;
    }

    .date {
      font-size: $small;
      color: $black;
      margin: 5px;
    }
  }
}
// darck and light English style

// darck and light Arabic style
.work-darck-Arabic-window-restore {
  direction: rtl;
  width: 300px;
  height: auto;
  background-color: $Navy-blue-tow;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition-duration: 0.5s;

  @media (max-width: $mobile) {
    width: 45%;
    height: auto;
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

    h4 {
      width: 90%;
      height: auto;
      margin: 10px 5%;
      color: $white;
    }

    .description {
      @extend h4;
    }

    .date {
      font-size: $small;
      color: $white;
      margin: 5px;
    }
  }
}

.work-light-Arabic-window-restore {
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

    h4 {
      width: 90%;
      height: auto;
      margin: 10px 5%;
      color: $black;
    }

    .description {
      @extend h4;
    }

    .date {
      color: $black;
      font-size: $small;
      margin: 5px;
    }
  }
}
// darck and light Arabic style

// darck and light Arabic style
.work-darck-Arabic-list {
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

    @media (max-width: $mobile) {
      width: 50%;
    }

    h4 {
      width: auto;
      height: auto;
      margin: 10px 5%;
      color: $white;
    }

    .description {
      @extend h4;
    }

    .date {
      font-size: $small;
      color: $white;
      margin: 5px;
    }
  }
}

.work-light-Arabic-list {
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

    @media (max-width: $mobile) {
      width: 50%;
    }

    h4 {
      width: auto;
      height: auto;
      margin: 10px 5%;
      color: $black;
    }

    .description {
      @extend h4;
    }

    .date {
      font-size: $small;
      color: $black;
      margin: 5px;
    }
  }
}
// darck and light English style
</style>
