<template>
  <div :class="`nav-${this.$store.state.mood}-${this.$store.state.language}`">
    <!-- logo  -->
    <router-link to="/">
      <img src="../../assets/logo.png" alt="" />
    </router-link>
    <!-- logo  -->

    <!-- links  -->
    <div class="links">
      <router-link
        v-for="(link, index) in this.$store.state.links"
        :key="index"
        :to="link.path"
        >{{
          this.$store.state.language == "English" ? link.english : link.arabic
        }}</router-link
      >

      <router-link
        v-if="this.$store.state.skills_page_status"
        :to="this.$store.state.skills_link.path"
        >{{
          this.$store.state.language == "English"
            ? this.$store.state.skills_link.english
            : this.$store.state.skills_link.arabic
        }}</router-link
      >
    </div>
    <!-- links  -->

    <div class="icons-cont">
      <!-- mood icon -->
      <div :class="`mood-${this.$store.state.mood}`" @click="change_mood">
        <icon :icon="this.mood_icon_type" />
      </div>
      <!-- mood icon -->

      <!-- language icon -->
      <div class="language" @click="change_language">
        <img
          v-if="this.$store.state.language == `English`"
          src="../../assets/USAFLAG.png"
          alt="usa-flag"
        />
        <img
          v-if="this.$store.state.language == `Arabic`"
          src="../../assets/UAEFLAG.png"
          alt="uae-flag"
        />
      </div>
      <!-- language icon -->

      <!-- links bar icon -->
      <div
        class="links-icon-bars"
        @click="this.$store.commit('chnage_sid_bar_status')"
      >
        <icon icon="bars" />
      </div>
      <!-- links bar icon -->
    </div>
  </div>
</template>

