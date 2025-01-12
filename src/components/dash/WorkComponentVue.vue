<template>
  <div
    :class="`dash-work-${this.$store.state.mood}-${this.$store.state.language}`"
  >
    <div class="image-cont" @click="go_work">
      <img
        v-if="this.work_data.video_cover"
        :src="this.work_data.video_cover"
        alt=""
      />
    </div>

    <div class="info" v-if="this.work_data" @click="go_work">
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

      <p class="tag" v-for="(tag, index) in this.work_data.tags" :key="index">
        {{ tag }}
      </p>

      <!-- create at  -->
      <p class="date">
        {{ this.work_data.created_at }}
      </p>
      <!-- create at  -->
    </div>

    <icon icon="ellipsis-vertical" id="kabab" @click="change_options_type" />

    <div :class="`options-${this.options_type}`">
      <p @click="this.delete_form">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_work_component.options.delete
            : this.$store.state.Arabic.dash_work_component.options.delete
        }}
        <icon icon="trash" />
      </p>
      <p @click="this.move_to_update">
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_work_component.options.update
            : this.$store.state.Arabic.dash_work_component.options.update
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
    work_data: Object,
    view_style: String,
  },
  data() {
    return {
      name: "dash-work-component",
      english_title: this.work_data
        ? this.work_data.english_title
        : "this.work_data.english_title",

      // options_type
      options_type: "close",
    };
  },
  methods: {
    go_work() {
      router.push(`/work/${this.work_data._id}`);
    },

    // change options type
    change_options_type() {
      this.options_type = this.options_type == "close" ? "open" : "close";
    },

    // open dleete form
    delete_form() {
      // ste the work id into store
      this.$store.state.work_id_for_delete = this.work_data._id;

      // clall to change_options_type method
      this.change_options_type();

      // change the delete work form status in stor to open the delete work form
      this.$store.commit("OpenOrCloseDeleteWorkForm");
    },

    // move to update method
    move_to_update() {
      router.push(`/dashboard/work/update${this.work_data._id}`);
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";

// darck and light English style
.dash-work-darck-English {
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
    background-color: $Navy-blue-tow;
    transition-duration: 0.5s;
  }

  #kabab:hover {
    background-color: $Navy-blue-one;
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

.dash-work-light-English {
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
    background-color: $white-tow;
    transition-duration: 0.5s;
  }

  #kabab:hover {
    background-color: $white-one;
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
.dash-work-darck-Arabic {
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
    background-color: $Navy-blue-tow;
    transition-duration: 0.5s;
  }

  #kabab:hover {
    background-color: $Navy-blue-one;
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

.dash-work-light-Arabic {
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
    background-color: $white-tow;
    transition-duration: 0.5s;
  }

  #kabab:hover {
    background-color: $white-one;
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
