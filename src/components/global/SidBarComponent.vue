<template>
  <div
    :class="`sid-bar-${this.$store.state.language}-${this.$store.state.mood}-${this.$store.state.sid_bar_status}`"
  >
    <!-- links  -->
    <div class="links">
      <router-link
        v-for="(link, index) in this.$store.state.links"
        :key="index"
        :to="link.path"
        @click="this.$store.commit('chnage_sid_bar_status')"
        >{{
          this.$store.state.language == "English" ? link.english : link.arabic
        }}</router-link
      >

      <router-link
        v-if="this.$store.state.skills_page_status"
        :to="this.$store.state.skills_link.path"
        @click="this.$store.commit('chnage_sid_bar_status')"
        >{{
          this.$store.state.language == "English"
            ? this.$store.state.skills_link.english
            : this.$store.state.skills_link.arabic
        }}</router-link
      >

      <router-link
        v-if="this.$store.state.admin_data.admin"
        :to="this.$store.state.dashboard_link.path"
        @click="this.$store.commit('chnage_sid_bar_status')"
        >{{
          this.$store.state.language == "English"
            ? this.$store.state.dashboard_link.english
            : this.$store.state.dashboard_link.arabic
        }}</router-link
      >

      <a :href="`${this.$store.state.developer.href}`" target="_blank"
        >{{
          this.$store.state.language == "English"
            ? this.$store.state.developer.english
            : this.$store.state.developer.arabic
        }}
      </a>
    </div>
    <!-- links  -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";

// darck and light English style
.sid-bar-English-darck-open {
  direction: ltr;
  width: 50%;
  height: auto;
  position: fixed;
  z-index: 10;
  right: 20px;
  top: 70px;
  border-radius: 5px;
  background-color: $Navy-blue-tow;
  box-shadow: 0 0 10px $black;
  transition-duration: 0.5s;
  overflow: hidden;
  opacity: 1;

  @media (min-width: $mobile) {
    display: none;
  }

  .links {
    width: 100%;
    height: auto;
    margin: 10px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    a {
      width: 90%;
      height: 40px;
      border-radius: 5px;
      cursor: pointer;
      text-decoration: none;
      transition-duration: 0.4s;
      display: flex;
      justify-content: start;
      align-items: center;
      padding: 0px 10px;
      color: $white;
    }

    a:hover {
      text-decoration: underline;
      background-color: $Navy-blue-one;
    }
  }
}

.sid-bar-English-darck-close {
  @extend .sid-bar-English-darck-open;
  width: 10%;
  overflow: hidden;
  right: -10%;
  top: -5px;
  transition-duration: 0.5s;
  opacity: 0;
}

.sid-bar-English-light-open {
  direction: ltr;
  width: 50%;
  height: auto;
  position: fixed;
  z-index: 10;
  right: 20px;
  top: 70px;
  border-radius: 5px;
  background-color: $white-tow;
  box-shadow: 0 0 10px $black;
  transition-duration: 0.5s;
  overflow: hidden;
  opacity: 1;

  @media (min-width: $mobile) {
    display: none;
  }

  .links {
    width: 100%;
    height: auto;
    margin: 10px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    a {
      width: 90%;
      height: 40px;
      border-radius: 5px;
      cursor: pointer;
      text-decoration: none;
      transition-duration: 0.4s;
      display: flex;
      justify-content: start;
      align-items: center;
      padding: 0px 10px;
      color: $black;
    }

    a:hover {
      text-decoration: underline;
      background-color: $white-one;
    }
  }
}

.sid-bar-English-light-close {
  @extend .sid-bar-English-light-open;
  width: 10%;
  overflow: hidden;
  right: -10%;
  top: -5px;
  transition-duration: 0.5s;
  opacity: 0;
}
// darck and light English style

// darck and light Arabic style
.sid-bar-Arabic-darck-open {
  direction: rtl;
  width: 50%;
  height: auto;
  position: fixed;
  z-index: 10;
  left: 20px;
  top: 70px;
  border-radius: 5px;
  background-color: $Navy-blue-tow;
  box-shadow: 0 0 10px $black;
  transition-duration: 0.5s;
  overflow: hidden;
  opacity: 1;

  @media (min-width: $mobile) {
    display: none;
  }

  .links {
    width: 100%;
    height: auto;
    margin: 10px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    a {
      width: 90%;
      height: 40px;
      border-radius: 5px;
      cursor: pointer;
      text-decoration: none;
      transition-duration: 0.4s;
      display: flex;
      justify-content: start;
      align-items: center;
      padding: 0px 10px;
      color: $white;
    }

    a:hover {
      text-decoration: underline;
      background-color: $Navy-blue-one;
    }
  }
}

.sid-bar-Arabic-darck-close {
  @extend .sid-bar-Arabic-darck-open;
  width: 10%;
  overflow: hidden;
  left: -10%;
  top: -5px;
  transition-duration: 0.5s;
  opacity: 0;
}

.sid-bar-Arabic-light-open {
  direction: rtl;
  width: 50%;
  height: auto;
  position: fixed;
  z-index: 10;
  left: 20px;
  top: 70px;
  border-radius: 5px;
  background-color: $white-tow;
  box-shadow: 0 0 10px $black;
  transition-duration: 0.5s;
  overflow: hidden;
  opacity: 1;

  @media (min-width: $mobile) {
    display: none;
  }

  .links {
    width: 100%;
    height: auto;
    margin: 10px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    a {
      width: 90%;
      height: 40px;
      border-radius: 5px;
      cursor: pointer;
      text-decoration: none;
      transition-duration: 0.4s;
      display: flex;
      justify-content: start;
      align-items: center;
      padding: 0px 10px;
      color: $black;
    }

    a:hover {
      text-decoration: underline;
      background-color: $white-one;
    }
  }
}

.sid-bar-Arabic-light-close {
  @extend .sid-bar-Arabic-light-open;
  width: 10%;
  overflow: hidden;
  left: -10%;
  top: -5px;
  transition-duration: 0.5s;
  opacity: 0;
}
// darck and light Arabic style
</style>
