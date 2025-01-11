<template>
  <div
    :class="`skill-cont-${this.$store.state.mood}-${this.$store.state.language}`"
    @click="get_skill"
  >
    <img :src="this.skill_data.icon" alt="skill icon" />

    <div class="info">
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
  </div>
</template>

<script>
export default {
  name: "skill-component",
  data() {
    return {};
  },
  props: {
    skill_data: Object,
  },
  methods: {
    get_skill() {
      this.$router.push(`/skill/${this.skill_data._id}`);
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
}

.skill-cont-light-Arabic:hover {
  background-color: $white-five;
}
// darck and light Arabic style
</style>
