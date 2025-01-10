<template>
  <div
    :class="`works-filter-cont-${this.$store.state.mood}-${this.$store.state.language}-${this.$store.state.works_filter_status}`"
  >
    <div class="header">
      <h2>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.works_filter_component.title
            : this.$store.state.Arabic.works_filter_component.title
        }}
      </h2>

      <icon
        icon="xmark"
        @click="this.$store.commit('change_works__filter_component_status')"
      />
    </div>

    <div class="filtering-section">
      <p
        v-for="(tag, index) in this.$store.state.tags"
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

    <button @click="get_filterd_works">
      {{
        this.$store.state.language == "English"
          ? this.$store.state.English.works_filter_component.button
          : this.$store.state.Arabic.works_filter_component.button
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
      selected_tags: [],
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

    async get_filterd_works() {
      // check if the selected tags array in not empty
      if (this.selected_tags.length > 0) {
        // to start the loading animation
        this.$store.state.loading_status = "open";

        await axios
          .get(this.$store.state.APIS.works.get_all, {
            params: {
              tags: JSON.stringify(this.selected_tags),
            },
          })
          .then((response) => {
            // to stop the loading animation
            this.$store.state.loading_status = "close";

            // check if the works's data in response is empty or not to open the no result image
            if (response.data.works_data.length == 0) {
              this.$store.state.works_not_found_message_status = "open";
            }

            // set the works from response to works array in store
            this.$store.state.works = response.data.works_data;

            // close the filter form
            this.$store.commit("change_works__filter_component_status");
          })
          .catch((error) => {
            // to stop the loading animation
            this.$store.state.loading_status = "close";

            // close the filter form
            this.$store.commit("change_works__filter_component_status");

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
            english: "Sorry, you should select any tag to filter ...",
            arabic: "... عذرا يجب ان تختار اي تاغ للفلترة",
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
.works-filter-cont-darck-English-open {
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
    border-color: transparent transparent $white transparent;
    color: $white;

    svg {
      cursor: pointer;
    }
  }

  .filtering-section {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    margin-top: 10px;

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

.works-filter-cont-darck-English-close {
  @extend .works-filter-cont-darck-English-open;
  top: -20%;
  opacity: 0;
}

.works-filter-cont-light-English-open {
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

  .filtering-section {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    margin-top: 10px;

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

.works-filter-cont-light-English-close {
  @extend .works-filter-cont-light-English-open;
  top: -20%;
  opacity: 0;
}
// darck and light English Style

// darck and light Arabic Style
.works-filter-cont-darck-Arabic-open {
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

  .filtering-section {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    margin-top: 10px;

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

.works-filter-cont-darck-Arabic-close {
  @extend .works-filter-cont-darck-Arabic-open;
  top: -20%;
  opacity: 0;
}

.works-filter-cont-light-Arabic-open {
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

  .filtering-section {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    margin-top: 10px;

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

.works-filter-cont-light-Arabic-close {
  @extend .works-filter-cont-light-Arabic-open;
  top: -20%;
  opacity: 0;
}
// darck and light Arabic Style
</style>
