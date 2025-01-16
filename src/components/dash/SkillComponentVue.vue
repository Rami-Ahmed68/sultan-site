<template>
  <div
    :class="`skill-cont-${this.$store.state.mood}-${this.$store.state.language}`"
  >
    <img :src="this.skill_data.icon" alt="skill icon" @click="get_skill" />

    <div class="info" @click="get_skill">
      <h2 v-if="this.skill_data && this.$store.state.language == 'English'">
        {{
          this.skill_data.english_title
            ? this.skill_data.english_title.length > 20
              ? this.skill_data.english_title.slice(0, 10) + "..."
              : this.skill_data.english_title
            : ""
        }}
      </h2>

      <h2 v-if="this.skill_data && this.$store.state.language == 'Arabic'">
        {{
          this.skill_data.arabic_title
            ? this.skill_data.arabic_title.length > 20
              ? this.skill_data.arabic_title.slice(0, 10) + "..."
              : this.skill_data.arabic_title
            : ""
        }}
      </h2>

      <p
        v-if="this.skill_data && this.$store.state.language == 'English'"
        class="description"
      >
        {{
          this.skill_data.english_description
            ? this.skill_data.english_description.length > 200
              ? this.skill_data.english_description.slice(0, 150) + "..."
              : this.skill_data.english_description
            : ""
        }}
      </p>

      <p
        v-if="this.skill_data && this.$store.state.language == 'Arabic'"
        class="description"
      >
        {{
          this.skill_data.arabic_description
            ? this.skill_data.arabic_description.length > 200
              ? this.skill_data.arabic_description.slice(0, 150) + "..."
              : this.skill_data.arabic_description
            : ""
        }}
      </p>
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
export default {
  name: "skill-component",
  data() {
    return {
      // options_type
      options_type: "close",
    };
  },
  props: {
    skill_data: Object,
  },
  methods: {
    get_skill() {
      this.$router.push(`/skill/${this.skill_data._id}`);
    },

    // change options type
    change_options_type() {
      this.options_type = this.options_type == "close" ? "open" : "close";
    },

    // open delete form
    delete_form() {
      // ste the skill id into store
      this.$store.state.skill_id_for_delete = this.skill_data._id;

      // clall to change_options_type method
      this.change_options_type();

      // change the delete skill form status in stor to open the delete skill form
      this.$store.commit("OpenOrCloseDeleteSkillForm");
    },

    // move to update method
    move_to_update() {
      this.$router.push(`/dashboard/skill/update${this.skill_data._id}`);
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";
// darck and light English style
.skill-cont-darck-English {
  direction: ltr;
  cursor: pointer;
  width: 100%;
  height: auto;
  background-color: $Navy-blue-tow;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 5px;
  display: flex;
  transition-duration: 0.5s;
  position: relative;

  img {
    width: 150px;
    height: 150px;
    border-radius: 5px;

    @media (max-width: $mobile) {
      width: 100px;
      height: 100px;
    }
  }

  .info {
    width: auto;
    height: auto;
    margin: 0px 5px;
    padding: 5px;
    color: $white;

    @media (min-width: $mobile) {
      width: 80%;
    }

    h2 {
      width: 100%;
      height: auto;
    }

    p {
      width: 100%;
      height: auto;
      font-size: $small;
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

.skill-cont-darck-English:hover {
  background-color: $Navy-blue-one;
}

.skill-cont-light-English {
  direction: ltr;
  cursor: pointer;
  width: 100%;
  height: auto;
  background-color: $white-tow;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 5px;
  display: flex;
  transition-duration: 0.5s;
  position: relative;

  img {
    width: 150px;
    height: 150px;
    border-radius: 5px;

    @media (max-width: $mobile) {
      width: 100px;
      height: 100px;
    }
  }

  .info {
    width: auto;
    height: auto;
    margin: 0px 5px;
    padding: 5px;
    color: $black;

    @media (min-width: $mobile) {
      width: 80%;
    }

    h2 {
      width: 100%;
      height: auto;
    }

    p {
      width: 100%;
      height: auto;
      font-size: $small;
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

.skill-cont-light-English:hover {
  background-color: $white-five;
}
// darck and light English style

// darck and light Arabic style
.skill-cont-darck-Arabic {
  direction: rtl;
  cursor: pointer;
  width: 100%;
  height: auto;
  background-color: $Navy-blue-tow;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 5px;
  display: flex;
  transition-duration: 0.5s;
  position: relative;

  img {
    width: 150px;
    height: 150px;
    border-radius: 5px;

    @media (max-width: $mobile) {
      width: 100px;
      height: 100px;
    }
  }

  .info {
    width: auto;
    height: auto;
    margin: 0px 5px;
    padding: 5px;
    color: $white;

    @media (min-width: $mobile) {
      width: 80%;
    }

    h2 {
      width: 100%;
      height: auto;
    }

    p {
      width: 100%;
      height: auto;
      font-size: $small;
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

.skill-cont-darck-Arabic:hover {
  background-color: $Navy-blue-one;
}

.skill-cont-light-Arabic {
  direction: rtl;
  cursor: pointer;
  width: 100%;
  height: auto;
  background-color: $white-tow;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 5px;
  display: flex;
  transition-duration: 0.5s;
  position: relative;

  img {
    width: 150px;
    height: 150px;
    border-radius: 5px;

    @media (max-width: $mobile) {
      width: 100px;
      height: 100px;
    }
  }

  .info {
    width: auto;
    height: auto;
    margin: 0px 5px;
    padding: 5px;
    color: $black;

    @media (min-width: $mobile) {
      width: 80%;
    }

    h2 {
      width: 100%;
      height: auto;
    }

    p {
      width: 100%;
      height: auto;
      font-size: $small;
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

.skill-cont-light-Arabic:hover {
  background-color: $white-five;
}
// darck and light Arabic style
</style>
