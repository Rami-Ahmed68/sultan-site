<template>
  <div
    :class="`lessosn-filter-cont-${this.$store.state.mood}-${this.$store.state.language}-${this.$store.state.lessons_filter_status}`"
  >
    <div class="header">
      <h2>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.lessosn_filter_component.title
            : this.$store.state.Arabic.lessosn_filter_component.title
        }}
      </h2>

      <icon
        icon="xmark"
        @click="this.$store.commit('change_lessons__filter_component_status')"
      />
    </div>

    <!-- tags sectio  -->
    <div class="tags-filtering-section">
      <h5>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.lessosn_filter_component.tags_section
            : this.$store.state.Arabic.lessosn_filter_component.tags_section
        }}
      </h5>
      <p
        v-for="(tag, index) in this.$store.state.tags.slice(0, 3)"
        :key="index"
        :class="
          !this.selected_tags.includes(tag.english_title)
            ? 'un_selected'
            : 'selected'
        "
        @click="select_tag(tag.english_title)"
      >
        {{
          this.$store.state.language == "English"
            ? tag.english_title
            : tag.arabic_title
        }}
      </p>
    </div>
    <!-- tags sectio  -->

    <!-- program sectio  -->
    <div class="program-filtering-section">
      <h5>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.lessosn_filter_component.program_section
            : this.$store.state.Arabic.lessosn_filter_component.program_section
        }}
      </h5>

      <p
        v-for="(program, index) in this.$store.state.programs"
        :key="index"
        :class="
          this.program_name == program.english_title
            ? 'selected'
            : 'un_selected'
        "
        @click="select_program(program.english_title)"
      >
        {{
          this.$store.state.language == "English"
            ? program.english_title
            : program.arabic_title
        }}
      </p>
    </div>
    <!-- program sectio  -->

    <!-- level sectio  -->
    <div class="level-filtering-section">
      <h5>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.lessosn_filter_component.level_section
            : this.$store.state.Arabic.lessosn_filter_component.level_section
        }}
      </h5>

      <p
        v-for="(level, index) in this.$store.state.levels"
        :key="index"
        :class="this.level == level.english_title ? 'selected' : 'un_selected'"
        @click="select_level(level.english_title)"
      >
        {{
          this.$store.state.language == "English"
            ? level.english_title
            : level.arabic_title
        }}
      </p>
    </div>
    <!-- level sectio  -->

    <button @click="get_filterd_lessosn">
      {{
        this.$store.state.language == "English"
          ? this.$store.state.English.lessosn_filter_component.button
          : this.$store.state.Arabic.lessosn_filter_component.button
      }}
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Filter-component",
  data() {
    return {
      // selected tags array
      selected_tags: [],

      // level var
      level: "",

      // lessosn's program name
      program_name: "",
    };
  },
  methods: {
    // select the tags method
    select_tag(tag_title) {
      // check if the selected tags ahs the clicked tag
      !this.selected_tags.includes(tag_title)
        ? // push the tag
          this.selected_tags.push(tag_title)
        : // filter the selected tags and return the tags
          (this.selected_tags = this.selected_tags.filter((tag) => {
            return tag != tag_title;
          }));
    },

    // select the program method
    select_program(program_title) {
      // set the selected program name to program name var
      this.program_name =
        this.program_name == program_title ? "" : program_title;
    },

    // select the level method
    select_level(level_title) {
      // set the selected level name to level name var
      this.level = this.level == level_title ? "" : level_title;
    },

    async get_filterd_lessosn() {
      // check if the selected tags array in not empty
      if (
        this.selected_tags.length > 0 ||
        this.program_name != "" ||
        this.level != ""
      ) {
        // to start the loading animation
        this.$store.state.loading_status = "open";

        await axios
          .get(this.$store.state.APIS.lessons.get_all, {
            params: {
              tags: JSON.stringify(this.selected_tags),
              program: this.program_name,
              level: this.level,
            },
          })
          .then((response) => {
            // to stop the loading animation
            this.$store.state.loading_status = "close";

            // check if the works's data in response is empty or not to open the no result image
            if (response.data.lessons_data.length == 0) {
              this.$store.state.lessons_not_found_message_status = "open";
            }

            // set the works from response to works array in store
            this.$store.state.lessons_data = response.data.lessons_data;

            // close the filter form
            this.$store.commit("change_lessons__filter_component_status");
          })
          .catch((error) => {
            // to stop the loading animation
            this.$store.state.loading_status = "close";

            // close the filter form
            this.$store.commit("change_lessons_filter_component_status");

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
      } else {
        // set the error to the error_object in store
        this.$store.state.error_object = {
          title: {
            english: "😓Error😓",
            arabic: "😓خطأ😓",
          },
          type: "Error",
          messages: {
            english:
              "Sorry, you should select any tag | program name | level to filter ...",
            arabic: "... عذرا يجب ان تختار اي تاغ او برنامج او مستوى للفلترة",
          },
          status: 403,
        };

        // to open the message form
        this.$store.commit("OpenOrCloseMessageForm");

        // call to change the message form status
        this.$store.commit("ChangeMEssageFormStatus");
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";

// darck and light English Style
.lessosn-filter-cont-darck-English-open {
  direction: ltr;
  width: 70%;
  height: auto;
  backdrop-filter: blur(70px);
  border-radius: 5px;
  margin: auto;
  position: fixed;
  top: 20%;
  left: 15%;
  z-index: 7;
  padding: 5px;
  box-shadow: 0 0 5px $black;
  transition-duration: 0.5s;
  opacity: 1;

  @media (max-width: $mobile) {
    width: 90%;
    left: 5%;
  }

  .header {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid;
    border-color: transparent transparent $white transparent;
    color: $white;

    svg {
      cursor: pointer;
    }
  }

  .tags-filtering-section {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    margin-top: 10px;

    h5 {
      width: 98%;
      height: auto;
      margin: 5px 1%;
      color: $white;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
    }

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

  .program-filtering-section {
    @extend .tags-filtering-section;
  }

  .level-filtering-section {
    @extend .tags-filtering-section;
  }

  button {
    width: 100%;
    height: 40px;
    border: none;
    color: $white;
    background: linear-gradient(to top, $gold-five, $gold-tow, $gold-five);
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
  }
}

.lessosn-filter-cont-darck-English-close {
  @extend .lessosn-filter-cont-darck-English-open;
  top: -100%;
  opacity: 0;
}

.lessosn-filter-cont-light-English-open {
  direction: ltr;
  width: 70%;
  height: auto;
  backdrop-filter: blur(70px);
  border-radius: 5px;
  margin: auto;
  position: fixed;
  top: 20%;
  left: 15%;
  padding: 5px;
  box-shadow: 0 0 5px $black;
  transition-duration: 0.5s;
  opacity: 1;

  @media (max-width: $mobile) {
    width: 90%;
    left: 5%;
  }

  .header {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid;
    border-color: transparent transparent $black transparent;
    color: $black;

    svg {
      cursor: pointer;
    }
  }

  .tags-filtering-section {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    margin-top: 10px;

    h5 {
      width: 98%;
      height: auto;
      margin: 5px 1%;
      color: $black;
      border: 1px solid;
      border-color: transparent transparent $black transparent;
    }

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

  .program-filtering-section {
    @extend .tags-filtering-section;
  }

  .level-filtering-section {
    @extend .tags-filtering-section;
  }

  button {
    width: 100%;
    height: 40px;
    border: none;
    color: $white;
    background: linear-gradient(to top, $gold-five, $gold-tow, $gold-five);
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
  }
}

.lessosn-filter-cont-light-English-close {
  @extend .lessosn-filter-cont-light-English-open;
  top: -100%;
  opacity: 0;
}
// darck and light English Style

// darck and light Arabic Style
.lessosn-filter-cont-darck-Arabic-open {
  direction: rtl;
  width: 70%;
  height: auto;
  backdrop-filter: blur(70px);
  border-radius: 5px;
  margin: auto;
  position: fixed;
  top: 20%;
  left: 15%;
  padding: 5px;
  box-shadow: 0 0 5px $black;
  transition-duration: 0.5s;
  opacity: 1;

  @media (max-width: $mobile) {
    width: 90%;
    left: 5%;
  }

  .header {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid;
    border-color: transparent transparent $white transparent;
    color: $white;

    svg {
      cursor: pointer;
    }
  }

  .tags-filtering-section {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    margin-top: 10px;

    h5 {
      width: 98%;
      height: auto;
      margin: 5px 1%;
      color: $white;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
    }

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

  .program-filtering-section {
    @extend .tags-filtering-section;
  }

  .level-filtering-section {
    @extend .tags-filtering-section;
  }

  button {
    width: 100%;
    height: 40px;
    border: none;
    color: $white;
    background: linear-gradient(to top, $gold-five, $gold-tow, $gold-five);
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
  }
}

.lessosn-filter-cont-darck-Arabic-close {
  @extend .lessosn-filter-cont-darck-Arabic-open;
  top: -100%;
  opacity: 0;
}

.lessosn-filter-cont-light-Arabic-open {
  direction: rtl;
  width: 70%;
  height: auto;
  backdrop-filter: blur(70px);
  border-radius: 5px;
  margin: auto;
  position: fixed;
  top: 20%;
  left: 15%;
  padding: 5px;
  box-shadow: 0 0 5px $black;
  transition-duration: 0.5s;
  opacity: 1;

  @media (max-width: $mobile) {
    width: 90%;
    left: 5%;
  }

  .header {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid;
    border-color: transparent transparent $black transparent;
    color: $black;

    svg {
      cursor: pointer;
    }
  }

  .tags-filtering-section {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    margin-top: 10px;

    h5 {
      width: 98%;
      height: auto;
      margin: 5px 1%;
      color: $black;
      border: 1px solid;
      border-color: transparent transparent $black transparent;
    }

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

  .program-filtering-section {
    @extend .tags-filtering-section;
  }

  .level-filtering-section {
    @extend .tags-filtering-section;
  }

  button {
    width: 100%;
    height: 40px;
    border: none;
    color: $white;
    background: linear-gradient(to top, $gold-five, $gold-tow, $gold-five);
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
  }
}

.lessosn-filter-cont-light-Arabic-close {
  @extend .lessosn-filter-cont-light-Arabic-open;
  top: -100%;
  opacity: 0;
}
// darck and light Arabic Style
</style>
