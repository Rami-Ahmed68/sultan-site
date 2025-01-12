<template>
  <div
    :class="`works-page-${this.$store.state.mood}-${this.$store.state.language}-${this.page_status}`"
  >
    <div class="cont">
      <h1>
        {{
          this.$store.state.language == "English"
            ? this.$store.state.English.dash_works_page.title
            : this.$store.state.Arabic.dash_works_page.title
        }}
      </h1>

      <WorkComponentVue
        v-for="(work, index) in this.$store.state.works"
        :key="index"
        :work_data="work"
      />
    </div>

    <DeleteWorkComponentVue />
  </div>
</template>

<script>
import axios from "axios";
import WorkComponentVue from "@/components/dash/WorkComponentVue.vue";
import DeleteWorkComponentVue from "@/components/global/dash/DeleteWorkComponentVue.vue";
export default {
  data() {
    return {
      name: "works-page",

      // page status
      page_status: "close",

      // limit of the work's documents
      limit: 5,
      // page of the works documenst
      page: 1,
    };
  },
  components: {
    WorkComponentVue,
    DeleteWorkComponentVue,
  },
  mounted() {
    // call to get works mthod
    this.get_works();

    // add event (escroll) to window
    window.addEventListener("scroll", this.handleScroll);
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
          // to open the page slowly
          this.page_status = "open";

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

        // to hidden the not found victor at message
        this.$store.state.works_not_found_message_status = "close";
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";
// darck and light English style
.works-page-darck-English-open {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  padding: 15% 0px 10px 0px;
  transition-duration: 0.5s;

  .cont {
    width: 70%;
    height: auto;
    margin: auto;

    transition-duration: 0.5s;
    opacity: 1;

    @media (max-width: $mobile) {
      width: 90%;
    }

    h1 {
      width: 100%;
      height: auto;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
      margin: 5px 0px;
      color: $white;
    }
  }
}

.works-page-darck-English-close {
  @extend .works-page-darck-English-open;
  padding: 30% 0px 10px 0px;

  .cont {
    opacity: 0;
  }
}

.works-page-light-English-open {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  background-color: $white-one;
  padding: 15% 0px 10px 0px;
  transition-duration: 0.5s;

  .cont {
    width: 70%;
    height: auto;
    margin: auto;
    transition-duration: 0.5s;
    opacity: 1;

    @media (max-width: $mobile) {
      width: 90%;
    }

    h1 {
      width: 100%;
      height: auto;
      border: 1px solid;
      border-color: transparent transparent $black transparent;
      margin: 5px 0px;
      color: $black;
    }
  }
}

.works-page-light-English-close {
  @extend .works-page-light-English-open;
  padding: 30% 0px 10px 0px;

  .cont {
    opacity: 0;
  }
}
// darck and light English style

// darck and light Arabic style
.works-page-darck-Arabic-open {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  padding: 15% 0px 10px 0px;
  transition-duration: 0.5s;

  .cont {
    width: 70%;
    height: auto;
    margin: auto;

    transition-duration: 0.5s;
    opacity: 1;

    @media (max-width: $mobile) {
      width: 90%;
    }

    h1 {
      width: 100%;
      height: auto;
      border: 1px solid;
      border-color: transparent transparent $white transparent;
      margin: 5px 0px;
      color: $white;
    }
  }
}

.works-page-darck-Arabic-close {
  @extend .works-page-darck-Arabic-open;
  padding: 30% 0px 10px 0px;

  .cont {
    opacity: 0;
  }
}

.works-page-light-Arabic-open {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  background-color: $white-one;
  padding: 15% 0px 10px 0px;
  transition-duration: 0.5s;

  .cont {
    width: 70%;
    height: auto;
    margin: auto;
    transition-duration: 0.5s;
    opacity: 1;

    @media (max-width: $mobile) {
      width: 90%;
    }

    h1 {
      width: 100%;
      height: auto;
      border: 1px solid;
      border-color: transparent transparent $black transparent;
      margin: 5px 0px;
      color: $black;
    }
  }
}

.works-page-light-Arabic-close {
  @extend .works-page-light-Arabic-open;
  padding: 30% 0px 10px 0px;

  .cont {
    opacity: 0;
  }
}
// darck and light Arabic style
</style>
