<template>
  <div
    :class="`works-${this.$store.state.mood}-${this.$store.state.language}-${this.cont_status}`"
  >
    <div class="cont">
      <div class="header">
        <h1>
          {{
            this.$store.state.language == "English"
              ? this.$store.state.English.works_page.title
              : this.$store.state.Arabic.works_page.title
          }}
        </h1>
        <icon :icon="`${this.view_style}`" @click="ChangeIconStyle" />
        <icon
          icon="filter"
          @click="this.$store.commit('change_works__filter_component_status')"
        />
      </div>

      <WorkComponentVue
        v-for="(work, index) in this.$store.state.works"
        :work_data="work"
        :key="index"
        :view_style="this.view_style"
      />

      <!-- not found vcto image -->
      <img
        v-if="this.$store.state.works_not_found_message_statu == 'open'"
        src="../assets/notfound.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import WorkComponentVue from "@/components/work/WorkComponentVue.vue";

export default {
  data() {
    return {
      name: "works-page",
      // conatiner status
      cont_status: "close",
      // limit of the work's documents
      limit: 5,
      // page of the works documenst
      page: 1,
      // view_style
      view_style: "window-restore",
    };
  },
  components: {
    WorkComponentVue,
  },
  mounted() {
    // call to the handele scroll method on window scroll
    window.addEventListener("scroll", this.handleScroll);

    // call to get works method
    this.get_works();
  },
  methods: {
    // get works method
    async get_works() {
      // check if the works arry in store is empty or not
      if (this.$store.state.works.length == 0) {
        // to open the loading animation
        this.$store.state.loading_status = "open";
      }

      await axios
        .get(
          `${this.$store.state.APIS.works.get_all}?page=${this.page}&limit=${this.limit}`,
          {
            tag: JSON.stringify([this.$route.params.tag_name]),
          }
        )
        .then((response) => {
          // to open the cont slowly
          this.cont_status = "open";

          // to close the loading animation
          this.$store.state.loading_status = "close";

          // close the no results image message
          this.$store.state.works_not_found_message_statu = "close";

          //check if the works arry in store is empty or not
          if (this.$store.state.works.length == 0) {
            // ste the geted works to works arry in store
            this.$store.state.works = response.data.works_data;
          } else {
            // ste the geted works with the old works in works arry in stor
            this.$store.state.works = [
              ...this.$store.state.works,
              ...response.data.works_data,
            ];
          }
        })
        .catch((error) => {
          // to close the loading animation
          this.$store.state.loading_status = "close";

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

    // change view style method
    ChangeIconStyle() {
      this.view_style = this.view_style == "list" ? "window-restore" : "list";
    },

    async handleScroll() {
      // check if the window height is donw
      if (
        window.scrollY + window.innerHeight >=
        document.body.scrollHeight - 600
      ) {
        // to change page
        this.page += 1;
        // call the get_works method
        await this.get_works();
      }
    },
  },
};
</script>

<style lang="scss">
@import ".../../../sass/varibels";
// darck and light English style
.works-darck-English-open {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  padding: 15% 0px;
  transition-duration: 0.5s;

  .cont {
    width: 70%;
    min-height: 100vh;
    margin: auto;
    transition-duration: 0.5s;
    opacity: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    position: relative;
    padding-top: 10%;

    @media (max-width: $mobile) {
      width: 90%;
      padding-top: 20%;
    }

    .header {
      width: 100%;
      height: auto;
      margin: 10px 0px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
      position: absolute;
      top: 0%;

      h1 {
        color: $white;
        width: 90%;

        @media (max-width: $mobile) {
          width: 70%;
        }
      }

      svg {
        padding: 8px;
        border-radius: 5px;
        font-size: $small;
        cursor: pointer;
        color: $white;
        border: 1px solid $white;
      }
    }

    img {
      width: 100%;
      height: auto;
    }
  }
}

.works-darck-English-close {
  @extend .works-darck-English-open;
  padding: 30% 0px;

  .cont {
    opacity: 0;
  }
}

.works-light-English-open {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  background-color: $white-one;
  padding: 15% 0px;
  transition-duration: 0.5s;

  .cont {
    width: 70%;
    min-height: 100vh;
    margin: auto;
    transition-duration: 0.5s;
    opacity: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    position: relative;
    padding-top: 10%;

    @media (max-width: $mobile) {
      width: 90%;
      padding-top: 20%;
    }

    .header {
      width: 100%;
      height: auto;
      margin: 10px 0px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      border: 1px solid;
      border-color: transparent transparent $black transparent;
      position: absolute;
      top: 0%;

      h1 {
        color: $black;
        width: 90%;

        @media (max-width: $mobile) {
          width: 70%;
        }
      }

      svg {
        padding: 8px;
        border-radius: 5px;
        font-size: $small;
        cursor: pointer;
        color: $black;
        border: 1px solid $black;
      }
    }

    img {
      width: 100%;
      height: auto;
    }
  }
}

.works-light-English-close {
  @extend .works-light-English-open;
  padding: 30% 0px;

  .cont {
    opacity: 0;
  }
}
// darck and light English style

// darck and light Arabic style
.works-darck-Arabic-open {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  padding: 15% 0px;
  transition-duration: 0.5s;

  .cont {
    width: 70%;
    min-height: 100vh;
    margin: auto;
    transition-duration: 0.5s;
    opacity: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    position: relative;
    padding-top: 10%;

    @media (max-width: $mobile) {
      width: 90%;
      padding-top: 20%;
    }

    .header {
      width: 100%;
      height: auto;
      margin: 10px 0px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
      position: absolute;
      top: 0%;
      h1 {
        @media (max-width: $mobile) {
          width: 70%;
        }
        color: $white;
        width: 90%;
      }

      svg {
        padding: 8px;
        border-radius: 5px;
        font-size: $small;
        cursor: pointer;
        color: $white;
        border: 1px solid $white;
      }
    }

    img {
      width: 100%;
      height: auto;
    }
  }
}

.works-darck-Arabic-close {
  @extend .works-darck-Arabic-open;
  padding: 30% 0px;

  .cont {
    opacity: 0;
  }
}

.works-light-Arabic-open {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  background-color: $white-one;
  padding: 15% 0px;
  transition-duration: 0.5s;

  .cont {
    width: 70%;
    min-height: 100vh;
    margin: auto;
    transition-duration: 0.5s;
    opacity: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    position: relative;
    padding-top: 10%;

    @media (max-width: $mobile) {
      width: 90%;
      padding-top: 20%;
    }

    .header {
      width: 100%;
      height: auto;
      margin: 10px 0px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      border: 1px solid;
      border-color: transparent transparent $black transparent;
      position: absolute;
      top: 0%;

      h1 {
        @media (max-width: $mobile) {
          width: 70%;
        }

        width: 90%;
        color: $black;
      }

      svg {
        padding: 8px;
        border-radius: 5px;
        font-size: $small;
        cursor: pointer;
        color: $black;
        border: 1px solid $black;
      }
    }

    img {
      width: 100%;
      height: auto;
    }
  }
}

.works-light-Arabic-close {
  @extend .works-light-Arabic-open;
  padding: 30% 0px;

  .cont {
    opacity: 0;
  }
}
// darck and light English style
</style>
