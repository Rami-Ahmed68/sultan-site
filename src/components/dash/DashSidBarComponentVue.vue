<template>
  <div
    :class="`dash-sid-bar-${this.$store.state.mood}-${this.$store.state.language}`"
  >
    asdasasd
    <icon :icon="this.icon_type" />

    <div class="links">
      <router-link
        v-for="(link, index) in this.$store.state.dash_board_links"
        :key="index"
        :to="link.path"
      >
        {{
          this.$store.state.langauge == "English" ? link.english : link.arabic
        }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "dash-sid-bar-component",
  data() {
    return {
      // icon type
      icon_type: "arrow-right",
    };
  },
};
</script>

<style lang="scss">
@import "../../sass/varibels";
// dack and light English style
.dash-sid-bar-darck-English {
  width: 30%;
  height: 98vh;
  margin: 1vh 0px;
  background-color: green;
  position: absolute;
  top: 0%;
}
// dack and light English style
</style>
