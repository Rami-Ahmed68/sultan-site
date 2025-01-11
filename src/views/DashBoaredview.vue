<template>
  <div
    :class="`dash-page-${this.$store.state.mood}-${this.$store.state.language}`"
  >
    <div :class="`sid-bar-dash-${this.sid_bar_status}`">
      <icon :icon="this.icon_type" @click="OpenOrClose" />

      <div class="links">
        <router-link
          v-for="(link, index) in this.$store.state.dash_board_links"
          :key="index"
          :to="`/${link.path}`"
        >
          {{
            this.$store.state.language == "English" ? link.english : link.arabic
          }}
        </router-link>
      </div>
    </div>

    <div class="section">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "dash-board-page",

      // uicon type
      icon_type: "arrow-right",

      // sid bar status
      sid_bar_status: "close",

      // page status
      page_status: "close",
    };
  },
  componenets: {},
  mounted() {},
  methods: {
    // open or close sid bar method
    OpenOrClose() {
      // change the sid bar status
      this.sid_bar_status = this.sid_bar_status == "open" ? "close" : "open";

      // change the icon type
      this.icon_type =
        this.icon_type == "arrow-right" ? "arrow-left" : "arrow-right";
    },
  },
};
</script>

<style lang="scss">
@import "../sass/varibels";

// dack and light English style
.dash-page-darck-English {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  display: flex;
  position: relative;

  .sid-bar-dash-open {
    position: fixed;
    left: 0%;
    z-index: 10;
    width: 30%;
    height: 100vh;
    backdrop-filter: blur(30px);

    border-radius: 5px;
    transition-duration: 0.5s;

    @media (max-width: $mobile) {
      width: 50%;
    }

    svg {
      padding: 10px;
      color: $white;
      border-radius: 5px;
      cursor: pointer;
      background-color: $Navy-blue-one;
      position: fixed;
      right: 5px;
      top: 5px;
      transition-duration: 0.5s;
    }

    .links {
      width: 100%;
      height: auto;
      margin: 25% 0px 10px 0px;

      a {
        width: 90%;
        height: 40px;
        border-radius: 5px;
        padding: 5px;
        display: flex;
        justify-content: start;
        align-items: center;
        margin: 10px 5%;
        color: $white;
        text-decoration: none;
        background-color: $Navy-blue-tow;
      }

      a:hover {
        text-decoration: underline;
      }
    }
  }

  .sid-bar-dash-close {
    @extend .sid-bar-dash-open;
    left: -50%;

    svg {
      right: -20%;

      @media (min-width: $mobile) {
        right: -80%;
      }
    }
  }

  .section {
    width: 100%;
    height: 100vh;
  }
}

.dash-page-light-English {
  direction: ltr;
  width: 100%;
  min-height: 100vh;
  background-color: $white-one;
  display: flex;
  position: relative;

  .sid-bar-dash-open {
    position: fixed;
    left: 0%;
    z-index: 10;
    width: 30%;
    height: 100vh;
    backdrop-filter: blur(30px);
    border-radius: 5px;
    transition-duration: 0.5s;

    @media (max-width: $mobile) {
      width: 50%;
    }

    svg {
      padding: 10px;
      color: $black;
      border-radius: 5px;
      cursor: pointer;
      background-color: $white-one;
      position: fixed;
      right: 5px;
      top: 5px;
      transition-duration: 0.5s;
    }

    .links {
      width: 100%;
      height: auto;
      margin: 25% 0px 10px 0px;

      a {
        width: 90%;
        height: 40px;
        border-radius: 5px;
        padding: 5px;
        display: flex;
        justify-content: start;
        align-items: center;
        margin: 10px 5%;
        color: $black;
        text-decoration: none;
        background-color: $white-tow;
      }

      a:hover {
        text-decoration: underline;
      }
    }
  }

  .sid-bar-dash-close {
    @extend .sid-bar-dash-open;
    left: -50%;

    svg {
      right: -20%;

      @media (min-width: $mobile) {
        right: -80%;
      }
    }
  }

  .section {
    width: 100%;
    height: 100vh;
  }
}
// dack and light English style

// dack and light Arabic style
.dash-page-darck-Arabic {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  background-color: $Navy-blue-for;
  display: flex;
  position: relative;

  .sid-bar-dash-open {
    position: fixed;
    left: 0%;
    z-index: 10;
    width: 30%;
    height: 100vh;
    backdrop-filter: blur(30px);

    border-radius: 5px;
    transition-duration: 0.5s;

    @media (max-width: $mobile) {
      width: 50%;
    }

    svg {
      padding: 10px;
      color: $white;
      border-radius: 5px;
      cursor: pointer;
      background-color: $Navy-blue-one;
      position: fixed;
      right: 5px;
      top: 5px;
      transition-duration: 0.5s;
    }

    .links {
      width: 100%;
      height: auto;
      margin: 25% 0px 10px 0px;

      a {
        width: 90%;
        height: 40px;
        border-radius: 5px;
        padding: 5px;
        display: flex;
        justify-content: start;
        align-items: center;
        margin: 10px 5%;
        color: $white;
        text-decoration: none;
        background-color: $Navy-blue-tow;
      }

      a:hover {
        text-decoration: underline;
      }
    }
  }

  .sid-bar-dash-close {
    @extend .sid-bar-dash-open;
    left: -50%;

    svg {
      right: -20%;

      @media (min-width: $mobile) {
        right: -80%;
      }
    }
  }

  .section {
    width: 100%;
    height: 100vh;
  }
}

.dash-page-light-Arabic {
  direction: rtl;
  width: 100%;
  min-height: 100vh;
  background-color: $white-one;
  display: flex;
  position: relative;

  .sid-bar-dash-open {
    position: fixed;
    left: 0%;
    z-index: 10;
    width: 30%;
    height: 100vh;
    backdrop-filter: blur(30px);
    border-radius: 5px;
    transition-duration: 0.5s;

    @media (max-width: $mobile) {
      width: 50%;
    }

    svg {
      padding: 10px;
      color: $black;
      border-radius: 5px;
      cursor: pointer;
      background-color: $white-one;
      position: fixed;
      right: 5px;
      top: 5px;
      transition-duration: 0.5s;
    }

    .links {
      width: 100%;
      height: auto;
      margin: 25% 0px 10px 0px;

      a {
        width: 90%;
        height: 40px;
        border-radius: 5px;
        padding: 5px;
        display: flex;
        justify-content: start;
        align-items: center;
        margin: 10px 5%;
        color: $black;
        text-decoration: none;
        background-color: $white-tow;
      }

      a:hover {
        text-decoration: underline;
      }
    }
  }

  .sid-bar-dash-close {
    @extend .sid-bar-dash-open;
    left: -50%;

    svg {
      right: -20%;

      @media (min-width: $mobile) {
        right: -80%;
      }
    }
  }

  .section {
    width: 100%;
    height: 100vh;
  }
}
// dack and light Arabic style
</style>