<script>
export default {
  name: "nave-component",
  data() {
    return {
      // language icon type
      emoji_type: this.$store.state.language == "English" ? "🇺🇸" : "🇸🇾",

      // choose the mood icon type by the mood statue in store
      mood_icon_type: this.$store.state.mood == "darck" ? "sun" : "moon",
    };
  },
  methods: {
    // change mood method
    change_mood() {
      // change the mood_icon_type
      this.mood_icon_type = this.mood_icon_type == "sun" ? "moon" : "sun";

      // to change the mood in the store
      this.$store.commit("ChangeMood");
    },

    // change language method
    change_language() {
      // this.language = language_icon_type == ""
      this.emoji_type = this.emoji_type == "🇸🇾" ? "🇺🇸" : "🇸🇾";

      // change the langauge in the store
      this.$store.commit("ChangeLanguage");
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";

// darck and light English Style
.nav-darck-English {
  direction: ltr;
  width: 100%;
  height: 60px;
  backdrop-filter: blur(10px);
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 8;
  @media (max-width: $mobile) {
    justify-content: space-between;
    padding: 0px 10px;
  }

  .links {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: $mobile) {
      display: none;
    }

    a {
      padding: 10px;
      border-radius: 5px;
      color: $white;
      transition-duration: 0.3s;
      text-decoration: none;
    }

    .router-link-active {
      transition-duration: 0.5s;
      text-decoration: underline;
      // background: linear-gradient(to right, $gold-five, $gold-tow, $gold-five);
    }

    a:hover {
      transition-duration: 0.5s;
      text-decoration: underline;
    }
  }

  img {
    width: 40px;
    height: 40px;
  }

  .icons-cont {
    width: 150px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .links-icon-bars {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      cursor: pointer;
      color: $white;
      border: 1px solid $white-one;
      transition-duration: 0.5s;

      @media (min-width: $mobile) {
        display: none;
      }
    }

    .links-icon-bars:hover {
      background-color: $Navy-blue-one;
    }

    .language {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      cursor: pointer;
      color: $white;
      border: 1px solid $white-one;
      transition-duration: 0.5s;

      img {
        width: 20px;
        height: 20px;
      }
    }

    .language:hover {
      background-color: $Navy-blue-one;
    }

    .mood-darck {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      cursor: pointer;
      color: $white;
      background: linear-gradient(to top, $gold-five, $gold-tow, $gold-five);
      transition-duration: 1s;
    }

    .mood-light {
      @extend .mood-darck;
      transform: rotate(360deg);
      border-radius: 50%;
      background: linear-gradient(
        to top,
        $Navy-blue-five,
        $Navy-blue-one,
        $Navy-blue-five
      );
    }
  }
}

.nav-light-English {
  @extend .nav-darck-English;

  .links {
    a {
      color: $black;
    }
  }

  .icons-cont {
    width: 150px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .links-icon-bars {
      color: $black;
      border: 1px solid $black;
      background-color: $white-five;
    }

    .links-icon-bars:hover {
      background-color: $white-for;
    }

    .language {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      cursor: pointer;
      border: 1px solid $black;
      transition-duration: 0.5s;

      img {
        width: 20px;
        height: 20px;
      }
    }

    .language:hover {
      background-color: $white-tow;
    }

    .mood-darck {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      cursor: pointer;
      color: $white;
      background: linear-gradient(to top, $gold-five, $gold-tow, $gold-five);
      transition-duration: 1s;
    }

    .mood-light {
      @extend .mood-darck;
      transform: rotate(360deg);
      border-radius: 50%;
      background: linear-gradient(
        to top,
        $Navy-blue-five,
        $Navy-blue-one,
        $Navy-blue-five
      );
    }
  }
}
// darck and light English Style

// darck and light Arabic Style
.nav-darck-Arabic {
  direction: rtl;
  width: 100%;
  height: 60px;
  backdrop-filter: blur(10px);
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 8;

  @media (max-width: $mobile) {
    justify-content: space-between;
    padding: 0px 10px;
  }

  .links {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: $mobile) {
      display: none;
    }

    a {
      padding: 10px;
      border-radius: 5px;
      color: $white;
      transition-duration: 0.3s;
      text-decoration: none;
    }

    .router-link-active {
      transition-duration: 0.5s;
      text-decoration: underline;
      // background: linear-gradient(to right, $gold-five, $gold-tow, $gold-five);
    }

    a:hover {
      transition-duration: 0.5s;
      text-decoration: underline;
    }
  }

  img {
    width: 40px;
    height: 40px;
  }

  .icons-cont {
    width: 150px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .links-icon-bars {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      cursor: pointer;
      color: $white;
      border: 1px solid $white-one;
      transition-duration: 0.5s;

      @media (min-width: $mobile) {
        display: none;
      }
    }

    .links-icon-bars:hover {
      background-color: $Navy-blue-one;
    }

    .language {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      cursor: pointer;
      color: $white;
      border: 1px solid $white-one;
      transition-duration: 0.5s;

      img {
        width: 20px;
        height: 20px;
      }
    }

    .language:hover {
      background-color: $Navy-blue-one;
    }

    .mood-darck {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      cursor: pointer;
      color: $white;
      background: linear-gradient(to top, $gold-five, $gold-tow, $gold-five);
      transition-duration: 1s;
    }

    .mood-light {
      @extend .mood-darck;
      transform: rotate(360deg);
      border-radius: 50%;
      background: linear-gradient(
        to top,
        $Navy-blue-five,
        $Navy-blue-one,
        $Navy-blue-five
      );
    }
  }
}

.nav-light-Arabic {
  @extend .nav-darck-Arabic;

  .links {
    a {
      color: $black;
    }
  }

  .icons-cont {
    width: 150px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .links-icon-bars {
      color: $black;
      border: 1px solid $black;
      background-color: $white-five;
    }

    .links-icon-bars:hover {
      background-color: $white-for;
    }

    .language {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      cursor: pointer;
      border: 1px solid $black;
      transition-duration: 0.5s;

      img {
        width: 20px;
        height: 20px;
      }
    }

    .language:hover {
      background-color: $white-tow;
    }

    .mood-darck {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      cursor: pointer;
      color: $white;
      background: linear-gradient(to top, $gold-five, $gold-tow, $gold-five);
      transition-duration: 1s;
    }

    .mood-light {
      @extend .mood-darck;
      transform: rotate(360deg);
      border-radius: 50%;
      background: linear-gradient(
        to top,
        $Navy-blue-five,
        $Navy-blue-one,
        $Navy-blue-five
      );
    }
  }
}
// darck and light Arabic Style
</style>
